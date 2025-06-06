---
title: "Mise à jour en version 14.1.0 du module PowerShell Azure"
meta_title: ""
description: ""
date: 2025-06-06T10:00:00-05:00
image: "/images/blog/azure/azure_update_module_powershell_14_1_0_thumbnail.png"
categories: ["Azure"]
author: "Maxime Hiez"
tags: ["Module", "Mise à jour", "PowerShell"]
draft: false
---
---

##### Introduction
Microsoft a récemment publié la nouvelle version 14.1.0 du module PowerShell pour Microsoft Azure.

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
La version 14.1.0 contient les mises à jour suivantes :

**<u>Az.Accounts</u>**
- Mise à niveau d'*Azure.Core* vers la version 1.45.0.
<br/><br/>

**<u>Az.Compute</u>**
- Ajout d'un message de modification importante pour les applets de commande *New-AzVM* et *New-AzVmss*.
<br/><br/>

**<u>Az.DataFactory</u>**
- Prise en charge renforcée des propriétés de connexion *SparkV2* et *HiveV2*.
<br/><br/>

**<u>Az.Migrate</u>**
- Implémentation de l'applet de commande *Get-AzMigrateServerMigrationStatus* pour récupérer l'état de réplication des serveurs dans Azure Migrate.
- Correction de bugs dans *New-AzMigrateLocalServerReplication* qui entraînaient l'introuvabilité de *HyperVSite* ou *VMwareSite*.
<br/><br/>

**<u>Az.MySql</u>**
- Fonctionnalité *Restore-AzMySqlFlexibleServer* améliorée avec prise en charge de *GeoRestore*.
<br/><br/>

**<u>Az.Network</u>**
- Ajout des propriétés *PublicIpAddressesV6*, *PublicIpPrefixesV6* et *SourceVirtualNetwork* à NatGateway, et prise en charge de ces propriétés pour les applets de commande suivantes :
    - *New-AzNatGateway*
    - *Set-AzNatGateway*
- Ajout de la propriété *DefaultPublicNatGateway* à *VirtualNetwork*.
- Intégration de *Microsoft.FluidRelay/fluidRelayServers* aux applets de commande de liaison privée.
- Ajout de l'applet de commande *Get-AzLoadBalancerRuleHealth* pour l'intégrité des règles d'équilibrage de charge.
- Ajout de la propriété *EnableConnectionTracking* à la règle d'équilibrage de charge, et prise en charge de cette propriété pour les applets de commande suivantes :
    - *Add-AzLoadBalancerRuleConfig*
    - *New-AzLoadBalancerRuleConfig*
    - *Set-AzLoadBalancerRuleConfig*
- Ajout d'une applet de commande pour la migration d'un déploiement IP de base vers des déploiements VMSS IP standard pour les passerelles VirtualNetworkGateway :
    - *New-AzVirtualNetworkGatewayMigrationParameter*
    - *Invoke-AzVirtualNetworkGatewayPrepareMigration*
    - *Invoke-AzVirtualNetworkGatewayExecuteMigration*
    - *Invoke-AzVirtualNetworkGatewayCommitMigration*
    - *Invoke-AzVirtualNetworkGatewayAbortMigration*
- Ajout d'applets de commande pour les opérations CRUD du service *NetworkSecurityPerimeter* :
    - Applets de commande pour les opérations *NetworkSecurityPerimeter* :
        - *New-AzNetworkSecurityPerimeter*
        - *Get-AzNetworkSecurityPerimeter*
        - *Update-AzNetworkSecurityPerimeter*
        - *Remove-AzNetworkSecurityPerimeter*
    - Applets de commande pour les opérations de profil *NetworkSecurityPerimeter* :
        - *New-AzNetworkSecurityPerimeterProfile*
        - *Get-AzNetworkSecurityPerimeterProfile*
        - *Remove-AzNetworkSecurityPerimeterProfile*
    - Applets de commande pour les opérations d'association *NetworkSecurityPerimeter* :
        - *New-AzNetworkSecurityPerimeterAssociation*
        - *Get-AzNetworkSecurityPerimeterAssociation*
        - *Update-AzNetworkSecurityPerimeterAssociation*
        - *Remove-AzNetworkSecurityPerimeterAssociation*
    - Applets de commande pour les opérations de règle d'accès *NetworkSecurityPerimeter* :
        - *New-AzNetworkSecurityPerimeterAccessRule*
        - *Get-AzNetworkSecurityPerimeterAccessRule*
        - *Update-AzNetworkSecurityPerimeterAccessRule*
        - *Remove-AzNetworkSecurityPerimeterAccessRule*
    - Applets de commande pour les opérations de lien *NetworkSecurityPerimeter* :
        - *New-AzNetworkSecurityPerimeterLink*
        - *Get-AzNetworkSecurityPerimeterLink*
        - *Update-AzNetworkSecurityPerimeterLink*
        - *Remove-AzNetworkSecurityPerimeterLink*
    - Applets de commande pour les opérations de référence de lien *NetworkSecurityPerimeter* :
        - *Get-AzNetworkSecurityPerimeterLinkReference*
        - *Remove-AzNetworkSecurityPerimeterLinkReference*
    - Applets de commande pour les opérations de configuration de journalisation *NetworkSecurityPerimeter* :
        - *New-AzNetworkSecurityPerimeterLoggingConfiguration*
        - *Get-AzNetworkSecurityPerimeterLoggingConfiguration*
        - *Update-AzNetworkSecurityPerimeterLoggingConfiguration*
        - *Remove-AzNetworkSecurityPerimeterLoggingConfiguration*
    - Applet de commande pour obtenir les types de ressources associables *NetworkSecurityPerimeter* :
        - *Get-AzNetworkSecurityPerimeterAssociableResourceType*
- Mise à jour de l'applet de commande pour ajouter la propriété *PartnerManagedResource* et les applets de commande correspondants :
    - *Get-AzNetworkVirtualAppliance*
- Ajout d'une applet de commande pour récupérer les journaux de diagnostic de démarrage d'une instance de machine virtuelle *NetworkVirtualAppliance* donnée :
    - *Get-AzNetworkVirtualApplianceBootDiagnostics*
- Ajout de la propriété etag aux modèles de données Azure Virtual Network Manager -> IpamPool et VerifierWorkspace.
- Applis d'applets de commande *ExpressRoute* pour gérer la validation du préfixe Microsoft Peering Advertised :
    - *Get-AzExpressRouteCircuitMicrosoftPeeringPrefixConfig*
    - *Add-AzExpressRouteCircuitMicrosoftPeeringPrefixConfig*
    - *Set-AzExpressRouteCircuitMicrosoftPeeringPrefixConfig*
    - *Remove-AzExpressRouteCircuitMicrosoftPeeringPrefixConfig*
- Applets de commande mises à jour pour prendre en charge la fonctionnalité de connectivité avancée pour la passerelle VPN Azure :
    - *New-AzVirtualNetworkGateway*
    - *Get-AzVirtualNetworkGateway*
    - *Get-AzVirtualNetworkGatewayConnection*
- Applets de commande *NetworkWatcher* supprimées pour le moniteur de connexion classique :
    - *Start-AzNetworkWatcherConnectionMonitor*
    - *Get-AzNetworkWatcherConnectionMonitorReport*
- Applets de commande mises à jour pour prendre en charge les fonctionnalités de connectivité spécifiques à la topologie :
    - *New-AzNetworkManagerConnectivityConfiguration*
    - *Set-AzNetworkManagerConnectivityConfiguration*
    - *Get-AzNetworkManagerConnectivityConfiguration*
<br/><br/>

**<u>Az.Oracle</u>**
- Correction du nom du module dans les métadonnées.
<br/><br/>

**<u>Az.PostgreSql</u>**
- Ajout de la prise en charge de la géorestauration dans les applets de commande *Restore-AzPostgreSqlFlexibleServer* :
    - Détermination automatique de la région associée au serveur source lors de la géorestauration.
    - Amélioration de la validation des configurations d'accès privé et de zone DNS lors des opérations de restauration.
<br/><br/>

**<u>Az.RecoveryServices</u>**
- Correction de la protection contre la reprise avec *AzureFileshare*.
- Correction de l'obtention d'un élément de sauvegarde pour les éléments MSSQL supprimés de manière réversible.
- Ajout d'une vérification pour comparer le groupe de ressources de machines virtuelles dans la liste des machines virtuelles renvoyées pour l'enregistrement.
- Ajout de *RetainRecoveryPointsAsPerPolicy* comme opération protégée MUA dans l'applet de commande *Disable-AzRecoveryServicesBackupProtection*.

---

##### Conclusion
Allez faire la mise à jour de votre module PowerShell pour Azure pour pouvoir bénéficier des dernières mises à jour et configurations possibles.

---

##### Sources
[PowerShell Gallery](https://www.powershellgallery.com/packages/Az/14.1.0)

---


Avez-vous apprécié cet article ? Vous avez des questions, commentaires ou suggestions, n’hésitez pas à m'envoyer un message depuis le formulaire de contact.

N'oubliez pas de nous suivre et de partager cet article.