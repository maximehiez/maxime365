---
title: "Mise à jour en version 15.2.0 du module PowerShell Azure"
meta_title: ""
description: ""
date: 2026-01-26T10:00:00-05:00
image: "/images/blog/azure/azure_update_module_powershell_15_2_0_thumbnail.png"
categories: ["Azure"]
author: "Maxime Hiez"
tags: ["Module", "Mise à jour", "PowerShell"]
draft: false
---
---

##### Introduction
Microsoft a récemment publié la nouvelle version 15.2.0 du module PowerShell pour Microsoft Azure.

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
La version 15.2.0 contient les mises à jour suivantes :

**<u>Az.Accounts</u>**
- Mise à jour d'*Azure Core* de la version *1.47.3* à la version *1.50.0*.
- Correction de la télémétrie : l'ID de requête client est désormais capturé au lieu de l'ID de réponse du serveur pour les applets de commande générées par *AutoRest* [#23555].
<br/><br/>

**<u>Az.Aks</u>**
- Mise à jour de la version de l'API au *2025-08-01*.
- Ajout des applets de commande *Get-AzAksMachine*, *Get-AzAksManagedClusterMeshRevisionProfile*, *Get-AzAksManagedClusterMeshUpgradeProfile*, *Get-AzAksTrustedAccessRole*, *Get-AzAksTrustedAccessRoleBinding*, *New-AzAksTrustedAccessRoleBinding*, *Remove-AzAksAgentPoolMachine*, *Remove-AzAksTrustedAccessRoleBinding*, *Update-AzAksTrustedAccessRoleBinding*.
- Ajout des paramètres nécessaires pour *New-AzAksCluster*, *Set-AzAksCluster*, *New-AzAksNodePool*, *Update-AzAksNodePool*.
- Suppression de l'applet de commande *Get-AzAksManagedClusterOSOption*.
<br/><br/>

**<u>Az.Batch</u>**
- Mise à jour d'*Azure Core* de la version *1.47.3* à la version *1.50.0*.
- Mise à jour de l'implémentation de l'applet de commande *New-AzBatchApplicationPackage* : l'appel à *Get-AzBatchApplicationPackage* pour récupérer les clés de stockage n'est plus effectué, pour des raisons de sécurité. Le comportement de l'applet de commande reste inchangé.
<br/><br/>

**<u>Az.Compute</u>**
- Ajout du paramètre *-HighSpeedInterconnectPlacement* aux applets de commande *New-AzVmssConfig* et *New-AzVmss*.
- Ajout des nouveaux paramètres *ZonePlacementPolicy*, *IncludeZone*, *ExcludeZone*, *MaxZoneCount*, *EnableMaxInstancePercentPerZone* et *MaxInstancePercentPerZoneValue* à l'applet de commande *New-AzVmssConfig*.
- Ajout des nouveaux paramètres *ZonePlacementPolicy*, *IncludeZone* et *ExcludeZone* à l'applet de commande *New-AzVmss*.
- Ajout des nouveaux paramètres *MaxZoneCount*, *EnableMaxInstancePercentPerZone* et *MaxInstancePercentPerZoneValue* à l'applet de commande *Update-AzVmss*.
- Mise à jour d'*Azure.Core* de la version *1.47.3* à la version *1.50.0*.
<br/><br/>

**<u>Az.ContainerRegistry</u>**
- Correction de l'utilisation de *-ExposeToken* avec *Connect-AzContainerRegistry*.
- Mise à jour d'*Azure Core* de la version *1.47.3* à la version *1.50.0*.
<br/><br/>

**<u>Az.CosmosDB</u>**
- Mise à jour d'*Azure Core* de la version *1.47.3* à la version *1.50.0*.
<br/><br/>

**<u>Az.DataFactory</u>**
- Amélioration de la prise en charge des propriétés de connexion *Jira V2* et *Netezza V2*.
<br/><br/>

**<u>Az.DataLakeStore</u>**
- Mise à jour d'*Azure Core* de la version *1.47.3* à la version *1.50.0*.
<br/><br/>

**<u>Az.FrontDoor</u>**
- Correction du problème lié à *New-AzFrontDoorWafManagedRuleOverrideObject*.
<br/><br/>

**<u>Az.KeyVault</u>*
- Mise à jour d'*Azure Core* de la version *1.47.3* à la version *1.50.0*.
<br/><br/>

**<u>Az.MachineLearningServices</u>**
- Modifications majeures annoncées. Veuillez consulter https://go.microsoft.com/fwlink/?linkid=2333229.
<br/><br/>

**<u>Az.Migrate</u>**
- Mise à jour de *DefaultCrashConsistentFrequencyInMinutes* et *DefaultAppConsistentFrequencyInMinutes* pour une meilleure cohérence avec l'expérience utilisateur du portail Azure pour la stratégie de réplication.
- *New-AzMigrateLocalServerReplication*.
<br/><br/>

**<u>Az.NetAppFiles</u>**
- Mise à jour d'*Azure.Core* de la version *1.47.3* à la version *1.50.0*.
- Disponibilité générale du module *Az.NetAppFiles*.
<br/><br/>

**<u>Az.Network</u>**
- Intégration de *Microsoft.Security/privateLinks* aux applets de commande communes de liens privés.
<br/><br/>

**<u>Az.PolicyInsights</u>**
- Mise à jour d'*Azure Core* de la version *1.47.3* à la version *1.50.0*.
<br/><br/>

**<u>Az.RecoveryServices</u>**
- Ajout de la prise en charge de la restauration interrégionale pour les régions cloud Bleu.
- Ajout de la prise en charge des zones de disponibilité dans la protection contre les mises à jour.
- Ajout de la prise en charge des domaines de défaillance de la plateforme dans les flux de travail d'activation, de mise à jour et de basculement de la protection.
<br/><br/>

**<u>Az.SignalR</u>**
- Mise à jour d'*Azure Core* de la version *1.47.3* à la version *1.50.0*.
<br/><br/>

**<u>Az.Sql</u>**
- Ajout de l'applet de commande *Get-AzSqlDeletedServer* pour récupérer les serveurs Azure SQL supprimés (suppression réversible).
    - Prise en charge de la récupération des serveurs supprimés par emplacement ou d'un serveur spécifique par son nom.
- Modifications majeures annoncées. Veuillez consulter https://go.microsoft.com/fwlink/?linkid=2333229.
- Le paramètre *EnableSoftDelete* est obsolète dans les applets de commande *New-AzSqlServer* et *Set-AzSqlServer* et sera supprimé d'ici Mai 2026.
<br/><br/>

**<u>Az.StackHCI</u>**
- Activation d'ARC pour les nœuds avant le déclenchement de l'inscription dans le flux de nouvelle inscription.
- Résolution du problème d'authentification à deux sauts.
<br/><br/>

**<u>Az.Storage</u>**
- Mise à niveau du SDK du plan de gestion et des applets de commande générées automatiquement conformément à la spécification d'API générée par TSP.
- Mise à jour d'*Azure Core* de la version *1.47.3* à la version *1.50.0*.
<br/><br/>

**<u>Az.Synapse</u>**
- Mise à jour d'*Azure Core* de la version *1.47.3* à la version *1.50.0*.

---

##### Conclusion
Allez faire la mise à jour de votre module PowerShell pour Azure pour pouvoir bénéficier des dernières mises à jour et configurations possibles.

---

##### Sources
[PowerShell Gallery](https://www.powershellgallery.com/packages/Az/15.2.0)

---


Avez-vous apprécié cet article ? Vous avez des questions, commentaires ou suggestions, n’hésitez pas à m'envoyer un message depuis le formulaire de contact.

N'oubliez pas de nous suivre et de partager cet article.