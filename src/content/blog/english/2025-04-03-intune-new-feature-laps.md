---
title: "How to create a Windows local admin account via Intune LAPS"
meta_title: ""
description: ""
date: 2025-04-03T10:00:00-05:00
image: "/images/blog/intune/tuto/intune_new_feature_laps_thumbnail.png"
categories: ["Intune", "Tutorial"]
author: "Maxime Hiez"
tags: ["LAPS", "Password", "Security"]
draft: false
---
---

##### Introduction
I wrote an article last February on how to replace the password of your MTR's local account using LAPS (Local Administrator Password Solution) in Intune. I concluded my article by explaining that it was possible to manage local administrator accounts on computers using the same solution. Microsoft has just released an update that allows you to create the account directly via LAPS without going through a configuration rule with a manual password.

Check the February 2025 article [HERE](https://maxime.hiez.ca/en/blog/2025-02-15-intune-enable-laps).

---

##### Prerequisites
**<u>A Windows 11 PC</u>**
- A Windows 11 24h2 PC enrolled in Intune.

**<u>An Entra ID group</u>**
- An Entra ID security group that contains the relevant PCs.

**<u>Administrator role</u>**
- An account with the *Global Administrator* or *Intune Administrator* role to access the Microsoft Intune Admin Center.

---

##### Step 1 : Sign in to the Microsoft Intune Admin Center
Sign in to the Microsoft Intune Admin Center by opening your web browser to https://intune.microsoft.com.

---

##### Step 2 : Create a LAPS Rule
In the left menu, click *<u>Endpoint security</u>*, then *<u>Account protection</u>*.

Create a rule for the *Windows 10 and later* platform with the *Local admin password solution (Windows LAPS)* profile.

![image](/images/blog/intune/tuto/intune_new_feature_laps_001.png)

Enable the options with the values ​​of your choice.<br/>
Unlike the MTR rule, which targeted the *Admin* account, here we will create a new account with a prefix (I chose *laps-admin-* here) and add a random numeric suffix.

![image](/images/blog/intune/tuto/intune_new_feature_laps_002.png)

Assign the security group containing your Windows PC.

![image](/images/blog/intune/tuto/intune_new_feature_laps_003.png)

---

##### Step 3 : Validate the new account
After a few minutes, the new account should be visible in the *Computer Management* window.

![image](/images/blog/intune/tuto/intune_new_feature_laps_004.png)

You can also validate by going to the *Event Viewer* and opening the *Applications and Services Logs / Microsoft / Windows / LAPS* directory.

![image](/images/blog/intune/tuto/intune_new_feature_laps_005.png)

---

##### Step 4 : Access the password
I covered this step in the February 2025 article, check it out (the link is in the introduction).

---

##### Conclusion
You now know how to create a local administrator account with LAPS in Intune.

---

##### Sources
[Microsoft Learn - Windows LAPS](https://learn.microsoft.com/en-us/windows-server/identity/laps/laps-overview)

[Microsoft Learn - What's new in Intune](https://learn.microsoft.com/en-us/intune/intune-service/fundamentals/whats-new#new-settings-for-windows-laps-policy)

---


Did you enjoy this post ? If you have any questions, comments or suggestions, please feel free to send me a message from the contact form.

Don't forget to follow us and share this post.