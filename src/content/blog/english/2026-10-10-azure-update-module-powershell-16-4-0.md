---
title: "PowerShell Azure module updated to version 16.4.0"
meta_title: ""
description: ""
date: 2026-10-10T10:00:00-05:00
image: "/images/blog/azure/azure_update_module_powershell_16_4_0_thumbnail.png"
categories: ["Azure"]
author: "Maxime Hiez"
tags: ["Module", "Update", "PowerShell"]
draft: false
---
---

##### Introduction
Microsoft recently published the new version 16.4.0 of the PowerShell module for Microsoft Azure.

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
Version 16.4.0 includes the following updates :

**<u>Az.Compute</u>**
- Added *-ScheduleProfileStart* and *-MinimumCommitmentDayCount* parameters to *New-AzCapacityReservation* to create *Future Capacity Reservations*, and surfaced the read-only *ScheduleProfile* (including *ModifiableUntil*) and instance view *ReservationStateInfo* on *Get-AzCapacityReservation* output.
- Added *SpotPlus* as a supported value for the *-Priority* parameter of *New-AzVM*, *New-AzVMConfig*, *New-AzVmss*, and *New-AzVmssConfig*.
    - *SpotPlus* is the next generation of Azure Spot for VM (Virtual Machine) and VMSS (Virtual Machine Scale Set) deployments, and offers higher reliability and longer running time than *Spot*.
    - *-EvictionPolicy* and *-MaxPrice* behave the same way as they do for *Spot*.
    - Requires the *Microsoft.Compute/SpotPlus* subscription feature to be registered, and a region where the feature is enabled.
- For *New-AzVM* : If the extension-version catalogue lookup fails, the cmdlet uses the default BGInfo (Background Information) extension version, and installation failures now emit a warning rather than terminating the cmdlet.
- Added cmdlets and parameters to configure first-party service tags for implicit public IP addresses on VMs (Virtual Machines) and VMSS (Virtual Machine Scale Sets).
- Added extension release metadata support to *Get-AzVMExtensionImage*.
    - Use *-Expand Properties* when listing extension versions to include release category, urgency level, and run profile metadata. [Azure/azure-powershell-cmdlet-review-pr#1571](https://github.com/Azure/azure-powershell-cmdlet-review-pr/issues/1571)
<br/><br/>

**<u>Az.ContainerInstance</u>**
- Added *Change Safety* support.
<br/><br/>

**<u>Az.ContainerRegistry</u>**
- Added *Change Safety* support for additional cmdlets.
<br/><br/>

**<u>Az.DataFactory</u>**
- Updated the *Update-AzDataFactoryV2IntegrationRuntime* example output to use a public service URL.
<br/><br/>

**<u>Az.DataProtection</u>**
- Upgraded the DataProtection API version to *2026-06-01* (general availability), which natively models the Azure Elastic SAN (Storage Area Network) backup and restore types.
- Added *AzureElasticSAN* datasource support for backup and restore.
    - Added *-ResourceSelector* parameter to *New-AzDataProtectionBackupConfigurationClientObject* for selecting the volume to back up (the service currently supports one volume per backup instance).
    - Added *-ResourceIdentifier* and *-ResourceNameOverride* parameters to *New-AzDataProtectionRestoreConfigurationClientObject* for selecting and optionally renaming the volume to restore.
    - Enabled *AzureElasticSAN* in *Initialize-AzDataProtectionRestoreRequest* and *Set-AzDataProtectionMSIPermission*.
- Added cost management granularity support to backup vault creation and update cmdlets.
    - Added *-CostManagementGranularity* parameter to *New-AzDataProtectionBackupVault* and *Update-AzDataProtectionBackupVault*.
    - Allowed values are *VaultLevel*, *ProtectedItemLevel*, *ProtectedItemWithParentTag*.
<br/><br/>

**<u>Az.Discovery</u>**
- General availability for module *Az.Discovery*.
<br/><br/>

**<u>Az.EventGrid</u>**
- Added *Change Safety* support.
<br/><br/>

**<u>Az.EventHub</u>**
- Added *Change Safety* support for additional cmdlets.
- Fixed *Change Safety* parameter forwarding in custom *read-before-write* and *GeoDR* cmdlets.
<br/><br/>

**<u>Az.Kusto</u>**
- Added *Change Safety* support.
<br/><br/>

**<u>Az.Maintenance</u>**
- Changed scheduled event approval failures to terminating PowerShell errors displaying the HTTP status and service error JSON. HTTP 200 and list HTTP 207 responses remain normal output.
- Updated *Approve-AzScheduledEventList* to return multi-status results through *Error.Details* with target IDs supplied by the service.
<br/><br/>

**<u>Az.ManagedServiceIdentity</u>**
- Added *Change Safety* support.
<br/><br/>

**<u>Az.Migrate</u>**
- Updated Azure Data Replication API version from *2024-09-01* to *2026-05-01*.
- Added *MigrateAsArcVM* parameter to *New-AzMigrateLocalServerReplication* to support migrating VMs as Azure Arc-enabled VMs.
<br/><br/>

**<u>Az.Mission</u>**
- General availability release for module *Az.Mission* targeting the stable *Microsoft.Mission* API version *2026-04-01*.
<br/><br/>

**<u>Az.Monitor</u>**
- Added *Change Safety* support for data collection rule cmdlets.
<br/><br/>

**<u>Az.Network</u>**
- Fixed *Change Safety* parameter forwarding in custom *read-before-write* cmdlets.
- Added provider-led ExpressRoute cross-connection migration commands.
- Added First Party Service Tag association support to IP tags used by *New-AzPublicIpPrefix*.
- Added support for provisioning an ExpressRoute circuit on an *ExpressRouteLag* resource (Microsoft.Network *2026-01-01* API).
- Added *MigrateGatewayForPointToSiteProfile* as a supported value for the *-MigrationType* parameter of *New-AzVirtualNetworkGatewayMigrationParameter*, and fixed the cmdlet to honor the user-provided *-MigrationType* value.
- Added Application Gateway advanced routing support.
- Added *AdvancedRouting* as a supported value for *-RuleType* on *New-AzApplicationGatewayRequestRoutingRule*, *Add-AzApplicationGatewayRequestRoutingRule*, and *Set-AzApplicationGatewayRequestRoutingRule*.
- Added *-VerifyClientAuthMode* to *New-AzApplicationGatewayClientAuthConfiguration* and *Set-AzApplicationGatewayClientAuthConfiguration* to select the frontend mutual TLS (mTLS) client certificate verification mode.
- Upgraded Network SDK to API version *2026-01-01*.
- Fixed *-EnableOnlyIpv6Peering* on *New-AzVirtualHubVnetConnection* so that the *Enabled* and *Disabled* values are correctly translated to the boolean *enableOnlyIPv6Peering* property expected by the service.
- Added minimum and maximum allocation size bounds to IPAM pool creation, update, and output.
- Added *Get-AzExpressRouteCircuitAuthorizationKey* and *Get-AzExpressRoutePortAuthorizationKey* to retrieve the authorization key for an ExpressRoute circuit or port authorization (Microsoft.Network *2026-01-01* API).
- Added WAF (Web Application Firewall) managed rule set display name and managed rule paranoia level to Application Gateway WAF cmdlet output.
- Added *SourceGeoLocation* and *DestinationGeoLocation* filters to *New-AzFirewallPolicyNetworkRule*.
- Removed client-side validation of the *-FormatVersion* parameter for *New-AzNetworkWatcherFlowLog* and *Set-AzNetworkWatcherFlowLog*.
- Added *Change Safety* support for additional cmdlets.
- Added the *CAPTCHA* action to Application Gateway WAF policies.
<br/><br/>

**<u>Az.RecoveryServices</u>**
- Moved *Instant Item Recovery* (*ILR*) mount script retrieval to the dedicated *listInstantItemRecoveryOperationResult* action (api-version *2026-08-01*) ; *Get-AzRecoveryServicesBackupRPMountScript* no longer reads iSCSI CHAP connection details from the broad ILR operation-status response (*MSRC-114273*).
- Added Managed Identity (MI) based authentication support for Azure File Share backup :
    - Supports identity-based registration and restore for Azure File Share backup, including Cross Subscription Restore.
- Fixed *New-AzRecoveryServicesVault* and *Update-AzRecoveryServicesVault* to use the *AsPerPolicy* configuration by default when enabling vault immutability.
- Fixed cross-subscription Azure VM protection for virtual machines with user-assigned managed identities.
- Added Microsoft Defender for Cloud Source Scan configuration for Recovery Services vaults and Azure Virtual Machine backup items.
    - Supports vault and protected-item configuration and exposes Source Scan and threat details in backup output.
<br/><br/>

**<u>Az.Resources</u>**
- Aligned deployment stack WhatIfResult tag preservation with deployment stack cmdlets when *-Tag* is omitted or explicitly given a null value.
<br/><br/>

**<u>Az.ServiceBus</u>**
- Added *Change Safety* support for additional cmdlets.
- Fixed *Change Safety* parameter forwarding in custom read-before-write and GeoDR cmdlets.
<br/><br/>

**<u>Az.Sql</u>**
- Exposed the backup storage redundancy type in the output of *Get-AzSqlInstanceDatabaseLongTermRetentionBackup*.
- Fixed *Restore-AzSqlDatabase* to omit the high availability (HA) replica count when the parameter is not specified.
- Added selective-fields support to Azure SQL auditing.
    - Added the optional *RequiredFields* parameter to *Set-AzSqlServerAudit* and *Set-AzSqlDatabaseAudit*.
    - Added *RequiredFields* to the output of *Get-AzSqlServerAudit* and *Get-AzSqlDatabaseAudit*.
    - Updated blob auditing operations to API version *2026-08-01-preview*.
<br/><br/>

**<u>Az.StorageSync</u>**
- Improved help for the *ChangeEnumerationIntervalDay* parameter.
- Fixed *Set-AzStorageSyncServer* to retrieve the registered server using the validated server ID.
- Added *ChangeEnumerationIntervalDay* parameter to *New-AzStorageSyncCloudEndpoint* cmdlet.
    - Allows customers to configure the interval in days between change enumeration operations for cloud endpoints.
    - Optional parameter that provides control over change detection frequency.
    - Valid range : 1 to 20 days.
- Added *Set-AzStorageSyncCloudEndpoint* cmdlet.
    - Allows customers to update the *ChangeEnumerationIntervalDay* property of an existing cloud endpoint.
    - Valid range : 1 to 20 days.
<br/><br/>

**<u>Az.Websites</u>**
- Upgraded the *Microsoft.Web* API version from *2021-01-15* to *2025-05-01*. *Microsoft.CertificateRegistration* and *Microsoft.DomainRegistration* remain on *2021-01-15*.

---

##### Conclusion
Go update your Azure PowerShell module to benefit from the latest updates and possible configurations.

---

##### Sources
[PowerShell Gallery](https://www.powershellgallery.com/packages/Az/16.4.0)

---


Did you enjoy this post ? If you have any questions, comments or suggestions, please feel free to send me a message from the contact form.

Don't forget to follow us and share this post.