---
title: "How to reroute a 404 call with an Audiocodes SBC"
meta_title: ""
description: ""
date: 2025-10-09T10:00:00-05:00
image: "/images/blog/sbc/tuto/sbc_audiocodes_how_to_reroute_calls_on_404_thumbnail.png"
categories: ["Audiocodes", "Tutorial"]
author: "Maxime Hiez"
tags: ["Telephony", "Direct Routing", "Syslog", "SBC", "Routing", "CUCM"]
draft: false
---
---

##### Introduction
When a call is sent to an unknown number or extension in a business telephony solution, the call fails and returns an error. Sometimes, this extension is known in another system and must be answered even if the first system rejected the call. Here is a detailed explanation of how to configure alternative routing in your *SBC* (*Session Border Controller*).

---

##### Explanation of the problem
When I work on a telephony migration to Microsoft Teams, I set up a SIP trunk that allows me to connect the existing *PBX* to Teams through an SBC. This hybrid architecture allows me to migrate services smoothly while maintaining service continuity with the legacy system. This way, a Teams user can call a user in the PBX and vice versa. The SBC also allows me to connect the carrier's SIP trunk and third-party solutions that operate within the company (analog or SIP systems, etc.).

The image below shows an example of a multi-service configuration : *Teams*, *Telus* (carrier), analog gateways (*ATA*), *CUCM* (*PBX*) and *Intrado* (911 console).

![image](/images/blog/sbc/tuto/sbc_audiocodes_how_to_reroute_calls_on_404_001.png)

In one of my current projects (with a city), we need to connect the citizens' 911 call handling solution to Teams so that calls can be handled by an agent from their Teams client. However, since we're in the process of migrating, not all agents have yet been migrated to Teams, and some are still using a phone connected to the Cisco PBX (CUCM). Calls must therefore be handled by Teams or Cisco.

So how do we know where to send the call for handling when we don't know which solution each agent is logged into ? If calls are sent to Teams and the extension doesn't exist, the call returns a *404 - User Not Found* error and hangs up. That's a lost call !

The solution is to set up routing based on the 404 code returned by Teams to the SBC. The SBC sends all calls to Teams and as soon as a 404 error is returned, the SBC reroutes the call into the PBX to connect the call with the Cisco agent.

---

##### Prerequisites
**<u>Administrator role</u>**
- An administrator account to access the Audiocodes SBC.

---

##### Step 1 : Log in to the SBC
Connect to the SBC by opening your web browser to https://YOUR_IP_ADDRESS.

![image](/images/blog/sbc/tuto/sbc_audiocodes_enable_telephony_ldap_routing_001.png)

---

##### Step 2 : Create an alternate routing code
Click *<u>Setup</u>*, *<u>Signaling & Media</u>*, then *<u>SBC</u>*, and *<u>Alternative Reasons Set</u>*.

Click *<u>New</u>*, and create the *404 Not Found* code.

![image](/images/blog/sbc/tuto/sbc_audiocodes_how_to_reroute_calls_on_404_003.png)

---

##### Step 3 : Add the code to the Teams IP Group
Click *<u>Setup</u>*, *<u>Signaling & Media</u>*, then *<u>Core Entities</u>*, and *<u>IP Groups</u>*.

Edit your Teams IP Group and add the 404 code you created to the *SBC Alternative Routing Reasons Set* attribute.

![image](/images/blog/sbc/tuto/sbc_audiocodes_how_to_reroute_calls_on_404_004.png)

---

##### Step 4 : Create an alternative routing rule
Click *<u>Setup</u>*, *<u>Signaling & Media</u>*, then *<u>SBC</u>*, and *<u>IP-to-IP Routing</u>*.

Add a new routing rule to route calls to the CUCM, below the rule that routes calls to Teams. This new routing rule must have the *Alternative Route Option* attribute configured with the value *Alternative Route Consider Inputs*.

![image](/images/blog/sbc/tuto/sbc_audiocodes_how_to_reroute_calls_on_404_005.png)

---

##### Call analysis
We can see in the *Syslog* capture of my Audiocodes SBC that my call is sent by Intrado to the SBC, which then sends it to the first Teams proxy; the call is returned with a 404 error since the *+1234* extension is unknown there. The call is tested on all three Teams proxies before being sent to the CUCM proxy, which accepts the call (*200 OK (SDP)*) since the *+1234* extension is known there.

![image](/images/blog/sbc/tuto/sbc_audiocodes_how_to_reroute_calls_on_404_006.png)

---

##### Conclusion
You now know how to configure 404-based alternate routing on an Audiocodes SBC.

---

##### Sources
[Audiocodes - SIP response codes](https://techdocs.audiocodes.com/session-border-controller-sbc/mp-1288/user-manual/version-760/Content/UM/Configuring%20SIP%20Response%20Codes%20for%20Alternative%20Routing%20Reasons.htm)

---


Did you enjoy this post ? If you have any questions, comments or suggestions, please feel free to send me a message from the contact form.

Don't forget to follow us and share this post.