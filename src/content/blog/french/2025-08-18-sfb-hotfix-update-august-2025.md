---
title: "Mise à jour d’Août 2025 pour Skype for Business Server"
meta_title: ""
description: ""
date: 2025-08-18T10:00:00-05:00
image: "/images/blog/sfb/sfb_hotfix_update_august_2025_thumbnail.png"
categories: ["Skype for Business"]
author: "Maxime Hiez"
tags: ["Mise à jour"]
draft: false
---
---

##### Introduction
Microsoft continue de maintenir activement *Skype for Business Server*, notamment dans sa version *Subscription Edition* (SE), avec la publication régulière de correctifs. Le hotfix d’Août 2025 apporte plusieurs améliorations importantes en matière de stabilité, sécurité et compatibilité, tout en préparant le terrain pour les futures évolutions du produit.

---

##### Versions prises en charge
Le correctif d’Août 2025 s’applique aux versions suivantes :
- Skype for Business Server 2015 CU13 (build 6.0.9319.881) — KB3061064
- Skype for Business Server 2019 CU8 (build 7.0.2046.553) — KB4470124
- Skype for Business Server Subscription Edition (SE) RTM (build 7.0.2046.820) — KB5065372

Ces builds constituent les versions minimales requises pour bénéficier de la nouvelle fonctionnalité d’application hybride dédiée.

---

##### Principales nouveautés et recommandations
**<u>Application hybride dédiée</u>**

- Jusqu’à présent, Skype for Business utilisait un *Shared Service Principal* géré par Microsoft pour l’authentification et l’accès à *Exchange Online* (archives, présence via calendrier, synchronisation des photos de profil).
- Désormais, Microsoft recommande vivement — et bientôt exigera — la mise en place d’une *application hybride dédiée* gérée par chaque organisation via leur tenant Entra ID. L’absence de cette configuration entraînera l’arrêt des fonctionnalités hybrides.
<br/><br/>

**<u>Continuité de *Skype Meetings Application*</u>**

- Si ce correctif n’est pas appliqué avant le 15 Octobre 2025, le module de réunions en ligne pourrait ne plus fonctionner correctement. Les administrateurs doivent donc agir rapidement.
<br/><br/>

**<u>Script PowerShell à exécuter</u>**

- Pour Skype for Business Server 2015, il est impératif d'exécuter le script *add_sfbassets.ps1* après l’installation du correctif afin d’assurer le fonctionnement continu de Skype Meetings Application.
- Pour la Subscription Edition, Microsoft fournit également le script *ConfigureSkypeforBusinessHybridApplication.ps1* à exécuter sur le serveur Front End pour configurer l’application hybride dédiée.

---

##### Plan d’action recommandé pour les administrateurs
Les correctifs sont disponibles via le *Centre de téléchargement Microsoft* et peuvent être installés manuellement ou via les outils d’administration habituels. Il est recommandé de :
1. Sauvegarder l’environnement avant toute mise à jour
2. Récupérer les hotfix appropriés selon le rôle (*Core*, *Front End*, *Edge*, *Web Components*, *Enterprise Web App*)
3. Utiliser le *Server Update Installer* avec des droits élevés (UAC désactivé ou executé en tant qu'administrateur)
4. Exécuter le script (*<u>SFB 2015 : add_sfbassets.ps1</u>* ou *<u>SFB SE : ConfigureSkypeforBusinessHybridApplication.ps1</u>*)
5. Redémarrer les services après installation pour garantir la prise en compte du correctif

---

##### Pourquoi cette mise à jour est cruciale ?
- Sécurité accrue : L’application hybride dédiée améliore le contrôle, la traçabilité et la sécurité de l’authentification entre environnements sur site et Exchange Online.
- Maintien des fonctionnalités hybrides : Sans cette installation, des fonctionnalités essentielles, comme l’archivage ou la présence, risquent de cesser de fonctionner.
- Continuité des réunions : Garantir le fonctionnement de Skype Meetings Application au-delà du 15 Octobre est indispensable pour éviter des perturbations majeures au sein de l’organisation.

---

##### Conclusion
La mise à jour corrective d’Août 2025 pour Skype for Business Server constitue bien plus qu’un simple correctif de sécurité : elle représente une transformation de l’architecture hybride, remplaçant un modèle de service partagé par un modèle dédié, plus sécurisé et contrôlé. Les administrateurs ont une fenêtre cruciale pour agir : appliquer les mises à jour selon la version, exécuter les scripts fournis, et s’assurer que les fonctionnalités hybrides et de réunion restent fonctionnelles après le 15 Octobre 2025.

Une transition bien préparée permettra de préserver l’expérience utilisateur tout en renforçant la posture de sécurité de l’infrastructure.

---

##### Sources
[Microsoft - Techcommunity](https://techcommunity.microsoft.com/blog/skype_for_business_blog/released-august-2025-skype-for-business-server-hotfix-updates/4445144)

[Windows Forum - Application hybride dédiée pour Skype for Business Hybride](https://windowsforum.com/threads/august-2025-dedicated-hybrid-app-for-skype-for-business-hybrid-act-by-oct-15.378059)

[Microsoft - KB5065372](https://support.microsoft.com/en-us/topic/updates-for-skype-for-business-server-subscription-edition-se-kb5065372-45f6768c-d60e-4ac3-b60e-0f850b9911cd)

[Microsoft - KB4470124](https://support.microsoft.com/en-us/topic/updates-for-skype-for-business-server-2019-kb4470124-890f4878-c6fe-f71b-c85f-db2acc284b94)

[Microsoft - KB3061064](https://support.microsoft.com/en-us/topic/updates-for-skype-for-business-server-2015-kb3061064-7c3cdc53-6d6d-0c1e-e2ee-2b598c53cc7e)

---


Avez-vous apprécié cet article ? Vous avez des questions, commentaires ou suggestions, n’hésitez pas à m'envoyer un message depuis le formulaire de contact.

N'oubliez pas de nous suivre et de partager cet article.