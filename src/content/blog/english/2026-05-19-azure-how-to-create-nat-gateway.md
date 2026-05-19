---
title: "How to create a NAT Gateway in Azure"
meta_title: ""
description: ""
date: 2026-05-19T10:00:00-05:00
image: "/images/blog/azure/tuto/azure_how_to_create_nat_gateway_thumbnail.png"
categories: ["Azure", "Tutorial"]
author: "Maxime Hiez"
tags: ["Public IP address", "NAT Gateway", "VNet", "Firewall", "Zero Trust"]
draft: false
---
---

##### Introduction
I told you last March about the end of implicit Internet access for new *Virtual Networks* (*VNets*) in Azure and the need to configure an explicit Internet outbound solution (*Azure NAT Gateway*, firewall, or load balancer with egress rules).

Check the March 2026 article [HERE](https://maxime.hiez.ca/en/blog/2026-03-24-azure-new-vnets-end-implicit-outbound-internet).

---

##### Prerequisites
**<u>Required licenses</u>**
- An Azure subscription.

**<u>Azure resources</u>**
- A public IP address of type *Standard*.
- A resource group.
- Virtual Networks (VNets).

**<u>Administrator role</u>**
- An account with the *Contributor* or *Owner* role on the Azure subscription.

---

##### Step 1 : Sign in to the Microsoft Azure portal
Sign in to the Microsoft Azure portal by opening your web browser to https://portal.azure.com.

---

##### Step 2 : Create the Azure NAT Gateway
In the search bar at the top of the screen, type *<u>NAT gateways</u>*, and click the proposed menu.

Click *<u>Create</u>* to create the NAT gateway.

![image](/images/blog/azure/tuto/azure_how_to_create_nat_gateway_001.png)

Click *<u>Add public IP addresses or prefixes</u>* to assign an available public IP address or use a new one that is automatically created.

![image](/images/blog/azure/tuto/azure_how_to_create_nat_gateway_002.png)

Assign the Virtual Network(s) you wish to route through the NAT Gateway.

![image](/images/blog/azure/tuto/azure_how_to_create_nat_gateway_003.png)

---

##### Step 3 : Validate the result
From a server / computer connected to the relevant subnet, navigate to [https://whatismyip.com](https://whatismyip.com). The displayed IP address should be the one you assigned to the NAT Gateway.

![image](/images/blog/azure/tuto/azure_how_to_create_nat_gateway_004.png)

Also, we can see in the Azure statistics that traffic has been collected.

![image](/images/blog/azure/tuto/azure_how_to_create_nat_gateway_005.png)

---

##### Conclusion
You now know how to create a NAT Gateway in Azure.

---

##### Sources
[Microsoft - Techcommunity](https://techcommunity.microsoft.com/discussions/azurevirtualdesktopforum/azure%E2%80%99s-default-outbound-access-changes-guidance-for-azure-virtual-desktop-custo/4494462)

[Microsoft Learn - Default outbound access in Azure](https://learn.microsoft.com/en-us/azure/virtual-network/ip-services/default-outbound-access)

[Microsoft Learn - Azure NAT Gateway](https://learn.microsoft.com/en-us/azure/nat-gateway/nat-overview)

[Microsoft - Azure NAT Gateway pricing](https://azure.microsoft.com/en-us/pricing/details/azure-nat-gateway)

---


Did you enjoy this post ? If you have any questions, comments or suggestions, please feel free to send me a message from the contact form.

Don't forget to follow us and share this post.