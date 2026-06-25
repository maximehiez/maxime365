---
title: "Detect exposed passwords in plain text with Purview"
meta_title: ""
description: ""
date: 2026-04-21T10:00:00-05:00
image: "/images/blog/purview/purview_detecting_plain_text_password_exposure_using_custom_regex_thumbnail.png"
categories: ["Purview"]
author: "Maxime Hiez"
tags: ["Data protection", "Governance", "Sensitivity Labels", "DLP", "SIT", "Security"]
draft: false
---
---

##### Introduction
In a *Microsoft 365* environment, data breaches aren't limited to credit card numbers or personal information. A frequently underestimated risk is the sharing of passwords in plain text via emails, files, or Teams conversations.

Thanks to *Microsoft Purview*, it's possible to detect this type of behavior using *regular expressions* (*regex*) and *Sensitive Information Types* (*SIT*).

---

##### Why is password detection so complex ?
Unlike a credit card number or an official ID, a password doesn't follow any universal standard format. This makes it much more difficult to detect.

Sensitive Information Types rely on patterns that combine :
- Regular expressions
- Contextual keywords
- And confidence levels

Problem : a password can be any string of characters, which greatly increases false positives if the detection system is misconfigured.

---

##### The Approach : Combining regex and context
The effective approach is to detect not just the password itself, but rather the context in which it appears.
<br/><br/>

**Typical example : password = P@ssw0rd123**
<br/><br/>

In this case, the strategy consists of :
- Detecting keywords like *"password"*, *"pwd"*, *"secret"*
- Associating these keywords with a regex that identifies a string resembling a password
- Adding proximity rules to link the two elements

Regex allows us to define these detection patterns by analyzing the text.

---

##### Implementation in Microsoft Purview
With Microsoft Purview, you can implement *Data Loss Prevention* (*DLP*) policies to detect this content:
1. Create a custom Sensitive Information Type (SIT)
    - A primary element (regex to detect a password-like string)
    - Secondary elements (keywords like *"password"*, *"login"*, etc.)
2. Adjust the confidence level
    - Low (high detection rates, but more noise)
    - High (fewer false positives, but more restrictive)
3. Integrate into a DLP policy
    - Block sharing
    - Display a user warning
    - Generate a security alert

SITs are used in several components : DLP, privacy labels, Insider Risk, etc.

---

##### Best practices
For effective detection :
- Always combine regex with keywords
- Avoid overly broad regex (otherwise, you'll get a surge of false positives)
- Test with different scenarios (Teams, Exchange, SharePoint)
- Adjust the proximity between the keyword and the detected value

---

##### Concrete use case
Some typical scenarios where this approach is useful :
- A user shares a password in Microsoft Teams
- An Excel file contains credentials in plain text
- An email contains a line like: *"Here is the password : ..."*

In these cases, a well-configured DLP policy can :
- Block the message
- Notify the user
- Alert the security team

---

##### Conclusion

Plain text password detection is an advanced but critical security feature in Microsoft 365. Thanks to Microsoft Purview's customization capabilities, it's possible to implement intelligent, context-based detection rather than simple brute-force filtering. When properly configured, this approach reduces the risk of credential leaks without penalizing users with excessive false positives.

---

##### Sources
[Microsoft - Techcommunity](https://techcommunity.microsoft.com/blog/microsoft-security-blog/detecting-plain%E2%80%91text-password-exposure-using-custom-regex-in-microsoft-purview/4513022)

---


Did you enjoy this post ? If you have any questions, comments or suggestions, please feel free to send me a message from the contact form.

Don't forget to follow us and share this post.