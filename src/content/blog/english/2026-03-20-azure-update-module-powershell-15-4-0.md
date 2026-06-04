---
title: "PowerShell Azure module updated to version 15.4.0"
meta_title: ""
description: ""
date: 2026-03-20T10:00:00-05:00
image: "/images/blog/azure/azure_update_module_powershell_15_4_0_thumbnail.png"
categories: ["Azure"]
author: "Maxime Hiez"
tags: ["Module", "Update", "PowerShell"]
draft: false
---
---

##### Introduction
Microsoft recently released the new version 15.4.0 of the PowerShell module for Microsoft Azure.

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
Version 15.4.0 includes the following updates :

**<u>Az.Accounts</u>**
- Updated MSAL to *4.82.1* to fix an issue with ARM endpoint discovery.
<br/><br/>

**<u>Az.Compute</u>**
- Added *-DiskIOPSReadWrite* and *-DiskMBpsReadWrite* parameters to *Add-AzVMDataDisk* cmdlet.
- Added *-Tag* and *-Location* parameters to *New-AzSshKey* cmdlet.
- Added *-Tag* parameter to *Update-AzSshKey* cmdlet.
- Added support for Disk Availability Policy :
   - Added *-ActionOnDiskDelay* parameter to *New-AzDiskConfig* cmdlet to configure disk availability behavior.
   - Added *-ActionOnDiskDelay* parameter to *New-AzDiskUpdateConfig* cmdlet to update disk availability behavior.
<br/><br/>

**<u>Az.Databricks</u>**
- Upgraded API version to *2026-01-01* :
   - Added *ComputeMode* parameter to *New-AzDatabricksWorkspace* cmdlet supporting *Hybrid* and *Serverless* compute modes.
   - Changed *ComplianceStandard* parameter type from *enum* to *String[]* for greater flexibility.
<br/><br/>

**<u>Az.ElasticSan</u>**
- Supported auto scale when creating and updating an Elastic SAN.
   - *New-AzElasticSan*.
   - *Update-AzElasticSan*.
- Supported checking whether disk snapshot backup can be taken for volumes.
   - *Test-AzElasticSanVolumeBackup*.
   - *Test-AzElasticSanVolumeRestore*.
<br/><br/>

**<u>Az.KeyVault</u>**
- Added upcoming breaking change warning messages to *Get-AzKeyVaultKey* and *Get-AzKeyVaultSecret* for filtering certificate-backed keys and secrets.
<br/><br/>

**<u>Az.Network</u>**
- Onboarded *Microsoft.DataReplication/replicationVaults* to Private Link Common cmdlets.
<br/><br/>

**<u>Az.Resources</u>**
- Updated the implementation of *-Metadata* parameter processing for cmdlets that use it for security. No behavior change.
<br/><br/>

**<u>Az.Sql</u>**
- Add support for the versionless AKV keys.
   - The cmdlets supported are *Add-AzSqlServerKeyVaultKey*, *Get-AzSqlServerKeyVaultKey*, *Set-AzSqlServerTransparentDataEncryptionProtector*, *Get-AzSqlServerTransparentDataEncryptionProtector*, *New-AzSqlDatabase*, *Get-AzSqlDatabase*, *Set-AzSqlDatabase*, *New-AzSqlDatabaseCopy*, *New-AzSqlDatabaseSecondary* and *Restore-AzSqlDatabase*.
- Added public preview tag for *EnableSoftDelete* and *SoftDeleteRetentionDays* properties in *New-AzSqlServer* and *Set-AzSqlServer* cmdlets.
- Added public preview tag for *Get-AzSqlDeletedServer* and *Restore-AzSqlServer* cmdlets.
<br/><br/>

**<u>Az.StorageAction</u>**
- Preannounced breaking changes. Please refer to https://go.microsoft.com/fwlink/?linkid=2333229.

---

##### Conclusion
Go update your Azure module for PowerShell to benefit from the latest updates and possible configurations.

---

##### Sources
[PowerShell Gallery](https://www.powershellgallery.com/packages/Az/15.4.0)

---


Did you enjoy this post ? If you have any questions, comments or suggestions, please feel free to send me a message from the contact form.

Don't forget to follow us and share this post.