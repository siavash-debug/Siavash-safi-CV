# Security Policy

## Supported code

This repository currently contains the LOTA.design portfolio website
(`index.html`) and its brand assets. Security reports should focus on the
code and assets actually present in this repository.

## Reporting a vulnerability

Please do not open public issues containing exploit details, proofs of
concept, or reproduction steps for security problems.

Report vulnerabilities privately:

- prefer a private security report through the repository's available
  security reporting mechanism on the hosting platform; or
- contact the repository owner through the owner profile at
  https://github.com/siavash-debug and ask for a private channel before
  sharing technical details.

No dedicated security email address is published at this time. Do not
invent or assume one.

## Scope

In-scope areas include:

- `index.html` and the other code actually present in this repository,
  including its HTML, CSS, and client-side JavaScript;
- published website functionality served from this repository;
- security or privacy issues caused by code or assets actually present
  in this repository;
- vulnerabilities in third-party components actually used by the
  published code, where applicable.

If additional LOTA application code is later published in this
repository, its security scope will be updated accordingly. API
surfaces, authentication, workflow execution, artifact storage, and
other backend infrastructure are not currently part of this repository.

Out of scope: social engineering, physical attacks, spam, denial of
service by volume, and any systems not operated for this project.

## Responsible disclosure

When researching or reporting, please:

- report privately and allow a reasonable time for a fix before any
  public disclosure;
- include clear reproduction steps and affected components;
- avoid accessing, modifying, or exfiltrating data that is not yours;
- avoid destructive testing, degraded service, or privacy violations;
- stop and report as soon as you can demonstrate a vulnerability.

We appreciate coordinated, good-faith research.
