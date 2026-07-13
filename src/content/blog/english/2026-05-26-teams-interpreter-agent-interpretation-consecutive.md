---
title: "Consecutive bilingual interpretation in Teams"
meta_title: ""
description: ""
date: 2026-05-26T10:00:00-05:00
image: "/images/blog/teams/teams_interpreter_agent_consecutive_interpretation_thumbnail.png"
categories: ["Teams"]
author: "Maxime Hiez"
tags: ["AI", "Interpreter", "Meeting", "PowerShell"]
draft: false
---
---

##### Introduction
The *Interpreter* agent in *Microsoft Teams* previously offered only a simultaneous translation mode, where the synthesized voice overlapped with the speaker's voice in real time. In interactive or bilingual meetings, this audio overlap creates a confusing experience for all participants. Microsoft has made generally available a second mode, called *consecutive*, which waits for each speaker to finish before delivering the translation, visible to everyone on the meeting stage.

---

##### Simultaneous vs consecutive : two modes, two contexts
The two modes are built on different philosophies and do not cover the same scenarios.

|                        | Simultaneous mode                       | Consecutive mode                                          |
|------------------------|-----------------------------------------|-----------------------------------------------------------|
| Trigger                | Real time, while the speaker is talking | After each speaker finishes                               |
| Experience             | Individual (headset recommended)        | Shared, the agent appears on stage                        |
| Audio overlap risk     | High                                    | N/A                                                       |
| Languages per session  | Up to 9                                 | 2 languages maximum                                       |
| Typical use case       | Presentations, large broadcasts         | Bilingual discussions, negotiations, interactive meetings |

In consecutive mode, the Interpreter agent joins the meeting as a full participant and is visible to everyone present. The experience is no longer individual, all participants hear the translation at the same moment, which eliminates the desynchronization felt in simultaneous mode.

---

##### Supported languages and bilingual constraint
Consecutive mode supports 9 languages : Chinese, English, French, German, Italian, Japanese, Korean, Portuguese, and Spanish. This list is shared by both modes.

The constraint specific to consecutive mode is the bilingual nature of each session, only 2 languages can be selected per meeting. This limitation is inherent to the turn-by-turn design of the mode.

---

##### How to enable consecutive interpretation ?
Users can enable the feature by clicking *<u>More</u>*, then *<u>Language and speech</u>*, and *<u>Turn on Interpreter for me</u>*.

![image](/images/blog/teams/teams_interpreter_agent_consecutive_interpretation_001.png)

The language selection will then be offered.

![image](/images/blog/teams/teams_interpreter_agent_consecutive_interpretation_002.png)

---

##### Licensing and monthly quota
A *Microsoft 365 Copilot* license is required to enable the Interpreter agent, regardless of the mode used. The user who enables interpretation does so for the entire meeting, not just for themselves.

20 hours of interpretation are included in the license (per user per month). Beyond this limit, access is subject to available capacity.

---

##### Admin controls and special cases
The Interpreter agent is enabled by default for all users with a *Microsoft 365 Copilot* license. There is no dedicated control in the *Teams Admin Center*, management is done exclusively via the following *PowerShell* commands :

To disable the Interpreter agent entirely :
```powershell
Set-CsTeamsMeetingPolicy -Identity Global -AIInterpreter Disabled
```

To keep the agent but disable voice simulation :
```powershell
Set-CsTeamsMeetingPolicy -Identity Global -VoiceSimulationInInterpreter Disabled
```
<br/>

The Interpreter agent is not available in the following contexts :
- Unscheduled 1:1 calls : Whether VoIP or PSTN
- Town halls and Webinars : These broadcast formats are not covered
- Microsoft Teams Free : A paid license is required

*Teams Rooms* for Windows (*MTRoW*) support the Interpreter agent from version 5.5.129.0, with a *Teams Rooms Pro* license.

---

##### Conclusion
Consecutive mode fills a concrete gap in the Interpreter agent for interactive meetings, the shared experience without audio overlap facilitates bilingual exchanges without disrupting the flow of conversation. *General Availability* makes the feature accessible now to any *Microsoft 365 Copilot* license holder. Administrators looking to govern usage should configure meeting policies via PowerShell and monitor monthly quota consumption until the counting method between the two modes is clarified.

---

##### Sources
[Microsoft - Techcommunity](https://techcommunity.microsoft.com/blog/Microsoft365InsiderBlog/converse-naturally-across-languages-with-consecutive-interpretation/4514327)

[Microsoft Learn - Manage the Interpreter agent](https://learn.microsoft.com/en-us/microsoftteams/interpreter-agent-teams)

---


Did you enjoy this post ? If you have any questions, comments or suggestions, please feel free to send me a message from the contact form.

Don't forget to follow us and share this post.