---
title: "How to remove \"Unlock Teams Premium\" in Teams"
meta_title: ""
description: ""
date: 2026-06-23T10:00:00-05:00
image: "/images/blog/teams/tuto/teams_how_to_remove_unlock_teams_premium_option_thumbnail.png"
categories: ["Teams", "Tutorial"]
author: "Maxime Hiez"
tags: ["Teams Premium", "Licenses", "Self-service", "PowerShell"]
draft: false
---
---

##### Introduction
By default, users can obtain a *Microsoft Teams Premium* trial license by requesting one directly from their Teams client. This can lead to subsequent billing issues, so it is advisable to disable this option.

---

##### What does it look like ?
If a user clicks the ***...*** next to their profile icon in Teams, the *<u>Unlock Teams Premium</u>* button becomes available ...

![image](/images/blog/teams/tuto/teams_how_to_remove_unlock_teams_premium_option_001.png)

... and the trial license can be activated.

![image](/images/blog/teams/tuto/teams_how_to_remove_unlock_teams_premium_option_002.png)

---

##### Prerequisites
**<u>Administrator role</u>**
- An account with the *Global Administrator* or *Billing Administrator* role to access the Microsoft 365 Admin Center.

---

##### Step 1 : Sign in to the Microsoft 365 Admin Center
Sign in to the Microsoft 365 Admin Center by opening your web browser to https://admin.cloud.microsoft.

---

##### Step 2 : Disable self-service
In the left menu, click *<u>Settings</u>*, then *<u>Org Settings</u>*.

In the *<u>Services</u>* tab, click *<u>Self-service trials and purchases</u>* and disable *self-service trials and purchases* for the Microsoft Teams Premium license.

![image](/images/blog/teams/tuto/teams_how_to_remove_unlock_teams_premium_option_003.png)

---

##### Let's go further in PowerShell
Microsoft Teams Premium isn't the only license you should disable with self-service. The following PowerShell commands will allow you to list which licenses are affected :
```powershell
Install-Module -Name MSCommerce -Scope CurrentUser
Import-Module -Name MSCommerce
Connect-MSCommerce
Get-MSCommerceProductPolicies -PolicyId AllowSelfServicePurchase
```

The following PowerShell command will allow you to deactivate them all :
```powershell
Get-MSCommerceProductPolicies -PolicyId AllowSelfServicePurchase | Where { $_.PolicyValue -eq "Enabled"} | forEach { Update-MSCommerceProductPolicy -PolicyId AllowSelfServicePurchase -ProductId $_.ProductID -Enabled $false }
```

---

##### Validate the result
The result is visible after a few hours ; the *<u>Unlock Teams Premium</u>* button has disappeared.

![image](/images/blog/teams/tuto/teams_how_to_remove_unlock_teams_premium_option_004.png)

---

##### Conclusion
You now know how to disable self-service for Teams Premium (and other) licenses.

---

##### Sources
[Microsoft Learn - Self-service purchase](https://learn.microsoft.com/en-us/microsoft-365/commerce/subscriptions/allowselfservicepurchase-powershell?view=o365-worldwide)

---


Did you enjoy this post ? If you have any questions, comments or suggestions, please feel free to send me a message from the contact form.

Don't forget to follow us and share this post.