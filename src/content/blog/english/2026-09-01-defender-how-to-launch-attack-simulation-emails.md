---
title: "How to launch an email attack simulation with Defender"
meta_title: ""
description: ""
date: 2026-09-01T10:00:00-05:00
image: "/images/blog/defender/tuto/defender_how_to_launch_attack_simulation_emails_thumbnail.png"
categories: ["Defender", "Tutorial"]
author: "Maxime Hiez"
tags: ["Attack", "Security", "Phishing"]
draft: false
---
---

##### Introduction
Training your users to recognize a *phishing* email cannot be limited to an annual awareness session, it is a reflex that is maintained, tested and measured under realistic conditions. *Microsoft Defender for Office 365* offers exactly this approach with its attack simulation feature (Attack simulation training), which allows you to send real phishing, credential harvesting or malicious attachment campaigns, without the slightest real risk, directly to your employees' inboxes. The goal : identify the most vulnerable users, measure how behavior evolves over time, and automatically trigger targeted training for the people who click, enter credentials or open suspicious attachments.

---

##### Prerequisites
**<u>Required licenses</u>**
- *Microsoft 365 E5*.
- *Microsoft Defender for Office 365 Plan 2* in addition to another license (*Business Standard*, ...).

**<u>Administrator role</u>**
- An account with the *Global Administrator* or *Security Administrator* role to access the Microsoft Defender Portal.

---

##### Step 1 : Sign in to the Microsoft Defender Portal
Sign in to the Microsoft Defender Portal by opening your web browser to https://security.microsoft.com.

---

##### Step 2 : Create the attack campaign
In the left menu, click *<u>Email & collaboration</u>*, then *<u>Attack simulation training</u>*, and *<u>Launch a simulation</u>*.

![image](/images/blog/defender/tuto/defender_how_to_launch_attack_simulation_emails_001.png)

Select the type of attack you want to launch.

![image](/images/blog/defender/tuto/defender_how_to_launch_attack_simulation_emails_002.png)

Set a name and a description.

![image](/images/blog/defender/tuto/defender_how_to_launch_attack_simulation_emails_003.png)

Select the page style used for the attack ...

![image](/images/blog/defender/tuto/defender_how_to_launch_attack_simulation_emails_004.png)

... and the target.

![image](/images/blog/defender/tuto/defender_how_to_launch_attack_simulation_emails_005.png)

Assign the training that will be required for the people who fail the test ...

![image](/images/blog/defender/tuto/defender_how_to_launch_attack_simulation_emails_006.png)

... and the final page of the test.

![image](/images/blog/defender/tuto/defender_how_to_launch_attack_simulation_emails_007.png)

---

##### Step 3 : Receive the email
The users targeted by the campaign will receive a fake attack email. They will not know that it is a test.

![image](/images/blog/defender/tuto/defender_how_to_launch_attack_simulation_emails_008.png)

---

##### Step 4 : Click the phishing link
The email contains a malicious link. Click it to simulate a phishing action. The link redirects to a fake Microsoft page offering to sign in. Enter your Microsoft credentials.

![image](/images/blog/defender/tuto/defender_how_to_launch_attack_simulation_emails_009.png)

Signing in automatically redirects you to the campaign alert page. Your account is *<u>virtually compromised</u>*.

![image](/images/blog/defender/tuto/defender_how_to_launch_attack_simulation_emails_010.png)

The training will be offered to strengthen the user's skills.

![image](/images/blog/defender/tuto/defender_how_to_launch_attack_simulation_emails_011.png)

---

##### Step 4b : Report the email
The goal of this campaign is to push users to detect (real) phishing emails and report them.

Click *<u>Report</u>*, and *<u>Report phishing</u>* to report the email.

![image](/images/blog/defender/tuto/defender_how_to_launch_attack_simulation_emails_012.png)

---

##### Step 5 : Analyze the results
From the Microsoft Defender Portal, the campaign result is available with the statistics.

![image](/images/blog/defender/tuto/defender_how_to_launch_attack_simulation_emails_013.png)

Here we can see the actions performed by the 2 users.

![image](/images/blog/defender/tuto/defender_how_to_launch_attack_simulation_emails_014.png)

---

##### Conclusion
You now know how to launch an email attack simulation with Defender.

---

##### Sources
[Microsoft Learn - Attack simulation training](https://learn.microsoft.com/en-us/defender-office-365/attack-simulation-training-get-started)

---


Did you enjoy this post ? If you have any questions, comments or suggestions, please feel free to send me a message from the contact form.

Don't forget to follow us and share this post.
