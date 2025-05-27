---
title: "Managing call priorities in Teams call queues"
meta_title: ""
description: ""
date: 2025-05-27T10:00:00-05:00
image: "/images/blog/teams/teams_call_queue_priority_thumbnail.png"
categories: ["Teams"]
author: "Maxime Hiez"
tags: ["Telephony", "Direct Routing", "Calling Plan", "Operator Connect", "Call Queue"]
draft: false
---
---

##### Introduction
With the evolving use of Microsoft Teams as a business telephony solution, Microsoft is introducing a highly anticipated feature : call priority management in queues. This new feature allows organizations to better control the order in which incoming calls are handled, based on their importance or origin.

---

##### Call prioritization in call queues
Until now, incoming calls to a queue were handled according to a *FIFO* (*First In, First Out*) logic, i.e., in the order in which they were received. This posed a problem in certain business scenarios where some calls needed to be handled more quickly than others (VIP customers, emergencies, critical services, etc.).

With this new feature, it is now possible to assign a priority to each call, allowing the queue to be dynamically reorganized based on this priority, ensuring that the most critical calls are handled first.

Priorities can be assigned on a scale of 1 to 5 :
- 1 – Very high
- 2 – High
- 3 – Normal (default)
- 4 – Low
- 5 – Very low

When an agent becomes available to take a call, they receive the highest-priority call. If multiple calls have the same priority level, the one waiting the longest is presented to the agent first.

---

##### Configuration via PowerShell
Currently, priority configuration is done exclusively via PowerShell. It's important to note that any subsequent changes via the Microsoft Teams Admin Center will reset the priority to the default value. As with all other new Teams features, this feature will become available via the web interface shortly.

---

##### Examples
Take *<u>HIEZ IT Support</u>* as an example, which offers different levels of service to its customers :
- Telephony Support : Priority 3
- Laptop Support : Priority 2
- Password Support : Priority 1
- Other inquiries Support : Priority 5

![image](/images/blog/teams/teams_call_queue_priority_001.png)

Customers calling the support number and choosing option 3 (priority 1) will thus be served before those at other levels, ensuring a customer experience in line with service commitments.

---

##### Best practices
- Planning : Clearly define priority levels based on your organization's needs.
- Training : Ensure agents understand the prioritization system for effective call handling.
- Monitoring : Use Teams' analytics tools to evaluate prioritization effectiveness and adjust settings if necessary.

---

##### Conclusion
Call priority management in Microsoft Teams represents a significant step forward for companies looking to optimize their inbound call handling. By enabling intelligent call distribution, this feature helps improve customer satisfaction and operational efficiency.

---

##### Sources
[Microsoft Learn - Priorités d'appels pour les files d’attente](https://learn.microsoft.com/en-us/microsoftteams/aa-cq-call-priorities)

[Microsoft Learn - New-CsAutoAttendantCallableEntity](https://learn.microsoft.com/en-us/powershell/module/teams/new-csautoattendantcallableentity?view=teams-ps)

---


Did you enjoy this post ? If you have any questions, comments or suggestions, please feel free to send me a message from the contact form.

Don't forget to follow us and share this post.