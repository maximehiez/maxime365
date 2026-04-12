---
title: "PowerShell Teams module updated to version 7.7.0"
meta_title: ""
description: ""
date: 2026-04-10T10:00:00-05:00
image: "/images/blog/teams/teams_update_module_powershell_7_7_0_thumbnail.png"
categories: ["Teams"]
author: "Maxime Hiez"
tags: ["Module", "Update", "PowerShell"]
draft: false
---
---

##### Introduction
Microsoft recently released the new version 7.7.0 of the PowerShell module for Microsoft Teams.

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
Version 7.7.0 contains the following updates :

- Fixes *IPAddressVersion* parameter in *[Set|New]-CsOnlinePstnGateway* cmdlets.
- Releases *[Set|Remove]-CsPhoneNumberSmsActivation* cmdlets.
- Adds the *SmsActivationState* output attribute to the *Get-CsPhoneNumberAssignment* cmdlet.
- Adds support for application-based authentication in the *Set-CsTeamsSettingsCustomApp* cmdlet.
- Updates the *Get-Team* cmdlet to improve performance and reliability.
- [BREAKING CHANGE] Renames *ConfigurationId* parameter in *Get-CsMainlineAttendantFlow* cmdlet to *RelatedConfigurationId*.
- Releases *Get-CsMainlineAttendantTenantInformation*, *Get-CsMainlineAttendantSupportedLanguages*, and *Get-CsMainlineAttendantSupportedVoices* cmdlets.
- Adds *AgentId*, *AgentIds*, *ContinuationToken*, *DisplayNameContains*, *DisplayNamePrefix*, *MaxResult*, and *ShowCount* parameters to the *Get-CsAiAgents* cmdlet.
- Adds support for URL-based descriptions in *[New|Set]-CsMainlineAttendantQuestionAnswerFlow* cmdlets.
- [BREAKING CHANGE] Renames *DomainBlockingForMDOAdminsInTeams* parameter in *Set-CsTenantFederationConfiguration* cmdlet to *SecurityTeamAllowBlockListDelegation*.
- Releases *[Get|New|Set|Remove]-CsAgent* cmdlets for managing AI agent for resource account integration.
- Adds *IncomingRedirectedCalls* parameter to *New-CsSharedCallQueueHistoryTemplate* cmdlet.
- Releases *[Get|New|Set|Remove]-CsSharedCallHistoryTemplate* cmdlets. These cmdlets will replace *[Get|New|Set|Remove]-CsSharedCallQueueHistoryTemplate* cmdlets in future.
- Adds *SharedVoicemailHistoryTemplateId* parameter to *New-CsAutoAttendantCallableEntity*.
- The complete release notes can be found in the below link : https://docs.microsoft.com/MicrosoftTeams/teams-powershell-release-notes

---

##### Conclusion
Go update your Teams module for PowerShell to benefit from the latest updates and possible configurations.

---

##### Sources
[Microsoft Learn - Release notes](https://learn.microsoft.com/en-us/MicrosoftTeams/teams-powershell-release-notes)

[PowerShell Gallery](https://www.powershellgallery.com/packages/MicrosoftTeams/7.7.0)

---


Did you enjoy this post ? If you have any questions, comments or suggestions, please feel free to send me a message from the contact form.

Don't forget to follow us and share this post.