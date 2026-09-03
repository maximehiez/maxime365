---
title: "Claude Fable 5.1 disponible dans Microsoft Foundry"
meta_title: ""
description: ""
date: 2026-09-03T10:00:00-05:00
image: "/images/blog/foundry/foundry_claude_fable_5_1_available_thumbnail.png"
categories: ["Foundry"]
author: "Maxime Hiez"
tags: ["IA", "Claude", "Agentique"]
draft: false
---
---

##### Introduction
*Microsoft* étend son catalogue *Anthropic* dans *Microsoft Foundry* avec *Claude Fable 5.1* et *Claude Mythos 5.1*, le jour même de leur lancement par Anthropic. Comme pour *Claude Opus* 5 en Juillet, la mise à disposition est simultanée, ce qui confirme le rythme d'alignement entre les deux catalogues.

Voir l'article sur Claude Fable 5.1 [ICI](https://maxime.hiez.ca/blog/2026-09-02-ai-anthropic-introducing-claude-fable-5-1).

---

##### Déploiement et régions
Le modèle est accessible depuis le catalogue du portail Foundry ([ai.azure.com](https://ai.azure.com)) : section *Discover* > *Models* > recherche *claude-fable-5-1*. La fenêtre de contexte est d'1 million de tokens, avec une sortie maximale de 128 000 tokens. L'acceptation des conditions de l'*Azure Marketplace* est requise lors du premier déploiement.

Deux modèles sont ajoutés au catalogue :
- <u>claude-fable-5-1</u> : Disponible en preview, hébergé sur l'infrastructure Anthropic (Version 1), en déploiement *Global Standard*.
- <u>claude-mythos-5-1</u> : Disponible en gated research preview, hébergé sur l'infrastructure Anthropic, avec authentification *Entra ID* obligatoire. L'accès est accordé à la seule discrétion d'Anthropic et priorisé pour les usages de cybersécurité défensive.

<Notice type="info">Contrairement à Claude Opus 5, Claude Fable 5.1 n'est pas proposé en Version 2 hébergée sur Azure. L'inférence s'exécute donc sur l'infrastructure Anthropic, même si la facturation transite par Azure. Les organisations soumises à une exigence stricte de résidence des données doivent rester sur Opus 5 ou Sonnet 5, qui offrent les deux versions.</Notice>

---

##### Facturation et quotas
Claude dans Foundry est facturé via des *Claude Consumption Units* (*CCU*), un CCU équivalant à 0.01$. Le tarif de Fable 5.1 est identique à celui de l'API directe Anthropic, soit 10$ / 1M tokens en entrée et 50$ / 1M tokens en sortie, ce qui représente 1 000 CCU par 1M tokens en entrée et 5 000 CCU par 1M tokens en sortie. Les dépenses comptent vers l'engagement *Microsoft Azure Consumption Commitment* (*MACC*) et sont visibles dans *Azure Cost Management*.

Les quotas par défaut diffèrent sensiblement des autres modèles Claude :
- <u>Entreprise et MCA-E</u> : 2 000 requêtes par minute, 2 000 000 de tokens d'entrée par minute et 400 000 tokens de sortie par minute
- <u>Paiement à l'utilisation</u> : Aucun quota alloué par défaut
- <u>Essai gratuit</u> : Aucun quota alloué

Les types d'abonnement non supportés restent les mêmes que pour les autres modèles Anthropic : comptes Entreprise situés en Corée du Sud, abonnements *CSP*, abonnements sans méthode de paiement à l'utilisation active et abonnements sponsorisés fonctionnant uniquement sur crédits Azure.

---

##### Ce que le modèle apporte
Fable 5.1 est positionné sur le travail qui ne tient pas dans une seule interaction. Une tâche de développement peut s'étendre sur des dizaines d'applications, une investigation de performance sur plusieurs cycles d'analyse et de test, un agent sur un backlog entier. Ces scénarios demandent moins un raisonnement ponctuel excellent qu'une capacité à conserver le contexte, décider sur plusieurs étapes, se rattraper quand une approche échoue et continuer à progresser vers l'objectif.

Les capacités mises en avant dans Foundry sont les suivantes :
- <u>Adaptive thinking</u> : Le modèle ajuste lui-même la profondeur de réflexion selon la complexité de la requête.
- <u>Travail de longue durée</u> : Tenue du contexte et de l'objectif sur des workflows étendus, avec appels d'outils successifs.
- <u>Recherche scientifique avec auto-vérification</u> : Le modèle contrôle ses propres résultats au fil du travail.
- <u>Refus explicite</u> : Un *stop_reason* de refus est renvoyé lorsque les garde-fous à double usage s'appliquent.

Pour les équipes, l'apport concret est un meilleur discernement sur les tâches ambiguës et moins de réponses fausses assénées avec assurance. Le modèle signale qu'il est bloqué plutôt que d'annoncer une réussite, et il est moins enclin aux raccourcis comme désactiver un test qui échoue.

---

##### Migrer depuis Claude Fable 5
Les prompts existants sont censés fonctionner tels quels sur Fable 5.1. Microsoft recommande toutefois de profiter de la migration pour revoir les instructions écrites spécifiquement pour compenser le comportement du modèle précédent : les avertissements répétés de ne pas deviner, les couches successives d'auto-vérification et les critères de complétion très prescriptifs ne sont plus toujours nécessaires. Un échafaudage excessif peut même limiter l'efficacité d'un modèle plus capable.

La bonne approche reste l'évaluation sur des charges de production représentatives, en comparant la qualité, la fiabilité, la latence et l'efficacité des mécanismes de vérification déjà en place, avant de simplifier là où les mesures le justifient.

---

##### Enterprise Frontier Safeguards
Anthropic a annoncé en parallèle les *Enterprise Frontier Safeguards*, qui permettent de déployer ses modèles les plus capables tout en stockant les données dans une infrastructure cloud contrôlée par le client. Microsoft Foundry fait partie des plateformes supportées, avec un déploiement progressif à partir de cet automne. C'est la réponse la plus directe apportée à l'absence de Version 2 hébergée sur Azure pour ce modèle.

---

##### Conclusion
L'arrivée de Claude Fable 5.1 dans Foundry au jour du lancement donne accès au modèle le plus capable d'Anthropic sans quitter la gouvernance Azure. Le point de vigilance est le mode d'hébergement : sans Version 2 sur Azure, ce modèle ne convient pas aux exigences de résidence des données les plus strictes, et les quotas nuls en paiement à l'utilisation le réservent de fait aux contrats Entreprise et MCA-E.

---

##### Sources
[Microsoft - Techcommunity](https://techcommunity.microsoft.com/blog/azure-ai-foundry-blog/claude-fable-5-1-is-now-available-in-microsoft-foundry/4550175)

[Microsoft Learn - Modèles Claude dans Foundry](https://learn.microsoft.com/fr-ca/azure/foundry/foundry-models/concepts/claude-models)

[Microsoft Learn - Déployer et utiliser les modèles Claude](https://learn.microsoft.com/fr-ca/azure/foundry/foundry-models/how-to/use-foundry-models-claude)

---


Avez-vous apprécié cet article ? Vous avez des questions, commentaires ou suggestions, n'hésitez pas à m'envoyer un message depuis le formulaire de contact.

N'oubliez pas de nous suivre et de partager cet article.