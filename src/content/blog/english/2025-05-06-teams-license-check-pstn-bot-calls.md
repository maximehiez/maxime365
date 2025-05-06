---
title: "Checking licenses for PSTN bot calls in Teams"
meta_title: ""
description: ""
date: 2025-05-06T10:00:00-05:00
image: "/images/blog/teams/teams_license_check_pstn_bot_calls_thumbnail.png"
categories: ["Teams"]
author: "Maxime Hiez"
tags: ["Licenses", "Telephony"]
draft: false
---
---

##### Introduction
Microsoft has announced an important update regarding license verification for PSTN bot calls to users in Microsoft Teams. This update aligns licensing requirements for Teams users with *Teams Phone* features, ensuring compliant and secure use of telephony services.

---

##### Update context
Currently, Teams users can transfer calls to other Teams users even if they don't have a Teams telephony license. This flexibility created a gap in the system, allowing bots to initiate call transfers (from auto attendants, for example) and requests to add participants.

---

##### Changes
Starting September 30, 2025, license verification will apply to bot-initiated calls. The main changes include :
- Manual transfers : Teams users will still be able to manually transfer calls to other Teams users, even if they don't have a Teams telephony license.
- Bot-initiated transfers : Call transfers and requests to add participants to unlicensed users will be blocked.

---

##### Required actions
Administrators and developers should take the following steps to prepare for these changes :
1. Application review : Review and update all applications using the transfer and add participant APIs to ensure they reflect the new default behavior.
2. Customer communication : Inform customers of the change in behavior so they do not experience service disruptions.
3. License verification: Ensure that all Teams users behind apps, such as queue apps, have a Teams telephony license.

---

##### User impact
These changes aim to strengthen the security and compliance of telephony services in Microsoft Teams. By enforcing license checks, Microsoft ensures that only authorized users can benefit from advanced telephony features, thereby reducing security risks and potential abuse.

---

##### Conclusion
Enforcing license checks for PSTN-initiated bot calls in Microsoft Teams represents an important step in improving the security and compliance of telephony services. Administrators and developers should prepare for these changes by updating their applications and informing their customers. For more information on this update, you can read the full articles on Microsoft's blogs.

---

##### Sources
[Microsoft 365 - Developer Blog](https://devblogs.microsoft.com/microsoft365dev/enforcement-of-license-checks-for-pstn-bot-calls)

---


Did you enjoy this post ? If you have any questions, comments or suggestions, please feel free to send me a message from the contact form.

Don't forget to follow us and share this post.