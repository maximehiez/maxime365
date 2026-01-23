---
title: "Comment activer les rencontres Zoom et Webex sur MTR"
meta_title: ""
description: ""
date: 2025-04-04T10:00:00-05:00
image: "/images/blog/mtr/tuto/mtr_how_to_enable_meeting_third_party_join_thumbnail.png"
categories: ["MTR", "Tutoriel"]
author: "Maxime Hiez"
tags: ["Teams Rooms", "MTRoW", "MTRoA", "Zoom", "Webex", "Microsoft Teams Rooms Pro Management", "Direct Guest Join", "Safe Links"]
draft: false
---
---

##### Introduction
Dans le monde moderne des affaires, la collaboration efficace est essentielle. Les organisations utilisent diverses plateformes de visioconférence pour rester connectées, et il est crucial de pouvoir rejoindre des réunions sur différentes plateformes sans complications. C'est là qu'intervient la fonctionnalité *Direct Guest Join*" pour les salles Microsoft Teams Rooms (MTR). Cette innovation permet aux utilisateurs de rejoindre des réunions *Zoom* et *Webex* directement depuis leurs MTR, simplifiant ainsi la gestion des réunions et améliorant la flexibilité des environnements de travail collaboratif.

---

##### Avantages de la fonctionnalité Direct Guest Join
- Flexibilité accrue : Permet aux utilisateurs de rejoindre facilement des réunions sur différentes plateformes sans quitter l'interface MTR.
- Simplification des processus : Élimine le besoin de configurations complexes et de multiples étapes pour rejoindre des réunions tierces.
- Amélioration de la collaboration : Facilite la collaboration entre équipes utilisant différentes plateformes de visioconférence.

---

##### Prérequis
**<u>Licences nécessaires</u>**
- *Teams Rooms Pro* (ou *Teams Rooms Basic*).

**<u>Une salle Teams</u>**
- Un MTR déployé.

**<u>Rôles d’administrateur</u>**
- Un compte avec le rôle *Administrateur Global* pour accéder au Microsoft Teams Rooms Pro Management.
- Un compte avec le rôle *Administrateur Global* ou *Administrateur Sécurité* pour accéder au portail Microsoft Defender.
- Un compte avec le rôle *Administrateur Global* ou *Administrateur Exchange* pour accéder à Microsoft Exchange Online.

---

##### Étape 1 : Se connecter au portail Microsoft Defender
Connectez-vous au portail Microsoft Defender en ouvrant votre navigateur web sur https://security.microsoft.com.

---

##### Étape 2 : Éditer la règle Safe Links
Si votre organisation utilise la fonctionnalité *Safe Links* de *Microsoft Defender for Office 365*, il est important que les URL Zoom et Webex ne soient pas réécrits pour que la salle soit capable de lire le contenu de l'invitation.

Dans le menu de gauche, cliquez sur *<u>Policies & rules</u>*, puis sur *<u>Threat policies</u>*, et sur *<u>Safe Links</u>*.

Éditez la règle et ajoutez les URL suivants :
- \*.zoom.us/* 
- \*.zoom.com/* 
- \*.zoomgov.com/* 
- \*.webex.com/* 

![image](/images/blog/mtr/tuto/mtr_how_to_enable_meeting_third_party_join_001.png)

---

##### Étape 3 : Se connecter à Microsoft Exchange Online en PowerShell
Connectez-vous à Microsoft Exchange Online via la commande PowerShell suivante :
```powershell
Connect-ExchangeOnline
```

---

##### Étape 4 : Éditer les attributs Exchange
Pour qu'un MTR rejoigne une réunion Teams, il doit utiliser des propriétés masquées dans l'invitation Outlook. Mais pour pouvoir se connecter dans une réunion Zoom ou Webex, il doit être capable de lire le corps du message d'invitation. Vous devez donc conserver ce corps pour garantir la génération d'un bouton *Rejoindre*. Également, ces réunions sont créées en dehors de votre organisation et il est important que le calendrier de la salle accepte l'invitation.

Éditez les deux attributs Exchange *DeleteComments* et *ProcessExternalMeetingMessages* via la commande PowerShell suivante :

```powershell
Set-CalendarProcessing -Identity "Salle.Montreal@hiez.ca" -DeleteComments $False -ProcessExternalMeetingMessages $True
```

La configuration peut prendre plusieurs minutes avant d’être effective. Votre compte devrait ensuite ressembler à ceci :

![image](/images/blog/mtr/tuto/mtr_how_to_enable_meeting_third_party_join_002.png)

---

##### Étape 5 : Se connecter au portail Microsoft Teams Rooms Pro Management
Connectez-vous au portail Microsoft Teams Rooms Pro Management en ouvrant votre navigateur web sur https://portal.rooms.microsoft.com.

---

##### Étape 6 : Activer les fournisseurs Zoom et Webex
Dans le menu de gauche, cliquez sur *<u>Rooms</u>*, puis sur cliquez sur la salle que vous souhaitez éditer.

Cliquez sur *<u>Settings</u>*, puis sur *<u>Meetings</u>*, et activez les fournisseurs Zoom et Webex.

![image](/images/blog/mtr/tuto/mtr_how_to_enable_meeting_third_party_join_003.png)

---

##### Résultat
Après plusieurs minutes d'attente, le MTR devrait être capable de traiter l'invitation et afficher sur la tablette, un bouton *Rejoindre* avec un logo Zoom (ou Webex).

![image](/images/blog/mtr/tuto/mtr_how_to_enable_meeting_third_party_join_004.png)

---

##### Et pour une salle MTR Android ?
Vous pouvez suivre les étapes 1, 2, 3 et 4, mais l'activation de Zoom et Webex se fait directement depuis la tablette tactile.

---

##### Conclusion
La fonctionnalité Direct Guest Join pour les salles Microsoft Teams Rooms améliore la flexibilité et l'efficacité des environnements de travail collaboratif. En permettant aux utilisateurs de rejoindre des réunions Zoom et Webex directement depuis leurs dispositifs MTR, cette fonctionnalité simplifie la gestion des réunions et renforce la collaboration entre équipes.<br/><br/>
Vous savez maintenant comment activer les rencontres Zoom et Webex sur MTR.

---

##### Sources
[Microsoft Learn - Réunions tierces sur MTR](https://learn.microsoft.com/fr-ca/microsoftteams/rooms/third-party-join?tabs=MTRW)

---


Avez-vous apprécié cet article ? Vous avez des questions, commentaires ou suggestions, n’hésitez pas à m'envoyer un message depuis le formulaire de contact.

N'oubliez pas de nous suivre et de partager cet article.