---
title: "Mise à jour en version 16.2.0 du module PowerShell Azure"
meta_title: ""
description: ""
date: 2026-08-05T10:00:00-05:00
image: "/images/blog/azure/azure_update_module_powershell_16_2_0_thumbnail.png"
categories: ["Azure"]
author: "Maxime Hiez"
tags: ["Module", "Mise à jour", "PowerShell"]
draft: false
---
---

##### Introduction
Microsoft a récemment publié la nouvelle version 16.2.0 du module PowerShell pour Microsoft Azure.

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
La version 16.2.0 contient les mises à jour suivantes :

**<u>Az.Accounts</u>**
- Mise à jour de *Azure.Core* de la version *1.56.0* à *1.57.0*.
- Mise à jour de *System.ClientModel* de la version *1.12.0* à *1.13.0*.
<br/><br/>

**<u>Az.Cdn</u>**
- Mise à jour de la version de l'API vers *2026-04-01-preview*.
- Correction des opérations de longue durée CDN qui retournaient des réponses de ressource complétées sans en-tête *Location*.
<br/><br/>

**<u>Az.Compute</u>**
- Dépréciation de l'extension *Azure Enhanced Monitoring* (*AEM*) pour SAP sur les machines virtuelles, *Set-AzVMAEMExtension* installant désormais la nouvelle extension par défaut.
- Ajout des applets de commande *New-AzInterconnectBlock*, *Get-AzInterconnectBlock*, *Update-AzInterconnectBlock*, et *Remove-AzInterconnectBlock* pour la gestion des ressources *Microsoft.Compute/interconnectBlocks* pour les performances élevées.
- Marque les paramètres *-EnableWAD*, *-SkipStorage* et *-InstallNewExtension* comme obsolètes dans *Set-AzVMAEMExtension*. Ces éléments seront supprimés dans une future version majeure.
- Préservation des caractères spéciaux CMD dans les valeurs de paramètres de *Invoke-AzVMRunCommand* et *Invoke-AzVmssVMRunCommand* pour l'exécution de RunCommand sous Windows PowerShell. [#29880]
<br/><br/>

**<u>Az.CosmosDB</u>**
- Mise à jour de *Azure.Security.KeyVault.Keys* vers la version *4.10.0* pour assurer la cohérence avec les autres modules.
<br/><br/>

**<u>Az.EventHub</u>**
- Ajout du paramètre *-IPAddressType* aux applets de commande *New-AzEventHubNamespace* et *Set-AzEventHubNamespace*.
<br/><br/>

**<u>Az.FrontDoor</u>**
- Ajout de la prise en charge des exceptions aux règles gérées du *Front Door WAF* :
    - Ajout de *ExceptionListException* aux applets de commande *New-AzFrontDoorWafPolicy* et *Update-AzFrontDoorWafPolicy*.
    - Ajout d'applets de commande d'assistance pour les étendues d'exception des règles gérées du WAF.
<br/><br/>

**<u>Az.Functions</u>**
- Mise à jour de l'analyseur de piles applicatives des Function Apps pour les définitions de runtime dépourvues du paramètre d'application *FUNCTIONS_WORKER_RUNTIME*. [#29630]
- Ajout de la prise en charge des applications de fonction Go dans *New-AzFunctionApp* pour les plans *Flex Consumption*.
<br/><br/>

**<u>Az.KeyVault</u>**
- Renseignement de *KeySize* dans la sortie de *Get-AzKeyVaultKey* pour des types de clés supplémentaires ; auparavant, seule la taille des clés RSA était renseignée.
- Mise à jour de *Azure.Security.KeyVault.Keys* de la version *4.6.0-beta.1* à *4.10.0*.
<br/><br/>

**<u>Az.NetAppFiles</u>**
- Ajout de *FileAccessLogs* à la sortie de *Get-AzNetAppFilesCache*.
- Ajout de la prise en charge du mode *Breakthrough* pour les volumes Azure NetApp Files :
    - Ajout de *-BreakthroughMode* à *New-AzNetAppFilesVolume* et *New-AzNetAppFilesVolumeGroup*.
    - Ajout de *BreakthroughMode* à la sortie des volumes pour *Get-AzNetAppFilesVolume* et *Get-AzNetAppFilesVolumeGroup*.
<br/><br/>

**<u>Az.Network</u>**
- Ajout de nouvelles applets de commande pour la gestion *ConnectionPolicy* au sein d'un *VirtualHub* :
    - *Get-AzConnectionPolicy* : Récupérer une ou toutes les ressources de stratégie de connexion associées à un VirtualHub.
    - *New-AzConnectionPolicy* : Créer une nouvelle stratégie de connexion pour un VirtualHub.
    - *Set-AzConnectionPolicy* : Mettre à jour une stratégie de connexion existante pour un VirtualHub.
    - *Remove-AzConnectionPolicy* : Supprimer une stratégie de connexion d'un VirtualHub.
- Ajout de la prise en charge de *Managed HSM* pour les applets de commande relatives aux certificats SSL d'Application Gateway (*New-AzApplicationGatewaySslCertificate*, *Set-AzApplicationGatewaySslCertificate*, *Add-AzApplicationGatewaySslCertificate*) via les paramètres *-HsmKeyId* et *-HsmPublicCertData*.
- Mise à jour des applets de commande pour les réseaux virtuels et les appliances de réseau virtuel afin d'utiliser de nouvelles propriétés.
    - *New-AzVirtualNetwork* : Ajout du paramètre *-SummarizedGatewayPrefix* pour spécifier les préfixes de passerelle résumés annoncés pour le réseau virtuel, et exposition de la propriété *SummarizedGatewayPrefixes* sur l'objet renvoyé.
    - *New-AzVirtualNetworkAppliance* : Ajout du paramètre *-PrivateIPAddressVersion* (*IPv4*, *DualStack*) pour prendre en charge les appliances de réseau virtuel à double pile (dual-stack), et exposition de la propriété *PrivateIPAddressVersion* sur l'objet renvoyé.
- Ajout de la prise en charge du routage à chemins multiples à coût égal (*ECMP*) dans les tables de routage.
    - Ajout du type de tronçon suivant *VirtualApplianceEcmp* aux applets de commande *New-AzRouteConfig*, *Add-AzRouteConfig* et *Set-AzRouteConfig*.
    - Extension du paramètre *-NextHopIpAddress* pour accepter une liste d'adresses IP de tronçon suivant (de 2 à 64) pour les routes ECMP lorsque le type de tronçon suivant est *VirtualApplianceEcmp*.
    - Ajout de la propriété *NextHop* à la sortie de route renvoyée par *Get-AzRouteTable*.
- Ajout de la prise en charge de *DisablePeeringRoute* pour les tables de routage.
    - Ajout du paramètre *-DisablePeeringRoute* à l'applet de commande *New-AzRouteTable*.
    - Les valeurs prises en charge sont *None* et *All*.
- Ajout de la propriété *Nat64* à *NatGateway* et prise en charge de celle-ci dans les applets de commande suivantes :
    - *New-AzNatGateway*
    - *Set-AzNatGateway*
- Correction du mode liste de *Get-AzPrivateDnsZoneGroup* : les noms du groupe de ressources et du point de terminaison privé étaient transmis au SDK dans le mauvais ordre, ce qui provoquait une erreur *ResourceGroupNotFound* lors de l'énumération des groupes de zones DNS privées sans le paramètre *-Name*.
- Ajout des propriétés *ServiceTag*, *ReadinessState*, *Description* et *OutboundSupported* à la réponse de *Get-AzNetworkSecurityPerimeterAssociableResourceType*.
- Suppression des validations pour permettre l'utilisation de nouveaux *AuxiliarySkus* dans la commande *New-AzNetworkInterface* sans avoir à les ajouter dans *ValidateSet*.
- Ajout de nouvelles applets de commande pour la gestion des stratégies personnalisées *DDoS* :
    - *New-AzDdosCustomPolicy* : Créer une nouvelle stratégie personnalisée DDoS avec des règles de détection.
    - *New-AzDdosCustomPolicy* : Nécessite au moins une règle de détection lors de la création.
    - *New-AzDdosCustomPolicyDetectionRule* : Créer une règle de détection pour une stratégie personnalisée DDoS.
    - *Add-AzDdosCustomPolicyDetectionRule* : Ajouter une règle de détection à une stratégie personnalisée DDoS en mémoire avant de la rendre persistante avec *Set-AzDdosCustomPolicy*.
    - *Get-AzDdosCustomPolicy* : Récupérer une stratégie personnalisée DDoS par groupe de ressources et par nom.
    - *Remove-AzDdosCustomPolicy* : Supprimer une stratégie personnalisée DDoS.
    - *Remove-AzDdosCustomPolicyDetectionRule* et *Set-AzDdosCustomPolicy* : Prise en charge du flux de travail de type *équilibreur de charge* (*load balancer*) pour modifier un objet de stratégie local puis le rendre persistant.
    - Prise en charge de plusieurs règles de détection avec type de trafic configurable (*Tcp*, *Udp*, *TcpSyn*) et seuils de paquets par seconde.
- Mise à jour de la version de l'API *Microsoft.HardwareSecurityModules/cloudHsmClusters* vers *2025-03-31* pour les applets de commande communs Private Link.
- Intégration de *Microsoft.HardwareSecurityModules/paymentHsmClusters* aux applets de commande communs Private Link.
- Correction du problème où *VerifyClientAuthMode* n'était pas conservé lors des conversions de modèles PowerShell et SDK pour la configuration de l'authentification client d'Application Gateway.
- Ajout des applets de commande pour les opérations sur les adresses IP publiques de services cloud :
    - *Invoke-AzPublicIpAddressCloudServiceReservation* : Réserver une adresse IP publique de service cloud ou revenir à une allocation dynamique (*-IsRollback*).
    - *Invoke-AzPublicIpAddressDisassociateCloudServiceReservedIp* : Dissocier une adresse IP publique réservée autonome d'une adresse IP publique de service cloud. Utilisez *-PublicIpArmId* pour l'ID de ressource *Azure Resource Manager* (*ARM*) de l'adresse IP publique autonome.
<br/><br/>

**<u>Az.RecoveryServices</u>**
- Ajout de la prise en charge de *Cross Subscription Backup* (*CBS*) pour les machines virtuelles Azure :
    - Ajout du paramètre facultatif *-ContainerSubscriptionId* à la commande *Enable-AzRecoveryServicesBackupProtection* pour configurer la sauvegarde d’une machine virtuelle située dans un abonnement différent de celui du coffre.
    - Ajout de la prise en charge de la restauration à l’emplacement d’origine (OLR) pour les éléments protégés entre abonnements dans la commande *Restore-AzRecoveryServicesBackupItem* (l’abonnement du conteneur est déduit du point de récupération ; aucune entrée supplémentaire n’est requise).
    - Ajout de la propriété *ContainerSubscriptionId* à la réponse relative à l’élément de sauvegarde pour la commande *Get-AzRecoveryServicesBackupItem*.
    - Ajout de la propriété *ContainerSubscriptionId* à la réponse détaillée du travail pour la commande *Get-AzRecoveryServicesBackupJobDetail*.
    - Ajout d’une validation côté client lorsque *-ContainerSubscriptionId* est fourni, afin que toute tentative impliquant une machine virtuelle, un groupe de ressources ou un abonnement inexistant, ou une machine virtuelle située dans une région différente de celle du coffre, échoue en renvoyant un message d’erreur clair et spécifique à la machine virtuelle.
- Ajout d'une validation côté client lorsque le paramètre *-ContainerSubscriptionId* est fourni ; ainsi, si la machine virtuelle, le groupe de ressources ou l'abonnement n'existe pas, ou si la machine virtuelle se trouve dans une région différente de celle du coffre, l'opération échoue en renvoyant un message d'erreur clair et spécifique à la machine virtuelle.
- Correction d'un problème où les paramètres d'accès privé aux disques (Private Disk Access) étaient ignorés sans avertissement lors de l'ajout de disques, de la reprotection ou de la reprotection de cluster pour une réplication de disques gérés Azure vers Azure.
    - *Add-AzRecoveryServicesAsrReplicationProtectedItemDisk* prend désormais en compte les paramètres *-RecoveryNetworkAccessPolicy*, *-RecoveryDiskAccessId* et *-RecoveryPublicNetworkAccess* fournis dans la configuration de réplication des disques.
    - *Update-AzRecoveryServicesAsrProtectionDirection* (reprotection) transmet ces trois mêmes champs lors de l'appel de basculement de la protection (switch-protection).
    - *Update-AzRecoveryServicesAsrClusterProtectionDirection* (reprotection de cluster) transmet ces trois mêmes champs lors de l'appel de basculement de la protection du cluster.
- Ajout de la prise en charge de la configuration des paramètres de gestion des coûts (niveau de granularité) pour les coffres Recovery Services via les commandes *New-AzRecoveryServicesVault* et *Update-AzRecoveryServicesVault*.
<br/><br/>

**<u>Az.Resources</u>**
- Ajout des applets de commande *WhatIfResult* pour les piles de déploiement aux portées groupe de ressources, abonnement et groupe d'administration.
    - Alignement des noms de paramètres sur les conventions de nommage d'Azure PowerShell.
    - Export de l'ensemble des applets de commande *WhatIfResult* des piles de déploiement depuis le manifeste du module.
<br/><br/>

**<u>Az.ServiceBus</u>**
- Ajout des paramètres *GeoDataReplicationMaxReplicationLagDurationInSecond*, *GeoDataReplicationLocation* et *IPAddressType* aux applets de commande *New-AzServiceBusNamespace* et *Set-AzServiceBusNamespace*.
- Ajout de nouvelles applets de commande pour effectuer le basculement d'un espace de noms *Start-AzServiceBusNamespaceFailOver*.
- Ajout de nouvelles applets de commande pour générer l'objet de réplication destiné au paramètre de réplication *New-AzServiceBusLocationsNameObject*.
- Ajout des nouvelles applets de commande *Get-AzServiceBusNetworkSecurityPerimeterConfiguration* et *Get-AzServiceBusNetworkSecurityPerimeterConfigurationsForAssociation*.
<br/><br/>

**<u>Az.Storage</u>**
- Correction d'une vulnérabilité de type *path traversal* dans *Get-AzStorageBlobContent* et *Get-AzDataLakeGen2ItemContent*, où un nom de blob ou de fichier source contenant des segments de traversée de répertoire (par exemple « ../ ») pouvait entraîner l'écriture de contenu en dehors du répertoire de destination spécifié.

---

##### Conclusion
Allez faire la mise à jour de votre module PowerShell pour Azure pour pouvoir bénéficier des dernières mises à jour et configurations possibles.

---

##### Sources
[PowerShell Gallery](https://www.powershellgallery.com/packages/Az/16.2.0)

---


Avez-vous apprécié cet article ? Vous avez des questions, commentaires ou suggestions, n'hésitez pas à m'envoyer un message depuis le formulaire de contact.

N'oubliez pas de nous suivre et de partager cet article.