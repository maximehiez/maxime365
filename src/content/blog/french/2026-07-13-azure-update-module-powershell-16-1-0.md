---
title: "Mise à jour en version 16.1.0 du module PowerShell Azure"
meta_title: ""
description: ""
date: 2026-07-13T10:00:00-05:00
image: "/images/blog/azure/azure_update_module_powershell_16_1_0_thumbnail.png"
categories: ["Azure"]
author: "Maxime Hiez"
tags: ["Module", "Mise à jour", "PowerShell"]
draft: false
---
---

##### Introduction
Microsoft a récemment publié la nouvelle version 16.1.0 du module PowerShell pour Microsoft Azure.

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
La version 16.1.0 contient les mises à jour suivantes :

**<u>Az.Accounts</u>**
- Mise à jour de *Azure.Core* de la version *1.50.0* à *1.56.0*.
- Mise à jour de *Azure.Identity* vers la version *1.21.0*.
- Mise à jour de *Azure.Identity.Broker* de la version *1.1.0* à *1.6.0*.
- Mise à jour de *System.ClientModel* de la version *1.8.0* à *1.12.0*.
- Mise à jour de *System.Text.Json* de la version *8.0.6* à *10.0.3*.
- Mise à jour de des dépendances MSAL (*Microsoft.Identity.Client*, *Microsoft.Identity.Client.Extensions.Msal*, *Microsoft.Identity.Client.Broker*) de la version *4.83.1* à *4.84.0*.
- Mise à jour de *Microsoft.Identity.Client.NativeInterop* de la version *0.20.2* à *0.20.4*.
- Correction : *MicrosoftGraphUrl* n'était pas renseigné lorsque les métadonnées ARM (*Azure Resource Manager*) retournaient un endpoint sans barre oblique finale.
<br/><br/>

**<u>Az.Aks</u>**
- Ajout de la prise en charge du SKU *Azure Container Linux* via le paramètre *-NodeOsSKU* dans *New-AzAksCluster* et *-OsSKU* dans *New-AzAksNodePool*.
- Mise à jour de la version de l'API vers le *2026-03-01*.
<br/><br/>

**<u>Az.AppConfiguration</u>**
- Mise à jour de la version de l'API de *2024-06-01* vers *2026-04-01*.
    - Ajout de la prise en charge du champ *Description* pour les Key Values et les Snapshots.
<br/><br/>

**<u>Az.Automation</u>**
- Mise à jour de la gestion des identités pour utiliser explicitement le modèle d'identité du SDK *Automation* dans les flux de création et de mise à jour.
<br/><br/>

**<u>Az.Batch</u>**
- Correction du conflit de chargement de module : alignement de *Microsoft.ApplicationInsights* sur la version commune *2.18.0*, résolvant l'erreur *"Assembly with same name is already loaded"*.
<br/><br/>

**<u>Az.CognitiveServices</u>**
- Mise à jour de la gestion des identités pour utiliser explicitement le modèle d'identité du SDK *Cognitive Services* dans les flux de création et de mise à jour.
<br/><br/>

**<u>Az.Compute</u>**
- Mise à jour de la version de l'API vers *ComputeRP 2026-03-01*.
- Ajout des paramètres *-ScheduledEventsApiVersion* et *-EnableAllInstancesDown* aux applets de commande *Update-AzAvailabilitySet*, *Update-AzVM*, *New-AzVM* (*SimpleParameterSet*) et *New-AzVmss*.
- Ajout des paramètres *-ScheduledEventsApiVersion* et *-EnableAllInstancesDown* à *Update-AzVmss* (pris en charge uniquement avec le paramètre objet *-VirtualMachineScaleSet*).
- Ajout de la prise en charge des hooks de cycle de vie des VMSS (*Virtual Machine Scale Set*) (aperçu public) :
    - Ajout de l'applet de commande *New-AzVmssLifecycleHookConfig* pour créer un objet de configuration de hook de cycle de vie en mémoire.
    - Ajout de l'applet de commande *Set-AzVmssLifecycleHooksProfile* pour associer des hooks de cycle de vie à une configuration VMSS ou à un objet VMSS actif.
    - Ajout de l'applet de commande *Remove-AzVmssLifecycleHook* pour supprimer un hook avec l’option *-Type* ou tous les hooks avec l’option *-All* d’un VMSS actif.
    - Ajout de l'applet de commande *Get-AzVmssLifecycleHookEvent* pour lister ou récupérer les événements de hook de cycle de vie d’un VMSS.
    - Ajout de l'applet de commande *Update-AzVmssLifecycleHookEvent* pour répondre à un événement de hook de cycle de vie (approuver, refuser ou retarder) avec un filtrage optionnel par instance de machine virtuelle via *-InstanceId*.
    - Ajout du paramètre *-LifecycleHooksProfile* à *New-AzVmssConfig* pour prendre en charge la création de profils de hooks de cycle de vie en ligne.
<br/><br/>

**<u>Az.DataFactory</u>**
- Mise à jour de *System.IO.FileSystem.AccessControl* de la version *4.5.0* à *5.0.0*.
<br/><br/>

**<u>Az.DataMigration</u>**
- Suppression de la clé d'authentification de la sortie console.
<br/><br/>

**<u>Az.DataProtection</u>**
- Dépréciation du paramètre *-OverwriteLifeCycle* dans *Edit-AzDataProtectionPolicyRetentionRuleClientObject*.
- Mise à jour des messages d'aide pour le paramètre *-Name* des règles de rétention dans *Edit-AzDataProtectionPolicyRetentionRuleClientObject*.
<br/><br/>

**<u>Az.Dns</u>**
- Ajout de la prise en charge du lien entre les jeux d'enregistrements DNS et les profils *Azure Traffic Manager*.
    - Ajout du paramètre *-TrafficManagerProfileId* à *New-AzDnsRecordSet*.
    - *Get-AzDnsRecordSet* et *Set-AzDnsRecordSet* exposent désormais *TrafficManagerProfileId*.
<br/><br/>

**<u>Az.IotHub</u>**
- Mise à jour de *Microsoft.Extensions.DependencyInjection.Abstractions* de la version *8.0.2* à *10.0.3*.
<br/><br/>

**<u>Az.KeyVault</u>**
- Mise à jour de *System.Security.Cryptography.Cng* de la version *4.5.0* à *5.0.0*.
<br/><br/>

**<u>Az.Network</u>**
- Intégration de *Microsoft.HorizonDB/clusters* aux applets de commande communes *Private Link*.
<br/><br/>

**<u>Az.OperationalInsights</u>**
- Mise à jour des conversions *PSIdentity* pour utiliser explicitement le modèle d'identité du SDK *Operational Insights*.
<br/><br/>

**<u>Az.RecoveryServices</u>**
- Mise à jour de *System.Security.Cryptography.Cng* de la version *4.4.0* à *5.0.0*.
- Ajout de la prise en charge de la restauration inter-régions pour les régions *Delos*.
- Mise à jour de *Az.RecoveryServices.SiteRecovery* vers la version de l'API *2026-02-01*.
- Ajout de la prise en charge de *Private Disk Access* pour la réplication de disques managés *Azure-to-Azure*, avec les nouveaux paramètres *-RecoveryNetworkAccessPolicy*, *-RecoveryDiskAccessId* et *-RecoveryPublicNetworkAccess* dans *New-AzRecoveryServicesAsrAzureToAzureDiskReplicationConfig*.
<br/><br/>

**<u>Az.Resources</u>**
- Mise à jour de *Microsoft.Extensions.DependencyInjection.Abstractions* de la version *8.0.2* à *10.0.3*.
<br/><br/>

**<u>Az.Storage</u>**
- Mise à jour de la gestion des identités pour utiliser explicitement le modèle d'identité du SDK *Storage* dans *New-AzStorageAccount* et *Set-AzStorageAccount*.

---

##### Conclusion
Allez faire la mise à jour de votre module PowerShell pour Azure pour pouvoir bénéficier des dernières mises à jour et configurations possibles.

---

##### Sources
[PowerShell Gallery](https://www.powershellgallery.com/packages/Az/16.1.0)

---


Avez-vous apprécié cet article ? Vous avez des questions, commentaires ou suggestions, n'hésitez pas à m'envoyer un message depuis le formulaire de contact.

N'oubliez pas de nous suivre et de partager cet article.