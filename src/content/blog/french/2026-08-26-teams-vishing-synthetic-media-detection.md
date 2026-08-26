---
title: "Détection du vishing et des médias synthétiques dans Teams"
meta_title: ""
description: ""
date: 2026-08-26T10:00:00-05:00
image: "/images/blog/teams/teams_vishing_synthetic_media_detection_thumbnail.png"
categories: ["Teams"]
author: "Maxime Hiez"
tags: ["Téléphonie", "Sécurité", "Vishing", "PowerShell"]
draft: false
---
---

##### Introduction
Le module *Teams PowerShell 7.9.0* a introduit deux paramètres qui n'ont pas fait l'objet d'une annonce dédiée : *VoicePhishingDetection* dans la politique d'appels et *SyntheticMediaDetection* dans la politique de réunion. Le premier détecte les tentatives d'hameçonnage vocal pendant un appel entrant, le second la présence de contenu audio ou vidéo généré artificiellement dans une réunion.

Les deux répondent à la même évolution des attaques : l'usurpation par la voix et par l'image est devenue accessible, et le contrôle ne peut plus reposer sur la seule vigilance de l'utilisateur.

---

##### La détection du vishing dans les appels
Le paramètre *VoicePhishingDetection* active une détection par IA des tentatives de *vishing* pendant les appels entrants en cours. Quatre valeurs sont disponibles :
- <u>BannerAndAudio</u> : Alerte visuelle et alerte vocale, valeur par défaut
- <u>Banner</u> : Alerte visuelle uniquement
- <u>Audio</u> : Alerte vocale uniquement
- <u>None</u> : Aucune alerte

L'alerte se déclenche pendant l'appel, et non après coup dans un rapport. C'est la différence avec le filtrage antipourriel classique, qui qualifie l'appelant avant décrochage : ici, c'est le contenu de la conversation qui est analysé.

---

##### La détection des médias synthétiques dans les réunions
Le paramètre *SyntheticMediaDetection* de la politique de réunion accepte deux valeurs, *Enabled* par défaut et *Disabled*. Lorsqu'il est désactivé, aucune détection n'a lieu et les autres propriétés liées sont ignorées.

Un second paramètre, *SyntheticMediaDetectionAppId*, désigne l'identifiant de l'application Teams du robot de détection utilisé pour l'analyse. Le GUID nul, soit *00000000-0000-0000-0000-000000000000*, correspond au comportement par défaut de la plateforme : aucun fournisseur si la détection Microsoft n'est pas disponible, détection Microsoft si elle l'est. Ce paramètre ouvre donc la porte à des moteurs de détection tiers, un modèle déjà vu avec l'enregistrement de conformité.

---

##### Configuration en PowerShell
Les deux paramètres se configurent depuis le module Teams PowerShell :
```powershell
Connect-MicrosoftTeams

Set-CsTeamsCallingPolicy -Identity Global -VoicePhishingDetection BannerAndAudio

Set-CsTeamsMeetingPolicy -Identity Global -SyntheticMediaDetection Enabled
```

La vérification de l'état effectif se fait avec les commandes de lecture correspondantes :
```powershell
Get-CsTeamsCallingPolicy -Identity Global | fl VoicePhishingDetection

Get-CsTeamsMeetingPolicy -Identity Global | fl SyntheticMediaDetection, SyntheticMediaDetectionAppId
```

<Notice type="note">Au moment de la publication de cet article, la documentation Microsoft Learn indique pour les deux paramètres que la fonctionnalité n'est pas encore entièrement déployée et que le réglage reste sans effet. Les valeurs peuvent être positionnées dès maintenant, mais aucune détection ne se produit tant que le service n'est pas activé côté Microsoft.</Notice>

---

##### Ce que cela implique pour les administrateurs
Les deux paramètres sont actifs par défaut, *BannerAndAudio* pour les appels et *Enabled* pour les réunions. Aucune action n'est donc nécessaire pour en bénéficier le jour où la fonctionnalité arrive, mais deux points méritent une décision anticipée.

Le premier concerne les environnements soumis à des obligations d'information des employés, l'analyse du contenu d'un appel ou d'une réunion relevant du même type d'encadrement que la transcription. Le second concerne les faux positifs sur les appels légitimes, un service de recouvrement ou un support technique externe pouvant présenter les mêmes signaux qu'une tentative d'hameçonnage. La valeur *Banner* offre un compromis, en signalant sans interrompre la conversation par une alerte vocale.

---

##### Conclusion
Ces deux paramètres complètent la série de protections arrivées cette année dans Teams, après la détection des bots en réunion et les indicateurs de confiance sur les participants externes. Ils sont configurables aujourd'hui et actifs par défaut, ce qui laisse le temps de trancher la question de l'information des utilisateurs et du niveau d'alerte souhaité avant que la détection ne devienne effective.

---

##### Sources
[Microsoft Learn - Set-CsTeamsCallingPolicy](https://learn.microsoft.com/fr-ca/powershell/module/microsoftteams/set-csteamscallingpolicy?view=teams-ps)

[Microsoft Learn - Set-CsTeamsMeetingPolicy](https://learn.microsoft.com/fr-ca/powershell/module/microsoftteams/set-csteamsmeetingpolicy?view=teams-ps)

[Microsoft Learn - Politiques d'appel dans Teams](https://learn.microsoft.com/fr-ca/microsoftteams/teams-calling-policy)

---


Avez-vous apprécié cet article ? Vous avez des questions, commentaires ou suggestions, n'hésitez pas à m'envoyer un message depuis le formulaire de contact.

N'oubliez pas de nous suivre et de partager cet article.