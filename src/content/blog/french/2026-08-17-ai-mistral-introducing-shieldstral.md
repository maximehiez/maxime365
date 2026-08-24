---
title: "Shieldstral, le classificateur de sécurité multimodal de Mistral AI"
meta_title: ""
description: ""
date: 2026-08-17T10:00:00-05:00
image: "/images/blog/ai/ai_mistral_introducing_shieldstral_thumbnail.png"
categories: ["Mistral AI"]
author: "Maxime Hiez"
tags: ["IA", "Sécurité"]
draft: false
---
---

##### Introduction
*Mistral AI* a annoncé le 4 Août 2026 *Shieldstral*, un classificateur de sécurité multimodal destiné à la modération des entrées et des sorties d'un modèle de langage. Le modèle se place en amont et en aval de l'application, il analyse ce que l'utilisateur envoie et ce que le modèle répond, puis retourne un score de sécurité calibré.

La particularité tient à sa taille ; 3 milliards de paramètres pour un niveau de performance que Mistral compare à des garde-fous ouverts jusqu'à 7 fois plus gros sur la sécurité du texte.

---

##### Un garde-fou qui tient sur un seul GPU
Shieldstral tourne sur un seul GPU *NVIDIA* de 16Go, ce qui le rend déployable à côté de l'application plutôt que derrière un service distant. Pour une organisation soumise à des contraintes de résidence des données, c'est la différence entre envoyer chaque prompt à un tiers et traiter la modération dans son propre périmètre.

Le modèle est *policy-adaptive* ; la politique de modération est fournie au moment de l'appel plutôt que figée à l'entraînement. Il n'y a donc pas de réentraînement à prévoir quand les règles internes évoluent ou quand un nouveau cas d'usage arrive.

---

##### Ce que le modèle sait faire
Shieldstral couvre quatre usages :
- <u>Classification des prompts</u> : Analyse de la demande utilisateur avant qu'elle n'atteigne le modèle
- <u>Modération des réponses</u> : Analyse de la sortie du modèle avant affichage
- <u>Détection de refus</u> : Identification des réponses où le modèle a refusé de répondre
- <u>Évaluation de toxicité</u> : Notation du contenu problématique

Le modèle est multimodal, il traite le texte, les images et les combinaisons texte + image. Les scores retournés sont calibrés à partir des logits binaires, ce qui permet de fixer un seuil de blocage propre à chaque application plutôt que de s'en remettre à une décision binaire imposée.

---

##### Disponibilité et licence
Les poids sont publiés sur *Hugging Face* sous licence *Apache 2.0*, sans restriction d'usage commercial. C'est un point à noter pour les organisations qui construisent leurs propres garde-fous : la modération est souvent le maillon qu'on ne peut pas externaliser, et disposer d'un modèle ouvert évite d'ajouter une dépendance de plus dans la chaîne.

---

##### Une semaine plus tard, l'infrastructure
Le 11 Août 2026, Mistral a complété l'annonce par un volet infrastructure. Les *Mistral Regional Endpoints* passent en disponibilité générale et permettent de choisir la région d'inférence, Europe ou États-Unis. Un *Mistral Priority Tier* arrive en préversion publique avec des limites de débit personnalisées et un SLA de disponibilité.

La plateforme s'ouvre également aux modèles ouverts tiers, à commencer par *GLM-5.2* de *Z.ai*, exécutés sur la même infrastructure et avec les mêmes contrôles régionaux. Mistral annonce enfin la constitution d'une coalition européenne de calcul, avec des engagements pluriannuels convertis en *European Compute Units* et un objectif de 1GW de capacité d'ici 2030. *Amadeus*, *ASML*, *Capgemini*, *la Caisse des Dépôts* et *CMA CGM* figurent parmi les premiers engagés.

---

##### Conclusion
Shieldstral répond à un besoin concret, filtrer les entrées et les sorties d'une application IA sans dépendre d'un service externe et sans mobiliser une carte graphique de centre de données. La licence Apache 2.0 et la taille du modèle en font un candidat sérieux pour les déploiements où la modération doit rester dans le périmètre de l'organisation. Les annonces d'infrastructure de la semaine suivante vont dans le même sens, avec le choix de la région d'inférence et un niveau de service contractualisé.

---

##### Sources
[Mistral AI - Shieldstral](https://mistral.ai/news/shieldstral)

[Mistral AI - Inférence régionale, modèles ouverts et nouvelle infrastructure](https://mistral.ai/news/regional-inference-open-models-new-compute)

[Tester Le Chat de Mistral AI](https://chat.mistral.ai/chat)

---


Avez-vous apprécié cet article ? Vous avez des questions, commentaires ou suggestions, n'hésitez pas à m'envoyer un message depuis le formulaire de contact.

N'oubliez pas de nous suivre et de partager cet article.