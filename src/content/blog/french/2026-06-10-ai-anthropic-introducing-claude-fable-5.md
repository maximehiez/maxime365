---
title: "Anthropic lance Claude Fable 5 et Claude Mythos 5"
meta_title: ""
description: ""
date: 2026-06-10T10:00:00-05:00
image: "/images/blog/ai/ai_anthropic_introducing_claude_fable_5_thumbnail.png"
categories: ["Anthropic"]
author: "Maxime Hiez"
tags: ["IA", "Claude", "API"]
draft: false
---
---

##### Introduction
*Anthropic* annonce le lancement de *Claude Fable 5* et *Claude Mythos 5*, deux modèles construits sur le même socle, dont les capacités dépassent celles de tout modèle précédemment rendu disponible jusqu'à présent. Fable 5 est disponible en accès général, tandis que Mythos 5 reste réservé à un cercle restreint de partenaires autorisés.

---

##### Deux modèles, un socle commun
Claude Fable 5 et Claude Mythos 5 partagent le même modèle de base, qualifié de *Mythos-class* par Anthropic.

- <u>Claude Fable 5</u> : Variante grand public, avec des mécanismes de sécurité actifs. Disponible via l'*API* et les abonnements Claude.
- <u>Claude Mythos 5</u> : Même modèle sous-jacent, avec certaines restrictions levées dans des domaines spécifiques. Déployé initialement via le *Project Glasswing* pour les professionnels en cybersécurité et les fournisseurs d'infrastructure. Son accès reste limité aux partenaires de confiance autorisés par Anthropic.

Cette distinction marque une évolution dans l'approche d'Anthropic : proposer un modèle de pointe au grand public tout en offrant une version aux garde-fous partiellement désactivés à un public professionnel qualifié.

---

##### Capacités
Fable 5 atteint des performances de pointe sur la quasi-totalité des benchmarks testés. Les domaines d'excellence mis en avant par Anthropic sont :
- Génie logiciel : Réduction de plusieurs mois de travail à quelques jours selon les retours partenaires.
- Travail de connaissance : Analyse financière, raisonnement complexe sur de longs contextes couvrant plusieurs millions de tokens avec mémoire persistante.
- Vision : Extraction de données depuis des figures scientifiques, reconstruction de code à partir de captures d'écran ; complétion du jeu *Pokémon FireRed* en mode vision seule, là où les modèles précédents nécessitaient des outils auxiliaires complexes.
- Recherche scientifique : Accélération de la conception de médicaments et de la recherche sur les protéines d'un facteur dix ; 9 cibles sur 14 ayant produit de bons candidats médicamenteux ; premier modèle Claude préféré dans 80% des cas lors de comparaisons en aveugle face aux modèles Opus-class pour la génération d'hypothèses en biologie moléculaire.

---

##### Benchmarks
Fable 5 établit de nouveaux records sur plusieurs évaluations de référence :
- <u>FrontierCode (Cognition)</u> : Meilleur score parmi les modèles de pointe, y compris à niveau d'effort moyen.
- <u>FrontierBench</u> : Meilleur score pour l'évaluation de programmation de pointe.
- <u>Hebbia Finance Benchmark</u> : Meilleur score pour le raisonnement analytique de niveau senior.
- <u>Analytics (Bloomberg)</u> : Premier modèle à dépasser 90% sur leur benchmark analytique principal, soit +10 points par rapport à *Opus*.
- <u>Physique de pointe</u> : Résultats comparables à *GPT-5.5* en utilisant un tiers des tokens de raisonnement.

![image](/images/blog/ai/ai_anthropic_introducing_claude_fable_5_001.png)

---

##### Témoignages clients
Plusieurs partenaires ont communiqué sur leur expérience avec Fable 5 :
- <u>Cursor</u> : Qualifie Fable 5 *"d'état de l'art"* et rapporte un accès à des catégories de problèmes jusqu'alors hors de portée.
- <u>GitHub</u> : Indique que Fable 5 *"dépasse les benchmarks précédents"* sur les tâches de programmation autonome.
- <u>Stripe</u> : Souligne la capacité à réaliser des migrations de bases de code complètes en une journée plutôt qu'en plusieurs mois.
- <u>Bloomberg</u> : Met en avant des performances en recherche physique de pointe avec une consommation de tokens réduite.

---

##### Mécanismes de sécurité
Fable 5 intègre des classificateurs qui redirigent automatiquement les requêtes vers *Claude Opus 4.8* lorsqu'elles concernent :
- Cybersécurité offensive : Requêtes liées au piratage ou à l'exploitation de systèmes.
- Biologie et chimie à double usage : Demandes présentant des risques dans le domaine de la recherche biologique sensible, notamment la conception virale, l'ingénierie AAV ou la création de pathogènes dangereux.
- Distillation : Tentatives d'extraire les capacités du modèle pour alimenter des modèles concurrents.

Ces garde-fous s'activent dans moins de 5% des sessions en moyenne. Des tests adversariaux utilisant 30 techniques de contournement différentes conduits par des équipes externes n'ont révélé aucune attaque réussie.

Anthropic applique également une politique de rétention des données encadrée pour les clients business : conservation obligatoire de 30 jours, aucune utilisation pour l'entraînement du modèle au-delà des finalités de sécurité, accès humain aux données consigné avec protocoles de suppression stricts.

Concernant Mythos 5, les tests automatisés d'alignement révèlent un niveau de comportements non alignés comparable à celui de *Claude Opus 4.8*.

---

##### Tarification
*Claude Fable 5* est proposé à :
- <u>Entrée</u> : 10$ / 1M tokens
- <u>Sortie</u> : 50$ / 1M tokens

Ce prix représente moins de la moitié du tarif de *Claude Mythos Preview*, la version antérieure accessible aux partenaires.

---

##### Disponibilité
- <u>Claude Fable 5</u> : Disponible mondialement depuis le 9 Juin 2026 via l'API Anthropic et les plans à la consommation. Le déploiement dans les abonnements Claude s'effectue en plusieurs phases jusqu'au 22 Juin, après quoi un modèle de crédits d'utilisation s'applique.
- <u>Claude Mythos 5</u> : Accès restreint aux partenaires autorisés dans le cadre du *Project Glasswing*. Un programme d'accès de confiance dédié à la recherche en biologie est également en cours de lancement pour des chercheurs sélectionnés.

---

##### Conclusion
Avec Fable 5, Anthropic propose pour la première fois au grand public un modèle de sa gamme Mythos-class, jusqu'alors réservée à des cercles restreints. La distinction entre les deux variantes illustre une stratégie de déploiement progressif qui permet d'exposer les capacités maximales du modèle tout en maintenant des garde-fous robustes pour l'usage général.

---

##### Sources
[Anthropic - Claude Fable 5](https://www.anthropic.com/news/claude-fable-5-mythos-5)

[Parler avec Claude Fable 5](https://claude.ai)

[Anthropic - Project Glasswing](https://www.anthropic.com/glasswing)

---


Avez-vous apprécié cet article ? Vous avez des questions, commentaires ou suggestions, n'hésitez pas à m'envoyer un message depuis le formulaire de contact.

N'oubliez pas de nous suivre et de partager cet article.