---
title: "Comment bloquer les ports USB d'un ordinateur via Intune"
meta_title: ""
description: ""
date: 2030-09-28T10:00:00-05:00
image: "/images/blog/intune/tuto/intune_how_to_block_usb_device_thumbnail.png"
categories: ["Intune", "Tutoriel"]
author: "Maxime Hiez"
tags: ["USB", "Stockage"]
draft: false
---
---

##### Introduction
Dans les organisations modernes, il est essentiel de fournir une connectivité WiFi sécurisée et fluide aux appareils professionnels.<br/>
Configurer manuellement les paramètres WiFi sur plusieurs appareils peut être chronophage et source d'erreurs. Les profils WiFi Intune simplifient ce processus en centralisant la gestion des paramètres réseau sans fil et en les transférant aux appareils Windows, macOS, iOS et Android inscrits. Cette approche renforce la sécurité, garantit la conformité et simplifie la connexion sans saisie manuelle des identifiants.

---

##### Prérequis
**<u>Un PC Windows 10/11</u>**
- Un PC Windows 10/11 inscrit dans Intune.

**<u>Un groupe Entra ID</u>**
- Un groupe de sécurité Entra ID qui contient les PC concernés.

**<u>Rôle d’administrateur</u>**
- Un compte avec le rôle *Administrateur Global* ou *Administrateur Intune* pour accéder au Microsoft Intune Admin Center.

---

##### Étape 1 : Se connecter au Microsoft Intune Admin Center
Connectez-vous au Microsoft Intune Admin Center en ouvrant votre navigateur web sur https://intune.microsoft.com.

---

##### Étape 2 : Créer une règle de réduction de surface d'attaque
Dans le menu de gauche, cliquez sur *<u>Endpoint security</u>*, puis sur *<u>Attack surface reduction</u>*.

Créez une règle pour la plateforme *Windows* avec le profil *Device Control*.<br/>

![image](/images/blog/intune/tuto/intune_how_to_block_usb_device_001.png)

Cliquez sur *<u>Removable Storage Access</u>*, puis configurez les 2 attributs *WPD Devices: Deny read access* et *WPD Devices: Deny read access* avec la valeur *Disabled*.

![image](/images/blog/intune/tuto/intune_how_to_block_usb_device_002.png)

Assignez le groupe de sécurité contenant vos postes Windows.

![image](/images/blog/intune/tuto/intune_how_to_block_usb_device_003.png)

---

##### Étape 3 : Valider le blocage
Après quelques minutes, la nouvelle règle devrait être synchronisée sur les ordinateurs ciblés.

![image](/images/blog/intune/tuto/intune_how_to_block_usb_device_004.png)

L'ordinateur a reçu la configuration et ne peut plus lire ni écrire sur les stockages USB.

![image](/images/blog/intune/tuto/intune_how_to_block_usb_device_005.png)

---

##### Conclusion
Vous savez maintenant comment bloquer l'utilisation des ports USB sur un ordinateur Windows via Intune.

---

##### Sources
[Microsoft Learn - Profil WiFi](https://learn.microsoft.com/fr-ca/intune/intune-service/configuration/wi-fi-settings-windows)

---


Avez-vous apprécié cet article ? Vous avez des questions, commentaires ou suggestions, n’hésitez pas à m'envoyer un message depuis le formulaire de contact.

N'oubliez pas de nous suivre et de partager cet article.