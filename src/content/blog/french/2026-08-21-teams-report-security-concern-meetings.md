---
title: "Signalement des problèmes de sécurité dans les réunions Teams"
meta_title: ""
description: ""
date: 2026-08-21T10:00:00-05:00
image: "/images/blog/teams/teams_report_security_concern_meetings_thumbnail.png"
categories: ["Teams"]
author: "Maxime Hiez"
tags: ["Rencontre", "Sécurité"]
draft: false
---
---

##### Introduction
*Microsoft Teams* permet déjà de signaler un message ou un appel suspect. Le signalement s'étend maintenant aux réunions et aux appels de groupe, avec l'annonce *MC1446794*. Le déploiement a commencé en Août 2026 pour les tenants en *Targeted Release* et doit se terminer en Octobre 2026 en disponibilité générale.

L'objectif est de couvrir un angle mort : jusqu'à présent, un participant confronté à une tentative d'hameçonnage ou à une usurpation d'identité pendant une réunion n'avait aucun moyen de la signaler depuis Teams.

---

##### Ce que voit l'utilisateur
Deux points d'entrée sont ajoutés dans les réunions :
1. Pendant la réunion : L'option *<u>Report a concern</u>* apparaît dans le menu *<u>More (…)</u>*.
2. Dans la conversation de réunion : L'option est disponible depuis l'en-tête, pour les réunions planifiées comme pour les réunions *<u>Meet now</u>*.

![image](/images/blog/teams/teams_report_security_concern_meetings_001.png)

Pour les appels de groupe, le signalement se fait depuis l'historique d'appels du client Teams. Dans les deux cas, l'utilisateur saisit une courte note décrivant le problème et peut, en option, désigner les participants suspects. Les motifs visés sont l'hameçonnage, l'usurpation d'identité, l'ingénierie sociale et les tentatives de fraude.

![image](/images/blog/teams/teams_report_security_concern_meetings_002.png)

---

##### Ce que voient les administrateurs
Les signalements alimentent deux emplacements :
1. Portail Microsoft Defender : *<u>Investigation & Response</u>*, puis <u>Submissions</u>*, et l'onglet *<u>User reported</u>*
2. Teams Admin Center : *<u>Analytics & Reports</u>*, puis *<u>Protection reports</u>*, et *<u>User reported security submissions</u>*, encore en préversion, avec export des données

La fonctionnalité nécessite *Microsoft Defender for Office 365 Plan 1*, *Plan 2* ou *Microsoft Defender XDR*. Comme pour le signalement des appels, deux réglages doivent être actifs pour que les signalements remontent correctement : celui du Teams Admin Center et celui du portail Defender. Un tenant existant peut avoir le second désactivé, il est donc prudent de le vérifier avant d'annoncer la fonctionnalité aux utilisateurs.

---

##### Un ensemble cohérent avec les autres protections
Cette annonce complète une série de mesures arrivées cette année dans les réunions Teams, la détection des bots dans la salle d'attente, les indicateurs de confiance sur les participants externes et la détection d'usurpation de marque dans les appels. Le signalement par l'utilisateur en est la pièce manquante : il transforme un incident vécu par un participant en donnée exploitable par l'équipe sécurité.

Voir l'article sur la protection contre les bots dans les réunions [ICI](https://maxime.hiez.ca/blog/2026-07-21-teams-bot-protection-meetings).

---

##### Conclusion
Aucune action n'est requise pour bénéficier de la fonctionnalité, mais deux vérifications s'imposent avant la disponibilité générale d'Octobre 2026. D'abord l'activation croisée entre le Teams Admin Center et le portail Defender, sans laquelle les signalements n'apparaissent pas. Ensuite la définition d'un processus de traitement côté sécurité, car un canal de signalement que personne ne consulte ne protège personne.

---

##### Sources
[Microsoft Learn - Paramètres de signalement par les utilisateurs dans Teams](https://learn.microsoft.com/fr-ca/defender-office-365/submissions-teams)

[Microsoft Learn - Signalement par les utilisateurs pour les appels Teams](https://learn.microsoft.com/fr-ca/microsoftteams/end-user-reporting-teams-calling)

---


Avez-vous apprécié cet article ? Vous avez des questions, commentaires ou suggestions, n'hésitez pas à m'envoyer un message depuis le formulaire de contact.

N'oubliez pas de nous suivre et de partager cet article.