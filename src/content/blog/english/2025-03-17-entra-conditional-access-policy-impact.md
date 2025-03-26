---
title: "Impact analysis of Entra conditional access policies"
meta_title: ""
description: ""
date: 2025-03-17T10:00:00-05:00
image: "/images/blog/entra/entra_conditional_access_policy_impact_thumbnail.png"
categories: ["Entra ID"]
author: "Maxime Hiez"
tags: ["Conditional access", "Securite"]
draft: false
---
---

##### Introduction
Conditional access in Entra is a security policy that allows administrators to control access to applications and resources based on specific conditions. These conditions can include factors such as user location, device used, login risk level, and more. By using conditional access policies, organizations can strengthen their security by applying access controls tailored to identified risks.

Microsoft is offering a new pre-release feature : Entra conditional access policies impact analysis.

---

##### Conditional access policy impact
The conditional access policy impact analysis feature allows administrators to gain insight into the potential or existing impacts of policies on interactive logins within the organization. This feature allows impact analysis over a 24-hour, 7-day, or 1-month period.

![image](/images/blog/entra/entra_conditional_access_policy_impact_001.png)

---

##### How to create a zero-impact policy?
*Report Only* mode is a policy state that allows administrators to test most conditional access policies before enabling them. When a policy is in *Report Only* mode, it is evaluated upon login, but access controls are not enforced. The results of this evaluation are recorded in the login logs.

When a policy is in *Report Only* mode, several outcomes are possible:
- <u>Report Only: Success</u> : All configured policy conditions, required non-interactive lease controls, and session controls have been met.
- <u>Report Only: Failure</u> : All configured policy conditions have been met, but not all required non-interactive lease controls or session controls.
- <u>Report Only: User action required</u> : All conditions of the configured policy have been met, but user action would be required to satisfy the required lease or session controls.
- <u>Report Only: Not applied</u> : Not all conditions of the configured policy have been met.
---

##### Benefits of Report Only Mode
- Improved security : Allows you to test policies without the risk of blocking user access.
- Safer deployment : Helps you understand the impact of policies before they are activated, reducing the risk of disruption.
- Detailed analysis : Provides valuable insights into user logins and actions, helping you refine policies.

![image](/images/blog/entra/entra_conditional_access_policy_impact_002.png)

---

##### Conclusion
*Report Only* mode and impact analysis for conditional access policies in Microsoft Entra are two valuable tools for administrators, allowing them to test and analyze the impact of policies before deployment. By using these features, organizations can improve their security while minimizing disruption to users.

---

##### Sources
[Microsoft Learn - Conditional access policy impact](https://learn.microsoft.com/en-us/entra/identity/conditional-access/concept-conditional-access-report-only#policy-impact-preview)

---


Did you enjoy this post ? If you have any questions, comments or suggestions, please feel free to send me a message from the contact form.

Don't forget to follow us and share this post.