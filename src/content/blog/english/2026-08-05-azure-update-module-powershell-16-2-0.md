---
title: "PowerShell Azure module updated to version 16.2.0"
meta_title: ""
description: ""
date: 2026-08-05T10:00:00-05:00
image: "/images/blog/azure/azure_update_module_powershell_16_2_0_thumbnail.png"
categories: ["Azure"]
author: "Maxime Hiez"
tags: ["Module", "Update", "PowerShell"]
draft: false
---
---

##### Introduction
Microsoft recently published the new version 16.2.0 of the PowerShell module for Microsoft Azure.

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
Version 16.2.0 includes the following updates :

**<u>Az.Accounts</u>**
- Upgraded *Azure.Core* dependency from version *1.56.0* to *1.57.0*.
- Upgraded *System.ClientModel* dependency from version *1.12.0* to *1.13.0*.
<br/><br/>

**<u>Az.Cdn</u>**
- Upgraded API version to *2026-04-01-preview*.
- Fixed CDN long-running operations that returned completed resource responses without a *Location* header.
<br/><br/>

**<u>Az.Compute</u>**
- Deprecated installing the legacy *Azure Enhanced Monitoring* (*AEM*) extension for SAP on Virtual Machines (VMs) ; *Set-AzVMAEMExtension* now installs the new extension by default.
- Added *New-AzInterconnectBlock*, *Get-AzInterconnectBlock*, *Update-AzInterconnectBlock*, and *Remove-AzInterconnectBlock* cmdlets to manage *Microsoft.Compute/interconnectBlocks* resources for high-performance artificial intelligence (*AI*) and machine learning (*ML*) workloads.
- Marked the *-EnableWAD*, *-SkipStorage* and *-InstallNewExtension* parameters of *Set-AzVMAEMExtension* as deprecated using breaking-change attributes. They will be removed in a future major release.
- Preserved CMD-special characters in *Invoke-AzVMRunCommand* and *Invoke-AzVmssVMRunCommand* parameter values for Windows PowerShell RunCommand execution. [#29880]
<br/><br/>

**<u>Az.CosmosDB</u>**
- Upgraded *Azure.Security.KeyVault.Keys* to version *4.10.0* to align with other modules.
<br/><br/>

**<u>Az.EventHub</u>**
- Added parameter *IPAddressType* to cmdlets *New-AzEventHubNamespace* and *Set-AzEventHubNamespace*.
<br/><br/>

**<u>Az.FrontDoor</u>**
- Added support for *Front Door WAF* managed rule exceptions :
    - Added *ExceptionListException* to *New-AzFrontDoorWafPolicy* and *Update-AzFrontDoorWafPolicy*.
    - Added helper cmdlets for WAF managed rule exception scopes.
<br/><br/>

**<u>Az.Functions</u>**
- Updated the Function App stacks parser to handle a runtime definition that does not include a *FUNCTIONS_WORKER_RUNTIME* app setting. [#29630]
- Added support in *New-AzFunctionApp* to create Go function apps hosted in *Flex Consumption* plans.
<br/><br/>

**<u>Az.KeyVault</u>**
- Populated *KeySize* in *Get-AzKeyVaultKey* output for additional key types when available ; previously only RSA keys had a size populated.
- Upgraded *Azure.Security.KeyVault.Keys* dependency from version *4.6.0-beta.1* to *4.10.0*.
<br/><br/>

**<u>Az.NetAppFiles</u>**
- Added *FileAccessLogs* to *Get-AzNetAppFilesCache* output.
- Added *Breakthrough Mode* support for Azure NetApp Files volumes :
    - Added *-BreakthroughMode* to *New-AzNetAppFilesVolume* and *New-AzNetAppFilesVolumeGroup*.
    - Added *BreakthroughMode* to volume output in *Get-AzNetAppFilesVolume* and *Get-AzNetAppFilesVolumeGroup*.
<br/><br/>

**<u>Az.Network</u>**
- Added new cmdlets for *ConnectionPolicy* management under *VirtualHub* :
    - *Get-AzConnectionPolicy* : Retrieve one or all ConnectionPolicy resources under a VirtualHub.
    - *New-AzConnectionPolicy* : Create a new ConnectionPolicy under a VirtualHub.
    - *Set-AzConnectionPolicy* : Update an existing ConnectionPolicy under a VirtualHub.
    - *Remove-AzConnectionPolicy* : Delete a ConnectionPolicy from a VirtualHub.
- Added *Managed HSM* support to Application Gateway SSL certificate cmdlets (*New-AzApplicationGatewaySslCertificate*, *Set-AzApplicationGatewaySslCertificate*, *Add-AzApplicationGatewaySslCertificate*) with *-HsmKeyId* and *-HsmPublicCertData* parameters.
- Updated Virtual Network and Virtual Network Appliance cmdlets to use new properties.
    - *New-AzVirtualNetwork* : Added *-SummarizedGatewayPrefix* parameter to specify summarized gateway prefixes advertised for the virtual network, and exposed *SummarizedGatewayPrefixes* on the returned object.
    - *New-AzVirtualNetworkAppliance* : Added *-PrivateIPAddressVersion* parameter (*IPv4*, *DualStack*) to support dual-stack Virtual Network Appliances, and exposed *PrivateIPAddressVersion* on the returned object.
- Added support for equal-cost multi-path (*ECMP*) routing in route tables.
    - Added the *VirtualApplianceEcmp* next hop type to *New-AzRouteConfig*, *Add-AzRouteConfig* and *Set-AzRouteConfig*.
    - Extended the *-NextHopIpAddress* parameter to accept a list of next hop IP addresses (2 to 64) for ECMP routes when the next hop type is *VirtualApplianceEcmp*.
    - Added the *NextHop* property to the route output returned by *Get-AzRouteTable*.
- Added *DisablePeeringRoute* support for Route Table.
    - Added *-DisablePeeringRoute* parameter to *New-AzRouteTable* cmdlet.
    - Supported values are *None* and *All*.
- Added property *Nat64* to *NatGateway* and support for it in the following cmdlets :
    - *New-AzNatGateway*
    - *Set-AzNatGateway*
- Fixed *Get-AzPrivateDnsZoneGroup* list mode passing the resource group and private endpoint names to the SDK in the wrong order, which caused a *ResourceGroupNotFound* error when listing private DNS zone groups without the *-Name* parameter.
- Added properties *ServiceTag*, *ReadinessState*, *Description* and *OutboundSupported* to *Get-AzNetworkSecurityPerimeterAssociableResourceType* response.
- Removed validations to allow newly added *AuxiliarySkus* in *New-AzNetworkInterface* command without needing to add them in *ValidateSet*.
- Added new cmdlets for *DDoS* Custom Policy management :
    - *New-AzDdosCustomPolicy* : Create a new DDoS custom policy with detection rules.
    - *New-AzDdosCustomPolicy* : Requires at least one detection rule at creation time.
    - *New-AzDdosCustomPolicyDetectionRule* : Create a DDoS custom policy detection rule.
    - *Add-AzDdosCustomPolicyDetectionRule* : Add a detection rule to an in-memory DDoS custom policy before persisting it with *Set-AzDdosCustomPolicy*.
    - *Get-AzDdosCustomPolicy* : Retrieve a DDoS custom policy by resource group and name.
    - *Remove-AzDdosCustomPolicy* : Remove a DDoS custom policy.
    - *Remove-AzDdosCustomPolicyDetectionRule* and *Set-AzDdosCustomPolicy* : Support the load balancer style workflow to mutate a local policy object and then persist it.
    - Supports multiple detection rules with configurable traffic type (*Tcp*, *Udp*, *TcpSyn*) and packets per second thresholds.
- Updated the API version of *Microsoft.HardwareSecurityModules/cloudHsmClusters* to *2025-03-31* for Private Link common cmdlets.
- Onboarded *Microsoft.HardwareSecurityModules/paymentHsmClusters* to Private Link common cmdlets.
- Fixed an issue where *VerifyClientAuthMode* was not preserved during PowerShell and SDK model conversions for Application Gateway client authentication configuration.
- Added cmdlets for cloud service public IP address operations :
    - *Invoke-AzPublicIpAddressCloudServiceReservation* : Reserve a cloud service public IP or roll back to dynamic allocation (*-IsRollback*).
    - *Invoke-AzPublicIpAddressDisassociateCloudServiceReservedIp* : Disassociate a standalone reserved public IP from a cloud service public IP. Use *-PublicIpArmId* for the *Azure Resource Manager* (*ARM*) resource ID of the standalone public IP.
<br/><br/>

**<u>Az.RecoveryServices</u>**
- Added *Cross Subscription Backup* (*CSB*) support for Azure VM :
    - Added optional *-ContainerSubscriptionId* parameter in *Enable-AzRecoveryServicesBackupProtection* to configure backup for a VM residing in a different subscription than the vault.
    - Added *Original Location Recovery* (*OLR*) support for cross-subscription protected items in *Restore-AzRecoveryServicesBackupItem* (the container subscription is derived from the recovery point, no additional input required).
    - Added *ContainerSubscriptionId* property to the backup item response of *Get-AzRecoveryServicesBackupItem*.
    - Added *ContainerSubscriptionId* property to the detailed job response of *Get-AzRecoveryServicesBackupJobDetail*.
    - Added client-side validation when *-ContainerSubscriptionId* is supplied so a non-existent VM, resource group or subscription, or a VM in a different region than the vault, fails with a clear, VM-specific error message.
- Fixed *Private Disk Access* parameters being silently dropped when adding disks to, reprotecting, or cluster-reprotecting an Azure-to-Azure managed-disk replication.
    - *Add-AzRecoveryServicesAsrReplicationProtectedItemDisk* now honors *-RecoveryNetworkAccessPolicy*, *-RecoveryDiskAccessId* and *-RecoveryPublicNetworkAccess* supplied on the disk replication configuration.
    - *Update-AzRecoveryServicesAsrProtectionDirection* (reprotect) forwards the same three fields on the switch-protection call.
    - *Update-AzRecoveryServicesAsrClusterProtectionDirection* (cluster reprotect) forwards the same three fields on the cluster switch-protection call.
- Added support for configuring *Cost Management Settings* (granularity level) on Recovery Services vaults via *New-AzRecoveryServicesVault* and *Update-AzRecoveryServicesVault*.
<br/><br/>

**<u>Az.Resources</u>**
- Added deployment stack *WhatIfResult* cmdlets for resource group, subscription and management group scopes.
    - Added help content and aligned new parameter names with Azure PowerShell naming conventions.
    - Exported all deployment stack WhatIfResult cmdlets from the module manifest.
<br/><br/>

**<u>Az.ServiceBus</u>**
- Added parameters *GeoDataReplicationMaxReplicationLagDurationInSecond*, *GeoDataReplicationLocation* and *IPAddressType* to cmdlets *New-AzServiceBusNamespace* and *Set-AzServiceBusNamespace*.
- Added new cmdlets for doing namespace failover *Start-AzServiceBusNamespaceFailOver*.
- Added new cmdlets for generating replication object for Replication parameter *New-AzServiceBusLocationsNameObject*.
- Added new cmdlets *Get-AzServiceBusNetworkSecurityPerimeterConfiguration* and *Get-AzServiceBusNetworkSecurityPerimeterConfigurationsForAssociation*.
<br/><br/>

**<u>Az.Storage</u>**
- Fixed a *path traversal* issue in *Get-AzStorageBlobContent* and *Get-AzDataLakeGen2ItemContent* where a source blob or file name containing directory traversal segments (for example "../") could write content outside the specified destination directory.

---

##### Conclusion
Go update your Azure PowerShell module to benefit from the latest updates and possible configurations.

---

##### Sources
[PowerShell Gallery](https://www.powershellgallery.com/packages/Az/16.2.0)

---


Did you enjoy this post ? If you have any questions, comments or suggestions, please feel free to send me a message from the contact form.

Don't forget to follow us and share this post.