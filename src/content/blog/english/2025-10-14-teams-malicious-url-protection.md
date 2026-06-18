---
title: "Malicious URL protection in Teams"
meta_title: ""
description: ""
date: 2025-10-14T10:00:00-05:00
image: "/images/blog/teams/teams_malicious_url_protection_thumbnail.png"
categories: ["Teams"]
author: "Maxime Hiez"
tags: ["Safe Links", "Phishing", "PowerShell"]
draft: false
---
---

##### Introduction
In a world where *phishing* attacks and malicious links are constantly on the rise, Microsoft is strengthening Microsoft Teams security with a native malicious URL protection feature. This new option helps detect, block, and report dangerous links shared in Teams conversations.

---

##### How does it work ?
When a user sends a message containing a URL in a chat, channel, or meeting conversation, the URL is automatically analyzed using the *Microsoft Defender* threat intelligence database. If a dangerous link is detected, Teams displays a warning to the sender and all recipients of the conversation.

![image](/images/blog/teams/teams_malicious_url_protection_001.png)

---

##### How to enable it ?
This feature is still in *Public Preview* and requires an administrator to enable it, but it will be enabled by default once *General Availability* is available.

1. Log in to the Microsoft Teams Admin Center.
2. In the left menu, click *<u>Messaging</u>*, then *<u>Messaging settings</u>*, and enable the *Scan messages for unsafe links* option.
3. Save to apply the changes.

![image](/images/blog/teams/teams_malicious_url_protection_002.png)

---

##### Configuration in PowerShell
You can also configure the protection feature via the following PowerShell commands :
```powershell
Connect-MicrosoftTeams

Set-CsTeamsMessagingConfiguration -Identity Global -UrlReputationCheck "Enabled"
```

---

##### Conclusion
With malicious URL protection in Teams, Microsoft is strengthening its built-in security strategy within Microsoft 365. This feature allows organizations to better protect their users from online threats without compromising productivity or the collaboration experience. This is a critical step forward for securing communications in a hybrid work environment.

---

##### Sources
[Microsoft Learn - Malicious URL protection](https://learn.microsoft.com/en-us/microsoftteams/malicious-url-protection-teams)

---


Did you enjoy this post ? If you have any questions, comments or suggestions, please feel free to send me a message from the contact form.

Don't forget to follow us and share this post.