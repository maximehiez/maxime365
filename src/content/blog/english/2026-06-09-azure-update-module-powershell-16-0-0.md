---
title: "PowerShell Azure module updated to version 16.0.0"
meta_title: ""
description: ""
date: 2026-06-09T10:00:00-05:00
image: "/images/blog/azure/azure_update_module_powershell_16_0_0_thumbnail.png"
categories: ["Azure"]
author: "Maxime Hiez"
tags: ["Module", "Update", "PowerShell"]
draft: false
---
---

##### Introduction
Microsoft recently released the new version 16.0.0 of the PowerShell module for Microsoft Azure.

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
Version 16.0.0 includes the following updates :

**<u>Az.Accounts</u>**
- Added *ChangeSafety* Support.
- Upgraded *Azure.Identity* to *1.17.2*.
<br/><br/>

**<u>Az.Aks</u>**
- Added *ChangeSafety* Support.
<br/><br/>

**<u>Az.AnalysisServices</u>**
- Added *ChangeSafety* Support.
<br/><br/>

**<u>Az.ApiManagement</u>**
- Added *ChangeSafety* Support.
<br/><br/>

**<u>Az.Attestation</u>**
- Added *ChangeSafety* Support.
<br/><br/>

**<u>Az.Automation</u>**
- Added *ChangeSafety* Support.
<br/><br/>

**<u>Az.Batch</u>**
- Added *ChangeSafety* Support.
<br/><br/>

**<u>Az.Billing</u>**
- Added *ChangeSafety* Support.
<br/><br/>

**<u>Az.CloudService</u>**
- [Upgraded code generator] https://go.microsoft.com/fwlink/?linkid=2340249.
<br/><br/>

**<u>Az.CognitiveServices</u>**
- Added *ChangeSafety* Support.
<br/><br/>

**<u>Az.Compute</u>**
- Added *ChangeSafety* Support.
- Added *-ZonalPlatformFaultDomainAlignMode* to *New-AzVmssConfig*, *New-AzVmss* (*SimpleParameterSet*), and *Update-AzVmss* cmdlets.
- Added *-OsDiskStorageFaultDomainAlignment* parameter to *Set-AzVmssStorageProfile* cmdlet.
- Added *-StorageFaultDomainAlignment* parameter to *Add-AzVmssDataDisk*, *Set-AzVMOSDisk*, and *Add-AzVMDataDisk* cmdlets.
- Fixed *Set-AzVMRunCommand* and *Set-AzVmssVMRunCommand* to skip blank lines when processing local script files via *-ScriptLocalPath*, preventing invalid *";;"* syntax errors in shell scripts.
- Added *-InstantAccess* parameter to *New-AzRestorePointCollection* and *Update-AzRestorePointCollection* cmdlets.
- Added *-InstantAccessDurationInMinutes* parameter to *New-AzRestorePoint* cmdlet.
<br/><br/>

**<u>Az.ContainerInstance</u>**
- [Upgraded code generator] https://go.microsoft.com/fwlink/?linkid=2340249.
<br/><br/>

**<u>Az.ContainerRegistry</u>**
- Added *ChangeSafety* Support.
<br/><br/>

**<u>Az.CosmosDB</u>**
- Added *ChangeSafety* Support.
<br/><br/>

**<u>Az.DataBoxEdge</u>**
- Added *ChangeSafety* Support.
<br/><br/>

**<u>Az.Databricks</u>**
- [Upgraded code generator] https://go.microsoft.com/fwlink/?linkid=2340249.
<br/><br/>

**<u>Az.DataFactory</u>**
- Added *ChangeSafety* Support.
<br/><br/>

**<u>Az.DataLakeAnalytics</u>**
- Added *ChangeSafety* Support.
<br/><br/>

**<u>Az.DataLakeStore</u>**
- Added *ChangeSafety* Support.
<br/><br/>

**<u>Az.DataMigration</u>**
- Added *ChangeSafety* Support.
- [PREANNOUNCED BREAKING CHANGES] https://go.microsoft.com/fwlink/?linkid=2333229.
<br/><br/>

**<u>Az.DataProtection</u>**
- Changed retention rule to require *-Name Default_OperationalStore*.
- Added *RenameTo* to restore request.
- [Upgraded code generator] https://go.microsoft.com/fwlink/?linkid=2340249.
- Added Cosmos DB protection support.
<br/><br/>

**<u>Az.DataShare</u>**
- Added *ChangeSafety* Support.
<br/><br/>

**<u>Az.DesktopVirtualization</u>**
- Upgraded API version to *2025-10-10*.
- Added MultiplePersistent enum value to HostPool property loadBalancerType.
- Fixed *New-AzWvdRegistrationInfo*, *Remove-AzWvdRegistrationInfo*.
<br/><br/>

**<u>Az.DevTestLabs</u>**
- Added *ChangeSafety* Support.
<br/><br/>

**<u>Az.Dns</u>**
- Added *ChangeSafety* Support.
<br/><br/>

**<u>Az.DnsResolver</u>**
- Added *Invoke-AzDnsResolverBulkDnsResolverDomainList*.
- [Upgraded code generator] https://go.microsoft.com/fwlink/?linkid=2340249.
- Removed *ActionBlockResponseCode* from DNS security rule cmdlets.
- Made *DnsResolverDomainList*, *Domain* parameters optional.
<br/><br/>

**<u>Az.EventHub</u>**
- Added *ChangeSafety* Support.
<br/><br/>

**<u>Az.FileShare</u>**
- General Availability for module *Az.FileShare*.
<br/><br/>

**<u>Az.FrontDoor</u>**
- Upgraded API version to *2025-11-01*.
- Hid Network Experiment cmdlets.
- Fixed *New/Remove-AzFrontDoorWafPolicy* *UriFormatException*.
<br/><br/>

**<u>Az.Functions</u>**
- [Upgraded code generator] https://go.microsoft.com/fwlink/?linkid=2340249.
- Validated SKU in *Update-AzFunctionApp*.
- Fixed cloud portability using dynamic *StorageEndpointSuffix* [#29034].
- Fixed *Update-AzFunctionApp*.
<br/><br/>

**<u>Az.HDInsight</u>**
- Added *ChangeSafety* Support.
<br/><br/>

**<u>Az.IotHub</u>**
- Added *ChangeSafety* Support.
<br/><br/>

**<u>Az.KeyVault</u>**
- Added *ChangeSafety* Support.
- Added support for creating AES *oct-HSM* keys via *Add-AzKeyVaultKey -KeyType oct -Destination HSM*.
- Fixed *New-AzKeyVault* *RequestDisallowedByPolicy* error.
- Removed certificate-backed items from *Get-AzKeyVaultKey* / *Get-AzKeyVaultSecret* ; use *Get-AzKeyVaultCertificate* instead [#26217].
<br/><br/>

**<u>Az.Kusto</u>**
- [Upgraded code generator] https://go.microsoft.com/fwlink/?linkid=2340249.
<br/><br/>

**<u>Az.LoadTesting</u>**
- [Upgraded code generator] https://go.microsoft.com/fwlink/?linkid=2340249.
<br/><br/>

**<u>Az.LogicApp</u>**
- Added *ChangeSafety* Support.
<br/><br/>

**<u>Az.MachineLearning</u>**
- Added *ChangeSafety* Support.
<br/><br/>

**<u>Az.MachineLearningServices</u>**
- [Upgraded code generator] https://go.microsoft.com/fwlink/?linkid=2340249.
<br/><br/>

**<u>Az.Maintenance</u>**
- Added *ChangeSafety* Support.
<br/><br/>

**<u>Az.ManagedServices</u>**
- [Upgraded code generator] https://go.microsoft.com/fwlink/?linkid=2340249.
<br/><br/>

**<u>Az.Migrate</u>**
- [Upgraded code generator] https://go.microsoft.com/fwlink/?linkid=2340249.
<br/><br/>

**<u>Az.Monitor</u>**
- Added *ChangeSafety* Support.
- Updated *MonitorWorkspace* module to API *2025-10-03* with *CRUD* cmdlets for issues, alerts, resources, investigation, visualization, metrics containers, *Set-AzMonitorWorkspace*.
- Upgraded Pipelines API to GA *2026-04-01* : added *-DistributionMaxInstancesPerHost*, *-ExecutionPlacementConstraint*, *-TlsConfiguration* ; removed *-NetworkingConfiguration*, UDP receiver, *TcpUrl*, *JsonArrayMapperKey*, *SourceFieldName*, *SyslogProtocol*, *DestinationField* ; expanded parameter sets.
<br/><br/>

**<u>Az.MySql</u>**
- [Upgraded code generator] https://go.microsoft.com/fwlink/?linkid=2340249.
<br/><br/>

**<u>Az.NetAppFiles</u>**
- Added *ChangeSafety* Support.
<br/><br/>

**<u>Az.Network</u>**
- Added *ChangeSafety* Support.
- Changed *UserAssignedIdentityId* type to *string[]*.
<br/><br/>

**<u>Az.NetworkCloud</u>**
- Upgraded API version to *2025-09-01*.
- Preannounced breaking changes.
<br/><br/>

**<u>Az.NotificationHubs</u>**
- Added *ChangeSafety* Support.
<br/><br/>

**<u>Az.OperationalInsights</u>**
- Added *ChangeSafety* Support.
<br/><br/>

**<u>Az.PolicyInsights</u>**
- Changed output types : *PSAttestation*, *PSPolicyMetadata*, *PSRemediation* renamed ; flattened *SystemData*.
- Renamed *ResourceTags* and *ManagementGroupIds* to singular forms.
- Flattened *Get-AzPolicyStateSummary*, remediation output properties.
- Changed *Start/Stop-AzPolicyRemediation* default behavior (added *-NoWait*).
<br/><br/>

**<u>Az.PowerBIEmbedded</u>**
- Added *ChangeSafety* Support.
<br/><br/>

**<u>Az.PrivateDns</u>**
- Added *ChangeSafety* Support.
<br/><br/>

**<u>Az.RecoveryServices</u>**
- Added *ChangeSafety* Support.
- Added soft delete support for Azure File share backup items (*Undo-AzRecoveryServicesBackupItemDeletion* *Get-AzRecoveryServicesBackupItem -DeleteState SoftDeleted*).
<br/><br/>

**<u>Az.RedisCache</u>**
- Added *ChangeSafety* Support.
<br/><br/>

**<u>Az.RedisEnterpriseCache</u>**
- [Upgraded code generator] https://go.microsoft.com/fwlink/?linkid=2340249.
<br/><br/>

**<u>Az.ResourceGraph</u>**
- Added *ChangeSafety* Support.
<br/><br/>

**<u>Az.ResourceMover</u>**
- [Upgraded code generator] https://go.microsoft.com/fwlink/?linkid=2340249.
<br/><br/>

**<u>Az.Resources</u>**
- Added *ChangeSafety* Support.
- Updated deployment stack cmdlets to *2025-07-01* API; added *-ResourcesWithoutDeleteSupport*, *-ValidationLevel*.
- Fixed *Set-AzRoleAssignment* unable to delete conditions.
- Updated *Policy.Autorest* to *2025-03-01* : added *-Expand*, *-EnforcementMode*, *-Version*; removed *-BackwardCompatible*.
- Fixed *Get-AzRoleDefinition* null ABAC *Condition* [#29058] [#25940].
- [BREAKING CHANGE] Role definition cmdlets use *Permissions* array with per-permission conditions.
<br/><br/>

**<u>Az.Security</u>**
- Added *ChangeSafety* Support.
<br/><br/>

**<u>Az.SecurityInsights</u>**
- [Upgraded code generator] https://go.microsoft.com/fwlink/?linkid=2340249.
<br/><br/>

**<u>Az.ServiceBus</u>**
- Added *ChangeSafety* Support.
<br/><br/>

**<u>Az.ServiceFabric</u>**
- Added *ChangeSafety* Support.
- Added *Enable-AzServiceFabricManagedClusterMaintenanceWindow*, *Get-AzServiceFabricManagedClusterMaintenanceWindowStatus*.
<br/><br/>

**<u>Az.SignalR</u>**
- Added *ChangeSafety* Support.
- [Upgraded code generator] https://go.microsoft.com/fwlink/?linkid=2340249.
<br/><br/>

**<u>Az.Sql</u>**
- Added *ChangeSafety* Support.
- Removed *EnableSoftDelete* from *New-AzSqlServer*, *Set-AzSqlServer*. Used *SoftDeleteRetentionDays* instead : setting *SoftDeleteRetentionDays*.
- Reverted *the support for UAMI authentication in Data Sync cmdlets*.
<br/><br/>

**<u>Az.SqlVirtualMachine</u>**
- [Upgraded code generator] https://go.microsoft.com/fwlink/?linkid=2340249.
<br/><br/>

**<u>Az.StackHCI</u>**
- [Upgraded code generator] https://go.microsoft.com/fwlink/?linkid=2340249.
<br/><br/>

**<u>Az.StackHCIVM</u>**
- Fixed missing export of *Save-AzStackHCIVMVirtualMachine*, *Suspend-AzStackHCIVMVirtualMachine*.
<br/><br/>

**<u>Az.Storage</u>**
- Added *ChangeSafety* Support.
- Updated prompt in *Start-AzStorageAccountMigration*.
- Added *MockRun* TriggerType in *New/Update-AzStorageTaskAssignment*.
- Added Smart access tier, AllowedCopyScope in *New/Set-AzStorageAccount*.
- Added static website config in *Update-AzStorageBlobServiceProperty*.
- Added tags replication in *Set-AzStorageObjectReplicationPolicy*.
<br/><br/>

**<u>Az.StorageAction</u>**
- Internal code generation updated.
<br/><br/>

**<u>Az.StorageMover</u>**
- Upgraded API version to *2025-12-01*.
<br/><br/>

**<u>Az.StorageSync</u>**
- Added *ChangeSafety* Support.
<br/><br/>

**<u>Az.Synapse</u>**
- Added *ChangeSafety* Support.
<br/><br/>

**<u>Az.TrafficManager</u>**
- Added *ChangeSafety* Support.
<br/><br/>

**<u>Az.Websites</u>**
- Added *ChangeSafety* Support.
- [Upgraded code generator] https://go.microsoft.com/fwlink/?linkid=2340249.

---

##### Conclusion
Go update your Azure module for PowerShell to benefit from the latest updates and possible configurations.

---

##### Sources
[PowerShell Gallery](https://www.powershellgallery.com/packages/Az/16.0.0)

---


Did you enjoy this post ? If you have any questions, comments or suggestions, please feel free to send me a message from the contact form.

Don't forget to follow us and share this post.