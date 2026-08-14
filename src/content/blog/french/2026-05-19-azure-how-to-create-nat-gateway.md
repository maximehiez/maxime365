---
title: "Comment créer une NAT Gateway dans Azure"
meta_title: ""
description: ""
date: 2026-05-19T10:00:00-05:00
image: "/images/blog/azure/tuto/azure_how_to_create_nat_gateway_thumbnail.png"
categories: ["Azure", "Tutoriel"]
author: "Maxime Hiez"
tags: ["Adresse IP publique", "NAT Gateway", "VNet", "Pare-feu", "Zero Trust"]
draft: false
---
---

##### Introduction
Je vous parlais en Mars dernier de la fin de l'accès Internet implicite pour les nouveaux *Virtual Networks* (*VNets*) dans Azure et du besoin de configurer une solution explicite (*Azure NAT Gateway*, pare-feu, ou load balancer avec règles de sortie) de sortie Internet.

Voir l'article de Mars 2026 [ICI](https://maxime.hiez.ca/blog/2026-03-24-azure-new-vnets-end-implicit-outbound-internet).

---

##### Prérequis
**<u>Licences nécessaires</u>**
- Un abonnement Azure.

**<u>Des ressources Azure</u>**
- Une adresse IP publique de type *Standard*.
- Un groupe de ressources.
- Des Virtual Networks (VNets).

**<u>Rôle d’administrateur</u>**
- Un compte avec le rôle *Contributeur* ou *Propriétaire* sur l'abonnement Azure.

---

##### Étape 1 : Se connecter au portail Microsoft Azure
Connectez-vous au portail Microsoft Azure en ouvrant votre navigateur web sur https://portal.azure.com.

---

##### Étape 2 : Créer la Azure NAT Gateway
Dans la barre de recherche en haut de l'écran, écrivez *<u>NAT gateways</u>*, et cliquez sur le menu proposé.

Cliquez sur *<u>Create</u>* pour créer la NAT Gateway.

![image](/images/blog/azure/tuto/azure_how_to_create_nat_gateway_001.png)

Cliquez sur *<u>Add public IP addresses or prefixes</u>* pour assignez une adresse IP publique disponible ou utilisez une nouvelle automatiquement créée.

![image](/images/blog/azure/tuto/azure_how_to_create_nat_gateway_002.png)

Assignez le ou les Virtual Networks que vous désirez faire passer par la NAT Gateway.

![image](/images/blog/azure/tuto/azure_how_to_create_nat_gateway_003.png)

---

##### Valider le résultat
Depuis un serveur / ordinateur connecté dans le sous-réseau concerné, naviguez sur [https://whatismyip.com](https://whatismyip.com). L'adresse IP affichée devrait être celle que vous avez assignée à la NAT Gateway.

![image](/images/blog/azure/tuto/azure_how_to_create_nat_gateway_004.png)

Également, on peut voir dans les statistiques Azure que du trafic a été collecté.

![image](/images/blog/azure/tuto/azure_how_to_create_nat_gateway_005.png)

---

##### Conclusion
Vous savez maintenant comment créer une NAT Gateway dans Azure.

---

##### Sources
[Microsoft - Techcommunity](https://techcommunity.microsoft.com/discussions/azurevirtualdesktopforum/azure%E2%80%99s-default-outbound-access-changes-guidance-for-azure-virtual-desktop-custo/4494462)

[Microsoft Learn - Accès sortant par défaut dans Azure](https://learn.microsoft.com/fr-ca/azure/virtual-network/ip-services/default-outbound-access)

[Microsoft Learn - Azure NAT Gateway](https://learn.microsoft.com/fr-ca/azure/nat-gateway/nat-overview)

[Microsoft - Tarification Azure NAT Gateway](https://azure.microsoft.com/fr-ca/pricing/details/azure-nat-gateway)

---


Avez-vous apprécié cet article ? Vous avez des questions, commentaires ou suggestions, n’hésitez pas à m'envoyer un message depuis le formulaire de contact.

N'oubliez pas de nous suivre et de partager cet article.