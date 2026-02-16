---
title: "Comment activer Claude AI comme modèle dans Copilot"
meta_title: ""
description: ""
date: 2026-02-16T10:00:00-05:00
image: "/images/blog/copilot/tuto/copilot_how_to_add_claude_ai_as_a_subprocessor_thumbnail.png"
categories: ["Copilot", "Tutoriel"]
author: "Maxime Hiez"
tags: ["IA", "Claude", "GPT"]
draft: false
---
---

##### Introduction
Depuis son lancement, *Microsoft 365 Copilot* s’est imposé comme un pilier de la productivité augmentée en entreprise, en s’appuyant sur des modèles d’IA avancés pour raisonner, analyser et automatiser le travail quotidien. Mais une question revenait souvent chez les organisations : et si un seul modèle ne suffisait pas à couvrir tous les scénarios métier ? Microsoft a apporté une réponse claire en annonçant une évolution majeure de Copilot : l’élargissement du choix de modèles d’IA. Désormais, Microsoft 365 Copilot ne repose plus sur une approche monolithique, mais adopte une stratégie multi‑modèle, combinant les derniers modèles d’*OpenAI* et de nouveaux modèles issus d’*Anthropic*, comme *Claude Sonnet* et *Claude Opus*. Cette ouverture permet aux entreprises de sélectionner le moteur d’IA le plus adapté à leurs besoins, qu’il s’agisse de raisonnement complexe, de recherche approfondie ou de création d’agents intelligents.

Avec cette annonce, Microsoft affirme une vision forte : offrir le meilleur de l’innovation IA, sans compromis sur l’intégration, la gouvernance et l’expérience utilisateur. Les modèles sont accessibles directement dans les outils existants, notamment l’agent *Researcher* et *Copilot Studio*, permettant aux équipes de tirer parti de capacités d’IA différenciées, tout en restant dans le flux de travail Microsoft 365.

---

##### Prérequis
**<u>Rôle d’administrateur</u>**
- Un compte avec le rôle *Administrateur Global* pour accéder au Microsoft 365 Admin Center.

---

##### Étape 1 : Se connecter au Microsoft 365 Admin Center
Connectez-vous au Microsoft 365 Admin Center en ouvrant votre navigateur web sur https://admin.cloud.microsoft.

---

##### Étape 2 : Activer Claude AI comme modèle
Dans le menu de gauche, cliquez sur *<u>Copilot</u>*, puis sur *<u>Settings</u>*, et sur *<u>Data access</u>*.

![image](/images/blog/copilot/tuto/copilot_how_to_add_claude_ai_as_a_subprocessor_001.png)

Cliquez sur *<u>AI providers operating as Microsoft subprocessors</u>*, puis choisissez l'option *<u>Enable Anthropic as a Microsoft subprocessor subject to the above terms</u>* pour activer *Claude AI*.

![image](/images/blog/copilot/tuto/copilot_how_to_add_claude_ai_as_a_subprocessor_002.png)

La configuration prend quelques secondes.

![image](/images/blog/copilot/tuto/copilot_how_to_add_claude_ai_as_a_subprocessor_003.png)

---

##### Où Claude est disponible dans M365 Copilot ?
- Agent Researcher : Tâches de recherche approfondie
- Agents Word, Excel et PowerPoint (via Copilot Studio / Frontier)
- Mode Agent dans Excel : Analyse de données complexes
- Copilot Studio : Création d'agents personnalisés

---

##### Où Claude n'est pas disponible ?
Les modèles Claude ne sont actuellement **<u>pas</u>** disponibles dans l'interface générale de M365 Copilot Chat pour les tâches courantes telles que la création de scripts PowerShell, la configuration d'Intune, ...

Claude est limité à certaines fonctionnalités :
- Copilot Chat général dans l'application M365
- Copilot dans Word/Excel/PowerPoint pour les tâches courantes
- Copilot dans Outlook, Teams, ...
- Scripting et tâches d'administration informatique courantes

---

##### Conclusion
Vous savez maintenant comment activer Claude AI dans Copilot.

---

##### Sources
[Microsoft Learn - Anthropic dans Copilot](https://learn.microsoft.com/fr-ca/copilot/microsoft-365/connect-to-ai-subprocessor)

[Microsoft - Support](https://support.microsoft.com/fr-ca/topic/get-started-with-researcher-in-microsoft-365-copilot-e63ab760-f3de-4c47-ae87-dad601b0e9c4)

[Microsoft - Support](https://support.microsoft.com/fr-ca/topic/use-claude-with-researcher-in-microsoft-365-copilot-23e2503b-d73e-4abb-902d-b9814205a38a)

---


Avez-vous apprécié cet article ? Vous avez des questions, commentaires ou suggestions, n’hésitez pas à m'envoyer un message depuis le formulaire de contact.

N'oubliez pas de nous suivre et de partager cet article.