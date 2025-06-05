---
title: "Update to version 7.0.0 of the Teams PowerShell module"
meta_title: ""
description: ""
date: 2025-04-20T10:00:00-05:00
image: "/images/blog/teams/teams_update_module_powershell_7_0_0_thumbnail.png"
categories: ["Teams"]
author: "Maxime Hiez"
tags: ["Module", "Update", "PowerShell"]
draft: false
---
---

##### Introduction
Microsoft recently released the new version 7.0.0 of the PowerShell module for Microsoft Teams.

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
Version 7.0.0 contains the following updates :

- Adds *ShiftsTeamId* and *ShiftsSchedulingGroupId* parameters to *[New|Set]-CsCallQueue* cmdlets.
- [BREAKING CHANGE] Deprecates *CustomizeFederation* parameter from *[Get|Set]-CsTenantFederationConfiguration* cmdlets.
- Adds *TownhallEventAttendeeAccess* parameter to [New|Set]-CsTeamsEventsPolicy cmdlets.
- Adds *AllowsUsersForMeetingDetails* and *RealTimeText* parameters to *[New|Set]-CsTeamsMeetingPolicy* cmdlets.
- Adds *RealTimeText* parameter to *[New|Set]-CsTeamsCallingPolicy* cmdlets.
- Adds *UsersCanDeleteBotMessages*, *ContentBasedPhishingCheck* and *ReportIncorrectSecurityDetections* parameters to *[New|Set]-CsTeamsMessagingConfiguration* cmdlets.
- Adds *SpeakerAttributionForBYOD* parameter to *[New|Set]-CsTeamsAIPolicy* cmdlets.
- [BREAKING CHANGE] Removes *OptionFlags* output attribute from the *Get-CsOnlineUser* cmdlet.
- Releases *[New|Set|Remove|Get]-CsComplianceRecordingForCallQueueTemplate* cmdlets.
- Adds Compliance Recording related parameters (*ComplianceRecordingForCallQueueTemplateId*, *TextAnnouncementForCR*, *CustomAudioFileAnnouncementForCR*, *TextAnnouncementForCRFailure*, *CustomAudioFileAnnouncementForCRFailure*) to *[New|Set]-CsCallQueue* cmdlets and corresponding output attributes to *Get-CsCallQueue*.

---

##### Conclusion
Go and update your PowerShell for Teams module to benefit from the latest updates and possible configurations.

---

##### Sources
[Microsoft Learn - Release notes](https://learn.microsoft.com/en-us/MicrosoftTeams/teams-powershell-release-notes)

[PowerShell Gallery](https://www.powershellgallery.com/packages/MicrosoftTeams/7.0.0)

---


Did you enjoy this post ? If you have any questions, comments or suggestions, please feel free to send me a message from the contact form.

Don't forget to follow us and share this post.