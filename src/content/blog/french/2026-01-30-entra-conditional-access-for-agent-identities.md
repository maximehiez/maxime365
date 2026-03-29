---
title: "Étendre Zero Trust aux identités d'agents IA dans Entra ID"
meta_title: ""
description: ""
date: 2026-01-30T10:00:00-05:00
image: "/images/blog/entra/entra_conditional_access_for_agent_identities_thumbnail.png"
categories: ["Entra ID"]
author: "Maxime Hiez"
tags: ["Accès conditionnels", "Sécurité", "Zero Trust", "MFA", "Agent", "IA"]
draft: false
---
---

##### Introduction
Les agents IA se généralisent (résumés d’incidents, analyse de journaux, exécution de flux, ...) de plus en plus au sein des entreprises, et il est important que leurs accès soient évalués en continue et limités au strict nécessaire. Microsoft introduit *les règles d’accès conditionnels*, afin d’appliquer des contrôles *Zero Trust*, aux agents IA et autres identités non humaines, avec pour objectif de décider à chaque demande de jeton si un agent peut accéder à une ressource, selon l’identité, le risque et le contexte.

Microsoft Entra traite désormais les agents comme des identités de première classe et étend les accès conditionnels à leurs flux d’authentification pour limiter les abus et dérives.

---

##### Qu’est-ce qu’une identité d’agent ?
Microsoft Entra formalise trois concepts :
1. *<u>Agent Blueprint</u>* : Gabarit pour créer des identités d’agent
2. *<u>Agent Identity</u>* : Identité machine spécialisée pour des systèmes IA
3. *<u>Agent User</u>* : Identité dont le comportement est le même qu'un humain

---

##### Ce qui est possible aujourd’hui
L’accès conditionnel permet d’appliquer des contrôles basés sur l’identité, le risque et le contexte avant d’accorder des accès, mais pour les agents IA, les capacités sont intentionnellement limitées pour le moment.

![image](/images/blog/entra/entra_conditional_access_for_agent_identities_001.png)

**<u>Fonctionnalités supportées</u>**
- Ciblage d’identité : On peut inclure/exclure des agents dans les règles
- Blocage d’accès : Le seul contrôle disponible à ce jour
- Risque d’agent : Évaluation simple du niveau de risque
- Évaluation de la demande : La demande de jeton est contrôlée
<br/>

**<u>Fonctionnalités non applicables actuellement</u>**
- MFA et force d’authentification
- Conformité des appareils
- Applications clientes approuvées
- Règles de protection d’application
- Conditions de session ou de localisation
- Fréquence de connexion et termes d’usage

---

##### Comment fonctionne l’accès conditionnel pour les agents ?
Lorsque une identité d’agent ou un agent user demande un jeton, Microsoft Entra suit ce processus :
1. Identifier l’agent demandeur
2. Vérifier les affectations de règles d'accès conditionnel
3. Évaluer tout critère de risque d’agent
4. Autoriser ou bloquer l’émission du jeton

Pas de prompt MFA, pas de vérification d'appareil, pas d’évaluation de l’authentification forte — juste une décision de blocage ou d’autorisation basée sur l’identité et le risque.

---

##### Cas d’usage pratiques
Même avec ces limitations, les règles d'accès conditionnel pour agents peuvent être utiles :
- Arrêter les agents compromis : Si un agent présente un comportement à risque élevé, la demande de jeton est immédiatement bloquée, arrêtant toute action non autorisée.
- Séparer les rôles des agents : Vous pouvez définir des règles pour autoriser certains agents spécifiques tout en bloquant d’autres, selon le département ou le scénario d’usage.
- Limiter la prolifération des agents : Dans de grandes organisations, des centaines d’agents peuvent être créés ; seuls les agents approuvés peuvent accéder aux ressources.

---

##### Licences requises
- La fonctionnalité d'accès conditionnel nécessite la licence *Microsoft Entra ID P1* (incluse dans *Microsoft 365 E3* et *Microsoft 365 Business Premium*).
- Les politiques qui s’appuient sur des signaux *risk‑based* requièrent *Microsoft Entra ID P2* (incluse dans *Microsoft 365 E5*). Assurez‑vous que chaque identité ciblée par la politique dispose de la licence adéquate.

---

##### Perspectives futures
Microsoft indique que les capacités pour les agents pourraient évoluer vers :
- Scoring plus sophistiqué du risque d’agent
- Analyses comportementales
- Contrôles d’octroi plus granulaires
- Politiques ciblées par tâche ou par capacité

---

##### Conclusion
Avec les règles d’accès conditionnel pour les identités d’agent, Microsoft Entra apporte au monde des agents IA, les mêmes garanties d’accès adaptatif que pour les personnes et applications : signal → décision → application. Même si les contrôles sont volontairement limités dans cette première itération, l’architecture (attributs, ciblage par blueprint, logs dédiés) donne un cadre robuste pour industrialiser la sécurité des agents ... sans ralentir l’adoption.

---

##### Sources
[Microsoft - Techcommunity](https://techcommunity.microsoft.com/blog/coreinfrastructureandsecurityblog/conditional-access-for-agent-identities-in-microsoft-entra/4489915)

[Microsoft Learn - Licences Microsoft Entra](https://learn.microsoft.com/fr-ca/entra/fundamentals/licensing)

---


Avez-vous apprécié cet article ? Vous avez des questions, commentaires ou suggestions, n’hésitez pas à m'envoyer un message depuis le formulaire de contact.

N'oubliez pas de nous suivre et de partager cet article.