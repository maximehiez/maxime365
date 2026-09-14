---
title: "Comment forcer la confidentialité des courriels dans Exchange"
meta_title: ""
description: ""
date: 2026-09-14T10:00:00-05:00
image: "/images/blog/exchange/tuto/exchange_how_to_enforce_private_encyption_outbound_emails_thumbnail.png"
categories: ["Exchange", "Tutoriel"]
author: "Maxime Hiez"
tags: ["Sécurité", "Encryption", "PowerShell"]
draft: false
---
---

##### Introduction
Le niveau de sensibilité *"Private"* d'Outlook est une propriété du message. Lors du transit, il est représenté par l'en-tête SMTP *"Sensitivity: Private"*, qu'Exchange associe à la propriété de sensibilité MAPI lors de la remise. Les règles de flux de messagerie (règles de transport) disposent d'une action native permettant de définir un en-tête de message (*"SetHeaderName"* / *"SetHeaderValue"*) ; il est donc possible d'appliquer l'en-tête *"Sensitivity: Private"* côté serveur.

Mais cet en-tête n'est qu'un simple indicateur de courtoisie et non un mécanisme de sécurité ; son comportement dépend de l'application cliente utilisée. La masquage des courriels privés ne fonctionne de manière fiable que dans la version classique d'Outlook pour Windows. Le *"nouvel Outlook"* et *OWA* affichent les courriels privés sans restriction à toute personne disposant d'un accès complet (*Full Access*).

---

##### Prérequis
**<u>Rôle d’administrateur</u>**
- Un compte avec le rôle *Administrateur Global* ou *Administrateur Exchange* pour accéder au Exchange Admin Center.

**<u>Autres</u>**
- *Microsoft Purview Message Encryption* activé.

---

##### Étape 1 : Se connecter au Exchange Admin Center
Connectez-vous au Exchange Admin Center en ouvrant votre navigateur web sur https://admin.exchange.microsoft.com.

---

##### Étape 2 : Créer une règle de transport
Dans le menu de gauche, cliquez sur *<u>Mail flow</u>*, puis sur *<u>Rules</u>*, et sur *<u>Add a rule</u>* pour créer une nouvelle règle.

![image](/images/blog/exchange/tuto/exchange_how_to_enforce_private_encyption_outbound_emails_001.png)

Appliquez les paramètres suivants à la règle :
- <u>Condition #1</u> : *"The sender is a member of this group"* et choisissez le groupe contenant les membres de la direction.
- <u>Condition #2</u> : *"The recipient is a member of this group"* et choisissez le groupe contenant les autres membres concernés (ou toutes les personnes internes).
- <u>Action #1</u> : *"Modify the message properties"*, *"set a message header"*, et assignez la valeur *<u>Private</u>* à l'entête *<u>Sensitivity</u>*.

![image](/images/blog/exchange/tuto/exchange_how_to_enforce_private_encyption_outbound_emails_002.png)

---

##### Étape 3 : Tester le fonctionnement dans Outlook
Ici, l'utilisateur membre du groupe *Exchange_Private_Associates* envoie un courriel à un membre du groupe *Exchange_Private_Management* sans attribuer l'attribut *"Private"*. 

![image](/images/blog/exchange/tuto/exchange_how_to_enforce_private_encyption_outbound_emails_003.png)

Le membre de la direction reçoit le courriel avec un tag *"Private"* automatiquement ajouté ...

![image](/images/blog/exchange/tuto/exchange_how_to_enforce_private_encyption_outbound_emails_004.png)

... mais le délégué voit le contenu du courriel sans aucune restriction, au travers de la délégation. Le mode *"Private"* ne s'applique pas sur la nouvelle version Outlook ainsi que la version web. 

![image](/images/blog/exchange/tuto/exchange_how_to_enforce_private_encyption_outbound_emails_005.png)

---

##### Étape 4 : Activer l'encryption
Éditez la règle Exchange et ajouter un paramètre :
- <u>Action #2</u> : *"Modify the message security"*, *"Apply Office 365 Message Encryption and rights protection"*, et choisissez *<u>Encrypt</u>*.

![image](/images/blog/exchange/tuto/exchange_how_to_enforce_private_encyption_outbound_emails_006.png)

<Notice type="info">Si *Microsoft Purview Message Encryption* n'est pas activé, vous ne verrez aucune option de chiffrement dans la liste.</Notice>

---

##### Étape 5 : Se connecter à Microsoft Exchange Online en PowerShell
Connectez-vous à Microsoft Exchange Online via la commande PowerShell suivante :
```powershell
Connect-ExchangeOnline
```

---

##### Étape 6 : Bloquer l'accès aux messages protégés
Bloquez l'accès des délégués aux messages protégés par *IRM* (*Information Rights Management*) via la commande PowerShell suivante :
```powershell
Set-MailboxIRMAccess -Identity User.3@hiez.ca -User User.1@hiez.ca -AccessLevel Block
```

---

##### Résultats
Le délégué voit les nouveaux courriels entrer mais ils sont cette fois-ci chiffrés et non lisibles. Les courriels avec l'attribut *"Private"* avant l'encryption ne sont pas concernés par la configuration et sont toujours visibles.

![image](/images/blog/exchange/tuto/exchange_how_to_enforce_private_encyption_outbound_emails_007.png)

---

##### Conclusion
Vous savez maintenant forcer la confidentialité des courriels dans Exchange Online.

---

##### Sources
[Microsoft Learn - Set-MailboxIRMAccess](https://learn.microsoft.com/fr-ca/powershell/module/exchangepowershell/set-mailboxirmaccess?view=exchange-ps)

---


Avez-vous apprécié cet article ? Vous avez des questions, commentaires ou suggestions, n’hésitez pas à m'envoyer un message depuis le formulaire de contact.

N'oubliez pas de nous suivre et de partager cet article.