---
title: "Grok 4.6 disponible dans Microsoft Foundry"
meta_title: ""
description: ""
date: 2026-09-02T10:00:00-05:00
image: "/images/blog/foundry/foundry_grok_4_6_available_thumbnail.png"
categories: ["Foundry"]
author: "Maxime Hiez"
tags: ["IA", "Grok", "Agentique"]
draft: false
---
---

##### Introduction
*Grok 4.6*, le dernier modèle de pointe de *SpaceXAI*, est disponible en public preview dans *Microsoft Foundry Models* depuis le 26 Août 2026. Construit sur la famille de modèles à l'échelle de 1 500 milliards de paramètres de SpaceXAI, il ne cherche pas à briller sur une catégorie de benchmark isolée, mais à tenir la distance sur des tâches longues : planifier plusieurs étapes, appeler des outils de façon fiable, se rattraper après une erreur et livrer un résultat exploitable.

---

##### Un modèle pensé pour les agents de longue durée
La plupart des modèles se comportent bien sur une requête isolée. Un agent réel doit faire autre chose : avancer sur un objectif étendu, avec un minimum de supervision, en naviguant entre les outils et en récupérant après les échecs intermédiaires. C'est le terrain que vise Grok 4.6, aussi bien pour les copilotes de développement logiciel que pour les workflows métier à plusieurs étapes.

Le modèle est également positionné au delà du code, sur des tâches d'ingénierie structurée : conception assistée par ordinateur (*CAO*), conception procédurale et analyse technique complexe.

---

##### Benchmarks mis en avant
Microsoft cite trois évaluations dans son annonce, toutes fournies par l'éditeur du modèle :
- <u>Terminal-Bench 3.0</u> : Mesure la capacité à mener une exécution multi-étapes en terminal, proche des workflows d'ingénierie réels.
- <u>3DCodeBench</u> : Évalue la modélisation 3D procédurale agentique par le code, donc la capacité à raisonner sur des conceptions techniques et à les générer.
- <u>AA Briefcase</u> : Benchmark d'*Artificial Analysis* qui évalue les agents sur des projets de travail de connaissance longs, aboutissant à des livrables concrets comme des feuilles de calcul, des présentations, des notes de synthèse, des modèles financiers ou des *PDF*.

Ces résultats positionnent Grok 4.6 sur les charges qui produisent un livrable métier, et pas seulement une réponse.

---

##### Déploiement et régions
Grok 4.6 fait partie des modèles vendus par *Azure*, il n'est donc pas facturé via l'*Azure Marketplace* comme les modèles partenaires. Le déploiement se fait depuis le catalogue du portail Foundry ([ai.azure.com](https://ai.azure.com)) en sélectionnant le modèle *grok-4.6*, ou en ligne de commande via *Azure CLI*.

Les caractéristiques du déploiement sont les suivantes :
- <u>Type de déploiement</u> : *Global Standard* uniquement, dans toutes les régions supportées
- <u>Fenêtre de contexte</u> : 200 000 tokens, entrée et sortie confondues
- <u>Sortie maximale</u> : 128 000 tokens, ou le budget de contexte restant si celui-ci est inférieur
- <u>Entrées supportées</u> : Texte et image
- <u>API</u> : *Chat Completions* et *Responses*
- <u>Authentification</u> : *Entra ID* recommandé, ou clé API de la ressource Foundry

Le rôle *Cognitive Services Contributor* sur la ressource Foundry est nécessaire pour déployer le modèle. Les quotas dépendent du palier de l'abonnement : 50 000 tokens par minute et 50 requêtes par minute au palier Medium, 5 000 000 tokens par minute et 5 000 requêtes par minute au palier High.

<Notice type="info">L'API directe de SpaceXAI annonce une fenêtre de contexte de 500 000 tokens pour Grok 4.6, avec un tarif doublé au delà de 200 000 tokens. Dans Foundry, la fenêtre est plafonnée à 200 000 tokens : une requête qui dépasse cette limite échoue au lieu de basculer sur la tarification longue.</Notice>

---

##### Tarification
Le tarif dans Foundry est aligné sur celui de l'API directe, en déploiement Global Standard :
- <u>Entrée</u> : 2$ / 1M tokens
- <u>Sortie</u> : 6$ / 1M tokens
- <u>Cache</u> : 0.50$ / 1M tokens

À ce niveau de prix, Grok 4.6 se place nettement sous les modèles de pointe concurrents, ce qui reste son principal argument sur les charges agentiques consommatrices de tokens.

---

##### Pourquoi le déployer dans Foundry ?
L'accès au modèle n'est plus la difficulté, c'est son industrialisation qui l'est. Foundry apporte une plateforme unique pour découvrir, évaluer et déployer les modèles, en appliquant la gouvernance, la sécurité et les contrôles opérationnels attendus en entreprise. Concrètement, les équipes peuvent évaluer Grok 4.6 face aux autres modèles de pointe sur leurs propres charges, exécuter des évaluations spécifiques avant le déploiement, l'exposer via des points de terminaison gérés, puis l'intégrer dans des applications agentiques sans changer de chaîne d'outils.

---

##### Conclusion
Grok 4.6 dans Foundry est une option supplémentaire pour les équipes qui construisent des agents de longue durée, des copilotes d'ingénierie ou de l'automatisation métier, avec un rapport capacité et prix agressif. Le statut public preview et l'absence de *SLA* qui l'accompagne imposent toutefois de le réserver aux phases d'évaluation, pas encore aux charges de production.

---

##### Sources
[Microsoft - Techcommunity](https://techcommunity.microsoft.com/blog/azure-ai-foundry-blog/grok-4-6-comes-to-microsoft-foundry-models-built-for-long-horizon-reasoning-and-/4547578)

[Microsoft Learn - Déployer et utiliser les modèles Grok](https://learn.microsoft.com/fr-ca/azure/foundry/foundry-models/how-to/use-foundry-models-grok)

[SpaceXAI - Grok 4.6](https://docs.x.ai/developers/models/grok-4.6)

---


Avez-vous apprécié cet article ? Vous avez des questions, commentaires ou suggestions, n'hésitez pas à m'envoyer un message depuis le formulaire de contact.

N'oubliez pas de nous suivre et de partager cet article.