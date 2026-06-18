---
title: "Workplace Check-in via WiFi pour Microsoft Places et Teams"
meta_title: ""
description: ""
date: 2026-06-16T10:00:00-05:00
image: "/images/blog/teams/teams_workplace_check_in_wifi_thumbnail.png"
categories: ["Teams", "Places"]
author: "Maxime Hiez"
tags: ["Workplace Check-in", "WiFi"]
draft: false
---
---

##### Introduction
*Microsoft Places* introduit le *Workplace Check-in* via WiFi dans *Microsoft Teams* ; lorsqu'un utilisateur se connecte au réseau WiFi de l'entreprise, sa localisation de travail se met à jour automatiquement dans *Microsoft 365*. Fini le pointage manuel, l'information apparaît directement dans le calendrier Teams et Outlook des collègues.

---

##### Fonctionnement
Le Workplace Check-in s'appuie sur deux signaux complémentaires :
1. WiFi : Teams détecte les changements réseau (connexion initiale, changement de réseau, réveil d'appareil) et met à jour la localisation de travail.
2. Périphérique de bureau : La connexion d'un ordinateur à un périphérique configuré (moniteur, dock) déclenche le pointage.

La localisation affichée aux collègues peut être :
- Au bureau : Si seule la liste SSID est configurée.
- Bâtiment précis : Si la liste BSSID est également configurée, Teams identifie le bâtiment à partir du point d'accès WiFi.

Le pointage s'efface automatiquement à la fin des heures de travail de l'utilisateur. Il fonctionne uniquement sur les réseaux d'entreprise configurés dans le tenant, et requiert l'application Teams bureau (Windows ou macOS). Les clients web et mobile ne sont pas pris en charge.

![image](/images/blog/teams/teams_workplace_check_in_wifi_001.png)

---

##### Options de déploiement
L'administrateur choisit entre trois modes pour le check-in WiFi :
- <u>Mode Inform</u> : Le check-in est actif par défaut. L'utilisateur voit une bannière dans Teams l'informant que la fonctionnalité est activée, avec une option pour se désinscrire.
- <u>Mode Ask</u> : Le check-in est inactif par défaut. L'utilisateur voit une bannière lui proposant de s'inscrire.
- <u>Mode Off</u> : La fonctionnalité est désactivée. L'utilisateur ne peut pas l'activer de son côté.

Dans les modes *Inform* et *Ask*, l'utilisateur peut modifier sa préférence à tout moment dans les paramètres Teams. La localisation peut également être remplacée manuellement à n'importe quel moment, ce qui en fait un outil de collaboration et non de surveillance.

---

##### Disponibilité
Le check-in via périphérique de bureau est disponible en disponibilité générale. Le check-in via réseau WiFi est en cours de déploiement élargi.

---

##### Conclusion
Le Workplace Check-in via WiFi simplifie la gestion de la présence au bureau dans les environnements hybrides, sans imposer d'action manuelle aux utilisateurs. La configuration se fait entièrement côté administrateur via PowerShell, avec un contrôle granulaire sur les modes de partage et le consentement utilisateur.

---

##### Sources
[Microsoft - Techcommunity](https://techcommunity.microsoft.com/blog/microsoftteamsblog/workplace-presence-made-effortless-workplace-check-in-via-wi-fi-for-microsoft-pl/4523386)

[Microsoft Adoption - Places](https://adoption.microsoft.com/en-us/microsoft-places)

---


Avez-vous apprécié cet article ? Vous avez des questions, commentaires ou suggestions, n'hésitez pas à m'envoyer un message depuis le formulaire de contact.

N'oubliez pas de nous suivre et de partager cet article.