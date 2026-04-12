---
title: "PowerShell Azure module updated to version 14.1.0"
meta_title: ""
description: ""
date: 2025-06-06T10:00:00-05:00
image: "/images/blog/azure/azure_update_module_powershell_14_1_0_thumbnail.png"
categories: ["Azure"]
author: "Maxime Hiez"
tags: ["Module", "Update", "PowerShell"]
draft: false
---
---

##### Introduction
Microsoft recently released the new version 14.1.0 of the PowerShell module for Microsoft Azure.

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
Version 14.1.0 contains the following updates :

**<u>Az.Accounts</u>**
- Upgrade *Azure.Core* to 1.45.0.
<br/><br/>

**<u>Az.Compute</u>**
- Added breaking change message for *New-AzVM* and *New-AzVmss* cmdlets.
<br/><br/>

**<u>Az.DataFactory</u>**
- Added more support for *SparkV2* and *HiveV2* connection properties.
<br/><br/>

**<u>Az.Migrate</u>**
- Implemented the *Get-AzMigrateServerMigrationStatus* cmdlet to retrieve the replication status of servers in Azure Migrate.
- Fixed bugs in *New-AzMigrateLocalServerReplication* that caused *HyperVSite* or *VMwareSite* not found.
<br/><br/>

**<u>Az.MySql</u>**
- Enhanced *Restore-AzMySqlFlexibleServer* functionality with *GeoRestore* support.
<br/><br/>

**<u>Az.Network</u>**
- Added properties *PublicIpAddressesV6*, *PublicIpPrefixesV6*, and *SourceVirtualNetwork* to NatGateway, as well as support for it for the following cmdlets :
    - *New-AzNatGateway*
    - *Set-AzNatGateway*
- Added property *DefaultPublicNatGateway* to *VirtualNetwork*.
- Onboarded *Microsoft.FluidRelay/fluidRelayServers* to private link cmdlets.
- Added cmdlet *Get-AzLoadBalancerRuleHealth* for Load Balancer Rule Health.
- Added property *EnableConnectionTracking* to Load Balancing Rule, as well as support for it for the following cmdlets :
    - *Add-AzLoadBalancerRuleConfig*
    - *New-AzLoadBalancerRuleConfig*
    - *Set-AzLoadBalancerRuleConfig*
- Added cmdlet for migration of basic IP based deployment to Standard IP based VMSS deployments for VirtualNetworkGateways :
    - *New-AzVirtualNetworkGatewayMigrationParameter*
    - *Invoke-AzVirtualNetworkGatewayPrepareMigration*
    - *Invoke-AzVirtualNetworkGatewayExecuteMigration*
    - *Invoke-AzVirtualNetworkGatewayCommitMigration*
    - *Invoke-AzVirtualNetworkGatewayAbortMigration*
- Added cmdlets for CRUD operations of *NetworkSecurityPerimeter* service :
    - Cmdlets for *NetworkSecurityPerimeter* operations :
        - *New-AzNetworkSecurityPerimeter*
        - *Get-AzNetworkSecurityPerimeter*
        - *Update-AzNetworkSecurityPerimeter*
        - *Remove-AzNetworkSecurityPerimeter*
    - Cmdlets for *NetworkSecurityPerimeter* profile operations :
        - *New-AzNetworkSecurityPerimeterProfile*
        - *Get-AzNetworkSecurityPerimeterProfile*
        - *Remove-AzNetworkSecurityPerimeterProfile*
    - Cmdlets for *NetworkSecurityPerimeter* association operations :
        - *New-AzNetworkSecurityPerimeterAssociation*
        - *Get-AzNetworkSecurityPerimeterAssociation*
        - *Update-AzNetworkSecurityPerimeterAssociation*
        - *Remove-AzNetworkSecurityPerimeterAssociation*
    - Cmdlets for *NetworkSecurityPerimeter* access rule operations :
        - *New-AzNetworkSecurityPerimeterAccessRule*
        - *Get-AzNetworkSecurityPerimeterAccessRule*
        - *Update-AzNetworkSecurityPerimeterAccessRule*
        - *Remove-AzNetworkSecurityPerimeterAccessRule*
    - Cmdlets for *NetworkSecurityPerimeter* link operations :
        - *New-AzNetworkSecurityPerimeterLink*
        - *Get-AzNetworkSecurityPerimeterLink*
        - *Update-AzNetworkSecurityPerimeterLink*
        - *Remove-AzNetworkSecurityPerimeterLink*
    - Cmdlets for *NetworkSecurityPerimeter* link reference operations :
        - *Get-AzNetworkSecurityPerimeterLinkReference*
        - *Remove-AzNetworkSecurityPerimeterLinkReference*
    - Cmdlets for *NetworkSecurityPerimeter* logging configuration operations :
        - *New-AzNetworkSecurityPerimeterLoggingConfiguration*
        - *Get-AzNetworkSecurityPerimeterLoggingConfiguration*
        - *Update-AzNetworkSecurityPerimeterLoggingConfiguration*
        - *Remove-AzNetworkSecurityPerimeterLoggingConfiguration*
    - Cmdlet to get *NetworkSecurityPerimeter* associable resource types :
        - *Get-AzNetworkSecurityPerimeterAssociableResourceType*
- Updated cmdlet to add the property of *PartnerManagedResource*, and updated corresponding cmdlets :
    - *Get-AzNetworkVirtualAppliance*
- Added cmdlet to retrieve boot diagnostic logs for a given *NetworkVirtualAppliance* VM instance :
    - *Get-AzNetworkVirtualApplianceBootDiagnostics*
- Added etag property to Azure Virtual Network Manager -> IpamPool, VerifierWorkspace data models.
- Onboarded *ExpressRoute* cmdlets to manage Microsoft Peering Advertised prefix validation :
    - *Get-AzExpressRouteCircuitMicrosoftPeeringPrefixConfig*
    - *Add-AzExpressRouteCircuitMicrosoftPeeringPrefixConfig*
    - *Set-AzExpressRouteCircuitMicrosoftPeeringPrefixConfig*
    - *Remove-AzExpressRouteCircuitMicrosoftPeeringPrefixConfig*
- Updated cmdlets to support Advanced Connectivity feature for Azure VPN gateway :
    - *New-AzVirtualNetworkGateway*
    - *Get-AzVirtualNetworkGateway*
    - *Get-AzVirtualNetworkGatewayConnection*
- Deleted *NetworkWatcher* cmdlets for Classic Connection Monitor :
    - *Start-AzNetworkWatcherConnectionMonitor*
    - *Get-AzNetworkWatcherConnectionMonitorReport*
- Updated cmdlets to support topology-specific connectivity capabilities :
    - *New-AzNetworkManagerConnectivityConfiguration*
    - *Set-AzNetworkManagerConnectivityConfiguration*
    - *Get-AzNetworkManagerConnectivityConfiguration*
<br/><br/>

**<u>Az.Oracle</u>**
- Fixed module name in module metadata.
<br/><br/>

**<u>Az.PostgreSql</u>**
- Added support for Geo-restore in *Restore-AzPostgreSqlFlexibleServer* cmdlets :
    - Automatically determined the paired region for the source server during geo-restore.
    - Enhanced validation for private access and DNS zone configurations during restore operations.
<br/><br/>

**<u>Az.RecoveryServices</u>**
- Added fix for resume protection with *AzureFileshare*.
- Added fix for Get backup item for MSSQL soft deleted items.
- Added check to compare the VM resource group in the list of VMs returned for registration.
- Added *RetainRecoveryPointsAsPerPolicy* as MUA protected operation in *Disable-AzRecoveryServicesBackupProtection* cmdlet.

---

##### Conclusion
Go update your Azure module for PowerShell to benefit from the latest updates and possible configurations.

---

##### Sources
[PowerShell Gallery](https://www.powershellgallery.com/packages/Az/14.1.0)

---


Did you enjoy this post ? If you have any questions, comments or suggestions, please feel free to send me a message from the contact form.

Don't forget to follow us and share this post.