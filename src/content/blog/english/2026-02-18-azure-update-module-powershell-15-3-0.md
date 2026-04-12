---
title: "PowerShell Azure module updated to version 15.3.0"
meta_title: ""
description: ""
date: 2026-02-18T10:00:00-05:00
image: "/images/blog/azure/azure_update_module_powershell_15_3_0_thumbnail.png"
categories: ["Azure"]
author: "Maxime Hiez"
tags: ["Module", "Update", "PowerShell"]
draft: false
---
---

##### Introduction
Microsoft recently released the new version 15.3.0 of the PowerShell module for Microsoft Azure.

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

##### What*s new ?
Version 15.3.0 contains the following updates :

**<u>Az.Aks</u>**
- Fixed the default SSH key generation logic in *New-AzAksCluster* to enforce RSA key type (instead of ed25519 that became the default in *OpenSSH* 9.4 and above).
<br/><br/>

**<u>Az.Compute</u>**
- Compute SDK generation updates :
   - Generation now uses *autorest.powershell*, replacing deprecated track 1 SDK.
   - Removed local swagger files and replaced references with remote swagger files.
- Added new cmdlets for Availability Set to Virtual Machine Scale Set (VMSS) Flex migration (Public Preview) :
   - *Convert-AzAvailabilitySet* : Converts an Availability Set to a new Flexible Virtual Machine Scale Set without downtime.
   - *Test-AzAvailabilitySetMigration* : Validates that VMs in an Availability Set can be migrated to a VMSS.
   - *Start-AzAvailabilitySetMigration* : Starts migration of an Availability Set to an existing Flexible VMSS.
   - *Stop-AzAvailabilitySetMigration* : Cancels a migration operation on an Availability Set.
   - *Move-AzVirtualMachineToVmss*: Migrates a VM from an Availability Set to a Flexible VMSS.
<br/><br/>

**<u>Az.DataProtection</u>**
- Added support for Data Protection Platform vault soft delete feature.
<br/><br/>

**<u>Az.Functions</u>**
- Fixed cloud portability by using dynamic endpoints for storage [#29034].
<br/><br/>

**<u>Az.Network</u>**
- Added *-IpVersionType* parameter to *New-AzPrivateEndpoint* cmdlet to specify the IP version type for private IPs of the private endpoint. Allowed values are IPv4, IPv6, or DualStack.
- Added new cmdlets for VirtualNetworkAppliance resource :
   - *Get-AzVirtualNetworkAppliance* : Get a Virtual Network Appliance resource by name, resource group, or list all.
   - *New-AzVirtualNetworkAppliance* : Create a new Virtual Network Appliance resource.
   - *Remove-AzVirtualNetworkAppliance* : Remove a Virtual Network Appliance resource.
   - *Update-AzVirtualNetworkAppliance* : Update tags on a Virtual Network Appliance resource.
<br/><br/>

**<u>Az.RecoveryServices</u>**
- Added Cross region restore support for upcoming regions *IndiaSouthCentral*.
<br/><br/>

**<u>Az.Resources</u>**
- Fixed issue where the PowerShell console would close when using Resources module cmdlets without being logged in.
   - Github Issue https://github.com/Azure/azure-powershell/issues/28774.
- Fixed *Remove-AzRoleDefinition* displaying incorrect confirmation message (unformatted placeholder) and empty GUID as target when using *-Confirm* or *-WhatIf* with the *-Name* parameter [#29075].
- Added breaking change preannouncement for *PSRoleDefinition* type changes in Az.Resources 10.0.0 [#29058] :
   - The flattened properties *Actions*, *NotActions*, *DataActions*, *NotDataActions*, *Condition*, and *ConditionVersion* will be removed from *PSRoleDefinition*.
   - Use *Permissions[n].Actions*, *Permissions[n].DataActions*, etc. instead to access the full permission structure with per-permission conditions.
   - Affects output for *Get-AzRoleDefinition*, *New-AzRoleDefinition*, *Set-AzRoleDefinition*, and *Remove-AzRoleDefinition* (with *-PassThru*).
   - Affects input format for *New-AzRoleDefinition* and *Set-AzRoleDefinition* cmdlets.
   - Affects *-InputObject* parameter for *Remove-AzRoleDefinition* cmdlet.
<br/><br/>

**<u>Az.SignalR</u>**
- Preannounced breaking changes. Please refer to https://go.microsoft.com/fwlink/?linkid=2333229.
<br/><br/>

**<u>Az.StackHCI</u>**
- Improved cloud deployment detection during Azure Arc repair operations to prevent duplicate enablement attempts and ensure smoother deployment experiences.
- Added ability to register in custom Azure Environments.
- Fixed issue where Arc enablement was incorrectly triggered during repair registration for cloud deployments.
<br/><br/>

**<u>Az.Storage</u>**
- Supported encryption in transit in file service properties.
   - *Update-AzStorageFileServiceProperty*.
- When users input TLS 1.0 or TLS 1.1 to create or update a Storage account, automatically upgrade to TLS 1.2.
   - *New-AzStorageAccount*.
   - *Set-AzStorageAccount*.
- Added breaking change warnings for TLS 1.0 and TLS 1.1 deprecation when creating or updating a Storage account.
   - *New-AzStorageAccount*.
   - *Set-AzStorageAccount*.

---

##### Conclusion
Go update your Azure module for PowerShell to benefit from the latest updates and possible configurations.

---

##### Sources
[PowerShell Gallery](https://www.powershellgallery.com/packages/Az/15.3.0)

---


Did you enjoy this post ? If you have any questions, comments or suggestions, please feel free to send me a message from the contact form.

Don't forget to follow us and share this post.