---
title: "Mise à jour en version 16.3.0 du module PowerShell Azure"
meta_title: ""
description: ""
date: 2026-09-04T10:00:00-05:00
image: "/images/blog/azure/azure_update_module_powershell_16_3_0_thumbnail.png"
categories: ["Azure"]
author: "Maxime Hiez"
tags: ["Module", "Mise à jour", "PowerShell"]
draft: false
---
---

##### Introduction
Microsoft a récemment publié la nouvelle version 16.3.0 du module PowerShell pour Microsoft Azure.

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
La version 16.3.0 contient les mises à jour suivantes :

**<u>Az.Accounts</u>**
- Correction de *Get-AzSubscription* afin de renvoyer une erreur claire au lieu de ne rien retourner lorsque *-TenantId* ne correspond pas au contexte d'identité de service gérée (*MSI*) courant. [#25710]
<br/><br/>

**<u>Az.Cdn</u>**
- Ajout de la prise en charge de *ChangeSafety*.
<br/><br/>

**<u>Az.Compute</u>**
- Ajout des paramètres *-WireServerUseLocalFileRules* et *-ImdsUseLocalFileRules* à *Set-AzVMProxyAgentSetting* et *Set-AzVmssProxyAgentSetting* pour configurer les règles de fichier local des points de terminaison hôtes des machines virtuelles (*VM*) et des groupes de machines virtuelles identiques (*VMSS*). [#30055]
- Mise à jour des applets de commande *ComputeRP*, *DiskRP* et *GalleryRP* vers les versions d'API *2026-04-01*, *2026-03-02* et *2025-12-03* respectivement.
- Ajout du paramètre *-ProcessorMode* aux applets de commande de création et de mise à jour de VM et de VMSS : *New-AzVMConfig*, *New-AzVM*, *Update-AzVM*, *New-AzVmssConfig*, *New-AzVmss* et *Update-AzVmss*. [#30012]
- Ajout du paramètre *-ForceDeallocate* à *Stop-AzVM* pour forcer la désallocation d'une VM lors de l'arrêt ; il ne peut pas être utilisé avec *-Hibernate*, *-StayProvisioned* ou *-SkipShutdown*.
- Ajout du paramètre *-ReservationType* à *New-AzCapacityReservationGroup* et *Update-AzCapacityReservationGroup* pour les groupes de réservation de capacité *Open*, et exposition de *ReservationType* dans la sortie.
- Ajout du paramètre *-DisableCapacityReservationAssignment* à *New-AzVM*, *New-AzVMConfig* et *Update-AzVM* pour exclure une VM de la réservation de capacité.
- Ajout de *CapacityReservationType* aux vues d'instance de *Get-AzVM -Status*.
- Ajout du paramètre *-DisableCapacityReservationAssignment* à *New-AzVmss*, *New-AzVmssConfig* et *Update-AzVmss* pour exclure les instances VMSS de la réservation de capacité.
- Ajout de la propriété *CapacityReservation* à la sortie de *Get-AzVmssVM* et de la propriété *CapacityReservationType* à sa sortie *-InstanceView*.
<br/><br/>

**<u>Az.CosmosDB</u>**
- Régénération du SDK de gestion Cosmos DB avec la version d'API stable *2026-03-15*.
<br/><br/>

**<u>Az.IotHub</u>**
- Correction de *New-AzIotHubKey* afin de générer des clés d'accès partagé sécurisées lors de la rotation de la clé primaire ou secondaire.
<br/><br/>

**<u>Az.KeyVault</u>**
- Mise à niveau de la version d'API du plan de contrôle Key Vault vers *2026-02-01*.
    - Les versions d'API antérieures sont retirées le 27 Février 2027 ; cette mise à niveau permet à *Az.KeyVault* de continuer à fonctionner ensuite.
    - Aucune action ni changement de comportement des applets de commande n'est requis. *New-AzKeyVault* crée des coffres avec le contrôle d'accès basé sur les rôles (*RBAC*) activé par défaut depuis Az.KeyVault 6.0.0 et transmet ce paramètre explicitement, la nouvelle valeur par défaut du service n'a donc pas d'incidence. Utilisez *DisableRbacAuthorization* pour les stratégies d'accès.
<br/><br/>

**<u>Az.NetAppFiles</u>**
- Ajout d'avis de dépréciation aux applets de commande de sous-volume Azure NetApp Files.
- Ajout d'avis de changement majeur pour la suppression de *EnableSubvolume* et de la propriété de sortie de volume *EnableSubvolumes*.
- Correction du type de sortie de *Get-AzNetAppFilesVolumeQuotaRule*, de *PSNetAppFilesVolume* vers *PSNetAppFilesVolumeQuotaRule*.
<br/><br/>

**<u>Az.Network</u>**
- Ajout de *Get-AzExpressRouteLag*, *New-AzExpressRouteLag*, *Set-AzExpressRouteLag*, *Remove-AzExpressRouteLag*, *New-AzExpressRouteLagLOA*, *Get-AzExpressRouteLagLink* et *Get-AzExpressRouteLagMember* pour les ressources *ExpressRouteLag* (API Microsoft.Network *2025-09-01*).
    - Les applets de commande prennent en charge les opérations CRUD, la génération de la lettre d'autorisation, ainsi que la récupération des liens et des membres.
    - Ajout de *New-AzExpressRouteLagIdentity*, *Get-AzExpressRouteLagIdentity*, *Set-AzExpressRouteLagIdentity* et *Remove-AzExpressRouteLagIdentity* pour l'identité managée affectée par l'utilisateur sur un *ExpressRouteLag*.
- Ajout de *Get-AzAddressPrefixSet*, *New-AzAddressPrefixSet*, *Set-AzAddressPrefixSet* et *Remove-AzAddressPrefixSet* pour gérer les préfixes CIDR (*Classless Inter-Domain Routing*) IPv4 et IPv6 des groupes de sécurité d'application.
- Ajout de *Move-AzVirtualNetworkIpConfiguration* pour déplacer les configurations d'adresses IP privées secondaires entre les interfaces réseau d'un réseau virtuel, et de *New-AzMoveIpConfigurationItem* pour créer les paires source et cible. Prend en charge *-AsJob*.
- Ajout du paramètre *-AddressPrefixV6* à *New-AzVirtualHub* et *Update-AzVirtualHub*, et du paramètre *-EnableOnlyIpv6Peering* à *New-AzVirtualHubVnetConnection*.
- Ajout de la prise en charge de la gestion des Kube Selector Groups sur une stratégie de pare-feu.
    - *Get-AzFirewallPolicyKubeSelectorGroup*, *New-AzFirewallPolicyKubeSelectorGroup*, *Set-AzFirewallPolicyKubeSelectorGroup*, *Remove-AzFirewallPolicyKubeSelectorGroup*.
    - Ajout de *New-AzFirewallPolicyKubeLabelSelector* et *New-AzFirewallPolicyLabelSelectorExpression* pour les sélecteurs d'étiquettes de pods et d'espaces de noms.
- Exposition des propriétés AFC (*Azure Firewall for Containers*) en lecture seule : *AfcManaged* sur *Get-AzFirewallPolicy* et le point de terminaison de plan de contrôle *AfcConfiguration.ServiceEndpoint* sur *Get-AzFirewall*. Le point de terminaison ne peut pas être défini via *New-AzFirewall* ou *Set-AzFirewall*.
- Mise à niveau du SDK Network vers la version d'API *2025-09-01* ; ajout de *DisableDefaultServerHeaderInResponse* à la sortie de *Get-AzApplicationGateway* et du paramètre *-DisableDefaultServerHeaderInResponse* à *New-AzApplicationGateway*.
- Ajout de la sortie en lecture seule *UpgradedToV2* à *Get-AzPublicIpAddress* et *Get-AzPublicIpPrefix* pour les mises à niveau de référence SKU Standard vers StandardV2.
- Ajout de *Get-AzInterconnectGroup* pour récupérer un ou plusieurs InterconnectGroups, et de *New-AzInterconnectGroup*, *Set-AzInterconnectGroup* et *Remove-AzInterconnectGroup* pour les créer, les mettre à jour et les supprimer.
    - Ajout de *Get-AzInterconnectGroupSubgroup* pour récupérer un ou tous les sous-groupes et de *Get-AzInterconnectGroupNodeAvailability* pour récupérer la disponibilité des nœuds.
- Ajout des paramètres *-DdosCustomPolicyId* et *-RemoveDdosCustomPolicy* à *Set-AzPublicIpAddress* pour ajouter ou supprimer les associations de stratégie personnalisée DDoS (*DCP*) sur les rattachements d'adresses IP publiques pris en charge, sans nécessiter un mode de protection DDoS spécifique.
- Ajout de *New-AzFirstPartyServiceTag*, *Get-AzFirstPartyServiceTag*, *Set-AzFirstPartyServiceTag* et *Remove-AzFirstPartyServiceTag* pour créer, récupérer, mettre à jour et supprimer les First Party Service Tags, ainsi que de la prise en charge de l'association dans *New-AzPublicIpTag*.
- Ajout de *Get-AzVirtualNetworkGatewayEffectiveRoute* pour les routes effectives des passerelles de réseau virtuel.
- Ajout des paramètres *-Mode* et *-Scope* à *New-AzLoadBalancer*. Utilisez *-Mode Advanced* avec *-Scope Public* ou *-Scope Private* pour créer un équilibreur de charge de référence SKU Standard avancé (basé sur *Banksy*) ; le mode ne peut pas être modifié par la suite.
- Ajout du paramètre de commutateur *-EnableConnectionTracking* à *New-AzLoadBalancerFrontendIpConfig*, *Add-AzLoadBalancerFrontendIpConfig* et *Set-AzLoadBalancerFrontendIpConfig*.
    - Active le suivi de flux UDP (*User Datagram Protocol*) pour la configuration d'adresse IP frontale, afin que les paquets d'un même flux atteignent systématiquement la même instance principale, en prenant le pas sur les paramètres définis au niveau des règles. Nécessite un équilibreur de charge créé avec *-Mode Advanced* et *-Scope*.
- Ajout de la prise en charge des circuits ExpressRoute multicloud avec la valeur *MultiCloud* pour *-SkuTier*, ainsi que des paramètres *-PartnerAccountId* et *-ActivationKey* sur *New-AzExpressRouteCircuit*.
    - Exposition de *PartnerAccountId*, *ActivationKey* et *ResiliencyLevel* sur *PSExpressRouteCircuit*.
- Ajout des paramètres *RoutingConfiguration*, *VirtualHubVnetConnection* et *VirtualHubVnetConnectionId* à *Add-AzRouteServerPeer* et *Update-AzRouteServerPeer*.
    - Prend en charge les cartes de routage entrantes et sortantes ainsi qu'une connexion de réseau virtuel au hub par objet ou par ID de ressource.
- Ajout du paramètre *RoutingConfiguration* à *New-AzVirtualNetworkGatewayConnection* et *Set-AzVirtualNetworkGatewayConnection*.
    - Prend en charge les cartes de routage entrantes et sortantes.
<br/><br/>

**<u>Az.RecoveryServices</u>**
- Ajout de la restauration inter-régions (*Cross Region Restore*) pour les sauvegardes de partages de fichiers Azure via *Get-AzRecoveryServicesBackupItem -UseSecondaryRegion*, *Get-AzRecoveryServicesBackupRecoveryPoint -UseSecondaryRegion* et *Restore-AzRecoveryServicesBackupItem -RestoreToSecondaryRegion*.
- Affinement du comportement de suppression réversible pour les éléments de sauvegarde de partages de fichiers Azure.
    - *Undo-AzRecoveryServicesBackupItemDeletion* renvoie désormais une erreur si l'élément n'est pas en suppression réversible (*ToBeDeleted*), ce qui évite une demande d'annulation de suppression invalide.
    - Correction de *DateOfPurge* pour utiliser la fenêtre de suppression différée restante renvoyée par le service au lieu d'une valeur fixe de 14 jours.
<br/><br/>

**<u>Az.Resources</u>**
- Mise à jour des applets de commande Policy pour utiliser l'API *2026-01-01*.
- Ajout de *Get-AzPolicyEnrollment*, *New-AzPolicyEnrollment*, *Remove-AzPolicyEnrollment* et *Update-AzPolicyEnrollment* pour les Policy Enrollments.
- Ajout d'un avis what-if de déploiement de modèle pour la fonctionnalité What-If des piles de déploiement, désormais en disponibilité générale, afin de réduire le bruit dans les résultats.
- Renommage de *DenySettingsApplyToChildScope* en *DenySettingsApplyToChildScopes* pour les applets de commande *WhatIfResult* des piles de déploiement, en conservant un alias.
- Ajout de *ResourcesWithoutDeleteSupport* et de la prise en charge des étiquettes aux applets de commande *WhatIfResult* des piles de déploiement et à leur sortie.
<br/><br/>

**<u>Az.Security</u>**
- Ajout des applets de commande SQL Vulnerability Assessment pour l'API *2026-04-01-preview* :
    - *Get-AzSecuritySqlVulnerabilityAssessmentSetting*, *New-AzSecuritySqlVulnerabilityAssessmentSetting*, *Update-AzSecuritySqlVulnerabilityAssessmentSetting* et *Remove-AzSecuritySqlVulnerabilityAssessmentSetting*.
    - *Get-AzSecuritySqlVulnerabilityAssessmentBaselineRule*, *New-AzSecuritySqlVulnerabilityAssessmentBaselineRule*, *Add-AzSecuritySqlVulnerabilityAssessmentBaselineRule* et *Remove-AzSecuritySqlVulnerabilityAssessmentBaselineRule*.
    - *Get-AzSecuritySqlVulnerabilityAssessmentScan*, *Get-AzSecuritySqlVulnerabilityAssessmentScanRuleResult* et *Invoke-AzSecurityInitiateSqlVulnerabilityAssessmentScan*. Le nom par règle évite une collision avec l'ancienne applet de commande *Get-AzSecuritySqlVulnerabilityAssessmentScanResult*.
<br/><br/>

**<u>Az.Sql</u>**
- Ajout des liens Managed Instance multi-bases de données via *LinkMode* sur *New-AzSqlInstanceLink* et des mises à jour d'appartenance de base de données sur *Update-AzSqlInstanceLink*.
- Amélioration des requêtes au niveau de l'abonnement de *Get-AzSqlDeletedServer* en rendant l'emplacement facultatif et en ajoutant les sorties *ScheduledPurgeTime* et *Location*.
<br/><br/>

**<u>Az.Websites</u>**
- Ajout de la prise en charge de la création et de la mise à jour de plans App Service Environment pour les références SKU Isolated v4 et Isolated v4 optimisées en mémoire.

---

##### Conclusion
Allez faire la mise à jour de votre module PowerShell pour Azure pour pouvoir bénéficier des dernières mises à jour et configurations possibles.

---

##### Sources
[PowerShell Gallery](https://www.powershellgallery.com/packages/Az/16.3.0)

---


Avez-vous apprécié cet article ? Vous avez des questions, commentaires ou suggestions, n'hésitez pas à m'envoyer un message depuis le formulaire de contact.

N'oubliez pas de nous suivre et de partager cet article.