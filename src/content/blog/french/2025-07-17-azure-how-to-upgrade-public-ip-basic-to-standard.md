---
title: "Comment convertir une IP publique en Standard dans Azure"
meta_title: ""
description: ""
date: 2025-07-17T10:00:00-05:00
image: "/images/blog/azure/tuto/azure_how_to_upgrade_public_ip_basic_to_standard_thumbnail.png"
categories: ["Azure", "Tutoriel"]
author: "Maxime Hiez"
tags: ["Adresse IP publique", "SKU"]
draft: false
---
---

##### Introduction
Microsoft a officiellement annoncé la retraite des adresses IP publiques Azure de type *Basic*, avec une échéance fixée au 30 Septembre 2025. Cette décision marque une étape importante dans l’évolution des services réseau Azure, en faveur de configurations plus sécurisées, résilientes et modernes. Pour les organisations qui utilisent encore ce type d’adresse, il est temps de préparer la migration vers le SKU *Standard*, sous peine de voir leurs services impactés.

---

##### Pourquoi passer au SKU Standard ?
Le SKU Standard offre plusieurs avantages par rapport au SKU Basic :
- Sécurité par défaut : les flux entrants sont bloqués sauf autorisation explicite via un *NSG* (*Network Security Group*)
- Compatibilité étendue : fonctionne avec *Azure Firewall*, *Standard Load Balancer*, *NAT Gateway*, ...
- Résilience accrue : support des zones de disponibilité (zonal et zone-redundant)
- Meilleure intégration avec les services modernes d’Azure

---

##### Prérequis
**<u>Licences nécessaires</u>**
- Un abonnement Azure.

**<u>Des ressources Azure</u>**
- Une adresse IP publique de type *Basic*.

**<u>Rôle d’administrateur</u>**
- Un compte avec le rôle *Contributeur* ou *Propriétaire* sur l'abonnement Azure.

---

##### Étape 1 : Se connecter au portail Microsoft Azure
Connectez-vous au portail Microsoft Azure en ouvrant votre navigateur web sur https://portal.azure.com.

---

##### Étape 2 : Accéder aux adresses IP publiques
Dans la barre de recherche en haut de l'écran, écrivez *<u>Public IP addresses</u>*, et cliquez sur le menu proposé.

![image](/images/blog/azure/tuto/azure_how_to_upgrade_public_ip_basic_to_standard_001.png)

On peut voir ici que son SKU est de type *Basic* et qu'une bannière bleue nous annonce qu'elle doit être convertie en SKU *Standard*.

![image](/images/blog/azure/tuto/azure_how_to_upgrade_public_ip_basic_to_standard_002.png)

---

##### Étape 3 : Désassigner l'adresse IP publique
Pour pouvoir la convertir, il faut d'abord la désassigner. Cliquez sur *<u>Dissociate</u>*, puis sur *<u>Yes</u>*.

![image](/images/blog/azure/tuto/azure_how_to_upgrade_public_ip_basic_to_standard_003.png)

---

##### Étape 4 : Convertir l'adresse IP publique
Dans la bannière bleue, cliquez sur *<u>Upgrade to Standard SKU ...</u>*, puis sur *<u>Yes</u>*.

![image](/images/blog/azure/tuto/azure_how_to_upgrade_public_ip_basic_to_standard_004.png)

La conversion prend quelques secondes et le SKU change pour devenir *Standard*.

![image](/images/blog/azure/tuto/azure_how_to_upgrade_public_ip_basic_to_standard_005.png)

---

##### Étape 5 : Résassigner l'adresse IP publique
Cliquez sur *<u>Associate</u>*, puis assignez l'adresse IP publique à l'interface de votre équipement.

![image](/images/blog/azure/tuto/azure_how_to_upgrade_public_ip_basic_to_standard_006.png)

---

##### Conclusion
Les organisations ont encore quelques semaines pour identifier, planifier et migrer leurs ressources vers le SKU Standard, plus robuste et mieux intégré aux services Azure modernes. En anticipant dès maintenant cette échéance, les équipes IT peuvent éviter les interruptions de service et tirer parti des fonctionnalités avancées offertes par le nouveau modèle.<br/><br/>
Vous savez maintenant comment convertir une IP publique en Standard dans Azure.

---

##### Sources
[Microsoft Learn - Adresses IP publiques Azure](https://learn.microsoft.com/fr-ca/azure/virtual-network/ip-services/public-ip-basic-upgrade-guidance)

---


Avez-vous apprécié cet article ? Vous avez des questions, commentaires ou suggestions, n’hésitez pas à m'envoyer un message depuis le formulaire de contact.

N'oubliez pas de nous suivre et de partager cet article.