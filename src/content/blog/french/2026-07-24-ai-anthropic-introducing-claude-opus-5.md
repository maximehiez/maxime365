---
title: "Anthropic dévoile Claude Opus 5"
meta_title: ""
description: ""
date: 2026-07-24T10:00:00-05:00
image: "/images/blog/ai/ai_anthropic_introducing_claude_opus_5_thumbnail.png"
categories: ["Anthropic"]
author: "Maxime Hiez"
tags: ["IA", "Claude", "API", "Agentique"]
draft: false
---
---

##### Introduction
*Anthropic* a mis en disponibilité générale le 24 Juillet 2026 *Claude Opus 5*, successeur de *Claude Opus 4.8*. Le tarif reste identique, 5$ / 1M tokens en entrée et 25$ / 1M tokens en sortie, mais le modèle ambitionne de rivaliser avec *Claude Fable 5*, le modèle de pointe d'Anthropic, à la moitié du prix. C'est la première fois qu'une mise à niveau majeure de la gamme Opus ne s'accompagne d'aucune hausse tarifaire.

Voir l'article sur Claude Opus 4.8 [ICI](https://maxime.hiez.ca/blog/2026-05-28-ai-anthropic-introducing-claude-opus-4-8).

---

##### La famille Claude en 2026
L'annonce d'Opus 5 s'inscrit dans un renouvellement complet de la gamme, avec l'abandon de la numérotation en sous-versions au profit de noms propres pour les modèles de pointe. La hiérarchie actuelle compte cinq niveaux :
- <u>Claude Mythos 5</u> : Modèle sur invitation uniquement, dédié à la cybersécurité défensive dans le cadre du projet *Glasswing*. Tarifié à 10$ / 50$ par 1M tokens.
- <u>Claude Fable 5</u> : Modèle le plus puissant en accès général, identifiant *claude-fable-5*. Tarifié à 10$ / 50$ par 1M tokens.
- <u>Claude Opus 5</u> : Conçu pour les tâches agentiques complexes et le travail d'entreprise, identifiant *claude-opus-5*. Tarifié à 5$ / 25$ par 1M tokens.
- <u>Claude Sonnet 5</u> : Meilleur compromis vitesse et intelligence, identifiant *claude-sonnet-5*. Tarifié à 3$ / 15$ par 1M tokens (promotion à 2$ / 10$ jusqu'au 31 Août 2026).
- <u>Claude Haiku 4.5</u> : Le plus rapide de la gamme, identifiant *claude-haiku-4-5-20251001*. Tarifié à 1$ / 5$ par 1M tokens.

---

##### Ce qui change avec Claude Opus 5
Le changement le plus structurant est l'introduction de l'*Adaptive thinking* natif. Contrairement à Claude Fable 5 qui raisonne de façon intensive en permanence, Opus 5 dose son effort de raisonnement selon la complexité de la tâche. Le paramètre *effort* est configuré à *high* par défaut dans l'*API* et dans *Claude Code* ; les équipes peuvent l'ajuster explicitement pour contrôler le compromis vitesse et profondeur.

Deux autres améliorations sont mises en avant par Anthropic :
- Auto-vérification renforcée : Le modèle itère sur ses propres sorties de façon plus systématique, ce qui réduit les erreurs silencieuses dans les workflows agentiques à plusieurs étapes.
- Sorties visuelles : Opus 5 peut générer du contenu visuel dans le cadre de ses réponses, une capacité absente d'Opus 4.8.

La date de coupure des données d'entraînement est fixée à Mai 2026, ce qui est plus récent que Claude Fable 5 et *Claude Sonnet 5* (Janvier 2026 tous les deux).

![image](/images/blog/ai/ai_anthropic_introducing_claude_opus_5_001.png)

---

##### Performances
Anthropic cite plusieurs benchmarks propriétaires ou de partenaires pour positionner Opus 5. Aucun résultat sur les évaluations académiques classiques (*MMLU*, *GPQA*, *SWE-bench*, *HumanEval*) n'est publié dans l'annonce de lancement :
- <u>CursorBench 3.2</u> : Résultats à moins de 0.5% de Fable 5 à la moitié du coût.
- <u>ARC-AGI 3</u> : Score trois fois supérieur au modèle concurrent le mieux classé.
- <u>Zapier AutomationBench</u> : Taux de réussite environ 1.5 fois supérieur au modèle suivant.
- <u>OSWorld 2.0</u> : Dépasse Fable 5 en tâches de computer use, à environ un tiers du coût.
<br/><br/>

Sur les domaines scientifiques, deux gains spécifiques sont indiqués par rapport à Opus 4.8 :

|                         | Écart vs Opus 4.8 |
|-------------------------|------------------:|
| Chimie organique        | +10.2 pts         |
| Prédiction de protéines | +7.7 pts          |
<br/><br/>

Trois partenaires de lancement ont communiqué leur expérience :
- <u>Devin</u> : Qualifie Claude Opus 5 *"proche des performances de Fable 5 à la moitié du coût"*.
- <u>Cursor</u> : Décrit Claude Opus 5 comme offrant *"une intelligence proche de Fable 5 à la vitesse et au coût d'Opus"*.
- <u>Zapier</u> : Rapporte qu'Opus 5 *"atteint 100 % sur les workflows d'automatisation complète"*, là où les modèles précédents échouaient.

---

##### Tarification et disponibilité
Le tarif de base d'Opus 5 est identique à celui d'Opus 4.8 : 5$ / 1M tokens en entrée et 25$ / 1M tokens en sortie. Un mode *Fast* est disponible en research preview à 10$ / 50$ par 1M tokens, pour un gain de vitesse d'environ 2.5 fois. Ce mode n'est accessible que via l'*API* Anthropic directe et n'est pas encore proposé sur les plateformes tierces. La *Batch API* offre une réduction de 50%, soit 2.50$ / 12.50$ par 1M tokens. Le prompt caching est disponible à 0.50$ / 1M tokens par cache hit.

Le modèle est accessible sous l'identifiant *claude-opus-5* sur l'API Anthropic directe, *Google Cloud Vertex AI*, *Claude.ai*, *Claude Code* et *Claude Cowork*. Il est également disponible sur *AWS Bedrock* et *Microsoft Foundry*.

---

##### Conclusion
Claude Opus 5 est la mise à niveau la plus directe que puissent effectuer les équipes utilisant Opus 4.8 sur l'API Anthropic : tarif identique, amélioration mesurable sur les tâches agentiques et scientifiques, et raisonnement adaptatif sans surcoût permanent. Les équipes dont les workflows ne nécessitent pas la puissance maximale de Fable 5 ont désormais un point d'entrée rationnel dans la gamme haut de gamme. Pour les cas d'usage exigeant la meilleure performance absolue, Fable 5 reste le choix, à condition d'accepter un tarif double.

---

##### Sources
[Anthropic - Claude Opus 5](https://www.anthropic.com/news/claude-opus-5)

[Parler avec Claude Opus 5](https://claude.ai)

[Anthropic - Modèles disponibles](https://platform.claude.com/docs/en/docs/about-claude/models/overview)

---


Avez-vous apprécié cet article ? Vous avez des questions, commentaires ou suggestions, n'hésitez pas à m'envoyer un message depuis le formulaire de contact.

N'oubliez pas de nous suivre et de partager cet article.