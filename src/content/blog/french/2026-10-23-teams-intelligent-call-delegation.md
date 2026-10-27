---
title: "Teams ajoute la délégation intelligente des appels"
meta_title: ""
description: ""
date: 2026-10-23T10:00:00-05:00
image: "/images/blog/teams/teams_intelligent_call_delegation_thumbnail.png"
categories: ["Teams"]
author: "Maxime Hiez"
tags: ["Téléphonie", "IA", "Enregistrement", "Délégation", "Roadmap"]
draft: false
---
---

##### Introduction
Un appel entrant interrompt souvent le travail sans que l'on sache s'il mérite d'être pris. *Microsoft Teams* confie ce tri à un assistant IA avec la délégation intelligente des appels (*Intelligent Call Delegation*), dont *MC1519860* annonce le déploiement (élément de roadmap *565216*). Déjà proposée en préversion aux clients du programme *Frontier*, la fonctionnalité passe en *Public Preview* mondiale à partir de mi-Novembre 2026, puis en disponibilité générale à partir de Janvier 2027. Cet article couvre son fonctionnement, son contrôle et ses limites actuelles.

Voir l'article sur le Magic Quadrant UCaaS 2026 [ICI](https://maxime.hiez.ca/blog/2026-08-12-teams-gartner-ucaas-2026), qui la citait déjà en préversion réservée au programme Frontier.

---

##### Ce que fait la délégation intelligente des appels
L'assistant répond aux appels Teams entrants à la place de l'utilisateur et recueille le contexte de l'appel, pour l'aider à décider s'il le prend. Il peut :
- Filtrer les appels et recueillir l'intention de l'appelant
- Transférer les appels urgents vers l'utilisateur
- Planifier un rappel via *Microsoft Bookings*
- Envoyer les appels suspectés indésirables vers la messagerie vocale

<br/>
L'appelant voit un avatar et entend une annonce qui lui indique qu'il parle à un assistant, et non à une personne. L'utilisateur est notifié et une bannière signale le filtrage en cours. Il peut reprendre l'appel à tout moment avec *Pick up* depuis l'historique des appels, ou le suivre en aperçu en direct (*live preview*), indisponible sans enregistrement ni transcription.

Pour les rappels, l'assistant s'appuie sur un calendrier Bookings privé, absent par défaut et créé en arrière-plan quand l'utilisateur active l'option *Schedule follow-ups*. Si l'administrateur autorise l'accès au calendrier, l'utilisateur doit aussi renseigner un lien Bookings dans les paramètres de l'assistant.

Une fois la licence attribuée, l'utilisateur active lui-même la fonctionnalité depuis *Settings and more > Settings > Calls*, puis *Set up Intelligent Call Delegation* sous *Manage Intelligent Call Delegation*. Sans cette option, il doit contacter son administrateur Teams.

![image](/images/blog/teams/teams_intelligent_call_delegation_001.png)

---

##### Contrôler la délégation intelligente des appels avec PowerShell
MC1519860 annonce des *Personal attendant policies*, sans préciser où elles se gèrent. Microsoft Learn ne documente pour l'instant que PowerShell : la politique *TeamsPersonalAttendantPolicy* se gère avec les applets de commande *[New|Set|Get|Grant|Remove]-CsTeamsPersonalAttendantPolicy*, dont les pages portent encore la mention *Limited Preview* (accès réservé aux organisations autorisées). Outre *PersonalAttendant*, la politique compte sept paramètres :
- *<u>CallScreening</u>* : Évaluation du contexte de l'appel
- *<u>CalendarBookings</u>* : Fonctions de calendrier (rappels Bookings)
- *<u>InboundInternalCalls</u>* : Appels entrants du domaine de l'utilisateur
- *<u>InboundFederatedCalls</u>* : Appels entrants d'autres domaines
- *<u>InboundPSTNCalls</u>* : Appels PSTN entrants
- *<u>AutomaticTranscription</u>* : Stockage automatique des transcriptions des appels de l'assistant
- *<u>AutomaticRecording</u>* : Stockage automatique des enregistrements des appels de l'assistant

<br/>
Chaque paramètre accepte *"EnabledUserOverride"*, *"Enabled"* ou *"Disabled"*, et tous valent *"EnabledUserOverride"* par défaut : chaque choix revient alors à l'utilisateur. Or un utilisateur qui n'a jamais touché à ses paramètres démarre avec l'assistant désactivé, mais avec le filtrage, les trois types d'appels entrants, la transcription et l'enregistrement automatiques activés ; seuls les rappels Bookings sont désactivés. S'il active l'assistant sans modifier ces réglages, les appels traités sont donc transcrits et enregistrés.

Une organisation qui veut reprendre la main modifie l'instance *Global* via la commande PowerShell suivante :
```powershell
Set-CsTeamsPersonalAttendantPolicy -Identity Global -AutomaticRecording Disabled -AutomaticTranscription Disabled
```

Les utilisateurs perdent alors l'aperçu en direct.

La politique s'attribue aussi à un utilisateur ou à un groupe (avec un rang, *-Rank*) via *Grant-CsTeamsPersonalAttendantPolicy*, et *Get-CsOnlineUser* l'affiche depuis la version 8.0.0 du module. Côté utilisateur, *Set-CsPersonalAttendantSettings* configure directement l'assistant d'un compte, à condition qu'il dispose d'une licence *Phone System* ; tous les paramètres obligatoires doivent alors être fournis à chaque fois.

<Notice type="warning">L'assistant remplace le routage d'appels existant de l'utilisateur. Via *Set-CsPersonalAttendantSettings*, un renvoi d'appel déjà en place provoque une erreur de validation ; le renvoi des appels sans réponse vers la messagerie vocale peut, lui, coexister avec l'assistant.</Notice>

---

##### Licences, langues et limites actuelles
Pendant la phase Frontier, chaque utilisateur doit disposer d'une licence *Microsoft Copilot*. MC1519860 évoque seulement une *"appropriate Teams licensing"*, sans nommer de SKU ; ni la licence requise à la disponibilité générale ni un prix ne sont publiés.

Les limites actuelles, celles du programme Frontier, sont les suivantes :
- <u>Langue</u> : Application Teams configurée en anglais uniquement
- <u>Plateformes</u> : Windows et Mac (en anglais) et Web, sans iOS ni Android
- <u>Durée</u> : 4 minutes maximum par appel
- <u>Volume</u> : 15 000 minutes par tenant et par mois
- <u>Simultanéité</u> : Traitement limité selon le nombre d'appels simultanés sur une fenêtre glissante de deux minutes

<br/>
Lorsqu'une limite s'applique, les appels peuvent revenir au routage existant ou à la messagerie vocale. MC1519860 et la roadmap ne citent que Desktop et Mac, et Microsoft Learn donne une liste préliminaire de 28 langues dans lesquelles l'assistant peut s'exprimer, dont *fr-FR* et *fr-CA*, avec *en-US* par défaut. Rien ne précise encore ce qui s'appliquera en Public Preview ou en disponibilité générale.

---

##### Conclusion
La délégation intelligente des appels donne à chaque utilisateur un filtrage de premier niveau, mais le point d'attention est ailleurs : par défaut, la politique laisse tout à l'utilisateur, y compris l'enregistrement et la transcription automatiques, activés d'office. Dès que la politique est accessible dans le tenant, et au plus tard mi-Novembre 2026, il est préférable de fixer ces deux paramètres dans l'instance Global selon les exigences de conformité de l'organisation, et de prévenir les utilisateurs qui dépendent d'un renvoi d'appel. La licence exigée à la disponibilité générale reste, elle, à surveiller d'ici Janvier 2027.

---

##### Sources
[Microsoft 365 Message Center - MC1519860](https://mc.merill.net/message/MC1519860)

[Microsoft 365 Roadmap - ID 565216](https://www.microsoft.com/en-us/microsoft-365/roadmap?id=565216)

[Microsoft Support - Utiliser la délégation d'appel intelligente dans Microsoft Teams](https://support.microsoft.com/fr-ca/topic/d6b59f6d-443b-4bea-9a05-769fe0f12901)

[Microsoft Learn - New-CsTeamsPersonalAttendantPolicy](https://learn.microsoft.com/fr-ca/powershell/module/microsoftteams/new-csteamspersonalattendantpolicy?view=teams-ps)

[Microsoft Learn - Set-CsTeamsPersonalAttendantPolicy](https://learn.microsoft.com/fr-ca/powershell/module/microsoftteams/set-csteamspersonalattendantpolicy?view=teams-ps)

[Microsoft Learn - Grant-CsTeamsPersonalAttendantPolicy](https://learn.microsoft.com/fr-ca/powershell/module/microsoftteams/grant-csteamspersonalattendantpolicy?view=teams-ps)

[Microsoft Learn - Set-CsPersonalAttendantSettings](https://learn.microsoft.com/fr-ca/powershell/module/microsoftteams/set-cspersonalattendantsettings?view=teams-ps)

[Microsoft Learn - Get-CsPersonalAttendantSettings](https://learn.microsoft.com/fr-ca/powershell/module/microsoftteams/get-cspersonalattendantsettings?view=teams-ps)

[Microsoft Learn - Notes de publication Teams PowerShell](https://learn.microsoft.com/fr-ca/microsoftteams/teams-powershell-release-notes)

---


Avez-vous apprécié cet article ? Vous avez des questions, commentaires ou suggestions, n'hésitez pas à m'envoyer un message depuis le formulaire de contact.

N'oubliez pas de nous suivre et de partager cet article.