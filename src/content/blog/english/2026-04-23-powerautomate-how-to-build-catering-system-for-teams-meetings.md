---
title: "How to build a catering service with Power Automate"
meta_title: ""
description: ""
date: 2026-04-23T10:00:00-05:00
image: "/images/blog/powerautomate/tuto/powerautomate_how_to_build_catering_system_for_teams_meetings_thumbnail.png"
categories: ["Power Automate", "Tutorial"]
author: "Maxime Hiez"
tags: ["Automation"]
draft: false
---
---

##### Introduction

There are already catering solutions for *Outlook* on the market ; examples include *arbooMEET*, *AskCody*, *GoBright*, and others. These solutions integrate directly with *Microsoft 365*, allowing users to order food and drinks when booking meeting rooms. These add-ons streamline processes, reduce email exchanges with caterers, and provide real-time updates on orders, room configurations, and attendee management.

I developed a simpler equivalent in my environment using *Power Automate*, combined with *Teams* and *SharePoint*.

---

##### Prerequisites
**<u>Required licenses</u>**
- *Power Automate Free* (included in all *Microsoft 365* and *Business* licenses).

---

##### Step 1 : Sign in to the Microsoft SharePoint Portal
Sign in to Microsoft SharePoint by opening your web browser to https://YOUR_TENANT.sharepoint.com/_layouts/15/sharepoint.aspx.

---

##### Step 2 : Create a SharePoint site
In the left menu, click *<u>Create site</u>*, then *<u>Teams site</u>*, and give a relevant site name and address.

![image](/images/blog/powerautomate/tuto/powerautomate_how_to_build_catering_system_for_teams_meetings_001.png)

---

##### Step 3 : Create 2 SharePoint lists
In the left menu, click *<u>New</u>*, then *<u>List</u>*.

![image](/images/blog/powerautomate/tuto/powerautomate_how_to_build_catering_system_for_teams_meetings_002.png)

Add columns to your two lists with necessary information such as :

**<u>CateringOrders</u>**
- RoomName
- RoomEmail
- OrganizerName
- OrganizerEmail
- MeetingStart
- MeetingEnd
- AttendeeCount
- StillWater
- ...
<br/><br/>

**<u>CateringPreferences</u>**
- OrganizerName
- OrganizerEmail
- PreferStillWater
- ...

---

##### Step 4 : Sign in to Microsoft Power Automate
Sign in to Microsoft Power Automate by opening your web browser to https://make.powerautomate.com.

---

##### Step 5 : Create a first flow to generate a survey
In the left menu, click *<u>Create</u>*, then *<u>Automate cloud flow</u>* and choose *<u>When a new event is created (V3)</u>*.

![image](/images/blog/powerautomate/tuto/powerautomate_how_to_build_catering_system_for_teams_meetings_003.png)

Chain actions and variables to create a form to send to Teams immediately after the user books a conference room. Use the retrieved variables to send them to the SharePoint lists *CateringOrders* and *CateringPreferences*.

![image](/images/blog/powerautomate/tuto/powerautomate_how_to_build_catering_system_for_teams_meetings_004.png)

Send the order summary to the team in charge of the service via a message in Teams.

---

##### Step 6 : Create a second flow to generate a reminder
In the left menu, click *<u>Create</u>*, then *<u>Scheduled cloud flow</u>* and choose a daily repetition.

![image](/images/blog/powerautomate/tuto/powerautomate_how_to_build_catering_system_for_teams_meetings_005.png)

Create a loop to iterate through the SharePoint *CateringOrders* list and check if there is an order scheduled for today and awaiting delivery.

![image](/images/blog/powerautomate/tuto/powerautomate_how_to_build_catering_system_for_teams_meetings_006.png)

Send the list of orders for the day to the team in charge of the service via a message in Teams.

---

##### Step 7 : Create a third flow to confirm delivery
In the left menu, click *<u>Create</u>*, then *<u>Scheduled cloud flow</u>* and choose a repetition every 5 minutes.

![image](/images/blog/powerautomate/tuto/powerautomate_how_to_build_catering_system_for_teams_meetings_007.png)

Create a loop to send a form in Teams to the team in charge to confirm delivery.

![image](/images/blog/powerautomate/tuto/powerautomate_how_to_build_catering_system_for_teams_meetings_008.png)

Send the order confirmation to the team in charge of the service via a message in Teams.

---

##### Step 8 : Create a fourth flow to send a satisfaction survey
In the left menu, click on *<u>Create</u>*, then on *<u>Scheduled cloud flow</u>* and choose a repetition every 30 minutes.

![image](/images/blog/powerautomate/tuto/powerautomate_how_to_build_catering_system_for_teams_meetings_009.png)

Create a loop to send a satisfaction survey in Teams to the person who placed the initial order. The loop will only retrieve completed meetings with a *"delivered order"* status.

![image](/images/blog/powerautomate/tuto/powerautomate_how_to_build_catering_system_for_teams_meetings_010.png)

Send the results of the satisfaction survey to the team in charge of the service via a message in Teams.

---

##### Step 9 : Send a Teams invitation
From Outlook (or Teams), send a meeting invitation and include a room.

![image](/images/blog/powerautomate/tuto/powerautomate_how_to_build_catering_system_for_teams_meetings_011.png)

---

##### Results
The user receives a form in Teams a few moments after booking the meeting.

![image](/images/blog/powerautomate/tuto/powerautomate_how_to_build_catering_system_for_teams_meetings_012.png)

The team in charge of orders then receives the list of what has been ordered as well as the meeting information.

![image](/images/blog/powerautomate/tuto/powerautomate_how_to_build_catering_system_for_teams_meetings_013.png)

On the morning of the meeting, the team in charge of orders receives confirmation of the day's deliveries to be made ...

![image](/images/blog/powerautomate/tuto/powerautomate_how_to_build_catering_system_for_teams_meetings_014.png)

... and 15 minutes before the meeting, you have to confirm whether or not the order has been delivered.

![image](/images/blog/powerautomate/tuto/powerautomate_how_to_build_catering_system_for_teams_meetings_015.png)

30 minutes after the meeting, a survey is sent to the person who booked the service ...

![image](/images/blog/powerautomate/tuto/powerautomate_how_to_build_catering_system_for_teams_meetings_016.png)

... and the team in charge of the orders receives the result.

![image](/images/blog/powerautomate/tuto/powerautomate_how_to_build_catering_system_for_teams_meetings_017.png)

---

##### Let's go further
I have two ideas worth exploring, which I'll test when I have time :
1. Create a *PowerApps* application connected to Teams to allow order processing within it rather than going to SharePoint.
2. Connect the solution with the *Uber Eats*, *DoorDash*, and other APIs to have a more complete menu.

---

##### Conclusion
You now know how to create a catering service with Power Automate.

---

##### Sources
[Microsoft Learn - Power Automate](https://learn.microsoft.com/en-us/power-automate)

---


Did you enjoy this post ? If you have any questions, comments or suggestions, please feel free to send me a message from the contact form.

Don't forget to follow us and share this post.