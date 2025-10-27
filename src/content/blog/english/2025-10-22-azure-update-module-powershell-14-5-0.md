---
title: "Update to version 14.5.0 of the Azure PowerShell module"
meta_title: ""
description: ""
date: 2025-10-22T10:00:00-05:00
image: "/images/blog/azure/azure_update_module_powershell_14_5_0_thumbnail.png"
categories: ["Azure"]
author: "Maxime Hiez"
tags: ["Module", "Update", "PowerShell"]
draft: false
---
---

##### Introduction
Microsoft recently released the new version 14.5.0 of the PowerShell module for Microsoft Azure.

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
Version 14.5.0 contains the following updates :

**<u>Az.Automation</u>**
- Fixed runbook_type : 'PowerShell72' [#24779][#23967].
<br/><br/>

**<u>Az.CloudService</u>**
- Preannounced breaking changes. Please refer to https://go.microsoft.com/fwlink/?linkid=2333229.
<br/><br/>

**<u>Az.Compute</u>**
- Added *-InstantAccessDurationMinutes* parameter to *New-AzSnapshotConfig*.
- Added *SecureVMGuestStateSAS* parameter to *Grant-AzSnapshotAccess*.
- Updated SDK to use *2025-04-01* version of the *ComputeRP API* for *Compute* related cmdlets.
<br/><br/>

**<u>Az.Databricks</u>**
- Preannounced breaking changes. Please refer to https://go.microsoft.com/fwlink/?linkid=2333229.
<br/><br/>

**<u>Az.DataFactory</u>**
- Added support for *Salesforce V2 partitionOption* feature.
- Added support MI In Lakehouse And Warehouse connection.
<br/><br/>

**<u>Az.DataMigration</u>**
- General availability for module *Az.DataMigration*.
- Upgraded Data Migration API to stable version *2025-06-30*.
- Added support for retrying database migrations and for deleting SQL VM and SQL MI Database Migration Services.
- Added cmdlets :
    - *Invoke-AzDataMigrationRetryToSqlDb*
    - *Remove-AzDataMigrationToSqlManagedInstance*
    - *Remove-AzDataMigrationToSqlVM*
<br/><br/>

**<u>Az.FirmwareAnalysis</u>**
- General availability for module *Az.FirmwareAnalysis*.
- Upgraded API support to include *2025-08-02*.
- Added usage metric support via the *Get-AzFirmwareAnalysisUsageMetric* cmdlet.
<br/><br/>

**<u>Az.HDInsight</u>**
- Supported create cluster with entra user as gateway credential to replace use username and password.
    - Added parameter *EntraUserIdentity* to cmdlet *New-AzHDInsightCluster* to support creating Entra user clusters using one or more *ObjectId* or *Upn*.
    - Added parameter *EntraUserFullInfo* to cmdlet *New-AzHDInsightCluster* to support creating Entra user clusters using an array of hashtables that include *ObjectId*, *Upn*, and *DisplayName*.
- Supported update Entra user information for an existing Entra user cluster.
    - Added parameter *EntraUserIdentity* to cmdlet *Set-AzHDInsightGatewayCredential* to support update Entra user clusters using one or more *ObjectId* or *Upn*.
    - Added parameter *EntraUserFullInfo* to cmdlet *Set-AzHDInsightGatewayCredential* to support update Entra user clusters using an array of hashtables that include *ObjectId*, *Upn*, and *DisplayName*.
- Added support for using WASB storage with Managed Identity (MSI) in the *New-AzHDInsightCluster* cmdlet.
    - Users can specify the *StorageAccountManagedIdentity* parameter to use MSI as a wasb storage credential when creating a cluster, as an alternative to using *StorageAccountKey*.
<br/><br/>

**<u>Az.KeyVault</u>**
- Added Managed HSM network rule cmdlets mirroring existing Key Vault network rule management :
    - *New-AzKeyVaultManagedHsmNetworkRuleSetObject*
    - *Add-AzKeyVaultManagedHsmNetworkRule*
    - *Remove-AzKeyVaultManagedHsmNetworkRule*
    - *Update-AzKeyVaultManagedHsmNetworkRuleSet*
- *New-AzKeyVaultManagedHsm* now supports *-NetworkRuleSet* parameter to specify Managed HSM network rules (default action, bypass, IP ranges, virtual network resource IDs) at creation.
- Managed HSM network rule enforcement : When any IP or Virtual Network rules are present the client now automatically coerces DefaultAction to Deny (service requirement) and adds a final safeguard at request dispatch. Subscriptions must be allow-listed by the service to use IP / Service Tag ACL features.
<br/><br/>

**<u>Az.LoadTesting</u>**
- Preannounced breaking changes. Please refer to https://go.microsoft.com/fwlink/?linkid=2333229.
<br/><br/>

**<u>Az.Migrate</u>**
- Fixed bugs in *New-AzMigrateLocalDiskMappingObject* : Only validate for non-512 physical sector size of VHD when *PhysicalSectorSize* parameter is given.
- Fixed bugs in *New-AzMigrateLocalServerReplication* : Only validate for non-512 physical sector size of VHD when *PhysicalSectorSize* parameter is given. Removed reserved words validation for source disk names as it is no longer required. Added ARM id validation for input parameters.
- Fixed bugs in *Set-AzMigrateLocalServerReplication* : Added ARM id validation for input parameters.
- Fixed bugs in *Get-AzMigrateLocalServerReplication* : Added ARM id validation for input parameters.
- Enhanced *Get-AzMigrateServerMigrationStatus* to add support for the *-Expedite* parameter.
<br/><br/>

**<u>Az.Network</u>**
- Added deprecation warning for cmdlet *Invoke-AzFirewallPacketCapture*.
- Added new cmdlet for Invoke *PacketCaptureOperation* on Azure Firewall :
    - *Invoke-AzFirewallPacketCaptureOperation*
- Updated cmdlet to add the mandatory property of *Operation* and made all other properties not mandatory for Azure Firewall Packet Capture Parameters. Updated corresponding cmdlets :
    - *New-AzFirewallPacketCaptureParameter*
- Added new cmdlet for List *NetworkSecurityPerimeter* ServiceTags :
    - *Get-AzNetworkSecurityPerimeterServiceTag*
- Added properties *DedicatedBackendConnection*, *ValidateCertChainAndExpiry*, *ValidateSNI*, and *SniName* to Application Gateway Backend HTTP Settings, as well as support for them in the following cmdlets :
    - *New-AzApplicationGatewayBackendHttpSetting*
    - *Add-AzApplicationGatewayBackendHttpSetting*
    - *Set-AzApplicationGatewayBackendHttpSetting*
- Added cmdlet *Get-AzAllVirtualNetworkGatewayRadiusServerSecret* to fetch list of VirtualNetworkGateway VpnClientConfiguration Radius servers and corresponding radius secrets.
- Added cmdlet *Get-AzAllVpnServerConfigurationRadiusServerSecret* to fetch list of VirtualWan VpnServerConfiguration Radius servers and corresponding radius secrets.
<br/><br/>

**<u>Az.RecoveryServices</u>**
- Added Cross region restore support for new region - *eastus3*.
- Added support for reregistration of a backup item to another vault.
<br/><br/>

**<u>Az.ResourceMover</u>**
- Preannounced breaking changes. Please refer to https://go.microsoft.com/fwlink/?linkid=2333229.
<br/><br/>

**<u>Az.Resources</u>**
- Fixed issue where RoleAssignment cmdlets did not properly handle insufficient MSGraph permissions [#28583].
<br/><br/>

**<u>Az.SecurityInsights</u>**
- Preannounced breaking changes. Please refer to https://go.microsoft.com/fwlink/?linkid=2333229.
<br/><br/>

**<u>Az.ServiceFabric</u>**
- Changed from *Basic* to *Standard* SKUs for loadbalancers and public IP addresses for *New-AzServiceFabricCluster* and *Add-AzServiceFabricNodeType* as *Basic* SKUs are being deprecated.
- Added parameters *EnableAutoOsUpgrade* and *AllowRdpAccess* to *New-AzServiceFabricManagedCluster* and *Set-AzServiceFabricManagedCluster*.
- Added parameters *ZoneBalance*, *AllowOverProvisioning*, and *Zone* to *New-AzServiceFabricManagedNodeType* and *Set-AzServiceFabricManagedNodeType*.
- Added preannoucement for removing *Reimage* parameters from *Set-AzServiceFabricManagedNodeType*.
- Added new cmdlets for managed node types
    - *Invoke-AzServiceFabricDeallocateManagedNodeType*
    - *Invoke-AzServiceFabricRedeployManagedNodeType*
    - *Invoke-AzServiceFabricReimageManagedNodeType*
    - *Start-AzServiceFabricManagedNodeType*
- Marked *NodeName* as non-required and added parameter *UpdateType* in *Restart-AzServiceFabricManagedNodeType* to allow UD by UD restarts of all nodes in node type.
- Renamed *Remove-AzServiceFabricManagedNodeType* parameter sets to use *Remove* instead of *Delete* for consistency with cmdlet name.
<br/><br/>

**<u>Az.SignalR</u>**
- Added cmdlets for managing custom domains :
    - *New-AzSignalRCustomDomain*
    - *Get-AzSignalRCustomDomain*
    - *Remove-AzSignalRCustomDomain*
    - Update-AzSignalRCustomDomain*
- Added cmdlets for managing custom certificates :
    - *New-AzSignalRCustomCertificate*
    - *Get-AzSignalRCustomCertificate*
    - *Remove-AzSignalRCustomCertificate*
    - *Update-AzSignalRCustomCertificate*
- Added *EnableSystemAssignedIdentity* and *UserAssignedIdentity* for managed identity to *New-AzSignalR* and *Update-AzSignalR*.
<br/><br/>

**<u>Az.Sql</u>**
- Improved parameter validation for the *EnableSoftDelete* and *SoftDeleteRetentionDays* parameters.
- Added *EnableSoftDelete* and *SoftDeleteRetentionDays* to *New-AzSqlServer* to support soft-delete retention.
- Added *EnableSoftDelete* and *SoftDeleteRetentionDays* to *Set-AzSqlServer* to support soft-delete retention.
- Added *Restore-AzSqlServer* cmdlet to restore a deleted Azure SQL server within the retention period.
<br/><br/>

**<u>Az.StackHCI</u>**
- Modified the Cluster Registration to use Managed Service Identity instead of AAD App based registration for new OS versions.
<br/><br/>

**<u>Az.Storage</u>**
- Supported Zone and ZonePlacementPolicy on Storage accounts : *New-AzStorageAccount*, *Set-AzStorageAccount*.
- Supported listing Storage SKU : *Get-AzStorageSku*.
- Supported enabling SMB Oauth on Storage accounts : *New-AzStorageAccount*, *Set-AzStorageAccount*.
- Supported Enable Metrics when set object replication policy : *Set-AzStorageObjectReplicationPolicy*.
- Supported create and get symbolic link in NFS File Share : *New-AzStorageFileSymbolicLink*, *Get-AzStorageFileSymbolicLink*.
<br/><br/>

**<u>Az.StorageDiscovery</u>**
- General availability for module *Az.StorageDiscovery*.
<br/><br/>

**<u>Az.StorageMover</u>**
- Added  support for new API version *2025-07-01*.
- Included new endpoint types supported in the API version : *MultiCloudConnector*, *NFSFileShare*.
- Enhanced help documentation for *New-AzStorageMoverAzStorageContainerEndpoint* and *New-AzStorageMoverMultiCloudConnectorEndpoint* with identity details.
- Corrected online version link for *Update-AzStorageMoverAzNfsFileShareEndpoint* help documentation.
- Added identity information to the output properties in help documentation for storage container and multi-cloud connector endpoints.
<br/><br/>

**<u>Az.Websites</u>**
- Preannounced breaking changes. Please refer to https://go.microsoft.com/fwlink/?linkid=2333229.
<br/><br/>

**<u>Az.Workloads</u>**
- Preannounced breaking changes. Please refer to https://go.microsoft.com/fwlink/?linkid=2333229.

---

##### Conclusion
Allez faire la mise à jour de votre module PowerShell pour Azure pour pouvoir bénéficier des dernières mises à jour et configurations possibles.

---

##### Sources
[PowerShell Gallery](https://www.powershellgallery.com/packages/Az/14.5.0)

---


Did you enjoy this post ? If you have any questions, comments or suggestions, please feel free to send me a message from the contact form.

Don't forget to follow us and share this post.