---
title: "How to secure your emails with Sensitivity Labels"
meta_title: ""
description: ""
date: 2026-04-06T10:00:00-05:00
image: "/images/blog/purview/tuto/purview_how_to_secure_emails_with_sensitivity_labels_for_emails_thumbnail.png"
categories: ["Purview", "Tutorial"]
author: "Maxime Hiez"
tags: ["Data protection", "Governance", "Sensitivity Labels", "Security"]
draft: false
---
---

##### Introduction
Last week, I showed you how to create *Sensitivity Labels* to secure your emails, without explaining how they work. Today I'll talk about how to use them and what results you get when you apply them to your emails before sending.

Check the article from last week [HERE](https://maxime.hiez.ca/en/blog/2026-03-30-purview-how-to-create-sensitivity-labels_for_emails).

---

##### Prerequisites
**<u>Required licenses</u>**
- *Microsoft 365 Business Premium*, *Microsoft 365 E5*.
- *Microsoft Purview Suite* in addition to another license (*E3*, *Business*, ...).

---

##### Step 1 : Apply Sensitivity Labels to emails
Create your first email and apply the Sensitivity Label *<u>Advanced encryption</u>* to it. For my example, I'm sending sensitive content (social security number) to a *Gmail* account and a *Microsoft 365* user, two people outside to my organization.

![image](/images/blog/purview/tuto/purview_how_to_secure_emails_with_sensitivity_labels_for_emails_001.png)

We can see in the header that the Sensitivity Label is applied.

![image](/images/blog/purview/tuto/purview_how_to_secure_emails_with_sensitivity_labels_for_emails_002.png)

Send a second email and apply the sensitivity label *<u>Basic encryption</u>* to it.

This time, I'm sending less sensitive content (a phone number) to the same two people.

![image](/images/blog/purview/tuto/purview_how_to_secure_emails_with_sensitivity_labels_for_emails_003.png)

---

##### Step 2 : Validate the result in Outlook
The Microsoft 365 user receives both emails with a padlock icon.

The email with the Sensitivity Label *<u>Advanced encryption</u>* containing the social security number indicates that it is encrypted and that forwarding is disabled (the grayed-out icon is clearly visible).

![image](/images/blog/purview/tuto/purview_how_to_secure_emails_with_sensitivity_labels_for_emails_004.png)

The one with the Sensitivity Label *<u>Basic encryption</u>* containing the phone number indicates that it is encrypted. Transfer is permitted on this one.

![image](/images/blog/purview/tuto/purview_how_to_secure_emails_with_sensitivity_labels_for_emails_005.png)

---

##### Step 3 : Validate the result on Gmail
The Gmail 365 user receives the same 2 emails.

![image](/images/blog/purview/tuto/purview_how_to_secure_emails_with_sensitivity_labels_for_emails_006.png)

The one with the Sensitivity Label *<u>Advanced encryption</u>* indicates that it is protected and a *Read the message* button is displayed to access the message.

![image](/images/blog/purview/tuto/purview_how_to_secure_emails_with_sensitivity_labels_for_emails_007.png)

Since Gmail is not a native Microsoft system, the user must sign in. Here, I choose to do so via a *One-time passcode*.

![image](/images/blog/purview/tuto/purview_how_to_secure_emails_with_sensitivity_labels_for_emails_008.png)

An 8-digit code is sent ...

![image](/images/blog/purview/tuto/purview_how_to_secure_emails_with_sensitivity_labels_for_emails_009.png)

... and I use it to sign in.

![image](/images/blog/purview/tuto/purview_how_to_secure_emails_with_sensitivity_labels_for_emails_010.png)

I now have access to the encrypted email, and as with the Microsoft 365 user, it is encrypted and forwarding is disabled.

![image](/images/blog/purview/tuto/purview_how_to_secure_emails_with_sensitivity_labels_for_emails_011.png)

Following the same logic, I access the second email. It is encrypted and the transfer is permitted.

![image](/images/blog/purview/tuto/purview_how_to_secure_emails_with_sensitivity_labels_for_emails_012.png)

---

##### Let's go further
Applying a Sensitivity Label to an email secures its content during sending, but what if I want to encrypt an existing document in *OneDrive* or *SharePoint* ? Or even apply other types of security with *Copilot* ?

There are several other scenarios we can work with. I'll be writing several articles soon to demonstrate what's possible.

---

##### Conclusion
You now know how to secure your emails with Sensitivity Labels in Purview.

---

##### Sources
[Microsoft Learn - Sensitivity Labels](https://learn.microsoft.com/en-us/purview/sensitivity-labels)

---


Did you enjoy this post ? If you have any questions, comments or suggestions, please feel free to send me a message from the contact form.

Don't forget to follow us and share this post.