---
title: "Comment suivre vos renouvellements de certifications avec Power Automate"
meta_title: ""
description: ""
date: 2026-07-20T10:00:00-05:00
image: "/images/blog/powerautomate/tuto/powerautomate_how_to_build_certification_expiration_alert_thumbnail.png"
categories: ["Power Automate", "Tutoriel"]
author: "Maxime Hiez"
tags: ["Automatisation"]
draft: false
---
---

##### Introduction
Le renouvellement de certifications est une étape importante pour les entreprises et pourtant, il arrive très souvent que les experts oublient de les renouveler. Elles perdent alors leurs partenariats et les experts doivent recommencer leur processus d'études.

J'ai développé une solution simple dans mon environnement avec *Power Automate* combinée à *Teams*, *SharePoint*, *Outlook* et *Forms*, qui permet de surveiller les dates d'expiration des certifications de chacun des experts et de les notifier avant que les examens ne soit expirés.

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

![image](/images/blog/powerautomate/tuto/powerautomate_how_to_build_certification_expiration_alert_001.png)

---

##### Étape 3 : Créer 3 listes SharePoint
Dans le menu de gauche, cliquez sur *<u>New</u>*, puis sur *<u>List</u>*.

![image](/images/blog/powerautomate/tuto/powerautomate_how_to_build_certification_expiration_alert_002.png)

Ajouter des colonnes dans vos 3 listes avec des infos nécessaires telles que :

**<u>CertificationRegister</u>**
- EmployeeEmail
- Category
- IssuedOn
- ExpiryDate
- ValidatyMonths
- Status
- AlertTier
- CertificateReference
- ...
<br/><br/>

**<u>FlowErrorLog</u>**
- RunUrl
- FailedAction
- ErrorMessage
- ErrorTime
- ...
<br/><br/>

**<u>ComplianceHistory</u>**
- Compliance
- Total
- Valid
- ...

---

##### Étape 4 : Se connecter dans le portail Microsoft Forms
Connectez-vous à Microsoft Forms en ouvrant votre navigateur web sur https://forms.cloud.microsoft.

---

##### Étape 5 : Créer 2 formulaires Forms
![image](/images/blog/powerautomate/tuto/powerautomate_how_to_build_certification_expiration_alert_003.png)

Ajoutez des questions dans vos 2 formulaires avec des infos nécessaires telles que :

**<u>Register Certification</u>**
- Certification name
- Issued date
- Expiry date
- Validaty period
- Category
- Certificate reference
- Mandatory
<br/><br/>

**<u>Training / Certification Completion</u>**
- Certification name
- Completion date
- Certificate reference

---

##### Étape 6 : Se connecter dans Microsoft Power Automate
Connectez-vous à Microsoft Power Automate en ouvrant votre navigateur web sur https://make.powerautomate.com.

---

##### Étape 7 : Créer un premier flux pour récupérer la nouvelle certification
Dans le menu de gauche, cliquez sur *<u>Create</u>*, puis sur *<u>Automate cloud flow</u>* et choisissez *<u>When a new response is submitted</u>*.

![image](/images/blog/powerautomate/tuto/powerautomate_how_to_build_certification_expiration_alert_004.png)

Enchainez les actions et variables pour créer récupérer le formulaire Forms envoyé par l'utilisateur. Utilisez les variables récupérées pour les envoyer dans la liste SharePoint *CertificationRegister*.

![image](/images/blog/powerautomate/tuto/powerautomate_how_to_build_certification_expiration_alert_005.png)

---

##### Étape 8 : Créer un deuxième flux pour analyser les certifications et notifier
Dans le menu de gauche, cliquez sur *<u>Create</u>*, puis sur *<u>Scheduled cloud flow</u>* et choisissez une répétition quotidienne.

![image](/images/blog/powerautomate/tuto/powerautomate_how_to_build_certification_expiration_alert_006.png)

Créez une boucle pour parcourir la liste SharePoint *CertificationRegister* et vérifier s'il y a des certifications qui expirent dans 60, 30 et 7 jours.

![image](/images/blog/powerautomate/tuto/powerautomate_how_to_build_certification_expiration_alert_007.png)

Lorsque une certification arrive proche d'expirer, enchainez les actions suivantes :
- 60 jours : Message dans Teams + courriel au propriétaire de la certification
- 30 jours : Courriel au propriétaire de la certification et à son superviseur
- 7 jours : Message dans Teams + courriel au propriétaire de la certification et à son superviseur

---

##### Étape 9 : Créer un troisième flux pour récupérer la mise à jour de la certification
Dans le menu de gauche, cliquez sur *<u>Create</u>*, puis sur *<u>Automate cloud flow</u>* et choisissez *<u>When a new response is submitted</u>*.

![image](/images/blog/powerautomate/tuto/powerautomate_how_to_build_certification_expiration_alert_008.png)

Enchainez les actions et variables pour créer récupérer le formulaire Forms envoyé par l'utilisateur. Utilisez les variables récupérées pour mettre à jour la liste SharePoint *CertificationRegister*.

![image](/images/blog/powerautomate/tuto/powerautomate_how_to_build_certification_expiration_alert_009.png)

---

##### Étape 10 : Créer un quatrième flux obtenir un suivi mensuel
Dans le menu de gauche, cliquez sur *<u>Create</u>*, puis sur *<u>Scheduled cloud flow</u>* et choisissez une répétition mensuelle.

![image](/images/blog/powerautomate/tuto/powerautomate_how_to_build_certification_expiration_alert_010.png)

Créez une boucle pour parcourir la liste SharePoint *CertificationRegister* et envoyer un rapport mensuel de suivi de toutes les certifications.

![image](/images/blog/powerautomate/tuto/powerautomate_how_to_build_certification_expiration_alert_011.png)

---

##### Résultats
L'utilisateur enregistre lui même sa nouvelle certification via le formulaire publié. Les réponses vont être sauvegardées dans SharePoint.

![image](/images/blog/powerautomate/tuto/powerautomate_how_to_build_certification_expiration_alert_012.png)

Il reçoit un message dans Teams lui confirmant que sa certification a été enregistrée ...

![image](/images/blog/powerautomate/tuto/powerautomate_how_to_build_certification_expiration_alert_013.png)

... et l'équipe en charge du suivi des certifications reçoit également une confirmation dans Teams.

![image](/images/blog/powerautomate/tuto/powerautomate_how_to_build_certification_expiration_alert_014.png)

60 jours avant la date d'expiration, un message Teams va être envoyé à l'utilisateur pour l'informer de la situation et lui proposer de la renouveler en cliquant sur un bouton .

![image](/images/blog/powerautomate/tuto/powerautomate_how_to_build_certification_expiration_alert_015.png)

Un courriel lui est également envoyé.

![image](/images/blog/powerautomate/tuto/powerautomate_how_to_build_certification_expiration_alert_016.png)

30 jours avant la date d'expiration, si la certification n'a pas été renouvelée, l'utilisateur reçoit un nouveau courriel et son gestionnaire est escaladé.

![image](/images/blog/powerautomate/tuto/powerautomate_how_to_build_certification_expiration_alert_017.png)
<br/><br/>

Lorsque l'utilisateur cliquera sur le lien reçu par courriel ou sur le bouton reçu dans Teams, il pourra mettre les informations reçues pour prolonger la date de sa certification.

![image](/images/blog/powerautomate/tuto/powerautomate_how_to_build_certification_expiration_alert_018.png)

---

##### Suivi de conformité
Tous les mois, un rapport est envoyé avec un suivi de l'évolution des dates de renouvellement et expiration.

![image](/images/blog/powerautomate/tuto/powerautomate_how_to_build_certification_expiration_alert_019.png)

---

##### Conclusion
Vous savez maintenant comment créer un outil de surveillance d'expiration de certifications avec Power Automate.

---

##### Sources
[Microsoft Learn - Power Automate](https://learn.microsoft.com/fr-ca/power-automate)

---


Avez-vous apprécié cet article ? Vous avez des questions, commentaires ou suggestions, n’hésitez pas à m'envoyer un message depuis le formulaire de contact.

N'oubliez pas de nous suivre et de partager cet article.