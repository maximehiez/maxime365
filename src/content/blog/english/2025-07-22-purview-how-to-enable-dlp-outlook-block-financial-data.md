---
title: "How to enable DLP for Outlook with Purview"
meta_title: ""
description: ""
date: 2025-07-22T10:00:00-05:00
image: "/images/blog/purview/tuto/purview_how_to_enable_dlp_outlook_block_financial_data_thumbnail.png"
categories: ["Purview", "Tutorial"]
author: "Maxime Hiez"
tags: ["Data protection", "Governance", "PII", "DLP", "Security"]
draft: false
---
---

##### Introduction
Last week, I showed you how to enable DLP for Teams with *Microsoft Purview* to prevent accidental or malicious data leaks (*Data Loss Prevention*). Purview is a comprehensive and extensive data protection solution, and I'm digging into it little by little. Continuing with the idea of talking to you about DLP, here this time is how to protect the sending of financial data from Microsoft Outlook.

Check the article from last week [HERE](https://maxime.hiez.ca/en/blog/2025-07-15-purview-how-to-enable-dlp-teams-block-financial-data).

---

##### Prerequisites
**<u>Required licenses</u>**
- *Microsoft 365 Business Premium*, *Microsoft 365 E5*.
- *Microsoft Purview Suite* in addition to another license (*E3*, ...).

**<u>Administrator role</u>**
- An account with the *Global Administrator* or *Compliance Administrator* role to access the Microsoft Purview Portal.

---

##### Step 1 : Sign in to the Microsoft Purview Portal
Sign in to the Microsoft Purview Portal by opening your web browser to https://purview.microsoft.com.

---

##### Step 2 : Create a DLP policy for Outlook
In the left menu, click *<u>Solutions</u>*, then *<u>Data Loss Prevention</u>*.

Click *<u>Create policy</u>*.

![image](/images/blog/purview/tuto/purview_how_to_enable_dlp_outlook_block_financial_data_001.png)

Set a name and description.

![image](/images/blog/purview/tuto/purview_how_to_enable_dlp_outlook_block_financial_data_002.png)

Apply this policy for Exchange emails.

![image](/images/blog/purview/tuto/purview_how_to_enable_dlp_outlook_block_financial_data_003.png)

Configure the various data type attributes and notifications. In my example, I chose an existing type (Canadian financial data).

![image](/images/blog/purview/tuto/purview_how_to_enable_dlp_outlook_block_financial_data_004.png)

Enable the policy to put it into production.

![image](/images/blog/purview/tuto/purview_how_to_enable_dlp_outlook_block_financial_data_005.png)

---

##### Step 3 : Send financial data to validate the policy
After a few minutes, try sending credit card information via Outlook. Here, we're sending a (<u>fake</u>) credit card from the account *User* (*user@hiez.ca*) to *External User 1* (*external.user1@domain.com*).

The banner configured in the policy is displayed at the top of the email warning that this is data prohibited from sending.

![image](/images/blog/purview/tuto/purview_how_to_enable_dlp_outlook_block_financial_data_006.png)

The message is automatically blocked if you try to send it.

![image](/images/blog/purview/tuto/purview_how_to_enable_dlp_outlook_block_financial_data_007.png)

---

##### Step 4 : Bypass the policy (optional)
If you have chosen to enable the option to bypass the policy, you can provide an explanation for sending the content. The message will then be sent without blocking.

![image](/images/blog/purview/tuto/purview_how_to_enable_dlp_outlook_block_financial_data_008.png)

---

##### Step 5 : Receive the notification
If you have configured notifications, an email is sent to the designated people within the next few seconds.

![image](/images/blog/purview/tuto/purview_how_to_enable_dlp_outlook_block_financial_data_009.png)

---

##### Conclusion
With Microsoft Purview DLP, organizations can automatically detect, monitor, and block unauthorized sharing of critical data, such as credit card numbers or bank account information, whether in the body of Outlook emails or attached files.<br/><br/>
You now know how to enable DLP for Outlook with Purview.

---

##### Sources
[Microsoft Learn - DLP and Microsoft Outlook](https://learn.microsoft.com/en-us/purview/dlp-ol365-win32-policy-tips)

---


Did you enjoy this post ? If you have any questions, comments or suggestions, please feel free to send me a message from the contact form.

Don't forget to follow us and share this post.