---
title: "Détecter l’exposition de mots de passe en clair avec Purview"
meta_title: ""
description: ""
date: 2026-04-21T10:00:00-05:00
image: "/images/blog/purview/purview_detecting_plain_text_password_exposure_using_custom_regex_thumbnail.png"
categories: ["Purview"]
author: "Maxime Hiez"
tags: ["Protection de données", "Gouvernance", "Sensitivity Labels", "DLP", "SIT", "Sécurité"]
draft: false
---
---

##### Introduction
Dans un environnement *Microsoft 365*, la fuite de données ne concerne pas uniquement les numéros de carte bancaire ou les informations personnelles. Un risque souvent sous-estimé reste le partage de mots de passe en clair dans des courriels, des fichiers ou des conversations Teams.

Grâce à *Microsoft Purview*, il est possible de détecter ce type de comportement en s’appuyant sur des *expressions régulières* (*regex*) et des *Sensitive Information Types* (*SIT*).

---

##### Pourquoi la détection des mots de passe est complexe ?
Contrairement à un numéro de carte de crédit ou un identifiant officiel, un mot de passe ne suit aucun format standard universel. Cela rend sa détection beaucoup plus difficile.

Les Sensitive Information Types reposent sur des modèles (patterns) combinant :
- Des expressions régulières
- Des mots-clés contextuels
- Et des niveaux de confiance

Le problème : un mot de passe peut être n’importe quelle chaîne de caractères, ce qui augmente fortement les faux positifs si la détection est mal configurée.

---

##### L’approche : Combiner regex et contexte
L’approche efficace est de ne pas détecter uniquement le mot de passe, mais plutôt le contexte dans lequel il apparaît. 
<br /><br />

**Exemple typique : password = P@ssw0rd123**
<br /><br />

Dans ce cas, la stratégie consiste à :
- Détecter des mots-clés comme *"password"*, *"pwd"*, *"secret"*
- Associer ces mots-clés à une regex qui identifie une chaîne ressemblant à un mot de passe
- Ajouter des règles de proximité pour lier les deux éléments

Les regex permettent justement de définir ces modèles de détection (patterns) en analysant le texte.

---

##### Implémentation dans Microsoft Purview
Avec Microsoft Purview, vous pouvez mettre en place des règles de *Data Loss Prevention* (*DLP*) pour détecter ce contenu :
1. Créer un Sensitive Information Type personnalisé
    - Un élément principal (regex pour détecter une chaîne de type mot de passe)
    - Des éléments secondaires (mots-clés comme *"password"*, *"login"*, ...)
2. Ajuster le niveau de confiance
    - Faible (beaucoup de détection, mais plus de bruit)
    - Élevé (moins de faux positifs, mais plus restrictif)
3. Intégrer dans une politique DLP
    - Bloquer le partage
    - Afficher un avertissement utilisateur
    - Générer une alerte sécurité

Les SIT sont utilisés dans plusieurs briques : DLP, étiquettes de confidentialité, Insider Risk, ...

---

##### Bonnes pratiques
Pour que la détection soit efficace :
- Toujours combiner regex + mots-clés
- Éviter les regex trop larges (sinon explosion des faux positifs)
- Tester avec différents scénarios (Teams, Exchange, SharePoint)
- Ajuster la proximité entre mot-clé et valeur détectée

---

##### Cas d’usage concret
Quelques scénarios typiques où cette approche est utile :
- Un utilisateur partage un mot de passe dans Microsoft Teams
- Un fichier Excel contient des identifiants en clair
- Un courriel contient une ligne du type : *"Voici le mot de passe : ..."*

Dans ces cas, une politique DLP bien configurée peut :
- Bloquer le message
- Notifier l’utilisateur
- Alerter l’équipe sécurité

---

##### Conclusion
La détection de mots de passe en clair est un cas avancé mais critique en sécurité Microsoft 365. Grâce aux capacités de personnalisation de Microsoft Purview, il est possible de mettre en place une détection intelligente basée sur le contexte, plutôt qu’un simple filtrage brut. Bien configurée, cette approche permet de réduire les risques de fuite d’identifiants sans pénaliser les utilisateurs avec trop de faux positifs.

---

##### Sources
[Microsoft - Techcommunity](https://techcommunity.microsoft.com/blog/microsoft-security-blog/detecting-plain%E2%80%91text-password-exposure-using-custom-regex-in-microsoft-purview/4513022)

---


Avez-vous apprécié cet article ? Vous avez des questions, commentaires ou suggestions, n’hésitez pas à m'envoyer un message depuis le formulaire de contact.

N'oubliez pas de nous suivre et de partager cet article.