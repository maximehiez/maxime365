---
title: "How to create SBC monitoring alerts in Teams"
meta_title: ""
description: ""
date: 2026-06-08T10:00:00-05:00
image: "/images/blog/teams/teams_how_to_create_direct_routing_alerts_sbc_thumbnail.png"
categories: ["Teams"]
author: "Maxime Hiez"
tags: ["Direct Routing", "SBC", "Alerts"]
draft: false
---
---

##### Introduction
The *Microsoft Teams* admin center now features a new alert rule dedicated to *Direct Routing*, enabling proactive monitoring of *Session Border Controller* (*SBC*) state changes. This rule addresses a significant need for organizations using a *Direct Routing as a Service* model, where the SBC is not directly managed by the company's IT department.

---

##### Prerequisites
**<u>Microsoft Teams telephony enabled</u>**
- *Direct Routing* configuration with an SBC.
- A configured Teams team.

**<u>Administrator role</u>**
- An account with the *Global Administrator* or *Teams Administrator* role to access the Microsoft Teams Admin Center.

---

##### Step 1 : Sign in to the Microsoft Teams Admin Center
Sign in to the Microsoft Teams Admin Center by opening your web browser to https://admin.teams.microsoft.com.

---

##### Step 2 : Enable the rule
In the left menu, click *<u>Notifications & alerts</u>*, then *<u>Rules</u>*, and then *<u>Direct Routing</u>*.

![image](/images/blog/teams/tuto/teams_how_to_create_direct_routing_alerts_sbc_001.png)

The settings are already pre-filled, but you can adjust the values ​​to suit your needs. All you need to do is assign the SBCs to monitor and the Teams channel to notify.

![image](/images/blog/teams/tuto/teams_how_to_create_direct_routing_alerts_sbc_002.png)

---

##### Step 3 : Validate the result
After a few minutes, the Teams channel should start receiving alerts.

![image](/images/blog/teams/tuto/teams_how_to_create_direct_routing_alerts_sbc_003.png)

---

##### Monitored metrics
Alerts are based on telemetry already collected by the *Direct Routing* health dashboard. The main metrics monitored are :
- <u>Network efficiency</u> : Ratio measuring the network's ability to route calls to the recipient.
- <u>Simultaneous call capacity</u> : Triggers an alert when the threshold configured via *-MaxConcurrentSessions* reaches 90%.
- <u>TLS connectivity</u> : Status of the *TLS* connection between the SBC and the *Direct Routing* interface, including certificate expiration detection.
- <u>SIP options</u> : Receipt or absence of SIP option messages sent by the SBC every minute.

---

##### Conclusion
This native alerting rule simplifies the monitoring of Direct Routing infrastructures by enabling proactive incident response, without leaving the Microsoft ecosystem. It is particularly useful in scenarios where the SBC is operated by a third-party service provider.<br/><br/>
You now know how to create alerts for your Teams SBCs.

---

##### Sources
[Microsoft Learn - Microsoft Teams monitoring and alerting](https://learn.microsoft.com/en-us/microsoftteams/alerts/teams-admin-alerts)

[Microsoft Learn - Health dashboard for Direct Routing](https://learn.microsoft.com/en-us/microsoftteams/direct-routing-health-dashboard)

---


Did you enjoy this post ? If you have any questions, comments or suggestions, please feel free to send me a message from the contact form.

Don't forget to follow us and share this post.