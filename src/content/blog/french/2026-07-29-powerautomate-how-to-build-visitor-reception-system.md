---
title: "Comment annoncer vos visiteurs dans Teams avec Power Automate"
meta_title: ""
description: ""
date: 2026-07-29T10:00:00-05:00
image: "/images/blog/powerautomate/tuto/powerautomate_how_to_build_visitor_reception_system_thumbnail.png"
categories: ["Power Automate", "Tutoriel"]
author: "Maxime Hiez"
tags: ["Automatisation"]
draft: false
---
---

##### Introduction
L'annonce d'un visiteur par la réception est une étape clé de l'accueil en entreprise. Pour une gestion fluide, la réception doit identifier le visiteur, aviser l'hôte (par téléphone, chat, ...), lui demander de venir le chercher et, si nécessaire, fournir un badge d'accès. Il existe déjà des solutions sur le marché ; on peut trouver *Vizito*, *Elia* et autres. Ces solutions s'intègrent directement à *Microsoft 365* et donnent une excellente première impression, sécurisent l'accès aux locaux et fluidifient la prise en charge de vos invités.

J'ai développé une solution simple dans mon environnement avec *Power Automate* combinée à *Teams*, *SharePoint*, *Outlook* et *Forms*, qui permet la gestion de vos visteurs via les outils et licences que vous avez déjà.

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

![image](/images/blog/powerautomate/tuto/powerautomate_how_to_build_visitor_reception_system_001.png)

---

##### Étape 3 : Créer 2 listes SharePoint
Dans le menu de gauche, cliquez sur *<u>New</u>*, puis sur *<u>List</u>*.

![image](/images/blog/powerautomate/tuto/powerautomate_how_to_build_visitor_reception_system_002.png)

Ajouter des colonnes dans vos 2 listes avec des infos nécessaires telles que :

**<u>VisitorLog</u>**
- VisitorCompany
- HostEmail
- VisitDate
- Purpose
- Status
- ArrivedAt
- ...
<br/><br/>

**<u>FlowErrorLog</u>**
- RunUrl
- FailedAction
- ErrorMessage
- ErrorTime
- ...
<br/><br/>

---

##### Étape 4 : Se connecter dans le portail Microsoft Forms
Connectez-vous à Microsoft Forms en ouvrant votre navigateur web sur https://forms.cloud.microsoft.

---

##### Étape 5 : Créer 1 formulaire Forms
![image](/images/blog/powerautomate/tuto/powerautomate_how_to_build_visitor_reception_system_003.png)

Ajoutez des questions dans votre formulaire avec des infos nécessaires telles que :

**<u>Visitor Pre-registration</u>**
- Visitor full name
- Visitor company
- Host email
- Visit date
- Purpose of visit

---

##### Étape 6 : Se connecter dans Microsoft Power Automate
Connectez-vous à Microsoft Power Automate en ouvrant votre navigateur web sur https://make.powerautomate.com.

---

##### Étape 7 : Créer un premier flux pour récupérer la programmation de visite
Dans le menu de gauche, cliquez sur *<u>Create</u>*, puis sur *<u>Automate cloud flow</u>* et choisissez *<u>When a new response is submitted</u>*.

![image](/images/blog/powerautomate/tuto/powerautomate_how_to_build_visitor_reception_system_004.png)

Enchainez les actions et variables pour récupérer le formulaire Forms envoyé par l'utilisateur. Utilisez les variables récupérées pour les envoyer dans la liste SharePoint *VisitorLog*.

![image](/images/blog/powerautomate/tuto/powerautomate_how_to_build_visitor_reception_system_005.png)

---

##### Étape 8 : Créer un deuxième flux pour valider l'arrivée du visiteur
Dans le menu de gauche, cliquez sur *<u>Create</u>*, puis sur *<u>Automate cloud flow</u>* et choisissez *<u>When an item is created or modified</u>*.

![image](/images/blog/powerautomate/tuto/powerautomate_how_to_build_visitor_reception_system_006.png)

Mettez à jour le status de la visite pour déclencher une notification à la personne visitée afin de l'informer de l'arrivée de la personne.

![image](/images/blog/powerautomate/tuto/powerautomate_how_to_build_visitor_reception_system_007.png)

---

##### Étape 9 : Créer un troisième flux pour récupérer les visites non planifiées
Dans le menu de gauche, cliquez sur *<u>Create</u>*, puis sur *<u>Instant cloud flow</u>* et choisissez *<u>Manually trigger a flow</u>*.

![image](/images/blog/powerautomate/tuto/powerautomate_how_to_build_visitor_reception_system_008.png)

Récupérez les informations saisies manuellement par la réceptionniste pour notifier la personne visitée. Utilisez les variables récupérées pour créer une entrée dans la liste SharePoint *VisitorLog*.

![image](/images/blog/powerautomate/tuto/powerautomate_how_to_build_visitor_reception_system_009.png)

---

##### Résultats
Le visiteur enregistre lui même sa venue via le formulaire publié. Les réponses vont être sauvegardées dans SharePoint.

![image](/images/blog/powerautomate/tuto/powerautomate_how_to_build_visitor_reception_system_010.png)

La personne visitée reçoit un courriel ...

![image](/images/blog/powerautomate/tuto/powerautomate_how_to_build_visitor_reception_system_011.png)

... et un message dans Teams lui confirmant la visite.

![image](/images/blog/powerautomate/tuto/powerautomate_how_to_build_visitor_reception_system_012.png)

Lorsque le visiteur arrive sur site, son arrivée est confirmée par la réceptionniste, et un message Teams est envoyée à la personne visitée.

![image](/images/blog/powerautomate/tuto/powerautomate_how_to_build_visitor_reception_system_013.png)
<br/><br/>

Si un visiteur se présente à la réception sans s'être enregistré à l'avance, la réceptionniste peut remplir un formulaire pour annoncer la venue de la personne via un message dans Teams.

![image](/images/blog/powerautomate/tuto/powerautomate_how_to_build_visitor_reception_system_014.png)

---

##### Allons plus loin
J'ai quelques idées qui méritent d'être exploitées et que je testerai quand j'aurai le temps :
1. Créer une application *PowerApps* et l'afficher sur une tablette à l'entrée pour que les visiteurs puissent eux mêmes valider leur arrivée
2. Ajouter l'option de *"Walk-in"* dans cette même application
3. Envoyer un rapport journalié à la réception contenant la liste des visites prévues pour le lendemain
4. Ajouter des options telles que :
    - Signature des règles de sécurité
    - Impression d'un badge temporaire
    - Heure de sortie des locaux
    - ...

---

##### Conclusion
Vous savez maintenant comment créer un outil pour annoncer les visiteurs dans Teams avec Power Automate.

---

##### Sources
[Microsoft Learn - Power Automate](https://learn.microsoft.com/fr-ca/power-automate)

---


Avez-vous apprécié cet article ? Vous avez des questions, commentaires ou suggestions, n’hésitez pas à m'envoyer un message depuis le formulaire de contact.

N'oubliez pas de nous suivre et de partager cet article.