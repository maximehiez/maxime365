---
title: "Microsoft Entra Backup and Recovery enfin disponible"
meta_title: ""
description: ""
date: 2026-07-23T10:00:00-05:00
image: "/images/blog/entra/entra_backup_recovery_ga_thumbnail.png"
categories: ["Entra ID"]
author: "Maxime Hiez"
tags: ["Sauvegarde", "Sécurité"]
draft: false
---
---

##### Introduction
La suppression accidentelle d'un compte utilisateur, d'une stratégie d'accès conditionnel ou d'une attribution de principal de service peut rapidement paralyser un tenant *Microsoft Entra ID*. Jusqu'à présent, aucun mécanisme natif ne permettait de restaurer ces objets à un état antérieur sans recourir à des outils tiers ou à des procédures manuelles. *Microsoft Entra Backup and Recovery* est maintenant en *General Availability* et comble ce manque directement depuis le portail Entra.

---

##### Qu'est-ce que Microsoft Entra Backup and Recovery ?
Microsoft Entra Backup and Recovery est une solution de sauvegarde intégrée et toujours active. Elle prend automatiquement un instantané quotidien des objets critiques du répertoire et conserve un historique de sept jours. Aucune configuration n'est requise pour démarrer, et personne ne peut désactiver, modifier ou supprimer les sauvegardes, même un *Administrateur Global*.

La solution est accessible depuis le *Microsoft Entra Admin Center* via la section *Backup and recovery*, qui contient quatre sous-pages : *Overview*, *Backups*, *Difference Reports* et *Recovery History*.

---

##### Ce qui est couvert
La solution couvre les principaux objets du répertoire, avec une couverture complète ou partielle selon le type :
- <u>Stratégies d'accès conditionnel</u> : Couverture complète de toutes les propriétés.
- <u>Emplacements nommés</u> : Couverture complète de toutes les propriétés.
- <u>Utilisateurs</u> : Couverture partielle (33 propriétés ; les liens manager et sponsor sont exclus).
- <u>Groupes Microsoft 365 et de sécurité</u> : Couverture partielle (12 propriétés ; membres statiques inclus, règles de groupes dynamiques et liens propriétaires exclus).
- <u>Applications</u> : Couverture partielle (propriétés de configuration sélectionnées ; secrets, certificats et configuration du proxy d'application exclus).
- <u>Service principals</u> : Couverture partielle (attributions de rôles d'applications récupérées comme ancres).
- <u>Stratégies de méthodes d'authentification</u> : Méthodes sélectionnées (FIDO2, Authenticator, SMS, Voice, Email OTP, OATH, TAP, CBA).
<br/><br/>

Plusieurs éléments sont explicitement exclus :
- <u>Ressources Microsoft 365</u> : Les boîtes aux lettres, *OneDrive* et *SharePoint* relèvent de *Microsoft 365 Backup Storage*, un produit distinct.
- <u>Objets définitivement supprimés</u> : Impossible à récupérer ou à recréer. L'utilisation d'actions protégées dans Entra est recommandée pour limiter ce risque.
- <u>Objets synchronisés depuis AD on-premises</u> : Visibles dans les rapports de différences, mais exclus de la récupération. La restauration doit s'effectuer dans Active Directory local.
- <u>Consentements OAuth2 utilisateurs</u> : Seuls les consentements administrateurs de type *AllPrincipals* sont inclus.

---

##### Comment y accéder ?
L'accès à la fonctionnalité nécessite l'un des rôles suivants :
- <u>Microsoft Entra Backup Reader</u> : Consultation des sauvegardes, des rapports de différences et de l'historique de récupération.
- <u>Microsoft Entra Backup Administrator</u> : Toutes les permissions Reader, plus la capacité de lancer des rapports de différences et des tâches de récupération.

![image](/images/blog/entra/entra_backup_recovery_ga_001.png)

Le workflow recommandé consiste à lancer un rapport de différences avant toute récupération, afin d'examiner exactement ce qui a changé. Cette étape pré-charge également les données de sauvegarde et accélère la tâche de récupération suivante.
<br/><br/>

Lors d'une récupération, trois niveaux de portée sont disponibles :
1. Récupérer tous les objets à un état antérieur.
2. Récupérer uniquement certains types d'objets (par exemple, uniquement les stratégies d'accès conditionnel).
3. Récupérer jusqu'à 100 objets spécifiques identifiés par leur *Object ID*.

---

##### Disponibilité et prérequis
Microsoft Entra Backup and Recovery est inclus sans frais supplémentaires dans les licences *Microsoft Entra ID P1* et *P2*. La fonctionnalité est disponible pour les tenants *Workforce* uniquement. Les tenants *Entra External ID* et *Azure AD B2C* ne sont pas supportés.

L'accès programmatique via *Microsoft Graph* est disponible, mais uniquement sous le point de terminaison */beta* (espace de noms *microsoft.graph.entraRecoveryServices*). L'utilisation des *API* beta en production n'est pas officiellement supportée par Microsoft.

---

##### Conclusion
Microsoft Entra Backup and Recovery apporte enfin un filet de sécurité natif pour les objets du répertoire Entra ID. Pour une stratégie de résilience complète, il est recommandé de le compléter avec la surveillance des suppressions logicielles, les actions protégées pour les objets critiques, une approche infrastructure-as-code pour les stratégies d'accès conditionnel et *Microsoft 365 Backup Storage* pour les données *Exchange*, *OneDrive* et *SharePoint*.

---

##### Sources
[Microsoft Learn - Vue d'ensemble de la sauvegarde et récupération Entra](https://learn.microsoft.com/fr-ca/entra/backup/overview)

[Microsoft Learn - Objets et propriétés supportés](https://learn.microsoft.com/fr-ca/entra/backup/scope-supported-objects-limitations)

[Microsoft Learn - Modèle de sauvegarde, rapport de différences et récupération](https://learn.microsoft.com/fr-ca/entra/backup/backup-difference-report-recovery-model)

[Microsoft Learn - Récupérer des objets](https://learn.microsoft.com/fr-ca/entra/backup/recover-objects)

---


Avez-vous apprécié cet article ? Vous avez des questions, commentaires ou suggestions, n'hésitez pas à m'envoyer un message depuis le formulaire de contact.

N'oubliez pas de nous suivre et de partager cet article.