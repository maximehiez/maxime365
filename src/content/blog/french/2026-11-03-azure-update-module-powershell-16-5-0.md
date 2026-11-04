---
title: "Mise à jour en version 16.5.0 du module PowerShell Azure"
meta_title: ""
description: ""
date: 2026-11-03T10:00:00-05:00
image: "/images/blog/azure/azure_update_module_powershell_16_5_0_thumbnail.png"
categories: ["Azure"]
author: "Maxime Hiez"
tags: ["Module", "Mise à jour", "PowerShell"]
draft: false
---
---

##### Introduction
Microsoft a récemment publié la nouvelle version 16.5.0 du module PowerShell pour Microsoft Azure.

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
La version 16.5.0 contient les mises à jour suivantes :

**<u>Az.Accounts</u>**
- Correction de l'aide de *Get-AzAccessToken -ResourceUrl* ; Azure AD Graph est remplacé par Microsoft Graph.
- Précision du format de *-AzureKeyVaultDnsSuffix* pour *Add-AzEnvironment* et *Set-AzEnvironment*.
- Correction de la terminologie de connexion.
<br/><br/>

**<u>Az.ApiManagement</u>**
- Suppression des points de terminaison non publics de l'exemple de *Get-AzApiManagementNetworkStatus*.
<br/><br/>

**<u>Az.Cdn</u>**
- Mise à jour de Front Door vers la version d'API *2026-10-01* ; ajout des groupes TLS (Transport Layer Security) côté serveur, de l'échange de clés post-quantique, de la validation du nom du certificat d'origine et de *ClientResponse* pour EdgeAction. Les fonctionnalités existantes et la compatibilité de la signature d'URL sont préservées.
- Le CDN classique reste sur la version d'API *2026-04-01-preview* et EdgeAction autonome sur *2024-07-22-preview*. Le module *Az.EdgeAction* est à utiliser pour l'API stable.
- Correction de la transmission des paramètres *Change Safety*.
- Annonce de la suppression des applets de commande EdgeAction autonomes dans *Az.Cdn* 7.0.0 / Az 17.0.0 le 15 Novembre 2026. Aucun changement de comportement ni avertissement pour le moment, et les actions de règles de livraison ainsi que la signature d'URL ne sont pas touchées.
- Ajout de conseils pour la bascule de la migration de Front Door classique / Microsoft CDN.
<br/><br/>

**<u>Az.Compute</u>**
- Ajout en préversion de la prise en charge de FlexProfile avec *PreferredVMSize* pour la création et la mise à jour de machines virtuelles, ainsi que des détails FlexProfile dans la sortie du modèle de *Get-AzVM*. Nécessite l'inscription de la fonctionnalité et la disponibilité dans la région.
- Ajout des contrôles de la politique de suppression réversible (*soft delete*) aux applets de commande d'Azure Compute Gallery, avec la découverte de la corbeille et la restauration des versions d'image. La suppression définitive se demande avec *-BypassSoftDelete*.
- Mise à jour des applets de commande d'Azure Compute Gallery vers la version d'API *2026-03-03*.
- Mise à jour des applets de commande Azure Compute avec deux nouvelles fonctionnalités de la version d'API *2026-04-01*.
- Ajout des politiques de suppression réversible de Compute Gallery, de la découverte de la corbeille et de la restauration des versions d'image ; *-BypassSoftDelete* supprime définitivement.
- Mise à jour de Gallery vers la version d'API *2026-03-03* et ajout de deux fonctionnalités Compute de la version d'API *2026-04-01*.
<br/><br/>

**<u>Az.ConnectedMachine</u>**
- Mise à jour vers la version d'API *2026-06-16-preview*.
- Ajout de *Get-AzConnectedExtensionPublisher*, *Get-AzConnectedExtensionType* et *Get-AzConnectedExtensionMetadataV2*.
- Le paramètre *RunAsPassword* de la commande d'exécution passe de *String* à *SecureString*.
- Suppression des propriétés d'identité *OSType* et *MetadataName*, ainsi que des propriétés *SystemData\** de l'étendue de liaison privée.
<br/><br/>

**<u>Az.DataProtection</u>**
- Ajout de la restauration au niveau de l'élément pour Cosmos DB à *New-AzDataProtectionRestoreConfigurationClientObject* et *Initialize-AzDataProtectionRestoreRequest* ; les bases de données ou les paires base de données / conteneur se sélectionnent avec *-ResourceIdentifier*.
- Correction de *Initialize-AzDataProtectionRestoreRequest* avec *-UseSystemAssignedIdentity* ou *-UserAssignedIdentityArmId*.
<br/><br/>

**<u>Az.EdgeAction</u>**
- Disponibilité générale du module *Az.EdgeAction*.
- Mise à jour des paramètres ; documentation du remplacement des balises, de l'effacement basé sur JSON et des propriétés immuables.
- Les mises à jour de balises préservent la version par défaut ; le changement se fait avec *Switch-AzEdgeActionVersionDefault*.
- Précision des abonnements pour la récupération du code et le changement de version par défaut.
<br/><br/>

**<u>Az.EventHub</u>**
- Mise à jour de l'API par défaut vers *2026-07-01-preview*.
- Ajout des raccourcis Fabric : *Get-AzEventHubFabricShortcut*, *New-AzEventHubFabricShortcut*, *Remove-AzEventHubFabricShortcut*, *Approve-AzEventHubFabricShortcut* et *Invoke-AzEventHubRejectFabricShortcut*.
- Ajout de *Get-AzEventHubUpgradePreferencesOperation* et *New-AzEventHubUpgradePreferencesOperation*.
<br/><br/>

**<u>Az.KeyVault</u>**
- Mise à niveau de la version d'API du plan de contrôle Key Vault vers *2026-05-15*.
    - Ajout de valeurs de SKU Managed HSM à *New-AzKeyVaultManagedHsm*.
- Correction des applets de commande de disponibilité des noms et de régions des modules de sécurité matériels gérés avec l'API *2026-02-01*.
<br/><br/>

**<u>Az.Marketplace</u>**
- Disponibilité générale du module *Az.Marketplace*.
<br/><br/>

**<u>Az.Migrate</u>**
- Ajout de *TargetVMSecurityOption* (*Standard* ou *TrustedLaunch*) et de *EnableSecureBoot* à *New-AzMigrateLocalServerReplication* et *Set-AzMigrateLocalServerReplication*. Trusted Launch active Secure Boot et le module de plateforme sécurisée virtuel (vTPM). Trusted Launch et Secure Boot nécessitent des cibles de génération 2.
- Blocage de la désactivation de Secure Boot lorsqu'il est activé sur la source ; les vérifications sont ignorées si l'état de la source est inconnu.
- Les autorisations du cache de *Initialize-AzMigrateLocalReplicationInfrastructure* passent à Storage Account Contributor (auparavant Contributor) pour l'identité du coffre et les applications de l'appliance source et cible.
<br/><br/>

**<u>Az.Network</u>**
- Mise à jour de Private Link du coffre de réplication vers l'API *2026-05-01* et du SDK réseau vers *2026-03-01* / *2026-01-01*.
- Ajout de *CapacityProviderId* à *New-AzVirtualNetworkAppliance* et *Update-AzVirtualNetworkAppliance*.
- Ajout des applets de commande d'autorisation et de clé du groupe d'agrégation de liens (LAG) ExpressRoute.
- Ajout de la prise en charge IPv6 et double pile des appliances virtuelles réseau gérées via *AddressFamily* (IPv4 par défaut à la création ; inchangé s'il est omis lors d'une mise à jour). Ajout de la famille en lecture seule, du préfixe IPv6 et de l'adresse privée en sortie, ainsi que des adresses IPv6 publiques et privées des interfaces.
- Ajout de la gestion des règles d'atténuation TCP/UDP des politiques personnalisées DDoS (Distributed Denial of Service), des correspondances Deny/Permit par préfixe IP et par zone géographique, et de l'intégration aux politiques [Azure/azure-rest-api-specs#46716](https://github.com/Azure/azure-rest-api-specs/pull/46716).
- Ajout de *New-AzVirtualNetworkApplianceCapability*, *Get-AzVirtualNetworkApplianceCapability* et *Remove-AzVirtualNetworkApplianceCapability*.
- Ajout de *Get-AzDdosCustomPolicyDetectionRule* et *Set-AzDdosCustomPolicyDetectionRule* pour l'API *2025-07-01* [#29387].
- Extension de la prise en charge de *Change Safety* et correction de la transmission des paramètres.
- Ajout de la migration de connexions croisées ExpressRoute gérée par le fournisseur et des circuits sur *ExpressRouteLag*.
- Ajout des associations de First Party Service Tag à *New-AzPublicIpPrefix*.
- Ajout de *MigrateGatewayForPointToSiteProfile* et correction de *New-AzVirtualNetworkGatewayMigrationParameter -MigrationType*.
- Ajout du routage avancé d'Application Gateway et du type de règle *AdvancedRouting*.
- Ajout de *VerifyClientAuthMode* (TLS mutuel) à *New-AzApplicationGatewayClientAuthConfiguration* et *Set-AzApplicationGatewayClientAuthConfiguration*.
- Correction de la conversion booléenne de *New-AzVirtualHubVnetConnection -EnableOnlyIpv6Peering*.
- Ajout des bornes de taille des pools IPAM (IP Address Management) à la création, à la mise à jour et en sortie.
- Ajout de *Get-AzExpressRouteCircuitAuthorizationKey* et *Get-AzExpressRoutePortAuthorizationKey*.
- Ajout du nom d'affichage et du niveau de paranoïa de l'ensemble de règles WAF (Web Application Firewall) d'Application Gateway en sortie, ainsi que de CAPTCHA.
- Ajout de *SourceGeoLocation* et *DestinationGeoLocation* à *New-AzFirewallPolicyNetworkRule*.
- Suppression de la validation de *FormatVersion* dans *New-AzNetworkWatcherFlowLog* et *Set-AzNetworkWatcherFlowLog*.
<br/><br/>

**<u>Az.RecoveryServices</u>**
- Prise en charge des fonctionnalités de sauvegarde par instantané d'instance SQL.
- Les applets de commande Backup ne remplacent plus la validation des certificats HTTPS de toute la session.
<br/><br/>

**<u>Az.Relay</u>**
- Mise à jour vers la version d'API *2026-07-01-preview*.
- Ajout des clusters dédiés : *Get-AzRelayCluster*, *New-AzRelayCluster*, *Set-AzRelayCluster*, *Remove-AzRelayCluster*, *Get-AzRelayClusterNamespace*, *Get-AzRelayClusterSku* et *Get-AzRelayClusterAvailableClusterRegion*.
- *Set-AzRelayCluster* permet de mettre à jour les balises et la capacité sans *Location* ni *SkuCapacity*.
- Ajout de *ClusterArmId* et *MinimumTlsVersion* à *New-AzRelayNamespace* et *Update-AzRelayNamespace*.
- Correction des réponses asynchrones *Accepted* de *Update-AzRelayNamespace*.
<br/><br/>

**<u>Az.Resources</u>**
- Extension des détails de création et de suppression du What-If des piles de déploiement, y compris les changements potentiels ; suppression des en-têtes redondants et alignement du format JSON sur Azure CLI [Azure/azure-cli#34156](https://github.com/Azure/azure-cli/pull/34156).
- Mise à jour de *Microsoft.Extensions.Caching.Memory* de la version 2.2.0 à 10.0.3.
<br/><br/>

**<u>Az.ServiceBus</u>**
- Mise à jour de l'API par défaut vers *2026-07-01-preview*.
<br/><br/>

**<u>Az.Sql</u>**
- Ajout de *LockImmutability* et *ImmutabilityStatus* à *Set-AzSqlDatabaseBackupShortTermRetentionPolicy* et *Set-AzSqlInstanceDatabaseBackupShortTermRetentionPolicy*. Le verrouillage nécessite des bases de données Managed Instance actives et la confirmation d'une action irréversible (*-Force* l'ignore).
- Ajout de l'immuabilité à long terme des Managed Instance à *Set-AzSqlInstanceDatabaseBackupLongTermRetentionPolicy* et à la sortie des politiques et des sauvegardes.
- Ajout de *Lock-AzSqlInstanceDatabaseLongTermRetentionBackupImmutability* et *Remove-AzSqlInstanceDatabaseLongTermRetentionBackupImmutability* pour l'immuabilité basée sur le temps.
- Ajout des conservations légales (*legal holds*) via *Set-AzSqlInstanceDatabaseLongTermRetentionBackupLegalHold* et *Remove-AzSqlInstanceDatabaseLongTermRetentionBackupLegalHold*.
<br/><br/>

**<u>Az.StorageMover</u>**
- Mise à jour vers l'API *2026-05-01*.
- Ajout de *Invoke-AzStorageMoverReconcileJobDefinition* pour les exécutions actives.
- Ajout des transferts entre tenants : *EnableCrossTenantTransfer* et *AllowedStorageAccount* sur les points de terminaison blob et SMB (Server Message Block) ; *IsCrossTenantJob*, *CrossTenantEndpointTenantId* et *CrossTenantEndpointResourceId* sur *New-AzStorageMoverJobDefinition*.
- Ajout de *EndpointKind* aux points de terminaison, de *NFSv4_1* pour NFS (Network File System) et de *SourceType* avec FSX-EFS (NFS) et FSX-SMB (SMB).
- Ajout de *ScheduleRepeatInterval* horaire, de *SyncMode* et *MoverSyncedUntil* à la création et à la mise à jour des tâches, ainsi que du type de tâche *OnPremToCloudAgentLess*.
<br/><br/>

**<u>Az.StorageSync</u>**
- Conservation des erreurs de jeton d'identité de *Set-AzStorageSyncServer* et ajout de conseils propres au serveur.
- Ajout de *ServerId* à l'exemple d'aide et documentation des sessions avec élévation de privilèges pour les serveurs activés par Azure Arc.
<br/><br/>

**<u>Az.TrafficManager</u>**
- Ajout de *New-AzTrafficManagerProfile -RecordType* (*A*, *AAAA* ou *CNAME*), renvoyé par les applets de commande get, create et set des profils [#29711].
- Mise à jour vers l'API *2026-09-01*.
<br/><br/>

**<u>Az.Websites</u>**
- Ajout de *AsyncScalingEnabled* à *New-AzAppServicePlan* et *Set-AzAppServicePlan* pour activer ou désactiver la mise à l'échelle asynchrone des plans App Service dédiés.
- Ajout des identités, scripts, montages, adaptateurs de registre, de la mise en réseau et du protocole RDP (Remote Desktop Protocol) des Managed Instance à *New-AzAppServicePlan* et *Set-AzAppServicePlan*.
- Ajout de *Get-AzAppServicePlanManagedInstance* (adresses IP et état des workers), *Restart-AzAppServicePlanManagedInstance* (recyclage) et *Get-AzAppServicePlanRdpCredential* (identifiants RDP sécurisés).
- Suppression des jeux de paramètres d'identité et JSON non pris en charge de *New-AzStaticWebApp*.

---

##### Conclusion
Allez faire la mise à jour de votre module PowerShell pour Azure pour pouvoir bénéficier des dernières mises à jour et configurations possibles.

---

##### Sources
[PowerShell Gallery](https://www.powershellgallery.com/packages/Az/16.5.0)

---


Avez-vous apprécié cet article ? Vous avez des questions, commentaires ou suggestions, n'hésitez pas à m'envoyer un message depuis le formulaire de contact.

N'oubliez pas de nous suivre et de partager cet article.