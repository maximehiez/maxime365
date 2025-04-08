---
title: "New security approach for non-compliant emails"
meta_title: ""
description: ""
date: 2025-04-07T10:00:00-05:00
image: "/images/blog/defender/defender_new_approach_email_security_non_rfc_compliant_thumbnail.png"
categories: ["Defender"]
author: "Maxime Hiez"
tags: ["Emails", "Phishing", "Security", "RFC"]
draft: false
---
---

##### Introduction
Microsoft has announced a major update to *Defender for Office 365* that strengthens email security by improving the handling of *non-RFC compliant emails*. This initiative is part of Microsoft's ongoing commitment to protecting users from malicious activities such as phishing, impersonation, and evasion techniques used by attackers.

---

##### Understanding non-RFC compliant emails
*Request for Comments* (*RFC*) documents published by the *Internet Engineering Task Force* (*IETF*) define standards for Internet protocols, including email formatting and transmission. Emails that do not adhere to these standards are considered non-RFC compliant. Attackers often exploit these non-compliant formats to bypass security filters, making it difficult to detect and block malicious emails.

---

##### Changes in Microsoft Defender for Office 365
Microsoft Defender for Office 365 is improving its detection mechanisms to better identify and manage non-compliant emails. Users may now see safety tips or warnings in their Outlook clients when they receive messages from non-compliant addresses. These tips are designed to raise awareness and encourage users to exercise caution when interacting with such emails.

![image](/images/blog/defender/defender_new_approach_email_security_non_rfc_compliant_001.png)

---

##### Examples of non compliant emails
Here are some examples of non compliant emails and the associated issues :
- From: **Admin\x0000** \<evil@domain.com\> : Invalid characters in the display name
- From: \\"fax@\\" \<domain.com fax@domain.com\> : Space in the email address
- From: **=?UTF-8?B?VU9CQ29tascGxpYW5jZUBzdWNjZXNzZmFjdG9ycy5jb20=?=**, John Doe \<john.doe@domain.com\> : Email in the display name field and an empty actual email field
- From: **sender1**__@__**domain.com** \<sender1@kmsrc.domain.com\> : Display name containing @ without quotes
- From: John Doe \<abc<strong><span class="font-weight:bold;">@@</span></strong>domain.com\> : Double @ in email address
- From: jane.ch<strong><span class="font-weight:bold;">@</span></strong> \<**domain.com jane.ch**@ domain.com\> : Invalid email address in brackets and @ in display name without quotes

---

##### Impact and objectives
The ultimate goal of these changes is to ensure a more secure email environment by reducing the risk of phishing attacks, impersonation, and exploitation of non-compliant email formats. Microsoft plans to strengthen these measures over time, which may include blocking or rejecting non-compliant emails.

---

##### Email address validation by Exchange Online Protection
*Exchange Online Protection (EOP)* and *Outlook.com* require incoming messages to include a compliant <u>From</u> address to prevent phishing attacks. This validation helps ensure that emails come from legitimate, standards-compliant sources.

---

##### Conclusion
The Microsoft Defender for Office 365 update to handle non-RFC compliant emails represents a significant step forward in the fight against malicious activity. By improving detection and raising user awareness, Microsoft is strengthening the security of email communications and protecting organizations from potential threats.

---

##### Sources
[Microsoft - Techcommunity](https://techcommunity.microsoft.com/blog/microsoftdefenderforoffice365blog/strengthening-email-security-our-new-approach-to-non-rfc-compliant-emails/4338306)

[Microsoft Learn - Exchange Online Protection](https://learn.microsoft.com/en-us/defender-office-365/anti-phishing-from-email-address-validation)

[RFC 5321 - Simple Mail Transfer Protocol](https://datatracker.ietf.org/doc/html/rfc5321)

[RFC 5322 - Internet Message Format](https://datatracker.ietf.org/doc/html/rfc5322)

---


Did you enjoy this post ? If you have any questions, comments or suggestions, please feel free to send me a message from the contact form.

Don't forget to follow us and share this post.