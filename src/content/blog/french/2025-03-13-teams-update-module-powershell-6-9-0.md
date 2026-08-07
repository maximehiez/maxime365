---
title: "Mise à jour en version 6.9.0 du module PowerShell Teams"
meta_title: ""
description: ""
date: 2025-03-13T10:00:00-05:00
image: "/images/blog/teams/teams_update_module_powershell_6_9_0_thumbnail.png"
categories: ["Teams"]
author: "Maxime Hiez"
tags: ["Module", "Mise à jour", "PowerShell"]
draft: false
---
---

##### Introduction
Microsoft a récemment publié la nouvelle version 6.9.0 du module PowerShell pour Microsoft Teams.

---

##### Installation
Vous pouvez vérifier la version du module installé via la commande PowerShell suivante :
```powershell
Get-InstalledModule -Name "MicrosoftTeams"
```

Vous pouvez installer le module MicrosoftTeams via la commande PowerShell suivante :
```powershell
Install-Module -Name MicrosoftTeams
```

Vous pouvez mettre à jour le module MicrosoftTeams via la commande PowerShell suivante :
```powershell
Update-Module MicrosoftTeams
```

---

##### Quoi de neuf ?
La version 6.9.0 contient les mises à jour suivantes :

- Ajout du paramètre *FileContent* à l’applet de commande *New-CsOnlineDirectRoutingTelephoneNumberUploadOrder*.
- Ajout du paramètre *FileContent* à l’applet de commande *New-CsOnlineTelephoneNumberReleaseOrder*.
- Ajout de l’attribut de sortie *EnqueueReason* à l’applet de commande *Get-CsMeetingMigrationStatus*.
- Correction du type de données pour le paramètre *AllowedTrialTenantDomains* dans l’applet de commande *Set-CsTenantFederationConfiguration*.
- Correction des problèmes liés au paramètre *ForceAccept* dans l’applet de commande *Set-CsOnlineEnhancedEmergencyServiceDisclaimer*.
- Ajout de l'attribut de sortie *TelephoneNumbers* à l'applet de commande *Get-CsOnlineUser*. Cette option n'est actuellement prise en charge que dans les environnements commerciaux.
- Ajout d'un paramètre d'extension à l’applet de commande *Get-AllM365TeamsApp*.
- Ajout du paramètre *Propriétés* à l’applet de commande *Get-CsOnlineUser*.

---

##### Conclusion
Allez faire la mise à jour de votre module PowerShell pour Teams pour pouvoir bénéficier des dernières mises à jour et configurations possibles.

---

##### Sources
[Microsoft Learn - Notes de publication](https://learn.microsoft.com/fr-ca/MicrosoftTeams/teams-powershell-release-notes)

[PowerShell Gallery](https://www.powershellgallery.com/packages/MicrosoftTeams/6.9.0)

---


Avez-vous apprécié cet article ? Vous avez des questions, commentaires ou suggestions, n’hésitez pas à m'envoyer un message depuis le formulaire de contact.

N'oubliez pas de nous suivre et de partager cet article.