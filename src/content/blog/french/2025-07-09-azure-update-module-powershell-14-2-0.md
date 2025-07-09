---
title: "Mise à jour en version 14.2.0 du module PowerShell Azure"
meta_title: ""
description: ""
date: 2025-07-09T10:00:00-05:00
image: "/images/blog/azure/azure_update_module_powershell_14_2_0_thumbnail.png"
categories: ["Azure"]
author: "Maxime Hiez"
tags: ["Module", "Mise à jour", "PowerShell"]
draft: false
---
---

##### Introduction
Microsoft a récemment publié la nouvelle version 14.2.0 du module PowerShell pour Microsoft Azure.

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
La version 14.2.0 contient les mises à jour suivantes :

**<u>Az.Accounts</u>**
- Mise à jour de la date dans le message concernant l'authentification multifacteur (MFA). Pour plus d'informations, consultez https://go.microsoft.com/fwlink/?linkid=2276971
<br/><br/>

**<u>Az.CosmosDB</u>**
- Correction des documents d'aide incorrects pour les applets de commande *MongoDB*.
<br/><br/>

**<u>Az.DataFactory</u>**
- Ajout de la prise en charge de *Databricks Job Activity*.
- Ajout d'une prise en charge supplémentaire des propriétés de connexion *QuickBooks*.
<br/><br/>

**<u>Az.ElasticSan</u>**
- Ajout d'un message d'avertissement pour la vérification de l'intégrité des données lors de la création/mise à jour d'un groupe de volumes.
    - *New-AzElasticSanVolumeGroup*
    - *Update-AzElasticSanVolumeGroup*
<br/><br/>

**<u>Az.ManagedServices</u>**
- Ajout d'une annonce de changement de rupture pour les commandes ci-dessous à partir d'un tableau ou d'un objet unique vers une liste :
    - *Get-AzManagedServicesAssignment*
    - *Get-AzManagedServicesDefinition*
    - *Get-AzManagedServicesMarketplaceDefinition*
    - *New-AzManagedServicesAssignment*
    - *New-AzManagedServicesAuthorizationObject*
    - *New-AzManagedServicesDefinition*
    - *New-AzManagedServicesEligibleApproverObject*
    - *New-AzManagedServicesEligibleAuthorizationObject*
<br/><br/>

**<u>Az.Network</u>**
- Ajout d'une nouvelle commande qui crée un objet pour *CaptureSetting*, et ajout des propriétés *FileCount*, *FileSizeInBytes* et *SessionTimeLimitInSeconds*, qui aident à configurer le paramètre de capture pour la capture de paquets ainsi que sa prise en charge pour les applets de commande suivantes :
    - *New-AzPacketCaptureSettingsConfig*
- Ajout des propriétés *ContinuousCapture*, *LocalPath* et *CaptureSetting* dans la commande Packet capture V2, ainsi que leur prise en charge pour les applets de commande suivantes :
    - *New-AzNetworkWatcherPacketCaptureV2*
- Applet de commande Exceptions WAF de la passerelle d'application intégrée :
    - *New-AzApplicationGatewayFirewallPolicyException*
<br/><br/>

**<u>Az.Relay</u>**
- Ajout d'une annonce de changement de rupture pour les commandes ci-dessous :
    - *Get-AzRelayNamespace*
    - *Get-AzRelayNamespaceNetworkRuleSet*
    - *Set-AzRelayNamespaceNetworkRuleSet*
<br/><br/>

**<u>Az.Resources</u>**
- Correction du problème de sortie d'avertissement vide pour l'applet de commande *Test-AzResourceGroupDeployment* [#27888].
<br/><br/>

**<u>Az.Storage</u>**
- Prise en charge de l'ensemble *SasExpirationAction* comme *Log* ou *Block*, avec *SasExpirationPeriod*.
    - *New-AzStorageAccount*
    - *Set-AzStorageAccount*
- Affectation de tâches de stockage prise en charge.
    - *New-AzStorageTaskAssignment*
    - *Update-AzStorageTaskAssignment*
    - *Get-AzStorageTaskAssignment*
    - *Remove-AzStorageTaskAssignment*
    - *Get-AzStorageTaskAssignmentinstancesReport*
<br/><br/>

**<u>Az.StorageAction</u>**
- Disponibilité générale du module *Az.StorageAction*.

---

##### Conclusion
Allez faire la mise à jour de votre module PowerShell pour Azure pour pouvoir bénéficier des dernières mises à jour et configurations possibles.

---

##### Sources
[PowerShell Gallery](https://www.powershellgallery.com/packages/Az/14.2.0)

---


Avez-vous apprécié cet article ? Vous avez des questions, commentaires ou suggestions, n’hésitez pas à m'envoyer un message depuis le formulaire de contact.

N'oubliez pas de nous suivre et de partager cet article.