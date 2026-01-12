---
title: "Microsoft improves the Teams app for Windows"
meta_title: ""
description: ""
date: 2026-01-12T10:00:00-05:00
image: "/images/blog/teams/teams_new_background_process_thumbnail.png"
categories: ["Teams"]
author: "Maxime Hiez"
tags: ["Update"]
draft: false
---
---

##### Introduction
In the major January 2026 update, Microsoft significantly improved the structure of Microsoft Teams by separating audio and video functionalities into a new dedicated process (*ms-teams_modulehost.exe*). Previously, all functionalities (chat, audio/video calls, screen presentations, etc.) were handled by a single process (*ms-teams.exe*), resulting in lag and slower startup times.

---

##### Increased performance for calls and meetings
This separation optimizes system resource usage. Audio/video calls are now isolated in a dedicated process, reducing CPU / memory competition with other tasks.

The tangible result ? Faster call startup, improved stability, and a smoother user experience, especially in hybrid work environments.

![image](/images/blog/teams/teams_new_background_process_001.png)

---

##### Seamless transition for users
From the user's perspective, nothing changes ; the interface and features remain the same. The architecture evolves only in the background to improve performance and reduce latency during calls.

---

##### Why it matters ?
- Improved performance : Reduced call launch times, increased fluidity even on less powerful machines.
- Adapted to hybrid work : A more responsive and reliable Teams experience for all employees.
- Simplified maintenance : Modular application facilitates diagnostics and targeted upgrades.

---

##### Conclusion
This new ms-teams_modulehost.exe process marks a strategic evolution for Teams, focused on performance and modularity. Users benefit from faster and more stable calls, while IT teams need to adapt their QOS configurations. Another step towards making Teams an even more optimized platform.

---

##### Sources
[Message Center - MC1189656](https://admin.cloud.microsoft/?source=applauncher#/MessageCenter/:/messages/MC1189656)

---


Did you enjoy this post ? If you have any questions, comments or suggestions, please feel free to send me a message from the contact form.

Don't forget to follow us and share this post.