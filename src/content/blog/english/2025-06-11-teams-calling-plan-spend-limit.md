---
title: "How to set up a calling plan spend limit in Teams"
meta_title: ""
description: ""
date: 2025-06-11T11:00:00-05:00
image: "/images/blog/teams/tuto/teams_calling_plan_spend_limit_thumbnail.png"
categories: ["Teams", "Tutorial"]
author: "Maxime Hiez"
tags: ["Licenses", "Telephony", "Calling Plan", "Pay-As-You-Go"]
draft: false
---
---

##### Introduction
Businesses interested in using Microsoft Teams as their single provider for telephony services, but reluctant due to the high cost of calling plans, can choose a *Pay-As-You-Go* billing approach, facilitating their PBX migration to Teams. Licensed users can receive calls for free, while outgoing calls to local and international numbers are billed per minute via *Communication credits* or post-usage. By applying a usage limit, it is now possible to control consumption so as not to exceed a defined limit.

---

##### Prerequisites
**<u>Microsoft Teams telephony enabled</u>**
- *Calling Plan* configuration in *Pay-As-You-Go* mode.

**<u>Administrator role</u>**
- An account with the *Global Administrator* or *Teams Administrator* role to access the Microsoft Teams Admin Center.

---

##### Step 1 : Sign in to the Microsoft Teams admin center
Sign in to the Microsoft Teams Admin Center by opening your web browser to https://admin.teams.microsoft.com.

---

##### Step 2 : Enable monthly spending limit
In the left menu, click *<u>Voice</u>* then *<u>Calling policies</u>*, and edit the default calling policy (you can also create a new one).

![image](/images/blog/teams/tuto/teams_calling_plan_spend_limit_001.png)

Activate the *Enable calling plans spend limit* switch and enter the value corresponding to the amount (in local currency) after which you want to block calls.

![image](/images/blog/teams/tuto/teams_calling_plan_spend_limit_002.png)

---

##### Configuration in PowerShell
You can configure the new *CallingSpendUserLimit* attribute via the following PowerShell commands :
```powershell
Connect-MicrosoftTeams

Set-CsTeamsCallingPolicy -Identity Global -CallingSpendUserLimit 150 -EnableSpendLimits $true
```

The configuration may take several minutes to be effective.

---

##### User experience
With this new configuration, users will no longer be able to make outgoing PSTN calls once they reach their set limit.

---

##### Conclusion
You now know how to control your users' phone consumption in Teams.

---

##### Sources
[Microsoft Learn - Microsoft Teams calling plans](https://learn.microsoft.com/en-us/microsoftteams/calling-plans-for-office-365)

[Microsoft Learn - Set-CsTeamsCallingPolicy](https://learn.microsoft.com/en-us/powershell/module/teams/set-csteamscallingpolicy?view=teams-ps)

---


Did you enjoy this post ? If you have any questions, comments or suggestions, please feel free to send me a message from the contact form.

Don't forget to follow us and share this post.