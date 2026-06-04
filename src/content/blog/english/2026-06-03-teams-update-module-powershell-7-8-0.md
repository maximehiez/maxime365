---
title: "PowerShell Teams module updated to version 7.8.0"
meta_title: ""
description: ""
date: 2026-06-03T10:00:00-05:00
image: "/images/blog/teams/teams_update_module_powershell_7_8_0_thumbnail.png"
categories: ["Teams"]
author: "Maxime Hiez"
tags: ["Module", "Update", "PowerShell"]
draft: false
---
---

##### Introduction
Microsoft recently released the new version 7.8.0 of the PowerShell module for Microsoft Teams.

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
Version 7.8.0 includes the following updates :

- Fixes *Get-TenantPrivateChannelMigrationStatus* cmdlet in GCC, GCC High & DoD environments.
- Releases *New-CsPhoneNumberBulkUpdateDrNumberAcquiredCapabilitiesOrder*, *New-CsPhoneNumberBulkUpdateLocationIdOrder*, *New-CsPhoneNumberBulkUpdateNetworkSiteIdOrder*, and *New-CsPhoneNumberBulkUpdateReverseNumberLookupOrder* cmdlets.
- [BREAKING CHANGE] Renames *EnableExternalAccessRestrictionsForChatPartipants* and *EnableMutualFederationForChatPartipants* parameters in *Set-CsTenantFederationSettings* cmdlet to *EnableExternalAccessRestrictionsForChatParticipants* and *EnableMutualFederationForChatParticipants* respectively.
- Adds *PreventComplianceRecording* and *DisableAudioAnnouncementsForResourceAccounts* parameters to *[New|Set]-CsTeamsMeetingPolicy* cmdlets.
- Adds *PreventComplianceRecording* parameter to *[New|Set]-CsTeamsCallingPolicy* cmdlets.
- Adds *Communities* parameter to *Set-CsTeamsMessagingConfiguration* cmdlet.
- Adds *ReportMeeting* parameter to *Set-CsTeamsMeetingConfiguration* cmdlet.

---

##### Conclusion
Go update your Teams module for PowerShell to benefit from the latest updates and possible configurations.

---

##### Sources
[Microsoft Learn - Release notes](https://learn.microsoft.com/en-us/MicrosoftTeams/teams-powershell-release-notes)

[PowerShell Gallery](https://www.powershellgallery.com/packages/MicrosoftTeams/7.8.0)

---


Did you enjoy this post ? If you have any questions, comments or suggestions, please feel free to send me a message from the contact form.

Don't forget to follow us and share this post.