---
title: "Microsoft raises the conditional access policy limit"
meta_title: ""
description: ""
date: 2026-05-21T10:00:00-05:00
image: "/images/blog/entra/entra_conditional_access_policy_maximum_limit_thumbnail.png"
categories: ["Entra ID"]
author: "Maxime Hiez"
tags: ["Conditional Access", "Security", "PowerShell"]
draft: false
---
---

##### Introduction
*Microsoft* quietly raises the limit of conditional access policies per tenant, from 195 to 244. This limit applies to all policies, whether active, disabled, or in *report-only* mode, and its actual scope often escapes teams until they hit the limit. For organizations managing regulated or multi-team environments, understanding how this quota is consumed is as important as knowing the number itself.

---

##### What counts against the quota, and what does not
The quota is often misunderstood because it covers more than just active policies. The following elements all consume a slot in the limit :
- Enabled policies : Consume the quota, as expected
- Disabled policies : Consume the quota, even if they never apply
- Policies in *report-only* mode : Consume the quota, despite their testing role

Conversely, several elements have their own separate limits and do not count against this quota :
- IP address-based named locations : Separate limit of 195 entries
- Custom authentication strengths : Separate limit of 15 entries
- Microsoft-managed policies : Such as blocking legacy authentication and requiring MFA for all users

---

##### Why large organizations hit the limit ?
Conditional access policy proliferation follows predictable patterns in complex environments. The first structural cause is the limit of 250 applications per policy. As soon as an access profile covers more than 250 applications, the policy must be duplicated, which doubles quota consumption for a single functional requirement.

Multi-framework compliance requirements amplify this phenomenon. An organization simultaneously subject to *FedRAMP*, *HIPAA*, and *ISO 27001* maintains distinct policy sets for each framework. Added to this are :
- <u>Exception policies</u> : Created for temporary exclusions that become permanent for lack of review
- <u>Guest and external identity policies</u> : Separated by design, multiplied by partners
- <u>Workload identity policies</u> : Service accounts and non-human applications handled separately
- <u>Pending emergency policies</u> : Disabled but retained in the quota
- <u>Multi-team governance</u> : Each team creates its own policies without central coordination, resulting in duplicates

---

##### Auditing your current quota
Before creating new policies, it is useful to know the exact number of existing policies. Two methods are available.

Via the *Graph API* (v1.0), with the *ConsistencyLevel: eventual* header required to enable counting :
```http
GET https://graph.microsoft.com/v1.0/identity/conditionalAccess/policies?$count=true
ConsistencyLevel: eventual
```

Via the following PowerShell command (with the *Microsoft Graph PowerShell SDK* module) :
```powershell
Get-MgPolicyConditionalAccessPolicyCount
```

Or via the beta version of the module, which may reflect more recent quota changes :
```powershell
Get-MgBetaPolicyConditionalAccessPolicyCount
```

These commands return the total number of policies, across all states. The result should be compared to the limit visible in the *Entra* portal under *Conditional Access* > *Overview* > *Policy Snapshot*.

![image](/images/blog/entra/entra_conditional_access_policy_maximum_limit_001.png)

---

##### Best practices to contain proliferation
The increase in the limit provides headroom, but does not solve the underlying problem. The following practices help limit quota growth over the long term :
- Group applications by profile : One policy per profile of similar requirements, not one policy per application. The *Filter for applications* filter allows dynamic targeting without a static list
- Review temporary exclusions : A quarterly audit helps clean up obsolete policies
- Transition *report-only* policies : A policy in *report-only* mode consumes the same quota as an active policy. Move to production or delete — do not accumulate
- Standardize policy names : A structured naming convention (framework, scope, state) makes it easier to identify duplicates during audits

For further analysis of policy impact, see the March 2025 article [Impact analysis of Entra ID conditional access policies](https://maxime.hiez.ca/en/blog/2025-03-17-entra-conditional-access-policy-impact), which covered *report-only* mode and the associated diagnostic tools.

---

##### Conclusion
The raise of the conditional access policy limit in *Entra ID* gives organizations more room to manage complex environments. This additional headroom is not an invitation to create more policies, but an opportunity to clean up existing ones. Auditing the current quota, combined with a review of disabled policies and accumulated exclusions, remains the priority before exploiting the newly available space.

---

##### Sources
[Microsoft Learn - Entra service limits](https://learn.microsoft.com/en-us/entra/identity/users/directory-service-limits-restrictions)

[Microsoft Learn - Plan conditional access](https://learn.microsoft.com/en-us/entra/identity/conditional-access/plan-conditional-access)

[Microsoft Learn - Microsoft-managed policies](https://learn.microsoft.com/en-us/entra/identity/conditional-access/managed-policies)

---


Did you enjoy this post ? If you have any questions, comments or suggestions, please feel free to send me a message from the contact form.

Don't forget to follow us and share this post.