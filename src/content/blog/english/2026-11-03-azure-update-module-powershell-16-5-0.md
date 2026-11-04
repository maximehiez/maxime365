---
title: "PowerShell Azure module updated to version 16.5.0"
meta_title: ""
description: ""
date: 2026-11-03T10:00:00-05:00
image: "/images/blog/azure/azure_update_module_powershell_16_5_0_thumbnail.png"
categories: ["Azure"]
author: "Maxime Hiez"
tags: ["Module", "Update", "PowerShell"]
draft: false
---
---

##### Introduction
Microsoft recently published the new version 16.5.0 of the PowerShell module for Microsoft Azure.

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
Version 16.5.0 includes the following updates :

**<u>Az.Accounts</u>**
- Fixed *Get-AzAccessToken -ResourceUrl* help ; replaced Azure AD Graph with Microsoft Graph.
- Clarified *Add-AzEnvironment*/*Set-AzEnvironment -AzureKeyVaultDnsSuffix* format.
- Fixed login terminology.
<br/><br/>

**<u>Az.ApiManagement</u>**
- Removed non-public endpoints from the *Get-AzApiManagementNetworkStatus* example.
<br/><br/>

**<u>Az.Cdn</u>**
- Updated Front Door to API *2026-10-01*; added server TLS (Transport Layer Security) groups, post-quantum key exchange, origin certificate name validation and EdgeAction *ClientResponse*. Preserved existing features/URL signing compatibility.
- Kept classic CDN on API *2026-04-01-preview* and standalone EdgeAction on *2024-07-22-preview*. Use *Az.EdgeAction* for the stable API.
- Fixed *Change Safety* parameter forwarding.
- Announced standalone EdgeAction removal in *Az.Cdn* 7.0.0/Az 17.0.0 on November 15, 2026; no behavior changes/warnings yet. Delivery-rule actions and URL signing are unaffected.
- Added classic Front Door/Microsoft CDN migration cutover guidance.
<br/><br/>

**<u>Az.Compute</u>**
- Added preview FlexProfile support with *PreferredVMSize* for virtual machine creation and updates, and FlexProfile details in *Get-AzVM* model output. Requires feature registration and regional availability.
- Added soft delete policy controls to Azure Compute Gallery cmdlets, along with recycle-bin discovery and image version restore cmdlets. Permanent deletion can be requested with *-BypassSoftDelete*.
- Updated Azure Compute Gallery cmdlets to use API version *2026-03-03*.
- Updated Azure Compute cmdlets with two new features from API version *2026-04-01*.
- Added Compute Gallery soft delete policies, recycle-bin discovery and image version restore; *-BypassSoftDelete* permanently deletes.
- Updated Gallery to API *2026-03-03* and added two Compute features from API *2026-04-01*.
<br/><br/>

**<u>Az.ConnectedMachine</u>**
- Updated to API *2026-06-16-preview*.
- Added *Get-AzConnectedExtensionPublisher*, *Get-AzConnectedExtensionType* and *Get-AzConnectedExtensionMetadataV2*.
- Changed run command *RunAsPassword* from *String* to *SecureString*.
- Removed identity properties *OSType* and *MetadataName*, and private link scope properties *SystemData\**.
<br/><br/>

**<u>Az.DataProtection</u>**
- Added Cosmos DB item-level restore to *New-AzDataProtectionRestoreConfigurationClientObject* and *Initialize-AzDataProtectionRestoreRequest*; select databases or database/container pairs with *-ResourceIdentifier*.
- Fixed *Initialize-AzDataProtectionRestoreRequest* with *-UseSystemAssignedIdentity* or *-UserAssignedIdentityArmId*.
<br/><br/>

**<u>Az.EdgeAction</u>**
- General availability for module *Az.EdgeAction*
- Updated parameters; documented tag replacement, JSON-based clearing and immutable properties.
- Tag updates preserve the default version; switch with *Switch-AzEdgeActionVersionDefault*.
- Clarified subscriptions for code retrieval/default-version switching.
<br/><br/>

**<u>Az.EventHub</u>**
- Updated default API to *2026-07-01-preview*.
- Added Fabric shortcuts : *Get-AzEventHubFabricShortcut*, *New-AzEventHubFabricShortcut*, *Remove-AzEventHubFabricShortcut*, *Approve-AzEventHubFabricShortcut* and *Invoke-AzEventHubRejectFabricShortcut*.
- Added *Get-AzEventHubUpgradePreferencesOperation* and *New-AzEventHubUpgradePreferencesOperation*.
<br/><br/>

**<u>Az.KeyVault</u>**
- Upgraded the Key Vault control plane API version to *2026-05-15*.
    - Added Managed HSM SKU values to *New-AzKeyVaultManagedHsm*.
- Fixed name availability and managed hardware security module region cmdlets with API *2026-02-01*.
<br/><br/>

**<u>Az.Marketplace</u>**
- Made *Az.Marketplace* generally available.
<br/><br/>

**<u>Az.Migrate</u>**
- Added *TargetVMSecurityOption* (*Standard*/*TrustedLaunch*) and *EnableSecureBoot* to *New-AzMigrateLocalServerReplication* and *Set-AzMigrateLocalServerReplication*. Trusted Launch enables Secure Boot and virtual Trusted Platform Module (vTPM). Trusted Launch/Secure Boot require Generation 2 targets.
- Blocked disabling source-enabled Secure Boot; skipped checks if source state is unknown.
- Changed *Initialize-AzMigrateLocalReplicationInfrastructure* cache grants to Storage Account Contributor (was Contributor) for the vault identity/source/target appliance applications.
<br/><br/>

**<u>Az.Network</u>**
- Updated replication vault Private Link to API *2026-05-01* and Network SDK to *2026-03-01*/*2026-01-01*.
- Added *CapacityProviderId* to *New-AzVirtualNetworkAppliance* and *Update-AzVirtualNetworkAppliance*.
- Added ExpressRoute link aggregation group (LAG) authorization/key cmdlets.
- Added managed Network Virtual Appliance IPv6/dual-stack via *AddressFamily* (IPv4 default on creation; unchanged if omitted on update). Added read-only family, IPv6 prefix/private address output and interface public/private IPv6 addresses.
- Added DDoS (Distributed Denial of Service) custom policy TCP/UDP mitigation rule management, IP prefix/geographic Deny/Permit matches and policy integration [Azure/azure-rest-api-specs#46716](https://github.com/Azure/azure-rest-api-specs/pull/46716).
- Added *New-AzVirtualNetworkApplianceCapability*, *Get-AzVirtualNetworkApplianceCapability* and *Remove-AzVirtualNetworkApplianceCapability*.
- Added *Get-AzDdosCustomPolicyDetectionRule* and *Set-AzDdosCustomPolicyDetectionRule* for API *2025-07-01* [#29387].
- Expanded *Change Safety* support and fixed parameter forwarding.
- Added provider-led ExpressRoute cross-connection migration and circuits on *ExpressRouteLag*.
- Added First Party Service Tag associations to *New-AzPublicIpPrefix*.
- Added *MigrateGatewayForPointToSiteProfile*; fixed *New-AzVirtualNetworkGatewayMigrationParameter -MigrationType*.
- Added Application Gateway advanced routing/rule type *AdvancedRouting*.
- Added mutual TLS (Transport Layer Security) *VerifyClientAuthMode* to *New-AzApplicationGatewayClientAuthConfiguration* and *Set-AzApplicationGatewayClientAuthConfiguration*.
- Fixed *New-AzVirtualHubVnetConnection -EnableOnlyIpv6Peering* boolean conversion.
- Added IPAM (IP Address Management) pool size bounds to creation/updates/output.
- Added *Get-AzExpressRouteCircuitAuthorizationKey* and *Get-AzExpressRoutePortAuthorizationKey*.
- Added Application Gateway WAF (Web Application Firewall) rule set display name/paranoia level output and CAPTCHA.
- Added *SourceGeoLocation* and *DestinationGeoLocation* to *New-AzFirewallPolicyNetworkRule*.
- Removed *FormatVersion* validation from *New-AzNetworkWatcherFlowLog* and *Set-AzNetworkWatcherFlowLog*.
<br/><br/>

**<u>Az.RecoveryServices</u>**
- Supported SQL instance snapshot backup features.
- Stopped Backup cmdlets overriding session-wide HTTPS certificate validation.
<br/><br/>

**<u>Az.Relay</u>**
- Updated to API *2026-07-01-preview*.
- Added dedicated clusters : *Get-AzRelayCluster*, *New-AzRelayCluster*, *Set-AzRelayCluster*, *Remove-AzRelayCluster*, *Get-AzRelayClusterNamespace*, *Get-AzRelayClusterSku* and *Get-AzRelayClusterAvailableClusterRegion*.
- Allowed *Set-AzRelayCluster* tag/capacity updates without *Location*/*SkuCapacity*.
- Added *ClusterArmId*/*MinimumTlsVersion* to *New-AzRelayNamespace*/*Update-AzRelayNamespace*.
- Fixed *Update-AzRelayNamespace* async *Accepted* responses.
<br/><br/>

**<u>Az.Resources</u>**
- Expanded deployment stack What-If create/delete details, including potential changes; removed redundant headers and aligned JSON formatting with Azure CLI [Azure/azure-cli#34156](https://github.com/Azure/azure-cli/pull/34156).
- Updated *Microsoft.Extensions.Caching.Memory* from 2.2.0 to 10.0.3.
<br/><br/>

**<u>Az.ServiceBus</u>**
- Updated default API to *2026-07-01-preview*.
<br/><br/>

**<u>Az.Sql</u>**
- Added *LockImmutability*/*ImmutabilityStatus* to *Set-AzSqlDatabaseBackupShortTermRetentionPolicy* and *Set-AzSqlInstanceDatabaseBackupShortTermRetentionPolicy*. Locking requires live Managed Instance databases and irreversible-action confirmation (*-Force* skips).
- Added Managed Instance long-term immutability to *Set-AzSqlInstanceDatabaseBackupLongTermRetentionPolicy* and policy/backup output.
- Added *Lock-AzSqlInstanceDatabaseLongTermRetentionBackupImmutability* and *Remove-AzSqlInstanceDatabaseLongTermRetentionBackupImmutability* for time-based immutability.
- Added legal holds via *Set-AzSqlInstanceDatabaseLongTermRetentionBackupLegalHold* and *Remove-AzSqlInstanceDatabaseLongTermRetentionBackupLegalHold*.
<br/><br/>

**<u>Az.StorageMover</u>**
- Updated to API *2026-05-01*.
- Added *Invoke-AzStorageMoverReconcileJobDefinition* for active runs.
- Added cross-tenant transfers : *EnableCrossTenantTransfer*/*AllowedStorageAccount* on blob/SMB (Server Message Block) endpoints; *IsCrossTenantJob*, *CrossTenantEndpointTenantId*/*CrossTenantEndpointResourceId* on *New-AzStorageMoverJobDefinition*.
- Added endpoint *EndpointKind*, NFS (Network File System) *NFSv4_1*, and *SourceType* FSX-EFS (NFS)/FSX-SMB (SMB).
- Added hourly *ScheduleRepeatInterval*, *SyncMode*/*MoverSyncedUntil* to job creation/updates and job type *OnPremToCloudAgentLess*.
<br/><br/>

**<u>Az.StorageSync</u>**
- Preserved *Set-AzStorageSyncServer* identity token errors and added server-specific guidance.
- Added *ServerId* to the help example and documented elevated sessions for Azure Arc-enabled servers.
<br/><br/>

**<u>Az.TrafficManager</u>**
- Added *New-AzTrafficManagerProfile -RecordType* (*A*, *AAAA* or *CNAME*), returned by profile get/create/set cmdlets [#29711].
- Updated to API *2026-09-01*.
<br/><br/>

**<u>Az.Websites</u>**
- Added *AsyncScalingEnabled* to *New-AzAppServicePlan* and *Set-AzAppServicePlan* to enable or disable asynchronous scaling for dedicated App Service plans
- Added Managed Instance identities, scripts, mounts, registry adapters, networking and Remote Desktop Protocol (RDP) to *New-AzAppServicePlan*/*Set-AzAppServicePlan*.
- Added *Get-AzAppServicePlanManagedInstance* (worker IPs/status), *Restart-AzAppServicePlanManagedInstance* (recycling) and *Get-AzAppServicePlanRdpCredential* (secure RDP credentials).
- Removed unsupported *New-AzStaticWebApp* identity/JSON sets.

---

##### Conclusion
Go update your Azure PowerShell module to benefit from the latest updates and possible configurations.

---

##### Sources
[PowerShell Gallery](https://www.powershellgallery.com/packages/Az/16.5.0)

---


Did you enjoy this post ? If you have any questions, comments or suggestions, please feel free to send me a message from the contact form.

Don't forget to follow us and share this post.