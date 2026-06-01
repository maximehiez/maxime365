---
title: "Anthropic dévoile Claude Opus 4.8"
meta_title: ""
description: ""
date: 2026-05-28T10:00:00-05:00
image: "/images/blog/ai/ai_anthropic_introducing_claude_opus_4_8_thumbnail.png"
categories: ["Anthropic"]
author: "Maxime Hiez"
tags: ["IA", "Claude", "API", "Agentique"]
draft: false
---
---

##### Introduction
*Anthropic* a mis en disponibilité générale le 28 Mai 2026 *Claude Opus 4.8*, successeur direct de *Claude Opus 4.7*. Le tarif reste identique, 5$ / 1M tokens en entrée et 25$ / 1M tokens en sortie, mais la version ajoute plusieurs fonctionnalités agentiques et un mode *Fast* enfin disponible sur la gamme Opus. La principale avancée annoncée concerne l'honnêteté du modèle, qui signale désormais quatre fois plus souvent les erreurs dans le code qu'il génère.

Voir l'article sur Claude Opus 4.7 [ICI](https://maxime.hiez.ca/blog/2026-05-12-ai-anthropic-introducing-claude-opus-4-7).

---

##### Ce qui change par rapport à Opus 4.7 ?
L'amélioration la plus significative d'Opus 4.8 est comportementale. Le modèle est environ quatre fois moins susceptible qu'Opus 4.7 de laisser passer des erreurs dans le code qu'il a lui-même rédigé sans les signaler. Dans les workflows agentiques, où les erreurs silencieuses se propagent à travers plusieurs étapes, ce gain est directement observable.

Sur le plan de l'alignement, Opus 4.8 atteint de nouveaux records sur les mesures de traits prosociaux, avec un taux de comportements non alignés nettement inférieur à celui d'Opus 4.7, selon la fiche système publiée par Anthropic.

![image](/images/blog/ai/ai_anthropic_introducing_claude_opus_4_8_001.png)

---

##### Nouvelles fonctionnalités agentiques
Trois nouvelles capacités accompagnent le modèle :
- <u>Dynamic Workflows</u> : Disponible en research preview dans *Claude Code*, ce mode orchestre des centaines de sous-agents en parallèle pour des tâches à grande échelle, comme la migration de bases de code entières.
- <u>Effort control</u> : Sur *claude.ai* et *Cowork*, l'utilisateur sélectionne la profondeur de raisonnement appliquée à chaque réponse, de légère à intensive.
- <u>Messages système en cours de tâche</u> : Via l'*API*, il est désormais possible d'injecter des entrées système en milieu de conversation sans interrompre le prompt caching.

---

##### Benchmarks
Un seul chiffre figure dans l'annonce officielle pour la comparaison directe avec Opus 4.7.

|                  | Opus 4.8 | Opus 4.7 | Écart    |
|------------------|---------:|---------:|---------:|
| OSWorld-Verified | 82.3%    | 78.0%    | +4.3 pts |

La fiche système contient un éventail d'évaluations plus large sur les tâches de codage, de raisonnement et de connaissances pratiques, sans tableau agrégé dans l'annonce de lancement.

---

##### Tarification
Le tarif de base reste identique à Opus 4.7 ; 5$ / 1M tokens en entrée et 25$ / 1M tokens en sortie. Le changement notable est l'arrivée du mode Fast, absent d'Opus 4.7. Il est disponible à 10$ / 1M tokens en entrée et 50$ / 1M tokens en sortie, soit trois fois moins cher que l'ancien mode Fast réservé à Opus 4.6 (30$ / 150$ par 1M tokens). Le modèle est accessible via l'identifiant *claude-opus-4-8* dans l'*API* Anthropic.

---

##### Conclusion
Claude Opus 4.8 consolide les acquis d'Opus 4.7 en ajoutant une couche d'honnêteté mesurable, des fonctionnalités agentiques expérimentales et un mode rapide enfin compétitif. La migration depuis Opus 4.7 est moins risquée que le passage 4.6 vers 4.7, car il n'y a pas de changement de tokenizer ni de rupture comportementale documentée. Pour les équipes qui opèrent des workflows agentiques sur l'API Anthropic, l'arrivée du mode Fast à 10$ / 1M tokens est le changement le plus concret à évaluer.

---

##### Sources
[Anthropic - Claude Opus 4.8](https://www.anthropic.com/news/claude-opus-4-8)

[Parler avec Claude Opus 4.8](https://claude.ai)

---


Avez-vous apprécié cet article ? Vous avez des questions, commentaires ou suggestions, n'hésitez pas à m'envoyer un message depuis le formulaire de contact.

N'oubliez pas de nous suivre et de partager cet article.