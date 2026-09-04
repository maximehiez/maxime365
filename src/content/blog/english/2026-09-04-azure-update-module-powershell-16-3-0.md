---
title: "PowerShell Azure module updated to version 16.3.0"
meta_title: ""
description: ""
date: 2026-09-04T10:00:00-05:00
image: "/images/blog/azure/azure_update_module_powershell_16_3_0_thumbnail.png"
categories: ["Azure"]
author: "Maxime Hiez"
tags: ["Module", "Update", "PowerShell"]
draft: false
---
---

##### Introduction
Microsoft recently published the new version 16.3.0 of the PowerShell module for Microsoft Azure.

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
Version 16.3.0 includes the following updates :

**<u>Az.Accounts</u>**
- Fixed *Get-AzSubscription* to throw a clear error instead of returning nothing when *-TenantId* does not match the current Managed Service Identity (*MSI*) context. [#25710]
<br/><br/>

**<u>Az.Cdn</u>**
- Added *ChangeSafety* Support.
<br/><br/>

**<u>Az.Compute</u>**
- Added *-WireServerUseLocalFileRules* and *-ImdsUseLocalFileRules* to *Set-AzVMProxyAgentSetting* and *Set-AzVmssProxyAgentSetting* to configure local file rules for Virtual Machine (*VM*) and Virtual Machine Scale Set (*VMSS*) host endpoints. [#30055]
- Updated *ComputeRP*, *DiskRP*, and *GalleryRP* cmdlets to API versions *2026-04-01*, *2026-03-02*, and *2025-12-03*, respectively.
- Added *-ProcessorMode* to VM and VMSS create and update cmdlets : *New-AzVMConfig*, *New-AzVM*, *Update-AzVM*, *New-AzVmssConfig*, *New-AzVmss*, and *Update-AzVmss*. [#30012]
- Added *-ForceDeallocate* to *Stop-AzVM* to force deallocate a VM during stop ; it cannot be used with *-Hibernate*, *-StayProvisioned*, or *-SkipShutdown*.
- Added *-ReservationType* to *New-AzCapacityReservationGroup* and *Update-AzCapacityReservationGroup* for *Open* capacity reservation groups, and exposed *ReservationType* in output.
- Added *-DisableCapacityReservationAssignment* to *New-AzVM*, *New-AzVMConfig*, and *Update-AzVM* to opt a VM out of capacity reservation.
- Added *CapacityReservationType* to *Get-AzVM -Status* instance views.
- Added *-DisableCapacityReservationAssignment* to *New-AzVmss*, *New-AzVmssConfig*, and *Update-AzVmss* to opt VMSS instances out of capacity reservation.
- Added *CapacityReservation* property to *Get-AzVmssVM* output and *CapacityReservationType* property to its *-InstanceView* output.
<br/><br/>

**<u>Az.CosmosDB</u>**
- Regenerated the Cosmos DB management SDK with stable API version *2026-03-15*.
<br/><br/>

**<u>Az.IotHub</u>**
- Fixed *New-AzIotHubKey* to generate secure shared access keys during primary or secondary key rotation.
<br/><br/>

**<u>Az.KeyVault</u>**
- Upgraded the Key Vault control plane API version to *2026-02-01*.
    - Earlier API versions retire on February 27, 2027 ; this upgrade keeps *Az.KeyVault* working afterward.
    - No action or cmdlet behavior change is required. *New-AzKeyVault* has created vaults with *RBAC* (Role-Based Access Control) enabled by default since Az.KeyVault 6.0.0 and sends this setting explicitly, so the new service default does not affect it. Use *DisableRbacAuthorization* for access policies.
<br/><br/>

**<u>Az.NetAppFiles</u>**
- Added deprecation notices to Azure NetApp Files subvolume cmdlets.
- Added breaking change notices for removing *EnableSubvolume* and the *EnableSubvolumes* volume output property.
- Fixed the output type of *Get-AzNetAppFilesVolumeQuotaRule* from *PSNetAppFilesVolume* to *PSNetAppFilesVolumeQuotaRule*.
<br/><br/>

**<u>Az.Network</u>**
- Added *Get-AzExpressRouteLag*, *New-AzExpressRouteLag*, *Set-AzExpressRouteLag*, *Remove-AzExpressRouteLag*, *New-AzExpressRouteLagLOA*, *Get-AzExpressRouteLagLink*, and *Get-AzExpressRouteLagMember* for *ExpressRouteLag* resources (Microsoft.Network *2025-09-01* API).
    - The cmdlets support CRUD operations, letter of authorization generation, and link and member retrieval.
    - Added *New-AzExpressRouteLagIdentity*, *Get-AzExpressRouteLagIdentity*, *Set-AzExpressRouteLagIdentity*, and *Remove-AzExpressRouteLagIdentity* for the user-assigned managed identity on an *ExpressRouteLag*.
- Added *Get-AzAddressPrefixSet*, *New-AzAddressPrefixSet*, *Set-AzAddressPrefixSet*, and *Remove-AzAddressPrefixSet* to manage IPv4 and IPv6 CIDR (*Classless Inter-Domain Routing*) prefixes for application security groups.
- Added *Move-AzVirtualNetworkIpConfiguration* to move secondary private IP configurations between network interfaces in a virtual network, and *New-AzMoveIpConfigurationItem* to create source and target pairs. Supports *-AsJob*.
- Added *-AddressPrefixV6* to *New-AzVirtualHub* and *Update-AzVirtualHub*, and *-EnableOnlyIpv6Peering* to *New-AzVirtualHubVnetConnection*.
- Added support for managing Kube Selector Groups on a firewall policy.
    - *Get-AzFirewallPolicyKubeSelectorGroup*, *New-AzFirewallPolicyKubeSelectorGroup*, *Set-AzFirewallPolicyKubeSelectorGroup*, *Remove-AzFirewallPolicyKubeSelectorGroup*.
    - Added *New-AzFirewallPolicyKubeLabelSelector* and *New-AzFirewallPolicyLabelSelectorExpression* for pod and namespace label selectors.
- Exposed read-only AFC (*Azure Firewall for Containers*) properties : *AfcManaged* on *Get-AzFirewallPolicy* and the *AfcConfiguration.ServiceEndpoint* control-plane endpoint on *Get-AzFirewall*. The endpoint cannot be set through *New-AzFirewall* or *Set-AzFirewall*.
- Upgraded Network SDK to API version *2025-09-01* ; added *DisableDefaultServerHeaderInResponse* to *Get-AzApplicationGateway* output and *-DisableDefaultServerHeaderInResponse* to *New-AzApplicationGateway*.
- Added read-only *UpgradedToV2* output to *Get-AzPublicIpAddress* and *Get-AzPublicIpPrefix* for Standard-to-StandardV2 SKU upgrades.
- Added *Get-AzInterconnectGroup* to retrieve one or more InterconnectGroups, and *New-AzInterconnectGroup*, *Set-AzInterconnectGroup*, and *Remove-AzInterconnectGroup* to create, update, and delete them.
    - Added *Get-AzInterconnectGroupSubgroup* to retrieve one or all subgroups and *Get-AzInterconnectGroupNodeAvailability* to retrieve node availability.
- Added *-DdosCustomPolicyId* and *-RemoveDdosCustomPolicy* to *Set-AzPublicIpAddress* to add or remove DDoS custom policy (*DCP*) associations on supported Public IP address attachments, without requiring a specific DDoS protection mode.
- Added *New-AzFirstPartyServiceTag*, *Get-AzFirstPartyServiceTag*, *Set-AzFirstPartyServiceTag*, and *Remove-AzFirstPartyServiceTag* to create, retrieve, update, and remove First Party Service Tags, and association support to *New-AzPublicIpTag*.
- Added *Get-AzVirtualNetworkGatewayEffectiveRoute* for Virtual Network Gateway effective routes.
- Added *-Mode* and *-Scope* to *New-AzLoadBalancer*. Use *-Mode Advanced* with *-Scope Public* or *-Scope Private* to create an advanced (*Banksy*-based) Standard SKU load balancer ; the mode cannot be changed afterward.
- Added the *-EnableConnectionTracking* switch to *New-AzLoadBalancerFrontendIpConfig*, *Add-AzLoadBalancerFrontendIpConfig*, and *Set-AzLoadBalancerFrontendIpConfig*.
    - Enables UDP (*User Datagram Protocol*) flow tracking for the frontend IP configuration so packets in the same flow consistently reach the same backend instance, taking precedence over rule-level settings. Requires a load balancer created with *-Mode Advanced* and *-Scope*.
- Added multi-cloud ExpressRoute circuit support with the *MultiCloud* value for *-SkuTier*, and *-PartnerAccountId* and *-ActivationKey* on *New-AzExpressRouteCircuit*.
    - Exposed *PartnerAccountId*, *ActivationKey*, and *ResiliencyLevel* on *PSExpressRouteCircuit*.
- Added *RoutingConfiguration*, *VirtualHubVnetConnection*, and *VirtualHubVnetConnectionId* parameters to *Add-AzRouteServerPeer* and *Update-AzRouteServerPeer*.
    - Supports inbound and outbound route maps and a hub virtual network connection by object or resource ID.
- Added *RoutingConfiguration* parameter to *New-AzVirtualNetworkGatewayConnection* and *Set-AzVirtualNetworkGatewayConnection*.
    - Supports inbound and outbound route maps.
<br/><br/>

**<u>Az.RecoveryServices</u>**
- Added *Cross Region Restore* for Azure File Share backups through *Get-AzRecoveryServicesBackupItem -UseSecondaryRegion*, *Get-AzRecoveryServicesBackupRecoveryPoint -UseSecondaryRegion*, and *Restore-AzRecoveryServicesBackupItem -RestoreToSecondaryRegion*.
- Refined soft delete behavior for Azure File Share backup items.
    - *Undo-AzRecoveryServicesBackupItemDeletion* now errors unless the item is soft-deleted (*ToBeDeleted*), avoiding an invalid undelete request.
    - Corrected *DateOfPurge* to use the remaining deferred-delete window returned by the service instead of a fixed 14 days.
<br/><br/>

**<u>Az.Resources</u>**
- Updated Policy cmdlets to use *2026-01-01* API.
- Added *Get-AzPolicyEnrollment*, *New-AzPolicyEnrollment*, *Remove-AzPolicyEnrollment*, and *Update-AzPolicyEnrollment* for Policy Enrollments.
- Added a template deployment what-if notice for generally available Deployment Stacks What-If to reduce result noise.
- Renamed *DenySettingsApplyToChildScope* to *DenySettingsApplyToChildScopes* for deployment stack *WhatIfResult* cmdlets, retaining an alias.
- Added *ResourcesWithoutDeleteSupport* and tag support to deployment stack *WhatIfResult* cmdlets and output.
<br/><br/>

**<u>Az.Security</u>**
- Added SQL Vulnerability Assessment cmdlets for the *2026-04-01-preview* API :
    - *Get-AzSecuritySqlVulnerabilityAssessmentSetting*, *New-AzSecuritySqlVulnerabilityAssessmentSetting*, *Update-AzSecuritySqlVulnerabilityAssessmentSetting*, and *Remove-AzSecuritySqlVulnerabilityAssessmentSetting*.
    - *Get-AzSecuritySqlVulnerabilityAssessmentBaselineRule*, *New-AzSecuritySqlVulnerabilityAssessmentBaselineRule*, *Add-AzSecuritySqlVulnerabilityAssessmentBaselineRule*, and *Remove-AzSecuritySqlVulnerabilityAssessmentBaselineRule*.
    - *Get-AzSecuritySqlVulnerabilityAssessmentScan*, *Get-AzSecuritySqlVulnerabilityAssessmentScanRuleResult*, and *Invoke-AzSecurityInitiateSqlVulnerabilityAssessmentScan*. The per-rule name avoids a collision with legacy *Get-AzSecuritySqlVulnerabilityAssessmentScanResult*.
<br/><br/>

**<u>Az.Sql</u>**
- Added multi-database Managed Instance links through *LinkMode* on *New-AzSqlInstanceLink* and database membership updates on *Update-AzSqlInstanceLink*.
- Enhanced *Get-AzSqlDeletedServer* subscription-level queries by making location optional and adding *ScheduledPurgeTime* and *Location* output.
<br/><br/>

**<u>Az.Websites</u>**
- Added App Service Environment plan create and update support for Isolated v4 and memory-optimized Isolated v4 SKUs.

---

##### Conclusion
Go update your Azure PowerShell module to benefit from the latest updates and possible configurations.

---

##### Sources
[PowerShell Gallery](https://www.powershellgallery.com/packages/Az/16.3.0)

---


Did you enjoy this post ? If you have any questions, comments or suggestions, please feel free to send me a message from the contact form.

Don't forget to follow us and share this post.