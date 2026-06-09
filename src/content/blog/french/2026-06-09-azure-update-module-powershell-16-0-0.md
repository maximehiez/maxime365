---
title: "Mise à jour en version 16.0.0 du module PowerShell Azure"
meta_title: ""
description: ""
date: 2026-06-09T10:00:00-05:00
image: "/images/blog/azure/azure_update_module_powershell_16_0_0_thumbnail.png"
categories: ["Azure"]
author: "Maxime Hiez"
tags: ["Module", "Mise à jour", "PowerShell"]
draft: false
---
---

##### Introduction
Microsoft a récemment publié la nouvelle version 16.0.0 du module PowerShell pour Microsoft Azure.

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
La version 16.0.0 contient les mises à jour suivantes :

**<u>Az.Accounts</u>**
- Ajout de la prise en charge de *ChangeSafety*.
- Mise à jour *Azure.Identity* vers la version *1.17.2*.
<br/><br/>

**<u>Az.Aks</u>**
- Ajout de la prise en charge de *ChangeSafety*.
<br/><br/>

**<u>Az.AnalysisServices</u>**
- Ajout de la prise en charge de *ChangeSafety*.
<br/><br/>

**<u>Az.ApiManagement</u>**
- Ajout de la prise en charge de *ChangeSafety*.
<br/><br/>

**<u>Az.Attestation</u>**
- Ajout de la prise en charge de *ChangeSafety*.
<br/><br/>

**<u>Az.Automation</u>**
- Ajout de la prise en charge de *ChangeSafety*.
<br/><br/>

**<u>Az.Batch</u>**
- Ajout de la prise en charge de *ChangeSafety*.
<br/><br/>

**<u>Az.Billing</u>**
- Ajout de la prise en charge de *ChangeSafety*.
<br/><br/>

**<u>Az.CloudService</u>**
- [Générateur de code amélioré] https://go.microsoft.com/fwlink/?linkid=2340249.
<br/><br/>

**<u>Az.CognitiveServices</u>**
- Ajout de la prise en charge de *ChangeSafety*.
<br/><br/>

**<u>Az.Compute</u>**
- Ajout de la prise en charge de *ChangeSafety*.
- Ajout du paramètre *-ZonalPlatformFaultDomainAlignMode* aux applets de commande *New-AzVmssConfig*, *New-AzVmss* (*SimpleParameterSet*), et *Update-AzVmss*.
- Ajout du paramètre *-OsDiskStorageFaultDomainAlignment* à l'applet de commande *Set-AzVmssStorageProfile*.
- Ajout du paramètre *-StorageFaultDomainAlignment* aux applets de commande *Add-AzVmssDataDisk*, *Set-AzVMOSDisk*, et *Add-AzVMDataDisk*.
- Correction du traitement des scripts dans *Set-AzVMRunCommand* et *Set-AzVmssVMRunCommand* pour ignorer les lignes vides lors du traitement des fichiers de script locaux via *-ScriptLocalPath*, empêchant des erreurs de syntaxe *";;"* dans les scripts shell.
- Ajout du paramètre *-InstantAccess* aux applets de commande *New-AzRestorePointCollection* et *Update-AzRestorePointCollection*.
- Ajout du paramètre *-InstantAccessDurationInMinutes* à l'applet de commande *New-AzRestorePoint*.
<br/><br/>

**<u>Az.ContainerInstance</u>**
- [Générateur de code amélioré] https://go.microsoft.com/fwlink/?linkid=2340249.
<br/><br/>

**<u>Az.ContainerRegistry</u>**
- Ajout de la prise en charge de *ChangeSafety*.
<br/><br/>

**<u>Az.CosmosDB</u>**
- Ajout de la prise en charge de *ChangeSafety*.
<br/><br/>

**<u>Az.DataBoxEdge</u>**
- Ajout de la prise en charge de *ChangeSafety*.
<br/><br/>

**<u>Az.Databricks</u>**
- [Générateur de code amélioré] https://go.microsoft.com/fwlink/?linkid=2340249.
<br/><br/>

**<u>Az.DataFactory</u>**
- Ajout de la prise en charge de *ChangeSafety*.
<br/><br/>

**<u>Az.DataLakeAnalytics</u>**
- Ajout de la prise en charge de *ChangeSafety*.
<br/><br/>

**<u>Az.DataLakeStore</u>**
- Ajout de la prise en charge de *ChangeSafety*.
<br/><br/>

**<u>Az.DataMigration</u>**
- Ajout de la prise en charge de *ChangeSafety*.
- [CHANGEMENT MAJEUR ANNONCÉ À L'AVANCE] https://go.microsoft.com/fwlink/?linkid=2333229 .
<br/><br/>

**<u>Az.DataProtection</u>**
- Modification de la règle de rétention : l’option *-Name Default_OperationalStore* est désormais requise.
- Ajout de l’option *RenameTo* pour la restauration des requêtes.
- [Générateur de code amélioré] https://go.microsoft.com/fwlink/?linkid=2340249.
- Ajout de la prise en charge de la protection *Cosmos DB*.
<br/><br/>

**<u>Az.DataShare</u>**
- Ajout de la prise en charge de *ChangeSafety*.
<br/><br/>

**<u>Az.DesktopVirtualization</u>**
- Mise à jour de la version de l'API vers le *10/10/2025*.
- Ajout de la valeur d'énumération *MultiplePersistent* à la propriété *loadBalancerType* de *HostPool*.
- Correction des applets de commande *New-AzWvdRegistrationInfo* et *Remove-AzWvdRegistrationInfo*.
<br/><br/>

**<u>Az.DevTestLabs</u>**
- Ajout de la prise en charge de *ChangeSafety*.
<br/><br/>

**<u>Az.Dns</u>**
- Ajout de la prise en charge de *ChangeSafety*.
<br/><br/>

**<u>Az.DnsResolver</u>**
- Ajout de *Invoke-AzDnsResolverBulkDnsResolverDomainList*.
- [Générateur de code amélioré] https://go.microsoft.com/fwlink/?linkid=2340249.
- Suppression de *ActionBlockResponseCode* des applets de commande de règles de sécurité DNS.
- Les paramètres *DnsResolverDomainList* et *Domain* sont désormais facultatifs.
<br/><br/>

**<u>Az.EventHub</u>**
- Ajout de la prise en charge de *ChangeSafety*.
<br/><br/>

**<u>Az.FileShare</u>**
- Disponibilité générale du module *Az.FileShare*.
<br/><br/>

**<u>Az.FrontDoor</u>**
- Mise à jour de la version de l'API vers le *01/11/2025*.
- Masquage des applets de commande d'expérimentation réseau.
- Correction de l'exception *UriFormatException* lors de l'exécution de *New/Remove-AzFrontDoorWafPolicy*.
<br/><br/>

**<u>Az.Functions</u>**
- [Générateur de code amélioré] https://go.microsoft.com/fwlink/?linkid=2340249.
- Référence système validée dans *Update-AzFunctionApp*.
- Portabilité cloud corrigée grâce à *StorageEndpointSuffix* dynamique [#29034].
- *Update-AzFunctionApp* corrigée.
<br/><br/>

**<u>Az.HDInsight</u>**
- Ajout de la prise en charge de *ChangeSafety*.
<br/><br/>

**<u>Az.IotHub</u>**
- Ajout de la prise en charge de *ChangeSafety*.
<br/><br/>

**<u>Az.KeyVault</u>**
- Ajout de la prise en charge de *ChangeSafety*.
- Ajout de la prise en charge de la création de clés AES *oct-HSM* via *Add-AzKeyVaultKey -KeyType oct -Destination HSM*.
- Correction de l'erreur *RequestDisallowedByPolicy* de *New-AzKeyVault*.
- Suppression des éléments basés sur un certificat dans *Get-AzKeyVaultKey* / *Get-AzKeyVaultSecret* ; utilisez *Get-AzKeyVaultCertificate* à la place [#26217].
<br/><br/>

**<u>Az.Kusto</u>**
- [Générateur de code amélioré] https://go.microsoft.com/fwlink/?linkid=2340249.
<br/><br/>

**<u>Az.LoadTesting</u>**
- [Générateur de code amélioré] https://go.microsoft.com/fwlink/?linkid=2340249.
<br/><br/>

**<u>Az.LogicApp</u>**
- Ajout de la prise en charge de *ChangeSafety*.
<br/><br/>

**<u>Az.MachineLearning</u>**
- Ajout de la prise en charge de *ChangeSafety*.
<br/><br/>

**<u>Az.MachineLearningServices</u>**
- [Générateur de code amélioré] https://go.microsoft.com/fwlink/?linkid=2340249.
<br/><br/>

**<u>Az.Maintenance</u>**
- Ajout de la prise en charge de *ChangeSafety*.
<br/><br/>

**<u>Az.ManagedServices</u>**
- [Générateur de code amélioré] https://go.microsoft.com/fwlink/?linkid=2340249.
<br/><br/>

**<u>Az.Migrate</u>**
- [Générateur de code amélioré] https://go.microsoft.com/fwlink/?linkid=2340249.
<br/><br/>

**<u>Az.Monitor</u>**
- Ajout de la prise en charge de *ChangeSafety*.
- Mise à jour du module *MonitorWorkspace* vers l'API du *03/10/2025* avec les applets de commande *CRUD* pour les problèmes, les alertes, les ressources, les investigations, la visualisation, les conteneurs de métriques et l'applet de commande *Set-AzMonitorWorkspace*.
- Mise à niveau de l'API Pipelines vers la version GA du *01/04/2026* : ajout des paramètres *-DistributionMaxInstancesPerHost*, *-ExecutionPlacementConstraint* et *-TlsConfiguration* ; suppression des paramètres *-NetworkingConfiguration*, du récepteur UDP, de *TcpUrl*, de *JsonArrayMapperKey*, de *SourceFieldName*, de *SyslogProtocol* et de *DestinationField* ; extension des ensembles de paramètres.
<br/><br/>

**<u>Az.MySql</u>**
- [Générateur de code amélioré] https://go.microsoft.com/fwlink/?linkid=2340249.
<br/><br/>

**<u>Az.NetAppFiles</u>**
- Ajout de la prise en charge de *ChangeSafety*.
<br/><br/>

**<u>Az.Network</u>**
- Ajout de la prise en charge de *ChangeSafety*.
- Changed *UserAssignedIdentityId* type to *string[]*.
<br/><br/>

**<u>Az.NetworkCloud</u>**
- Version de l'API mise à jour au *01/09/2025*.
- CHANGEMENT MAJEUR ANNONCÉ À L'AVANCE.
<br/><br/>

**<u>Az.NotificationHubs</u>**
- Ajout de la prise en charge de *ChangeSafety*.
<br/><br/>

**<u>Az.OperationalInsights</u>**
- Ajout de la prise en charge de *ChangeSafety*.
<br/><br/>

**<u>Az.PolicyInsights</u>**
- Types de sortie modifiés : *PSAttestation*, *PSPolicyMetadata* et *PSRemediation* ont été renommés ; *SystemData* a été simplifié.
- *ResourceTags* et *ManagementGroupIds* ont été renommés au singulier.
- Propriétés de sortie de correction simplifiées pour *Get-AzPolicyStateSummary*.
- Comportement par défaut modifié pour *Start/Stop-AzPolicyRemediation* (ajout de l’option *-NoWait*).
<br/><br/>

**<u>Az.PowerBIEmbedded</u>**
- Ajout de la prise en charge de *ChangeSafety*.
<br/><br/>

**<u>Az.PrivateDns</u>**
- Ajout de la prise en charge de *ChangeSafety*.
<br/><br/>

**<u>Az.RecoveryServices</u>**
- Ajout de la prise en charge de *ChangeSafety*.
- Ajout de la prise en charge de la suppression réversible pour les éléments de sauvegarde de partage de fichiers Azure (*Undo-AzRecoveryServicesBackupItemDeletion* *Get-AzRecoveryServicesBackupItem -DeleteState SoftDeleted*).
<br/><br/>

**<u>Az.RedisCache</u>**
- Ajout de la prise en charge de *ChangeSafety*.
<br/><br/>

**<u>Az.RedisEnterpriseCache</u>**
- [Générateur de code amélioré] https://go.microsoft.com/fwlink/?linkid=2340249.
<br/><br/>

**<u>Az.ResourceGraph</u>**
- Ajout de la prise en charge de *ChangeSafety*.
<br/><br/>

**<u>Az.ResourceMover</u>**
- [Générateur de code amélioré] https://go.microsoft.com/fwlink/?linkid=2340249.
<br/><br/>

**<u>Az.Resources</u>**
- Ajout de la prise en charge de *ChangeSafety*.

- Mise à jour des applets de commande de la pile de déploiement vers l'API du *01/07/22025* ; ajout des options *-ResourcesWithoutDeleteSupport* et *-ValidationLevel*.
- Correction du problème empêchant la suppression des conditions lors de l'exécution de *Set-AzRoleAssignment*.
- Mise à jour de *Policy.Autorest* vers la version du *01/03/2025* : ajout des options *-Expand*, *-EnforcementMode* et *-Version* ; suppression de l'option *-BackwardCompatible*.
- Correction du problème de condition ABAC nulle lors de l'exécution de *Get-AzRoleDefinition* [#29058] [#25940].
- [CHANGEMENT MAJEUR] Les applets de commande de définition de rôle utilisent désormais un tableau *Permissions* avec des conditions par autorisation.
<br/><br/>

**<u>Az.Security</u>**
- Ajout de la prise en charge de *ChangeSafety*.
<br/><br/>

**<u>Az.SecurityInsights</u>**
- [Générateur de code amélioré] https://go.microsoft.com/fwlink/?linkid=2340249.
<br/><br/>

**<u>Az.ServiceBus</u>**
- Ajout de la prise en charge de *ChangeSafety*.
<br/><br/>

**<u>Az.ServiceFabric</u>**
- Ajout de la prise en charge de *ChangeSafety*.
- Ajout de *Enable-AzServiceFabricManagedClusterMaintenanceWindow*, *Get-AzServiceFabricManagedClusterMaintenanceWindowStatus*.
<br/><br/>

**<u>Az.SignalR</u>**
- Ajout de la prise en charge de *ChangeSafety*.
- [Générateur de code amélioré] https://go.microsoft.com/fwlink/?linkid=2340249.
<br/><br/>

**<u>Az.Sql</u>**
- Ajout de la prise en charge de *ChangeSafety*.
- Suppression de *EnableSoftDelete* des applets de commande *New-AzSqlServer* et *Set-AzSqlServer*. Utilisation de *SoftDeleteRetentionDays* à la place : paramétrage de *SoftDeleteRetentionDays*.
- Rétablissement de la prise en charge de l’authentification UAMI dans les applets de commande de synchronisation des données.
<br/><br/>

**<u>Az.SqlVirtualMachine</u>**
- [Générateur de code amélioré] https://go.microsoft.com/fwlink/?linkid=2340249.
<br/><br/>

**<u>Az.StackHCI</u>**
- [Générateur de code amélioré] https://go.microsoft.com/fwlink/?linkid=2340249.
<br/><br/>

**<u>Az.StackHCIVM</u>**
- Correction de l'exportation manquante de *Save-AzStackHCIVMVirtualMachine*, *Suspend-AzStackHCIVMVirtualMachine*.
<br/><br/>

**<u>Az.Storage</u>**
- Ajout de la prise en charge de *ChangeSafety*.
- Message d'invite mis à jour dans *Start-AzStorageAccountMigration*.
- Ajout du type de déclencheur *MockRun* dans *New/Update-AzStorageTaskAssignment*.
- Ajout du niveau d'accès intelligent et de l'étendue de copie autorisée dans *New/Set-AzStorageAccount*.
- Ajout de la configuration du site web statique dans *Update-AzStorageBlobServiceProperty*.
- Ajout de la réplication des balises dans *Set-AzStorageObjectReplicationPolicy*.
<br/><br/>

**<u>Az.StorageAction</u>**
- Génération de code interne mise à jour.
<br/><br/>

**<u>Az.StorageMover</u>**
- Mise à jour de la version de l'API au *01/12/2025*.
<br/><br/>

**<u>Az.StorageSync</u>**
- Ajout de la prise en charge de *ChangeSafety*.
<br/><br/>

**<u>Az.Synapse</u>**
- Ajout de la prise en charge de *ChangeSafety*.
<br/><br/>

**<u>Az.TrafficManager</u>**
- Ajout de la prise en charge de *ChangeSafety*.
<br/><br/>

**<u>Az.Websites</u>**
- Ajout de la prise en charge de *ChangeSafety*.
- [Générateur de code amélioré] https://go.microsoft.com/fwlink/?linkid=2340249.

---

##### Conclusion
Allez faire la mise à jour de votre module PowerShell pour Azure pour pouvoir bénéficier des dernières mises à jour et configurations possibles.

---

##### Sources
[PowerShell Gallery](https://www.powershellgallery.com/packages/Az/16.0.0)

---


Avez-vous apprécié cet article ? Vous avez des questions, commentaires ou suggestions, n'hésitez pas à m'envoyer un message depuis le formulaire de contact.

N'oubliez pas de nous suivre et de partager cet article.