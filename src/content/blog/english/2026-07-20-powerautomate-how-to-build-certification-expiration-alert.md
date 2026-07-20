---
title: "How to monitor your certification renewals with Power Automate"
meta_title: ""
description: ""
date: 2026-07-20T10:00:00-05:00
image: "/images/blog/powerautomate/tuto/powerautomate_how_to_build_certification_expiration_alert_thumbnail.png"
categories: ["Power Automate", "Tutorial"]
author: "Maxime Hiez"
tags: ["Automation"]
draft: false
---
---

##### Introduction
Certification renewal is an important milestone for companies, yet it is very common for experts to forget to renew them. They then lose their partnerships and experts have to restart their certification process.

I built a simple solution in my environment using *Power Automate* combined with *Teams*, *SharePoint*, *Outlook* and *Forms*, which monitors the expiration dates of each expert's certifications and notifies them before their exams expire.

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

![image](/images/blog/powerautomate/tuto/powerautomate_how_to_build_certification_expiration_alert_001.png)

---

##### Step 3 : Create 3 SharePoint lists
In the left menu, click *<u>New</u>*, then *<u>List</u>*.

![image](/images/blog/powerautomate/tuto/powerautomate_how_to_build_certification_expiration_alert_002.png)

Add columns to your 3 lists with necessary information such as :

**<u>CertificationRegister</u>**
- EmployeeEmail
- Category
- IssuedOn
- ExpiryDate
- ValidatyMonths
- Status
- AlertTier
- CertificateReference
- ...
<br/><br/>

**<u>FlowErrorLog</u>**
- RunUrl
- FailedAction
- ErrorMessage
- ErrorTime
- ...
<br/><br/>

**<u>ComplianceHistory</u>**
- Compliance
- Total
- Valid
- ...

---

##### Step 4 : Sign in to Microsoft Forms
Sign in to Microsoft Forms by opening your web browser to https://forms.cloud.microsoft.

---

##### Step 5 : Create 2 Forms forms
![image](/images/blog/powerautomate/tuto/powerautomate_how_to_build_certification_expiration_alert_003.png)

Add questions to your 2 forms with necessary information such as :

**<u>Register Certification</u>**
- Certification name
- Issued date
- Expiry date
- Validaty period
- Category
- Certificate reference
- Mandatory
<br/><br/>

**<u>Training / Certification Completion</u>**
- Certification name
- Completion date
- Certificate reference

---

##### Step 6 : Sign in to Microsoft Power Automate
Sign in to Microsoft Power Automate by opening your web browser to https://make.powerautomate.com.

---

##### Step 7 : Create a first flow to retrieve the new certification
In the left menu, click *<u>Create</u>*, then *<u>Automate cloud flow</u>* and choose *<u>When a new response is submitted</u>*.

![image](/images/blog/powerautomate/tuto/powerautomate_how_to_build_certification_expiration_alert_004.png)

Chain actions and variables to retrieve the Forms form submitted by the user. Use the retrieved variables to send them to the *CertificationRegister* SharePoint list.

![image](/images/blog/powerautomate/tuto/powerautomate_how_to_build_certification_expiration_alert_005.png)

---

##### Step 8 : Create a second flow to analyze certifications and notify
In the left menu, click *<u>Create</u>*, then *<u>Scheduled cloud flow</u>* and choose a daily recurrence.

![image](/images/blog/powerautomate/tuto/powerautomate_how_to_build_certification_expiration_alert_006.png)

Create a loop to go through the *CertificationRegister* SharePoint list and check if there are certifications expiring in 60, 30 and 7 days.

![image](/images/blog/powerautomate/tuto/powerautomate_how_to_build_certification_expiration_alert_007.png)

When a certification is getting close to expiration, chain the following actions :
- 60 days : Teams message + email to the certification owner
- 30 days : Email to the certification owner and their supervisor
- 7 days : Teams message + email to the certification owner and their supervisor

---

##### Step 9 : Create a third flow to retrieve the certification update
In the left menu, click *<u>Create</u>*, then *<u>Automate cloud flow</u>* and choose *<u>When a new response is submitted</u>*.

![image](/images/blog/powerautomate/tuto/powerautomate_how_to_build_certification_expiration_alert_008.png)

Chain actions and variables to retrieve the Forms form submitted by the user. Use the retrieved variables to update the *CertificationRegister* SharePoint list.

![image](/images/blog/powerautomate/tuto/powerautomate_how_to_build_certification_expiration_alert_009.png)

---

##### Step 10 : Create a fourth flow to get a monthly follow-up
In the left menu, click *<u>Create</u>*, then *<u>Scheduled cloud flow</u>* and choose a monthly recurrence.

![image](/images/blog/powerautomate/tuto/powerautomate_how_to_build_certification_expiration_alert_010.png)

Create a loop to go through the *CertificationRegister* SharePoint list and send a monthly follow-up report of all certifications.

![image](/images/blog/powerautomate/tuto/powerautomate_how_to_build_certification_expiration_alert_011.png)

---

##### Results
The user registers their new certification themselves via the published form. The responses will be saved in SharePoint.

![image](/images/blog/powerautomate/tuto/powerautomate_how_to_build_certification_expiration_alert_012.png)

They receive a message in Teams confirming that their certification has been registered...

![image](/images/blog/powerautomate/tuto/powerautomate_how_to_build_certification_expiration_alert_013.png)

... and the team in charge of tracking certifications also receives a confirmation in Teams.

![image](/images/blog/powerautomate/tuto/powerautomate_how_to_build_certification_expiration_alert_014.png)

60 days before the expiration date, a Teams message is sent to the user to inform them of the situation and offer them to renew it by clicking a button.

![image](/images/blog/powerautomate/tuto/powerautomate_how_to_build_certification_expiration_alert_015.png)

An email is also sent to them.

![image](/images/blog/powerautomate/tuto/powerautomate_how_to_build_certification_expiration_alert_016.png)

30 days before the expiration date, if the certification has not been renewed, the user receives a new email and their manager is escalated.

![image](/images/blog/powerautomate/tuto/powerautomate_how_to_build_certification_expiration_alert_017.png)
<br/><br/>

When the user clicks the link received by email or the button received in Teams, they can enter the information received to extend the date of their certification.

![image](/images/blog/powerautomate/tuto/powerautomate_how_to_build_certification_expiration_alert_018.png)

---

##### Compliance tracking
Every month, a report is sent with a follow-up of the evolution of renewal and expiration dates.

![image](/images/blog/powerautomate/tuto/powerautomate_how_to_build_certification_expiration_alert_019.png)

---

##### Conclusion
You now know how to create a certification expiration monitoring tool with Power Automate.

---

##### Sources
[Microsoft Learn - Power Automate](https://learn.microsoft.com/en-us/power-automate)

---


Did you enjoy this post ? If you have any questions, comments or suggestions, please feel free to send me a message from the contact form.

Don't forget to follow us and share this post.