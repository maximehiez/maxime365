---
title: "How to analyze Direct Routing calls via the SIP ladder"
meta_title: ""
description: ""
date: 2025-03-14T11:00:00-05:00
image: "/images/blog/teams/tuto/teams_debug_direct_routing_calls_sip_ladder_thumbnail.png"
categories: ["Teams", "Tutoriel"]
author: "Maxime Hiez"
tags: ["Telephony", "Direct Routing", "Logs"]
draft: false
---
---

##### Introduction
I posted an article last February to announce the upcoming release of the SIP ladder to analyze Teams Direct Routing calls from the Microsoft Teams Admin Center. The feature is now available.

Check the February 2025 article [HERE](https://maxime.hiez.ca/en/blog/2025-02-03-teams-roadmap-479413-sip-ladder).

---

##### Prerequisites
**<u>Microsoft Teams Telephony enabled</u>**
- Direct Routing configuration with an SBC.

**<u>Administrator role</u>**
- An account with the *Global Administrator* or *Teams Administrator* role to access the Microsoft Teams Admin Center.

---

##### Step 1 : Sign in to the Microsoft Teams admin center
Sign in to the Microsoft Teams Admin Center by opening your web browser to https://admin.teams.microsoft.com.

---

##### Step 2 : Access the SIP ladder
In the left menu, click *<u>Analytics & Reports</u>*, then *<u>Usage Reports</u>*.<br/>
Choose the report type *<u>PSTN Usage</u>* and the search range, then click *<u>Run Report</u>*.

![image](/images/blog/teams/tuto/teams_debug_direct_routing_calls_sip_ladder_001.png)

Once the report is retrieved, click the *<u>Direct Routing</u>* tab.

![image](/images/blog/teams/tuto/teams_debug_direct_routing_calls_sip_ladder_002.png)

Select the call you want to analyze and click *<u>SIP call flow</u>*.

![image](/images/blog/teams/tuto/teams_debug_direct_routing_calls_sip_ladder_003.png)

The ladder will be displayed with the call's SIP information.

![image](/images/blog/teams/tuto/teams_debug_direct_routing_calls_sip_ladder_004.png)

By clicking on one of the SIP events, you can view the content of the packet.

![image](/images/blog/teams/tuto/teams_debug_direct_routing_calls_sip_ladder_005.png)

Data will be available for all calls less than 30 days old, with a 30-minute delay before analysis is available.

---

##### Conclusion
The SIP ladder for analyzing Teams Direct Routing calls from the Microsoft Teams Admin Center will simplify analytics for Teams telephony administrators.

---

##### Sources
[Microsoft Learn - Teams SIP ladder](https://learn.microsoft.com/en-us/microsoftteams/direct-routing-monitor-sip-ladder)

---


Did you enjoy this post ? If you have any questions, comments or suggestions, please leave a comment in the section below or by sending me a message from the contact form.

Don't forget to follow us and share this post.