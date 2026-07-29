---
title: "How to announce your visitors in Teams with Power Automate"
meta_title: ""
description: ""
date: 2026-07-29T10:00:00-05:00
image: "/images/blog/powerautomate/tuto/powerautomate_how_to_build_visitor_reception_system_thumbnail.png"
categories: ["Power Automate", "Tutorial"]
author: "Maxime Hiez"
tags: ["Automation"]
draft: false
---
---

##### Introduction
Announcing a visitor from the reception desk is a key step of the welcome process in a company. For a smooth handling, the reception must identify the visitor, notify the host (by phone, chat, ...), ask them to come and pick them up and, if necessary, provide an access badge. Solutions already exist on the market ; *Vizito*, *Elia* and others can be found. These solutions integrate directly with *Microsoft 365* and give an excellent first impression, secure access to the premises and streamline the handling of your guests.

I built a simple solution in my environment using *Power Automate* combined with *Teams*, *SharePoint*, *Outlook* and *Forms*, which manages your visitors with the tools and licenses you already have.

---

##### Prerequisites
**<u>Required licenses</u>**
- *Power Automate Free* (included in all *Microsoft 365* and *Business* licenses).

---

##### Step 1 : Sign in to the Microsoft SharePoint Portal
Sign in to Microsoft SharePoint Portal by opening your web browser to https://YOUR_TENANT.sharepoint.com/_layouts/15/sharepoint.aspx.

---

##### Step 2 : Create a SharePoint site
In the left menu, click *<u>Create site</u>*, then *<u>Teams site</u>*, and give a relevant name and site address.

![image](/images/blog/powerautomate/tuto/powerautomate_how_to_build_visitor_reception_system_001.png)

---

##### Step 3 : Create 2 SharePoint lists
In the left menu, click *<u>New</u>*, then *<u>List</u>*.

![image](/images/blog/powerautomate/tuto/powerautomate_how_to_build_visitor_reception_system_002.png)

Add columns to your 2 lists with necessary information such as :

**<u>VisitorLog</u>**
- VisitorCompany
- HostEmail
- VisitDate
- Purpose
- Status
- ArrivedAt
- ...
<br/><br/>

**<u>FlowErrorLog</u>**
- RunUrl
- FailedAction
- ErrorMessage
- ErrorTime
- ...
<br/><br/>

---

##### Step 4 : Sign in to Microsoft Forms
Sign in to Microsoft Forms by opening your web browser to https://forms.cloud.microsoft.

---

##### Step 5 : Create 1 Forms form
![image](/images/blog/powerautomate/tuto/powerautomate_how_to_build_visitor_reception_system_003.png)

Add questions to your form with necessary information such as :

**<u>Visitor Pre-registration</u>**
- Visitor full name
- Visitor company
- Host email
- Visit date
- Purpose of visit

---

##### Step 6 : Sign in to Microsoft Power Automate
Sign in to Microsoft Power Automate by opening your web browser to https://make.powerautomate.com.

---

##### Step 7 : Create a first flow to retrieve the scheduled visit
In the left menu, click *<u>Create</u>*, then *<u>Automate cloud flow</u>* and choose *<u>When a new response is submitted</u>*.

![image](/images/blog/powerautomate/tuto/powerautomate_how_to_build_visitor_reception_system_004.png)

Chain actions and variables to retrieve the Forms form submitted by the user. Use the retrieved variables to send them to the *VisitorLog* SharePoint list.

![image](/images/blog/powerautomate/tuto/powerautomate_how_to_build_visitor_reception_system_005.png)

---

##### Step 8 : Create a second flow to confirm the visitor arrival
In the left menu, click *<u>Create</u>*, then *<u>Automate cloud flow</u>* and choose *<u>When an item is created or modified</u>*.

![image](/images/blog/powerautomate/tuto/powerautomate_how_to_build_visitor_reception_system_006.png)

Update the visit status to trigger a notification to the visited person and inform them of the visitor arrival.

![image](/images/blog/powerautomate/tuto/powerautomate_how_to_build_visitor_reception_system_007.png)

---

##### Step 9 : Create a third flow to retrieve unscheduled visits
In the left menu, click *<u>Create</u>*, then *<u>Instant cloud flow</u>* and choose *<u>Manually trigger a flow</u>*.

![image](/images/blog/powerautomate/tuto/powerautomate_how_to_build_visitor_reception_system_008.png)

Retrieve the information entered manually by the receptionist to notify the visited person. Use the retrieved variables to create an entry in the *VisitorLog* SharePoint list.

![image](/images/blog/powerautomate/tuto/powerautomate_how_to_build_visitor_reception_system_009.png)

---

##### Results
The visitor registers their visit themselves via the published form. The responses will be saved in SharePoint.

![image](/images/blog/powerautomate/tuto/powerautomate_how_to_build_visitor_reception_system_010.png)

The visited person receives an email...

![image](/images/blog/powerautomate/tuto/powerautomate_how_to_build_visitor_reception_system_011.png)

... and a message in Teams confirming the visit.

![image](/images/blog/powerautomate/tuto/powerautomate_how_to_build_visitor_reception_system_012.png)

When the visitor arrives on site, their arrival is confirmed by the receptionist, and a Teams message is sent to the visited person.

![image](/images/blog/powerautomate/tuto/powerautomate_how_to_build_visitor_reception_system_013.png)
<br/><br/>

If a visitor shows up at the reception desk without having registered in advance, the receptionist can fill a form to announce their arrival with a message in Teams.

![image](/images/blog/powerautomate/tuto/powerautomate_how_to_build_visitor_reception_system_014.png)

---

##### Let's go further
I have a few ideas worth exploring that I will test when I have the time :
1. Create a *PowerApps* application and display it on a tablet at the entrance so visitors can confirm their arrival themselves
2. Add the *"Walk-in"* option in that same application
3. Send a daily report to the reception desk with the list of visits scheduled for the next day
4. Add options such as :
    - Signature of the safety rules
    - Printing of a temporary badge
    - Time of departure from the premises
    - ...

---

##### Conclusion
You now know how to create a tool to announce visitors in Teams with Power Automate.

---

##### Sources
[Microsoft Learn - Power Automate](https://learn.microsoft.com/en-us/power-automate)

---


Did you enjoy this post ? If you have any questions, comments or suggestions, please feel free to send me a message from the contact form.

Don't forget to follow us and share this post.