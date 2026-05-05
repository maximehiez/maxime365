---
title: "Nouvelle version LTS 7.40.600 pour les SBC Audiocodes"
meta_title: ""
description: ""
date: 2026-04-15T10:00:00-05:00
image: "/images/blog/sbc/sbc_audiocodes_new_lts_version_7_40_600_for_sbc_thumbnail.png"
categories: ["Audiocodes"]
author: "Maxime Hiez"
tags: ["Téléphonie", "Direct Routing", "SBC", "Mise à jour", "LTS"]
draft: false
---
---

##### Introduction
*Audiocodes* a officialisé un changement important dans sa stratégie de support : le version *7.40A.600* devient la nouvelle branche *Long-Term Support* (*LTS*) pour ses *SBC* et *Media Gateways*, en remplacement de *7.40A.500*. Pour les environnements *Microsoft Teams Direct Routing* et les déploiements de téléphonie en production, c'est une information importante pour le support de vos sytèmes : rester sur l'ancien flux peut fonctionner à court terme, mais vous sortez progressivement du train des correctifs (bugs / sécurité).

---

##### LR vs LTS chez Audiocodes
Audiocodes propose deux familles de versions, avec une logique très structurée :

**<u>Latest Release (LR)</u>**
- Porte les nouvelles fonctionnalités
- Publiée environ tous les 4 mois

**<u>Long Term Support (LTS)</u>**
- Orientée stabilité : correctifs de bugs et de sécurité, sans nouvelles fonctionnalités
- Basée sur une LR, publiée environ tous les 12 à 15 mois, avec des mises à jour environ tous les 2 mois

Si votre priorité est la production *"stable"* (la majorité des environnements de téléphonie), LTS est la cible.

---

##### Nouveautés mises en avant (baseline 7.40A.604.077)
Voici les éléments clés introduits dans la nouvelle baseline LTS :
- Support de la fibre optique pour la série *Mediant 7000*
- Nombre maximum de tentatives de reroutage d'appel configurable pour les réponses SIP 3xx
- Préservation de la Reason-Phrase des réponses SIP entrantes vers les messages sortants
- Possibilités de manipulation des Reason Phrases pour les réponses SIP
- Mise à jour de l'assistant de configuration SBC (version 2.61)
- Ajout d'un en-tête de checksum de chiffrement + validation pour les fichiers de scripts CLI

---

##### Pourquoi migrer vers 7.40A.600 même si 7.40A.500 fonctionne ?
**<u>Préparer les chantiers certificats</u>**

La durée de vie des certificats TLS va se réduire drastiquement (de 397 jours vers 46 jours d'ici 2029), augmentant la pression sur la gestion et l'automatisation. Audiocodes prévoit l'arrivée du renouvellement automatique via *ACME* (annoncé côté LR 7.6.3, H2 2026). Dans ce contexte, rester sur une base supportée et évolutive est d'autant plus important.
<br/><br/>

**<u>Rester sur un flux qui reçoit les correctifs</u>**

Le message le plus important de la notice Audiocodes est celui-ci : 7.40A.500 n'évoluera plus, alors que les corrections seront appliquées dans 7.40A.600. La téléphonie est un environnement critique ; un bug SIP/TLS ou une vulnérabilité peut suffire à casser un service.
<br/><br/>

**<u>Alignement avec la roadmap Audiocodes</u>**

La branche 7.4 LTS reste orientée stabilité, et l'innovation fonctionnelle se déplacera vers la branche 7.6 LR. Migrer vers 7.40A.600, c'est donc se positionner correctement dans la stratégie de versioning (stabilité maintenant, innovation ailleurs).

---

##### Impacts concrets pour Teams Direct Routing
Si vous exploitez des SBC Audiocodes pour votre téléphonie Teams Direct Routing et que vous êtes encore sur une version 7.40A.500 (ou inférieure), c'est le bon moment pour planifier une migration vers 7.40A.600, en commençant par vérifier les notes de produit.

---

##### Conclusion
La transition de la version 7.40A.500 vers 7.40A.600 n'est pas une simple mise à jour, c'est un changement de branche de support. Audiocodes maintient 7.40A.500 en production, mais arrête toute nouvelle maintenance dessus, et redirige les correctifs vers 7.40A.600, désormais LTS de référence à partir de 7.40A.604.077. Pour des environnements Teams Direct Routing (et autres), migrer vers la nouvelle LTS est la décision la plus saine : support, correctifs, stabilité, et une trajectoire claire vers les innovations à venir côté 7.6 LR.

---

##### Sources
[Audiocodes - Avis produit](https://www.audiocodes.com/media/b4vjsdas/0587-product-notice-new-lts-74-stream-740a600-for-sbcs-and-gateways.pdf)

[Audiocodes - Notes de version](https://www.audiocodes.com/media/3gtbnimo/sbc-gateway-release-notes-for-long-term-support-lts-versions-740a600.pdf)

---


Avez-vous apprécié cet article ? Vous avez des questions, commentaires ou suggestions, n’hésitez pas à m'envoyer un message depuis le formulaire de contact.

N'oubliez pas de nous suivre et de partager cet article.