---
title: "Interprétation bilingue en mode consécutif dans Teams"
meta_title: ""
description: ""
date: 2026-05-26T10:00:00-05:00
image: "/images/blog/teams/teams_interpreter_agent_consecutive_interpretation_thumbnail.png"
categories: ["Teams"]
author: "Maxime Hiez"
tags: ["IA", "Interprète", "Rencontre"]
draft: false
---
---

##### Introduction
L'agent *Interprète* de *Microsoft Teams* proposait jusqu'ici uniquement un mode de traduction simultané, où la voix synthétisée se superposait à celle de l'orateur en direct. Dans les réunions interactives ou bilingues, ce chevauchement audio crée une expérience confuse pour tous les participants. Microsoft a mis en disponibilité générale un second mode, dit *consécutif*, qui attend la fin de chaque prise de parole avant de livrer la traduction, visible de tous sur la scène de la réunion.

---

##### Simultané vs consécutif : deux modes, deux contextes
Les deux modes reposent sur des philosophies différentes et ne couvrent pas les mêmes scénarios.

|                               | Mode simultané                            | Mode consécutif                                            |
|-------------------------------|-------------------------------------------|------------------------------------------------------------|
| Déclenchement                 | En temps réel, pendant la prise de parole | Après la fin de chaque intervention                        |
| Expérience                    | Individuelle (casque recommandé)          | Partagée, l'agent apparaît sur la scène                    |
| Risque de chevauchement audio | Élevé                                     | N/A                                                        |
| Langues par session           | Jusqu'à 9                                 | 2 langues maximum                                          |
| Cas d'usage typique           | Présentations, diffusions larges          | Discussions bilingues, négociations, réunions interactives |

En mode consécutif, l'agent Interprète rejoint la réunion comme un participant à part entière et est visible de l'ensemble des personnes présentes. L'expérience n'est plus individuelle, tous entendent la traduction au même moment, ce qui élimine la désynchronisation ressentie en mode simultané.

---

##### Langues supportées et contrainte bilingue
Le mode consécutif prend en charge 9 langues : le Chinois, l'Anglais, le Français, l'Allemand, l'Italien, le Japonais, le Coréen, le Portugais et l'Espagnol. Cette liste est commune aux deux modes.

La contrainte propre au mode consécutif est le caractère bilingue de chaque session, il n'est possible de sélectionner que 2 langues par réunion. Cette limitation découle directement du design tour-par-tour du mode.

---

##### Comment activer l'interprétation consécutive ?
Les utilisateurs pourront activer la fonctionnalité en cliquant sur *<u>More</u>*, puis sur *<u>Language and speech</u>*, et sur *<u>Turn on Interpreter for me</u>*.

![image](/images/blog/teams/teams_interpreter_agent_consecutive_interpretation_001.png)

Le choix des langues sera ensuite offert.

![image](/images/blog/teams/teams_interpreter_agent_consecutive_interpretation_002.png)

---

##### Licences et quota mensuel
Une licence *Microsoft 365 Copilot* est obligatoire pour activer l'agent Interprète, quel que soit le mode utilisé. L'utilisateur qui active l'interprétation le fait pour l'ensemble de la réunion, pas uniquement pour lui-même.

20 heures d'interprétation sont incluses dans la licence (par utilisateur et par mois). Au-delà de cette limite, l’accès est soumis à la capacité disponible.

---

##### Contrôles admin et cas particuliers
L'agent Interprète est activé par défaut pour tous les utilisateurs disposant d'une licence *Microsoft 365 Copilot*. Il n'existe pas de contrôle dédié dans l'interface du *Teams Admin Center*, la gestion s'effectue uniquement via les commandes *PowerShell* suivantes :

Pour désactiver complètement l'agent Interprète :
```powershell
Set-CsTeamsMeetingPolicy -Identity Global -AIInterpreter Disabled
```

Pour conserver l'agent mais désactiver la simulation de voix :
```powershell
Set-CsTeamsMeetingPolicy -Identity Global -VoiceSimulationInInterpreter Disabled
```
<br/>

L'agent Interprète n'est pas disponible dans les contextes suivants :
- Appels 1:1 non planifiés : Qu'il s'agisse d'appels VoIP ou PSTN
- Town halls et Webinars : Ces formats de diffusion ne sont pas couverts
- Microsoft Teams Free : Une licence payante est requise

Les *Teams Rooms* Windows (*MTRoW*) supportent l'agent Interprète depuis la version 5.5.129.0, sous réserve d'une licence *Teams Rooms Pro*.

---

##### Conclusion
Le mode consécutif comble un manque concret de l'agent Interprète dans les réunions interactives, l'expérience partagée et sans chevauchement audio facilite les échanges bilingues sans perturber le flux de la conversation. La disponibilité générale rend la fonctionnalité accessible dès maintenant à tout titulaire d'une licence *Microsoft 365 Copilot*. Les administrateurs souhaitant encadrer l'usage ont intérêt à configurer les politiques de réunion via PowerShell et à surveiller la consommation du quota mensuel jusqu'à clarification du comptage entre les deux modes.

---

##### Sources
[Microsoft - Techcommunity](https://techcommunity.microsoft.com/blog/Microsoft365InsiderBlog/converse-naturally-across-languages-with-consecutive-interpretation/4514327)

[Microsoft Learn - Gérer l'agent Interprète](https://learn.microsoft.com/fr-ca/microsoftteams/interpreter-agent-teams)

---


Avez-vous apprécié cet article ? Vous avez des questions, commentaires ou suggestions, n’hésitez pas à m'envoyer un message depuis le formulaire de contact.

N'oubliez pas de nous suivre et de partager cet article.