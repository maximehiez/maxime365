---
title: "Comment rerouter un appel 404 avec un SBC Audiocodes"
meta_title: ""
description: ""
date: 2025-10-09T10:00:00-05:00
image: "/images/blog/sbc/tuto/sbc_audiocodes_how_to_reroute_calls_on_404_thumbnail.png"
categories: ["Audiocodes", "Tutoriel"]
author: "Maxime Hiez"
tags: ["Téléphonie", "Direct Routing", "Syslog", "SBC", "Routage", "CUCM"]
draft: false
---
---

##### Introduction
Lorsqu'un appel est envoyé vers un numéro ou une extension inconnue dans une solution de téléphonie d'entreprise, l'appel échoue et retourne une erreur. Parfois, cette extension est connue dans un autre système et doit être répondue même si le premier système a refusé l'appel. Voici une explication détaillée de comment configurer un routage alternatif dans votre *SBC* (*Session Border Controller*).

---

##### Explication de la problématique
Lorsque je travaille sur une migration de téléphonie vers Microsoft Teams, je mets en place une connexion SIP qui me permet de faire communiquer le *PBX* existant avec Teams au travers d'un SBC. Cette architecture hybride me permet de migrer les services tout en douceur et en gardant une continuité de service avec l'ancien sytème. Ainsi, un utilisateur Teams peut appeler un utilisateur dans le PBX et inversement. Le SBC permet également de connecter le lien SIP opérateur, et les solutions tierces qui fonctionnent dans l'entreprise (systèmes analogiques ou SIP, ...).

L'image ci-dessous présente un exemple de configuration multi service : *Teams*, *Telus* (opérateur), passerelles analogiques (*ATA*), *CUCM* (*PBX*) et *Intrado* (console 911).

![image](/images/blog/sbc/tuto/sbc_audiocodes_how_to_reroute_calls_on_404_001.png)

Dans l'un de mes projets en cours (avec une ville), nous avons besoin de connecter la solution de traitement des appels 911 des citoyens avec Teams afin que les appels soient traités par un agent depuis son client Teams. Mais puisque nous sommes en cours de migration, tous les agents ne sont pas encore migrés dans Teams et certains utilisent encore un téléphone connecté dans le PBX *Cisco* (*CUCM*). Les appels doivent donc être traités par Teams ou Cisco.

Alors comment savoir où envoyer l'appel pour traitement quand on ne sait pas dans quelle solution est connecté chaque agent ? Si les appels sont envoyés dans Teams et que l'extension n'existe pas, l'appel retourne une erreur *404 - User Not Found* et raccroche. Voilà un appel perdu !

La solution est de mettre en place un routage basé sur ce code 404 retourné par Teams au SBC. Le SBC envoie tous les appels à Teams et dès qu'une erreur 404 est retournée, le SBC reroute l'appel dans le PBX pour connecter l'appel avec l'agent Cisco.

---

##### Prérequis
**<u>Rôle d’administrateur</u>**
- Un compte administrateur pour accéder au SBC Audiocodes.

---

##### Étape 1 : Se connecter au SBC
Connectez-vous au SBC en ouvrant votre navigateur web sur https://VOTRE_ADRESSE_IP.

![image](/images/blog/sbc/tuto/sbc_audiocodes_how_to_reroute_calls_on_404_002.png)

---

##### Étape 2 : Créer un code de routage alternatif
Cliquez sur *<u>Setup</u>*, *<u>Signaling & Media</u>*, puis sur *<u>SBC</u>*, et sur *<u>Alternative Reasons Set</u>*.

Cliquez sur *<u>New</u>*, et créez le code *404 Not Found*.

![image](/images/blog/sbc/tuto/sbc_audiocodes_how_to_reroute_calls_on_404_003.png)

---

##### Étape 3 : Ajouter le code au IP Group Teams
Cliquez sur *<u>Setup</u>*, *<u>Signaling & Media</u>*, puis sur *<u>Core Entities</u>*, et sur *<u>IP Groups</u>*.

Éditez votre IP Group Teams et ajoutez le code 404 créé dans l'attribut *SBC Alternative Routing Reasons Set*.

![image](/images/blog/sbc/tuto/sbc_audiocodes_how_to_reroute_calls_on_404_004.png)

---

##### Étape 4 : Créer une règle de routage alternatif
Cliquez sur *<u>Setup</u>*, *<u>Signaling & Media</u>*, puis sur *<u>SBC</u>*, et sur *<u>IP-to-IP Routing</u>*.

Ajoutez une nouvelle règle de routage pour envoyer les appels vers le CUCM, sous la règle qui envoie les appels vers Teams. Cette nouvelle règle de routage doit avoir l'attribut *Alternative Route Option* configuré avec la valeur *Alternative Route Consider Inputs*.

![image](/images/blog/sbc/tuto/sbc_audiocodes_how_to_reroute_calls_on_404_005.png)

---

##### Analyse de l'appel
On peut voir dans la capture *Syslog* de mon SBC Audiocodes que mon appel est envoyé par Intrado au SBC, qui l'envoie ensuite au premier proxy Teams ; l'appel est retourné avec une erreur 404 puisque l'extension *+1234* y est inconnue. L'appel est testé sur les 3 proxies Teams avant d'être ensuite envoyé au proxy CUCM qui va accepter l'appel (*200 OK (SDP)*) puisque l'extension *+1234* y est connue.

![image](/images/blog/sbc/tuto/sbc_audiocodes_how_to_reroute_calls_on_404_006.png)

---

##### Conclusion
Vous savez maintenant comment configurer le routage alternatif basé sur un code 404 sur un SBC Audiocodes.

---

##### Sources
[Audiocodes - Codes de réponse SIP](https://techdocs.audiocodes.com/session-border-controller-sbc/mp-1288/user-manual/version-760/Content/UM/Configuring%20SIP%20Response%20Codes%20for%20Alternative%20Routing%20Reasons.htm)

---


Avez-vous apprécié cet article ? Vous avez des questions, commentaires ou suggestions, n’hésitez pas à m'envoyer un message depuis le formulaire de contact.

N'oubliez pas de nous suivre et de partager cet article.