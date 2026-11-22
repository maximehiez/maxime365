---
title: "Claude Code on Foundry with the Claude apps gateway"
meta_title: ""
description: ""
date: 2026-11-20T10:00:00-05:00
image: "/images/blog/foundry/foundry_claude_code_apps_gateway_thumbnail.png"
categories: ["Foundry"]
author: "Maxime Hiez"
tags: ["Claude", "AI", "Agentic"]
draft: false
---
---

##### Introduction
Routing *Claude Code* through your own *Azure* infrastructure is possible : *Techcommunity* has shown how, using *Claude apps gateway*, Anthropic's gateway, with *Microsoft Foundry* as the inference source. It also describes a deployment on *Azure Container Apps* with an admin console, but that one comes from an open source sample, not a product. The documentation gives no status (Preview or general availability), price or license, and no *Message Center* or roadmap ID applies.

---

##### What the Claude apps gateway does
The gateway is an Anthropic product, a server built into the *Claude Code* binary and tested with every release. It provides :
- SSO sign-in (OIDC), with *Microsoft Entra ID* among the listed providers
- Model access and managed settings by group
- Spend limits and OTLP telemetry
- Routing to several upstream providers (including *Microsoft Foundry*), with failover

![image](/images/blog/foundry/foundry_claude_code_apps_gateway_001.png)

For *Foundry*, the recommended option, *use_azure_ad: true*, goes through *DefaultAzureCredential*, so through a managed identity. The gateway's identity must hold the *Foundry User* or *Cognitive Services User* role on the *Foundry* resource.

Anthropic aims it at organizations that must route inference through their own cloud, for data residency for example. Otherwise, *Claude Enterprise* may be a better fit.

---

##### The Azure deployment and its console
Foundry presents an open source deployment of the gateway in *Azure Container Apps*, with a small web application, the *UI Console*. It manages spend limits, developer roles, model access and chargeback. The code is in the *claude-apps-gateway-foundry* repository, MIT license, hosted on a personal GitHub account. Its README describes it as a working example for customer-managed infrastructure, not a supported production deployment.

Foundry states that :
- Console access goes through *Container Apps* authentication and requires the *AdminUi.Admin* role.
- Limits apply to the organization, a role or a person, per day, week or month, and are checked before every request.
- Chargeback relies on five tags per person (department, cost center, company, office, division), stored in *PostgreSQL* and not in *Entra ID*.

To deploy it, you need to be *Owner* of the subscription or resource group, have a *Foundry* account with the *Claude* models already deployed (the installer does not create them) and be able to register *Entra* applications. One step requires *Privileged Role Administrator* or *Global Administrator*, to grant *Microsoft Graph* permissions to the console.

In the sample's test topology, the gateway has a public address (*Entra* sign-in, optional IP range) and developers go through a dedicated profile, because the built-in sign-in of *Claude Code* requires a private address. A tutorial in the repository covers a gateway with no public endpoint.

---

##### What admins need to know
The Anthropic and Foundry documentation set several limits :
- <u>Version</u> : *Claude Code* 2.1.195 or later on the gateway server and on every developer workstation
- <u>Identity</u> : OIDC only (no SAML or LDAP), one issuer per gateway
- <u>Database</u> : *PostgreSQL* 11 or later is required
- <u>Server</u> : Linux only (macOS for local development), no Windows
- <u>Network</u> : HTTPS and a private address. *Claude Code* refuses a gateway whose name resolves to a public IP address
- <u>Automation</u> : No unattended service token flow, so CI pipelines cannot use the gateway
- <u>Attribution</u> : *Foundry* sees every request coming from the gateway's single managed identity, and per-person attribution exists only in the gateway's records and the console's chargeback

The private address requirement is a safeguard : the gateway can push settings, including hooks that run commands on developer workstations. It must therefore stay internal.

Spend limits are set by organization, group or user, per day, week or month, through the admin API. The amounts are estimates in USD, *"a circuit breaker rather than an invoice"* ; for billing, the provider's usage reports are authoritative. If *PostgreSQL* is unreachable, limit enforcement fails open by default, unless *enforcement.fail_closed_on_error: true* is set.

Anthropic's admin interface is limited to spend limits, in *Claude Desktop* 4.23118.0 or later. Everything else goes through the YAML file, with a redeployment.

Signing in through the gateway replaces the *Claude for Teams* or *Enterprise* sign-in : sessions do not pick up the managed settings from the claude.ai admin console, and SCIM, *Claude Code* on the web and mobile are unavailable.

---

##### Conclusion
The gateway is useful for an organization that must keep inference in its own cloud and control model access and costs by group (on the *Foundry* side, everything goes through a single identity), with its constraints : Linux, PostgreSQL, OIDC and a private network. For plain access to *Claude* through *Foundry*, the direct *Entra ID* connection (*Azure CLI* credentials, *CLAUDE_CODE_USE_FOUNDRY=1*) is enough and avoids running a server. The *Container Apps* deployment and its console are an example to read and try in a lab, not a production baseline : the gateway's status, price and possible license remain to be confirmed with Anthropic before any project.

---

##### Sources
[Microsoft - Techcommunity](https://techcommunity.microsoft.com/t5/microsoft-foundry-blog/claude-code-on-microsoft-foundry-with-claude-apps-gateway-and-ui/ba-p/4574066)

[Microsoft Learn - Configure Claude Code for Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/foundry-models/how-to/configure-claude-code)

[Anthropic - Claude apps gateway](https://code.claude.com/docs/en/claude-apps-gateway)

[Anthropic - Deploying and operating the gateway](https://code.claude.com/docs/en/claude-apps-gateway-deploy)

[Anthropic - Gateway configuration reference](https://code.claude.com/docs/en/claude-apps-gateway-config)

[Anthropic - Gateway spend limits](https://code.claude.com/docs/en/claude-apps-gateway-spend-limits)

[GitHub - claude-apps-gateway-foundry](https://github.com/naveenneog/claude-apps-gateway-foundry)

---


Did you enjoy this post ? If you have any questions, comments or suggestions, please feel free to send me a message from the contact form.

Don't forget to follow us and share this post.