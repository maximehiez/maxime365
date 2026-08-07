---
title: "Mise à jour en version 15.3.0 du module PowerShell Azure"
meta_title: ""
description: ""
date: 2026-02-18T10:00:00-05:00
image: "/images/blog/azure/azure_update_module_powershell_15_3_0_thumbnail.png"
categories: ["Azure"]
author: "Maxime Hiez"
tags: ["Module", "Mise à jour", "PowerShell"]
draft: false
---
---

##### Introduction
Microsoft a récemment publié la nouvelle version 15.3.0 du module PowerShell pour Microsoft Azure.

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
La version 15.3.0 contient les mises à jour suivantes :

**<u>Az.Aks</u>**
- Correction de la logique de génération de clés SSH par défaut dans *New-AzAksCluster* pour imposer le type de clé RSA (au lieu de ed25519 qui est devenu le type par défaut dans *OpenSSH* 9.4 et versions ultérieures).
<br/><br/>

**<u>Az.Compute</u>**
- Mises à jour de la génération du SDK de calcul :
    - La génération utilise désormais *autorest.powershell*, remplaçant ainsi le SDK de la piste 1 obsolète.
    - Les fichiers swagger locaux ont été supprimés et les références remplacées par des fichiers swagger distants.
- Ajout de nouvelles applets de commande pour la migration flexible des groupes à haute disponibilité vers les groupes de machines virtuelles identiques (VMSS) (aperçu public) :
    - *Convert-AzAvailabilitySet* : Convertit un groupe à haute disponibilité en un nouveau groupe de machines virtuelles identiques flexible sans interruption de service.
    - *Test-AzAvailabilitySetMigration* : Vérifie que les machines virtuelles d'un groupe à haute disponibilité peuvent être migrées vers un VMSS.
    - *Start-AzAvailabilitySetMigration* : Lance la migration d'un groupe à haute disponibilité vers un VMSS flexible existant.
    - *Stop-AzAvailabilitySetMigration* : Annule une opération de migration sur un groupe à haute disponibilité. - *Move-AzVirtualMachineToVmss* : Migre une machine virtuelle d'un groupe à haute disponibilité vers un groupe de machines virtuelles flexibles.
<br/><br/>

**<u>Az.DataProtection</u>**
- Ajout de la prise en charge de la fonction de suppression réversible du coffre-fort de la plateforme de protection des données.
<br/><br/>

**<u>Az.Functions</u>**
- Correction de la portabilité du cloud en utilisant des points de terminaison dynamiques pour le stockage [#29034].
<br/><br/>

**<u>Az.Network</u>**
- Ajout du paramètre *-IpVersionType* à l'applet de commande *New-AzPrivateEndpoint* pour spécifier le type de version IP des adresses IP privées du point de terminaison privé. Les valeurs autorisées sont IPv4, IPv6 ou DualStack.
- Ajout de nouvelles applets de commande pour la ressource VirtualNetworkAppliance :
    - *Get-AzVirtualNetworkAppliance* : Obtient une ressource Virtual Network Appliance par nom, groupe de ressources ou liste toutes les ressources.
    - *New-AzVirtualNetworkAppliance* : Crée une ressource Virtual Network Appliance.
    - *Remove-AzVirtualNetworkAppliance* : Supprime une ressource Virtual Network Appliance.
    - *Update-AzVirtualNetworkAppliance* : Met à jour les balises d’une ressource Virtual Network Appliance.
<br/><br/>

**<u>Az.RecoveryServices</u>**
- Added Cross region restore support for upcoming regions IndiaSouthCentral.
- Ajout de la prise en charge de la restauration interrégionale pour les régions à venir *IndiaSouthCentral*.
<br/><br/>

**<u>Az.Resources</u>**
- Correction du problème où la console PowerShell se fermait lors de l'utilisation des applets de commande du module Ressources sans être connecté.
    - Problème GitHub : https://github.com/Azure/azure-powershell/issues/28774.
- Correction de l'affichage d'un message de confirmation incorrect (espace réservé non formaté) et d'un GUID vide comme cible par l'applet de commande *Remove-AzRoleDefinition* lors de l'utilisation des paramètres *-Confirm* ou *-WhatIf* avec le paramètre *-Name* [#29075].
- Ajout d'une annonce préalable concernant les modifications majeures apportées au type *PSRoleDefinition* dans Az.Resources 10.0.0 [#29058] :
    - Les propriétés aplaties *Actions*, *NotActions*, *DataActions*, *NotDataActions*, *Condition* et *ConditionVersion* seront supprimées de *PSRoleDefinition*. Utilisez plutôt *Permissions[n].Actions*, *Permissions[n].DataActions*, etc. pour accéder à la structure complète des autorisations avec des conditions spécifiques à chaque autorisation.
    - Affecte la sortie des applets de commande *Get-AzRoleDefinition*, *New-AzRoleDefinition*, *Set-AzRoleDefinition* et *Remove-AzRoleDefinition* (avec *-PassThru*).
    - Affecte le format d'entrée des applets de commande *New-AzRoleDefinition* et *Set-AzRoleDefinition*.
    - Affecte le paramètre *-InputObject* de l'applet de commande *Remove-AzRoleDefinition*.
<br/><br/>

**<u>Az.SignalR</u>**
- Modifications majeures annoncées à l'avance. Veuillez consulter https://go.microsoft.com/fwlink/?linkid=2333229.
<br/><br/>

**<u>Az.StackHCI</u>**
- Amélioration de la détection des déploiements cloud lors des opérations de réparation d'Azure Arc afin d'éviter les tentatives d'activation en double et de garantir une expérience de déploiement plus fluide.
- Ajout de la possibilité de s'enregistrer dans des environnements Azure personnalisés.
- Correction du problème où l'activation d'Arc était déclenchée par erreur lors de l'enregistrement de réparation pour les déploiements cloud.
<br/><br/>

**<u>Az.Storage</u>**
- Prise en charge du chiffrement en transit dans les propriétés du service de fichiers.
    - *Update-AzStorageFileServiceProperty*.
- Lors de la création ou de la mise à jour d'un compte de stockage avec TLS 1.0 ou TLS 1.1, la mise à niveau vers TLS 1.2 est automatique.
    - *New-AzStorageAccount*.
    - *Set-AzStorageAccount*.
- Ajout d'avertissements concernant la dépréciation de TLS 1.0 et TLS 1.1 lors de la création ou de la mise à jour d'un compte de stockage.
    - *New-AzStorageAccount*.
    - *Set-AzStorageAccount*.

---

##### Conclusion
Allez faire la mise à jour de votre module PowerShell pour Azure pour pouvoir bénéficier des dernières mises à jour et configurations possibles.

---

##### Sources
[PowerShell Gallery](https://www.powershellgallery.com/packages/Az/15.3.0)

---


Avez-vous apprécié cet article ? Vous avez des questions, commentaires ou suggestions, n’hésitez pas à m'envoyer un message depuis le formulaire de contact.

N'oubliez pas de nous suivre et de partager cet article.