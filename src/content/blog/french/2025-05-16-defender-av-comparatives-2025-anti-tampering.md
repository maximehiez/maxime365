---
title: "Certification \"Anti-Tampering\" 2025 pour Defender for Endpoint"
meta_title: ""
description: ""
date: 2025-05-16T10:00:00-05:00
image: "/images/blog/defender/defender_av_comparatives_2025_anti_tampering_thumbnail.png"
categories: ["Defender"]
author: "Maxime Hiez"
tags: ["Gartner", "Magic Quadrant", "Sécurité", "AV-Comparatives"]
draft: false
---
---

##### Introduction
Microsoft a récemment annoncé que *Microsoft Defender for Endpoint* a réussi avec succès les tests anti-tampering 2025 menés par *AV-Comparatives*, un organisme indépendant reconnu pour l’évaluation des solutions de cybersécurité. Cette reconnaissance confirme la robustesse des mécanismes de protection de Defender for Endpoint contre les tentatives de désactivation ou de modification malveillante de ses paramètres de sécurité.

---

##### Qu’est-ce que la protection *anti-tampering* ?
La protection *anti-tampering* (ou *anti-falsifiation*) désigne l’ensemble des mécanismes conçus pour empêcher les modifications non autorisées des paramètres de sécurité d’un système. Lorsqu’un attaquant compromet un environnement, l’une de ses premières actions consiste souvent à désactiver ou contourner les solutions de sécurité (antivirus, EDR, mises à jour, ...) afin de rester indétecté, d’installer des outils malveillants, d’exfiltrer des données ou de lancer des attaques comme le ransomware.

---

##### Une menace bien réelle
Microsoft a observé une augmentation significative des attaques impliquant des tentatives de désactivation de la sécurité. En Mai 2024, Microsoft Defender XDR a détecté plus de 176000 incidents de tampering, affectant plus de 5600 organisations. En moyenne, chaque organisation ciblée a subi plus de 31 tentatives de modification non autorisée.

Les techniques utilisées incluent :
- Modifications du registre Windows
- Outils malveillants comme NSudo, Defender Control, Configure Defender, ToggleDefender
- Scripts PowerShell ou batch personnalisés
- Altération de pilotes système

---

##### Comment Microsoft Defender for Endpoint protège contre ces attaques
Microsoft Defender for Endpoint intègre une protection anti-tampering activée par défaut pour tous les clients. Elle empêche :
- Les modifications locales ou distantes non autorisées des paramètres de sécurité
- La désactivation de la protection en temps réel
- La création d’exclusions dans les outils antivirus ou EDR
- La suspension ou la terminaison des processus critiques de sécurité
- Les modifications de fichiers système, DLL, agents ou politiques de sécurité

Même les administrateurs locaux ou les utilisateurs privilégiés ne peuvent pas contourner ces protections sans autorisation explicite, ce qui renforce considérablement la résilience des endpoints.

---

##### Certification AV-Comparatives 2025
Lors du test anti-tampering 2025 en Avril 2025, AV-Comparatives a soumis Microsoft Defender for Endpoint à une série d’attaques simulées visant à désactiver ou altérer ses protections.

|                                         Test                                         | Résultat  |
| :----------------------------------------------------------------------------------: | :-------: |
| Processus de l'espace utilisateur (terminer, suspendre, ...)                         | Succès ✅ |
| Services de l'espace utilisateur (pause, arrêt, désactivation, désinstallation, ...) | Succès ✅ |
| Clés de registre (supprimer, retirer, renommer, ajouter, ...)                        | Succès ✅ |
| DLL (manipulation, modification, détournement, ...)                                  | Succès ✅ |
| Intégrité de l'agent (désactiver, modifier, désinstaller, ...)                       | Succès ✅ |
| Système de fichiers (manipulation, modification, ...)                                | Succès ✅ |
| Pilotes du noyau (pilote ELAM, pilote de filtre, pilote de minifiltre, ...)          | Succès ✅ |
| Autres composants et fonctions (connexion aux services de mise à jour, ...)          | Succès ✅ |

<u>Résultat</u> : Toutes les tentatives ont été bloquées avec succès, démontrant l’efficacité des mécanismes de défense intégrés.

![image](/images/blog/defender/defender_av_comparatives_2025_anti_tampering_001.png)

Cette certification place Microsoft Defender for Endpoint parmi les solutions les plus fiables du marché pour la protection des postes de travail et serveurs contre les manipulations malveillantes.

Pourquoi c’est important pour les organisations :
- Réduction du risque de compromission : En empêchant les attaquants de désactiver les défenses.
- Conformité renforcée : En assurant l’intégrité des politiques de sécurité.
- Moins de maintenance : Les protections sont actives par défaut et ne nécessitent pas de configuration complexe.
- Protection des environnements critiques : Possibilité de créer des règles spécifiques pour les contrôleurs de domaine ou autres systèmes sensibles.

---

##### Conclusion
La certification AV-Comparatives 2025 confirme que Microsoft Defender for Endpoint est une solution de sécurité de pointe, capable de résister aux tentatives de contournement les plus sophistiquées. Dans un contexte où les attaques ciblant les outils de sécurité sont de plus en plus fréquentes, cette capacité à protéger les protections elles-mêmes est devenue essentielle.

Pour les organisations, cela signifie une meilleure résilience, une réduction des risques et une confiance accrue dans leur posture de cybersécurité.

---

##### Sources
[Microsoft - Techcommunity](https://techcommunity.microsoft.com/blog/microsoftdefenderatpblog/defender-for-endpoint-successfully-passes-the-av-comparatives-2025-anti-tamperin/4414153)

[AV-Comparatives - Certification Anti-Tampering pour Microsoft Defender for Endpoint](https://www.av-comparatives.org/wp-content/uploads/2025/04/avc_tampering_2025_Microsoft.pdf)

[Microsoft Learn - Protéger votre organisation contre la falsification](https://learn.microsoft.com/fr-ca/defender-endpoint/tamper-resiliency)

[Gartner - Magic Quadrant Endpoint Protection](https://www.gartner.com/doc/reprints?id=1-2IWARHR9&ct=240924&st=sb)

---


Avez-vous apprécié cet article ? Vous avez des questions, commentaires ou suggestions, n’hésitez pas à m'envoyer un message depuis le formulaire de contact.

N'oubliez pas de nous suivre et de partager cet article.