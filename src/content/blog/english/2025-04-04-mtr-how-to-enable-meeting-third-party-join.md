---
title: "How to enable Zoom and Webex meetings on MTR"
meta_title: ""
description: ""
date: 2025-04-04T10:00:00-05:00
image: "/images/blog/mtr/tuto/mtr_how_to_enable_meeting_third_party_join_thumbnail.png"
categories: ["MTR", "Tutorial"]
author: "Maxime Hiez"
tags: ["Teams Rooms", "MTRoW", "MTRoA", "Zoom", "Webex", "Microsoft Teams Rooms Pro Management", "Direct Guest Join", "Safe Links"]
draft: false
---
---

##### Introduction
In the modern business world, effective collaboration is essential. Organizations use various video conferencing platforms to stay connected, and it's crucial to be able to join meetings across different platforms without complications. This is where the *Direct Guest Join* feature for Microsoft Teams Rooms (MTRs) comes in. This innovation allows users to join *Zoom* and *Webex* meetings directly from their MTRs, simplifying meeting management and improving the flexibility of collaborative work environments.

---

##### Benefits of the Direct Guest Join feature
- Increased flexibility : Allows users to easily join meetings on different platforms without leaving the MTR interface.
- Simplified processes : Eliminates the need for complex setups and multiple steps to join third-party meetings.
- Improved collaboration : Facilitates collaboration between teams using different video conferencing platforms.

---

##### Prerequisites
**<u>Required licenses</u>**
- *Teams Rooms Pro* (or *Teams Rooms Basic*).

**<u>A Teams room</u>**
- An MTR deployed.

**<u>Administrator roles</u>**
- An account with the *Global Administrator* role to access Microsoft Teams Rooms Pro Management.
- An account with the *Global Administrator* or *Security Administrator* role to access the Microsoft Defender portal.
- An account with the *Global Administrator* or *Exchange Administrator* role to access Microsoft Exchange Online.

---

##### Step 1 : Sign in to the Microsoft Defender portal
Sign in to the Microsoft Defender portal by opening your web browser to https://security.microsoft.com.

---

##### Step 2 : Edit the Safe Links policy
If your organization uses the *Microsoft Defender for Office 365* *Safe Links* feature, it is important that Zoom and Webex URLs are not rewritten so that the room can read the invitation content.

In the left menu, click *<u>Policies & Rules</u>*, then *<u>Threat Policies</u>*, and *<u>Safe Links</u>*.

Edit the rule and add the following URLs :
- \*.zoom.us/* 
- \*.zoom.com/* 
- \*.zoomgov.com/* 
- \*.webex.com/* 

![image](/images/blog/mtr/tuto/mtr_how_to_enable_meeting_third_party_join_001.png)

---

##### Step 3 : Sign in to Microsoft Exchange Online using PowerShell
Sign in to Microsoft Exchange Online using the following PowerShell command :

```powershell
Connect-ExchangeOnline
```

---

##### Step 4 : Edit Exchange attributes
For an MTR to join a Teams meeting, they must use hidden properties in the Outlook invitation. However, to be able to join a Zoom or Webex meeting, they must be able to read the body of the invitation message. Therefore, you must preserve this body to ensure a *Join* button is generated. Also, these meetings are created outside of your organization, and it's important that the room calendar accepts the invitation.

Edit the two Exchange attributes *DeleteComments* and *ProcessExternalMeetingMessages* using the following PowerShell command :

```powershell
Set-CalendarProcessing -Identity "Salle.Montreal@hiez.ca" -DeleteComments $False -ProcessExternalMeetingMessages $True
```

It may take several minutes for the configuration to take effect. Your account should then look like this :

![image](/images/blog/mtr/tuto/mtr_how_to_enable_meeting_third_party_join_002.png)

---

##### Step 5 : Sign in to the Microsoft Teams Rooms Pro Management portal
Sign in to the Microsoft Teams Rooms Pro Management portal by opening your web browser to https://portal.rooms.microsoft.com.

---

##### Step 6 : Enable Zoom and Webex providers
In the left menu, click *<u>Rooms</u>*, then the room you want to edit.

Click *<u>Settings</u>*, then *<u>Meetings</u>*, and enable the Zoom and Webex providers.

![image](/images/blog/mtr/tuto/mtr_how_to_enable_meeting_third_party_join_003.png)

---

##### Result
After a few minutes of waiting, the MTR should be able to process the invitation and display a *Join* button with a Zoom (or Webex) logo on the tablet.

![image](/images/blog/mtr/tuto/mtr_how_to_enable_meeting_third_party_join_004.png)

---

##### What about an Android MTR room ?
You can follow steps 1, 2, 3, and 4, but activating Zoom and Webex is done directly from the tablet.

---

##### Conclusion
The Direct Guest Join feature for Microsoft Teams Rooms improves the flexibility and efficiency of collaborative work environments. By allowing users to join Zoom and Webex meetings directly from their MTR devices, this feature simplifies meeting management and strengthens team collaboration.<br/><br/>
You now know how to enable Zoom and Webex meetings on MTR.

---

##### Sources
[Microsoft Learn - Third-party meetings on MTR](https://learn.microsoft.com/en-us/microsoftteams/rooms/third-party-join?tabs=MTRW)

---


Did you enjoy this post ? If you have any questions, comments or suggestions, please feel free to send me a message from the contact form.

Don't forget to follow us and share this post.