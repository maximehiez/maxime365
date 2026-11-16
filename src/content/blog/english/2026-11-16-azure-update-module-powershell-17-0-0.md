---
title: "PowerShell Azure module updated to version 17.0.0"
meta_title: ""
description: ""
date: 2026-11-16T10:00:00-05:00
image: "/images/blog/azure/azure_update_module_powershell_17_0_0_thumbnail.png"
categories: ["Azure"]
author: "Maxime Hiez"
tags: ["Module", "Update", "PowerShell"]
draft: false
---
---

##### Introduction
Microsoft recently published the new version 17.0.0 of the PowerShell module for Microsoft Azure.

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
Version 17.0.0 includes the following updates :

**<u>Az.Accounts</u>**
- Fixed *"Method not found"* errors on PowerShell 7.6 when a module uses an Azure SDK whose models implement *IJsonModel*.
    - *Az.Accounts* now uses the runtime copy of a shared .NET assembly, such as *System.Text.Json*, when it is the same version or newer than the copy *Az.Accounts* ships, so only one copy is loaded.
- Upgraded *Azure.Core* dependency from *1.57.0* to *1.64.0*.
- Upgraded *System.ClientModel* dependency from *1.13.0* to *1.16.0*.
- Upgraded MSAL dependencies (*Microsoft.Identity.Client*, *Microsoft.Identity.Client.Extensions.Msal*, *Microsoft.Identity.Client.Broker*) from *4.84.0* to *4.90.0*.
- Upgraded *Microsoft.Identity.Client.NativeInterop* from 0.20.4 to 0.20.6.
- Upgraded *System.Text.Json*, *System.Memory.Data*, *Microsoft.Bcl.AsyncInterfaces* and related .NET dependencies from *10.0.3* to *10.0.10*.
- Added *System.Net.ServerSentEvents* 10.0.10 as a dependency of *System.ClientModel*.
<br/><br/>

**<u>Az.ApiManagement</u>**
- Fixed *Get-AzApiManagementBackend* credential mapping for backend query and header values that include redacted null entries such as *sig: null*.
    - The cmdlet now preserves the existing redaction behavior while avoiding exceptions when null values are present in backend credentials.
<br/><br/>

**<u>Az.Automation</u>**
- Added cmdlets for Runtime Environment management
    - *Get-AzAutomationRuntimeEnvironment*
    - *New-AzAutomationRuntimeEnvironment*
    - *Set-AzAutomationRuntimeEnvironment*
    - *Remove-AzAutomationRuntimeEnvironment*
- Added cmdlets for Runtime Environment Package management
    - *Get-AzAutomationRuntimeEnvironmentPackage*
    - *New-AzAutomationRuntimeEnvironmentPackage*
    - *Set-AzAutomationRuntimeEnvironmentPackage*
    - *Remove-AzAutomationRuntimeEnvironmentPackage*
<br/><br/>

**<u>Az.Batch</u>**
- [PREANNOUNCED BREAKING CHANGES] Please refer to https://go.microsoft.com/fwlink/?linkid=2333229
- Fixed *Set-AzBatchAccount* resetting account settings it doesn't change, such as public network access, allowed authentication modes and the auto-storage account. It now uses the update operation.
<br/><br/>

**<u>Az.Cdn</u>**
- Upgraded classic CDN to API version *2026-10-01*, shared with Azure Front Door.
- Removed standalone EdgeAction resource cmdlets, including attachment, execution filter, version and version-code operations. EdgeAction delivery-rule associations remain supported.
- Removed *New-AzFrontDoorCdnSecretUrlSigningKeyParametersObject* and the legacy *UrlSigningKey* secret and *AfdUrlSigning* rule action models. Other URL signing actions remain available.
<br/><br/>

**<u>Az.Compute</u>**
- Removed unused MD5 calculations from disk and blob uploads and switched disk and blob upload lock names and deterministic Azure Enhanced Monitoring test IDs to SHA-256.
- Added *Set-AzSnapshotImmutabilityPolicy* and *Remove-AzSnapshotImmutabilityPolicy*, and exposed typed immutability policy details consistently in snapshot results. [Azure/azure-powershell-cmdlet-review-pr#1579]
- Added a preview message to *New-AzCapacityReservationGroup* indicating that the Open Capacity Reservation feature is in preview.
<br/><br/>

**<u>Az.ContainerRegistry</u>**
- Validated registry names and login-server labels before container registry data-plane requests.
    - Accepted a single hyphen followed by a variable-length ASCII alphanumeric suffix, up to 63 characters in total.
    - Used explicit hyphenated labels, including Domain Name Label (DNL) and legacy labels, directly without Azure Resource Manager discovery.
- Updated *Connect-AzContainerRegistry* credential handling.
    - Passed credentials as data rather than executable PowerShell.
- Updated container registry login-server discovery.
    - Used Azure Resource Manager when available; otherwise warned and used the input with the environment suffix.
    - Reused successful discovery results for the same registry and context within the client.
- Updated *Connect-AzContainerRegistry -ExposeToken*.
    - Returned the same login server used for authentication.
<br/><br/>

**<u>Az.IotHub</u>**
- Updated *Microsoft.Extensions.DependencyInjection.Abstractions* dependency from *10.0.3* to *10.0.10*.
<br/><br/>

**<u>Az.NetAppFiles</u>**
- Removed deprecated subvolume cmdlets and aliases, the *EnableSubvolume* volume parameter, and *EnableSubvolumes* output properties.
- Updated to API version *2026-08-01*.
- Added Lightweight Directory Access Protocol (LDAP) configuration support to *New-AzNetAppFilesAccount*, *Set-AzNetAppFilesAccount*, and *Update-AzNetAppFilesAccount*, and added *LdapConfiguration* to account output.
- Added *Update-AzNetAppFilesAccountLdapBindPassword* to refresh the LDAP bind password from Azure Key Vault.
<br/><br/>

**<u>Az.Network</u>**
- Fixed VirtualNetworkGateway cmdlets to fetch radius secrets before calling PUT on gateway.
<br/><br/>

**<u>Az.RedisEnterpriseCache</u>**
- Upgraded code generator. See [here](https://go.microsoft.com/fwlink/?linkid=2340249).
- Added support for API version *2026-09-01*
- Added *Get-AzRedisEnterpriseCacheMigration* cmdlet to get information about a migration from an Azure Cache for Redis Basic, Standard, or Premium cache to Azure Managed Redis
- Added *Start-AzRedisEnterpriseCacheMigration* cmdlet to start a migration from an Azure Cache for Redis Basic, Standard, or Premium cache to Azure Managed Redis
- Added *Undo-AzRedisEnterpriseCacheMigration* cmdlet to cancel or rollback a migration from an Azure Cache for Redis Basic, Standard, or Premium cache to Azure Managed Redis
- Added *Test-AzRedisEnterpriseCacheMigration* cmdlet to validate whether an Azure Cache for Redis Basic, Standard, or Premium cache can be migrated to Azure Managed Redis
- Added *Invoke-AzRedisEnterpriseCacheClusterUnlinkMigratedEndpoint* and *Invoke-AzRedisEnterpriseCacheMigrationUnlinkMigratedEndpoint* cmdlets to unlink endpoints after migrations from Azure Cache for Redis Enterprise and Azure Cache for Redis Basic, Standard, or Premium, respectively
- Added *MaintenanceConfigurationMaintenanceWindow* parameter to *New-AzRedisEnterpriseCache* and *Update-AzRedisEnterpriseCache* for configuring maintenance windows
- Added *NotifyKeyspaceEvents* parameter to *New-AzRedisEnterpriseCache*, *New-AzRedisEnterpriseCacheDatabase*, and *Update-AzRedisEnterpriseCacheDatabase* for configuring keyspace notifications
<br/><br/>

**<u>Az.Resources</u>**
- Updated *Microsoft.Extensions.DependencyInjection.Abstractions* dependency from *10.0.3* to *10.0.10*.
<br/><br/>

**<u>Az.StackHCI</u>**
- Fixed node-local Remote Support, virtual machine (VM) attestation, attestation, and logs-directory cmdlets to work without an Azure login.
    - Avoided unnecessary local remoting sessions in Remote Support checks, *Enable-AzStackHCIAttestation*, *Disable-AzStackHCIAttestation*, and *Get-AzStackHCILogsDirectory*.
<br/><br/>

**<u>Az.Storage</u>**
- Updated Storage management operations to API version *2026-09-01*.
- Added *PublishIpv6Endpoint* to *New-AzStorageAccount* and *Set-AzStorageAccount* to enable or disable IPv6 storage endpoint publishing.
    - Exposed *DualStackEndpointPreference* on Storage account output, including *Get-AzStorageAccount* results.
- Added per-service Shared Key controls, cross-tenant delegation SAS (shared access signature) controls, user-bound delegation SAS enforcement, Blob Access Point enablement, and Turbo Tier settings to *New-AzStorageAccount* and *Set-AzStorageAccount*.
    - Disabling Turbo Tier omits an existing target percentage to avoid a service validation error.
- Added commands to manage context caches, their managed identities and containers, and advanced platform metrics rules.
    - Made *Get-AzStorageAdvancedPlatformMetricsRule* list rules by default and retrieve a specific rule through its resource identity.
    - Aligned command discovery metadata with listing metrics rules and deleting the container-level capacity metrics rule.
    - Made *Update-AzStorageContextCacheContainer* return the updated container after an asynchronous update.
- Added commands to manage Blob Access Point configurations and test proposed or existing connections.
    - Made *Update-AzStorageBlobAccessPointConfiguration* return the updated configuration after an asynchronous update.
- Added Blob Access Point attachment parameters to *New-AzRmStorageContainer* and attachment details to container output.
- Added file share guardrail limits and network security perimeter service tags to management output.
<br/><br/>

**<u>Az.StorageSync</u>**
- Updated the *Set-AzStorageSyncServer* help description to explain that the cmdlet patches a server's managed identity and re-establishes the trust relationship between the server and its storage sync service, and updated the example to use a placeholder for *ServerId*

---

##### Conclusion
Go update your Azure PowerShell module to benefit from the latest updates and possible configurations.

---

##### Sources
[PowerShell Gallery](https://www.powershellgallery.com/packages/Az/17.0.0)

---


Did you enjoy this post ? If you have any questions, comments or suggestions, please feel free to send me a message from the contact form.

Don't forget to follow us and share this post.