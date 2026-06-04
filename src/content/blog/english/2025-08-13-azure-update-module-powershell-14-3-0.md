---
title: "PowerShell Azure module updated to version 14.3.0"
meta_title: ""
description: ""
date: 2025-08-13T10:00:00-05:00
image: "/images/blog/azure/azure_update_module_powershell_14_3_0_thumbnail.png"
categories: ["Azure"]
author: "Maxime Hiez"
tags: ["Module", "Update", "PowerShell"]
draft: false
---
---

##### Introduction
Microsoft recently released the new version 14.3.0 of the PowerShell module for Microsoft Azure.

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
Version 14.3.0 includes the following updates :

**<u>Az.Accounts</u>**
- Fixed an issue where *Clear-AzContext* does not clear the token cache when broker is enabled.
- Added new parameter *-ClaimsChallenge* to *Connect-AzAccount* to support claims challenge authentication for MFA.
- Refined the error message when a cmdlet fails because of policy violations about Multi-Factor Authentication (MFA) to provide more actionable guidance.
<br/><br/>

**<u>Az.ArizeAI</u>**
- General availability for module *Az.ArizeAI*.
- Upgraded the API version to *2024-10-01*.
<br/><br/>

**<u>Az.Compute</u>**
- Compute *DiskRP* related cmdlets will now use *2025-01-02* version of the *DiskRP* API.
- Upgraded *SpotPlacementScore* cmdlets to API version *2025-06-05*.
<br/><br/>

**<u>Az.CosmosDB</u>**
- Fixed issue where the restore command failed to detect the source account, even when it existed.
<br/><br/>

**<u>Az.DataLakeStore</u>**
- Added a new cmdlet *GetAzureDataLakeStoreDeletedItemWithtoken* to support pagination in *GetAzureDataLakeStoreDeletedItem*.
<br/><br/>

**<u>Az.DevCenter</u>**
- Added preannouncement breaking change messages.
<br/><br/>

**<u>Az.EventHub</u>**
- Added new cmdlets for *EventHubNetworkSecurityPerimeterConfiguration* :
    - *Get-AzEventHubNetworkSecurityPerimeterConfigurationsForAssociation*
    - *Get-AzEventHubNetworkSecurityPerimeterConfiguration*
<br/><br/>

**<u>Az.Fabric</u>**
- General availability for module *Az.Fabric*.
<br/><br/>

**<u>Az.LambdaTest</u>**
- General availability for module *Az.LambdaTest*.
- Upgraded the API version to *2024-02-01*.
<br/><br/>

**<u>Az.ManagedServices</u>**
- Update the outputs of breaking change announcements.
<br/><br/>

**<u>Az.Migrate</u>**
- Added *-OsType* as an optional parameter to command *Set-AzMigrateLocalServerReplication* to allow user-specified OS type.
- Fixed bugs in *New-AzMigrateServerReplication* caused by deprecation of *Get-AzVmSize -location*.
- Removed *-TargetStoragePathId* parameter from command *New-AzMigrateLocalDiskMappingObject* until the feature to associate each disk to their own storage container path is supported.
- Added *-SourceApplianceName* and *-TargetApplianceName* as required parameters to command *New-AzMigrateLocalServerReplication* to allow users to specify appliance pairs of their choosing.
- Enhanced resource validations in *Initialize-AzMigrateLocalReplicationInfrastructure* and *New-AzMigrateLocalServerReplication*.
<br/><br/>

**<u>Az.Monitor</u>**
- Added breaking change announcement for below cmdlets from single object or fixed array to list :
    - *Get-AzActivityLogAlert*
    - *New-AzActivityLogAlert*
    - *Update-AzActivityLogAlert*
    - *New-AzActivityLogAlertAlertRuleAnyOfOrLeafConditionObject*
    - *New-AzActivityLogAlertAlertRuleLeafConditionObject*
    - *Get-AzAutoscalePredictiveMetric*
    - *Get-AzAutoscaleSetting*
    - *New-AzAutoscaleNotificationObject*
    - *New-AzAutoscaleProfileObject*
    - *New-AzAutoscaleScaleRuleMetricDimensionObject*
    - *New-AzAutoscaleScaleRuleObject*
    - *New-AzAutoscaleSetting*
    - *Update-AzAutoscaleSetting*
    - *Get-AzMonitorWorkspace*
    - *New-AzMonitorWorkspace*
    - *Update-AzMonitorWorkspace*
    - *New-AzDiagnosticSetting*
    - *New-AzSubscriptionDiagnosticSetting*
    - *Get-AzDiagnosticSetting*
    - *Get-AzDiagnosticSettingCategory*
    - *Get-AzSubscriptionDiagnosticSetting*
    - *Get-AzScheduledQueryRule*
    - *New-AzScheduledQueryRule*
    - *New-AzScheduledQueryRuleConditionObject*
    - *New-AzScheduledQueryRuleDimensionObject*
    - *Update-AzScheduledQueryRule*
<br/><br/>

**<u>Az.MySql</u>**
- Aligned with *SimplySql*, use a PSCredential object instead of UserName/Password parameters when calling *Open-MySQLConnection*.
- Introduced a *Timeout* value when running *Test-AzMySqlFlexibleServerConnect* with long running query.
<br/><br/>

**<u>Az.Network</u>**
- Returned *appgw* and *agc* in waf policy.
- Updated cmdlet *New-AzFirewallPolicyApplicationRule* to use HTTPS as the default protocol when creating a new FQDN Tag application rule.
- Added *EnableDnstapLogging* parameter to *New-AzFirewall*.
<br/><br/>

**<u>Az.NetworkCloud</u>**
- Upgraded API version to *2025-02-01*.
<br/><br/>

**<u>Az.Nginx</u>**
- Added breaking change announcement for below cmdlets from fixed array to list :
    - *Get-AzNginxConfiguration*
    - *New-AzNginxConfiguration*
    - *Get-AzNginxDeployment*
    - *New-AzNginxDeployment*
    - *Update-AzNginxDeployment*
    - *Invoke-AzNginxAnalysisConfiguration*
    - *New-AzNginxNetworkProfileObject*
- Added breaking change announcement for *New-AzNginxDeployment* and *Update-AzNginxDeployment* cmdlets.
    - Removed *-IdentityType* parameter to support new Managed Identity settings.
    - Removed *-IdentityUserAssignedIdentity*.
- The parameters of the *New-AzNginxDeployment* and *Update-AzNginxDeployment* cmdlets will be changed by new Managed Identity settings.
    - Added *-UserAssignedIdentity* parameter. The type of *UserAssignedIdentity* is simplified to a list of strings that is used to specify the user's assigned identity.
    - Added *EnableSystemAssignedIdentity* to enable/disable system-assigned identities.
<br/><br/>

**<u>Az.Oracle</u>**
- Upgraded to the stable version *2025-03-01*.
<br/><br/>

**<u>Az.PostgreSql</u>**
- Aligned with *SimplySql*, use a PSCredential object instead of UserName/Password parameters when calling *Open-PostGreConnection*.
- Introduced a *Timeout* value when running *Test-AzPostgreSqlFlexibleServerConnect* with long running query.
<br/><br/>

**<u>Az.RecoveryServices</u>**
- Added new optional parameter *CVMOsDiskEncryptionSetId* in *Restore-AzRecoveryServicesBackupItem*.
<br/><br/>

**<u>Az.Relay</u>**
- Update the outputs of breaking change announcements.
<br/><br/>

**<u>Az.Resources</u>**
- Added functionality for cmdlet *GetAzureResourceGroup* [#27865].
- Added breaking change announcement for below cmdlets from array to list :
    - *Get-AzRoleManagementPolicy*
    - *Update-AzRoleManagementPolicy*
- Added support for exporting resource group templates as Bicep files.
    - Added *OutputFormat* parameter to *Export-AzResourceGroup* cmdlet.
    - Supported values : *Json* (default), *Bicep*.
<br/><br/>

**<u>Az.ServiceFabric</u>**
- Added parameter *Location* to allow users to specify a different node type location than the resource group location in cmdlet *Add-AzServiceFabricNodeType*.
- Added parameter *VmSize* to allow for in-place sku swap for cmdlet *Set-AzServiceFabricManagedNodeType*.
- Updated SFMC to latest API preview version *2025-03-01-preview*.
<br/><br/>

**<u>Az.Sql</u>**
- Updated *DatabaseOperations* API to version *2024-11-01-preview* for .Net Sdk.
<br/><br/>

**<u>Az.StackHCI</u>**
- Used Fully Qualified Computer Name and added warning for user to upgrade to solution.
<br/><br/>

**<u>Az.StorageSync</u>**
- Fixed security bug in token acquisition for MI server registration.
<br/><br/>

**<u>Az.Synapse</u>**
- Fixed an error when remove artifact throw *ArgumentNullException*.

---

##### Conclusion
Go update your Azure module for PowerShell to benefit from the latest updates and possible configurations.

---

##### Sources
[PowerShell Gallery](https://www.powershellgallery.com/packages/Az/14.3.0)

---


Did you enjoy this post ? If you have any questions, comments or suggestions, please feel free to send me a message from the contact form.

Don't forget to follow us and share this post.