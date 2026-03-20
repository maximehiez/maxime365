---
title: "Mise à jour en version 15.4.0 du module PowerShell Azure"
meta_title: ""
description: ""
date: 2026-03-20T10:00:00-05:00
image: "/images/blog/azure/azure_update_module_powershell_15_4_0_thumbnail.png"
categories: ["Azure"]
author: "Maxime Hiez"
tags: ["Module", "Mise à jour", "PowerShell"]
draft: false
---
---

##### Introduction
Microsoft a récemment publié la nouvelle version 15.4.0 du module PowerShell pour Microsoft Azure.

---

##### Installation
Vous pouvez vérifier la version du module installé via la commande PowerShell suivante :
```powershell
Get-InstalledModule -Name "Az*"
```

Vous pouvez installer le module Az via la commande PowerShell suivante :
```powershell
Install-Module -Name Az
```

Vous pouvez mettre à jour le module Az via la commande PowerShell suivante :
```powershell
Update-Module Az -Force
```

---

##### Quoi de neuf ?
La version 15.4.0 contient les mises à jour suivantes :

**<u>Az.Accounts</u>**
* Mise à jour de MSAL vers la version *4.82.1* pour corriger un problème de découverte des points de terminaison ARM.
<br/><br/>

**<u>Az.Compute</u>**
- Ajout des paramètres *-DiskIOPSReadWrite* et *-DiskMBpsReadWrite* à l'applet de commande *Add-AzVMDataDisk*.
- Ajout des paramètres *-Tag* et *-Location* à l'applet de commande *New-AzSshKey*.
- Ajout du paramètre *-Tag* à l'applet de commande *Update-AzSshKey*.
- Ajout de la prise en charge de la stratégie de disponibilité des disques :
   - Ajout du paramètre *-ActionOnDiskDelay* à l'applet de commande *New-AzDiskConfig* pour configurer le comportement de disponibilité des disques.
   - Ajout du paramètre *-ActionOnDiskDelay* à l'applet de commande *New-AzDiskUpdateConfig* pour mettre à jour le comportement de disponibilité des disques.
<br/><br/>

**<u>Az.Databricks</u>**
- Mise à jour de l'API au *2026-01-01* :
   - Ajout du paramètre *ComputeMode* à l'applet de commande *New-AzDatabricksWorkspace* pour la prise en charge des modes de calcul *Hybrid* et *Serverless*.
   - Modification du type du paramètre *ComplianceStandard* de *enum* à *String[]* pour une plus grande flexibilité.
<br/><br/>

**<u>Az.ElasticSan</u>**
- Prise en charge de la mise à l'échelle automatique lors de la création et de la mise à jour d'un Elastic SAN.
   - *New-AzElasticSan*.
   - *Update-AzElasticSan*.
- Prise en charge de la vérification de la possibilité de créer une sauvegarde par instantané de disque pour les volumes.
   - *Test-AzElasticSanVolumeBackup*.
   - *Test-AzElasticSanVolumeRestore*.
<br/><br/>

**<u>Az.KeyVault</u>**
- Ajout de messages d'avertissement concernant les changements importants à venir dans *Get-AzKeyVaultKey* et *Get-AzKeyVaultSecret* pour le filtrage des clés et des secrets basés sur un certificat.
<br/><br/>

**<u>Az.Network</u>**
- Intégration de *Microsoft.DataReplication/replicationVaults* aux applets de commande communes de liaison privée.
<br/><br/>

**<u>Az.Resources</u>**
- Mise à jour de l'implémentation du traitement du paramètre *-Metadata* pour les applets de commande qui l'utilisent à des fins de sécurité. Aucun changement de comportement.
<br/><br/>

**<u>Az.Sql</u>**
- Ajout de la prise en charge des clés AKV sans version.
   - Les applets de commande prises en charge sont *Add-AzSqlServerKeyVaultKey*, *Get-AzSqlServerKeyVaultKey*, *Set-AzSqlServerTransparentDataEncryptionProtector*, *Get-AzSqlServerTransparentDataEncryptionProtector*, *New-AzSqlDatabase*, *Get-AzSqlDatabase*, *Set-AzSqlDatabase*, *New-AzSqlDatabaseCopy*, *New-AzSqlDatabaseSecondary* et *Restore-AzSqlDatabase*.
- Ajout d'une étiquette d'aperçu public pour les propriétés *EnableSoftDelete* et *SoftDeleteRetentionDays* des applets de commande *New-AzSqlServer* et *Set-AzSqlServer*.
- Ajout d'une étiquette d'aperçu public pour les applets de commande *Get-AzSqlDeletedServer* et *Restore-AzSqlServer*.
<br/><br/>

**<u>Az.StorageAction</u>**
- Modifications majeures annoncées à l'avance. Veuillez consulter https://go.microsoft.com/fwlink/?linkid=2333229.

---

##### Conclusion
Allez faire la mise à jour de votre module PowerShell pour Azure pour pouvoir bénéficier des dernières mises à jour et configurations possibles.

---

##### Sources
[PowerShell Gallery](https://www.powershellgallery.com/packages/Az/15.4.0)

---


Avez-vous apprécié cet article ? Vous avez des questions, commentaires ou suggestions, n’hésitez pas à m*envoyer un message depuis le formulaire de contact.

N*oubliez pas de nous suivre et de partager cet article.