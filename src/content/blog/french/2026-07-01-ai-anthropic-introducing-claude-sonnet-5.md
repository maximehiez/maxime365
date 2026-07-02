---
title: "Anthropic dévoile Claude Sonnet 5, meilleur qu'Opus 4.8"
meta_title: ""
description: ""
date: 2026-07-01T10:00:00-05:00
image: "/images/blog/ai/ai_anthropic_introducing_claude_sonnet_5_thumbnail.png"
categories: ["Anthropic"]
author: "Maxime Hiez"
tags: ["IA", "Claude", "API", "Agentique"]
draft: false
---
---

##### Introduction
*Anthropic* a annoncé le 30 Juin 2026, la disponibilité de *Claude Sonnet 5*, désormais modèle par défaut sur les offres *Free* et *Pro* de *Claude.ai*. Le modèle est conçu pour les workflows agentiques complexes et atteint des performances qui dépassent *Claude Opus 4.8* sur plusieurs benchmarks clés, à un coût inférieur.

---

##### Ce qui change par rapport à Sonnet 4.6
Claude Sonnet 5 introduit des capacités agentiques qui étaient auparavant réservées aux modèles plus coûteux :
- <u>Planification autonome</u> : Le modèle établit un plan d'action et exécute des tâches longues sans supervision continue.
- <u>Utilisation d'outils</u> : Navigation web, exécution de commandes en terminal et interactions avec des *API* externes sur plusieurs étapes.
- <u>Vérification automatique</u> : Le modèle vérifie ses résultats intermédiaires sans qu'un prompt explicite le demande.
- <u>Réduction des erreurs</u> : Moins d'hallucinations et moins de comportements sycophantes que *Sonnet 4.6*, selon les évaluations de pré-déploiement d'Anthropic.

---

##### Benchmarks
La progression de Sonnet 5 par rapport à Sonnet 4.6 est significative sur tous les axes évalués, et le modèle devance Opus 4.8 sur plusieurs benchmarks d'ingénierie logicielle et de travail CLI.

|                          | Sonnet 5 | Sonnet 4.6 | Opus 4.8 |
|--------------------------|---------:|-----------:|---------:|
| SWE-bench Verified       | 85.2%    | 62.3%      | 79.4%    |
| SWE-bench Pro            | 63.2%    | 58.1%      | 69.2%    |
| Terminal-Bench 2.1       | 80.4%    | 55.4%      | 74.6%    |
| OSWorld-Verified         | 81.2%    | -          | 83.4%    |
| HealthBench Professional | 57.8%    | -          | -        |

Sonnet 5 devance Opus 4.8 sur *SWE-bench Verified* (+5.8 pts) et *Terminal-Bench 2.1* (+5.8 pts). C'est la première fois qu'un modèle de la gamme Sonnet surpasse Opus sur des benchmarks d'ingénierie logicielle et d'environnement de travail en ligne de commande.

![image](/images/blog/ai/ai_anthropic_introducing_claude_sonnet_5_001.png)

---

##### Sécurité
Le déploiement de Claude Sonnet 5 est accompagné d'une fiche système de 145 pages publiée par Anthropic. Les points principaux :
- Résistance aux injections de prompt : Amélioration mesurée par rapport à Sonnet 4.6 dans les contextes agentiques.
- Génération d'exploits : 0% de succès sur les tests de génération de vulnérabilités *Firefox*. Le modèle n'a pas été entraîné sur des tâches de cybersécurité offensives.
- Refus des requêtes malveillantes : Taux de refus plus élevé et réduction des hallucinations par rapport à Sonnet 4.6.

---

##### Tarification et disponibilité
Claude Sonnet 5 adopte le même tokenizer introduit avec *Claude Opus 4.7*, qui génère 1.0 à 1.35 fois plus de tokens pour un même texte. Les équipes migrant depuis Sonnet 4.6 doivent mesurer cet écart avant de basculer en production.

|                                                 | Entrée         | Sortie          |
|-------------------------------------------------|---------------:|----------------:|
| Tarif introductif (jusqu'au 31 Août 2026)       | 2$ / 1M tokens | 10$ / 1M tokens |
| Tarif standard (à partir du 1er Septembre 2026) | 3$ / 1M tokens | 15$ / 1M tokens |

Claude Sonnet 5 est disponible sur :
- <u>Claude.ai</u> : Modèle par défaut sur les offres Free, Pro, Max, Team et Enterprise
- <u>API Anthropic</u> : Identifiant *claude-sonnet-5*
- <u>Plateformes cloud</u> : *Amazon Bedrock* et *Google Cloud Vertex AI*
- <u>Outils de développement</u> : *Claude Code*, *Cursor*, *VS Code* et *GitHub Copilot*

<Notice type="info">Avant de migrer un workflow Sonnet 4.6 en production, il est conseillé de mesurer le volume de tokens réel avec Sonnet 5 sur un échantillon représentatif de requêtes. La facturation peut augmenter sensiblement même à tarif réduit.</Notice>

---

##### Conclusion
Claude Sonnet 5 repositionne la gamme Sonnet comme alternative crédible à Opus 4.8 pour la majorité des workloads agentiques, en particulier en ingénierie logicielle et en travail CLI. Le premier paramètre à surveiller avant toute migration reste le surcoût lié au nouveau tokenizer, particulièrement pour les pipelines qui traitent du code ou du texte non-anglais.

---

##### Sources
[Anthropic - Claude Sonnet 5](https://www.anthropic.com/news/claude-sonnet-5)

[Parler avec Claude Sonnet 5](https://claude.ai)

[Anthropic - System Card Claude Sonnet 5](https://www.anthropic.com/claude-sonnet-5-system-card)

[Anthropic - Pricing](https://platform.claude.com/docs/en/about-claude/pricing)

---


Avez-vous apprécié cet article ? Vous avez des questions, commentaires ou suggestions, n'hésitez pas à m'envoyer un message depuis le formulaire de contact.

N'oubliez pas de nous suivre et de partager cet article.