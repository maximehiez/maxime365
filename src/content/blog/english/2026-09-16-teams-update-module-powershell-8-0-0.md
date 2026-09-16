---
title: "PowerShell Teams module updated to version 8.0.0"
meta_title: ""
description: ""
date: 2026-09-16T10:00:00-05:00
image: "/images/blog/teams/teams_update_module_powershell_8_0_0_thumbnail.png"
categories: ["Teams"]
author: "Maxime Hiez"
tags: ["Module", "Update", "PowerShell"]
draft: false
---
---

##### Introduction
Microsoft recently released the new version 8.0.0 of the PowerShell module for Microsoft Teams.

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
Version 8.0.0 includes the following updates :

- [BREAKING CHANGE] Makes the *RecordingEnabled*, *TranscriptionEnabled*, and *AgentViewPermission* parameters mandatory on *New-CsAutoRecordingTemplate* cmdlet.
- Adds *AppointmentBookingPlatform* and *BookingLink* parameters to *[New|Set]-CsMainlineAttendantAppointmentBookingFlow* cmdlets.
- Releases *[Get|New|Set|Remove]-CsMainlineAttendantSpamDetectionTemplate* cmdlets.
- Adds *TimeoutThreshold*, *TimeoutDisconnectPromptType*, *TimeoutDisconnectPromptCustomText*, *AiDisclaimerType*, and *AiDisclaimerCustomText* parameters to *New-CsAutoAttendantCallFlow* cmdlet.
- Adds *LocationId*, *AcquiredCapability*, *NetworkSiteId*, *ReverseNumberLookup*, and *Tag* parameters to *New-CsOnlineDirectRoutingTelephoneNumberUploadOrder* cmdlet.
- Adds *TeamsPersonalAttendantPolicy* to the output for *Get-CsOnlineUser* cmdlet.
- Adds *AutoRecordingAnnouncementAudioFileName* property to *Get-CsAutoRecordingTemplate* cmdlet.
- Updates *[New|Set]-CsAutoAttendant* cmdlets to allow auto-recording templates with audio file announcements.
- Adds *BusyOnBusyOption* parameter to *Set-CsUserCallingSettings* cmdlet with *PlayBusySignal*, *RedirectAsUnansweredCall*, and *RingUser* values.
- Adds the *BusyOnBusyOption* output attribute to *Get-CsUserCallingSettings* cmdlet.
- Adds *UrgencyDetectionEnabled*, *CategoryDetectionEnabled*, *CallToActionDetectionEnabled*, and *VoiceToTextSummaryEnabled* parameters to *[Get|Set]-CsOnlineVoicemailUserSettings* cmdlets. These parameters allow administrators to manage AI triage features for personal voicemail on a per-user basis.
- Adds *EnableExternalRecordingDetection*, *AllowIntelligentRecap*, and *IntelligentRecapDocxFileExpirationDays* parameters to *[New|Set]-CsTeamsMeetingPolicy* cmdlets.
- Adds *DefaultChannelTypeOnCreation* parameter to *[New|Set]-CsTeamsChannelsPolicy* cmdlets.
- Adds *MaximumConcurrentCalls* parameter to *[Get|Set]-CsUserCallingSettings* cmdlets.
- Adds *SpamDetectionTemplateId* parameter to *New-CsAutoAttendant* cmdlet.

---

##### Conclusion
Go update your Teams module for PowerShell to benefit from the latest updates and possible configurations.

---

##### Sources
[Microsoft Learn - Release notes](https://learn.microsoft.com/en-us/MicrosoftTeams/teams-powershell-release-notes)

[PowerShell Gallery](https://www.powershellgallery.com/packages/MicrosoftTeams/8.0.0)

---


Did you enjoy this post ? If you have any questions, comments or suggestions, please feel free to send me a message from the contact form.

Don't forget to follow us and share this post.