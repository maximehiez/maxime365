---
title: "DLP réseau Purview dans Entra Global Secure Access"
meta_title: ""
description: ""
date: 2026-10-13T10:00:00-05:00
image: "/images/blog/purview/purview_network_layer_dlp_global_secure_access_ga_thumbnail.png"
categories: ["Purview"]
author: "Maxime Hiez"
tags: ["IA", "Sécurité", "DLP", "Licences"]
draft: false
---
---

##### Introduction
*Microsoft Purview* déploie depuis fin Septembre 2026 la disponibilité générale de la *Network Data Security*, l'intégration qui étend le *DLP* (*Data Loss Prevention*) au niveau réseau via *Microsoft Entra Global Secure Access*. Jusqu'ici, les politiques DLP couvertes sur ce blog agissaient au niveau applicatif : *Teams*, *Outlook*, le presse-papier, l'impression, le stockage cloud ou les sites IA dans le navigateur. Cette nouvelle couche agit un niveau plus bas, directement sur le trafic réseau du poste, sans dépendre d'une intégration spécifique à chaque application.

---

##### Ce qui change par rapport au DLP applicatif
Les politiques DLP déjà couvertes sur ce blog s'appuient chacune sur un point d'intégration propre à l'application ciblée : une extension de navigateur, un connecteur Teams, un pilote d'impression. La Network Data Security fonctionne différemment : Global Secure Access inspecte directement le trafic réseau *HTTP* et *HTTPS* émis par le poste, puis transmet les éléments pertinents à Purview pour classification et évaluation de politique, sans installation supplémentaire sur l'appareil au-delà du client Global Secure Access déjà déployé.

Cette couche réseau protège notamment :
- <u>Applications d'IA générative</u> : Interactions via navigateur, application ou module complémentaire avec des services comme *ChatGPT*, *Gemini* ou *Claude*.
- <u>Stockage cloud non géré</u> : Fichiers transférés vers des fournisseurs comme *Dropbox*, *Box* ou *Google Drive*.
- <u>Courriel cloud</u> : Courriels et pièces jointes partagés via des fournisseurs comme *Gmail*.
- <u>Formulaires et réseaux sociaux</u> : Soumissions de formulaires en ligne et publications sur des services comme *Facebook* ou *X*.

Quatre activités sont prises en charge : texte envoyé, fichier téléversé, texte reçu et fichier téléchargé depuis une application cloud ou d'IA. Les classificateurs utilisés sont les mêmes que ceux déjà configurés dans les autres politiques Purview, ce qui évite de redéfinir les types d'informations sensibles pour cette nouvelle couche.

<Notice type="note">Les politiques de Network Data Security ne s'appliquent pas aux utilisateurs invités B2B, et l'évaluation en ligne se limite à 4Mo de contenu pour le texte et à 3Mo pour les fichiers.</Notice>

---

##### Licences requises
L'intégration avec Microsoft Entra Global Secure Access nécessite l'une des combinaisons suivantes :
- <u>Microsoft 365 E7</u> : Licence par utilisateur, suffisante seule.
- <u>Purview E5 et Entra Internet Access</u> : Deux licences par utilisateur, requises ensemble.

<br/><br/>

Une troisième voie existe pour les organisations utilisant une solution *SASE* ou un navigateur sécurisé non-Microsoft plutôt que Global Secure Access : elle nécessite Purview E5 et l'activation du modèle de facturation à l'usage (*pay-as-you-go*) de Purview, facturé à la requête réseau. Cette facturation à l'usage n'est pas requise pour l'intégration avec Global Secure Access elle-même.

---

##### Ce que les administrateurs Purview doivent évaluer
La configuration se fait en deux temps : l'intégration entre Purview et la solution réseau se configure depuis le *Security Store* de Purview DLP, puis la politique de collecte ou de protection se configure comme n'importe quelle autre politique Purview. Une fois l'intégration en place, prévoir jusqu'à 24 heures avant que les politiques se propagent vers la solution réseau et que les premières données apparaissent, puis jusqu'à 30 minutes supplémentaires pour qu'une requête donnée apparaisse dans les journaux d'audit et l'explorateur d'activités.

Les données générées par cette nouvelle couche apparaissent dans l'explorateur d'activités en filtrant sur le plan d'application (*enforcement plane*) *réseau*, ce qui permet de les distinguer des événements générés par les autres couches DLP déjà en place. Pour les organisations qui utilisent déjà des politiques DLP applicatives, notamment celles ciblant les applications d'IA non gérées, cette nouvelle couche réseau se superpose sans les remplacer : il reste pertinent d'évaluer les chevauchements de couverture entre les deux avant d'activer les deux en parallèle sur les mêmes scénarios.

---

##### Conclusion
La Network Data Security ne remplace pas les politiques DLP applicatives déjà couvertes sur ce blog, elle ajoute une couche de visibilité et de contrôle qui ne dépend plus d'une intégration par application. Pour les organisations déjà sous licence Microsoft 365 E7 ou Purview E5 avec Entra Internet Access, l'évaluation de cette couche réseau mérite une priorité particulière sur les flux vers les applications d'IA générative non gérées, un angle mort fréquent des politiques DLP purement applicatives.

---

##### Sources
[Microsoft Learn - Microsoft Purview Network Data Security](https://learn.microsoft.com/fr-ca/purview/dlp-network-data-security-learn)

[Microsoft Learn - Content de filtrage réseau Entra](https://learn.microsoft.com/fr-ca/entra/global-secure-access/how-to-network-content-filtering)

---


Avez-vous apprécié cet article ? Vous avez des questions, commentaires ou suggestions, n'hésitez pas à m'envoyer un message depuis le formulaire de contact.

N'oubliez pas de nous suivre et de partager cet article.