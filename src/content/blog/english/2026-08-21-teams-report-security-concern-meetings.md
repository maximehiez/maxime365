---
title: "Reporting security concerns in Teams meetings"
meta_title: ""
description: ""
date: 2026-08-21T10:00:00-05:00
image: "/images/blog/teams/teams_report_security_concern_meetings_thumbnail.png"
categories: ["Teams"]
author: "Maxime Hiez"
tags: ["Meeting", "Security"]
draft: false
---
---

##### Introduction
*Microsoft Teams* already allows a suspicious message or call to be reported. Reporting now extends to meetings and group calls, with the *MC1446794* announcement. The rollout started in August 2026 for tenants in *Targeted Release* and should be completed in October 2026 in general availability.

The goal is to cover a blind spot : until now, a participant facing a phishing attempt or an identity impersonation during a meeting had no way to report it from Teams.

---

##### What the user sees
Two entry points are added in meetings :
1. During the meeting : The *<u>Report a concern</u>* option appears in the *<u>More (…)</u>* menu.
2. In the meeting chat : The option is available from the header, for scheduled meetings as well as for *<u>Meet now</u>* meetings.

![image](/images/blog/teams/teams_report_security_concern_meetings_001.png)

For group calls, reporting is done from the call history of the Teams client. In both cases, the user enters a short note describing the problem and can, optionally, designate the suspicious participants. The reasons covered are phishing, identity impersonation, social engineering and fraud attempts.

![image](/images/blog/teams/teams_report_security_concern_meetings_002.png)

---

##### What the administrators see
The reports feed two locations :
1. Microsoft Defender portal : *<u>Investigation & Response</u>*, then *<u>Submissions</u>*, and the *<u>User reported</u>* tab
2. Teams Admin Center : *<u>Analytics & Reports</u>*, then *<u>Protection reports</u>*, and *<u>User reported security submissions</u>*, still in preview, with data export

The feature requires *Microsoft Defender for Office 365 Plan 1*, *Plan 2* or *Microsoft Defender XDR*. As for call reporting, two settings must be active for the reports to show up correctly : the one in the Teams Admin Center and the one in the Defender portal. An existing tenant can have the second one disabled, so it is wise to check it before announcing the feature to the users.

---

##### A consistent set with the other protections
This announcement completes a series of measures released this year in Teams meetings, bot detection in the lobby, trust indicators on external participants and brand impersonation detection in calls. User reporting is the missing piece : it turns an incident experienced by a participant into data the security team can work with.

Check the article about bot protection in meetings [HERE](https://maxime.hiez.ca/en/blog/2026-07-21-teams-bot-protection-meetings).

---

##### Conclusion
No action is required to benefit from the feature, but two checks are needed before the general availability of October 2026. First the cross activation between the Teams Admin Center and the Defender portal, without which the reports don't appear. Then the definition of a handling process on the security side, because a reporting channel nobody looks at protects nobody.

---

##### Sources
[Microsoft Learn - User reported settings in Teams](https://learn.microsoft.com/en-us/defender-office-365/submissions-teams)

[Microsoft Learn - End user reporting for Teams Calling](https://learn.microsoft.com/en-us/microsoftteams/end-user-reporting-teams-calling)

---


Did you enjoy this post ? If you have any questions, comments or suggestions, please feel free to send me a message from the contact form.

Don't forget to follow us and share this post.