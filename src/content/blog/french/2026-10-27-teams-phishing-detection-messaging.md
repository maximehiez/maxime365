---
title: "Teams détecte l'hameçonnage dans les conversations"
meta_title: ""
description: ""
date: 2026-10-27T10:00:00-05:00
image: "/images/blog/teams/teams_phishing_detection_messaging_thumbnail.png"
categories: ["Teams"]
author: "Maxime Hiez"
tags: ["Sécurité", "Phishing", "IA", "Roadmap"]
draft: false
---
---

##### Introduction
Jusqu'ici, la protection native de *Microsoft Teams* dans les conversations s'appuyait sur des indicateurs précis : une URL malveillante, un type de fichier dangereux ou l'usurpation d'une marque lors d'un premier contact externe. Teams va y ajouter une détection par IA de l'hameçonnage (*phishing*) qui analyse le contexte de la conversation, même en l'absence de lien ou de fichier, avec l'annonce *MC1519866* (élément de roadmap *575288*). Le déploiement en *Targeted Release* commence début Novembre 2026 et doit se terminer mi-Novembre ; la disponibilité générale suit, de début à mi-Décembre 2026.

---

##### Ce que Teams détecte dans les conversations
La détection lit le contexte de l'échange pour repérer quatre types de comportement : l'hameçonnage, l'ingénierie sociale, les tentatives d'usurpation d'identité et l'intention trompeuse. Un message sans lien ni pièce jointe peut suffire.

Pour la plupart des utilisateurs, le périmètre se limite aux premiers contacts externes, en conversation individuelle comme en groupe. Les utilisateurs de Teams sur mobile en Chine reçoivent une protection supplémentaire, qui peut aussi couvrir les conversations internes au tenant. Ni les canaux ni les réunions ne sont mentionnés.

La fonctionnalité est annoncée sur Android, iOS, Desktop, Mac et Web. Seul le cloud *Worldwide (Standard Multi-Tenant)* figure sur la roadmap.

---

##### Ce que voit l'utilisateur
Pendant une première phase de validation, la détection peut tourner en arrière-plan sans afficher le moindre avertissement. Ensuite, l'utilisateur peut voir une bannière rouge dans la conversation, accompagnée d'un lien *Preview their messages*, pour l'aider à décider avant de poursuivre l'échange.

![image](/images/blog/teams/teams_phishing_detection_messaging_001.png)

L'article de support décrit la conduite à tenir :
- Vérifier l'expéditeur : Contrôler son identité et son adresse de courriel à la recherche de signes d'usurpation, et se méfier des demandes à risque (argent, informations personnelles).
- Hameçonnage confirmé : Ne pas interagir avec l'utilisateur, puis le bloquer et le signaler depuis sa carte de contact.
- Détection erronée : Ouvrir le message signalé et, sous *More options*, choisir *Report as not a concern* (*Signaler comme n'étant pas un problème* dans l'interface française).

<Notice type="note">Microsoft ne donne aucune durée pour cette phase silencieuse : impossible de savoir quand les avertissements apparaîtront dans un tenant donné.</Notice>

---

##### Ce que les administrateurs doivent savoir
La détection est active par défaut : l'annonce précise qu'aucune nouvelle configuration administrateur n'est requise, et ne mentionne ni réglage pour la désactiver, ni licence, ni lien avec *Microsoft Defender*. La documentation de l'applet de commande *Set-CsTeamsMessagingConfiguration* liste pourtant un paramètre *ContentBasedPhishingCheck* (*"Enabled"* par défaut, ou *"Disabled"*), qui active la détection d'hameçonnage basée sur le contenu pour les messages Teams du tenant et porte la mention d'une fonctionnalité non encore publiée. Aucune page ne le relie explicitement à *MC1519866*, et Microsoft Learn ne propose pas encore de page d'administration dédiée.

La valeur actuelle du paramètre se lit via la commande PowerShell suivante :
```powershell
Connect-MicrosoftTeams

Get-CsTeamsMessagingConfiguration | Select-Object ContentBasedPhishingCheck
```

Côté données, l'annonce reconnaît que Teams analyse le contexte des conversations et que ce changement modifie le traitement des données client existantes. La détection sert uniquement à la sécurité, jamais à la productivité, au résumé de conversations, à la publicité ou à la surveillance des utilisateurs. Le contenu des messages n'est pas conservé pour entraîner des modèles. Dans les organisations soumises à des obligations d'information des employés, le sujet mérite d'être traité avant le déploiement en Targeted Release, début Novembre 2026, d'autant que la détection peut analyser les conversations en arrière-plan avant d'afficher le moindre avertissement.

Microsoft recommande de revoir les consignes internes sur les échanges avec des contacts externes inconnus et de rappeler aux utilisateurs de signaler les activités suspectes ou les détections erronées. Côté signalement, trois points sont à connaître dès aujourd'hui :
- <u>Report a security concern</u> : Paramètre de la politique de messagerie, activé par défaut dans le Microsoft Teams Admin Center, qui permet de signaler messages et utilisateurs.
- Portail Microsoft Defender : Le paramètre correspondant n'est activé par défaut que pour les nouveaux tenants ; un tenant existant doit l'activer pour que les signalements apparaissent dans l'onglet *User reported* de la page *Submissions*.
- Signalement d'un utilisateur : Le signalement d'un utilisateur externe (*Report this person*, au moment de le bloquer depuis une demande de conversation externe ou sa carte de profil) n'est pas encore pris en charge dans Microsoft Defender ; seuls les signalements de messages y remontent.
<br/>
Deux points restent ouverts. Le paramètre *Report incorrect security detections* (*Messaging settings* > *Messaging safety*) n'est documenté que pour les liens signalés par *Link Protection*, et Learn ne dit pas s'il s'applique à ces avertissements. Le rapport *Security detections* du Teams Admin Center liste les types *Impersonation*, *Malicious URL* et *Weaponizable File*, sans type dédié à l'hameçonnage.

---

##### Conclusion
Cette détection complète la protection contre les URL malveillantes et celle contre l'usurpation de marques en couvrant ce qu'elles laissaient passer : un premier contact externe qui manipule sans lien ni fichier. Après la détection du vishing dans les appels, c'est au tour de la messagerie de recevoir une analyse par IA du contenu des échanges, active par défaut. Le paramètre *ContentBasedPhishingCheck* laisse entrevoir un interrupteur au niveau du tenant, mais tant que Microsoft ne le relie pas à cette annonce, le travail de l'administrateur d'ici Novembre 2026 porte sur le reste : prévenir les utilisateurs de l'arrivée de la bannière, vérifier que les signalements de messages remontent jusqu'à Defender dans un tenant existant, et surveiller la documentation pour la licence et le rapport Security detections.

---

##### Sources
[Message Center - MC1519866](https://admin.cloud.microsoft/#/MessageCenter/:/messages/MC1519866)

[Microsoft 365 Roadmap - ID 575288](https://www.microsoft.com/fr-ca/microsoft-365/roadmap?id=575288)

[Microsoft Support - Détection de contenu d'hameçonnage dans Teams](https://support.microsoft.com/fr-ca/teams/chat/phishing-content-detection-microsoft-teams)

[Microsoft Learn - Signalement par l'utilisateur final pour la sécurité](https://learn.microsoft.com/fr-ca/microsoftteams/end-user-reporting-security)

[Microsoft Learn - Set-CsTeamsMessagingConfiguration](https://learn.microsoft.com/fr-ca/powershell/module/microsoftteams/set-csteamsmessagingconfiguration)

[Microsoft Learn - Rapport des détections de sécurité dans Teams](https://learn.microsoft.com/fr-ca/microsoftteams/teams-analytics-and-reports/security-detections-report)

---


Avez-vous apprécié cet article ? Vous avez des questions, commentaires ou suggestions, n'hésitez pas à m'envoyer un message depuis le formulaire de contact.

N'oubliez pas de nous suivre et de partager cet article.