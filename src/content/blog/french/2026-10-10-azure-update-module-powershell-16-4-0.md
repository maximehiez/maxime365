---
title: "Mise à jour en version 16.4.0 du module PowerShell Azure"
meta_title: ""
description: ""
date: 2026-10-10T10:00:00-05:00
image: "/images/blog/azure/azure_update_module_powershell_16_4_0_thumbnail.png"
categories: ["Azure"]
author: "Maxime Hiez"
tags: ["Module", "Mise à jour", "PowerShell"]
draft: false
---
---

##### Introduction
Microsoft a récemment publié la nouvelle version 16.4.0 du module PowerShell pour Microsoft Azure.

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
La version 16.4.0 contient les mises à jour suivantes :

**<u>Az.Compute</u>**
- Ajout des paramètres *-ScheduleProfileStart* et *-MinimumCommitmentDayCount* à *New-AzCapacityReservation* pour créer des réservations de capacité différées (*Future Capacity Reservations*), et exposition de la propriété en lecture seule *ScheduleProfile* (incluant *ModifiableUntil*) ainsi que de la vue d'instance *ReservationStateInfo* dans la sortie de *Get-AzCapacityReservation*.
- Ajout de *SpotPlus* comme valeur prise en charge pour le paramètre *-Priority* des cmdlets *New-AzVM*, *New-AzVMConfig*, *New-AzVmss* et *New-AzVmssConfig*. 
    - *SpotPlus* représente la nouvelle génération d'Azure Spot pour les déploiements de machines virtuelles (VM) et de groupes de machines virtuelles identiques (VMSS) ; il offre une fiabilité accrue et une durée d'exécution plus longue que *Spot*. 
    - Les paramètres *-EvictionPolicy* et *-MaxPrice* fonctionnent de la même manière que pour *Spot*. 
    - Nécessite l'inscription de la fonctionnalité d'abonnement *Microsoft.Compute/SpotPlus* et l'utilisation d'une région où cette fonctionnalité est activée.
- Pour *New-AzVM* : en cas d'échec de la recherche de version d'extension dans le catalogue, la cmdlet utilise la version par défaut de l'extension BGInfo (Background Information) ; les échecs d'installation génèrent désormais un avertissement au lieu d'interrompre l'exécution de la cmdlet.
- Ajout de cmdlets et de paramètres pour configurer des balises de service propriétaires (*first-party service tags*) pour les adresses IP publiques implicites sur les machines virtuelles (VM) et les groupes de machines virtuelles identiques (VMSS).
- Ajout de la prise en charge des métadonnées de publication d'extension dans *Get-AzVMExtensionImage*. 
    - Utilisation de *-Expand Properties* lors de la liste des versions d'extension pour inclure les métadonnées relatives à la catégorie de publication, au niveau d'urgence et au profil d'exécution.[Azure/azure-powershell-cmdlet-review-pr#1571](https://github.com/Azure/azure-powershell-cmdlet-review-pr/issues/1571)
<br/><br/>

**<u>Az.ContainerInstance</u>**
- Ajout de la prise en charge de la fonctionnalité *Change Safety*.
<br/><br/>

**<u>Az.ContainerRegistry</u>**
- Ajout de la prise en charge de la fonctionnalité *Change Safety* pour des applets de commande supplémentaires.
<br/><br/>

**<u>Az.DataFactory</u>**
- Mise à jour de l'exemple de sortie *Update-AzDataFactoryV2IntegrationRuntime* pour utiliser une URL de service public.
<br/><br/>

**<u>Az.DataProtection</u>**
- Mise à niveau de la version de l'API DataProtection vers *2026-06-01* (disponibilité générale), qui modélise nativement les types de sauvegarde et de restauration pour Azure Elastic SAN (Storage Area Network).
- Ajout de la prise en charge de la source de données *AzureElasticSAN* pour la sauvegarde et la restauration. 
    - Ajout du paramètre *-ResourceSelector* à *New-AzDataProtectionBackupConfigurationClientObject* pour sélectionner le volume à sauvegarder (le service prend actuellement en charge un seul volume par instance de sauvegarde). 
    - Ajout des paramètres *-ResourceIdentifier* et *-ResourceNameOverride* à *New-AzDataProtectionRestoreConfigurationClientObject* pour sélectionner et éventuellement renommer le volume à restaurer. 
    - Activation de *AzureElasticSAN* dans *Initialize-AzDataProtectionRestoreRequest* et *Set-AzDataProtectionMSIPermission*.
- Ajout de la prise en charge de la granularité de gestion des coûts aux des applets de commande de création et de mise à jour des coffres de sauvegarde (Backup Vaults). 
    - Ajout du paramètre *-CostManagementGranularity* à *New-AzDataProtectionBackupVault* et *Update-AzDataProtectionBackupVault*. 
    - Les valeurs autorisées sont *VaultLevel*, *ProtectedItemLevel* et *ProtectedItemWithParentTag*.
<br/><br/>

**<u>Az.Discovery</u>**
- Disponibilité générale du module *Az.Discovery*.
<br/><br/>

**<u>Az.EventGrid</u>**
- Ajout de la prise en charge de la fonctionnalité *Change Safety*.
<br/><br/>

**<u>Az.EventHub</u>**
- Ajout de la prise en charge de la fonctionnalité *Change Safety* pour des applets de commande supplémentaires.
- Correction de la transmission des paramètres *Change Safety* dans les applets de commande personnalisés de type *read-before-write* et *GeoDR*.
<br/><br/>

**<u>Az.Kusto</u>**
- Ajout de la prise en charge de la fonctionnalité *Change Safety*.
<br/><br/>

**<u>Az.Maintenance</u>**
- Les échecs d'approbation d'événements planifiés entraînent désormais des erreurs PowerShell bloquantes affichant le code d'état HTTP ainsi que le JSON d'erreur du service. Les réponses HTTP 200 et HTTP 207 (multi-statut) continuent de produire une sortie standard.
- Mise à jour de la commande *Approve-AzScheduledEventList* pour renvoyer des résultats multi-statut via *Error.Details*, incluant les ID cibles fournis par le service.
<br/><br/>

**<u>Az.ManagedServiceIdentity</u>**
- Ajout de la prise en charge de la fonctionnalité *Change Safety*.
<br/><br/>

**<u>Az.Migrate</u>**
- Mise à jour de la version de l’API de réplication de données Azure de *2024-09-01* vers *2026-05-01*.
- Ajout du paramètre *MigrateAsArcVM* à la commande *New-AzMigrateLocalServerReplication* pour prendre en charge la migration de machines virtuelles en tant que machines virtuelles compatibles avec Azure Arc.
<br/><br/>

**<u>Az.Mission</u>**
- Publication en disponibilité générale du module *Az.Mission* ciblant la version stable *2026-04-01* de l'API *Microsoft.Mission*.
<br/><br/>

**<u>Az.Monitor</u>**
- Ajout de la prise en charge de la fonctionnalité *Change Safety* les applets de commande de règles de collecte de données.
<br/><br/>

**<u>Az.Network</u>**
- Correction de la transmission du paramètre de sécurité dans les applets de commande personnalisés de type *read-before-write*.
- Ajout de commandes de migration de connexions croisées ExpressRoute gérées par le fournisseur.
- Ajout de la prise en charge de l'association de balises de service propriétaires (First Party Service Tags) aux balises IP utilisées par *New-AzPublicIpPrefix*.
- Ajout de la prise en charge du provisionnement d'un circuit ExpressRoute sur une ressource *ExpressRouteLag* (API Microsoft.Network *2026-01-01*).
- Ajout de *MigrateGatewayForPointToSiteProfile* comme valeur prise en charge pour le paramètre *-MigrationType* de *New-AzVirtualNetworkGatewayMigrationParameter*, et correction du cmdlet pour qu'il respecte la valeur *-MigrationType* fournie par l'utilisateur.
- Ajout de la prise en charge du routage avancé pour Application Gateway.
- Ajout de *AdvancedRouting* comme valeur prise en charge pour *-RuleType* dans *New-AzApplicationGatewayRequestRoutingRule*, *Add-AzApplicationGatewayRequestRoutingRule* et *Set-AzApplicationGatewayRequestRoutingRule*.
- Ajout du paramètre *-VerifyClientAuthMode* aux applets de commande *New-AzApplicationGatewayClientAuthConfiguration* et *Set-AzApplicationGatewayClientAuthConfiguration* pour sélectionner le mode de vérification du certificat client TLS mutuel (mTLS) côté frontal.
- Mise à niveau du SDK réseau vers la version d'API *2026-01-01*.
- Correction du paramètre *-EnableOnlyIpv6Peering* dans *New-AzVirtualHubVnetConnection* afin que les valeurs *Enabled* et *Disabled* soient correctement converties en propriété booléenne *enableOnlyIPv6Peering* attendue par le service.
- Ajout de limites minimales et maximales pour la taille d'allocation lors de la création, de la mise à jour et de l'affichage des pools IPAM.
- Ajout de *Get-AzExpressRouteCircuitAuthorizationKey* et *Get-AzExpressRoutePortAuthorizationKey* pour récupérer la clé d'autorisation d'un circuit ExpressRoute ou d'une autorisation de port (API Microsoft.Network *2026-01-01*).
- Ajout du nom d'affichage de l'ensemble de règles gérées WAF (Web Application Firewall) et du niveau de paranoïa des règles gérées dans la sortie des applets de commande WAF pour Application Gateway.
- Ajout des filtres *SourceGeoLocation* et *DestinationGeoLocation* à *New-AzFirewallPolicyNetworkRule*.
- Suppression de la validation côté client du paramètre *-FormatVersion* pour *New-AzNetworkWatcherFlowLog* et *Set-AzNetworkWatcherFlowLog*.
- Ajout de la prise en charge de la fonctionnalité *Change Safety* pour des applets de commande supplémentaires.
- Ajout de l'action *CAPTCHA* aux stratégies WAF d'Application Gateway.
<br/><br/>

**<u>Az.RecoveryServices</u>**
- Le processus de récupération du script de montage pour *Instant Item Recovery* (*ILR*) a été transféré vers l'action dédiée *listInstantItemRecoveryOperationResult* (version d'API *2026-08-01*) ; la commande *Get-AzRecoveryServicesBackupRPMountScript* ne lit plus les détails de connexion iSCSI CHAP à partir de la réponse globale sur l'état de l'opération ILR (*MSRC-114273*).
- Ajout de la prise en charge de l'authentification basée sur une identité gérée (MI) pour la sauvegarde des partages de fichiers Azure :
    - Prend en charge l'enregistrement et la restauration basés sur l'identité pour la sauvegarde des partages de fichiers Azure, y compris la restauration entre abonnements.
- Correction des commandes *New-AzRecoveryServicesVault* et *Update-AzRecoveryServicesVault* pour utiliser la configuration *AsPerPolicy* par défaut lors de l'activation de l'immuabilité du coffre.
- Correction de la protection des machines virtuelles Azure entre abonnements pour les machines virtuelles utilisant des identités gérées affectées par l'utilisateur.
- Ajout de la configuration de l'analyse des sources (Source Scan) de Microsoft Defender for Cloud pour les coffres Recovery Services et les éléments de sauvegarde de machines virtuelles Azure. 
    - Prend en charge la configuration des coffres et des éléments protégés, et expose les détails de l'analyse des sources ainsi que les informations sur les menaces dans les résultats de sauvegarde.
<br/><br/>

**<u>Az.Resources</u>**
- Alignement de la conservation des balises dans le résultat WhatIf des piles de déploiement avec le comportement des cmdlets de piles de déploiement lorsque le paramètre *-Tag* est omis ou se voit attribuer explicitement une valeur nulle.
<br/><br/>

**<u>Az.ServiceBus</u>**
- Ajout de la prise en charge de la fonctionnalité *Change Safety* pour des applets de commande supplémentaires.
- Correction de la transmission des paramètres *Change Safety* dans les applets de commande personnalisés de type *read-before-write* et *GeoDR*.
<br/><br/>

**<u>Az.Sql</u>**
- Exposition du type de redondance du stockage de sauvegarde dans la sortie de *Get-AzSqlInstanceDatabaseLongTermRetentionBackup*.
- Correction de *Restore-AzSqlDatabase* pour omettre le nombre de réplicas de haute disponibilité (HA) lorsque le paramètre n'est pas spécifié.
- Ajout de la prise en charge de la sélection de champs pour l'audit Azure SQL. 
    - Ajout du paramètre facultatif *RequiredFields* à *Set-AzSqlServerAudit* et *Set-AzSqlDatabaseAudit*. 
    - Ajout de *RequiredFields* à la sortie de *Get-AzSqlServerAudit* et *Get-AzSqlDatabaseAudit*. 
    - Mise à jour des opérations d'audit sur les blobs vers la version d'API *2026-08-01-preview*.
<br/><br/>

**<u>Az.StorageSync</u>**
- Amélioration de l'aide pour le paramètre *ChangeEnumerationIntervalDay*.
- Correction de *Set-AzStorageSyncServer* pour récupérer le serveur inscrit à l'aide de l'ID de serveur validé.
- Ajout du paramètre *ChangeEnumerationIntervalDay* à la cmdlet *New-AzStorageSyncCloudEndpoint*. 
    - Permet aux clients de configurer l'intervalle (en jours) entre les opérations d'énumération des modifications pour les points de terminaison cloud. 
    - Paramètre facultatif offrant un contrôle sur la fréquence de détection des modifications. 
    - Plage valide : 1 à 20 jours.
- Ajout de la cmdlet *Set-AzStorageSyncCloudEndpoint*. 
    - Permet aux clients de mettre à jour la propriété *ChangeEnumerationIntervalDay* d'un point de terminaison cloud existant. 
    - Plage valide : 1 à 20 jours.
<br/><br/>

**<u>Az.Websites</u>**
- Mise à niveau de la version de l'API *Microsoft.Web* de *2021-01-15* vers *2025-05-01*. *Microsoft.CertificateRegistration* et *Microsoft.DomainRegistration* restent sur la version *2021-01-15*.

---

##### Conclusion
Allez faire la mise à jour de votre module PowerShell pour Azure pour pouvoir bénéficier des dernières mises à jour et configurations possibles.

---

##### Sources
[PowerShell Gallery](https://www.powershellgallery.com/packages/Az/16.4.0)

---


Avez-vous apprécié cet article ? Vous avez des questions, commentaires ou suggestions, n'hésitez pas à m'envoyer un message depuis le formulaire de contact.

N'oubliez pas de nous suivre et de partager cet article.