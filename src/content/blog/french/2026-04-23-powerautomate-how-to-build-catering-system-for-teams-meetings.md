---
title: "Comment créer un service de traiteur avec Power Automate"
meta_title: ""
description: ""
date: 2026-04-23T10:00:00-05:00
image: "/images/blog/powerautomate/tuto/powerautomate_how_to_build_catering_system_for_teams_meetings_thumbnail.png"
categories: ["Power Automate", "Tutoriel"]
author: "Maxime Hiez"
tags: ["Automatisation"]
draft: false
---
---

##### Introduction
Il existe déjà des solutions de traiteur pour *Outlook* sur le marché ; on peut trouver *arbooMEET*, *AskCody* *GoBright* et autres. Ces solutions s'intègrent directement à *Microsoft 365* pour permettre aux utilisateurs de commander des repas et des boissons lors de la réservation de salles. Ces modules complémentaires simplifient les processus, réduisent les échanges de courriels avec les traiteurs et fournissent des mises à jour en temps réel sur les commandes, la configuration des salles et la gestion des participants.

J'ai développé un équivalent simple dans mon environnement avec *Power Automate*, combiné à *Teams* et *SharePoint*.

---

##### Prérequis
**<u>Licences nécessaires</u>**
- *Power Automate Free* (inclus dans toutes les licences *Microsoft 365* et *Business*).

---

##### Étape 1 : Se connecter dans le portail Microsoft SharePoint
Connectez-vous à Microsoft SharePoint en ouvrant votre navigateur web sur https://VOTRE_TENANT.sharepoint.com/_layouts/15/sharepoint.aspx.

---

##### Étape 2 : Créer un site SharePoint
Dans le menu de gauche, cliquez sur *<u>Create site</u>*, puis sur *<u>Teams site</u>*, et donnez un nom et adresse de site pertinent.

![image](/images/blog/powerautomate/tuto/powerautomate_how_to_build_catering_system_for_teams_meetings_001.png)

---

##### Étape 3 : Créer 2 listes SharePoint
Dans le menu de gauche, cliquez sur *<u>New</u>*, puis sur *<u>List</u>*.

![image](/images/blog/powerautomate/tuto/powerautomate_how_to_build_catering_system_for_teams_meetings_002.png)

Ajoutez des colonnes dans vos 2 listes avec des infos nécessaires telles que :

**<u>CateringOrders</u>**
- RoomName
- RoomEmail
- OrganizerName
- OrganizerEmail
- MeetingStart
- MeetingEnd
- AttendeeCount
- StillWater
- ...
<br/><br/>

**<u>CateringPreferences</u>**
- OrganizerName
- OrganizerEmail
- PreferStillWater
- ...

---

##### Étape 4 : Se connecter dans Microsoft Power Automate
Connectez-vous à Microsoft Power Automate en ouvrant votre navigateur web sur https://make.powerautomate.com.

---

##### Étape 5 : Créer un premier flux pour générer un sondage
Dans le menu de gauche, cliquez sur *<u>Create</u>*, puis sur *<u>Automate cloud flow</u>* et choisissez *<u>When a new event is created (V3)</u>*.

![image](/images/blog/powerautomate/tuto/powerautomate_how_to_build_catering_system_for_teams_meetings_003.png)

Enchainez les actions et variables pour créer un formulaire à envoyer dans Teams juste après que l'utilisateur ait réservé une salle de conférence. Utilisez les variables récupérées pour les envoyer dans les listes SharePoint *CateringOrders* et *CateringPreferences*.

![image](/images/blog/powerautomate/tuto/powerautomate_how_to_build_catering_system_for_teams_meetings_004.png)

Envoyez le résumé de la commande à l'équipe en charge du service via un message dans Teams.

---

##### Étape 6 : Créer un deuxième flux pour générer un rappel
Dans le menu de gauche, cliquez sur *<u>Create</u>*, puis sur *<u>Scheduled cloud flow</u>* et choisissez une répétition quotidienne.

![image](/images/blog/powerautomate/tuto/powerautomate_how_to_build_catering_system_for_teams_meetings_005.png)

Créez une boucle pour parcourir la liste SharePoint *CateringOrders* et vérifier s'il y a une commande prévue pour aujourd'hui et en attente de livraison.

![image](/images/blog/powerautomate/tuto/powerautomate_how_to_build_catering_system_for_teams_meetings_006.png)

Envoyez la liste des commandes du jour à l'équipe en charge du service via un message dans Teams.

---

##### Étape 7 : Créer un troisième flux pour confirmer la livraison
Dans le menu de gauche, cliquez sur *<u>Create</u>*, puis sur *<u>Scheduled cloud flow</u>* et choisissez une répétition aux 5 minutes.

![image](/images/blog/powerautomate/tuto/powerautomate_how_to_build_catering_system_for_teams_meetings_007.png)

Créez une boucle pour envoyer un formulaire dans Teams à l'équipe en charge afin de confirmer la livraison. 

![image](/images/blog/powerautomate/tuto/powerautomate_how_to_build_catering_system_for_teams_meetings_008.png)

Envoyez la confirmation de commande à l'équipe en charge du service via un message dans Teams.

---

##### Étape 8 : Créer un quatrième flux pour envoyer un avis de satisfaction
Dans le menu de gauche, cliquez sur *<u>Create</u>*, puis sur *<u>Scheduled cloud flow</u>* et choisissez une répétition aux 30 minutes.

![image](/images/blog/powerautomate/tuto/powerautomate_how_to_build_catering_system_for_teams_meetings_009.png)

Créez une boucle pour envoyer un formulaire de satisfaction dans Teams à la personne ayant fait la commande initiale. La boucle ne va récupérer que les rencontres terminées avec un statut de *"commande livrée"*. 

![image](/images/blog/powerautomate/tuto/powerautomate_how_to_build_catering_system_for_teams_meetings_010.png)

Envoyez le résultat du formulaire de satisfaction à l'équipe en charge du service via un message dans Teams.

---

##### Étape 9 : Envoyer une invitation Teams
Depuis Outlook (ou Teams), envoyez une invitation à une rencontre et incluez une salle.

![image](/images/blog/powerautomate/tuto/powerautomate_how_to_build_catering_system_for_teams_meetings_011.png)

---

##### Résultats
L'utilisateur reçoit un formulaire dans Teams quelques instants après avoir réservé la rencontre.

![image](/images/blog/powerautomate/tuto/powerautomate_how_to_build_catering_system_for_teams_meetings_012.png)

L'équipe en charge des commandes reçoit après la liste de ce qui a été commandé ainsi que les informations de la rencontre.

![image](/images/blog/powerautomate/tuto/powerautomate_how_to_build_catering_system_for_teams_meetings_013.png)

Le matin de la rencontre, l'équipe en charge des commandes reçoit une confirmation des livraisons du jour à réaliser ...

![image](/images/blog/powerautomate/tuto/powerautomate_how_to_build_catering_system_for_teams_meetings_014.png)

... et 15 minutes avant la rencontre, il faut confirmer ou non si la commande a été livrée.

![image](/images/blog/powerautomate/tuto/powerautomate_how_to_build_catering_system_for_teams_meetings_015.png)

30 minutes après la rencontre, un sondage est envoyé à la personne qui a réservé le service ...

![image](/images/blog/powerautomate/tuto/powerautomate_how_to_build_catering_system_for_teams_meetings_016.png)

... et l'équipe en charge des commandes reçoit le résultat.

![image](/images/blog/powerautomate/tuto/powerautomate_how_to_build_catering_system_for_teams_meetings_017.png)

---

##### Allons plus loin
J'ai 2 idées qui méritent d'être exploitées et que je testerai quand j'aurai le temps :
1. Créer une application *PowerApps* connectée dans Teams pour permettre de traiter la commande dedans plutôt que se rendre dans SharePoint.
2. Connecter la solution avec les APIs *Uber Eats*, *DoorDash* et autres pour avoir un menu plus complet.

---

##### Conclusion
Vous savez maintenant comment créer un service de traiteur avec Power Automate.

---

##### Sources
[Microsoft Learn - Power Automate](https://learn.microsoft.com/fr-ca/power-automate)

---


Avez-vous apprécié cet article ? Vous avez des questions, commentaires ou suggestions, n’hésitez pas à m'envoyer un message depuis le formulaire de contact.

N'oubliez pas de nous suivre et de partager cet article.