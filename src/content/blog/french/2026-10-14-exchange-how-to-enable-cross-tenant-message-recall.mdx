---
title: "Comment activer le rappel de messages entre tenants Exchange"
meta_title: ""
description: ""
date: 2026-10-14T10:00:00-05:00
image: "/images/blog/exchange/tuto/exchange_how_to_enable_cross_tenant_message_recall_thumbnail.png"
categories: ["Exchange", "Tutoriel"]
author: "Maxime Hiez"
tags: ["PowerShell", "Sécurité"]
draft: false
---
---

##### Introduction
Le rappel de message dans le cloud fonctionnait jusqu'ici uniquement à l'intérieur d'un même tenant. Le rappel entre tenants (*Cross-Tenant Message Recall*) étend cette capacité aux organisations de confiance : un expéditeur d'un tenant autorisé peut désormais rappeler un message envoyé à un destinataire d'un autre tenant Microsoft 365, exactement comme il le ferait en interne.

Le contrôle reste entièrement du côté du tenant qui reçoit le message. Un rappel entre tenants n'est honoré que si l'administrateur du tenant destinataire a explicitement mis le tenant expéditeur sur liste d'autorisation.

---

##### Prérequis
**<u>Rôle d'administrateur</u>**
- Un compte avec le rôle *Administrateur Global* ou *Administrateur Exchange* pour accéder à Microsoft Exchange Online.

---

##### Étape 1 : Se connecter à Microsoft Exchange Online en PowerShell
Connectez-vous à Microsoft Exchange Online via la commande PowerShell suivante :
```powershell
Connect-ExchangeOnline
```

---

##### Étape 2 : Vérifier la configuration actuelle
Vérifiez si le rappel entre tenants est activé et quels tenants externes sont déjà autorisés via la commande PowerShell suivante :
```powershell
Get-CrossTenantRecallConfiguration
```

Le résultat ressemble à ceci :
```powershell
CrossTenantRecallEnabled AllowedSenderTenantIds
------------------------ -----------------------
False                    {}
```

<Notice type="note">Le rappel entre tenants est désactivé par défaut.</Notice>

---

##### Étape 3 : Activer le rappel sur le 1er tenant
Activez la fonctionnalité pour votre tenant via la commande PowerShell suivante :
```powershell
Set-CrossTenantRecallConfiguration -CrossTenantRecallEnabled $true
```

---

##### Étape 4 : Autoriser un tenant expéditeur
Ajoutez l'ID du tenant à autoriser au paramètre *-AllowedSenderTenantIds* via la commande PowerShell suivante :
```powershell
Set-CrossTenantRecallConfiguration -AllowedSenderTenantIds @{Add="11111111-2222-3333-4444-555555555555"}
```

Pour autoriser plusieurs tenants en une seule commande :
```powershell
Set-CrossTenantRecallConfiguration -AllowedSenderTenantIds @{Add="11111111-2222-3333-4444-555555555555","66666666-7777-8888-9999-000000000000"}
```

<Notice type="tip">L'administrateur du tenant expéditeur récupère son propre ID de tenant via la commande *Get-ConnectionInformation | fl TenantID*, depuis une session Exchange Online PowerShell connectée à son tenant.</Notice>

---

##### Étape 5 : Activer le rappel sur le 2ème tenant
Faites les mêmes configurations sur le 2ème tenant.

---

##### Valider le résultat
Un courriel est envoyé à un autre tenant ...

![image](/images/blog/exchange/tuto/exchange_how_to_enable_cross_tenant_message_recall_001.png)

... puis est rappelé dans les minutes qui suivent.

![image](/images/blog/exchange/tuto/exchange_how_to_enable_cross_tenant_message_recall_002.png)

Un rapport est envoyé avec un lien de suivi.

![image](/images/blog/exchange/tuto/exchange_how_to_enable_cross_tenant_message_recall_003.png)

En consultant ce lien, vous pouvez voir le résultat du rappel (peut prendre quelques minutes à se mettre à jour).

![image](/images/blog/exchange/tuto/exchange_how_to_enable_cross_tenant_message_recall_004.png)

---

##### Et le destinataire ?
Dans la boite courriel du destinataire, le courriel entre normalement ...

![image](/images/blog/exchange/tuto/exchange_how_to_enable_cross_tenant_message_recall_005.png)

... puis est automatiquement supprimé quelques instants après le rappel.

---

##### Retirer un tenant autorisé
Si vous souhaitez ajuster la configuration et retirer un ou plusieurs tenants de la liste d'autorisation, il est possible de la faire via la commande PowerShell suivante :
```powershell
Set-CrossTenantRecallConfiguration -AllowedSenderTenantIds @{Remove="11111111-2222-3333-4444-555555555555"}
```

---

##### Limites à connaître
Le rappel entre tenants reste circonscrit aux frontières d'Exchange Online. Il ne fonctionne pas pour un rappel envoyé vers l'internet ou vers une organisation hors Exchange Online, et les clients hybrides ne peuvent pas rappeler un message envoyé depuis une boîte aux lettres cloud vers un environnement Exchange sur site.

<Notice type="warning">Autoriser un tenant externe à rappeler des messages revient à lui donner un pouvoir de suppression sur le contenu déjà livré dans vos boîtes aux lettres. Certaines organisations préfèrent ne pas activer cette fonctionnalité pour des raisons de conformité, notamment lorsque les messages concernés sont soumis à une obligation de conservation.</Notice>

---

##### Conclusion
Vous savez maintenant comment activer le rappel de messages entre tenants dans Exchange Online, et comment gérer la liste des organisations partenaires autorisées à l'utiliser.

---

##### Sources
[Microsoft - Techcommunity](https://techcommunity.microsoft.com/blog/exchange/cross-tenant-message-recall-in-exchange-online/4535800)

[Microsoft Learn - Utiliser le rappel de messages](https://learn.microsoft.com/fr-ca/exchange/mail-flow-best-practices/work-with-cloud-based-message-recall)

---


Avez-vous apprécié cet article ? Vous avez des questions, commentaires ou suggestions, n'hésitez pas à m'envoyer un message depuis le formulaire de contact.

N'oubliez pas de nous suivre et de partager cet article.