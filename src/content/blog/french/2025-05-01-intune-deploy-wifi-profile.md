---
title: "Comment créer un profil WiFi pour Windows 10/11 via Intune"
meta_title: ""
description: ""
date: 2025-05-01T10:00:00-05:00
image: "/images/blog/intune/tuto/intune_deploy_wifi_profile_thumbnail.png"
categories: ["Intune", "Tutoriel"]
author: "Maxime Hiez"
tags: ["WiFi"]
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
Connectez vous au Microsoft Intune Admin Center en ouvrant votre navigateur web sur https://intune.microsoft.com.

---

##### Étape 2 : Créer un profil WiFi
Dans le menu de gauche, cliquez sur *<u>Devices</u>*, puis sur *<u>Configuration</u>*.

Créez une règle pour la plateforme *Windows 10 and later* avec le type de profil *Template*.<br/>
Recherchez *Wi-Fi* dans le filtre de noms.

![image](/images/blog/intune/tuto/intune_deploy_wifi_profile_001.png)

Utilisez le profil de type :
- *Basic* si votre connexion WiFi prend en charge des configurations simples telles que le SSID et le mot de passe.
- *Enterprise* si votre connexion WiFi prend en charge des configurations complexes telles que l'authentification 802.1X.

Entrez le nom de la connexion (*SSID*) ainsi que son type de sécurité et son mot de passe.

![image](/images/blog/intune/tuto/intune_deploy_wifi_profile_002.png)

Assignez le groupe de sécurité contenant vos postes Windows.

![image](/images/blog/intune/tuto/intune_deploy_wifi_profile_003.png)

Optionnellement, une règle peut être créée pour appliquer la configuration uniquement sur certaines versions d'ordinateurs.

![image](/images/blog/intune/tuto/intune_deploy_wifi_profile_004.png)

---

##### Étape 3 : Valider la connexion WiFi
Après quelques minutes, le nouveau profil devrait être synchronisé sur les ordinateurs ciblés qui devraient recevoir la connexion WiFi automatiquement.

![image](/images/blog/intune/tuto/intune_deploy_wifi_profile_005.png)

L'ordinateur a reçu la configuration et est automatiquement connecté au WiFi.

![image](/images/blog/intune/tuto/intune_deploy_wifi_profile_006.png)

---

##### Conclusion
Vous savez maintenant comment créer un profil WiFi sur un ordinateeur Windows via Intune.

---

##### Sources
[Microsoft Learn - Profil WiFi](https://learn.microsoft.com/fr-ca/intune/intune-service/configuration/wi-fi-settings-windows)

---


Avez-vous apprécié cet article ? Vous avez des questions, commentaires ou suggestions, n’hésitez pas à m'envoyer un message depuis le formulaire de contact.

N'oubliez pas de nous suivre et de partager cet article.