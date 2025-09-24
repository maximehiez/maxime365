---
title: "Sensitive content detection in Teams meetings"
meta_title: ""
description: ""
date: 2025-09-25T10:00:00-05:00
image: "/images/blog/teams/teams_sensitive_content_detection_in_meetings_thumbnail.png"
categories: ["Teams"]
author: "Maxime Hiez"
tags: ["Meeting", "Data protection", "Governance", "PII", "DLP"]
draft: false
---
---

##### Introduction
In a world where business interactions increasingly take place via video conferencing, the security of information shared in meetings is becoming a major issue. Microsoft is addressing this need with the general availability of sensitive content detection in Teams meetings, a feature that is part of its real-time data protection strategy.

---

##### What is sensitive content detection in Teams ?
This feature allows Microsoft Teams to automatically monitor content sharing to detect the potential disclosure of sensitive data such as :
- Credit card numbers
- Personally Identifiable Information (PII)
- Passwords
- Confidential company information

When sensitive content is detected, Teams automatically alerts the presenter.

---

##### Real-time protection, integrated into Microsoft Purview
This feature builds on the capabilities of *Microsoft Purview Data Loss Prevention* (*DLP*), already used to monitor emails, files, and Teams messages. It now extends to live meetings, providing a proactive layer of security.

---

##### How does it work?
This feature is available to customers with a *Microsoft Teams Premium* license and must be enabled in the Microsoft Teams Admin Center.

![image](/images/blog/teams/teams_sensitive_content_detection_in_meetings_001.png)

Once enabled, users will be able to activate the *Detect sensitive content during screen sharing* feature to new or existing meetings.

![image](/images/blog/teams/teams_sensitive_content_detection_in_meetings_002.png)

If sensitive content is detected on screen, the presenter will immediately receive an alert.

![image](/images/blog/teams/teams_sensitive_content_detection_in_meetings_003.png)

For example, here is what I was trying to share.

![image](/images/blog/teams/teams_sensitive_content_detection_in_meetings_004.png)

---

##### Concrete use cases
- Financial sector : Prevent the disclosure of account numbers or banking data.
- Healthcare : Block the unauthorized sharing of medical data.
- Manufacturing : Monitor exchanges containing trade secrets or confidential plans.
- HR and legal : Prevent leaks of sensitive information during internal meetings.

---

##### Conclusion
Sensitive content detection in Teams meetings represents a major step forward in proactive security and regulatory compliance. By integrating this capability directly into collaboration workflows, Microsoft enables organizations to prevent data leaks, strengthen compliance, and protect users without compromising seamless communication. This is an essential feature for demanding business environments.

---

##### Sources
[Microsoft - Techcommunity](https://techcommunity.microsoft.com/blog/microsoftteamsblog/protecting-you-in-meetings-sensitive-content-detection-in-teams-is-now-ga-%F0%9F%8E%89/4440391)

[Microsoft Learn - Detect sensitive content when screen sharing](https://learn.microsoft.com/en-us/microsoftteams/detect-sensitive-content)

---


Did you enjoy this post ? If you have any questions, comments or suggestions, please feel free to send me a message from the contact form.

Don't forget to follow us and share this post.