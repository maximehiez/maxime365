---
title: "Analyse d'impact des politiques d'accès conditionnel Entra"
meta_title: ""
description: ""
date: 2025-03-17T10:00:00-05:00
image: "/images/blog/entra/entra_conditional_access_policy_impact_thumbnail.png"
categories: ["Entra ID"]
author: "Maxime Hiez"
tags: ["Accès conditionnel", "Sécurité"]
draft: false
---
---

##### Introduction
Les accès conditionnels dans Entra sont des politiques de sécurité qui permettent aux administrateurs de contrôler l'accès aux applications et aux ressources en fonction de conditions spécifiques. Ces conditions peuvent inclure des facteurs tels que l'emplacement de l'utilisateur, l'appareil utilisé, le niveau de risque de connexion, et bien plus encore. En utilisant des politiques d'accès conditionnel, les organisations peuvent renforcer leur sécurité en appliquant des contrôles d'accès adaptés aux risques identifiés.

Une nouvelle fonctionnalité en version pré-publique est offerte par Microsoft : l'analyse d'impact des politiques d'accès conditionnel Entra. 

---

##### Impact des politiques d'accès conditionnel
La fonctionnalité permettant d'analyser les impacts des politiques d'accès conditionnel permet aux administrateurs d'obtenir un aperçu des informations sur les impacts potentiels ou existants des politiques sur les connexions interactives au sein de l'organisation. Cette fonctionnalité permet d'analyser l'impact sur une période de 24 heures, 7 jours ou 1 mois.

![image](/images/blog/entra/entra_conditional_access_policy_impact_001.png)

---

##### Comment créer une polique sans impact ?
Le mode *Report Only* est un état de politique qui permet aux administrateurs de tester la plupart des politiques d'accès conditionnel avant de les activer. Lorsqu'une politique est en mode *Report Only*, elle est évaluée lors de la connexion, mais les contrôles d'accès ne sont pas appliqués. Les résultats de cette évaluation sont enregistrés dans les journaux de connexion.

Lorsqu'une politique est en mode *Report Only*, plusieurs résultats sont possibles :
- <u>Report Only: Success</u> : Toutes les conditions de la politique configurée, les contrôles de concession non interactifs requis et les contrôles de session ont été satisfaits.
- <u>Report Only: Failure</u> : Toutes les conditions de la politique configurée ont été satisfaites, mais pas tous les contrôles de concession non interactifs ou les contrôles de session requis.
- <u>Report Only: User action required</u> : Toutes les conditions de la politique configurée ont été satisfaites, mais une action de l'utilisateur serait nécessaire pour satisfaire les contrôles de concession ou de session requis.
- <u>Report Only: Not applied</u> : Toutes les conditions de la politique configurée n'ont pas été satisfaites.

---

##### Avantages du mode *Report Only*
- Sécurité améliorée : Permet de tester les politiques sans risquer de bloquer l'accès des utilisateurs.
- Déploiement plus sûr : Aide à comprendre l'impact des politiques avant leur activation, réduisant ainsi les risques de perturbation.
- Analyse détaillée : Fournit des informations précieuses sur les connexions et les actions des utilisateurs, aidant à affiner les politiques.

![image](/images/blog/entra/entra_conditional_access_policy_impact_002.png)

---

##### Conclusion
Le mode *Report Only* et l'analyse d'impact pour les politiques d'accès conditionnel dans Microsoft Entra sont deux outils précieux pour les administrateurs, leur permettant de tester et d'analyser l'impact des politiques avant leur déploiement. En utilisant ces fonctionnalités, les organisations peuvent améliorer leur sécurité tout en minimisant les perturbations pour les utilisateurs.

---

##### Sources
[Microsoft Learn - Impact des politiques d'accès conditionnel](https://learn.microsoft.com/fr-ca/entra/identity/conditional-access/concept-conditional-access-report-only#policy-impact-preview)

---


Avez-vous apprécié cet article ? Vous avez des questions, commentaires ou suggestions, n’hésitez pas à laisser un commentaire dans la section ci-dessous ou en m'envoyant un message depuis le formulaire de contact.

N'oubliez pas de nous suivre et de partager cet article.