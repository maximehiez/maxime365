---
title: "Comment activer l'historique d'appels des files d'attente Teams"
meta_title: ""
description: ""
date: 2026-03-06T10:00:00-05:00
image: "/images/blog/teams/tuto/teams_how_to_enable_shared_calling_history_thumbnail.png"
categories: ["Teams", "Tutoriel"]
author: "Maxime Hiez"
tags: ["Téléphonie", "Direct Routing", "Calling Plan", "Operator Connect", "File d'attente", "Queues App"]
draft: false
---
---

##### Introduction
Microsoft vient d'introduire la fonctionnalité qui permet à l'historique d'appels d'être partagé dans l'application *Microsoft Teams Queues*. Cette fonctionnalité offre aux membres d'une file d'attente une vue unifiée de tous les événements d'appel (manqués, entrants et sortants). Grâce à cet historique partagé, les équipes peuvent accéder à des informations cohérentes et à jour, assurer un suivi efficace et améliorer leur réactivité opérationnelle.

---

##### Prérequis
**<u>Téléphonie Microsoft Teams activée</u>**
- Une file d'attente configurée.
- Teams Queues App déployée.

**<u>Licences nécessaires</u>**
- *Microsoft Teams Premium*.

**<u>Rôle d’administrateur</u>**
- Un compte avec le rôle *Administrateur Global* ou *Administrateur Teams* pour accéder au Microsoft Teams Admin Center.

---

##### Étape 1 : Se connecter au Microsoft Teams Admin Center
Connectez-vous au Microsoft Teams Admin Center en ouvrant votre navigateur web sur https://admin.teams.microsoft.com.

---

##### Étape 2 : Créer un modèle d'historique d'appels partagé
Dans le menu de gauche, cliquez sur *<u>Voice</u>*, puis sur *<u>Templates and resources</u>*, et créez un nouveau modèle.

Choisissez l'option *Authorized users and agents* pour les deux attributs.

![image](/images/blog/teams/tuto/teams_how_to_enable_shared_calling_history_001.png)

---

##### Étape 3 : Appliquer le modèle sur la file d'attente
Dans le menu de gauche, cliquez sur *<u>Voice</u>*, puis sur *<u>Call queues</u>*, et éditez votre file d'attente ...

![image](/images/blog/teams/tuto/teams_how_to_enable_shared_calling_history_002.png)

... et ajouter le modèle.

![image](/images/blog/teams/tuto/teams_how_to_enable_shared_calling_history_003.png)

---

##### Valider le résultat
Ouvrez l'application *Microsoft Teams Queues App* et appelez la file d'attente. Les nouveaux appels seront désormais visibles dans l'historique.

![image](/images/blog/teams/tuto/teams_how_to_enable_shared_calling_history_004.png)

Il devient possible d'assurer un suivi sur les appels appels manqués en appliquant un statut à l'appel.

![image](/images/blog/teams/tuto/teams_how_to_enable_shared_calling_history_005.png)

---

##### Conclusion
Vous savez maintenant comment activer un modèle d'historique d'appels partagé dans les files d'attente Teams.

---

##### Sources
[Microsoft Learn - Historique des appels partagés](https://learn.microsoft.com/fr-ca/microsoftteams/aa-cq-shared-call-queue-history)

---


Avez-vous apprécié cet article ? Vous avez des questions, commentaires ou suggestions, n’hésitez pas à m'envoyer un message depuis le formulaire de contact.

N'oubliez pas de nous suivre et de partager cet article.