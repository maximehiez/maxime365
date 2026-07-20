---
title: "PowerShell Teams module updated to version 7.9.0"
meta_title: ""
description: ""
date: 2026-07-20T10:00:00-05:00
image: "/images/blog/teams/teams_update_module_powershell_7_9_0_thumbnail.png"
categories: ["Teams"]
author: "Maxime Hiez"
tags: ["Module", "Update", "PowerShell"]
draft: false
---
---

##### Introduction
Microsoft recently released the new version 7.9.0 of the PowerShell module for Microsoft Teams.

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
Version 7.9.0 includes the following updates :

- Updates *Connect-MicrosoftTeams* cmdlet to use *Web Account Manager* (*WAM*) for authentication to enhance security.
- Adds *DisableWAM* switch parameter to *Connect-MicrosoftTeams* cmdlet to disable WAM-based authentication. This parameter is temporary and will be deprecated in a future release.
- Releases *[Get|New|Set|Remove]-CsSharedVoicemailTriageSettingsTemplate* cmdlets.
- Adds *SharedVoicemailTriageSettingsTemplateId* parameter to *[New|Set]-CsAutoAttendant* cmdlets.
- Adds *SharedVoicemailTriageSettingsTemplateId* parameter to *[New|Set]-CsCallQueue* cmdlets.
- Adds *Channel* parameter to *Get-CsAiAgents* cmdlet.
- Updates *[Get|Set|Remove]-CsPhoneNumberAssignment* cmdlets to use *-TelephoneNumber* and *-NumberType* as primary parameter names, with *-PhoneNumber* and *-PhoneNumberType* retained as aliases for backward compatibility.
- Adds *AllowCreateChannel*, *AllowCreateClassicChannel*, *AllowCreatePrivateChannel*, *AllowCreateSharedChannel*, *CreateSharedChannelsByDefault*, *AllowUsersFromOutsideTeam*, *AllowGuestsFromOutsideTeam*, *AllowUsersFromOutsideTeamInPrivateChannel*, *AllowGuestsFromOutsideTeamInPrivateChannel*, *AllowSharingWithTeamInOrg*, and *AllowSharingPrivateChannelWithTeamInOrg* parameters to *[New|Set]-CsTeamsChannelsPolicy* cmdlets.
- Adds *SyntheticMediaDetection*, *SyntheticMediaDetectionAppId*, *ConditionalAccessAttendeeVerification*, *EnablePreMeetingConsent*, and *PreMeetingConsentContentIdentifier* parameters to *[New|Set]-CsTeamsMeetingPolicy* cmdlets.
- Adds *PublishedEntraAuthenticationContexts*, *EnableAttributedTranscripts*, and *EnableGraphTranscriptAccess* parameters to *Set-CsTeamsMeetingConfiguration* cmdlet.
- Adds *AllowMeetingKnowledgeGeneration* and *VoicePhishingDetection* parameters to *[New|Set]-CsTeamsCallingPolicy* cmdlets.
- Adds *AllowEngagementReport* and *InfoShownInReportMode* parameters to *[New|Set]-CsTeamsEventsPolicy* cmdlets.
- Adds *EnableVoicemailTriage* parameter to *[New|Set]-CsOnlineVoicemailPolicy* cmdlets.
- [BREAKING CHANGE] Removes Teams Shifts connection cmdlets : *[Get|New|Set|Remove|Update]-CsTeamsShiftsConnection*, *[Get|New|Set|Remove|Update]-CsTeamsShiftsConnectionInstance*, *[Get|Remove]-CsTeamsShiftsConnectionTeamMap*, *New-CsTeamsShiftsConnectionBatchTeamMap*, *Get-CsTeamsShiftsConnectionConnector*, *Get-CsTeamsShiftsConnectionOperation*, *Get-CsTeamsShiftsConnectionSyncResult*, *[Get|Disable]-CsTeamsShiftsConnectionErrorReport*, *Get-CsTeamsShiftsConnectionWfmTeam*, *Get-CsTeamsShiftsConnectionWfmUser*, and *Test-CsTeamsShiftsConnectionValidate*. These cmdlets are no longer supported.

---

##### Conclusion
Go update your Teams module for PowerShell to benefit from the latest updates and possible configurations.

---

##### Sources
[Microsoft Learn - Release notes](https://learn.microsoft.com/en-us/MicrosoftTeams/teams-powershell-release-notes)

[PowerShell Gallery](https://www.powershellgallery.com/packages/MicrosoftTeams/7.9.0)

---


Did you enjoy this post ? If you have any questions, comments or suggestions, please feel free to send me a message from the contact form.

Don't forget to follow us and share this post.
