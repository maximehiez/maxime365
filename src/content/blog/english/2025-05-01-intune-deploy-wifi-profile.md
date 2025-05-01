---
title: "How to Create a WiFi Profile for Windows 10/11 via Intune"
meta_title: ""
description: ""
date: 2025-05-01T10:00:00-05:00
image: "/images/blog/intune/tuto/intune_deploy_wifi_profile_thumbnail.png"
categories: ["Intune", "Tutorial"]
author: "Maxime Hiez"
tags: ["WiFi"]
draft: false
---
---

##### Introduction
In modern organizations, providing secure and seamless Wi-Fi connectivity to business devices is essential.<br/>
Manually configuring Wi-Fi settings on multiple devices can be time-consuming and error-prone. Intune Wi-Fi profiles simplify this process by centralizing management of wireless network settings and pushing them to enrolled Windows, macOS, iOS, and Android devices. This approach strengthens security, ensures compliance, and simplifies connection without manually entering credentials.

---

##### Prerequisites
**<u>A Windows 10/11 PC</u>**
- A Windows 10/11 PC enrolled in Intune.

**<u>An Entra ID group</u>**
- An Entra ID security group that contains the relevant PCs.

**<u>Administrator role</u>**
- An account with the *Global Administrator* or *Intune Administrator* role to access the Microsoft Intune Admin Center.

---

##### Step 1 : Sign in to the Microsoft Intune Admin Center
Sign in to the Microsoft Intune Admin Center by opening your web browser to https://intune.microsoft.com.

---

##### Step 2 : Create a WiFi profile
In the left menu, click *<u>Devices</u>*, then *<u>Configuration</u>*.

Create a rule for the *Windows 10 and later* platform with the *Template* profile type.<br/>
Search for *Wi-Fi* in the name filter.

![image](/images/blog/intune/tuto/intune_deploy_wifi_profile_001.png)

Use the following profile types :
- *Basic* if your WiFi connection supports simple configurations such as SSID and password.
- *Enterprise* if your WiFi connection supports complex configurations such as 802.1X authentication.

Enter the connection name (*SSID*) as well as its security type and password.

![image](/images/blog/intune/tuto/intune_deploy_wifi_profile_002.png)

Assign the security group containing your Windows PC.

![image](/images/blog/intune/tuto/intune_deploy_wifi_profile_003.png)

Optionally, a rule can be created to apply the configuration only to certain computer versions.

![image](/images/blog/intune/tuto/intune_deploy_wifi_profile_004.png)

---

##### Step 3 : Confirm the WiFi connection
After a few minutes, the new profile should be synchronized to the target computers, which should automatically receive the WiFi connection.

![image](/images/blog/intune/tuto/intune_deploy_wifi_profile_005.png)

The computer has received the configuration and is automatically connected to WiFi.

![image](/images/blog/intune/tuto/intune_deploy_wifi_profile_006.png)

---

##### Conclusion
You now know how to create a WiFi profile on a Windows computer via Intune.

---

##### Sources
[Microsoft Learn - WiFi profile](https://learn.microsoft.com/en-us/intune/intune-service/configuration/wi-fi-settings-windows)

---


Did you enjoy this post ? If you have any questions, comments or suggestions, please feel free to send me a message from the contact form.

Don't forget to follow us and share this post.