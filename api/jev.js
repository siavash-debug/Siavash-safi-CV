import { experimental_evaluate } from "ai";

const MAX_MESSAGE_LENGTH = 2000;

function json(status, body) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" }
  });
}

export default {
  async fetch(request) {
    if (request.method !== "POST") {
      return json(405, { error: "Method not allowed" });
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return json(400, { error: "Invalid request" });
    }

    if (!body || typeof body.message !== "string") {
      return json(400, { error: "Invalid request" });
    }

    const message = body.message.trim();

    if (message.length === 0) {
      return json(400, { error: "Invalid request" });
    }

    if (message.length > MAX_MESSAGE_LENGTH) {
      return json(400, { error: "Invalid request" });
    }

    if (!process.env.AI_GATEWAY_API_KEY) {
      return json(500, { error: "Jev evaluation failed" });
    }

    try {
      const result = await experimental_evaluate({
        model: "typesafe-ai/jev",
        state: { message },
        questions: {
          intent: {
            type: "choice",
            instructions: "What is the visitor's primary intent?",
            criteria: {
              hire: "The visitor wants to hire or recruit Siavash for a role or project",
              contact: "The visitor wants to get in touch or communicate with Siavash",
              projects: "The visitor is asking about Siavash's projects or portfolio work",
              skills: "The visitor is asking about Siavash's technical skills or expertise",
              about: "The visitor is asking about Siavash's background, experience, or personal info",
              other: "The visitor's intent does not match any of the above categories"
            }
          },
          urgent: {
            type: "boolean",
            instructions: "Is this message time-sensitive or urgent?",
            criteria: {
              true: "Contains deadlines, urgency language, or immediate action requests",
              false: "General inquiry with no time pressure"
            }
          },
          visitor_type: {
            type: "choice",
            instructions: "What type of visitor is this?",
            criteria: {
              recruiter: "A recruiter, hiring manager, or talent acquisition professional",
              client: "A potential client or business partner looking for services",
              developer: "A fellow developer or engineer exploring technical content",
              visitor: "A general website visitor browsing the portfolio",
              other: "Does not fit any of the above visitor types"
            }
          },
          needs_human: {
            type: "boolean",
            instructions: "Does this message require a human response from Siavash?",
            criteria: {
              true: "Requires personal attention, direct reply, or human decision-making",
              false: "Can be handled by automated routing or informational responses"
            }
          }
        }
      });

      const answers = result.answers;

      return json(200, {
        intent: answers.intent.choice,
        urgent: answers.urgent.probability >= 0.5,
        visitor_type: answers.visitor_type.choice,
        needs_human: answers.needs_human.probability >= 0.5
      });
    } catch {
      return json(502, { error: "Jev evaluation failed" });
    }
  }
};
