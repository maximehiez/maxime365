---
title: "Comment configurer le partage de calendriers dans Exchange"
meta_title: ""
description: ""
date: 2025-12-08T10:00:00-05:00
image: "/images/blog/exchange/tuto/exchange_how_to_setup_calendar_sharing_between_tenants_thumbnail.png"
categories: ["Exchange", "Tutoriel"]
author: "Maxime Hiez"
tags: ["Calendrier", "Partage", "PowerShell"]
draft: false
---
---

##### Introduction
Dans un contexte où les organisations collaborent de plus en plus étroitement, il n’est pas rare que les utilisateurs d'une organisation aient besoin de planifier efficacement des réunions en ayant accès à la disponibilité des agendas des ressources (utilisateurs et / ou salles de réunions) d'une autre organisation. La fonctionnalité de partage de disponibilité inter-tenant (*cross-tenant calendar sharing*) d’*Exchange Online* répond précisément à ce besoin. Avec cette approche, les entreprises peuvent améliorer la coordination des réunions sans exposer les données sensibles des utilisateurs.

---

##### Prérequis
**<u>Rôle d’administrateur</u>**
- Un compte avec le rôle *Administrateur Global* ou *Administrateur Exchange* pour accéder au Exchange Admin Center.

---

##### Étape 1 : Se connecter au Exchange Admin Center
Connectez-vous au Exchange Admin Center en ouvrant votre navigateur web sur https://admin.exchange.microsoft.com.

---

##### Étape 2 : Activer la relation d'organisation sur le tenant A
Dans le menu de gauche, cliquez sur *<u>Organization</u>*, puis sur *<u>Sharing</u>*.

Cliquez sur *<u>Add organization relationship</u>*, et entrez le nom de la règle et le domaine avec lequel vous souhaitez activer le partage.

![image](/images/blog/exchange/tuto/exchange_how_to_setup_calendar_sharing_between_tenants_001.png)

Choisissez les options de partage. Nous avons ici la configuration par défaut.

![image](/images/blog/exchange/tuto/exchange_how_to_setup_calendar_sharing_between_tenants_002.png)

Vous pouvez aussi créer la relation d'organisation via les commandes PowerShell suivantes :
```powershell
Connect-ExchangeOnline

New-OrganizationRelationship -Name "RelationshipWithMaxime" -DomainNames "hiez.ca" -FreeBusyAccessEnabled $true -FreeBusyAccessLevel AvailabilityOnly -TargetApplicationUri outlook.com -TargetAutodiscoverEpr https://autodiscover-s.outlook.com/autodiscover/autodiscover.svc/WSSecurity 
```

---

##### Étape 3 : Activer la relation d'organisation sur le tenant B
Il faut faire la même configuration dans le deuxième tenant, en ciblant bien sûr l'autre domaine via l'interface web ou la commande PowerShell suivante :
```powershell
New-OrganizationRelationship -Name "RelationshipWithOtherDomain" -DomainNames "otherdomain.ca" -FreeBusyAccessEnabled $true -FreeBusyAccessLevel AvailabilityOnly -TargetApplicationUri outlook.com -TargetAutodiscoverEpr https://autodiscover-s.outlook.com/autodiscover/autodiscover.svc/WSSecurity 
```

---

##### Étape 4 : Valider la relation d'organisation
La commande PowerShell suivante permet de valider que la relation d'organisation configurée correspond bien aux besoins.
```powershell
Get-OrganizationRelationship | Fl
```

![image](/images/blog/exchange/tuto/exchange_how_to_setup_calendar_sharing_between_tenants_003.png)

---

##### Étape 5 : Tester le *Free / Busy* dans Outlook
Après quelques minutes, les utilisateurs peuvent créer une nouvelle rencontre dans leur calendrier Outlook et ajouter des participants de l'autre organisation pour consulter leurs disponibilités.

Dans mon exemple, j'ai créé une réunion Teams depuis le calendrier de l'utilisateur *User@otherdomain.ca* et j'ai ajouté 2 utilisateurs externes. On peut voir que la disponibilité de *User.3@hiez.ca* est visible, mais pas celle de *User@domain.com*, domaine pour lequel je n'ai pas créé de relation d'organisation.

![image](/images/blog/exchange/tuto/exchange_how_to_setup_calendar_sharing_between_tenants_004.png)

---

##### Et si j'ai une configuration Exchange hybride ?
Si vous tentez de configurer une relation d'organisation entre un tenant Microsoft 365 et une autre organisation avec une configuration hybride (Exchange Online + serveur Exchange local), vous devez impérativement ajouter l'adresse de domaine *mail.onmicrosoft.com* du serveur Exchange local à la relation d'organisation du tenant non hybride. Sans ça, les utilisateurs ne pourront pas consulter les informations de disponibilité des agendas.

---

##### Conclusion
La mise en place du partage de la disponibilité des calendriers est une belle option pour les organisations ayant des besoins de collaboration simples avec d'autres environnements Microsoft 365. Cette fonctionnalité permet de simplifier la planification des réunions et d’améliorer la collaboration entre utilisateurs. Mais cette approche n’est qu’un premier pas vers une intégration plus poussée. 
Lorsque deux organisations ont des besoins plus complexes (*B2B Collaboration*), le concept du *Multi-Tenant Organization* (*MTO*) permet d’aller bien au-delà du simple partage de disponibilité : accès aux ressources entre les locataires, expérience unifiée , ... On verra cette option dans un prochain article.<br/><br/>
Vous savez maintenant comment configurer le partage des calendriers dans Exchange Online.

---

##### Sources
[Microsoft Learn - New-OrganizationRelationship](https://learn.microsoft.com/fr-ca/powershell/module/exchangepowershell/new-organizationrelationship?view=exchange-ps)

---


Avez-vous apprécié cet article ? Vous avez des questions, commentaires ou suggestions, n’hésitez pas à m'envoyer un message depuis le formulaire de contact.

N'oubliez pas de nous suivre et de partager cet article.