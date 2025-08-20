---
title: "Update to version 7.3.0 of the Teams PowerShell module"
meta_title: ""
description: ""
date: 2025-08-12T10:00:00-05:00
image: "/images/blog/teams/teams_update_module_powershell_7_3_0_thumbnail.png"
categories: ["Teams"]
author: "Maxime Hiez"
tags: ["Module", "Update", "PowerShell"]
draft: false
---
---

##### Introduction
Microsoft recently released the new version 7.3.0 of the PowerShell module for Microsoft Teams.

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
Version 7.3.0 contains the following updates :

- Adds *Notify* parameter to *[Set|Remove]-CsPhoneNumberAssignment* cmdlets.
- Releases *[New|Set|Remove|Get|Grant]-CsTeamsPersonalAttendantPolicy* cmdlets.
- Adds *OCDIRedirect* parameter to *[Set|Remove]-CsTeamsUpdateManagementPolicy* cmdlets.
- Adds *AppName* output attribute to *Get-M365TeamsApp* and *Get-AllM365TeamsApps* cmdlets.
- Contains a new implementation of *[Get|Set]-CsTeamsAcsFederationConfiguration*. Functionality remains the same as previous implementation.
- Adds *HideBannerForAllowedAcsUsers* and *LabelForAllowedAcsUsers* parameters to *Set-CsTeamsAcsFederationConfiguration* cmdlet.
- [BREAKING CHANGE] Removes *Get-CsOnlinePowerShellEndpoint* and *Set-CsInternalOnlinePowerShellEndpoint* cmdlets.
- Adds *MainlineAttendantFlow* and *MainlineAttendantTarget* parameters to *New-CsAutoAttendantMenuOption* cmdlet.
- Adds *EnableMainlineAttendant* parameter to *[New|Set]-CsAutoAttendant* cmdlets.
- Releases *New-CsMainlineAttendantAppointmentBookingFlow*, *New-CsMainlineAttendantQuestionAnswerFlow* and *Get-CsMainlineAttendantFlow* cmdlets.
- Releases *[Get|Set]-CsPersonalAttendantSettings* cmdlets.
- Fixes the error with *Set-CsTeamsSettingsCustomApp* cmdlet.
- Adds *UseMicrosoftECDN* and *RecordingForTownhall* parameters to *[New|Set]-CsTeamsEventsPolicy* cmdlets.
- Adds *ExplicitRecordingConsent* parameter to *[New|Set]-CsTeamsCallingPolicy* cmdlets.
- Adds *EduGenerativeAIEnhancements* and *AutoShareFilesInExternalChats* parameters to *[New|Set]-CsTeamsMessagingPolicy* cmdlets.

---

##### Conclusion
Go update your Teams module for PowerShell to benefit from the latest updates and possible configurations.

---

##### Sources
[Microsoft Learn - Release notes](https://learn.microsoft.com/en-us/MicrosoftTeams/teams-powershell-release-notes)

[PowerShell Gallery](https://www.powershellgallery.com/packages/MicrosoftTeams/7.3.0)

---


Did you enjoy this post ? If you have any questions, comments or suggestions, please feel free to send me a message from the contact form.

Don't forget to follow us and share this post.