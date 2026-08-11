---
title: "Comment activer le DLP pour Teams avec Purview"
meta_title: ""
description: ""
date: 2025-07-15T10:00:00-05:00
image: "/images/blog/purview/tuto/purview_how_to_enable_dlp_teams_block_financial_data_thumbnail.png"
categories: ["Purview", "Tutoriel"]
author: "Maxime Hiez"
tags: ["Protection de données", "Gouvernance", "PII", "DLP", "Sécurité"]
draft: false
---
---

##### Introduction
Dans un contexte où les données sensibles, notamment les informations bancaires, circulent de plus en plus dans les outils collaboratifs, les entreprises doivent redoubler de vigilance pour éviter les fuites accidentelles ou malveillantes. C’est dans cette optique que *Microsoft Purview* propose une solution robuste de prévention de la perte de données (*Data Loss Prevention*), intégrée nativement à Microsoft Teams.

---

##### Prérequis
**<u>Licences nécessaires</u>**
- *Microsoft 365 Business Premium*, *Microsoft 365 E5*.
- *Microsoft Purview Suite* en complément avec une licence autre (*E3*, ...).

**<u>Rôle d’administrateur</u>**
- Un compte avec le rôle *Administrateur Global* ou *Administrateur de conformité* pour accéder au Microsoft Purview Portal.

---

##### Étape 1 : Se connecter au Microsoft Purview Portal
Connectez-vous au Microsoft Purview Portal en ouvrant votre navigateur web sur https://purview.microsoft.com.

---

##### Étape 2 : Créer une règle DLP pour Teams
Dans le menu de gauche, cliquez sur *<u>Solutions</u>*, puis sur *<u>Data Loss Prevention</u>*.

Cliquez sur *<u>Create policy</u>*.

![image](/images/blog/purview/tuto/purview_how_to_enable_dlp_teams_block_financial_data_001.png)

Définissez un nom et une description.

![image](/images/blog/purview/tuto/purview_how_to_enable_dlp_teams_block_financial_data_002.png)

Appliquez cette règle pour les messages Teams.

![image](/images/blog/purview/tuto/purview_how_to_enable_dlp_teams_block_financial_data_003.png)

Configurez les nombreux attributs de type de données et notifications. Dans mon exemple, j'ai choisi un type déjà existant (les données bancaires Canadiennes).

![image](/images/blog/purview/tuto/purview_how_to_enable_dlp_teams_block_financial_data_004.png)

Activez la règle pour la mettre en production.

![image](/images/blog/purview/tuto/purview_how_to_enable_dlp_teams_block_financial_data_005.png)

---

##### Étape 3 : Envoyer des données financières pour valider la règle
Après quelques minutes, essayez d'envoyer des informations de carte de crédit via Teams. Ici, on envoie une (<u>fausse</u>) carte de crédit du compte *User* (*user@hiez.ca*) vers *External User 1* (*external.user1@domain.com*).

![image](/images/blog/purview/tuto/purview_how_to_enable_dlp_teams_block_financial_data_006.png)

Le message est automatiquement bloqué sur le compte de *User* après l'envoi.

![image](/images/blog/purview/tuto/purview_how_to_enable_dlp_teams_block_financial_data_007.png)

La réception est également bloquée sur le compte de *External User 1*.

![image](/images/blog/purview/tuto/purview_how_to_enable_dlp_teams_block_financial_data_008.png)

---

##### Étape 4 : Recevoir la notification 
Si vous avez configuré les notifications, un courriel est envoyé aux personnes désignées dans les secondes suivantes.

![image](/images/blog/purview/tuto/purview_how_to_enable_dlp_teams_block_financial_data_009.png)

---

##### Étape 5 : Bypasser la règle (optionnel)
Si vous avez choisi d'activer l'option de bypasser la règle, il est alors possible de fournir une explication pour envoyer le contenu. Le message sera alors envoyé sans blocage.

![image](/images/blog/purview/tuto/purview_how_to_enable_dlp_teams_block_financial_data_010.png)

Une nouvelle notification contenant la justification sera envoyée par courriel aux mêmes personnes.

---

##### Conclusion
Grâce à Microsoft Purview DLP, les organisations peuvent détecter, surveiller et bloquer automatiquement le partage non autorisé de données critiques, comme les numéros de carte de crédit ou les informations de comptes bancaires, que ce soit dans les conversations Teams, les fichiers partagés ou les canaux collaboratifs.<br/><br/>
Vous savez maintenant comment activer le DLP pour Teams avec Purview.

---

##### Sources
[Microsoft Learn - DLP et Microsoft Teams](https://learn.microsoft.com/fr-ca/purview/dlp-microsoft-teams)

---


Avez-vous apprécié cet article ? Vous avez des questions, commentaires ou suggestions, n’hésitez pas à m'envoyer un message depuis le formulaire de contact.

N'oubliez pas de nous suivre et de partager cet article.