---
title: "Comment lancer une simulation d'attaque courriels avec Defender"
meta_title: ""
description: ""
date: 2026-09-01T10:00:00-05:00
image: "/images/blog/defender/tuto/defender_how_to_launch_attack_simulation_emails_thumbnail.png"
categories: ["Defender", "Tutoriel"]
author: "Maxime Hiez"
tags: ["Attaque", "Sécurité", "Phishing"]
draft: false
---
---

##### Introduction
Former ses utilisateurs à reconnaître un courriel de *phishing* ne peut pas se limiter à une capsule de sensibilisation annuelle, c'est un réflexe qui s'entretient, se teste et se mesure dans des conditions réalistes. *Microsoft Defender for Office 365* propose justement cette approche avec sa fonctionnalité de simulation d'attaque (Attack simulation training), qui permet d'envoyer de véritables campagnes de phishing, de collecte d'identifiants ou de pièces jointes malveillantes, sans le moindre risque réel, directement aux boîtes de réception de vos employés. L'objectif : identifier les utilisateurs les plus vulnérables, mesurer l'évolution du comportement dans le temps, et déclencher automatiquement des formations ciblées pour les personnes qui cliquent, saisissent des identifiants ou ouvrent des pièces jointes suspectes.

---

##### Prérequis
**<u>Licences nécessaires</u>**
- *Microsoft 365 E5*.
- *Microsoft Defender for Office 365 Plan 2* en complément avec une licence autre (*Business Standard*, ...).

**<u>Rôle d’administrateur</u>**
- Un compte avec le rôle *Administrateur Global* ou *Administrateur Sécurité* pour accéder au Microsoft Defender Portal.

---

##### Étape 1 : Se connecter au Microsoft Defender Portal
Connectez-vous au Microsoft Defender Portal en ouvrant votre navigateur web sur https://security.microsoft.com.

---

##### Étape 2 : Créer la campagne d'attaque
Dans le menu de gauche, cliquez sur *<u>Email & collaboration</u>*, puis sur *<u>Attack simulation training</u>*, et sur *<u>Launch a simulation</u>*.

![image](/images/blog/defender/tuto/defender_how_to_launch_attack_simulation_emails_001.png)

Sélectionnez le type d'attaque que vous souhaitez lancer.

![image](/images/blog/defender/tuto/defender_how_to_launch_attack_simulation_emails_002.png)

Définissez un nom et une description.

![image](/images/blog/defender/tuto/defender_how_to_launch_attack_simulation_emails_003.png)

Sélectionnez le style de page utilisé pour l'attaque ... 

![image](/images/blog/defender/tuto/defender_how_to_launch_attack_simulation_emails_004.png)

... et la cible.

![image](/images/blog/defender/tuto/defender_how_to_launch_attack_simulation_emails_005.png)

Assignez la formation qui sera requise pour les personnes qui vont échouer le test ...

![image](/images/blog/defender/tuto/defender_how_to_launch_attack_simulation_emails_006.png)

... et la page finale du test.

![image](/images/blog/defender/tuto/defender_how_to_launch_attack_simulation_emails_007.png)

---

##### Étape 3 : Recevoir le courriel
Les utilisateurs ciblés par la campagne vont recevoir un courriel d'attaque factice. Ils ne seront pas au courant qu'il s'agit d'un test.

![image](/images/blog/defender/tuto/defender_how_to_launch_attack_simulation_emails_008.png)

---

##### Étape 4 : Cliquer sur le lien de phishing
Le courriel contient un lien malicieux. Cliquez dessus pour simuler une action de phishing. Le lien redirige vers une fausse page Microsoft qui propose de s'authentifier. Entrez vos informations de connexion Microsoft.

![image](/images/blog/defender/tuto/defender_how_to_launch_attack_simulation_emails_009.png)

La connexion vous redirige automatiquement vers la page d'alerte de la campagne. Votre compte est *<u>virtuellement compromis</u>*.

![image](/images/blog/defender/tuto/defender_how_to_launch_attack_simulation_emails_010.png)

La formation va être proposée pour renforcer les compétences de l'utilisateur.

![image](/images/blog/defender/tuto/defender_how_to_launch_attack_simulation_emails_011.png)

---

##### Étape 4 bis : Signaler le courriel
Le but de cette campagne est de forcer les utilisateurs à détecter les (vrais) courriels de phishing et de les signaler.

Cliquez sur *<u>Report</u>*, et sur *<u>Report phishing</u>* pour signaler le courriel.

![image](/images/blog/defender/tuto/defender_how_to_launch_attack_simulation_emails_012.png)

---

##### Étape 5 : Analyser les résultats
Depuis le Microsoft Defender Portal, le résultat de la campagne est disponible avec les statistiques.

![image](/images/blog/defender/tuto/defender_how_to_launch_attack_simulation_emails_013.png)

On voit ici les actions réalisées par les 2 utilisateurs.

![image](/images/blog/defender/tuto/defender_how_to_launch_attack_simulation_emails_014.png)

---

##### Conclusion
Vous savez maintenant comment lancer une simulation d'attaque courriels avec Defender.

---

##### Sources
[Microsoft Learn - Simulation d’attaque](https://learn.microsoft.com/fr-ca/defender-office-365/attack-simulation-training-get-started)

---


Avez-vous apprécié cet article ? Vous avez des questions, commentaires ou suggestions, n’hésitez pas à m'envoyer un message depuis le formulaire de contact.

N'oubliez pas de nous suivre et de partager cet article.