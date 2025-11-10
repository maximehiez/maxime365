---
title: "Comment localiser un ordinateur Windows perdu/volé via Intune"
meta_title: ""
description: ""
date: 2025-11-10T10:00:00-05:00
image: "/images/blog/intune/tuto/intune_how_to_locate_windows_device_thumbnail.png"
categories: ["Intune", "Tutoriel"]
author: "Maxime Hiez"
tags: ["Localiser", "Perdu", "Volé"]
draft: false
---
---

##### Introduction
Windows 10/11 intègre une option pour retrouver un appareil égaré ou volé ; la fonctionnalité *Localiser mon appareil*. Il est possible de suivre la position d’un PC, d’un portable ou d’une tablette, à condition que certaines conditions soient remplies (compte Microsoft, connexion Internet, ...). Cette solution simple peut faire la différence en cas de perte ou de vol.

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
Connectez vous au Microsoft Intune Admin Center en ouvrant votre navigateur web sur https://intune.microsoft.com.

---

##### Étape 2 : Activer la fonction *Find My Device*
Dans le menu de gauche, cliquez sur *<u>Devices</u>*, puis sur *<u>Configuration</u>*.

Créez une règle pour la plateforme *Windows 10 and later* avec le type de profil *Settings catalog*.

![image](/images/blog/intune/tuto/intune_how_to_locate_windows_device_001.png)

Recherchez *Find My Device* dans le filtre de noms, cliquez sur *<u>Experience</u>*, et cochez la case *<u>Allow Find My Device</u>*.

![image](/images/blog/intune/tuto/intune_how_to_locate_windows_device_002.png)

Assignez le groupe de sécurité contenant vos postes Windows.

![image](/images/blog/intune/tuto/intune_how_to_locate_windows_device_003.png)

---

##### Étape 3 : Activer les services de localisation
Dans le menu de gauche, cliquez sur *<u>Devices</u>*, puis sur *<u>Configuration</u>*.

Créez une règle pour la plateforme *Windows 10 and later* avec le type de profil *Settings catalog*.

![image](/images/blog/intune/tuto/intune_how_to_locate_windows_device_004.png)

Recherchez *Location and Sensors* dans le filtre de noms, cliquez sur *<u>Location and Sensors</u>*, et cochez la case *<u>Tun off location (Users)</u>*.

![image](/images/blog/intune/tuto/intune_how_to_locate_windows_device_005.png)

Assignez le groupe de sécurité contenant vos postes Windows.

![image](/images/blog/intune/tuto/intune_how_to_locate_windows_device_006.png)

---

##### Étape 4 : Localiser l'ordinateur
Après quelques minutes, les nouvelles configurations devraient être synchronisées sur les ordinateurs ciblés qui devraient avoir leur fonctionnalité activée.

![image](/images/blog/intune/tuto/intune_how_to_locate_windows_device_007.png)

Dans le menu de gauche, cliquez sur *<u>Devices</u>*, puis sur *<u>All devices</u>*, et cliquez sur l'ordinateur désiré.<br/>

Cliquez sur les 3 points au bout de la ligne d'actions, puis sur *<u>Locate device</u>*.

![image](/images/blog/intune/tuto/intune_how_to_locate_windows_device_008.png)

Après quelques instants, l'ordinateur perdu (ou volé) est localisé.

![image](/images/blog/intune/tuto/intune_how_to_locate_windows_device_009.png)

<u>Note</u> : Une notification est supposée s'afficher sur l'ordinateur, mais je n'en ai pas eu pendant la mise en place de ce tutoriel.

---

##### Conclusion
Vous savez maintenant comment localiser un ordinateur Windows via Intune.

---

##### Sources
[Microsoft Learn - Localiser l’appareil](https://learn.microsoft.com/fr-ca/intune/intune-service/remote-actions/device-locate?pivots=windows)

---


Avez-vous apprécié cet article ? Vous avez des questions, commentaires ou suggestions, n’hésitez pas à m'envoyer un message depuis le formulaire de contact.

N'oubliez pas de nous suivre et de partager cet article.