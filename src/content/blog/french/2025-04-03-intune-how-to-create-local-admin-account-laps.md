---
title: "Comment créer un compte admin local Windows via Intune LAPS"
meta_title: ""
description: ""
date: 2025-04-03T10:00:00-05:00
image: "/images/blog/intune/tuto/intune_how_to_create_local_admin_account_laps_thumbnail.png"
categories: ["Intune", "Tutoriel"]
author: "Maxime Hiez"
tags: ["LAPS", "Mot de passe", "Sécurité"]
draft: false
---
---

##### Introduction
J'avais publié, en Février dernier, un article qui expliquait comment remplacer le mot de passe du compte local de votre MTR via *LAPS* (*Local Administrator Password Solution*) dans Intune. J'avais conclu mon article en expliquant qu'il était possible de gérer les comptes administrateurs locaux des ordinateurs avec la même solution. Microsoft vient justement de sortir une mise à jour qui permet de créer directement le compte via LAPS sans passer via une règle de configuration avec un mot de passe manuel.

Voir l'article de Février 2025 [ICI](https://maxime.hiez.ca/blog/2025-02-17-intune-how-to-enable-laps-mtr).

---

##### Prérequis
**<u>Un PC Windows 11</u>**
- Un PC Windows 11 24H2 inscrit dans Intune.

**<u>Un groupe Entra ID</u>**
- Un groupe de sécurité Entra ID qui contient les PC concernés.

**<u>Rôle d’administrateur</u>**
- Un compte avec le rôle *Administrateur Global* ou *Administrateur Intune* pour accéder au Microsoft Intune Admin Center.

---

##### Étape 1 : Se connecter au Microsoft Intune Admin Center
Connectez-vous au Microsoft Intune Admin Center en ouvrant votre navigateur web sur https://intune.microsoft.com.

---

##### Étape 2 : Créer une règle LAPS
Dans le menu de gauche, cliquez sur *<u>Endpoint security</u>*, puis sur *<u>Account protection</u>*.

Créez une règle pour la plateforme *Windows 10 and later* avec le profil *Local admin password solution (Windows LAPS)*.

![image](/images/blog/intune/tuto/intune_how_to_create_local_admin_account_laps_001.png)

Activez les options avec les valeurs de votre choix.<br/>
Contrairement à la règle pour les MTR qui ciblait le compte *Admin*, on va vouloir ici créer un nouveau compte avec un préfixe (j'ai choisi ici *laps-admin-*) et ajouter un suffixe numérique aléatoire.

![image](/images/blog/intune/tuto/intune_how_to_create_local_admin_account_laps_002.png)

Assignez le groupe de sécurité contenant vos postes Windows.

![image](/images/blog/intune/tuto/intune_how_to_create_local_admin_account_laps_003.png)

---

##### Étape 3 : Valider le nouveau compte
Après quelques minutes, le nouveau compte devrait être visible dans la fenêtre *Computer Management*.

![image](/images/blog/intune/tuto/intune_how_to_create_local_admin_account_laps_004.png)

Vous pouvez aussi aller valider en vous rendant dans le *Event Viewer* et en ouvrant le répertoire *Applications and Services Logs / Microsoft / Windows / LAPS*.

![image](/images/blog/intune/tuto/intune_how_to_create_local_admin_account_laps_005.png)

---

##### Étape 4 : Accéder au mot de passe
J'avais couvert cette étape dans l'article de Février 2025, allez le consulter (le lien est dans l'introduction).

---

##### Conclusion
Vous savez maintenant comment créer un compte administrateur local avec LAPS dans Intune.

---

##### Sources
[Microsoft Learn - Windows LAPS](https://learn.microsoft.com/fr-ca/windows-server/identity/laps/laps-overview)

[Microsoft Learn - Nouveautés Intune](https://learn.microsoft.com/fr-ca/intune/intune-service/fundamentals/whats-new#new-settings-for-windows-laps-policy)

---


Avez-vous apprécié cet article ? Vous avez des questions, commentaires ou suggestions, n’hésitez pas à m'envoyer un message depuis le formulaire de contact.

N'oubliez pas de nous suivre et de partager cet article.