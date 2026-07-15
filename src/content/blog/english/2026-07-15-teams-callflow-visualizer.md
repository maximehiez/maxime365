---
title: "Call Flow Visualizer for Auto Attendants in Teams"
meta_title: ""
description: ""
date: 2026-07-15T10:00:00-05:00
image: "/images/blog/teams/teams_callflow_visualizer_thumbnail.png"
categories: ["Teams"]
author: "Maxime Hiez"
tags: ["Telephony", "Direct Routing", "Calling Plan", "Operator Connect", "Auto Attendant", "Call Flow"]
draft: false
---
---

##### Introduction
Microsoft introduced a call flow visualizer for *Auto Attendants* in the *Microsoft Teams* Admin Center, giving administrators a quick view of incoming call scenario configurations.

---

##### What is the Call Flow Visualizer ?
The call flow visualizer is an interactive tool built into the Teams Admin Center. It generates a tree-like visual representation of call routing for Auto Attendants and voice agents (*Teams Phone Agents*), with zoom and pan controls to navigate complex configurations.

The visualizer displays upstream and downstream routing relationships in a unified view, including :
- <u>Resource accounts</u> : Assignments of resource accounts linked to the Auto Attendant
- <u>Greetings</u> : Greeting message configuration
- <u>Business hours</u> : Routing logic during business hours
- <u>After hours</u> : Routing paths outside of business hours
- <u>Holidays</u> : Call flow branches configured for holidays

---

##### How to access the visualizer ?
The feature is enabled by default, with no configuration required. To access it :
1. Sign in to the Teams Admin Center at https://admin.teams.microsoft.com.
2. In the left menu, click *Voice*, then *Auto attendants*.
3. Select the menu you want to analyze and click the *Call Flow visualizer* option.

![image](/images/blog/teams/teams_callflow_visualizer_001.png)

The interactive diagram appears and allows you to explore the call flow and export it to PDF.

![image](/images/blog/teams/teams_callflow_visualizer_002.png)

---

##### Availability
The rollout was completed progressively by environment :
- <u>Worldwide / GCC</u> : Rollout completed in June 2026
- <u>GCC High / DoD</u> : Rollout expected between mid-August 2026 and mid-September 2026

---

##### Conclusion
The call flow visualizer simplifies the management and troubleshooting of complex Auto Attendants in the Teams Admin Center. Analyzing and documenting call scenarios becomes much simpler with this new feature.

---

##### Sources
[Microsoft Learn - Auto Attendant Setup](https://learn.microsoft.com/en-us/microsoftteams/aa-cq-setup-auto-attendant)

---


Did you enjoy this post ? If you have any questions, comments or suggestions, please feel free to send me a message from the contact form.

Don't forget to follow us and share this post.