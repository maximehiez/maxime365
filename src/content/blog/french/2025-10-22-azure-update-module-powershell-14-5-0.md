---
title: "Mise à jour en version 14.5.0 du module PowerShell Azure"
meta_title: ""
description: ""
date: 2025-10-22T10:00:00-05:00
image: "/images/blog/azure/azure_update_module_powershell_14_5_0_thumbnail.png"
categories: ["Azure"]
author: "Maxime Hiez"
tags: ["Module", "Mise à jour", "PowerShell"]
draft: false
---
---

##### Introduction
Microsoft a récemment publié la nouvelle version 14.5.0 du module PowerShell pour Microsoft Azure.

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
La version 14.5.0 contient les mises à jour suivantes :

**<u>Az.Automation</u>**
- Correction de runbook_type : *PowerShell72* [#24779][#23967].
<br/><br/>

**<u>Az.CloudService</u>**
- Modifications majeures annoncées à l'avance. Veuillez vous référer à https://go.microsoft.com/fwlink/?linkid=2333229.
<br/><br/>

**<u>Az.Compute</u>**
- Ajout du paramètre *-InstantAccessDurationMinutes* à *New-AzSnapshotConfig*.
- Ajout du paramètre *SecureVMGuestStateSAS* à *Grant-AzSnapshotAccess*.
- Mise à jour du SDK pour utiliser la version *2025-04-01* de l'API *ComputeRP* pour les applets de commande associées à *Compute*.
<br/><br/>

**<u>Az.Databricks</u>**
- Modifications majeures annoncées à l'avance. Veuillez vous référer à https://go.microsoft.com/fwlink/?linkid=2333229.
<br/><br/>

**<u>Az.DataFactory</u>**
- Ajout de la prise en charge de la fonctionnalité *Salesforce V2 partitionOption*.
- Ajout de la prise en charge de MI dans les connexions Lakehouse et Warehouse.
<br/><br/>

**<u>Az.DataMigration</u>**
- Disponibilité générale du module *Az.DataMigration*.
- Mise à niveau de l'API de migration de données vers la version stable *2025-06-30*.
- Ajout de la prise en charge des nouvelles tentatives de migration de bases de données et de la suppression des services de migration de bases de données SQL VM et SQL MI.
- Ajout des applets de commande :
    - *Invoke-AzDataMigrationRetryToSqlDb*
    - *Remove-AzDataMigrationToSqlManagedInstance*
    - *Remove-AzDataMigrationToSqlVM*
<br/><br/>

**<u>Az.FirmwareAnalysis</u>**
- Disponibilité générale du module *Az.FirmwareAnalysis*.
- Mise à niveau de la prise en charge de l'API pour inclure *2025-08-02*.
- Ajout de la prise en charge des métriques d'utilisation via l'applet de commande *Get-AzFirmwareAnalysisUsageMetric*.
<br/><br/>

**<u>Az.HDInsight</u>**
- Prise en charge de la création d'un cluster avec l'utilisateur entra comme identifiant de passerelle pour remplacer l'utilisation du nom d'utilisateur et du mot de passe.
    - Ajout du paramètre *EntraUserIdentity* à l'applet de commande *New-AzHDInsightCluster* pour prendre en charge la création de clusters d'utilisateurs Entra à l'aide d'un ou plusieurs *ObjectId* ou *Upn*.
    - Ajout du paramètre *EntraUserFullInfo* à l'applet de commande *New-AzHDInsightCluster* pour prendre en charge la création de clusters d'utilisateurs Entra à l'aide d'un tableau de tables de hachage incluant *ObjectId*, *Upn* et *DisplayName*.
- Prise en charge de la mise à jour des informations utilisateur Entra pour un cluster d'utilisateurs Entra existant.
    - Ajout du paramètre *EntraUserIdentity* à l'applet de commande *Set-AzHDInsightGatewayCredential* pour prendre en charge la mise à jour des clusters d'utilisateurs Entra à l'aide d'un ou plusieurs *ObjectId* ou *Upn*.
    - Ajout du paramètre *EntraUserFullInfo* à l'applet de commande *Set-AzHDInsightGatewayCredential* pour prendre en charge la mise à jour des clusters d'utilisateurs Entra à l'aide d'un tableau de tables de hachage incluant *ObjectId*, *Upn* et *DisplayName*.
- Ajout de la prise en charge de l'utilisation du stockage WASB avec l'identité gérée (MSI) dans l'applet de commande *New-AzHDInsightCluster*.
    - Les utilisateurs peuvent spécifier le paramètre *StorageAccountManagedIdentity* pour utiliser MSI comme identifiant de stockage WASB lors de la création d'un cluster, au lieu d'utiliser *StorageAccountKey*.
<br/><br/>

**<u>Az.KeyVault</u>**
- Ajout d'applets de commande pour les règles réseau HSM gérées reflétant la gestion des règles réseau Key Vault existantes :
    - *New-AzKeyVaultManagedHsmNetworkRuleSetObject*
    - *Add-AzKeyVaultManagedHsmNetworkRule*
    - *Remove-AzKeyVaultManagedHsmNetworkRule*
    - *Update-AzKeyVaultManagedHsmNetworkRuleSet*
- *New-AzKeyVaultManagedHsm* prend désormais en charge le paramètre *-NetworkRuleSet* pour spécifier les règles réseau HSM gérées (action par défaut, contournement, plages d'adresses IP, ID de ressources de réseau virtuel) dès leur création.
- Application des règles réseau HSM gérées : Lorsqu'une règle IP ou de réseau virtuel est présente, le client force désormais automatiquement DefaultAction à Refuser (exigence du service) et ajoute une protection finale lors de l'envoi de la requête. Les abonnements doivent être autorisés par le service pour utiliser les fonctionnalités de liste de contrôle d'accès (ACL) par IP/étiquette de service.
<br/><br/>

**<u>Az.LoadTesting</u>**
- Modifications majeures annoncées à l'avance. Veuillez vous référer à https://go.microsoft.com/fwlink/?linkid=2333229.
<br/><br/>

**<u>Az.Migrate</u>**
- Correction de bugs dans *New-AzMigrateLocalDiskMappingObject* : Validation uniquement pour les tailles de secteur physique non 512 du disque dur virtuel lorsque le paramètre *PhysicalSectorSize* est spécifié.
- Correction de bugs dans *New-AzMigrateLocalServerReplication* : Validation uniquement pour les tailles de secteur physique non 512 du disque dur virtuel lorsque le paramètre *PhysicalSectorSize* est spécifié. Suppression de la validation des mots réservés pour les noms de disques sources, car elle n'est plus nécessaire. Ajout de la validation de l'identifiant ARM pour les paramètres d'entrée.
- Correction de bugs dans *Set-AzMigrateLocalServerReplication* : Ajout de la validation de l'identifiant ARM pour les paramètres d'entrée.
- Correction de bugs dans *Get-AzMigrateLocalServerReplication* : Ajout de la validation de l'identifiant ARM pour les paramètres d'entrée.
- Amélioration de *Get-AzMigrateServerMigrationStatus* pour la prise en charge du paramètre *-Expedite*.
<br/><br/>

**<u>Az.Network</u>**
- Ajout d'un avertissement d'obsolescence pour l'applet de commande *Invoke-AzFirewallPacketCapture*.
- Ajout d'une nouvelle applet de commande pour Invoke *PacketCaptureOperation* sur le pare-feu Azure :
    - *Invoke-AzFirewallPacketCaptureOperation*
- Mise à jour de l'applet de commande pour ajouter la propriété obligatoire *Operation* et rendre toutes les autres propriétés non obligatoires pour les paramètres de capture de paquets du pare-feu Azure. Mise à jour des applets de commande correspondantes :
    - *New-AzFirewallPacketCaptureParameter*
- Ajout d'une nouvelle applet de commande pour la liste des balises de service *NetworkSecurityPerimeter* :
    - *Get-AzNetworkSecurityPerimeterServiceTag*
- Ajout des propriétés *DedicatedBackendConnection*, *ValidateCertChainAndExpiry*, *ValidateSNI* et *SniName* aux paramètres HTTP du backend de la passerelle d'application, ainsi que leur prise en charge dans les applets de commande suivantes :
    - *New-AzApplicationGatewayBackendHttpSetting*
    - *Add-AzApplicationGatewayBackendHttpSetting*
    - *Set-AzApplicationGatewayBackendHttpSetting*
- Ajout de l'applet de commande *Get-AzAllVirtualNetworkGatewayRadiusServerSecret* pour récupérer la liste des serveurs Radius VirtualNetworkGateway VpnClientConfiguration et les secrets Radius correspondants.
- Ajout de l'applet de commande *Get-AzAllVpnServerConfigurationRadiusServerSecret* pour récupérer la liste des serveurs Radius VirtualWan VpnServerConfiguration et les secrets Radius correspondants.
<br/><br/>

**<u>Az.RecoveryServices</u>**
- Ajout de la prise en charge de la restauration interrégionale pour la nouvelle région *eastus3*.
- Ajout de la prise en charge du réenregistrement d'un élément de sauvegarde dans un autre coffre-fort.
<br/><br/>

**<u>Az.ResourceMover</u>**
- Modifications majeures annoncées à l'avance. Veuillez vous référer à https://go.microsoft.com/fwlink/?linkid=2333229.
<br/><br/>

**<u>Az.Resources</u>**
- Problème résolu où les applets de commande RoleAssignment ne géraient pas correctement les autorisations MSGraph insuffisantes [#28583].
<br/><br/>

**<u>Az.SecurityInsights</u>**
- Modifications majeures annoncées à l'avance. Veuillez vous référer à https://go.microsoft.com/fwlink/?linkid=2333229.
<br/><br/>

**<u>Az.ServiceFabric</u>**
- Modification des SKU *Basic* à *Standard* pour les équilibreurs de charge et les adresses IP publiques pour *New-AzServiceFabricCluster* et *Add-AzServiceFabricNodeType*, car les SKU *Basic* sont obsolètes.
- Ajout des paramètres *EnableAutoOsUpgrade* et *AllowRdpAccess* à *New-AzServiceFabricManagedCluster* et *Set-AzServiceFabricManagedCluster*.
- Ajout des paramètres *ZoneBalance*, *AllowOverProvisioning* et *Zone* à *New-AzServiceFabricManagedNodeType* et *Set-AzServiceFabricManagedNodeType*.
- Ajout d'une annonce préalable concernant la suppression des paramètres *Reimage* de *Set-AzServiceFabricManagedNodeType*.
- Ajout de nouvelles applets de commande pour les types de nœuds gérés.
    - *Invoke-AzServiceFabricDeallocateManagedNodeType*
    - *Invoke-AzServiceFabricRedeployManagedNodeType*
    - *Invoke-AzServiceFabricReimageManagedNodeType*
    - *Start-AzServiceFabricManagedNodeType*
- Marquage de *NodeName* comme non obligatoire et ajout du paramètre *UpdateType* dans *Restart-AzServiceFabricManagedNodeType* pour autoriser les redémarrages UD par UD de tous les nœuds de ce type.
- Renommage des ensembles de paramètres *Remove-AzServiceFabricManagedNodeType* pour utiliser *Remove* au lieu de *Delete* par souci de cohérence avec le nom de l'applet de commande.
<br/><br/>

**<u>Az.SignalR</u>**
- Ajout d'applets de commande pour la gestion des domaines personnalisés :
    - *New-AzSignalRCustomDomain*
    - *Get-AzSignalRCustomDomain*
    - *Remove-AzSignalRCustomDomain*
    - Update-AzSignalRCustomDomain*
- Ajout d'applets de commande pour la gestion des certificats personnalisés :
    - *New-AzSignalRCustomCertificate*
    - *Get-AzSignalRCustomCertificate*
    - *Remove-AzSignalRCustomCertificate*
    - *Update-AzSignalRCustomCertificate*
- Ajout de *EnableSystemAssignedIdentity* et *UserAssignedIdentity* pour l'identité gérée à *New-AzSignalR* et *Update-AzSignalR*.
<br/><br/>

**<u>Az.Sql</u>**
- Amélioration de la validation des paramètres *EnableSoftDelete* et *SoftDeleteRetentionDays*.
- Ajout de *EnableSoftDelete* et *SoftDeleteRetentionDays* à *New-AzSqlServer* pour prendre en charge la rétention après suppression logicielle.
- Ajout de *EnableSoftDelete* et *SoftDeleteRetentionDays* à *Set-AzSqlServer* pour prendre en charge la rétention après suppression logicielle.
- Ajout de l'applet de commande *Restore-AzSqlServer* pour restaurer un serveur Azure SQL supprimé pendant la période de rétention.
<br/><br/>

**<u>Az.StackHCI</u>**
- Modification de l'enregistrement du cluster pour utiliser l'identité du service géré au lieu de l'enregistrement basé sur l'application AAD pour les nouvelles versions du système d'exploitation.
<br/><br/>

**<u>Az.Storage</u>**
- Prise en charge des zones et des stratégies de placement de zones sur les comptes de stockage : *New-AzStorageAccount*, *Set-AzStorageAccount*.
- Prise en charge des références de stockage : *Get-AzStorageSku*.
- Activation de l'authentification SMB OAuth sur les comptes de stockage : *New-AzStorageAccount*, *Set-AzStorageAccount*.
- Activation des métriques lors de la définition de la stratégie de réplication d'objets : *Set-AzStorageObjectReplicationPolicy*.
- Prise en charge de la création et de l'obtention d'un lien symbolique dans un partage de fichiers NFS : *New-AzStorageFileSymbolicLink*, *Get-AzStorageFileSymbolicLink*.
<br/><br/>

**<u>Az.StorageDiscovery</u>**
- Disponibilité générale pour le module *Az.StorageDiscovery*.
<br/><br/>

**<u>Az.StorageMover</u>**
- Prise en charge de la nouvelle version de l'API *2025-07-01*.
- Nouveaux types de points de terminaison pris en charge dans la version de l'API : *MultiCloudConnector* et *NFSFileShare*.
- Documentation d'aide améliorée pour *New-AzStorageMoverAzStorageContainerEndpoint* et *New-AzStorageMoverMultiCloudConnectorEndpoint* avec les informations d'identité.
- Lien vers la version en ligne corrigé pour la documentation d'aide *Update-AzStorageMoverAzNfsFileShareEndpoint*.
- Ajout d'informations d'identité aux propriétés de sortie dans la documentation d'aide pour les points de terminaison des conteneurs de stockage et des connecteurs multicloud.
<br/><br/>

**<u>Az.Websites</u>**
- Modifications majeures annoncées à l'avance. Veuillez vous référer à https://go.microsoft.com/fwlink/?linkid=2333229.
<br/><br/>

**<u>Az.Workloads</u>**
- Modifications majeures annoncées à l'avance. Veuillez vous référer à https://go.microsoft.com/fwlink/?linkid=2333229.

---

##### Conclusion
Allez faire la mise à jour de votre module PowerShell pour Azure pour pouvoir bénéficier des dernières mises à jour et configurations possibles.

---

##### Sources
[PowerShell Gallery](https://www.powershellgallery.com/packages/Az/14.5.0)

---


Avez-vous apprécié cet article ? Vous avez des questions, commentaires ou suggestions, n’hésitez pas à m'envoyer un message depuis le formulaire de contact.

N'oubliez pas de nous suivre et de partager cet article.