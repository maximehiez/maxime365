---
title: "Comment signaler un message Teams inaproprié avec Purview"
meta_title: ""
description: ""
date: 2025-10-20T10:00:00-05:00
image: "/images/blog/purview/tuto/purview_how_to_report_inappropriate_teams_message_thumbnail.png"
categories: ["Purview", "Tutoriel"]
author: "Maxime Hiez"
tags: ["Conformité"]
draft: false
---
---

##### Introduction
Dans un environnement où la communication numérique est omniprésente, les organisations doivent s’assurer que leurs échanges internes et externes respectent les politiques de conformité et de conduite. La fonctionnalité *Microsoft Purview Communication Compliance* répond précisément à cet enjeu. Elle permet d’identifier, d’analyser et de remédier aux communications inappropriées ou à risque au sein de Microsoft 365 (*Teams*, *Exchange*, *Viva Engage*, ...).

---

##### Prérequis
**<u>Licences nécessaires</u>**
- *Microsoft 365 E5*.
- *Microsoft Purview Suite* en complément avec une licence autre (*E3*, *Business*, ...).

**<u>Rôle d’administrateur</u>**
- Un compte avec le rôle *Administrateur Global* ou *Compliance Administrator* pour accéder au Microsoft Purview Portal.

---

##### Étape 1 : Recevoir un message inaproprié dans Teams
L'utilisateur reçoit un message dont le contenu ne suis pas les règles de conduite de l'entreprise. 

![image](/images/blog/purview/tuto/purview_how_to_report_inappropriate_teams_message_001.png)

---

##### Étape 2 : Signaler le message
Cliquez sur les ***...*** au bout du message, puis sur *<u>Report this message</u>*.

![image](/images/blog/purview/tuto/purview_how_to_report_inappropriate_teams_message_002.png)

Cliquez sur *<u>Report</u>* pour envoyer la signalisation aux administrateurs.

![image](/images/blog/purview/tuto/purview_how_to_report_inappropriate_teams_message_003.png)

---

##### Étape 3 : Se connecter au Microsoft Purview Portal
Connectez-vous au Microsoft Purview Portal en ouvrant votre navigateur web sur https://purview.microsoft.com.

---

##### Étape 4 : Accéder aux messages signalés
Dans le menu de gauche, cliquez sur *<u>Solutions</u>*, puis sur *<u>Communication Compliance</u>*.

Cliquez sur *<u>User-reported messages</u>* pour afficher la liste de messages signalés.

![image](/images/blog/purview/tuto/purview_how_to_report_inappropriate_teams_message_004.png)

Cliquez dessus pour voir les détails.

![image](/images/blog/purview/tuto/purview_how_to_report_inappropriate_teams_message_005.png)

---

##### Étape 5 : Classifier le message
Cliquez sur *<u>Tag as</u>* pour assigner une catégorie et un commentaire au message. Ils seront juste visibles par les administrateurs.

![image](/images/blog/purview/tuto/purview_how_to_report_inappropriate_teams_message_006.png)

---

##### Étape 6 : Envoyer une notification
Cliquez sur l'icône de flêche pour envoyer une notification à la personne qui a envoyé le message inaproprié. Dans mon exemple, j'avais déjà un template de message, mais il est possible d'en créer d'autres.

![image](/images/blog/purview/tuto/purview_how_to_report_inappropriate_teams_message_007.png)

Cliquez sur *<u>Save</u>* pour envoyer la notification.

![image](/images/blog/purview/tuto/purview_how_to_report_inappropriate_teams_message_008.png)

---

##### Étape 7 : Fermer le signalement
Cliquez sur *<u>Resolve</u>* et fournissez un commentaire pour déplacer automatiquement le signalement dans l'onglet *Resolved*.

![image](/images/blog/purview/tuto/purview_how_to_report_inappropriate_teams_message_009.png)

---

##### Étape 8 : Recevoir la notification 
L'utilisateur à l'origine du message inaproprié dans Teams va recevoir la notification dans les secondes suivantes.

![image](/images/blog/purview/tuto/purview_how_to_report_inappropriate_teams_message_010.png)

---

##### Conclusion
Grâce à Microsoft Purview Communication Compliance, les organisations ont un cadre solide pour surveiller et gérer les échanges sensibles sans compromettre la collaboration. Le reporting utilisateur devient ainsi un levier de conformité collective : chaque employé peut contribuer activement à la détection des comportements à risque, tandis que les administrateurs disposent d’outils puissants pour enquêter et agir de manière ciblée.<br/><br/>
Vous savez maintenant comment traiter les messages signalés dans Teams avec Purview.

---

##### Sources
[Microsoft Learn - Conformité des communications](https://learn.microsoft.com/fr-ca/purview/communication-compliance-solution-overview)

---


Avez-vous apprécié cet article ? Vous avez des questions, commentaires ou suggestions, n’hésitez pas à m'envoyer un message depuis le formulaire de contact.

N'oubliez pas de nous suivre et de partager cet article.