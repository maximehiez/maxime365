---
title: "How to locate a lost/stolen Windows computer via Intune"
meta_title: ""
description: ""
date: 2025-11-10T10:00:00-05:00
image: "/images/blog/intune/tuto/intune_how_to_locate_windows_device_thumbnail.png"
categories: ["Intune", "Tutorial"]
author: "Maxime Hiez"
tags: ["Locate", "Lost", "Stolen"]
draft: false
---
---

##### Introduction
Windows 10/11 includes an option to locate a lost or stolen device ; the *Find My Device* feature. It's possible to track the location of a PC, laptop, or tablet, provided certain conditions are met (Microsoft account, internet connection, etc.). This simple solution can make all the difference in case of loss or theft.

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

##### Step 2 : Activate the *Find My Device* feature
In the left menu, click *<u>Devices</u>*, then *<u>Configuration</u>*.

Create a rule for the *Windows 10 and later* platform with with the *Settings catalog* profile type.

![image](/images/blog/intune/tuto/intune_how_to_locate_windows_device_001.png)

Search for *Find My Device* in the name filter, click *<u>Experience</u>*, and check the *<u>Allow Find My Device</u>* box.

![image](/images/blog/intune/tuto/intune_how_to_locate_windows_device_002.png)

Assign the security group containing your Windows PC.

![image](/images/blog/intune/tuto/intune_how_to_locate_windows_device_003.png)

---

##### Step 3 : Enable location services
In the left-hand menu, click *<u>Devices</u>*, then *<u>Configuration</u>*.

Create a rule for the *Windows 10 and later* platform with with the *Settings catalog* profile type.

![image](/images/blog/intune/tuto/intune_how_to_locate_windows_device_004.png)

Search for *Location and Sensors* in the name filter, click *<u>Location and Sensors</u>*, and check the *<u>Tun off location (Users)</u>* box.

![image](/images/blog/intune/tuto/intune_how_to_locate_windows_device_005.png)

Assign the security group containing your Windows PC.

![image](/images/blog/intune/tuto/intune_how_to_locate_windows_device_006.png)

---

##### Step 4 : Locate the computer
After a few minutes, the new configurations should be synchronized on the target computers, which should have their functionality enabled.

![image](/images/blog/intune/tuto/intune_how_to_locate_windows_device_007.png)

In the left-hand menu, click *<u>Devices</u>*, then *<u>All devices</u>*, and click the desired computer.

Click the three dots at the end of the action bar, then click <u>*Locate device</u>*.

![image](/images/blog/intune/tuto/intune_how_to_locate_windows_device_008.png)

After a few moments, the lost (or stolen) computer is located.

![image](/images/blog/intune/tuto/intune_how_to_locate_windows_device_009.png)

<u>Note</u> : A notification is supposed to appear on the computer, but I did not receive one during the setup of this tutorial.

---

##### Conclusion
You now know how to locate a Windows computer via Intune.

---

##### Sources
[Microsoft Learn - Locare device](https://learn.microsoft.com/en-us/intune/intune-service/remote-actions/device-locate?pivots=windows)

---


Did you enjoy this post ? If you have any questions, comments or suggestions, please feel free to send me a message from the contact form.

Don't forget to follow us and share this post.