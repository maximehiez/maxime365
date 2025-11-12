---
title: "Comment activer Defender EDR en \"Block Mode\""
meta_title: ""
description: ""
date: 2025-11-12T10:00:00-05:00
image: "/images/blog/defender/tuto/defender_how_to_enable_edr_block_mode_thumbnail.png"
categories: ["Defender", "Tutoriel"]
author: "Maxime Hiez"
tags: ["EDR", "Antivirus", "Block Mode", "Sécurité"]
draft: false
---
---

##### Introduction
Dans un contexte où les menaces informatiques évoluent constamment, les solutions antivirus ne suffisent plus à protéger efficacement les postes de travail. Le *Block Mode* de *Microsoft Defender for Endpoint* est une fonctionnalité souvent méconnue, mais pourtant essentielle pour renforcer la protection des postes dans un environnement Microsoft 365. Elle permet à l’*EDR* (*Endpoint Detection and Response*) d’intervenir même sur les appareils qui utilisent un antivirus tiers, en bloquant activement les menaces détectées au lieu de simplement les signaler. En activant le Block Mode, vous donnez à Defender la capacité d’agir comme une couche de protection complémentaire, capable d’arrêter un exécutable malveillant ou une activité post-exploitation dès son identification.

---

##### Prérequis
**<u>Un PC Windows 10/11</u>**
- Un PC Windows 10/11 inscrit dans Intune.

**<u>Un groupe Entra ID</u>**
- Un groupe de sécurité Entra ID qui contient les PC concernés.

**<u>Licences nécessaires</u>**
- *Microsoft 365 E5*.
- *Microsoft Defender for Office 365 (Plan 2)* en complément avec une licence autre (*E3*, ...).

**<u>Rôles d’administrateur</u>**
- Un compte avec le rôle *Administrateur Global* ou *Administrateur Intune* pour accéder au Microsoft Intune Admin Center.
- Un compte avec le rôle *Administrateur Global* ou *Administrateur Sécurité* pour accéder au Microsoft Defender Portal.

---

##### Étape 1 : Se connecter au Microsoft Defender Portal
Connectez vous au Microsoft Defender Portal en ouvrant votre navigateur web sur https://security.microsoft.com.

---

##### Étape 2 : Activer le *Block Mode*
Dans le menu de gauche, cliquez sur *<u>System</u>*, puis sur sur *<u>Settings</u>*.

![image](/images/blog/defender/tuto/defender_how_to_enable_edr_block_mode_001.png)

Cliquez sur *<u>Endpoints</u>*, puis sur *<u>General</u>*, et sur *<u>Advanced features</u>*.

Activez l'interrupteur *Enable EDR in block mode*.

![image](/images/blog/defender/tuto/defender_how_to_enable_edr_block_mode_002.png)

---

##### Étape 3 : Se connecter au Microsoft Intune Admin Center
Connectez vous au Microsoft Intune Admin Center en ouvrant votre navigateur web sur https://intune.microsoft.com.

---

##### Étape 4 : Activer la règle *Endpoint Detection and Response*
Dans le menu de gauche, cliquez sur *<u>Endpoint security</u>*, puis sur *<u>Endpoint detection and response </u>*.

Cliquez sur *<u>Deploy preconfigured policy</u>*, et créez une règle pour la plateforme *Windows* en gardant toutes les options par défaut.

![image](/images/blog/defender/tuto/defender_how_to_enable_edr_block_mode_003.png)

Après quelques minutes, la règle est déployée sur l'appareil.

![image](/images/blog/defender/tuto/defender_how_to_enable_edr_block_mode_004.png)

---

##### Étape 5 : Valider le *Block Mode*
Dans le menu de gauche, cliquez sur *<u>Assests</u>*, puis sur sur *<u>Devices</u>*.

Le poste est maintenant visible dans la console Defender.

![image](/images/blog/defender/tuto/defender_how_to_enable_edr_block_mode_005.png)

Il est possible aussi de vérifier le bon déploiement via la commande PowerShell suivante :
```powershell
Get-MpComputerStatus
```

On peut voir ici sur mon poste que l'attribut *AMRunningMode* retourne la valeur *EDR Block Mode*. On constate aussi dans ma barre des tâches que j'ai 2 antivirus, *Avast* et *Defender*. 

![image](/images/blog/defender/tuto/defender_how_to_enable_edr_block_mode_006.png)

---

##### Conclusion
Vous savez maintenant comment activer Defender EDR en Block Mode.

---

##### Sources
[Microsoft Learn - Détection de point de terminaison et réponse en Block Mode](https://learn.microsoft.com/fr-fr/defender-endpoint/edr-in-block-mode)

---


Avez-vous apprécié cet article ? Vous avez des questions, commentaires ou suggestions, n’hésitez pas à m'envoyer un message depuis le formulaire de contact.

N'oubliez pas de nous suivre et de partager cet article.