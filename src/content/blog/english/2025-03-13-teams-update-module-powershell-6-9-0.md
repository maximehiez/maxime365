---
title: "Update to version 6.9.0 of the Teams PowerShell module"
meta_title: ""
description: ""
date: 2025-03-13T10:00:00-05:00
image: "/images/blog/teams/teams_update_module_powershell_6_9_0_thumbnail.png"
categories: ["Teams"]
author: "Maxime Hiez"
tags: ["Module", "Update", "PowerShell"]
draft: false
---
---

##### Introduction
Microsoft recently released the new version 6.9.0 of the PowerShell module for Microsoft Teams.

---

##### Installation
You can check the version of the installed module via the following PowerShell command :
```powershell
Get-InstalledModule -Name "MicrosoftTeams"
```

You can install the MicrosoftTeams module via the following PowerShell command :
```powershell
Install-Module -Name MicrosoftTeams
```

You can update the MicrosoftTeams module via the following PowerShell command :
```powershell
Update-Module MicrosoftTeams
```

---

##### What's new ?
Version 6.9.0 contains the following updates :

- Adds *FileContent* parameter to *New-CsOnlineDirectRoutingTelephoneNumberUploadOrder* cmdlet.
- Adds *FileContent* parameter to *New-CsOnlineTelephoneNumberReleaseOrder* cmdlet.
- Adds *EnqueueReason* output attribute to *Get-CsMeetingMigrationStatus* cmdlet.
- Fixes the *AllowedTrialTenantDomains* data type for the *Set-CsTenantFederationConfiguration* cmdlet.
- Fixes issues with the *ForceAccept* parameter in *Set-CsOnlineEnhancedEmergencyServiceDisclaimer* cmdlet.
- Adds *TelephoneNumbers* output attribute to *Get-CsOnlineUser* cmdlet. This is currently supported only in commercial environments.
- Adds expand parameter to the *Get-AllM365TeamsApp* cmdlet.
- Adds *Properties* parameter to *Get-CsOnlineUser* cmdlet.

---

##### Conclusion
Go and update your PowerShell for Teams module to benefit from the latest updates and possible configurations.

---

##### Sources
[Microsoft Learn - Release notes](https://learn.microsoft.com/en-us/MicrosoftTeams/teams-powershell-release-notes)

[PowerShell Gallery](https://www.powershellgallery.com/packages/MicrosoftTeams/6.9.0)

---


Did you enjoy this post ? If you have any questions, comments or suggestions, please leave a comment in the section below or by sending me a message from the contact form.

Don't forget to follow us and share this post.