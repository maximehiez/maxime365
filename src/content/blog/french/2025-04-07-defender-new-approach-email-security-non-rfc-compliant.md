---
title: "Nouvelle approche de sécurité pour les courriels non conformes"
meta_title: ""
description: ""
date: 2025-04-07T10:00:00-05:00
image: "/images/blog/defender/defender_new_approach_email_security_non_rfc_compliant_thumbnail.png"
categories: ["Defender"]
author: "Maxime Hiez"
tags: ["Courriels", "Phishing", "Sécurité", RFC]
draft: false
---
---

##### Introduction
Microsoft a annoncé une mise à jour importante de *Defender for Office 365* visant à renforcer la sécurité des courriels en améliorant *la gestion des courriels non conformes aux normes RFC*. Cette initiative s'inscrit dans l'engagement continu de Microsoft à protéger les utilisateurs contre les activités malveillantes telles que le phishing, l'usurpation d'identité et les techniques d'évasion utilisées par les attaquants.

---

##### Comprendre les courriels non conformes aux normes RFC
Les documents *Request for Comments* (*RFC*) publiés par l'*Internet Engineering Task Force* (*IETF*) définissent les normes pour les protocoles Internet, y compris la mise en forme et la transmission des courriels. Les courriels qui ne respectent pas ces normes sont considérés comme non conformes aux normes RFC. Les attaquants exploitent souvent ces formats non conformes pour contourner les filtres de sécurité, rendant difficile la détection et le blocage des courriels malveillants.

---

##### Changements apportés par Microsoft Defender for Office 365
Microsoft Defender for Office 365 améliore ses mécanismes de détection pour mieux identifier et gérer les courriels non conformes. Les utilisateurs peuvent désormais voir des conseils de sécurité ou des avertissements dans leurs clients Outlook lorsqu'ils reçoivent des messages provenant d'adresses non conformes. Ces conseils sont conçus pour sensibiliser les utilisateurs et les encourager à faire preuve de prudence lorsqu'ils interagissent avec de tels courriels.

![image](/images/blog/defender/defender_new_approach_email_security_non_rfc_compliant_001.png)

---

##### Exemples d'adresses courriels non conformes
Voici quelques exemples d'adresses courriels non conformes et les problèmes associés :
- From: **Admin\x0000** \<evil@domain.com\> : Caractères invalides dans le nom d'affichage
- From: \\"fax@\\" \<domain.com fax@domain.com\> : Espace dans l'adresse courriel
- From: **=?UTF-8?B?VU9CQ29tascGxpYW5jZUBzdWNjZXNzZmFjdG9ycy5jb20=?=**, John Doe \<john.doe@domain.com\> : Courriel dans le champ du nom d'affichage et champ courriel réel vide
- From: **sender1**__@__**domain.com** \<sender1@kmsrc.domain.com\> : Nom d'affichage contenant @ sans guillemet
- From: John Doe \<abc<strong><span class="font-weight:bold;">@@</span></strong>domain.com\> : Double @ dans l'adresse courriel
- From: jane.ch<strong><span class="font-weight:bold;">@</span></strong> \<**domain.com jane.ch**@ domain.com\> : Adresse courriel invalide entre crochets et @ dans le nom d'affichage sans guillemet

---

##### Impact et objectifs
L'objectif ultime de ces changements est de garantir un environnement de messagerie plus sûr en réduisant les risques d'attaques par phishing, usurpation d'identité et exploitation des formats de courriel non conformes. Microsoft prévoit de renforcer ces mesures au fil du temps, ce qui pourrait inclure le blocage ou le rejet des courriels non conformes.

---

##### Validation des adresses courriels par Exchange Online Protection
*Exchange Online Protection (EOP)* et *Outlook.com* exigent que les messages entrants incluent une adresse <u>From</u> conforme pour prévenir les attaques de phishing. Cette validation aide à garantir que les courriels proviennent de sources légitimes et conformes aux normes.

---

##### Conclusion
La mise à jour de Microsoft Defender for Office 365 pour gérer les courriels non conformes aux normes RFC représente une avancée significative dans la lutte contre les activités malveillantes. En améliorant la détection et en sensibilisant les utilisateurs, Microsoft renforce la sécurité des communications par courriels et protège les organisations contre les menaces potentielles.

---

##### Sources
[Microsoft - Techcommunity](https://techcommunity.microsoft.com/blog/microsoftdefenderforoffice365blog/strengthening-email-security-our-new-approach-to-non-rfc-compliant-emails/4338306)

[Microsoft Learn - Exchange Online Protection](https://learn.microsoft.com/fr-ca/defender-office-365/anti-phishing-from-email-address-validation)

[RFC 5321 - Simple Mail Transfer Protocol](https://datatracker.ietf.org/doc/html/rfc5321)

[RFC 5322 - Internet Message Format](https://datatracker.ietf.org/doc/html/rfc5322)

---


Avez-vous apprécié cet article ? Vous avez des questions, commentaires ou suggestions, n’hésitez pas à m'envoyer un message depuis le formulaire de contact.

N'oubliez pas de nous suivre et de partager cet article.