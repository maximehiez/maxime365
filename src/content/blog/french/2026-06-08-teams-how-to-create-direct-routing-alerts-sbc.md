---
title: "Comment créer des alertes de surveillance des SBC dans Teams"
meta_title: ""
description: ""
date: 2026-06-08T10:00:00-05:00
image: "/images/blog/teams/tuto/teams_how_to_create_direct_routing_alerts_sbc_thumbnail.png"
categories: ["Teams", "Tutoriel"]
author: "Maxime Hiez"
tags: ["Direct Routing", "SBC", "Alertes"]
draft: false
---
---

##### Introduction
Le Centre d'administration *Microsoft Teams* dispose d'une nouvelle règle d'alerte dédiée au *Direct Routing*, permettant de surveiller de manière proactive les changements d'état des *Session Border Controllers* (*SBC*). Cette règle comble un manque important pour les organisations qui s'appuient sur un modèle *Direct Routing as a Service*, où le SBC n'est pas géré directement par l'équipe informatique de l'entreprise.

---

##### Prérequis
**<u>Téléphonie Microsoft Teams activée</u>**
- La configuration *Direct Routing* avec un SBC.
- Une équipe Teams configurée.

**<u>Rôle d’administrateur</u>**
- Un compte avec le rôle *Administrateur Global* ou *Administrateur Teams* pour accéder au Microsoft Teams Admin Center.

---

##### Étape 1 : Se connecter au Microsoft Teams Admin Center
Connectez-vous au Microsoft Teams Admin Center en ouvrant votre navigateur web sur https://admin.teams.microsoft.com.

---

##### Étape 2 : Activer la règle
Dans le menu de gauche, cliquez sur *<u>Notifications & alerts</u>*, puis sur *<u>Rules</u>*, et sur *<u>Direct Routing</u>*.

![image](/images/blog/teams/tuto/teams_how_to_create_direct_routing_alerts_sbc_001.png)

Les paramètres sont déjà préremplis, vous avez la possibilité d'ajuster les valeurs selon vos attentes. Il vous reste à assigner vos SBC à surveiller, et le canal Teams à notifier.

![image](/images/blog/teams/tuto/teams_how_to_create_direct_routing_alerts_sbc_002.png)

---

##### Valider le résultat
Après quelques minutes, le canal Teams devrait commencer à recevoir les alertes.

![image](/images/blog/teams/tuto/teams_how_to_create_direct_routing_alerts_sbc_003.png)

---

##### Métriques surveillées
Les alertes s'appuient sur la télémétrie déjà collectée par le tableau de bord de santé *Direct Routing*. Les principales métriques concernées sont :
- <u>Efficacité réseau</u> : Ratio mesurant la capacité du réseau à acheminer les appels jusqu'au destinataire.
- <u>Capacité d'appels simultanés</u> : Déclenchement d'une alerte lorsque le seuil configuré via *-MaxConcurrentSessions* est atteint à 90%.
- <u>Connectivité TLS</u> : État de la connexion *TLS* entre le SBC et l'interface *Direct Routing*, avec détection de l'expiration de certificat.
- <u>Options SIP</u> : Réception ou absence des messages d'options SIP envoyés par le SBC toutes les minutes.

---

##### Conclusion
Cette règle d'alerte native simplifie la supervision des infrastructures Direct Routing en permettant une réaction proactive aux incidents, sans quitter l'écosystème Microsoft. Elle est particulièrement utile dans les scénarios où le SBC est opéré par un fournisseur de service tiers.<br/><br/>
Vous savez maintenant comment créer des alertes pour vos SBC Teams.

---

##### Sources
[Microsoft Learn - Surveillance et génération d’alertes](https://learn.microsoft.com/fr-ca/microsoftteams/alerts/teams-admin-alerts)

[Microsoft Learn - Tableau de bord d’intégrité pour Direct Routing](https://learn.microsoft.com/fr-ca/microsoftteams/direct-routing-health-dashboard)

---


Avez-vous apprécié cet article ? Vous avez des questions, commentaires ou suggestions, n'hésitez pas à m'envoyer un message depuis le formulaire de contact.

N'oubliez pas de nous suivre et de partager cet article.