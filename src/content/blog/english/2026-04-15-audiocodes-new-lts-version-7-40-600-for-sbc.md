---
title: "New LTS version 7.40.600 for SBC Audiocodes"
meta_title: ""
description: ""
date: 2026-04-15T10:00:00-05:00
image: "/images/blog/sbc/sbc_audiocodes_new_lts_version_7_40_600_for_sbc_thumbnail.png"
categories: ["Audiocodes"]
author: "Maxime Hiez"
tags: ["Telephony", "Direct Routing", "SBC", "Update", "LTS"]
draft: false
---
---

##### Introduction
*Audiocodes* has officially announced a significant change in its support strategy : version *7.40A.600* is now the *Long-Term Support* (*LTS*) branch for its *SBCs* and *Media Gateways*, replacing *7.40A.500*. For *Microsoft Teams Direct Routing* environments and production telephony deployments, this is important information for supporting your systems : remaining on the old feed might work in the short term, but you will gradually fall behind in receiving bug fixes and security updates.

---

##### LR vs LTS at Audiocodes
Audiocodes offers two families of releases, with a very structured approach :

**<u>Latest Release (LR)</u>**
- Includes new features
- Released approximately every 4 months

**<u>Long Term Support (LTS)</u>**
- Focused on stability : bug fixes and security patches, without new features
- Based on an LR, released approximately every 12 to 15 months, with updates approximately every 2 months

If your priority is a *"stable"* production environment (the majority of telephony environments), LTS is the target.

---

##### Featured new features (baseline 7.40A.604.077)
Here are the key features introduced in the new LTS baseline :
- Fiber optic support for the *Mediant 7000* series
- Configurable maximum number of call rerouting attempts for 3xx SIP replies
- Preservation of the Reason Phrase from incoming SIP replies to outgoing messages
- Ability to manipulate Reason Phrases for SIP replies
- Updated SBC configuration wizard (version 2.61)
- Added encryption checksum header + validation for CLI script files

---

##### Why migrate to 7.40A.600 even if 7.40A.500 is working ?
**<u>Prepare for certificate projects</u>**

The lifespan of TLS certificates will be drastically reduced (from 397 days to 46 days by 2029), increasing the pressure on management and automation. Audiocodes anticipates the arrival of automatic renewal via *ACME* (announced for LR 7.6.3, H2 2026). In this context, remaining on a supported and scalable platform is all the more important.
<br/><br/>

**<u>Stay on a pipeline that receives patches</u>**

The most important message in the Audiocodes notice is this : 7.40A.500 will no longer be updated, while patches will be applied in 7.40A.600. Telephony is a critical environment ; a SIP/TLS bug or vulnerability can be enough to break a service.
<br/><br/>

**<u>Alignment with the Audiocodes Roadmap</u>**

The 7.4 LTS branch remains stability-oriented, and functional innovation will move to the 7.6 LR branch. Migrating to 7.40A.600 therefore means being correctly positioned within the versioning strategy (stability now, innovation elsewhere).

---

##### Concrete impacts for Teams Direct Routing
If you use Audiocodes SBCs for your Teams Direct Routing telephony and are still on version 7.40A.500 (or older), now is a good time to plan a migration to 7.40A.600, starting by checking the product notes.

---

##### Conclusion
The transition from version 7.40A.500 to 7.40A.600 is not a simple update ; it's a change in support branch. Audiocodes maintains 7.40A.500 in production but is ceasing all new maintenance on it and redirecting fixes to 7.40A.600, which is now the reference LTS starting with 7.40A.604.077. For Teams Direct Routing (and other) environments, migrating to the new LTS is the healthiest decision: support, fixes, stability, and a clear path towards upcoming innovations on the 7.6 LR side.

---

##### Sources
[Audiocodes - Product notice](https://www.audiocodes.com/media/b4vjsdas/0587-product-notice-new-lts-74-stream-740a600-for-sbcs-and-gateways.pdf)

[Audiocodes - Release notes](https://www.audiocodes.com/media/3gtbnimo/sbc-gateway-release-notes-for-long-term-support-lts-versions-740a600.pdf)

---


Did you enjoy this post ? If you have any questions, comments or suggestions, please feel free to send me a message from the contact form.

Don't forget to follow us and share this post.