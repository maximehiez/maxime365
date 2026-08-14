---
title: "Comment enregistrer les appels des files d'attente Teams"
meta_title: ""
description: ""
date: 2026-08-14T10:00:00-05:00
image: "/images/blog/teams/tuto/teams_how_to_enable_automatic_recording_call_queues_thumbnail.png"
categories: ["Teams", "Tutoriel"]
author: "Maxime Hiez"
tags: ["Téléphonie", "Direct Routing", "Calling Plan", "Operator Connect", "File d'attente", "Queues App", "Enregistrement", "PowerShell"]
draft: false
---
---

##### Introduction
L'enregistrement des appels dans les files d'attente était jusqu'à présent une fonctionnalité limitée dans *Microsoft Teams*. Les répondants devaient manuellement déclencher l'enregistrement et le fichier était stocké dans leur *OneDrive*. On parlait d'enregistrement non conforme. Dès que le besoin d'enregistrement automatique était annoncé, il fallait se tourner vers des solutions tierces telles que *Numonix*, *ASC Technologies* et autres. On parlait alors d'enregistrement de conformité.

Teams dispose désormais d'une fonctionnalité native pour enregistrer et transcrire les appels entrants des files d'attente.

---

##### Prérequis
**<u>Téléphonie Microsoft Teams activée</u>**
- Une file d'attente configurée avec le mode conférence.
- Teams Queues App déployée.

**<u>Licences nécessaires</u>**
- *Microsoft Teams Premium*.

**<u>Rôle d’administrateur</u>**
- Un compte avec le rôle *Administrateur Global* ou *Administrateur Teams* pour accéder au Microsoft Teams Admin Center.

---

##### Étape 1 : Se connecter à Microsoft Teams en PowerShell
Connectez-vous à Microsoft Teams via la commande PowerShell suivante :
```powershell
Connect-MicrosoftTeams
```

---

##### Étape 2 : Créer le modèle d'enregistrement automatique
Créez le modèle d’enregistrement automatique pour la file d’attente via la commande PowerShell suivante :
```powershell
New-CsAutoRecordingTemplate -Name "IT Support - Recording" -Description "Recording policy for the IT Support call queue" -RecordingEnabled $true -TranscriptionEnabled $true -AgentViewPermission All -SharePointHostName "lab.sharepoint.com" -SharePointSiteName "IT Support" -RecordingDocumentOwner "14a3b2c4-46b5-3878-81d4-b9c8be63f8e1" -AutoRecordingAnnouncementTextToSpeechPrompt "This call will be automatically recorded for training purposes."
```

<Notice type="info">La réponse aux appels doit utiliser un groupe M365 ou un canal Teams.</Notice>

---

##### Étape 3 : Assigner le modèle à la file d'attente
Assignez le modèle à la file d’attente via la commande PowerShell suivante :
```powershell
Set-CsCallQueue -Identity e988ce9d-b140-bfa9-44ef-e92959522bf9 -AutoRecordingTemplateId b0908cc3-8d87-49a1-a25b-c5a7d76c2689
```

<Notice type="tip">Remplacez les 2 ID par vos valeurs.</Notice>

---

##### Valider le résultat
Le résultat est visible après quelques minutes ; les appels répondus par la file d'attente sont enregistrés dans le site SharePoint configuré dans le modèle.

Les enregistrements (et transcriptions) sont accessibles depuis l'application *Queues App*.

![image](/images/blog/teams/tuto/teams_how_to_enable_automatic_recording_call_queues_001.png)

En cliquant sur le bouton *<u>Open</u>*, il sera également accessible dans le site SharePoint.

![image](/images/blog/teams/tuto/teams_how_to_enable_automatic_recording_call_queues_002.png)

---

##### Conclusion
La fonctionnalité est activable seulement en PowerShell pour le moment, mais comme d'habitude, elle sera disponible via le Microsoft Teams Admin Center dans les prochaines semaines.<br/><br/>
Vous savez maintenant comment activer l'enregistrement des appels entrants dans vos files d'attente Teams.

---

##### Sources
[Microsoft Learn - Modèle d’enregistrement automatique pour file d'attente](https://learn.microsoft.com/fr-ca/microsoftteams/aa-cq-setup-call-queue-template-recording-automatic)

[Microsoft Learn - New-CsAutoRecordingTemplate](https://learn.microsoft.com/fr-ca/powershell/module/microsoftteams/new-csautorecordingtemplate?view=teams-ps)

[Microsoft Learn - Enregistrement de conformité](https://learn.microsoft.com/fr-ca/microsoftteams/teams-recording-compliance)

---


Avez-vous apprécié cet article ? Vous avez des questions, commentaires ou suggestions, n'hésitez pas à m'envoyer un message depuis le formulaire de contact.

N'oubliez pas de nous suivre et de partager cet article.