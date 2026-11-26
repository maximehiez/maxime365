---
title: "Microsoft MCP Server for IT Admins for Entra and Intune"
meta_title: ""
description: ""
date: 2026-11-25T10:00:00-05:00
image: "/images/blog/m365/m365_mcp_server_for_it_admins_thumbnail.png"
categories: ["Microsoft 365"]
author: "Maxime Hiez"
tags: ["MCP", "Agent", "Security"]
draft: false
---
---

##### Introduction
The *Microsoft MCP Server for IT Admins* lets an MCP-compatible AI assistant read and manage *Microsoft Entra* data, and read *Microsoft Intune* data, with the signed-in user's rights. The Techcommunity post of November 17, 2026 announces it as generally available, and the Learn pages now document it under this name, with no mention of a preview. The old *Microsoft MCP Server for Enterprise* is deprecated.

---

##### A status and a name to verify
The sources don't quite say the same thing :
- <u>Techcommunity</u> : The server is generally available under the IT Admins name
- <u>Ignite 2026 Book of News</u> : Also generally available, but under the old name *Enterprise*, and listed under Entra only
- <u>Microsoft Learn</u> : The pages document *IT Admins* with no preview label, and state that *Enterprise* is deprecated. They show neither a general availability date nor any status mention

Only the Techcommunity post, then, speaks of general availability for *IT Admins*.

The endpoint changes with the name : *https://mcp.svc.cloud.microsoft/admin* replaces *https://mcp.svc.cloud.microsoft/enterprise*. The latter keeps working for a few months, with no exact date, and MCP clients must migrate to the new one.

---

##### What the server allows : Entra, Intune and Purview
The post announces a connection to Entra, *Microsoft Purview* and Intune data. Learn describes Entra as read and manage and Intune as read-only, without the reporting APIs. Purview appears in the announcement but not in the Learn documentation, which says support will be expanded, with no date.

The read tools are *microsoft_graph_suggest_queries*, *microsoft_graph_get* and *microsoft_graph_list_properties*. Learn adds *microsoft_graph_post*, *_put*, *_patch* and *_delete*, as well as *request_access* for an access package assignment, a *PIM* role activation or a permission grant.

The documentation gives examples such as *"Which users didn't sign in last month?"*, *"Is MFA enabled for all administrators?"* or, for writes, *"Create a user account for a new hire and add it to the Sales group"*.

---

##### Read or write ?
Every write action asks the user for confirmation through MCP's *elicitation* mechanism, and requires a client that supports version *2026-07-28* of the protocol. Without it, the server refuses the write. The *Claude* web, desktop and mobile clients don't have this feature yet and remain read-only : Learn recommends *Claude Code* for writes.

Writes are possible, then, but confirmed one by one : test them in a lab tenant first.

---

##### Connecting and controlling access
Permissions are delegated only : a request succeeds only if both the Graph permissions granted to the client and the signed-in user's roles allow it. The assistant therefore sees what the user sees, with their roles and *PIM* activations. Nothing works until an administrator has prepared the tenant, once per client :
1. Register one app per client (single tenant, *Accounts in this organizational directory only*), with the redirect URI added under *Mobile and desktop applications*, not under *Web*.
2. Add the three required delegated *Microsoft Graph* permissions : *MCP.Server.Access* (admin consent required), *User.Read* and *EntitlementMgmt-SubjectAccess.ReadWrite*, plus, if needed, the Graph permissions specific to your scenarios.
3. Grant admin consent from the API permissions page, with the *Cloud Application Administrator* or *Application Administrator* role, and set *Assignment required ?* to *Yes* on the enterprise application if needed, with users or groups assigned.
4. Configure the client with the endpoint URL and the application ID.

The documented clients are *Visual Studio Code*, *GitHub Copilot* (app and CLI), *Claude Code*, *ChatGPT* and *Claude* (web, desktop, mobile), as well as *Microsoft Foundry* and *Copilot Studio*. The last two connect from a connector hosted on the server side, with a Web-type registration (confidential client), for read queries : a client secret for *Foundry*, federated credentials by default for *Copilot Studio*.

The old *MCP.{graph-scope}* scopes and the *Grant-EntraBetaMCPServerPermission* and *Revoke-EntraBetaMCPServerPermission* cmdlets belong to the deprecated *Enterprise* server : */admin* doesn't use them. Grant it only the Graph permissions your scenarios need, for example *User.Read.All* instead of *MCP.User.Read.All*, and for read-only use, only read permissions and read tools.

No tenant-wide switch is documented for */admin*. Learn also states that the server isn't provisioned in the tenant. The documented controls are per application and per user : limited Graph permissions, *Assignment required ?*, roles and *PIM*, tool selection and write confirmation. My own interpretation, not documented : removing a client's consent or deleting its registration should cut its access.

---

##### Logging, limits and licenses
Every request from an MCP client appears in the *Microsoft Graph* activity logs, once enabled, by filtering on the application *e8c77dc2-69b3-43f4-bc51-3213c9d915b4* (*MicrosoftGraphActivityLogs* table, queryable with KQL).

The known limits are the following :
- <u>Throttling</u> : 100 requests per minute per user, and tools that call Microsoft Graph remain subject to its throttling limits
- <u>Clouds</u> : Public cloud only, no US Government L4 and L5 or 21Vianet
- <u>Licenses</u> : No additional cost or license. The licenses for the data being queried still apply, for example *Entra ID Governance* or *P2* for *PIM*

---

##### Conclusion
Reading is already worth a trial : user rights, per-client consent and Graph logs to trace everything. Test writes in a lab tenant, migrate clients still on */enterprise* to */admin* before the grace period ends, and don't plan around Purview until Learn documents it.

---

##### Sources
[Microsoft - Techcommunity](https://techcommunity.microsoft.com/blog/microsoft-entra-blog/ai-is-changing-access-see-how-microsoft-entra-helps-you-stay-ahead-/4556456)

[Microsoft - Book of News](https://news.microsoft.com/events/ignite/2026/book-of-news)

[Microsoft Learn - Overview of Microsoft MCP Server for IT Admins](https://learn.microsoft.com/en-us/graph/mcp-server/overview)

[Microsoft Learn - Get started with Microsoft MCP Server for IT Admins](https://learn.microsoft.com/en-us/graph/mcp-server/get-started)

[Microsoft Learn - Sample prompts for Microsoft MCP Server for IT Admins](https://learn.microsoft.com/en-us/graph/mcp-server/mcp-server-sample-prompts)

[Microsoft Learn - Manage Microsoft MCP Server for Enterprise permissions](https://learn.microsoft.com/en-us/powershell/entra-powershell/how-to-manage-mcp-server-permissions?view=entra-powershell)

[Microsoft Learn - Use Microsoft MCP Server for IT Admins from Microsoft Foundry](https://learn.microsoft.com/en-us/graph/mcp-server/use-it-admins-mcp-server-microsoft-foundry)

[Microsoft Learn - Use Microsoft MCP Server for IT Admins from Copilot Studio](https://learn.microsoft.com/en-us/graph/mcp-server/use-it-admins-mcp-server-copilot-studio)

---


Did you enjoy this post ? If you have any questions, comments or suggestions, please feel free to send me a message from the contact form.

Don't forget to follow us and share this post.