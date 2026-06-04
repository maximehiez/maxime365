---
title: "PowerShell Teams module updated to version 7.4.0"
meta_title: ""
description: ""
date: 2025-10-13T10:00:00-05:00
image: "/images/blog/teams/teams_update_module_powershell_7_4_0_thumbnail.png"
categories: ["Teams"]
author: "Maxime Hiez"
tags: ["Module", "Update", "PowerShell"]
draft: false
---
---

##### Introduction
Microsoft recently released the new version 7.4.0 of the PowerShell module for Microsoft Teams.

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
Version 7.4.0 includes the following updates :

- Releases *Get-TeamsArtifacts* cmdlet.
- Adds *MainlineAttendantAgentVoiceId* parameter to *New-CsAutoAttendant* cmdlet.
- Releases *[New|Set|Remove|Get]-CsTagsTemplate* cmdlets.
- Releases *New-CsTag* cmdlet.
- [BREAKING CHANGE] Renames *BotId* and *PairedApplication* parameters in *[New|Set|Get]-CsComplianceRecordingForCallQueueTemplate* cmdlets to *BotApplicationInstanceObjectId* and *PairedApplicationInstanceObjectId* respectively.
- Releases *Get-TeamsRemoteLogCollectionConfiguration* and *[Get|Set|New|Remove]-TeamsRemoteLogCollectionDevice* cmdlets.

---

##### Conclusion
Go update your Teams module for PowerShell to benefit from the latest updates and possible configurations.

---

##### Sources
[Microsoft Learn - Release notes](https://learn.microsoft.com/en-us/MicrosoftTeams/teams-powershell-release-notes)

[PowerShell Gallery](https://www.powershellgallery.com/packages/MicrosoftTeams/7.4.0)

---


Did you enjoy this post ? If you have any questions, comments or suggestions, please feel free to send me a message from the contact form.

Don't forget to follow us and share this post.