---
title: "Update to version 14.2.0 of the Azure PowerShell module"
meta_title: ""
description: ""
date: 2025-07-09T10:00:00-05:00
image: "/images/blog/azure/azure_update_module_powershell_14_2_0_thumbnail.png"
categories: ["Azure"]
author: "Maxime Hiez"
tags: ["Module", "Update", "PowerShell"]
draft: false
---
---

##### Introduction
Microsoft recently released the new version 14.2.0 of the PowerShell module for Microsoft Azure.

---

##### Installation
You can check the version of the installed module via the following PowerShell command :
```powershell
Get-InstalledModule -Name "Az*"
```

You can install the Az module via the following PowerShell command :
```powershell
Install-Module -Name Az
```

You can update the Az module via the following PowerShell command :
```powershell
Update-Module Az -Force
```

---

##### What's new ?
Version 14.2.0 contains the following updates :

**<u>Az.Accounts</u>**
- Updated the date in the message about multi-factor authentication (MFA). For more details, see https://go.microsoft.com/fwlink/?linkid=2276971
<br/><br/>

**<u>Az.CosmosDB</u>**
- Fixed incorrect help documents for *MongoDB* cmdlets.
<br/><br/>

**<u>Az.DataFactory</u>**
- Added support for *Databricks Job Activity*.
- Added more support for *QuickBooks* connection properties.
<br/><br/>

**<u>Az.ElasticSan</u>**
- Added warning message for data integrity checking when create/update a volume group.
    - *New-AzElasticSanVolumeGroup*
    - *Update-AzElasticSanVolumeGroup*
<br/><br/>

**<u>Az.ManagedServices</u>**
- Added breaking change announcement for below commands from array or single object to list :
    - *Get-AzManagedServicesAssignment*
    - *Get-AzManagedServicesDefinition*
    - *Get-AzManagedServicesMarketplaceDefinition*
    - *New-AzManagedServicesAssignment*
    - *New-AzManagedServicesAuthorizationObject*
    - *New-AzManagedServicesDefinition*
    - *New-AzManagedServicesEligibleApproverObject*
    - *New-AzManagedServicesEligibleAuthorizationObject*
<br/><br/>

**<u>Az.Network</u>**
- Added a new command which creates an object for *CaptureSetting*, and added properties *FileCount*, *FileSizeInBytes*, and *SessionTimeLimitInSeconds*, which helps to configure the capture setting for packet capture as well as support for it for the following cmdlets :
    - *New-AzPacketCaptureSettingsConfig*
- Added properties *ContinuousCapture*, *LocalPath*, and *CaptureSetting* reference in Packet capture V2 command, as well as support for it for the following cmdlets :
    - *New-AzNetworkWatcherPacketCaptureV2*
- Onboarded Application Gateway WAF Exceptions cmdlet :
    - *New-AzApplicationGatewayFirewallPolicyException*
<br/><br/>

**<u>Az.Relay</u>**
- Added breaking change announcement for below commands :
    - *Get-AzRelayNamespace*
    - *Get-AzRelayNamespaceNetworkRuleSet*
    - *Set-AzRelayNamespaceNetworkRuleSet*
<br/><br/>

**<u>Az.Resources</u>**
- Fixed empty warning output issue for cmdlet *Test-AzResourceGroupDeployment* [#27888].
<br/><br/>

**<u>Az.Storage</u>**
- Supported set *SasExpirationAction* as *Log* or *Block*, together with *SasExpirationPeriod*.
    - *New-AzStorageAccount*
    - *Set-AzStorageAccount*
- Supported Storage task assignment.
    - *New-AzStorageTaskAssignment*
    - *Update-AzStorageTaskAssignment*
    - *Get-AzStorageTaskAssignment*
    - *Remove-AzStorageTaskAssignment*
    - *Get-AzStorageTaskAssignmentinstancesReport*
<br/><br/>

**<u>Az.StorageAction</u>**
- General availability for module *Az.StorageAction*.

---

##### Conclusion
Go update your Azure module for PowerShell to benefit from the latest updates and possible configurations.

---

##### Sources
[PowerShell Gallery](https://www.powershellgallery.com/packages/Az/14.2.0)

---


Did you enjoy this post ? If you have any questions, comments or suggestions, please feel free to send me a message from the contact form.

Don't forget to follow us and share this post.