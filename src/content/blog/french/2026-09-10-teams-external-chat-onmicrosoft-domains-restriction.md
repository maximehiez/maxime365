---
title: "Teams durcit les règles pour les tenants onmicrosoft.com"
meta_title: ""
description: ""
date: 2026-09-10T10:00:00-05:00
image: "/images/blog/teams/teams_external_chat_onmicrosoft_domains_restriction_thumbnail.png"
categories: ["Teams"]
author: "Maxime Hiez"
tags: ["Sécurité", "Gouvernance", "Domaine"]
draft: false
---
---

##### Introduction
*Microsoft* introduit une limite de messagerie externe sortante dans *Teams* pour les tenants qui n'utilisent que leur domaine par défaut *onmicrosoft.com* (*MOERA*). Le déploiement débute mi-Septembre 2026 et doit se terminer mondialement dans le même intervalle.

---

##### Ce qui change
Pour les tenants n'ayant configuré aucun domaine personnalisé, l'expérience se déroule ainsi :
1. L'utilisateur envoie des messages à des contacts externes normalement, jusqu'à atteindre la limite.
2. Une fois la limite atteinte, Teams affiche une notification indiquant que la messagerie externe sortante a été temporairement limitée.
3. L'utilisateur ne peut plus envoyer de nouveaux messages à des contacts externes pendant une période donnée.
4. La messagerie interne à l'organisation n'est pas affectée.

Microsoft n'a pas communiqué le nombre exact de messages autorisés ni la fenêtre de temps utilisée pour calculer la limite. Les administrateurs n'ont donc pas encore de moyen de mesurer leur exposition actuelle.

<Notice type="info">Cette restriction s'inscrit dans la continuité d'une limite déjà appliquée aux courriels sortants des domaines onmicrosoft.com dans Exchange Online : 100 destinataires externes par fenêtre glissante de 24 heures, avec un rejet *NDR 550 5.7.236* au-delà. Le déploiement s'est étalé d'Octobre 2025 à Juin 2026 selon le nombre de licences Exchange du tenant, et est aujourd'hui terminé. Microsoft applique désormais le même principe à la messagerie Teams, sans avoir encore communiqué le seuil retenu.</Notice>

---

##### Pourquoi cette restriction ?
Le domaine onmicrosoft.com fourni par défaut à chaque tenant ne nécessite aucune vérification, ce qui en fait une cible facile pour les campagnes de pourriel, d'hameçonnage et d'autres abus. En limitant la messagerie externe sortante depuis ces domaines, Microsoft ajoute une couche de protection supplémentaire contre ces usages. L'entreprise précise que la communication normale d'une organisation ne devrait pas approcher ces seuils, la limite visant les volumes abusifs plutôt que les échanges habituels avec des clients ou partenaires.

---

##### Comment vérifier si votre tenant est concerné ?
La protection est activée par défaut, aucune action n'est requise pour l'activer. Pour évaluer votre exposition :
- <u>Vérifier la configuration du domaine</u> : Dans le *Centre d'administration Microsoft 365*, section *<u>Paramètres</u>* > *<u>Domaines</u>*, vérifier si le tenant dispose d'un domaine personnalisé ou repose uniquement sur le domaine onmicrosoft.com par défaut.
- <u>Ajouter un domaine personnalisé</u> : Depuis la page Domaines, l'option *<u>Add domain</u>* permet d'ajouter un domaine représentant l'organisation et d'échapper à la limitation.
- <u>Alerte de throttling</u> : Microsoft prévoit d'introduire une alerte administrateur optionnelle après le déploiement initial, pour être notifié lorsque le tenant atteint la limite.

---

##### Conclusion
Les organisations qui dépendent fortement de la collaboration externe et qui utilisent encore leur domaine onmicrosoft.com par défaut doivent revoir leur configuration avant le déploiement de mi-Septembre. L'ajout d'un domaine personnalisé reste la seule mitigation confirmée à ce jour, en l'absence de détails précis sur le seuil de déclenchement.

---

##### Sources
[Microsoft - Techcommunity](https://techcommunity.microsoft.com/discussions/microsoftteams/teams-clamps-down-on-moera-only-tenants/4552579)

[Microsoft - Techcommunity](https://techcommunity.microsoft.com/blog/exchange/limiting-onmicrosoft-domain-usage-for-sending-emails/4446167)

[Microsoft Learn - Ajouter un domaine personnalisé](https://learn.microsoft.com/fr-ca/microsoft-365/admin/setup/add-domain)

---


Avez-vous apprécié cet article ? Vous avez des questions, commentaires ou suggestions, n'hésitez pas à m'envoyer un message depuis le formulaire de contact.

N'oubliez pas de nous suivre et de partager cet article.