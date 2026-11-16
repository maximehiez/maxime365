---
title: "Mise à jour en version 17.0.0 du module PowerShell Azure"
meta_title: ""
description: ""
date: 2026-11-16T10:00:00-05:00
image: "/images/blog/azure/azure_update_module_powershell_17_0_0_thumbnail.png"
categories: ["Azure"]
author: "Maxime Hiez"
tags: ["Module", "Mise à jour", "PowerShell"]
draft: false
---
---

##### Introduction
Microsoft a récemment publié la nouvelle version 17.0.0 du module PowerShell pour Microsoft Azure.

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
La version 17.0.0 contient les mises à jour suivantes :

**<u>Az.Accounts</u>**
- Correction des erreurs *"Method not found"* sur PowerShell 7.6 lorsqu'un module utilise un SDK Azure dont les modèles implémentent *IJsonModel*.
    - *Az.Accounts* utilise maintenant la copie du runtime d'un assembly .NET partagé, comme *System.Text.Json*, lorsqu'elle est de la même version ou d'une version plus récente que la copie livrée avec *Az.Accounts*, de sorte qu'une seule copie soit chargée.
- Mise à jour de la dépendance *Azure.Core* de la version *1.57.0* à *1.64.0*.
- Mise à jour de la dépendance *System.ClientModel* de la version *1.13.0* à *1.16.0*.
- Mise à jour des dépendances MSAL (*Microsoft.Identity.Client*, *Microsoft.Identity.Client.Extensions.Msal*, *Microsoft.Identity.Client.Broker*) de la version *4.84.0* à *4.90.0*.
- Mise à jour de *Microsoft.Identity.Client.NativeInterop* de la version 0.20.4 à 0.20.6.
- Mise à jour de *System.Text.Json*, *System.Memory.Data*, *Microsoft.Bcl.AsyncInterfaces* et des dépendances .NET associées de la version *10.0.3* à *10.0.10*.
- Ajout de *System.Net.ServerSentEvents* 10.0.10 comme dépendance de *System.ClientModel*.
<br/><br/>

**<u>Az.ApiManagement</u>**
- Correction du mappage des informations d'identification de *Get-AzApiManagementBackend* pour les valeurs de requête et d'en-tête des backends qui contiennent des entrées nulles masquées, comme *sig: null*.
    - L'applet de commande préserve le comportement de masquage existant tout en évitant les exceptions lorsque des valeurs nulles sont présentes dans les informations d'identification du backend.
<br/><br/>

**<u>Az.Automation</u>**
- Ajout des applets de commande de gestion des Runtime Environment
    - *Get-AzAutomationRuntimeEnvironment*
    - *New-AzAutomationRuntimeEnvironment*
    - *Set-AzAutomationRuntimeEnvironment*
    - *Remove-AzAutomationRuntimeEnvironment*
- Ajout des applets de commande de gestion des packages de Runtime Environment
    - *Get-AzAutomationRuntimeEnvironmentPackage*
    - *New-AzAutomationRuntimeEnvironmentPackage*
    - *Set-AzAutomationRuntimeEnvironmentPackage*
    - *Remove-AzAutomationRuntimeEnvironmentPackage*
<br/><br/>

**<u>Az.Batch</u>**
- [CHANGEMENT MAJEUR ANNONCÉ À L'AVANCE] Consultez https://go.microsoft.com/fwlink/?linkid=2333229
- Correction de *Set-AzBatchAccount*, qui réinitialisait des paramètres du compte qu'elle ne devait pas modifier, comme l'accès réseau public, les modes d'authentification autorisés et le compte de stockage automatique. Elle utilise maintenant l'opération de mise à jour.
<br/><br/>

**<u>Az.Cdn</u>**
- Mise à jour du CDN classique vers la version d'API *2026-10-01*, partagée avec Azure Front Door.
- Suppression des applets de commande de ressources EdgeAction autonomes, y compris les opérations de rattachement, de filtre d'exécution, de version et de code de version. Les associations de règles de livraison EdgeAction restent prises en charge.
- Suppression de *New-AzFrontDoorCdnSecretUrlSigningKeyParametersObject* ainsi que du secret hérité *UrlSigningKey* et des modèles d'action de règle *AfdUrlSigning*. Les autres actions de signature d'URL restent disponibles.
<br/><br/>

**<u>Az.Compute</u>**
- Suppression des calculs MD5 inutilisés dans les téléversements de disques et d'objets blob, et passage à SHA-256 pour les noms de verrou de ces téléversements ainsi que pour les ID de test déterministes d'Azure Enhanced Monitoring.
- Ajout de *Set-AzSnapshotImmutabilityPolicy* et *Remove-AzSnapshotImmutabilityPolicy*, et exposition cohérente des détails typés de la politique d'immuabilité dans les résultats des instantanés. [Azure/azure-powershell-cmdlet-review-pr#1579]
- Ajout d'un message de préversion à *New-AzCapacityReservationGroup* indiquant que la fonctionnalité Open Capacity Reservation est en préversion.
<br/><br/>

**<u>Az.ContainerRegistry</u>**
- Validation des noms de registre et des étiquettes de serveur de connexion avant les requêtes du plan de données du registre de conteneurs.
    - Acceptation d'un seul trait d'union suivi d'un suffixe alphanumérique ASCII de longueur variable, jusqu'à 63 caractères au total.
    - Utilisation directe d'étiquettes explicites avec trait d'union, y compris Domain Name Label (DNL) et les étiquettes héritées, sans découverte par Azure Resource Manager.
- Mise à jour de la gestion des informations d'identification de *Connect-AzContainerRegistry*.
    - Transmission des informations d'identification comme données plutôt que comme code PowerShell exécutable.
- Mise à jour de la découverte du serveur de connexion du registre de conteneurs.
    - Utilisation d'Azure Resource Manager lorsqu'il est disponible ; sinon, avertissement et utilisation de la valeur saisie avec le suffixe de l'environnement.
    - Réutilisation des résultats de découverte réussis pour le même registre et le même contexte au sein du client.
- Mise à jour de *Connect-AzContainerRegistry -ExposeToken*.
    - Renvoi du même serveur de connexion que celui utilisé pour l'authentification.
<br/><br/>

**<u>Az.IotHub</u>**
- Mise à jour de la dépendance *Microsoft.Extensions.DependencyInjection.Abstractions* de la version *10.0.3* à *10.0.10*.
<br/><br/>

**<u>Az.NetAppFiles</u>**
- Suppression des applets de commande de sous-volumes et des alias obsolètes, du paramètre de volume *EnableSubvolume* et des propriétés de sortie *EnableSubvolumes*.
- Mise à jour vers la version d'API *2026-08-01*.
- Ajout de la prise en charge de la configuration du protocole LDAP (Lightweight Directory Access Protocol) à *New-AzNetAppFilesAccount*, *Set-AzNetAppFilesAccount* et *Update-AzNetAppFilesAccount*, et ajout de *LdapConfiguration* à la sortie du compte.
- Ajout de *Update-AzNetAppFilesAccountLdapBindPassword* pour actualiser le mot de passe de liaison LDAP à partir d'Azure Key Vault.
<br/><br/>

**<u>Az.Network</u>**
- Correction des applets de commande VirtualNetworkGateway pour récupérer les secrets RADIUS avant l'appel PUT sur la passerelle.
<br/><br/>

**<u>Az.RedisEnterpriseCache</u>**
- Mise à jour du générateur de code. Voir [ici](https://go.microsoft.com/fwlink/?linkid=2340249).
- Ajout de la prise en charge de la version d'API *2026-09-01*.
- Ajout de l'applet de commande *Get-AzRedisEnterpriseCacheMigration* pour obtenir des informations sur une migration d'un cache Azure Cache for Redis Basic, Standard ou Premium vers Azure Managed Redis.
- Ajout de l'applet de commande *Start-AzRedisEnterpriseCacheMigration* pour démarrer une migration d'un cache Azure Cache for Redis Basic, Standard ou Premium vers Azure Managed Redis.
- Ajout de l'applet de commande *Undo-AzRedisEnterpriseCacheMigration* pour annuler une migration d'un cache Azure Cache for Redis Basic, Standard ou Premium vers Azure Managed Redis, ou la faire revenir en arrière.
- Ajout de l'applet de commande *Test-AzRedisEnterpriseCacheMigration* pour valider si un cache Azure Cache for Redis Basic, Standard ou Premium peut être migré vers Azure Managed Redis.
- Ajout des applets de commande *Invoke-AzRedisEnterpriseCacheClusterUnlinkMigratedEndpoint* et *Invoke-AzRedisEnterpriseCacheMigrationUnlinkMigratedEndpoint* pour dissocier les points de terminaison après des migrations depuis Azure Cache for Redis Enterprise et depuis Azure Cache for Redis Basic, Standard ou Premium, respectivement.
- Ajout du paramètre *MaintenanceConfigurationMaintenanceWindow* à *New-AzRedisEnterpriseCache* et *Update-AzRedisEnterpriseCache* pour configurer les fenêtres de maintenance.
- Ajout du paramètre *NotifyKeyspaceEvents* à *New-AzRedisEnterpriseCache*, *New-AzRedisEnterpriseCacheDatabase* et *Update-AzRedisEnterpriseCacheDatabase* pour configurer les notifications d'espace de clés.
<br/><br/>

**<u>Az.Resources</u>**
- Mise à jour de la dépendance *Microsoft.Extensions.DependencyInjection.Abstractions* de la version *10.0.3* à *10.0.10*.
<br/><br/>

**<u>Az.StackHCI</u>**
- Correction des applets de commande locales au nœud pour Remote Support, l'attestation de machine virtuelle (VM), l'attestation et le répertoire des journaux afin qu'elles fonctionnent sans connexion à Azure.
    - Évitement des sessions de communication à distance locales inutiles dans les vérifications de Remote Support, *Enable-AzStackHCIAttestation*, *Disable-AzStackHCIAttestation* et *Get-AzStackHCILogsDirectory*.
<br/><br/>

**<u>Az.Storage</u>**
- Mise à jour des opérations de gestion de Storage vers la version d'API *2026-09-01*.
- Ajout de *PublishIpv6Endpoint* à *New-AzStorageAccount* et *Set-AzStorageAccount* pour activer ou désactiver la publication du point de terminaison de stockage IPv6.
    - Exposition de *DualStackEndpointPreference* dans la sortie du compte de stockage, y compris les résultats de *Get-AzStorageAccount*.
- Ajout, à *New-AzStorageAccount* et *Set-AzStorageAccount*, des contrôles de clé partagée (*Shared Key*) par service, des contrôles de SAS (signature d'accès partagé) de délégation entre tenants, de l'application de la SAS de délégation liée à l'utilisateur, de l'activation de Blob Access Point et des paramètres de Turbo Tier.
    - La désactivation de Turbo Tier omet un pourcentage cible existant afin d'éviter une erreur de validation du service.
- Ajout de commandes pour gérer les caches de contexte, leurs identités managées et leurs conteneurs, ainsi que les règles de métriques avancées de la plateforme.
    - Par défaut, *Get-AzStorageAdvancedPlatformMetricsRule* liste désormais les règles et récupère une règle précise grâce à son identité de ressource.
    - Alignement des métadonnées de découverte des commandes sur la liste des règles de métriques et sur la suppression de la règle de métriques de capacité au niveau du conteneur.
    - *Update-AzStorageContextCacheContainer* renvoie désormais le conteneur mis à jour après une mise à jour asynchrone.
- Ajout de commandes pour gérer les configurations de Blob Access Point et tester les connexions proposées ou existantes.
    - *Update-AzStorageBlobAccessPointConfiguration* renvoie désormais la configuration mise à jour après une mise à jour asynchrone.
- Ajout des paramètres de rattachement de Blob Access Point à *New-AzRmStorageContainer* et des détails de rattachement à la sortie du conteneur.
- Ajout des limites des garde-fous (*guardrails*) des partages de fichiers et des étiquettes de service du périmètre de sécurité réseau à la sortie de gestion.
<br/><br/>

**<u>Az.StorageSync</u>**
- Mise à jour de la description de l'aide de *Set-AzStorageSyncServer* pour expliquer que l'applet de commande corrige l'identité managée d'un serveur et rétablit la relation de confiance entre le serveur et son service de synchronisation de stockage, et mise à jour de l'exemple pour utiliser un espace réservé pour *ServerId*.

---

##### Conclusion
Allez faire la mise à jour de votre module PowerShell pour Azure pour pouvoir bénéficier des dernières mises à jour et configurations possibles.

---

##### Sources
[PowerShell Gallery](https://www.powershellgallery.com/packages/Az/17.0.0)

---


Avez-vous apprécié cet article ? Vous avez des questions, commentaires ou suggestions, n'hésitez pas à m'envoyer un message depuis le formulaire de contact.

N'oubliez pas de nous suivre et de partager cet article.