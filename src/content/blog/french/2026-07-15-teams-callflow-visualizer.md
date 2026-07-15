---
title: "Visualiseur de flux d'appels pour les Auto Attendants Teams"
meta_title: ""
description: ""
date: 2026-07-15T10:00:00-05:00
image: "/images/blog/teams/teams_callflow_visualizer_thumbnail.png"
categories: ["Teams"]
author: "Maxime Hiez"
tags: ["Téléphonie", "Direct Routing", "Calling Plan", "Operator Connect", "Standard automatique", "Flux d'appel"]
draft: false
---
---

##### Introduction
Microsoft a introduit un visualiseur de flux d'appels pour les *Auto Attendants* (*standards automatiques*) dans le Centre d'administration *Microsoft Teams*, permettant aux administrateurs d'avoir une vue rapide sur les configurations des scénarios d'appels entrants.

---

##### Qu'est-ce que le visualiseur de flux d'appels ?
Le visualiseur de flux d'appels est un outil interactif intégré dans le Centre d'administration Teams. Il génère une représentation visuelle en arborescence du routage des appels pour les Auto Attendants et les agents vocaux (*Teams Phone Agents*), avec des contrôles de zoom et de défilement pour naviguer dans les configurations complexes.

Le visualiseur affiche dans une vue unifiée les relations de routage en amont et en aval, incluant :
- <u>Comptes de ressources</u> : Assignations des comptes de ressources liés à l'Auto Attendant
- <u>Greetings</u> : Configuration des messages d'accueil
- <u>Heures ouvrables</u> : Logique de routage pendant les heures d'ouverture
- <u>Heures hors ouverture</u> : Chemins de routage en dehors des heures d'ouverture
- <u>Jours fériés</u> : Branches de flux d'appels configurées pour les jours fériés

---

##### Comment accéder au visualiseur ?
La fonctionnalité est activée par défaut, sans configuration requise. Pour y accéder :
1. Accédez au Microsoft Teams Admin Center à l'adresse https://admin.teams.microsoft.com.
2. Dans le menu de gauche, cliquez sur *Voice*, puis sur *Auto attendants*.
3. Sélectionnez le menu que vous souhaitez analyser et cliquez sur l'option *Call Flow visualizer*.

![image](/images/blog/teams/teams_callflow_visualizer_001.png)

Le diagramme interactif s'affiche et permet d'explorer le flux d'appels et de l'exporter en PDF.

![image](/images/blog/teams/teams_callflow_visualizer_002.png)

---

##### Disponibilité
Le déploiement s'est effectué progressivement selon les environnements :
- <u>Worldwide / GCC</u> : Déploiement complété en Juin 2026
- <u>GCC High / DoD</u> : Déploiement prévu entre mi-Août 2026 et mi-Septembre 2026

---

##### Conclusion
Le visualiseur de flux d'appels simplifie la gestion et le dépannage des Auto Attendants complexes dans le Centre d'administration Teams. L'analyse et la documentation des scénarios d'appels devient beaucoup plus simple avec cette nouvelle fonctionnalité.

---

##### Sources
[Microsoft Learn - Configuration Auto Attendants](https://learn.microsoft.com/fr-ca/microsoftteams/aa-cq-setup-auto-attendant)

---


Avez-vous apprécié cet article ? Vous avez des questions, commentaires ou suggestions, n'hésitez pas à m'envoyer un message depuis le formulaire de contact.

N'oubliez pas de nous suivre et de partager cet article.