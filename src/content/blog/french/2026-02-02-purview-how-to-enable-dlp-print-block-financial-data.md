---
title: "Comment activer le DLP pour l'impression avec Purview"
meta_title: ""
description: ""
date: 2026-02-02T10:00:00-05:00
image: "/images/blog/purview/tuto/purview_how_to_enable_dlp_print_block_financial_data_thumbnail.png"
categories: ["Purview", "Tutoriel"]
author: "Maxime Hiez"
tags: ["Protection de données", "Gouvernance", "PII", "DLP", "Sécurité"]
draft: true
---
---

##### Introduction
Je vous montrais il y a quelques semaines comment activer le *DLP* contre la copie de données financières vers une solution de stockage cloud externe avec *Microsoft Purview* afin de prévenir des fuites de données accidentelles ou malveillantes (*Data Loss Prevention*). Toujours dans l'idée de vous parler du DLP, voici cette fois-ci comment protéger l"impression de données financières.

Voir l'article de Janvier 2026 [ICI](https://maxime.hiez.ca/blog/2026-01-06-purview-how-to-enable-dlp-cloud-storage-block-financial-data).

---

##### Prérequis
**<u>Licences nécessaires</u>**
- *Microsoft 365 Business Premium*, *Microsoft 365 E5*.
- *Microsoft Purview Suite* en complément avec une licence autre (*E3*, ...).

**<u>Rôle d’administrateur</u>**
- Un compte avec le rôle *Administrateur Global* ou *Compliance Administrator* pour accéder au Microsoft Purview Portal.

---

##### Étape 1 : Se connecter au Microsoft Purview Portal
Connectez-vous au Microsoft Purview Portal en ouvrant votre navigateur web sur https://purview.microsoft.com.

---

##### Étape 2 : Créer une règle DLP pour les appareils
Dans le menu de gauche, cliquez sur *<u>Solutions</u>*, puis sur *<u>Data Loss Prevention</u>*.

Cliquez sur *<u>Create policy</u>*.

![image](/images/blog/purview/tuto/purview_how_to_enable_dlp_print_block_financial_data_001.png)

Définissez un nom et une description.

![image](/images/blog/purview/tuto/purview_how_to_enable_dlp_print_block_financial_data_002.png)

Appliquez cette règle pour les appareils.

![image](/images/blog/purview/tuto/purview_how_to_enable_dlp_print_block_financial_data_003.png)

Configurez les nombreux attributs de type de données et notifications. Dans mon exemple, j'ai choisi un type déjà existant (les données bancaires Canadiennes).

![image](/images/blog/purview/tuto/purview_how_to_enable_dlp_print_block_financial_data_004.png)

Activez la règle pour la mettre en production.

![image](/images/blog/purview/tuto/purview_how_to_enable_dlp_print_block_financial_data_005.png)

<Notice type="info">La règle peut prendre jusqu'à 24 heures avant d'être effective.</Notice>

---

##### Étape 3 : Imprimer des données financières pour valider la règle
Je réutilise le fichier Word *<u>Cards.docx</u>* contenant une (<u>fausse</u>) carte de crédit, créé pour mon précédent article.

Je n'ai pas d'imprimante mais je lance une impression en PDF et ...

![image](/images/blog/purview/tuto/purview_how_to_enable_dlp_print_block_financial_data_006.png)

... la tentative est bloquée. Le popup configuré dans la règle s'affiche avertissant que c'est une donnée interdite à l'impression.

![image](/images/blog/purview/tuto/purview_how_to_enable_dlp_print_block_financial_data_007.png)

---

##### Étape 4 : Recevoir la notification 
Si vous avez configuré les notifications, un courriel est envoyé aux personnes désignées dans les secondes suivantes.

![image](/images/blog/purview/tuto/purview_how_to_enable_dlp_print_block_financial_data_008.png)

---

##### Et si je veux autoriser / bloquer certaines imprimantes ?
Dans le menu de gauche, cliquez sur *<u>Settings</u>*, puis sur *<u>Data Loss Prevention</u>*.

Cliquez sur *<u>Printer groups</u>* et ajouter la ou les imprimantes ciblées.

![image](/images/blog/purview/tuto/purview_how_to_enable_dlp_print_block_financial_data_009.png)

Éditez la règle DLP en ajoutant la groupe d'imprimantes et l'action à appliquer.

![image](/images/blog/purview/tuto/purview_how_to_enable_dlp_print_block_financial_data_010.png)

---

##### Conclusion
Grâce à Microsoft Purview DLP, les organisations peuvent détecter, surveiller et bloquer automatiquement l'impression non autorisée de données critiques, comme les numéros de carte de crédit ou les informations de comptes bancaires.<br/><br/>
Vous savez maintenant comment activer le DLP pour les impressions.

---

##### Sources
[Microsoft Learn - DLP et appareils](https://learn.microsoft.com/fr-ca/purview/endpoint-dlp-using)

---


Avez-vous apprécié cet article ? Vous avez des questions, commentaires ou suggestions, n’hésitez pas à m'envoyer un message depuis le formulaire de contact.

N'oubliez pas de nous suivre et de partager cet article.