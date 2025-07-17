---
title: "How to convert a public IP to Standard in Azure"
meta_title: ""
description: ""
date: 2025-07-17T10:00:00-05:00
image: "/images/blog/azure/tuto/azure_upgrade_public_ip_basic_to_standard_thumbnail.png"
categories: ["Azure", "Tutoriel"]
author: "Maxime Hiez"
tags: ["Adresse IP publique", "SKU"]
draft: false
---
---

##### Introduction
Microsoft has officially announced the retirement of Azure *Basic* public IP addresses, with a target date of September 30, 2025. This decision marks a significant step in the evolution of Azure networking services, favoring more secure, resilient, and modern configurations. For organizations still using this type of address, it is time to prepare for the migration to the *Standard* SKU, or risk seeing their services impacted.

---

##### Why switch to the Standard SKU ?
The Standard SKU offers several advantages over the Basic SKU :
- Default security : Inbound traffic is blocked unless explicitly authorized via an *NSG* (*Network Security Group*)
- Extended compatibility : Works with *Azure Firewall*, *Standard Load Balancer*, *NAT Gateway*, etc.
- Increased resilience : Support for availability zones (zonal and zone-redundant)
- Better integration with modern Azure services

---

##### Prerequisites
**<u>Licenses required</u>**
- An Azure subscription.

**<u>Azure resources</u>**
- A public IP address of type *Basic*.

**<u>Administrator role</u>**
- An account with the *Contributor* or *Owner* role on the Azure subscription.

---

##### Step 1 : Sign in to the Microsoft Azure portal
Sign in to the Microsoft Azure portal by opening your web browser to https://portal.azure.com.

---

##### Step 2 : Access public IP addresses
In the search bar at the top of the screen, type *<u>Public IP addresses</u>*, and click the proposed menu.

![image](/images/blog/azure/tuto/azure_upgrade_public_ip_basic_to_standard_001.png)

Here we can see that its SKU is of type *Basic* and that a blue banner tells us that it must be converted to *Standard* SKU.

![image](/images/blog/azure/tuto/azure_upgrade_public_ip_basic_to_standard_002.png)

---

##### Step 3 : Unassign the public IP address
To convert it, you must first unassign it. Click *<u>Dissociate</u>*, then *<u>Yes</u>*.

![image](/images/blog/azure/tuto/azure_upgrade_public_ip_basic_to_standard_003.png)

---

##### Step 4 : Convert the public IP address
In the blue banner, click *<u>Upgrade to Standard SKU...</u>*, then *<u>Yes</u>*.

![image](/images/blog/azure/tuto/azure_upgrade_public_ip_basic_to_standard_004.png)

The conversion takes a few seconds and the SKU changes to *Standard*.

![image](/images/blog/azure/tuto/azure_upgrade_public_ip_basic_to_standard_005.png)

---

##### Step 5 : Reassign the public IP address
Click *<u>Associate</u>*, then assign the public IP address to your device's interface.

![image](/images/blog/azure/tuto/azure_upgrade_public_ip_basic_to_standard_006.png)

---

##### Conclusion
Organizations still have a few weeks to identify, plan, and migrate their resources to the Standard SKU, which is more robust and better integrated with modern Azure services. By planning ahead now, IT teams can avoid service disruptions and take advantage of the advanced features offered by the new model.<br/><br/>
You now know how to convert a public IP to Standard in Azure.

---

##### Sources
[Microsoft Learn - Azure Public IP Addresses](https://learn.microsoft.com/en-us/azure/virtual-network/ip-services/public-ip-basic-upgrade-guidance)

---


Did you enjoy this post ? If you have any questions, comments or suggestions, please feel free to send me a message from the contact form.

Don't forget to follow us and share this post.