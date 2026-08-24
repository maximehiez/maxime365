---
title: "Le partage de disponibilité migre vers Cross-Tenant Access Policy"
meta_title: ""
description: ""
date: 2026-08-19T10:00:00-05:00
image: "/images/blog/exchange/exchange_cross_tenant_freebusy_access_policy_thumbnail.png"
categories: ["Exchange"]
author: "Maxime Hiez"
tags: ["Calendrier", "EWS", "Partage", "PowerShell"]
draft: false
---
---

##### Introduction
L'équipe *Exchange Online* a annoncé le déplacement du partage inter-tenants de disponibilité, de *MailTips* et de calendriers vers le *Microsoft 365 Cross-Tenant Access Policy*. Ces trois scénarios reposent aujourd'hui sur *Exchange Web Services* (*EWS*), dont la désactivation progressive commence le 1er Octobre 2026.

Le changement ne concerne que les organisations qui partagent réellement ces informations avec un autre tenant Microsoft 365. Le partage interne, le partage en environnement hybride et le partage avec une organisation Exchange entièrement *on-prem* ne sont pas touchés.

---

##### Les configurations concernées
Trois objets Exchange Online sont remplacés :
- <u>Organization Relationship</u> : Partage de la disponibilité et des MailTips
- <u>Availability Address Space</u> : Partage de la disponibilité, uniquement lorsque *AccessMethod* vaut *OrgWideFBToken*
- <u>Sharing Policy</u> : Partage de calendriers

Le Cross-Tenant Access Policy est un paramètre entrant. Chaque organisation contrôle ce que les utilisateurs externes peuvent consulter chez elle, ce qui implique que les deux tenants doivent créer des politiques complémentaires pour un partage bidirectionnel. L'identification se fait par *Tenant ID* et non plus par nom de domaine, tous les domaines du tenant partenaire étant couverts automatiquement.

---

##### Vérifier si vous êtes concerné
Trois commandes suffisent à faire l'inventaire depuis *Exchange Online PowerShell* :
```powershell
Get-OrganizationRelationship | Format-List Name, DomainNames, Enabled, FreeBusyAccessEnabled, FreeBusyAccessLevel, FreeBusyAccessScope, MailTipsAccessEnabled, MailTipsAccessLevel, MailTipsAccessScope

Get-AvailabilityAddressSpace | Format-List ForestName, AccessMethod

Get-SharingPolicy | Format-List Name, Domains, Enabled, Default
```

Vous êtes concerné si une relation d'organisation ressort avec *Enabled* à *True* et *FreeBusyAccessEnabled* ou *MailTipsAccessEnabled* à *True*, si un *Availability Address Space* utilise *OrgWideFBToken*, ou si une *Sharing Policy* active porte un niveau *CalendarSharingFreeBusySimple*, *CalendarSharingFreeBusyDetail* ou *CalendarSharingFreeBusyReviewer* vers un domaine hébergé dans Microsoft 365.

---

##### Ce qui remplace quoi
La migration passe par le module *Microsoft Graph PowerShell SDK Beta* et par l'activation du niveau de confiance *Microsoft 365 Collaboration* dans le Cross-Tenant Access Policy Entra. Chaque ancienne configuration a son équivalent :

| Ancienne configuration                 | Nouvelle capacité                             |
|----------------------------------------|-----------------------------------------------|
| FreeBusyAccessLevel *AvailabilityOnly* | crossTenantCalendarAvailabilityBasic          |
| FreeBusyAccessLevel *LimitedDetails*   | crossTenantCalendarAvailabilityLimitedDetails |
| MailTipsAccessLevel *Limited*          | crossTenantMailTipsLimited                    |
| MailTipsAccessLevel *All*              | crossTenantMailTipsAll                        |
| CalendarSharingFreeBusySimple          | crossTenantCalendarSharingFreeBusySimple      |
| CalendarSharingFreeBusyDetail          | crossTenantCalendarSharingFreeBusyDetail      |
| CalendarSharingFreeBusyReviewer        | crossTenantCalendarSharingFreeBusyReviewer    |

Les anciennes configurations ont priorité sur les nouvelles politiques. Il faut donc les désactiver avant de valider le fonctionnement, en coordination avec l'administrateur du tenant partenaire, puis les supprimer une fois les tests concluants.

---

##### Le calendrier à respecter
Le déploiement de la fonctionnalité s'étale selon l'environnement :
- <u>Worldwide</u> : Déploiement démarré en Août 2026, fin attendue le 1er Septembre 2026.
- <u>GCC</u> : Démarrage à la mi-Août, fin à la mi-Septembre 2026.
- <u>GCC High et DoD</u> : Démarrage début Septembre, fin fin Septembre 2026.

À partir du 1er Octobre 2026, la désactivation d'EWS atteint progressivement les tenants et le partage qui en dépend cesse de fonctionner. Les utilisateurs du tenant partenaire ne voient plus la disponibilité, les MailTips ni les calendriers partagés, et réciproquement.

<Notice type="note">Si la migration ne peut pas être terminée à temps, positionner *EWSEnabled* à *True* maintient l'ancien mécanisme jusqu'au 1er Avril 2027, date d'arrêt définitif d'EWS. Les deux organisations doivent le faire pour conserver un partage bidirectionnel. Aucune inscription dans *EWSAllowedAppIDs* n'est nécessaire, ce chemin ne reposant pas sur *OAuth*.</Notice>

---

##### Conclusion
La bascule est mécanique mais elle demande une coordination avec chaque tenant partenaire, ce qui prend du temps quand les relations sont nombreuses. L'inventaire en trois commandes se fait en quelques minutes et permet de savoir immédiatement si le sujet vous concerne. Pour les organisations concernées, la fenêtre confortable se referme le 1er Octobre 2026, la soupape *EWSEnabled* ne faisant que reporter l'échéance au 1er Avril 2027.

---

##### Sources
[Microsoft - Techcommunity](https://techcommunity.microsoft.com/blog/exchange/cross-tenant-freebusy-mailtips-and-calendar-sharing-are-moving-to-cross-tenant-a/4545169)

[Microsoft Learn - Migrer vers Microsoft 365 Cross-Tenant Access Policy](https://learn.microsoft.com/fr-ca/exchange/sharing/migrate-to-m365-xtap)

[Microsoft Learn - Dépréciation d'EWS dans Exchange Online](https://learn.microsoft.com/fr-ca/exchange/clients-and-mobile-in-exchange-online/deprecation-of-ews-exchange-online)

---


Avez-vous apprécié cet article ? Vous avez des questions, commentaires ou suggestions, n'hésitez pas à m'envoyer un message depuis le formulaire de contact.

N'oubliez pas de nous suivre et de partager cet article.