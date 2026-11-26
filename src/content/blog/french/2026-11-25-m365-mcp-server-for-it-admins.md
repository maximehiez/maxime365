---
title: "Microsoft MCP Server for IT Admins pour Entra et Intune"
meta_title: ""
description: ""
date: 2026-11-25T10:00:00-05:00
image: "/images/blog/m365/m365_mcp_server_for_it_admins_thumbnail.png"
categories: ["Microsoft 365"]
author: "Maxime Hiez"
tags: ["MCP", "Agent", "Sécurité"]
draft: false
---
---

##### Introduction
Le *Microsoft MCP Server for IT Admins* permet à un assistant IA compatible MCP de lire et de gérer des données *Microsoft Entra*, et de lire des données *Microsoft Intune*, avec les droits de l'utilisateur connecté. Le billet Techcommunity du 17 Novembre 2026 l'annonce en disponibilité générale, et les pages Learn le documentent maintenant sous ce nom, sans mention de préversion. L'ancien serveur *Microsoft MCP Server for Enterprise* est obsolète.

---

##### Un statut et un nom à vérifier
Les sources ne disent pas tout à fait la même chose :
- <u>Techcommunity</u> : Le serveur est en disponibilité générale sous le nom IT Admins
- <u>Book of News d'Ignite 2026</u> : Disponibilité générale aussi, mais sous l'ancien nom *Enterprise*, et listé sous Entra seulement
- <u>Microsoft Learn</u> : Les pages documentent *IT Admins* sans étiquette de préversion, et indiquent qu'*Enterprise* est obsolète. Elles n'affichent ni date de disponibilité générale ni mention de statut

Seul le billet Techcommunity parle donc de disponibilité générale pour *IT Admins*.

Le point de terminaison change avec le nom : *https://mcp.svc.cloud.microsoft/admin* remplace *https://mcp.svc.cloud.microsoft/enterprise*. Ce dernier continue de fonctionner quelques mois, sans date précise, et les clients MCP doivent migrer vers le nouveau.

---

##### Ce que le serveur permet : Entra, Intune et Purview
Le billet annonce la connexion aux données d'Entra, de *Microsoft Purview* et d'Intune. Learn décrit Entra en lecture et en gestion et Intune en lecture seule, sans les API de rapports. Purview apparaît dans l'annonce, mais pas dans la documentation Learn, qui dit prévoir d'élargir la prise en charge sans donner de date.

Les outils de lecture sont *microsoft_graph_suggest_queries*, *microsoft_graph_get* et *microsoft_graph_list_properties*. Learn ajoute *microsoft_graph_post*, *_put*, *_patch* et *_delete*, ainsi que *request_access* pour une assignation de paquet d'accès, l'activation d'un rôle *PIM* ou l'octroi d'une permission.

La documentation donne comme exemples *« Quels utilisateurs ne se sont pas connectés le mois dernier ? »*, *« MFA est-il activé pour tous les administrateurs ? »* ou, en écriture, *« Créer un compte pour un nouvel employé et l'ajouter au groupe Sales »*.

---

##### Lecture ou écriture ?
Chaque action d'écriture demande une confirmation à l'utilisateur par le mécanisme d'*elicitation* de MCP, et exige un client qui prend en charge la version *2026-07-28* du protocole. Sans cela, le serveur refuse l'écriture. Les clients *Claude* web, bureau et mobile n'ont pas encore cette fonction et restent en lecture seule : Learn recommande *Claude Code* pour écrire.

Les écritures sont donc possibles, mais confirmées une à une : testez-les d'abord dans un tenant de lab.

---

##### Se connecter et contrôler l'accès
Les permissions sont exclusivement déléguées : une requête n'aboutit que si les permissions Graph accordées au client et les rôles de l'utilisateur connecté le permettent. L'assistant voit donc ce que l'utilisateur voit, avec ses rôles et ses activations *PIM*. Rien ne fonctionne tant qu'un administrateur n'a pas préparé le tenant, une fois par client :
1. Inscrire une application par client (un seul tenant, *Comptes dans ce répertoire organisationnel uniquement*), avec l'URI de redirection ajoutée sous *Applications mobiles et de bureau*, pas sous *Web*.
2. Ajouter les trois permissions déléguées *Microsoft Graph* requises : *MCP.Server.Access* (consentement administrateur obligatoire), *User.Read* et *EntitlementMgmt-SubjectAccess.ReadWrite*, avec, au besoin, les permissions Graph propres à vos scénarios.
3. Accorder le consentement administrateur depuis la page des permissions d'API, avec le rôle *Administrateur d'application cloud* ou *Administrateur d'application*, et activer au besoin *Affectation requise ?* à *Oui* sur l'application d'entreprise, avec des utilisateurs ou des groupes assignés.
4. Configurer le client avec l'URL du point de terminaison et l'identifiant de l'application.

Les clients documentés sont *Visual Studio Code*, *GitHub Copilot* (application et CLI), *Claude Code*, *ChatGPT* et *Claude* (web, bureau, mobile), ainsi que *Microsoft Foundry* et *Copilot Studio*. Ces deux derniers se connectent depuis un connecteur hébergé côté serveur, avec une inscription de type Web (client confidentiel), pour des requêtes de lecture : une clé secrète pour *Foundry*, des identifiants fédérés par défaut pour *Copilot Studio*.

Les anciens scopes *MCP.{scope-graph}* et les cmdlets *Grant-EntraBetaMCPServerPermission* et *Revoke-EntraBetaMCPServerPermission* appartiennent au serveur *Enterprise* obsolète : */admin* ne les utilise pas. Il faut y accorder seulement les permissions Graph dont les scénarios ont besoin, par exemple *User.Read.All* à la place de *MCP.User.Read.All*, et en lecture seule, uniquement des permissions et des outils de lecture.

Aucun interrupteur à l'échelle du tenant n'est documenté pour */admin*. Learn précise aussi que le serveur n'est pas provisionné dans le tenant. Les contrôles documentés sont par application et par utilisateur : permissions Graph limitées, *Affectation requise ?*, rôles et *PIM*, sélection des outils et confirmation des écritures. Interprétation de ma part, non documentée : retirer le consentement d'un client ou supprimer son inscription devrait lui couper l'accès.

---

##### Journalisation, limites et licences
Chaque requête d'un client MCP apparaît dans les journaux d'activité *Microsoft Graph*, une fois activés, en filtrant sur l'application *e8c77dc2-69b3-43f4-bc51-3213c9d915b4* (table *MicrosoftGraphActivityLogs*, interrogeable en KQL).

Les limites connues sont les suivantes :
- <u>Débit</u> : 100 requêtes par minute et par utilisateur, et les outils qui appellent Microsoft Graph restent soumis à ses limites de limitation
- <u>Clouds</u> : Cloud public seulement, sans US Government L4 et L5 ni 21Vianet
- <u>Licences</u> : Aucun coût ni licence supplémentaire. Les licences des données consultées s'appliquent toujours, par exemple *Entra ID Governance* ou *P2* pour *PIM*

---

##### Conclusion
La lecture se prête déjà à un essai : droits de l'utilisateur, consentement par client et journaux Graph pour tout retracer. Les écritures se testent dans un tenant de lab, les clients encore sur */enterprise* se migrent vers */admin* avant la fin de la période de grâce, et Purview ne se planifie pas tant que Learn ne le documente pas.

---

##### Sources
[Microsoft - Techcommunity](https://techcommunity.microsoft.com/blog/microsoft-entra-blog/ai-is-changing-access-see-how-microsoft-entra-helps-you-stay-ahead-/4556456)

[Microsoft - Book of News](https://news.microsoft.com/events/ignite/2026/book-of-news)

[Microsoft Learn - Vue d’ensemble de Microsoft MCP Server for IT Admins](https://learn.microsoft.com/fr-ca/graph/mcp-server/overview)

[Microsoft Learn - Bien démarrer avec Microsoft MCP Server for IT Admins](https://learn.microsoft.com/fr-ca/graph/mcp-server/get-started)

[Microsoft Learn - Exemples d’invites pour Microsoft MCP Server for IT Admins](https://learn.microsoft.com/fr-ca/graph/mcp-server/mcp-server-sample-prompts)

[Microsoft Learn - Gérer les autorisations de Microsoft MCP Server for Enterprise](https://learn.microsoft.com/fr-ca/powershell/entra-powershell/how-to-manage-mcp-server-permissions?view=entra-powershell)

[Microsoft Learn - Utiliser Microsoft MCP Server for IT Admins à partir de Microsoft Foundry](https://learn.microsoft.com/fr-ca/graph/mcp-server/use-it-admins-mcp-server-microsoft-foundry)

[Microsoft Learn - Utiliser Microsoft MCP Server for IT Admins à partir de Copilot Studio](https://learn.microsoft.com/fr-ca/graph/mcp-server/use-it-admins-mcp-server-copilot-studio)

---


Avez-vous apprécié cet article ? Vous avez des questions, commentaires ou suggestions, n'hésitez pas à m'envoyer un message depuis le formulaire de contact.

N'oubliez pas de nous suivre et de partager cet article.