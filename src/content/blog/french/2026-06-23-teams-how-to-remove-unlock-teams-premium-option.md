---
title: "Comment supprimer \"Unlock Teams Premium\" dans Teams"
meta_title: ""
description: ""
date: 2026-06-23T10:00:00-05:00
image: "/images/blog/teams/tuto/teams_how_to_remove_unlock_teams_premium_option_thumbnail.png"
categories: ["Teams", "Tutoriel"]
author: "Maxime Hiez"
tags: ["Teams Premium", "Licences", "Libre service", "PowerShell"]
draft: false
---
---

##### Introduction
Par défaut, un utilisateur a la possibilité d'obtenir une licence *Microsoft Teams Premium* d'essai en faisant une demande directement depuis son client Teams. Ceci peut entrainer des enjeux de facturation par la suite et il est préférable de désactiver cette option.

---

##### À quoi ça ressemble ?
Si un utilisateur clique sur les ***...*** à coté de sa pastille dans Teams, le bouton *<u>Unlock Teams Premium</u>* devient disponible ...

![image](/images/blog/teams/tuto/teams_how_to_remove_unlock_teams_premium_option_001.png)

... et la licence d'essai est activable.

![image](/images/blog/teams/tuto/teams_how_to_remove_unlock_teams_premium_option_002.png)

---

##### Prérequis
**<u>Rôle d’administrateur</u>**
- Un compte avec le rôle *Administrateur Global* ou *Administrateur de facturation* pour accéder au Microsoft 365 Admin Center.

---

##### Étape 1 : Se connecter au Microsoft 365 Admin Center
Connectez-vous au Microsoft 365 Admin Center en ouvrant votre navigateur web sur https://admin.cloud.microsoft.

---

##### Étape 2 : Désactiver le libre service
Dans le menu de gauche, cliquez sur *<u>Settings</u>*, puis sur *<u>Org Settings</u>*.

Dans l'onglet *<u>Services</u>*, cliquez sur *<u>Self-service trials and purchases</u>* et désactivez le *self-service trials and purshases* de la licence Microsoft Teams Premium.

![image](/images/blog/teams/tuto/teams_how_to_remove_unlock_teams_premium_option_003.png)

---

##### Allons plus loin en mode PowerShell
Microsoft Teams Premium n'est pas la seule licence que vous devriez désactiver avec le libre service. Les commandes PowerShell suivantes vont vous permettre de lister quelles sont les licences concernées :
```powershell
Install-Module -Name MSCommerce -Scope CurrentUser
Import-Module -Name MSCommerce
Connect-MSCommerce
Get-MSCommerceProductPolicies -PolicyId AllowSelfServicePurchase
```

La commande PowerShell suivante va vous permettre de toutes les désactiver :
```powershell
Get-MSCommerceProductPolicies -PolicyId AllowSelfServicePurchase | Where { $_.PolicyValue -eq "Enabled"} | forEach { Update-MSCommerceProductPolicy -PolicyId AllowSelfServicePurchase -ProductId $_.ProductID -Enabled $false }
```

---

##### Valider le résultat
Le résultat est visible après quelques heures ; le bouton *<u>Unlock Teams Premium</u>* a disparu.

![image](/images/blog/teams/tuto/teams_how_to_remove_unlock_teams_premium_option_004.png)

---

##### Conclusion
Vous savez maintenant comment désactiver le libre service sur les licences Teams Premium (et autres).

---

##### Sources
[Microsoft Learn - Achat libre service](https://learn.microsoft.com/fr-ca/microsoft-365/commerce/subscriptions/allowselfservicepurchase-powershell?view=o365-worldwide)

---


Avez-vous apprécié cet article ? Vous avez des questions, commentaires ou suggestions, n'hésitez pas à m'envoyer un message depuis le formulaire de contact.

N'oubliez pas de nous suivre et de partager cet article.