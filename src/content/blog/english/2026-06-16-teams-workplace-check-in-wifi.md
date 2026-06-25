---
title: "Workplace Check-in via WiFi for Microsoft Places and Teams"
meta_title: ""
description: ""
date: 2026-06-18T10:00:00-05:00
image: "/images/blog/teams/teams_workplace_check_in_wifi_thumbnail.png"
categories: ["Teams", "Places"]
author: "Maxime Hiez"
tags: ["Workplace Check-in", "WiFi"]
draft: false
---
---

##### Introduction
*Microsoft Places* introduces *Workplace Check-in* via WiFi in *Microsoft Teams* ; when a user connects to the company WiFi network, their work location updates automatically in *Microsoft 365*. No more manual check-in, the information appears directly in the Teams and Outlook calendar of their colleagues.

---

##### How it works
Workplace Check-in relies on two complementary signals :
1. WiFi : Teams detects network changes (initial connection, network switch, device wake) and updates the work location.
2. Desk peripheral : Connecting a computer to a configured peripheral (monitor, dock) triggers the check-in.

The location displayed to colleagues can be :
- In the office : If only the SSID list is configured.
- Specific building : If the BSSID list is also configured, Teams identifies the building from the WiFi access point.

The check-in clears automatically at the end of the user's working hours. It works only on corporate networks configured in the tenant, and requires the Teams desktop app (Windows or macOS). Web and mobile clients are not supported.

![image](/images/blog/teams/teams_microsoft_places_workplace_check_in_wifi_001.png)

---

##### Deployment options
Administrators can choose between three modes for WiFi check-in :
- <u>Inform mode</u> : Check-in is active by default. The user sees a banner in Teams informing them that the feature is enabled, with an option to opt out.
- <u>Ask mode</u> : Check-in is inactive by default. The user sees a banner offering them to opt in.
- <u>Off mode</u> : The feature is disabled. The user cannot enable it on their side.

In *Inform* and *Ask* modes, the user can change their preference at any time in Teams settings. The location can also be overridden manually at any time, making it a collaboration tool rather than a surveillance tool.

---

##### Availability
Desk peripheral check-in is generally available. WiFi network check-in is in extended rollout.

---

##### Conclusion
Workplace Check-in via WiFi simplifies presence management in hybrid environments without requiring any manual action from users. Configuration is handled entirely by the administrator via PowerShell, with granular control over sharing modes and user consent.

---

##### Sources
[Microsoft - Techcommunity](https://techcommunity.microsoft.com/blog/microsoftteamsblog/workplace-presence-made-effortless-workplace-check-in-via-wi-fi-for-microsoft-pl/4523386)

[Microsoft Adoption - Places](https://adoption.microsoft.com/en-us/microsoft-places)

---


Did you enjoy this post ? If you have any questions, comments or suggestions, please feel free to send me a message from the contact form.

Don't forget to follow us and share this post.