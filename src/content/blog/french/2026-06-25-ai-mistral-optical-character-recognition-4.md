---
title: "Mistral OCR 4, un modèle OCR pour l'analyse documentaire"
meta_title: ""
description: ""
date: 2026-06-25T10:00:00-05:00
image: "/images/blog/ai/ai_mistral_optical_character_recognition_4_thumbnail.png"
categories: ["Mistral AI"]
author: "Maxime Hiez"
tags: ["IA", "OCR", "API"]
draft: false
---
---

##### Introduction
*Mistral AI* a annoncé le 23 Juin 2026 *Mistral OCR 4*, son modèle de reconnaissance optique de caractères de nouvelle génération. Le modèle introduit les boîtes englobantes, la classification de blocs typés et les scores de confiance par mot et par page. Il prend en charge 170 langues et peut être déployé en auto-hébergement pour les environnements à exigences de confidentialité élevées.

Voir l'article sur Mistral OCR 3 [ICI](https://maxime.hiez.ca/blog/2026-01-15-ai-mistral-optical-character-recognition-3).

---

##### Ce qui change avec OCR 4
OCR 4 introduit trois nouvelles fonctionnalités par rapport aux versions précédentes :
- Boîtes englobantes : Localisation précise du texte dans le document pour les flux de traitement personnalisés.
- Classification de blocs : Identification automatique du type de chaque bloc, titres, tableaux, équations et signatures.
- Scores de confiance : Score par page et par mot pour piloter des flux de vérification humaine ciblés.

Les formats pris en charge sont *PDF*, *DOC*, *PPT* et *OpenDocument*. Sur les évaluations de référence, OCR 4 établit de nouveaux records : 85.20 sur *OlmOCRBench* et 93.07 sur *OmniDocBench*. Une évaluation de préférence humaine conduite sur plus de 600 documents issus de 12 langues révèle un taux de victoire moyen de 72% face aux systèmes concurrents.

![image](/images/blog/ai/ai_mistral_optical_character_recognition_4_001.png)

---

##### Modes d'intégration
OCR 4 est accessible selon deux approches :
- Extraction pure : Accès direct aux boîtes englobantes, types de blocs et scores de confiance pour une logique aval personnalisée.
- Document AI : Ajoute la structuration JSON par schéma, l'annotation d'images et les prompts personnalisés, pour les cas d'usage métier sans développement.

Le modèle est également intégré au *Mistral Search Toolkit* pour les pipelines de recherche documentaire structurée et de RAG.

---

##### Tarification et disponibilité
OCR 4 est proposé selon trois modalités :
- API : 4$ / 1 000 pages
- Batch API : –50% soit 2$ / 1 000 pages
- Document AI : 5$ / 1 000 pages

OCR 4 est disponible via :
- <u>API Mistral et Mistral Studio</u> : Accès direct dès le 23 Juin 2026
- <u>Amazon SageMaker</u> : Disponible sur le Marketplace
- <u>Microsoft Foundry</u> : Intégration disponible
- <u>Snowflake</u> : Intégration *Parse Document* en cours de déploiement
- <u>Auto-hébergement</u> : Option disponible pour les environnements à contraintes de confidentialité

---

##### Cas d'usage
- Factures, bons de commande, KYC : Extraction structurée avec validation humaine ciblée grâce aux scores de confiance et au maintien du layout.
- RAG documentaire : Contenu prêt à la citation, structuré par bloc, pour alimenter des bases de connaissances précises.
- Workflows agentiques : Traitement automatisé de formulaires et de factures dans des pipelines IA de bout en bout.
- Recherche d'entreprise : Indexation de documents multilingues complexes à grande échelle.

---

##### Témoignages clients
Plusieurs partenaires ont partagé leurs résultats :
- <u>Anaqua</u> : Ivan Mihailov indique que Mistral OCR 4 est *"environ 4 fois plus rapide par page que leur fournisseur actuel"*.
- <u>Rogo</u> : Aidan Donohue rapporte avoir atteint *"une précision équivalente pour un coût environ 8 fois inférieur"* par rapport aux parseurs concurrents évalués.

![image](/images/blog/ai/ai_mistral_optical_character_recognition_4_002.png)

---

##### Pourquoi maintenant ?
Mistral positionne OCR 4 comme un accélérateur d'adoption de l'IA documentaire en entreprise. Tant que les documents critiques sur papier et PDF restent non structurés, les cas d'usage IA (agents, analytics, automatisation) butent sur l'extraction. Les boîtes englobantes et les scores de confiance permettent de construire des pipelines plus fiables, avec un contrôle humain réservé aux passages à faible confiance.

---

##### Comment démarrer ?
- Tester dans Mistral Studio (PDF/Image -> texte/JSON) pour valider la qualité sur vos documents.
- Prototyper via l'*API* en mode extraction pure ; activer la Batch API pour les volumes (coût ÷2).
- Explorer Document AI pour les cas métier sans développement avec structuration JSON par schéma.
- Contacter Mistral pour l'auto-hébergement si vos contraintes de confidentialité l'exigent.

---

##### Conclusion
Avec OCR 4, Mistral propose une solution OCR multilingue et multi-format adaptée aux exigences documentaires des entreprises. Les boîtes englobantes, la classification de blocs et les scores de confiance ouvrent la voie à des pipelines d'extraction documentaire plus précis, plus contrôlables, et adaptés aux flux de validation humaine.

---

##### Sources
[Mistral AI - OCR 4](https://mistral.ai/news/ocr-4)

[Tester Le Chat de Mistral AI](https://chat.mistral.ai/chat)

---


Avez-vous apprécié cet article ? Vous avez des questions, commentaires ou suggestions, n'hésitez pas à m'envoyer un message depuis le formulaire de contact.

N'oubliez pas de nous suivre et de partager cet article.