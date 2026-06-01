---
title: "La signature électronique avec SharePoint eSignature pour Word"
meta_title: ""
description: ""
date: 2025-06-13T10:00:00-05:00
image: "/images/blog/sharepoint/sharepoint_esignaturefor_word_thumbnail.png"
categories: ["SharePoint"]
author: "Maxime Hiez"
tags: ["Word", "Signature", "PDF"]
draft: false
---
---

##### Introduction
Microsoft franchit une nouvelle étape dans l’intégration de ses services de productivité avec l’annonce de *SharePoint eSignature* pour *Microsoft Word*. Cette fonctionnalité permet désormais de demander des signatures électroniques directement depuis Word, sans avoir à convertir les documents en PDF ou à passer par des outils tiers.

---

##### Une signature électronique intégrée à Word
Grâce à cette nouveauté, les utilisateurs peuvent insérer des champs de signature dans leurs documents Word, puis envoyer une demande de signature sans quitter l’interface familière de Word. L’option est accessible depuis l’onglet *Insertion* du ruban, à condition que le document soit stocké dans un site SharePoint avec eSignature activé.

![image](/images/blog/sharepoint/sharepoint_esignaturefor_word_001.png)

Une fois la demande envoyée :
- Un PDF est automatiquement généré à partir du document Word
- Le destinataire signe ce PDF
- Le document signé est stocké dans le même emplacement SharePoint que le fichier d’origine

Tout cela se fait sans sortir de l’environnement Microsoft 365, garantissant ainsi sécurité, conformité et traçabilité.

---

##### Sécurité, conformité et audit
SharePoint eSignature s’inscrit dans une logique de conformité réglementaire, notamment avec le règlement européen *eIDAS*. Toutes les activités liées à la signature (envoi, consultation, signature, téléchargement) sont journalisées dans *Microsoft Purview Audit Log*, offrant une traçabilité complète.

Les administrateurs peuvent :
- Activer ou restreindre la fonctionnalité par utilisateur ou site SharePoint
- Suivre les activités via les logs d’audit
- Gérer les accès externes pour permettre la signature par des parties tierces

![image](/images/blog/sharepoint/sharepoint_esignaturefor_word_002.png)

---

##### Réutilisation et automatisation
Les documents Word peuvent être enregistrés comme modèles de signature, facilitant les processus répétitifs (contrats, formulaires RH, ...). De plus, les utilisateurs reçoivent des notifications par courriel à chaque étape du processus, et peuvent suivre l’état de la demande dans l’interface Word ou SharePoint.

![image](/images/blog/sharepoint/sharepoint_esignaturefor_word_003.png)

---

##### Disponibilité et intégration
La fonctionnalité est en cours de déploiement pour les utilisateurs des canaux Microsoft 365 *Beta* et *Current*, avec une disponibilité complète prévue d’ici Juillet 2025 pour les États-Unis, le Canada, le Royaume-Uni, l'Europe et la zone Asie-Pacifique.

Elle vient compléter l’offre existante de SharePoint eSignature, qui permettait déjà de signer des PDF via des intégrations avec *Adobe Acrobat Sign* et *DocuSign*.

![image](/images/blog/sharepoint/sharepoint_esignaturefor_word_004.png)

---

##### Conclusion
Avec SharePoint eSignature pour Word, Microsoft propose une solution native, fluide et sécurisée pour la signature électronique, directement intégrée à l’écosystème Microsoft 365. Elle permet de gagner du temps, de réduire les coûts liés aux outils tiers, et de renforcer la conformité des processus documentaires. Une avancée majeure pour les organisations qui souhaitent moderniser leurs flux de validation tout en gardant le contrôle sur leurs données.

---

##### Sources
[Microsoft - Techcommunity](https://techcommunity.microsoft.com/blog/spblog/announcing-sharepoint-esignature-for-microsoft-word/4419681)

[Microsoft Learn - Signature électronique SharePoint](https://learn.microsoft.com/fr-ca/microsoft-365/syntex/esignature-overview)

[DocuSign - Règlement eIDAS](https://www.docusign.com/fr-fr/eidas-valeur-legale-signature-electronique)

---


Avez-vous apprécié cet article ? Vous avez des questions, commentaires ou suggestions, n’hésitez pas à m'envoyer un message depuis le formulaire de contact.

N'oubliez pas de nous suivre et de partager cet article.