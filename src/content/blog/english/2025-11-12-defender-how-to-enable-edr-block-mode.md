---
title: "How to activate Defender EDR in \"Block Mode\""
meta_title: ""
description: ""
date: 2025-11-12T10:00:00-05:00
image: "/images/blog/defender/tuto/defender_how_to_enable_edr_block_mode_thumbnail.png"
categories: ["Defender", "Tutorial"]
author: "Maxime Hiez"
tags: ["EDR", "Antivirus", "Block Mode", "Security"]
draft: false
---
---

##### Introduction
In a context of constantly evolving cyber threats, antivirus solutions are no longer sufficient to effectively protect workstations. *Microsoft Defender for Endpoint*'s *Block Mode* is an often overlooked but essential feature for strengthening endpoint protection in a Microsoft 365 environment. It allows *EDR* (*Endpoint Detection and Response*) to intervene even on devices using third-party antivirus software, actively blocking detected threats instead of simply reporting them. By enabling Block Mode, you empower Defender to act as an additional layer of protection, capable of stopping a malicious executable or post-exploitation activity as soon as it is identified.

---

##### Prerequisites
**<u>A Windows 10/11 PC</u>**
- A Windows 10/11 PC enrolled in Intune.

**<u>An Entra ID group</u>**
- An Entra ID security group that contains the relevant PCs.

**<u>Licences nécessaires</u>**
- *Microsoft 365 Business Premium*, *Microsoft 365 E5*.
- *Microsoft Defender for Endpoint Plan 2* in addition to another license (*E3*, ...).

**<u>Administrator roles</u>**
- An account with the *Global Administrator* or *Intune Administrator* role to access the Microsoft Intune Admin Center.
- An account with the *Global Administrator* or *Security Administrator* role to access the Microsoft Defender Portal.

---

##### Step 1 : Sign in to the Microsoft Defender Portal
Sign in to the Microsoft Defender Portal by opening your web browser to https://security.microsoft.com.

---

##### Step 2 : Activate *Block Mode*
In the left menu, click *<u>System</u>*, then *<u>Settings</u>*.

![image](/images/blog/defender/tuto/defender_how_to_enable_edr_block_mode_001.png)

Click *<u>Endpoints</u>*, then *<u>Advanced features</u>*, and activate the *Enable EDR in block mode* switch.

![image](/images/blog/defender/tuto/defender_how_to_enable_edr_block_mode_002.png)

---

##### Step 3 : Sign in to the Microsoft Intune Admin Center
Sign in to the Microsoft Intune Admin Center by opening your web browser to https://intune.microsoft.com.

---

##### Step 4 : Activate the *Endpoint Detection and Response* policy
In the left menu, click *<u>Endpoint security</u>*, then *<u>Endpoint detection and response</u>*.

Click *<u>Deploy preconfigured policy</u>*, and create a policy for the *Windows* platform, keeping all the default options.

![image](/images/blog/defender/tuto/defender_how_to_enable_edr_block_mode_003.png)

After a few minutes, the policy is deployed on the device.

![image](/images/blog/defender/tuto/defender_how_to_enable_edr_block_mode_004.png)

---

##### Step 5 : Validate the *Block Mode*
In the left menu, click *<u>Assets</u>*, then *<u>Devices</u>*.

The device is now visible in the Defender console.

![image](/images/blog/defender/tuto/defender_how_to_enable_edr_block_mode_005.png)

It is also possible to verify the successful deployment via the following PowerShell command :
```powershell
Get-MpComputerStatus
```

As you can see on my computer, the *AMRunningMode* attribute returns the value *EDR Block Mode*. You can also see in my taskbar that I have two antivirus softwares, *Avast* and *Defender*.

![image](/images/blog/defender/tuto/defender_how_to_enable_edr_block_mode_006.png)

---

##### Conclusion
You now know how to enable Defender EDR in Block Mode.

---

##### Sources
[Microsoft Learn - Endpoint detection and response in Block Mode](https://learn.microsoft.com/en-us/defender-endpoint/edr-in-block-mode)

---


Did you enjoy this post ? If you have any questions, comments or suggestions, please feel free to send me a message from the contact form.

Don't forget to follow us and share this post.