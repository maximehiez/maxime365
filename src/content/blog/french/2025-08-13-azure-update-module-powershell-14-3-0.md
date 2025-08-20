---
title: "Mise à jour en version 14.3.0 du module PowerShell Azure"
meta_title: ""
description: ""
date: 2025-08-13T10:00:00-05:00
image: "/images/blog/azure/azure_update_module_powershell_14_3_0_thumbnail.png"
categories: ["Azure"]
author: "Maxime Hiez"
tags: ["Module", "Mise à jour", "PowerShell"]
draft: false
---
---

##### Introduction
Microsoft a récemment publié la nouvelle version 14.3.0 du module PowerShell pour Microsoft Azure.

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
La version 14.3.0 contient les mises à jour suivantes :

**<u>Az.Accounts</u>**
- Correction d'un problème où *Clear-AzContext* ne vidait pas le cache de jetons lorsque le broker était activé.
- Ajout du nouveau paramètre *-ClaimsChallenge* à *Connect-AzAccount* pour prendre en charge l'authentification par défi de réclamation pour l'authentification multifacteur (MFA).
- Amélioration du message d'erreur lorsqu'une applet de commande échoue en raison de violations de stratégie concernant l'authentification multifacteur (MFA) afin de fournir des instructions plus concrètes.
<br/><br/>

**<u>Az.ArizeAI</u>**
- Disponibilité générale du module *Az.ArizeAI*.
- Mise à jour de la version de l'API vers *2024-10-01*.
<br/><br/>

**<u>Az.Compute</u>**
- Les applets de commande associées à *DiskRP* utiliseront désormais la version *2025-01-02* de l'API *DiskRP*.
- Mise à niveau des applets de commande *SpotPlacementScore* vers la version d'API *2025-06-05*.
<br/><br/>

**<u>Az.CosmosDB</u>**
- Correction du problème où la commande de restauration ne parvenait pas à détecter le compte source, même lorsqu'il existait.
<br/><br/>

**<u>Az.DataLakeStore</u>**
- Ajout d'une nouvelle applet de commande *GetAzureDataLakeStoreDeletedItemWithtoken* pour prendre en charge la pagination dans *GetAzureDataLakeStoreDeletedItem*.
<br/><br/>

**<u>Az.DevCenter</u>**
- Ajout de messages de changement de rupture avant l'annonce.
<br/><br/>

**<u>Az.EventHub</u>**
- Ajout de nouvelles applets de commande pour *EventHubNetworkSecurityPerimeterConfiguration* :
    - *Get-AzEventHubNetworkSecurityPerimeterConfigurationsForAssociation*
    - *Get-AzEventHubNetworkSecurityPerimeterConfiguration*
<br/><br/>

**<u>Az.Fabric</u>**
- Disponibilité générale pour le module *Az.Fabric*.
<br/><br/>

**<u>Az.LambdaTest</u>**
- Disponibilité générale du module *Az.LambdaTest*.
- Mise à jour de la version de l'API vers *2024-02-01*.
<br/><br/>

**<u>Az.ManagedServices</u>**
- Mettre à jour les sorties des annonces de changement de rupture.
<br/><br/>

**<u>Az.Migrate</u>**
- Ajout de *-OsType* comme paramètre facultatif à la commande *Set-AzMigrateLocalServerReplication* pour autoriser le type de système d'exploitation spécifié par l'utilisateur.
- Correction de bugs dans *New-AzMigrateServerReplication* causés par l'obsolescence de *Get-AzVmSize -location*.
- Suppression du paramètre *-TargetStoragePathId* de la commande *New-AzMigrateLocalDiskMappingObject* jusqu'à ce que la fonctionnalité permettant d'associer chaque disque à son propre chemin de conteneur de stockage soit prise en charge.
- Ajout de *-SourceApplianceName* et *-TargetApplianceName* comme paramètres obligatoires à la commande *New-AzMigrateLocalServerReplication* pour permettre aux utilisateurs de spécifier les paires d'appliances de leur choix.
- Amélioration des validations de ressources dans *Initialize-AzMigrateLocalReplicationInfrastructure* et *New-AzMigrateLocalServerReplication*.
<br/><br/>

**<u>Az.Monitor</u>**
- Ajout d'une annonce de changement de rupture pour les applets de commande ci-dessous d'un objet unique ou d'un tableau fixe à la liste :
    - *Get-AzActivityLogAlert*
    - *New-AzActivityLogAlert*
    - *Update-AzActivityLogAlert*
    - *New-AzActivityLogAlertAlertRuleAnyOfOrLeafConditionObject*
    - *New-AzActivityLogAlertAlertRuleLeafConditionObject*
    - *Get-AzAutoscalePredictiveMetric*
    - *Get-AzAutoscaleSetting*
    - *New-AzAutoscaleNotificationObject*
    - *New-AzAutoscaleProfileObject*
    - *New-AzAutoscaleScaleRuleMetricDimensionObject*
    - *New-AzAutoscaleScaleRuleObject*
    - *New-AzAutoscaleSetting*
    - *Update-AzAutoscaleSetting*
    - *Get-AzMonitorWorkspace*
    - *New-AzMonitorWorkspace*
    - *Update-AzMonitorWorkspace*
    - *New-AzDiagnosticSetting*
    - *New-AzSubscriptionDiagnosticSetting*
    - *Get-AzDiagnosticSetting*
    - *Get-AzDiagnosticSettingCategory*
    - *Get-AzSubscriptionDiagnosticSetting*
    - *Get-AzScheduledQueryRule*
    - *New-AzScheduledQueryRule*
    - *New-AzScheduledQueryRuleConditionObject*
    - *New-AzScheduledQueryRuleDimensionObject*
    - *Update-AzScheduledQueryRule*
<br/><br/>

**<u>Az.MySql</u>**
- Aligné sur *SimplySql*, utilisez un objet PSCredential au lieu des paramètres UserName/Password lors de l'appel d'*Open-MySQLConnection*.
- Introduction d'une valeur *Timeout* lors de l'exécution de *Test-AzMySqlFlexibleServerConnect* avec une requête longue durée.
<br/><br/>

**<u>Az.Network</u>**
- *appgw* et *agc* ont été renvoyés dans la stratégie WAF.
- Mise à jour de l'applet de commande *New-AzFirewallPolicyApplicationRule* pour utiliser HTTPS comme protocole par défaut lors de la création d'une règle d'application de balise FQDN.
- Ajout du paramètre *EnableDnstapLogging* à *New-AzFirewall*.
<br/><br/>

**<u>Az.NetworkCloud</u>**
- Version API mise à niveau vers *2025-02-01*.
<br/><br/>

**<u>Az.Nginx</u>**
- Ajout d'une annonce de changement de rupture pour les applets de commande ci-dessous du tableau fixe à la liste :
    - *Get-AzNginxConfiguration*
    - *New-AzNginxConfiguration*
    - *Get-AzNginxDeployment*
    - *New-AzNginxDeployment*
    - *Update-AzNginxDeployment*
    - *Invoke-AzNginxAnalysisConfiguration*
    - *New-AzNginxNetworkProfileObject*
- Ajout d'une annonce de changement important pour les applets de commande *New-AzNginxDeployment* et *Update-AzNginxDeployment*.
    - Suppression du paramètre *-IdentityType* pour prendre en charge les nouveaux paramètres d'identité gérée.
    - Suppression du paramètre *-IdentityUserAssignedIdentity*.
- Les paramètres des applets de commande *New-AzNginxDeployment* et *Update-AzNginxDeployment* seront modifiés par les nouveaux paramètres d'identité gérée.
    - Ajout du paramètre *-UserAssignedIdentity*. Le type de *UserAssignedIdentity* est simplifié en une liste de chaînes permettant de spécifier l'identité attribuée à l'utilisateur.
    - Ajout du paramètre *EnableSystemAssignedIdentity* pour activer/désactiver les identités attribuées par le système.
<br/><br/>

**<u>Az.Oracle</u>**
- Mise à niveau vers la version stable *2025-03-01*.
<br/><br/>

**<u>Az.PostgreSql</u>**
- Aligné sur *SimplySql*, utilisez un objet PSCredential au lieu des paramètres UserName/Password lors de l'appel d'*Open-PostGreConnection*.
- Introduction d'une valeur *Timeout* lors de l'exécution de *Test-AzPostgreSqlFlexibleServerConnect* avec une requête longue durée.
<br/><br/>

**<u>Az.RecoveryServices</u>**
- Ajout d'un nouveau paramètre facultatif *CVMOsDiskEncryptionSetId* dans *Restore-AzRecoveryServicesBackupItem*.
<br/><br/>

**<u>Az.Relay</u>**
- Mettre à jour les sorties des annonces de changement de rupture.
<br/><br/>

**<u>Az.Resources</u>**
- Ajout d'une fonctionnalité pour l'applet de commande *GetAzureResourceGroup* [#27865].
- Ajout d'une annonce de changement radical pour les applets de commande ci-dessous, du tableau à la liste :
    - *Get-AzRoleManagementPolicy*
    - *Update-AzRoleManagementPolicy*
- Ajout de la prise en charge de l'exportation de modèles de groupes de ressources sous forme de fichiers Bicep.
    - Ajout du paramètre *OutputFormat* à l'applet de commande *Export-AzResourceGroup*.
    - Valeurs prises en charge : *Json* (par défaut), *Bicep*.
<br/><br/>

**<u>Az.ServiceFabric</u>**
- Added parameter *Location* to allow users to specify a different node type location than the resource group location in cmdlet *Add-AzServiceFabricNodeType*.
- Added parameter *VmSize* to allow for in-place sku swap for cmdlet *Set-AzServiceFabricManagedNodeType*.
- Updated SFMC to latest API preview version *2025-03-01-preview*.
<br/><br/>

**<u>Az.Sql</u>**
- Mise à jour de l'API *DatabaseOperations* vers la version *2024-11-01-preview* pour .Net Sdk.
<br/><br/>

**<u>Az.StackHCI</u>**
- Fully Qualified Computer Name utilisé et avertissement ajouté pour que l'utilisateur puisse effectuer une mise à niveau vers la solution.
<br/><br/>

**<u>Az.StorageSync</u>**
- Correction d'un bug de sécurité dans l'acquisition de jetons pour l'enregistrement du serveur MI.
<br/><br/>

**<u>Az.Synapse</u>**
- Correction d'une erreur lors de la suppression d'un artefact générant *ArgumentNullException*.

---

##### Conclusion
Allez faire la mise à jour de votre module PowerShell pour Azure pour pouvoir bénéficier des dernières mises à jour et configurations possibles.

---

##### Sources
[PowerShell Gallery](https://www.powershellgallery.com/packages/Az/14.3.0)

---


Avez-vous apprécié cet article ? Vous avez des questions, commentaires ou suggestions, n’hésitez pas à m'envoyer un message depuis le formulaire de contact.

N'oubliez pas de nous suivre et de partager cet article.