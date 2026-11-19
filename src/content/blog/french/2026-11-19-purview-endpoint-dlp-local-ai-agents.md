---
title: "Purview DLP ajoute un emplacement pour les agents IA locaux"
meta_title: ""
description: ""
date: 2026-11-19T10:00:00-05:00
image: "/images/blog/purview/purview_endpoint_dlp_local_ai_agents_thumbnail.png"
categories: ["Purview"]
author: "Maxime Hiez"
tags: ["DLP", "IA", "Sécurité"]
draft: false
---
---

##### Introduction
Les agents IA qui tournent directement sur les postes, en ligne de commande ou dans l'éditeur de code, lisent des fichiers, reçoivent des prompts et appellent des outils. L'annonce *MC1558037*, publiée le 17 Novembre 2026, étend la protection contre la perte de données de *Microsoft Purview* à ces interactions. La fonctionnalité est annoncée, pas encore déployée : la Public Preview démarre fin Janvier 2027 et le déploiement de la disponibilité générale commence fin Mars 2027. Cet article détaille ce qui est annoncé, ce qui ne l'est pas encore et en quoi cela se distingue des fonctions voisines.

Voir l'article sur le DLP Endpoint et les sites d'IA [ICI](https://maxime.hiez.ca/blog/2026-02-09-purview-how-to-enable-dlp-ai-websites).

---

##### Ce qui change dans Purview DLP
Le DLP s'étend aux interactions des agents IA locaux pris en charge. Les politiques peuvent s'appliquer aux prompts, aux réponses et aux interactions avec les outils, ce qui couvre à la fois les échanges entre l'agent et l'humain et ceux entre l'agent et ses outils.

Le levier est un nouvel emplacement *Agents* dans les politiques DLP personnalisées pour les applications d'entreprise et les appareils. Il sert à cibler les agents locaux. Les contrôles reposent sur les types d'informations sensibles (*SIT*) : ils détectent les données sensibles dans le texte des prompts et dans les fichiers, et bloquent les mouvements de données qui violent la politique. L'objectif affiché est d'obtenir de la visibilité sur l'activité des agents locaux et d'appliquer des politiques DLP qui les empêchent de traiter des données sensibles.

![image](/images/blog/purview/purview_endpoint_dlp_local_ai_agents_001.png)

---

##### Calendrier et statut
- <u>Public Preview</u> : Début du déploiement fin Janvier 2027, fin prévue fin Février 2027
- <u>Disponibilité générale</u> : Début du déploiement fin Mars 2027, fin prévue fin Avril 2027

Aucune action n'est requise pour que la fonctionnalité arrive dans les tenants admissibles. Elle s'adresse aux organisations qui utilisent le DLP de *Purview* avec la licence nécessaire, mais aucune licence n'est nommée : il n'est pas possible, aujourd'hui, de dire quelle offre la couvre.

---

##### Ce qui n'est pas encore publié
La liste est longue, et c'est le point à retenir avant de promettre quoi que ce soit :
- Les agents locaux *"pris en charge"* ne sont pas listés
- Les systèmes d'exploitation et les versions minimales concernés ne sont pas précisés
- Le comportement par défaut, le mode simulation et les actions possibles (audit, blocage, avertissement) ne sont pas documentés
- Seuls les *SIT* sont mentionnés, pas les étiquettes de confidentialité ni les classifieurs entraînables
- Aucune page *Learn* ne décrit encore l'emplacement *Agents* : le lien de l'annonce mène à la page générale sur le DLP

Pour *Endpoint DLP* actuel, les appareils Windows 10 et 11, certaines versions de Windows Server et macOS (les trois dernières versions majeures) doivent être intégrés à *Purview*. Rien ne dit que la prise en charge des agents locaux suit la même liste.

---

##### À ne pas confondre avec les fonctions voisines
Plusieurs fonctions touchent déjà aux agents, et aucune ne fait la même chose :
- <u>Agent 365</u> : Les instances d'agents *Agent 365* peuvent être ajoutées à une politique DLP comme un utilisateur, pour auditer ou bloquer les échanges avec l'humain dans *Teams*, *OneDrive*, *SharePoint* et le courriel. C'est un autre type d'agent, déjà documenté
- <u>Agents locaux du centre d'administration Microsoft 365</u> : Expérience en Preview de détection des agents locaux (*shadow AI*). Le blocage ne vaut que pour *Gemini CLI* et les extensions *VS Code*, sur les appareils Windows gérés et inscrits dans *Microsoft Intune*
- <u>Découverte des agents locaux dans Defender pour Endpoint</u> : Inventaire des agents présents sur les postes Windows et macOS, par exemple *Claude Code*, *Codex*, *Cursor*, *GitHub Copilot* ou *Gemini CLI*. Cette liste est celle de *Defender* : rien ne prouve que le DLP couvre les mêmes agents
- <u>Protection à l'exécution de Defender</u> : Contrôle distinct, en Preview, qui inspecte les événements de la boucle de l'agent et bloque les prompts malveillants

Le DLP, lui, agit sur les données sensibles qui circulent. La découverte dit quels agents existent, le DLP vise à limiter les données sensibles qu'ils traitent.

---

##### Conclusion
Cette annonce ajoute au DLP un emplacement dédié aux agents locaux, ce qui est la bonne direction. Mais tant que les agents, les systèmes et les actions ne sont pas publiés, la valeur concrète reste à mesurer, et la Public Preview de Janvier 2027 sera le premier moment pour le faire. D'ici là, il est utile de revoir les politiques DLP existantes, de dresser l'inventaire des agents réellement présents sur les postes (la découverte *Defender* sert à cela) et de décider quelles données ne doivent jamais passer par un agent. Mieux vaut ne rien promettre aux métiers avant d'avoir vu le comportement par défaut.

---

##### Sources
[Microsoft - Techcommunity](https://techcommunity.microsoft.com/blog/microsoft-security-blog/secure-the-data-that-fuels-ai-with-microsoft-purview/4573266)

[Microsoft Learn - En savoir plus sur les points de terminaison de protection contre la perte de données](https://learn.microsoft.com/fr-ca/purview/endpoint-dlp-learn-about)

[Microsoft Learn - Utiliser Microsoft Purview pour gérer la sécurité des données & la conformité des Microsoft Agent 365](https://learn.microsoft.com/fr-ca/purview/ai-agent-365)

[Microsoft Learn - Découverte locale d'agents IA avec Microsoft Defender for Endpoint](https://learn.microsoft.com/fr-ca/defender-endpoint/local-agent-discovery-overview)

[Microsoft Learn - Comprendre les agents locaux dans le Centre d'administration Microsoft 365](https://learn.microsoft.com/fr-ca/microsoft-agent-365/admin/agent-local)

---


Avez-vous apprécié cet article ? Vous avez des questions, commentaires ou suggestions, n'hésitez pas à m'envoyer un message depuis le formulaire de contact.

N'oubliez pas de nous suivre et de partager cet article.