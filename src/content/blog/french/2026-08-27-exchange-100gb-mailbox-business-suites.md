---
title: "Augmentation à 100Go des boîtes courriels Exchange"
meta_title: ""
description: ""
date: 2026-08-27T10:00:00-05:00
image: "/images/blog/exchange/exchange_100gb_mailbox_business_suites_thumbnail.png"
categories: ["Exchange"]
author: "Maxime Hiez"
tags: ["Licences", "Quota", "PowerShell"]
draft: false
---
---

##### Introduction
Le 19 Août 2026, l'équipe *Exchange* a détaillé une évolution de licence passée relativement inaperçue ; les suites *Microsoft 365 Business Basic*, *Business Standard* et *Business Premium* incluent désormais 50Go de stockage supplémentaire pour la boîte aux lettres principale, portant le quota maximal supporté de 50Go à 100Go.

Le changement est en cours de déploiement depuis Juin 2026 et doit se terminer en Septembre 2026, avec une notification préalable par le *Message Center* du *Microsoft 365 Admin Center* pour chaque tenant.

---

##### Comment le quota est composé
L'augmentation ne provient pas d'une modification du quota par défaut, mais de l'addition de deux plans de service :
- <u>BPOS_S_STANDARD</u> : Attribue les 50Go de base
- <u>EXCHANGE_STORAGE_50GB</u> : Ajoute les 50Go supplémentaires

Les deux plans doivent être activés sur l'utilisateur pour que le quota atteigne 100Go. Un plan désactivé, par héritage d'un modèle de licence ou par une désactivation manuelle ancienne, laisse l'utilisateur à 50Go sans message d'erreur. C'est le point de contrôle principal avant d'annoncer la nouveauté aux utilisateurs.

---

##### Deux limites à connaître
La première concerne l'archivage. L'augmentation porte uniquement sur la taille de la boîte aux lettres principale et n'ouvre aucune capacité d'archive en ligne. Une organisation qui cherchait à résoudre un problème de rétention par cette voie devra toujours passer par une licence qui inclut l'archivage.

La seconde concerne les quotas personnalisés. Si un administrateur a défini une valeur de quota spécifique sur une boîte aux lettres, cette valeur reste en vigueur et n'est pas remplacée par l'ajout automatique des 50Go. Un parc où les quotas ont été bridés volontairement, pour contenir la volumétrie ou pour forcer l'usage de l'archivage, ne verra donc aucun changement tant que ces valeurs ne sont pas revues.

---

##### Vérifier l'état réel des boîtes aux lettres
Le contrôle se fait depuis *Exchange Online PowerShell* :
```powershell
Connect-ExchangeOnline

Get-Mailbox -ResultSize Unlimited | Select-Object DisplayName, ProhibitSendReceiveQuota, UseDatabaseQuotaDefaults
```

Une valeur *UseDatabaseQuotaDefaults* à *False* signale une boîte aux lettres dont le quota a été fixé manuellement, et donc exclue de l'augmentation automatique. Côté licences, la vérification de l'activation des deux plans de service se fait depuis le *Microsoft 365 Admin Center* ou avec *Microsoft Graph PowerShell*.

<Notice type="note">L'évolution concerne les trois suites Business commerciales. Les licences *Microsoft 365 Enterprise*, les licences *Frontline* et les boîtes aux lettres partagées suivent leurs propres règles de quota et ne sont pas visées par cette annonce.</Notice>

---

##### Conclusion
Une augmentation de quota sans surcoût est une bonne nouvelle, mais elle ne s'applique pas automatiquement à tout le monde. Deux vérifications s'imposent : l'activation des deux plans de service sur les utilisateurs concernés, et l'existence de quotas personnalisés qui neutralisent l'ajout. Pour les organisations qui utilisaient le plafond de 50Go comme levier de gouvernance documentaire, c'est aussi l'occasion de revoir la politique de rétention plutôt que de laisser les boîtes aux lettres doubler de volume.

---

##### Sources
[Microsoft - Techcommunity](https://techcommunity.microsoft.com/blog/exchange/understanding-the-new-100-gb-mailbox-entitlement-for-microsoft-365-business-suit/4548243)

[Microsoft Learn - Limites Exchange Online](https://learn.microsoft.com/fr-ca/office365/servicedescriptions/exchange-online-service-description/exchange-online-limits)

[Microsoft Learn - Get-Mailbox](https://learn.microsoft.com/fr-ca/powershell/module/exchangepowershell/get-mailbox)

---


Avez-vous apprécié cet article ? Vous avez des questions, commentaires ou suggestions, n'hésitez pas à m'envoyer un message depuis le formulaire de contact.

N'oubliez pas de nous suivre et de partager cet article.