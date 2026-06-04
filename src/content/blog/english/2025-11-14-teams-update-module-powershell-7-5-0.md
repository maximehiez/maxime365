---
title: "PowerShell Teams module updated to version 7.5.0"
meta_title: ""
description: ""
date: 2025-11-14T10:00:00-05:00
image: "/images/blog/teams/teams_update_module_powershell_7_5_0_thumbnail.png"
categories: ["Teams"]
author: "Maxime Hiez"
tags: ["Module", "Update", "PowerShell"]
draft: false
---
---

##### Introduction
Microsoft recently released the new version 7.5.0 of the PowerShell module for Microsoft Teams.

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
Version 7.5.0 includes the following updates :

- Adds *PickUpHeldCalls* and *JoinActiveCalls* parameters to the *[New|Set]-CsUserCallingDelegate* cmdlets and corresponding output attributes to the *Get-CsUserCallingSettings* cmdlet.
- Adds *AssignmentBlockedState* and *AssignmentBlockedUntil* output attributes to *[Get]-CsPhoneNumberAssignment* cmdlet.
- Releases *[Set|Remove]-CsPhoneNumberAssignmentBlock* cmdlets.
- Adds *DynamicCallerIdMode* parameter to *[Get|Set]-CsOnlineDialInConferencingTenantSettings* cmdlets.
- Adds *BackroomChat* parameter to *[New|Set]-CsTeamsMeetingPolicy* and *[New|Set]-CsTeamsEventsPolicy* cmdlets.
- Adds *UseUnifiedDomain* parameter to *Set-CsTeamsClientConfiguration* cmdlet.
- [BREAKING CHANGE] Replaces *MaxResolutionForTownhall* parameter with *TownhallMaxResolution* in *[Get|Set|New|Remove]-CsTeamsEventsPolicy* cmdlets.
- Adds *ExternalPresenterJoinVerification* parameter to *[Set|New]-CsTeamsEventsPolicy* cmdlets.
- Adds *PasiveVoiceEnrollment* parameter to *[New|Set]-CsTeamsAIPolicy* cmdlets.
- Adds *SetRecordingAndTranscriptOwnership* parameter to *[New|Set]-CsTeamsMeetingPolicy* cmdlets.
- Adds *EnableRecordingAndTranscriptionCustomMessage* & *RecordingAndTranscriptionCustomMessageIdentifier* parameters to *[New|Set]-CsTeamsMeetingPolicy* & *[New|Set]-CsTeamsCallingPolicy* cmdlets.
- Releases *Get-CsTeamsRecordingAndTranscriptionCustomMessagesConfiguration* cmdlet.
- Releases *[Get|Set|New|Remove]-CsTeamsRecordingAndTranscriptionCustomMessage* cmdlets.
- Adds *Voicemail* as a supported value for the *Type* parameter in *[New|Set]-CsAutoAttendantCallableEntity* cmdlets.

---

##### Conclusion
Go update your Teams module for PowerShell to benefit from the latest updates and possible configurations.

---

##### Sources
[Microsoft Learn - Release notes](https://learn.microsoft.com/en-us/MicrosoftTeams/teams-powershell-release-notes)

[PowerShell Gallery](https://www.powershellgallery.com/packages/MicrosoftTeams/7.5.0)

---


Did you enjoy this post ? If you have any questions, comments or suggestions, please feel free to send me a message from the contact form.

Don't forget to follow us and share this post.