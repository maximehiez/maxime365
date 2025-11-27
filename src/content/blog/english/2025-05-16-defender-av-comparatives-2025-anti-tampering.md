---
title: "\"Anti-Tampering\" certification for Defender for Endpoint (2025)"
meta_title: ""
description: ""
date: 2025-05-16T10:00:00-05:00
image: "/images/blog/defender/defender_av_comparatives_2025_anti_tampering_thumbnail.png"
categories: ["Defender"]
author: "Maxime Hiez"
tags: ["Gartner", "Magic Quadrant", "Security", "AV-Comparatives"]
draft: false
---
---

##### Introduction
Microsoft recently announced that *Microsoft Defender for Endpoint* has successfully passed the 2025 anti-tampering tests conducted by *AV-Comparatives*, a recognized independent organization for evaluating cybersecurity solutions. This recognition confirms the robustness of Defender for Endpoint's protection mechanisms against attempts to disable or maliciously modify its security settings.

---

##### What is anti-tampering protection?
*Anti-tampering* protection refers to all the mechanisms designed to prevent unauthorized modifications to a system's security settings. When an attacker compromises an environment, one of their first actions is often to disable or bypass security solutions (antivirus, EDR, updates, etc.) in order to remain undetected, install malicious tools, exfiltrate data, or launch attacks such as ransomware.

---

##### A very real threat
Microsoft has observed a significant increase in attacks involving attempts to disable security. In May 2024, Microsoft Defender XDR detected more than 176000 tampering incidents, affecting over 5600 organizations. On average, each targeted organization experienced more than 31 unauthorized tampering attempts.

Techniques used include :
- Windows registry modifications
- Malicious tools such as NSudo, Defender Control, Configure Defender, and ToggleDefender
- Custom PowerShell or batch scripts
- System driver tampering

---

##### How Microsoft Defender for Endpoint protects against these attacks
Microsoft Defender for Endpoint includes anti-tampering protection enabled by default for all customers. It prevents :
- Unauthorized local or remote changes to security settings
- Disabling real-time protection
- Creating exclusions in antivirus or EDR tools
- Suspending or terminating critical security processes
- Modifications to system files, DLLs, agents, or security policies

Even local administrators or privileged users cannot bypass these protections without explicit authorization, significantly strengthening endpoint resilience.

---

##### AV-Comparatives 2025 Certification
During the 2025 Anti-Tampering Test in April 2025, AV-Comparatives subjected Microsoft Defender for Endpoint to a series of simulated attacks aimed at disabling or impairing its protections.

|                                 Test                                 |   Result   |
| :------------------------------------------------------------------: | :--------: |
| User-space processes (terminate, suspend, etc.)                      | Success ✅ |
| User-space services (pause, stop, disable, uninstall, etc.)          | Success ✅ |
| Registry keys (delete, remove, rename, add, etc.)                    | Success ✅ |
| DLLs (manipulation, modification, hijacking, etc.)                   | Success ✅ |
| Agent integrity (disable, modify, uninstall, etc.)                   | Success ✅ |
| File system (manipulation, modification, etc.)                       | Success ✅ |
| Kernel drivers (ELAM driver, Filter driver, Minifilter driver, etc.) | Success ✅ |
| Other components and functions (connection to update services, etc.) | Success ✅ |

<u>Result</u> : All attempts were successfully blocked, demonstrating the effectiveness of the built-in defense mechanisms.

![image](/images/blog/defender/defender_av_comparatives_2025_anti_tampering_001.png)

This certification places Microsoft Defender for Endpoint among the most reliable solutions on the market for protecting workstations and servers against malicious tampering.

Why it's important for organizations :
- Reduced risk of compromise : By preventing attackers from disabling defenses.
- Strengthened compliance : By ensuring the integrity of security policies.
- Less maintenance : Protections are active by default and do not require complex configuration.
- Protection of critical environments : Ability to create specific rules for domain controllers or other sensitive systems.

---

##### Conclusion
The AV-Comparatives 2025 certification confirms that Microsoft Defender for Endpoint is a leading security solution, capable of withstanding even the most sophisticated evasion attempts. In a context where attacks targeting security tools are increasingly common, this ability to protect the protections themselves has become essential.

For organizations, this means greater resilience, reduced risk, and increased confidence in their cybersecurity posture.

---

##### Sources
[Microsoft - Techcommunity](https://techcommunity.microsoft.com/blog/microsoftdefenderatpblog/defender-for-endpoint-successfully-passes-the-av-comparatives-2025-anti-tamperin/4414153)

[AV-Comparatives - Anti-Tampering Certification for Microsoft Defender for Endpoint](https://www.av-comparatives.org/wp-content/uploads/2025/04/avc_tampering_2025_Microsoft.pdf)

[Microsoft Learn - Protect your organization against tampering](https://learn.microsoft.com/en-us/defender-endpoint/tamper-resiliency)

[Gartner - Magic Quadrant Endpoint Protection](https://www.gartner.com/doc/reprints?id=1-2IWARHR9&ct=240924&st=sb)

---


Did you enjoy this post ? If you have any questions, comments or suggestions, please feel free to send me a message from the contact form.

Don't forget to follow us and share this post.