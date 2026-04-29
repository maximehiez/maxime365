---
title: "Comment activer le multi lignes pour la téléphonie Teams"
meta_title: ""
description: ""
date: 2026-04-29T10:00:00-05:00
image: "/images/blog/teams/tuto/teams_how_to_enable_multi_lines_telephony_thumbnail.png"
categories: ["Teams", "Tutoriel"]
author: "Maxime Hiez"
tags: ["Téléphonie", "Direct Routing", "Calling Plan", "Operator Connect", "Multi lignes"]
draft: false
---
---

##### Introduction
Microsoft vient d'introduire la fonctionnalité qui permet à un utilisateur d'avoir jusqu'à 11 numéros (y compris la ligne principale et la ligne privée) dans sa téléphonie *Microsoft Teams*. Les utilisateurs peuvent maintenant passer et recevoir des appels à partir de plusieurs numéros professionnels, présenter différents *Caller ID*, le tout sans changer de compte ou de matériel.

---

##### Prérequis
**<u>Téléphonie Microsoft Teams activée</u>**
- La configuration *Direct Routing* avec un SBC.
- La configuration *Calling Plan*.
- La configuration *Operator Connect*.

**<u>Module PowerShell</u>**
- Le module Teams PowerShell en version 7.6.0 ou ultérieure.

**<u>Rôle d’administrateur</u>**
- Un compte avec le rôle *Administrateur Global* ou *Administrateur Teams* pour accéder au Microsoft Teams Admin Center.

---

##### Étape 1 : Se connecter au Microsoft Teams Admin Center
Connectez-vous au Microsoft Teams Admin Center via la commande PowerShell suivante :
```powershell
Connect-MicrosoftTeams
```
---

##### Étape 2 : Activer les lignes supplémentaires
Vous pouvez configurer des lignes supplémentaires et valider la bonne assignation via les commandes PowerShell suivantes :
```powershell
Set-CsPhoneNumberAssignment -Identity user.3@hiez.ca -PhoneNumber '+15141237891' -PhoneNumberType DirectRouting -AssignmentCategory Alternate

Get-CsOnlineUser -Identity user.3@hiez.ca | TelephoneNumbers 
```

---

##### Étape 3 : Assigner les politiques de téléphonie
Un aspect clé de la configuration multi-lignes est que certaines politiques peuvent être attribuées par numéro de téléphone, indépendamment de celles déjà assignées à l'utilisateur.

- <u>CallingLineIdentity</u> : Afficher le numéro lors des appels sortants (Caller ID)
- <u>OnlineDialOutPolicy</u> : Limiter les autorisations de numérotation sortante
- <u>OnlineVoiceRoutingPolicy</u> : Autoriser les appels en mode *Direct Routing*
- <u>TeamsEmergencyCallingPolicy</u> : Activer la notification lors des appels d’urgence
- <u>TeamsEmergencyCallRoutingPolicy</u> : Requis pour les numéros de téléphone alternatifs avec routage direct
- <u>TeamsSharedCallingRoutingPolicy</u> : Attribuer un numéro de téléphone logiciel qui utilise la fonctionnalité *Shared Calling*
- <u>TenantDialPlan</u> : Assigner les règles de normalisation
<br /><br />

Vous pouvez configurer des politiques via les commandes PowerShell suivantes :
```powershell
Set-CsPhoneNumberPolicyAssignment -TelephoneNumber +15141237891 -PolicyType OnlineVoiceRoutingPolicy -PolicyName "CA-INTERNATIONAL"

Set-CsPhoneNumberPolicyAssignment -TelephoneNumber +15141237891 -PolicyType TenantDialPlan -PolicyName "DialPlan-Global"

Set-CsPhoneNumberPolicyAssignment -TelephoneNumber +15141237891 -PolicyType CallingLineIdentity -PolicyName "514 842 1161"

Set-CsPhoneNumberPolicyAssignment -TelephoneNumber +15141237891 -PolicyType TeamsEmergencyCallRoutingPolicy -PolicyName "LAB-911"

```

<Notice type="note">Ces politiques ne sont pas héritées de votre ligne principale.</Notice>

---

##### Étape 4 : Valider le résultat
On peut voir que j'ai maintenant 2 lignes supplémentaires assignées à mon compte. Je suis capable de choisir depuis quel numéro je peux passer mon appel.

![image](/images/blog/teams/tuto/teams_how_to_enable_multi_lines_telephony_001.png)

---

##### Conclusion
Vous savez maintenant comment activer le multi lignes pour la téléphonie Teams.

---

##### Sources
[Microsoft Learn - Multi lignes pour la téléphonie Teams](https://learn.microsoft.com/fr-ca/microsoftteams/multi-line)

[Microsoft Learn - Set-CsPhoneNumberPolicyAssignment](https://learn.microsoft.com/fr-ca/powershell/module/microsoftteams/set-csphonenumberpolicyassignment)

---


Avez-vous apprécié cet article ? Vous avez des questions, commentaires ou suggestions, n’hésitez pas à m'envoyer un message depuis le formulaire de contact.

N'oubliez pas de nous suivre et de partager cet article.