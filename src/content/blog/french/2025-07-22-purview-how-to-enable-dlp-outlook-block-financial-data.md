---
title: "Comment activer le DLP pour Outlook avec Microsoft Purview"
meta_title: ""
description: ""
date: 2025-07-22T10:00:00-05:00
image: "/images/blog/purview/tuto/purview_how_to_enable_dlp_outlook_block_financial_data_thumbnail.png"
categories: ["Purview", "Tutoriel"]
author: "Maxime Hiez"
tags: ["Protection de données", "Gouvernance", "PII", "DLP"]
draft: false
---
---

##### Introduction
Je vous montrais la semaine dernière comment activer le DLP pour Teams avec *Microsoft Purview* afin de prévenir des fuites de données accidentelles ou malveillantes (*Data Loss Prevention*). Puview est une solution de protection de données complète et vaste, et je creuse dedans petit à petit. Toujours dans l'idée de vous parler du DLP, voici cette fois-ci comment protéger l'envoi de données financières depuis Microsoft Outlook.

Voir l'article de la semaine passées [ICI](https://maxime.hiez.ca/blog/2025-07-15-purview-how-to-enable-dlp-teams-block-financial-data).

---

##### Prérequis
**<u>Licences nécessaires</u>**
- *Microsoft 365 Business Premium*, *Microsoft 365 E5*.
- *Microsoft 365 E5 Compliance* en complément avec une licence autre (*E3*, ...).

**<u>Rôle d’administrateur</u>**
- Un compte avec le rôle *Administrateur Global* ou *Compliance Administrator* pour accéder au Microsoft Purview Portal.

---

##### Étape 1 : Se connecter au Microsoft Purview Portal
Connectez vous au Microsoft Purview Portal en ouvrant votre navigateur web sur https://purview.microsoft.com.

---

##### Étape 2 : Créer une règle DLP pour Outlook
Dans le menu de gauche, cliquez sur *<u>Solutions</u>*, puis sur *<u>Data Loss Prevention</u>*.

Cliquez sur *<u>Create policy</u>*.

![image](/images/blog/purview/tuto/purview_how_to_enable_dlp_outlook_block_financial_data_001.png)

Définissez un nom et une description.

![image](/images/blog/purview/tuto/purview_how_to_enable_dlp_outlook_block_financial_data_002.png)

Appliquez cette règle pour les courriels Exchange.

![image](/images/blog/purview/tuto/purview_how_to_enable_dlp_outlook_block_financial_data_003.png)

Configurez les nombreux attributs de type de données et notifications. Dans mon exemple, j'ai choisi un type déjà existant (les données bancaires Canadiennes).

![image](/images/blog/purview/tuto/purview_how_to_enable_dlp_outlook_block_financial_data_004.png)

Activez la règle pour la mettre en production.

![image](/images/blog/purview/tuto/purview_how_to_enable_dlp_outlook_block_financial_data_005.png)

---

##### Étape 3 : Envoyer des données financières pour valider la règle
Après quelques minutes, essayez d'envoyer des informations de carte de crédit via Outlook. Ici, on envoie une (<u>fausse</u>) carte de crédit du compte *User* (*user@hiez.ca*) vers *External User 1* (*external.user1@domain.com*).

La bannière configurée dans la règle s'affiche en haut du courriel avertissant que c'est une donnée interdite à l'envoi.

![image](/images/blog/purview/tuto/purview_how_to_enable_dlp_outlook_block_financial_data_006.png)

Le message est automatiquement bloqué si on essaye de l'envoyer.

![image](/images/blog/purview/tuto/purview_how_to_enable_dlp_outlook_block_financial_data_007.png)

---

##### Étape 4 : Bypasser la règle (optionnel)
Si vous avez choisi d'activer l'option de bypasser la règle, il est alors possible de fournir une explication pour envoyer le contenu. Le message sera alors envoyé sans blocage.

![image](/images/blog/purview/tuto/purview_how_to_enable_dlp_outlook_block_financial_data_008.png)

---

##### Étape 5 : Recevoir la notification 
Si vous avez configuré les notifications, un courriel est envoyé aux personnes désignées dans les secondes suivantes.

![image](/images/blog/purview/tuto/purview_how_to_enable_dlp_outlook_block_financial_data_009.png)

---

##### Conclusion
Grâce à Microsoft Purview DLP, les organisations peuvent détecter, surveiller et bloquer automatiquement le partage non autorisé de données critiques, comme les numéros de carte de crédit ou les informations de comptes bancaires, que ce soit dans le corps des courriels Outlook ou les pièces jointes attachées.<br/><br/>
Vous savez maintenant comment activer le DLP pour Outlook dans Purview.

---

##### Sources
[Microsoft Learn - DLP et Microsoft Outlook](https://learn.microsoft.com/fr-ca/purview/dlp-ol365-win32-policy-tips)

---


Avez-vous apprécié cet article ? Vous avez des questions, commentaires ou suggestions, n’hésitez pas à m'envoyer un message depuis le formulaire de contact.

N'oubliez pas de nous suivre et de partager cet article.