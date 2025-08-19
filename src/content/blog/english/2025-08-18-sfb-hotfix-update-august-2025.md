---
title: "August 2025 update for Skype for Business Server"
meta_title: ""
description: ""
date: 2025-08-18T10:00:00-05:00
image: "/images/blog/sfb/sfb_hotfix_update_august_2025_thumbnail.png"
categories: ["Skype for Business"]
author: "Maxime Hiez"
tags: ["Mise à jour"]
draft: false
---
---

##### Introduction
Microsoft continues to actively support *Skype for Business Server*, particularly its *Subscription Edition* (SE), with regular patch releases. The August 2025 hotfix provides several important stability, security, and compatibility improvements, while also paving the way for future product developments.

---

##### Supported Versions
The August 2025 hotfix applies to the following versions :
- Skype for Business Server 2015 CU13 (build 6.0.9319.881) — KB3061064
- Skype for Business Server 2019 CU8 (build 7.0.2046.553) — KB4470124
- Skype for Business Server Subscription Edition (SE) RTM (build 7.0.2046.820) — KB5065372

These builds are the minimum versions required to take advantage of the new dedicated hybrid app feature.

---

##### Key new features and recommendations
**<u>Dedicated hybrid application</u>**

- Until now, Skype for Business used a Microsoft-managed *Shared Service Principal* for authentication and access to *Exchange Online* (archives, presence via calendar, profile picture synchronization).
- Microsoft now strongly recommends — and will soon require — the implementation of a *dedicated hybrid application* managed by each organization via their Entra ID tenant. Failure to do so will result in the discontinuation of hybrid functionality.
<br/><br/>

**<u>Continuity of *Skype Meetings Application*</u>**

- If this fix is not applied before October 15, 2025, the online meetings module may no longer function correctly. Administrators should therefore act quickly.
<br/><br/>

**<u>PowerShell script to run</u>**

- For Skype for Business Server 2015, it is imperative to run the *add_sfbassets.ps1* script after installing the patch to ensure continued functionality of the Skype Meetings Application.
- For the Subscription Edition, Microsoft also provides the *ConfigureSkypeforBusinessHybridApplication.ps1* script to run on the Front End server to configure the dedicated hybrid application.

---

##### Recommended Action Plan for Administrators
Hotfixes are available via the *Microsoft Download Center* and can be installed manually or using standard administrative tools. It is recommended to:
1. Back up your environment before any update
2. Retrieve the appropriate hotfixes based on your role (*Core*, *Front End*, *Edge*, *Web Components*, *Enterprise Web App*)
3. Use the *Server Update Installer* with elevated rights (UAC disabled or run as administrator)
4. Run the script (*<u>SFB 2015: add_sfbassets.ps1</u>* or *<u>SFB SE: ConfigureSkypeforBusinessHybridApplication.ps1</u>*)
5. Restart services after installation to ensure the hotfixes are taken into account

---

##### Why this update is crucial
- Enhanced security : The dedicated hybrid application improves control, traceability, and authentication security between on-premises environments and Exchange Online.
- Maintains hybrid functionality : Without this installation, critical features, such as archiving and presence, may cease to function.
- Meeting continuity : Ensuring the functionality of Skype Meetings Application beyond October 15th is essential to avoid major disruptions within the organization.

---

##### Conclusion
The August 2025 hotfix update for Skype for Business Server is much more than a simple security fix : it represents a transformation of the hybrid architecture, replacing a shared service model with a more secure and controlled dedicated model. Administrators have a crucial window of opportunity to act : apply updates according to the version, run the provided scripts, and ensure that hybrid and meeting features remain functional after October 15, 2025.

A well-planned transition will preserve the user experience while strengthening the infrastructure's security posture.

---

##### Sources
[Microsoft - Techcommunity](https://techcommunity.microsoft.com/blog/skype_for_business_blog/released-august-2025-skype-for-business-server-hotfix-updates/4445144)

[Windows Forum - Dedicated hybrid app for Skype for Business Hybrid](https://windowsforum.com/threads/august-2025-dedicated-hybrid-app-for-skype-for-business-hybrid-act-by-oct-15.378059)

[Microsoft - KB5065372](https://support.microsoft.com/en-us/topic/updates-for-skype-for-business-server-subscription-edition-se-kb5065372-45f6768c-d60e-4ac3-b60e-0f850b9911cd)

[Microsoft - KB4470124](https://support.microsoft.com/en-us/topic/updates-for-skype-for-business-server-2019-kb4470124-890f4878-c6fe-f71b-c85f-db2acc284b94)

[Microsoft - KB3061064](https://support.microsoft.com/en-us/topic/updates-for-skype-for-business-server-2015-kb3061064-7c3cdc53-6d6d-0c1e-e2ee-2b598c53cc7e)

---


Did you enjoy this post ? If you have any questions, comments or suggestions, please feel free to send me a message from the contact form.

Don't forget to follow us and share this post.