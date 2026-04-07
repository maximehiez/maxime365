---
title: "Comment sécuriser vos courriels avec les Sensitivity Labels"
meta_title: ""
description: ""
date: 2026-04-06T10:00:00-05:00
image: "/images/blog/purview/tuto/purview_how_to_secure_emails_with_sensitivity_labels_for_emails_thumbnail.png"
categories: ["Purview", "Tutoriel"]
author: "Maxime Hiez"
tags: ["Protection de données", "Gouvernance", "Sensitivity Labels", "Sécurité"]
draft: false
---
---

##### Introduction
Je vous ai montré la semaine passée comment créer des *Sensitivity Labels* afin de sécuriser vos courriels sans vous expliquer comment est-ce qu'ils fonctionnent. Je vous parle aujourd'hui de comment les utiliser et quels résultats sont obtenus lorsqu'on les applique sur nos courriels avant l'envoi.

Voir l'article de la semaine passée [ICI](https://maxime.hiez.ca/blog/2026-03-30-purview-how-to-create-sensitivity-labels_for_emails).

---

##### Prérequis
**<u>Licences nécessaires</u>**
- *Microsoft 365 Business Premium*, *Microsoft 365 E5*.
- *Microsoft Purview Suite* en complément avec une licence autre (*E3*, *Business*, ...).

---

##### Étape 1 : Appliquer les Sensitivity Labels aux courriels
Faites un 1er courriel et appliquez lui le Sensitivity Label *<u>Advanced encryption</u>*. Pour mon exemple, j'envoie du contenu sensible (numéro de sécurité sociale) à une boite *Gmail* et un utilisateur *Microsoft 365*, deux personnes externes à mon organisation.

![image](/images/blog/purview/tuto/purview_how_to_secure_emails_with_sensitivity_labels_for_emails_001.png)

On peut voir en-tête que le Sensitivity Label est appliqué.

![image](/images/blog/purview/tuto/purview_how_to_secure_emails_with_sensitivity_labels_for_emails_002.png)

Faites un 2ème courriel et appliquez lui le Sensitivity Label *<u>Basic encryption</u>*.

J'envoie cette fois ci du contenu moins sensible (un numéro de téléphone) aux deux mêmes personnes.

![image](/images/blog/purview/tuto/purview_how_to_secure_emails_with_sensitivity_labels_for_emails_003.png)

---

##### Étape 2 : Valider le résultat sur Outlook
L'utilisateur Microsoft 365 reçoit les 2 courriels avec une icône de cadenas.

Celui avec le Sensitivity Label *<u>Advanced encryption</u>* contenant le numéro de sécurité sociale, indique qu'il est chiffré et que le transfert est désactivé (on voit bien l'icône grisée).

![image](/images/blog/purview/tuto/purview_how_to_secure_emails_with_sensitivity_labels_for_emails_004.png)

Celui avec le Sensitivity Label *<u>Basic encryption</u>* contenant le numéro de téléphone, indique qu'il est chiffré. Le transfert est permis sur celui-ci.

![image](/images/blog/purview/tuto/purview_how_to_secure_emails_with_sensitivity_labels_for_emails_005.png)

---

##### Étape 3 : Valider le résultat sur Gmail
L'utilisateur Gmail 365 reçoit les mêmes 2 courriels.

![image](/images/blog/purview/tuto/purview_how_to_secure_emails_with_sensitivity_labels_for_emails_006.png)

Celui avec le Sensitivity Label *<u>Advanced encryption</u>* indique qu'il est protégé et un bouton *Read the message* est affiché pour accéder au message.

![image](/images/blog/purview/tuto/purview_how_to_secure_emails_with_sensitivity_labels_for_emails_007.png)

Puisque Gmail n'est pas un système natif Microsoft, l'utilisateur doit se connecter. Ici, je choisis de le faire via un *One-time passcode*.

![image](/images/blog/purview/tuto/purview_how_to_secure_emails_with_sensitivity_labels_for_emails_008.png)

Un code à 8 chiffres est envoyé ...

![image](/images/blog/purview/tuto/purview_how_to_secure_emails_with_sensitivity_labels_for_emails_009.png)

... et je l'utilise pour me connecter.

![image](/images/blog/purview/tuto/purview_how_to_secure_emails_with_sensitivity_labels_for_emails_010.png)

J'accède maintenant au courriel chiffré, et comme pour l'utilisateur Microsoft 365, il est chiffré et le transfert est désactivé.

![image](/images/blog/purview/tuto/purview_how_to_secure_emails_with_sensitivity_labels_for_emails_011.png)

En suivant la même logique, j'accède au 2èe courriel. Il est chiffré et le transfert est permis.

![image](/images/blog/purview/tuto/purview_how_to_secure_emails_with_sensitivity_labels_for_emails_012.png)

---

##### Allons plus loin
L'application d'un Sensitivity Label dans un courriel permet de sécuriser son contenu lors de l'envoi, mais que ce passe-t'il si je veux chiffrer un document existant dans *OneDrive* ou *SharePoint* ? Ou même appliquer d'autres types de sécurité avec *Copilot* ?

Il y a encore plusieurs scénarios avec lesquels on peut travailler. Je vous ferai plusieurs articles prochainement pour vous démontrer ce qu'il est possible de faire.

---

##### Conclusion
Vous savez maintenant comment sécuriser vos courriels avec les Sensitivity Labels dans Purview.

---

##### Sources
[Microsoft Learn - Sensitivity Labels](https://learn.microsoft.com/fr-ca/purview/sensitivity-labels)

---


Avez-vous apprécié cet article ? Vous avez des questions, commentaires ou suggestions, n’hésitez pas à m'envoyer un message depuis le formulaire de contact.

N'oubliez pas de nous suivre et de partager cet article.