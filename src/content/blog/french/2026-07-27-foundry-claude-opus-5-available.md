---
title: "Claude Opus 5 disponible dans Microsoft Foundry"
meta_title: ""
description: ""
date: 2026-07-27T10:00:00-05:00
image: "/images/blog/foundry/foundry_claude_opus_5_available_thumbnail.png"
categories: ["Foundry"]
author: "Maxime Hiez"
tags: ["IA", "Claude", "Agentique"]
draft: false
---
---

##### Introduction
*Claude Opus 5* est disponible dans *Microsoft Foundry* depuis le 24 Juillet 2026, simultanément avec son lancement général par *Anthropic*. Pour la première fois, un modèle *Claude* arrive dans *Foundry* dès le jour du lancement, avec deux options d'hébergement : sur l'infrastructure Anthropic ou sur l'infrastructure *Azure*, chaque option offrant un profil de résidence des données distinct.

Voir l'article sur Claude Opus 5 [ICI](https://maxime.hiez.ca/blog/2026-07-24-ai-anthropic-introducing-claude-opus-5).

---

##### Déploiement et régions
Le modèle est accessible depuis le catalogue du portail Foundry ([ai.azure.com](https://ai.azure.com)) : section *Discover* > *Models* > recherche *claude-opus-5*. L'identifiant de déploiement par défaut est *claude-opus-5*. La fenêtre de contexte est d'1 million de tokens, avec une sortie maximale de 128 000 tokens. L'acceptation des conditions de l'*Azure Marketplace* est requise lors du premier déploiement.

Deux versions coexistent sous le même identifiant :
- <u>Version 1 — Hébergée sur Anthropic</u> : L'inférence s'exécute sur l'infrastructure Anthropic. Disponible en *Global Standard* dans les régions *East US 2* et *Sweden Central*.
- <u>Version 2 — Hébergée sur Azure</u> : Les prompts et les réponses restent dans l'infrastructure Azure. Disponible en *Global Standard* dans plusieurs régions américaines et Sweden Central, et en *Data Zone Standard US* dans les régions américaines. Les fonctionnalités agentiques avancées (*tool use* côté serveur, *structured outputs*, *MCP*, *Files API*) ne sont pas disponibles dans cette version.

---

##### Facturation CCU
Claude dans Foundry est facturé via des *Claude Consumption Units* (*CCU*). Un CCU équivaut à 0.01$. Le tarif d'Opus 5 est identique à celui de l'API directe Anthropic : 5$ / 1M tokens en entrée et 25$ / 1M tokens en sortie, soit 500 CCU par 1M tokens en entrée et 2 500 CCU par 1M tokens en sortie. La facturation est postpaid uniquement, sans option de crédit prépayé. Les dépenses Claude comptent vers l'engagement *Microsoft Azure Consumption Commitment* (*MACC*) existant et sont visibles dans *Azure Cost Management*.

<Notice type="info">Claude dans Microsoft Foundry est facturé via l'Azure Marketplace. Certains types d'abonnements Azure ne peuvent pas effectuer d'achats sur la Marketplace : *CSP*, abonnements étudiant, *Visual Studio Enterprise* et abonnements d'essai gratuit. Vérifier le type d'abonnement avant de planifier un déploiement en production.</Notice>

---

##### Fonctionnalités enterprise et résidence des données
La Version 2 (hébergée sur Azure) offre une résidence complète des données : les prompts et les réponses ne quittent pas l'infrastructure Azure, avec une option de rétention zéro disponible. La Version 1 effectue l'inférence sur les serveurs Anthropic, même si la facturation transite par Azure.

Les deux versions bénéficient des fonctionnalités suivantes :
- Intégration *Azure Virtual Network* pour restreindre l'accès réseau au niveau de la ressource.
- Contrôle d'accès via clés API Azure ou *Entra ID* avec RBAC (rôle *Foundry User* requis).
- Supervision via *Azure Monitor*, journaux dans *Azure Log Analytics* et suivi des coûts dans Azure Cost Management.

Pour les organisations européennes, la région Sweden Central est disponible en *Global Standard* (Version 1 et Version 2). Le déploiement *Data Zone Standard* (résidence garantie dans une zone géographique) n'est pas disponible pour les modèles Claude en Europe. Le routage Global Standard peut traverser des régions Azure hors UE.

---

##### Pensée adaptative et contrôle d'effort
Sur Foundry, Claude Opus 5 supporte uniquement les modes de pensée *adaptive* et *disabled*, le mode *enabled* (pensée étendue permanente) n'est pas disponible. En mode *adaptive* (défaut), le modèle ajuste lui-même la profondeur de réflexion selon la complexité de la requête.

Le paramètre *effort* contrôle le compromis qualité et coût :
- En mode *adaptive* : niveaux *low*, *medium*, *high*, *xhigh* et *max* disponibles.
- En mode *disabled* : effort plafonné à *high*.

Le mode *Fast* (environ 2.5 fois plus rapide, disponible sur l'API directe Anthropic en research preview) n'est pas disponible dans Foundry.

---

##### Conclusion
La disponibilité simultanée de Claude Opus 5 dans Foundry au jour du lancement marque une étape dans la maturité de l'intégration Azure. La Version 2 (hébergée sur Azure) répond aux exigences de résidence des données des organisations qui ne peuvent pas utiliser l'API directe Anthropic. Pour les équipes déjà déployées sur Opus 4.8 dans Foundry, la migration vers Opus 5 suit le même processus de déploiement, sans changement de tarif.

---

##### Sources
[Microsoft - Techcommunity](https://techcommunity.microsoft.com/blog/azure-ai-foundry-blog/claude-opus-5-is-available-today-in-microsoft-foundry/4535068)

[Microsoft Learn - Modèles Claude dans Foundry](https://learn.microsoft.com/fr-ca/azure/foundry/foundry-models/concepts/claude-models)

[Microsoft Learn - Disponibilité des modèles partenaires](https://learn.microsoft.com/fr-ca/azure/foundry/foundry-models/concepts/models-from-partners)

[Anthropic - Claude dans Microsoft Foundry](https://platform.claude.com/docs/en/build-with-claude/claude-in-microsoft-foundry)

---


Avez-vous apprécié cet article ? Vous avez des questions, commentaires ou suggestions, n'hésitez pas à m'envoyer un message depuis le formulaire de contact.

N'oubliez pas de nous suivre et de partager cet article.