---
title: "How to report an inappropriate Teams message with Purview"
meta_title: ""
description: ""
date: 2025-10-20T10:00:00-05:00
image: "/images/blog/purview/tuto/purview_how_to_report_inappropriate_teams_message_thumbnail.png"
categories: ["Purview", "Tutorial"]
author: "Maxime Hiez"
tags: ["Conformité"]
draft: false
---
---

##### Introduction
In an environment where digital communication is omnipresent, organizations must ensure that their internal and external communications comply with compliance and conduct policies. The *Microsoft Purview Communication Compliance* feature addresses this challenge precisely. It allows you to identify, analyze, and remediate inappropriate or risky communications within Microsoft 365 (*Teams*, *Exchange*, *Viva Engage*, etc.).

---

##### Prerequisites
**<u>Required licenses</u>**
- *Microsoft 365 E5*.
- *Microsoft Purview Suite* in addition to another license (*E3*, *Business*, ...).

**<u>Administrator role</u>**
- An account with the *Global Administrator* or *Teams Administrator* role to access the Microsoft Purview Portal.

---

##### Step 1 : Receiving an inappropriate message in Teams
The user receives a message whose content does not follow the company's rules of conduct.

![image](/images/blog/purview/tuto/purview_how_to_report_inappropriate_teams_message_001.png)

---

##### Step 2 : Report the message
Click the ***...*** at the end of the message, then *<u>Report this message</u>*.

![image](/images/blog/purview/tuto/purview_how_to_report_inappropriate_teams_message_002.png)

Click *<u>Report</u>* to send the report to the administrators.

![image](/images/blog/purview/tuto/purview_how_to_report_inappropriate_teams_message_003.png)

---

##### Step 3 : Sign in to the Microsoft Purview Portal
Sign in to the Microsoft Purview Portal by opening your web browser to https://purview.microsoft.com.

---

##### Step 4 : Access reported messages
In the left menu, click *<u>Solutions</u>*, then *<u>Communication Compliance</u>*.

Click *<u>User-reported messages</u>* to view the list of reported messages.

![image](/images/blog/purview/tuto/purview_how_to_report_inappropriate_teams_message_004.png)

Click on it to see details.

![image](/images/blog/purview/tuto/purview_how_to_report_inappropriate_teams_message_005.png)

---

##### Step 5 : Classify the message
Click *<u>Tag as</u>* to assign a category and a comment to the message. These will only be visible to administrators.

![image](/images/blog/purview/tuto/purview_how_to_report_inappropriate_teams_message_006.png)

---

##### Step 6 : Send a notification
Click the arrow icon to send a notification to the person who sent the inappropriate message. In my example, I already had a message template, but you can create more.

![image](/images/blog/purview/tuto/purview_how_to_report_inappropriate_teams_message_007.png)

Click *<u>Save</u>* to send the notification.

![image](/images/blog/purview/tuto/purview_how_to_report_inappropriate_teams_message_008.png)

---

##### Step 7 : Close the report
Click *<u>Resolve</u>* and provide a comment to automatically move the report to the *Resolved* tab.

![image](/images/blog/purview/tuto/purview_how_to_report_inappropriate_teams_message_009.png)

---

##### Step 8 : Receive the notification
The user who sent the inappropriate message in Teams will receive the notification within the next few seconds.

![image](/images/blog/purview/tuto/purview_how_to_report_inappropriate_teams_message_010.png)

---

##### Conclusion
With Microsoft Purview Communication Compliance, organizations have a robust framework for monitoring and managing sensitive communications without compromising collaboration. User reporting thus becomes a lever for collective compliance : each employee can actively contribute to the detection of risky behavior, while administrators have powerful tools to investigate and take targeted action.<br/><br/>
You now know how to handle reported messages in Teams with Purview.

---

##### Sources
[Microsoft Learn - Communication compliance](https://learn.microsoft.com/en-us/purview/communication-compliance-solution-overview)

---


Did you enjoy this post ? If you have any questions, comments or suggestions, please feel free to send me a message from the contact form.

Don't forget to follow us and share this post.