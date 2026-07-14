---
title: "PowerShell Azure module updated to version 16.0.0"
meta_title: ""
description: ""
date: 2026-07-13T10:00:00-05:00
image: "/images/blog/azure/azure_update_module_powershell_16_1_0_thumbnail.png"
categories: ["Azure"]
author: "Maxime Hiez"
tags: ["Module", "Update", "PowerShell"]
draft: false
---
---

##### Introduction
Microsoft recently published the new version 16.1.0 of the PowerShell module for Microsoft Azure.

---

##### Installation
You can check the installed module version via the following PowerShell command :
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
Version 16.1.0 includes the following updates :

**<u>Az.Accounts</u>**
- Upgraded *Azure.Core* from version *1.50.0* to *1.56.0*.
- Upgraded *Azure.Identity* to version *1.21.0*.
- Upgraded *Azure.Identity.Broker* from version *1.1.0* to *1.6.0*.
- Upgraded *System.ClientModel* from version *1.8.0* to *1.12.0*.
- Upgraded *System.Text.Json* from version *8.0.6* to *10.0.3*.
- Upgraded MSAL dependencies (*Microsoft.Identity.Client*, *Microsoft.Identity.Client.Extensions.Msal*, *Microsoft.Identity.Client.Broker*) from version *4.83.1* to *4.84.0*.
- Upgraded *Microsoft.Identity.Client.NativeInterop* from version *0.20.2* to *0.20.4*.
- Fixed : *MicrosoftGraphUrl* not being populated when *ARM* (*Azure Resource Manager*) metadata returns endpoint without trailing slash.
<br/><br/>

**<u>Az.Aks</u>**
- Added support for *AzureContainerLinux* OS SKU via *-NodeOsSKU* parameter in *New-AzAksCluster* and *-OsSKU* in *New-AzAksNodePool*.
- Updated API version to *2026-03-01*.
<br/><br/>

**<u>Az.AppConfiguration</u>**
- Upgraded API version from *2024-06-01* to *2026-04-01*.
    - Added support for *Description* field for Key Values and Snapshots.
<br/><br/>

**<u>Az.Automation</u>**
- Updated identity handling to explicitly use *Automation* SDK Identity model in create/update flows.
<br/><br/>

**<u>Az.Batch</u>**
- Fixed module load conflict by aligning *Microsoft.ApplicationInsights* to the common version *2.18.0*, resolving the *"Assembly with same name is already loaded"* error.
<br/><br/>

**<u>Az.CognitiveServices</u>**
- Updated *Cognitive Services* account identity handling to explicitly use the Cognitive Services SDK Identity model in create/update flows.
<br/><br/>

**<u>Az.Compute</u>**
- Updated *ComputeRP* cmdlets to use API version *2026-03-01*.
- Added *-ScheduledEventsApiVersion* and *-EnableAllInstancesDown* parameters to *Update-AzAvailabilitySet*, *Update-AzVM*, *New-AzVM* (*SimpleParameterSet*) and *New-AzVmss*.
- Added *-ScheduledEventsApiVersion* and *-EnableAllInstancesDown* parameters to *Update-AzVmss* (supported only with *-VirtualMachineScaleSet* object parameter).
- Added *VMSS* (*Virtual Machine Scale Set*) Lifecycle Hooks support (public preview) :
    - Added *New-AzVmssLifecycleHookConfig* cmdlet to create a lifecycle hook configuration object in memory.
    - Added *Set-AzVmssLifecycleHooksProfile* cmdlet to associate lifecycle hooks with a VMSS configuration or a live VMSS object.
    - Added *Remove-AzVmssLifecycleHook* cmdlet to remove a hook with *-Type* or all hooks with *-All* from a live VMSS.
    - Added *Get-AzVmssLifecycleHookEvent* cmdlet to list or retrieve lifecycle hook events from a VMSS.
    - Added *Update-AzVmssLifecycleHookEvent* cmdlet to respond to a lifecycle hook event (approve, reject or delay), with optional filtering by VM instance via *-InstanceId*.
    - Added *-LifecycleHooksProfile* parameter to *New-AzVmssConfig* to support inline lifecycle hook profile creation.
<br/><br/>

**<u>Az.DataFactory</u>**
- Updated *System.IO.FileSystem.AccessControl* from version *4.5.0* to *5.0.0*.
<br/><br/>

**<u>Az.DataMigration</u>**
- Removed authentication key from console output.
<br/><br/>

**<u>Az.DataProtection</u>**
- Deprecated *-OverwriteLifeCycle* parameter in *Edit-AzDataProtectionPolicyRetentionRuleClientObject*.
- Updated *-Name* parameter help messages for retention rules in *Edit-AzDataProtectionPolicyRetentionRuleClientObject*.
<br/><br/>

**<u>Az.Dns</u>**
- Added support for linking DNS record sets to *Azure Traffic Manager* profiles.
    - Added *-TrafficManagerProfileId* parameter to *New-AzDnsRecordSet*.
    - *Get-AzDnsRecordSet* and *Set-AzDnsRecordSet* now expose *TrafficManagerProfileId*.
<br/><br/>

**<u>Az.IotHub</u>**
- Updated *Microsoft.Extensions.DependencyInjection.Abstractions* from version *8.0.2* to *10.0.3*.
<br/><br/>

**<u>Az.KeyVault</u>**
- Updated *System.Security.Cryptography.Cng* from version *4.5.0* to *5.0.0*.
<br/><br/>

**<u>Az.Network</u>**
- Onboarded *Microsoft.HorizonDB/clusters* to *Private Link* common cmdlets.
<br/><br/>

**<u>Az.OperationalInsights</u>**
- Updated *PSIdentity* conversions to explicitly use *Operational Insights* SDK Identity model.
<br/><br/>

**<u>Az.RecoveryServices</u>**
- Updated *System.Security.Cryptography.Cng* from version *4.4.0* to *5.0.0*.
- Added Cross region restore support for *Delos* cloud regions.
- Updated *Az.RecoveryServices.SiteRecovery* to use API version *2026-02-01*.
- Added *Private Disk Access* support for *Azure-to-Azure* managed disk replication, with new *-RecoveryNetworkAccessPolicy*, *-RecoveryDiskAccessId* and *-RecoveryPublicNetworkAccess* parameters in *New-AzRecoveryServicesAsrAzureToAzureDiskReplicationConfig*.
<br/><br/>

**<u>Az.Resources</u>**
- Updated *Microsoft.Extensions.DependencyInjection.Abstractions* from version *8.0.2* to *10.0.3*.
<br/><br/>

**<u>Az.Storage</u>**
- Updated storage account identity handling to explicitly use *Storage* SDK Identity model in *New-AzStorageAccount* and *Set-AzStorageAccount*.

---

##### Conclusion
Go update your Azure PowerShell module to benefit from the latest updates and possible configurations.

---

##### Sources
[PowerShell Gallery](https://www.powershellgallery.com/packages/Az/16.1.0)

---


Did you enjoy this post ? If you have any questions, comments or suggestions, please feel free to send me a message from the contact form.

Don't forget to follow us and share this post.