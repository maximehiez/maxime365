---
title: "How to enable DLP for Teams with Microsoft Purview"
meta_title: ""
description: ""
date: 2025-07-15T10:00:00-05:00
image: "/images/blog/purview/tuto/purview_dlp_teams_block_financial_data_thumbnail.png"
categories: ["Purview", "Tutorial"]
author: "Maxime Hiez"
tags: ["Data protection", "Governance", "PII", "DLP"]
draft: false
---
---

##### Introduction
In a context where sensitive data, particularly banking information, is increasingly circulating in collaborative tools, businesses must be extra vigilant to avoid accidental or malicious leaks. With this in mind, *Microsoft Purview* offers a robust *Data Loss Prevention* solution, natively integrated into Microsoft Teams.

---

##### Prerequisites
**<u>Licenses required</u>**
- *Microsoft 365 Business Premium*, *Microsoft 365 E5*
- *Microsoft 365 E5 Compliance* in addition to another license (*E3*, ...).

**<u>Administrator role</u>**
- An account with the *Global Administrator* or *Teams Administrator* role to access the Microsoft Purview Portal.

---

##### Step 1 : Sign in to the Microsoft Purview Portal
Sign in to the Microsoft Purview Portal by opening your web browser to https://purview.microsoft.com.

---

##### Step 2 : Create a DLP policy for Teams
In the left menu, click *<u>Solutions</u>*, then *<u>Data Loss Prevention</u>*.

Click *<u>Create policy</u>*.

![image](/images/blog/purview/tuto/purview_dlp_teams_block_financial_data_001.png)

Set a name and description.

![image](/images/blog/purview/tuto/purview_dlp_teams_block_financial_data_002.png)

Apply this policy for Teams messages.

![image](/images/blog/purview/tuto/purview_dlp_teams_block_financial_data_003.png)

Configure the various data type attributes and notifications. In my example, I chose an existing type (Canadian banking data).

![image](/images/blog/purview/tuto/purview_dlp_teams_block_financial_data_004.png)

Enable the policy to put it into production.

![image](/images/blog/purview/tuto/purview_dlp_teams_block_financial_data_005.png)

---

##### Step 3 : Send financial data to validate the policy
After a few minutes, try sending credit card information via Teams. Here, we're sending a (<u>fake</u>) credit card from the account *User* (*user@hiez.ca*) to *External User 1* (*external.user1@domain.com*).

![image](/images/blog/purview/tuto/purview_dlp_teams_block_financial_data_006.png)

The message is automatically blocked on the account *User* after sending.

![image](/images/blog/purview/tuto/purview_dlp_teams_block_financial_data_007.png)

Reception is also blocked on the account *External User 1*.

![image](/images/blog/purview/tuto/purview_dlp_teams_block_financial_data_008.png)

---

##### Step 4 : Receive the notification

If you have configured notifications, an email will be sent to the designated people within seconds.

![image](/images/blog/purview/tuto/purview_dlp_teams_block_financial_data_009.png)

---

##### Step 5 : Bypass the policy (optional)

If you have chosen to enable the option to bypass the policy, you can provide an explanation for sending the content. The message will then be sent without blocking.

![image](/images/blog/purview/tuto/purview_dlp_teams_block_financial_data_010.png)

A new notification containing the justification will be sent by email to the same people.

---

##### Conclusion
With Microsoft Purview DLP, organizations can automatically detect, monitor, and block unauthorized sharing of critical data, such as credit card numbers or bank account information, whether in Teams conversations, shared files, or collaborative channels.<br/><br/>
You now know how to enable DLP for Teams in Purview.

---

##### Sources
[Microsoft Learn - DLP and Microsoft Teams](https://learn.microsoft.com/en-us/purview/dlp-microsoft-teams)

---


Did you enjoy this post ? If you have any questions, comments or suggestions, please feel free to send me a message from the contact form.

Don't forget to follow us and share this post.