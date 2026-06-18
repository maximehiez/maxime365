---
title: "Microsoft relève la limite de politiques d'accès conditionnels"
meta_title: ""
description: ""
date: 2026-05-21T10:00:00-05:00
image: "/images/blog/entra/entra_conditional_access_policy_maximum_limit_thumbnail.png"
categories: ["Entra ID"]
author: "Maxime Hiez"
tags: ["Accès conditionnels", "Sécurité", "PowerShell"]
draft: false
---
---

##### Introduction
*Microsoft* relève discrètement le plafond de politiques d'accès conditionnel par tenant, passant de 195 à 244. Cette limite concerne toutes les politiques, qu'elles soient actives, désactivées ou en mode *report-only*, et sa portée réelle échappe souvent aux équipes jusqu'au moment où elles heurtent le plafond. Pour les organisations qui pilotent des environnements réglementés ou multi-équipes, comprendre comment ce quota se consomme est aussi important que connaître le chiffre lui-même.

---

##### Ce qui compte dans le quota, et ce qui n'y compte pas
Le quota est souvent mal compris parce qu'il englobe davantage que les seules politiques actives. Les éléments suivants consomment tous une place dans le plafond :
- Politiques activées : Consomment le quota, comme attendu
- Politiques désactivées : Consomment le quota, même si elles ne s'appliquent jamais
- Politiques en mode *report-only* : Consomment le quota, malgré leur rôle de test

À l'inverse, plusieurs éléments disposent de leurs propres plafonds distincts et ne s'imputent pas sur ce quota :
- Named locations basées sur les adresses IP : Plafond séparé de 195 entrées
- Authentication strengths personnalisées : Plafond séparé de 15 entrées
- Politiques gérées par Microsoft : Telles que le blocage de l'authentification héritée et l'obligation de MFA pour tous les utilisateurs

---

##### Pourquoi les grandes organisations atteignent la limite ?
La prolifération de politiques d'accès conditionnel suit des schémas prévisibles dans les environnements complexes. La première cause structurelle est la limite de 250 applications par politique Dès qu'un profil d'accès couvre plus de 250 applications, il faut dupliquer la politique, ce qui double la consommation de quota pour un seul besoin fonctionnel.

Les exigences de conformité multi-framework amplifient ce phénomène. Une organisation soumise simultanément à *FedRAMP*, *HIPAA* et *ISO 27001* maintient des jeux de politiques distincts pour chaque cadre. À cela s'ajoutent :
- <u>Politiques d'exception</u> : Créées pour des exclusions temporaires qui deviennent permanentes faute de révision
- <u>Politiques pour identités invitées et externes</u> : Séparées par conception, multipliées par les partenaires
- <u>Politiques pour *workload identities*</u> : Comptes de service et applications non-humaines traités à part
- <u>Politiques d'urgence en attente</u> : Désactivées mais conservées dans le quota
- <u>Gouvernance multi-équipes</u> : Chaque équipe crée ses propres politiques sans coordination centrale, avec des doublons en résultante

---

##### Auditer son quota actuel
Avant de créer de nouvelles politiques, il est utile de connaître le nombre exact de politiques existantes. Deux méthodes sont disponibles.

Via l'*API Graph* (v1.0), avec le header *ConsistencyLevel: eventual* obligatoire pour activer le comptage :
```http
GET https://graph.microsoft.com/v1.0/identity/conditionalAccess/policies?$count=true
ConsistencyLevel: eventual
```

Via la commande PowerShell suivante (avec le module *Microsoft Graph PowerShell SDK*) :
```powershell
Get-MgPolicyConditionalAccessPolicyCount
```

Ou via la version bêta du module, qui peut refléter des changements de quota plus récents :
```powershell
Get-MgBetaPolicyConditionalAccessPolicyCount
```

Ces commandes retournent le nombre total de politiques, tous états confondus. Le résultat est à comparer au plafond visible dans le portail *Entra* sous *Conditional Access* > *Overview* > *Policy Snapshot*.

![image](/images/blog/entra/entra_conditional_access_policy_maximum_limit_001.png)

---

##### Bonnes pratiques pour contenir la prolifération
L'augmentation du plafond offre de la marge, mais ne résout pas le problème de fond. Les pratiques suivantes permettent de limiter la croissance du quota à long terme :
- Regrouper les applications par profil : Une politique par profil d'exigences similaires, pas une politique par application. Le filtre *Filter for applications* permet un ciblage dynamique sans liste statique
- Réviser les exclusions temporaires : Un audit trimestriel permet de nettoyer les politiques obsolètes
- Basculer les politiques *report-only* : Une politique en mode *report-only* consomme le même quota qu'une politique active. Passer en production ou supprimer, sans accumuler
- Normaliser les noms de politiques : Une convention de nommage structurée (framework, portée, état) permet d'identifier les doublons lors des audits

Pour aller plus loin sur l'analyse d'impact des politiques, consultez l'article de Mars 2025 [Analyse d'impact des politiques d'accès conditionnels Entra ID](https://maxime.hiez.ca/blog/2025-03-17-entra-conditional-access-policy-impact) qui couvrait le mode *report-only* et les outils de diagnostic associés.

---

##### Conclusion
Le relèvement du plafond de politiques d'accès conditionnel dans *Entra ID* donne aux organisations davantage de marge pour gérer des environnements complexes. Cette marge supplémentaire n'est pas une invitation à créer davantage de politiques, mais une occasion de nettoyer celles qui existent. Un audit du quota actuel, combiné à une révision des politiques désactivées et des exclusions accumulées, reste la priorité avant d'exploiter le nouvel espace disponible.

---

##### Sources
[Microsoft Learn - Limites du service Microsoft Entra](https://learn.microsoft.com/fr-ca/entra/identity/users/directory-service-limits-restrictions)

[Microsoft Learn - Planifier un déploiement d'accès conditionnel](https://learn.microsoft.com/fr-ca/entra/identity/conditional-access/plan-conditional-access)

[Microsoft Learn - Politiques gérées par Microsoft](https://learn.microsoft.com/fr-ca/entra/identity/conditional-access/managed-policies)

---


Avez-vous apprécié cet article ? Vous avez des questions, commentaires ou suggestions, n’hésitez pas à m'envoyer un message depuis le formulaire de contact.

N'oubliez pas de nous suivre et de partager cet article.