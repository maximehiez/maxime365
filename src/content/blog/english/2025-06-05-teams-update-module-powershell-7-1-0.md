---
title: "Update to version 7.1.0 of the Teams PowerShell module"
meta_title: ""
description: ""
date: 2025-06-05T10:00:00-05:00
image: "/images/blog/teams/teams_update_module_powershell_7_1_0_thumbnail.png"
categories: ["Teams"]
author: "Maxime Hiez"
tags: ["Module", "Update", "PowerShell"]
draft: false
---
---

##### Introduction
Microsoft recently released the new version 7.1.0 of the PowerShell module for Microsoft Teams.

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
Version 7.1.0 contains the following updates :

- Adds *ThreadedChannelCreation* parameter to *[New|Set]-CsTeamsChannelsPolicy* cmdlets.
- Adds *BroadcastPremiumApps* parameter to *[New|Set]-CsTeamsEventsPolicy* cmdlets.
- Adds *ParticipantSlideControl* parameter to *[New|Set]-CsTeamsMeetingPolicy* cmdlets.
- [BREAKING CHANGE] Removes *AllowPublicUsers* parameter from *[Set]-CsTenantFederationConfiguration* cmdlet.
- [BREAKING CHANGE] Removes *EnablePublicCloudAccess* parameter from *[New|Set]-CsExternalAccessPolicy* cmdlets.
- Releases *[New|Set|Remove|Get]-CsSharedCallQueueHistoryTemplate* cmdlets.
- Adds *SharedCallQueueHistoryTemplateId* parameter to *[New|Set]-CsCallQueue* cmdlets.
- Releases *[Get|Set|Update|Remove]-CsPhoneNumberTag* cmdlets.
- [BREAKING CHANGE] Removes *DialPlan* output attribute from the *Get-CsOnlineUser* cmdlet.

---

##### Conclusion
Go and update your PowerShell for Teams module to benefit from the latest updates and possible configurations.

---

##### Sources
[Microsoft Learn - Release notes](https://learn.microsoft.com/en-us/MicrosoftTeams/teams-powershell-release-notes)

[PowerShell Gallery](https://www.powershellgallery.com/packages/MicrosoftTeams/7.1.0)

---


Did you enjoy this post ? If you have any questions, comments or suggestions, please feel free to send me a message from the contact form.

Don't forget to follow us and share this post.