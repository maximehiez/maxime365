---
title: "Comment installer l'extension Defender dans Chrome via Intune"
meta_title: ""
description: ""
date: 2030-09-28T10:00:00-05:00
image: "/images/blog/intune/tuto/intune_how_to_install_defender_browser_protection_extension_chrome_thumbnail.png"
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
Connectez-vous au Microsoft Intune Admin Center en ouvrant votre navigateur web sur https://intune.microsoft.com.

---

##### Étape 2 : Activer la fonction *Find My Device*
Dans le menu de gauche, cliquez sur *<u>Devices</u>*, puis sur *<u>Configuration</u>*.

Créez une règle pour la plateforme *Windows 10 and later* avec le type de profil *Settings catalog*.

![image](/images/blog/intune/tuto/intune_how_to_install_defender_browser_protection_extension_chrome_001.png)









Recherchez *Find My Device* dans le filtre de noms, cliquez sur *<u>Experience</u>*, et cochez la case *<u>Allow Find My Device</u>*.

![image](/images/blog/intune/tuto/intune_how_to_install_defender_browser_protection_extension_chrome_002.png)

![image](/images/blog/intune/tuto/intune_how_to_install_defender_browser_protection_extension_chrome_003.png)

Assignez le groupe de sécurité contenant vos postes Windows.

![image](/images/blog/intune/tuto/intune_how_to_install_defender_browser_protection_extension_chrome_004.png)

---

##### Étape 3 : Valider la connexion WiFi
Après quelques minutes, le nouveau profil devrait être synchronisé sur les ordinateurs ciblés qui devraient recevoir la connexion WiFi automatiquement.

![image](/images/blog/intune/tuto/intune_how_to_install_defender_browser_protection_extension_chrome_005.png)

---

##### Conclusion
Vous savez maintenant comment localiser un ordinateur Windows via Intune.

---

##### Sources
[Microsoft Learn - Localiser l’appareil](https://learn.microsoft.com/fr-ca/intune/intune-service/remote-actions/device-locate?pivots=windows)

---


Avez-vous apprécié cet article ? Vous avez des questions, commentaires ou suggestions, n’hésitez pas à m'envoyer un message depuis le formulaire de contact.

N'oubliez pas de nous suivre et de partager cet article.