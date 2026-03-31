---
title: "External MFA maintenant disponible dans Entra ID"
meta_title: ""
description: ""
date: 2026-03-27T10:00:00-05:00
image: "/images/blog/entra/entra_external_mfa_now_available_thumbnail.png"
categories: ["Entra ID"]
author: "Maxime Hiez"
tags: ["Accès conditionnels", "Sécurité", "Zero Trust", "MFA"]
draft: false
---
---

##### Introduction
Microsoft a annoncé la *General Availability* de l’*External MFA*, dans *Microsoft Entra ID*, anciennement connu sous le nom de *External Authentication Methods*. Cette fonctionnalité permet d’utiliser un fournisseur *MFA* tiers pour les authentifications Entra ID, en complément ou en remplacement des méthodes natives, sans quitter Entra comme plan de contrôle (stratégies, risques, accès conditionnels), plutôt que de bricoler des intégrations *"à côté"*.

---

##### Contexte
Jusqu’à présent, Microsoft Entra ID proposait plusieurs options MFA :
- Microsoft Authenticator
- SMS / appel vocal
- FIDO2 / passkeys
- Solutions intégrées via Conditional Access

Cependant, l’intégration avec des solutions MFA tierces restait limitée et souvent complexe à mettre en œuvre. Certaines organisations utilisent déjà :
- Des solutions MFA centralisées
- Des fournisseurs d’identité tiers
- Des exigences réglementaires spécifiques

Dans ces cas, devoir maintenir un MFA Entra en parallèle pouvait poser problème.

---

##### Principe d'External MFA
La fonctionnalité External MFA permet de déléguer le second facteur d’authentification à un fournisseur externe, tout en conservant l’évaluation complète des politiques (accès conditionnels + évaluation du risque) côté Entra. L’utilisateur peut choisir une méthode externe pour satisfaire une exigence MFA lors d’une connexion avec son compte *Microsoft 365*.

Concrètement :
- Entra ID gère l’authentification primaire
- Le MFA est effectué par un système externe
- Entra fait confiance au résultat du MFA

![image](/images/blog/entra/entra_external_mfa_now_available_001.png)

---

##### Principe de fonctionnement
Le fonctionnement repose sur les étapes suivantes :
1. L’utilisateur s’authentifie auprès d’Entra ID (1er facteur)
2. Entra évalue la connexion et la redirige vers le fournisseur externe
3. Le fournisseur applique le MFA (2ème facteur)
4. Une validation est renvoyée à Entra ID
5. L’accès est accordé si le MFA est validé

Le MFA n’est donc plus exécuté directement par Entra, mais par un service tiers.

---

##### Intégration avec les accès conditionnels
External MFA s’intègre avec les stratégies d'accès conditionnels. Il est possible de :
- Exiger un MFA
- Rediriger vers le fournisseur externe
- Appliquer des conditions (localisation, appareil, risque, ...)

Cela permet de conserver une gouvernance centralisée dans Entra ID, tout en externalisant le MFA.

![image](/images/blog/entra/entra_external_mfa_now_available_002.png)

---

##### Migration depuis les Custom Controls
External MFA remplace les *Custom Controls*, qui seront dépréciés le 30 Septembre 2026. Les configurations existantes continueront de fonctionner pendant la période de transition. Il est recommandé de démarrer les configurations dès **<u>maintenant</u>**.

---

##### Bonnes pratiques
Voici une approche prudente et efficace pour déployer :
- Pilote avec un groupe restreint (IT / sécurité / power users) et logs d’authentification, avant d’élargir.
- Revoir vos règles MFA : réduire la fatigue MFA, utiliser sign-in frequency intelligemment, et éviter des prompts inutiles (risque de phishing).
- Planifier la migration Custom Controls avant 30/09/2026, surtout si vous devez rester conforme avec vos exigences MFA tierces.
- Documenter l’expérience utilisateur (choix de méthode, erreurs possibles si consent manquant, processus de récupération).

---

##### Licence requise
La mise en place d’External MFA nécessite <u>au minimum</u> une licence *Microsoft Entra ID P1*.

---

##### Conclusion
La disponibilité générale de External MFA dans Entra ID apporte une flexibilité supplémentaire dans la gestion de l’authentification. Elle permet d’intégrer des solutions MFA existantes tout en conservant les capacités de gouvernance d’Entra. Cependant, elle introduit également de nouvelles dépendances et une complexité accrue. Son utilisation doit donc être justifiée par des besoins spécifiques et intégrée dans une architecture maîtrisée. Pour les organisations qui avaient investi dans un MFA tiers (conformité, exigences métiers), c’est enfin une option propre.

---

##### Sources
[Microsoft - Techcommunity](https://techcommunity.microsoft.com/blog/microsoft-entra-blog/external-mfa-in-microsoft-entra-id-is-now-generally-available/4488926)

[Microsoft Learn - Méthode d’authentification multifacteur externe](https://learn.microsoft.com/fr-ca/entra/identity/authentication/how-to-authentication-external-method-manage)

---


Avez-vous apprécié cet article ? Vous avez des questions, commentaires ou suggestions, n’hésitez pas à m'envoyer un message depuis le formulaire de contact.

N'oubliez pas de nous suivre et de partager cet article.