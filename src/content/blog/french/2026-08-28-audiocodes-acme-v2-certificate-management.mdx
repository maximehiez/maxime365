---
title: "Support d'ACMEv2 pour les certificats sur les SBC Audiocodes"
meta_title: ""
description: ""
date: 2026-08-28T10:00:00-05:00
image: "/images/blog/sbc/sbc_audiocodes_acme_v2_certificate_management_thumbnail.png"
categories: ["Audiocodes"]
author: "Maxime Hiez"
tags: ["Téléphonie", "Direct Routing", "SBC", "Certificat", "ACME"]
draft: false
---
---

##### Introduction
Le renouvellement du certificat TLS d'un *SBC* est une opération manuelle que tout le monde connaît : générer la demande, la faire signer, importer le certificat dans le bon *TLS Context*, redémarrer le service. Une fois par an, l'opération passe, mais elle deviendra intenable quand la durée de validité des certificats publics tombera à 46 jours, contre 199 jours aujourd'hui.

*Audiocodes* introduit le support du protocole *ACMEv2* dans la version *7.60A.300.042*, publiée le 18 Août 2026 dans la branche *Latest Release*. Le SBC devient un client ACME et prend en charge lui-même le cycle de vie de ses certificats.

---

##### Ce que le SBC prend en charge
Le protocole ACME automatise l'ensemble des échanges avec l'autorité de certification. Le SBC couvre désormais les étapes suivantes :
- <u>Enregistrement</u> : Création du compte auprès de l'autorité de certification
- <u>Validation de domaine</u> : Preuve de la propriété du domaine demandé
- <u>Génération et soumission de la CSR</u> : Constitution de la demande de signature et envoi à l'autorité
- <u>Installation du certificat</u> : Mise en place du certificat signé dans le TLS Context associé
- <u>Renouvellement automatique</u> : Renouvellement déclenché avant l'expiration, sans intervention

Chaque configuration ACME est rattachée à un *TLS Context*, ce qui permet de traiter différemment le certificat exposé vers *Microsoft Teams* et celui présenté à l'opérateur SIP. Les autorités prises en charge incluent *Let's Encrypt* et *ZeroSSL*.

---

##### Les limites de cette première version
Deux contraintes méritent d'être connues avant de planifier un déploiement.

**<u>Validation DNS</u>**

*Microsoft Azure DNS* est la seule plateforme DNS officiellement validée pour la validation *DNS-01* dans cette version. D'autres fournisseurs pourront être ajoutés dans les livraisons suivantes, mais une zone hébergée ailleurs n'est pas couverte aujourd'hui.
<br/>

**<u>Plateformes supportées</u>**

La fonctionnalité est disponible sur les *Mediant 800B*, *Mediant 800C*, *Mediant VE* et *Mediant CE*. Les autres modèles de la gamme n'en bénéficient pas dans cette version.

<Notice type="warning">ACMEv2 n'est disponible que dans la branche *Latest Release*, jamais dans la branche *Long-Term Support*. Audiocodes recommande la branche LR uniquement aux déploiements qui ont besoin d'une fonctionnalité récemment introduite. Pour un SBC de production sur LTS, il faut attendre la prochaine branche LTS.</Notice>

---

##### LR ou LTS, le choix à faire
Audiocodes maintient deux branches en parallèle, et cette annonce illustre bien la différence :
- <u>Latest Release</u> : Nouvelles fonctionnalités tous les 4 mois, recommandée uniquement si une fonctionnalité récente est nécessaire
- <u>Long-Term Support</u> : Correctifs de bugs et de sécurité uniquement, nouvelle branche tous les 12 à 15 mois, mises à jour environ tous les deux mois

Concrètement, une organisation qui exploite ses SBC sur la branche LTS 7.40A.600 ne peut pas obtenir ACMEv2 sans changer de branche. La question à trancher n'est donc pas seulement technique, elle porte sur la politique de mise à jour appliquée à la téléphonie.

---

##### Pourquoi cela devient urgent
La réduction progressive de la durée de vie des certificats publics change la nature du problème. À 46 jours de validité, un certificat doit être renouvelé environ huit fois par an. Sur un parc de plusieurs SBC, chacun avec plusieurs TLS Contexts, le renouvellement manuel cesse d'être une tâche annuelle pour devenir un processus permanent, avec le risque d'expiration qui l'accompagne.

Un certificat expiré sur un SBC ne dégrade pas le service, il l'interrompt. Le *Direct Routing* refuse la connexion TLS et tous les appels s'arrêtent. C'est la raison pour laquelle l'automatisation du renouvellement mérite d'être traitée avant que la contrainte ne devienne effective.

---

##### Conclusion
Le support d'ACMEv2 répond à une évolution qui s'imposera à tout le monde, la réduction de la durée de validité des certificats. La restriction à la branche Latest Release et à Azure DNS limite pour l'instant les scénarios de déploiement, mais la direction est claire. Pour les organisations dont les zones DNS sont déjà chez Azure et qui acceptent la branche LR, la fonctionnalité est utilisable dès maintenant. Pour les autres, c'est un sujet à inscrire au plan de la prochaine bascule LTS.

---

##### Sources
[Audiocodes - Product Notice SBC/Gateway 7.60A.300](https://www.audiocodes.com/media/a0ydrley/0595-product-notice-sbc-gateway-software-update-for-latest-release-version-760a300.pdf)

[Audiocodes - Notes de version Latest Release 7.6](https://www.audiocodes.com/media/2fvekju0/sbc-gateway-release-notes-for-latest-release-lr-versions-76.pdf)

---


Avez-vous apprécié cet article ? Vous avez des questions, commentaires ou suggestions, n'hésitez pas à m'envoyer un message depuis le formulaire de contact.

N'oubliez pas de nous suivre et de partager cet article.