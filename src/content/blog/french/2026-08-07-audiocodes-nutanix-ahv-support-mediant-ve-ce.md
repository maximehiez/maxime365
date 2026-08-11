---
title: "Support de Nutanix AHV pour les SBC Audiocodes Mediant VE/CE"
meta_title: ""
description: ""
date: 2026-08-07T10:00:00-05:00
image: "/images/blog/sbc/sbc_audiocodes_nutanix_ahv_support_mediant_ve_ce_thumbnail.png"
categories: ["Audiocodes"]
author: "Maxime Hiez"
tags: ["Téléphonie", "Direct Routing", "SBC", "Virtualisation", "LTS", "Nutanix"]
draft: false
---
---

##### Introduction
Jusqu'ici, déployer un *SBC* *Audiocodes* virtualisé imposait un choix restreint d'hyperviseurs : *VMware*, *KVM* / *OpenStack* ou *Hyper-V*. Les organisations dont l'infrastructure repose sur *Nutanix* devaient donc maintenir une plateforme distincte pour leur téléphonie, ou renoncer à la virtualiser sur leur socle principal. La version *7.40A.605.092*, publiée le 18 Juin 2026 dans la branche *Long-Term Support*, ajoute le support de *Nutanix AHV* pour les *Mediant VE* et *Mediant CE*.

Voir l'article sur la nouvelle branche LTS 7.40A.600 [ICI](https://maxime.hiez.ca/blog/2026-04-15-audiocodes-new-lts-version-7-40-600-for-sbc).

---

##### Ce qu'apporte le support de Nutanix
Audiocodes prend désormais en charge le déploiement de ses SBC Mediant VE et CE comme appliance virtuelle sur une infrastructure Nutanix, en s'appuyant sur l'hyperviseur *AHV* (*Acropolis Hypervisor*).

Les éléments annoncés sont les suivants :
- <u>Déploiement certifié</u> : Le SBC est validé par Audiocodes sur Nutanix AHV, et non simplement toléré.
- <u>Installation par image</u> : Le déploiement se fait via une image de machine virtuelle au format *OVA* ou *ISO*.
- <u>Haute disponibilité</u> : Les mécanismes de haute disponibilité et de redondance sont pris en charge.
- <u>Licences inchangées</u> : Le modèle de licence et les outils de gestion existants restent compatibles, sans référence spécifique à Nutanix.

Le point important est l'absence de compromis fonctionnel. La sécurité, l'interopérabilité et les services média sont identiques à ceux des autres plateformes supportées. Dans les tableaux de capacité des notes de version, Nutanix apparaît sous l'entrée *KVM / Nutanix*, aux côtés de VMware, KVM / OpenStack et Hyper-V, ce qui confirme qu'il s'agit d'une plateforme de premier rang et non d'un mode dégradé.

---

##### Les autres nouveautés de la version 7.40A.605.092
Le support de Nutanix n'est pas la seule nouveauté de cette livraison :
- Connectivité fibre 8 ports haute performance pour le *Mediant 9080C*
- Nouveau composant matériel pour le *Mediant 800C* avec 4 PRI
- Réseau *SR-IOV* haute performance avec le pilote *Mellanox*
- Nouveau champ SDR pour la durée de sonnerie
- Durée maximale configurable pour le test des lignes *FXS*
- Stockage dans le cloud des fichiers de *Debug Recording* et de journaux de débogage
- Traitement amélioré des *Reason Phrase* des réponses SIP
- Taille configurable du tampon de réponse HTTP pour les services web distants

---

##### Prérequis avant de mettre à niveau
La montée de version impose de vérifier trois compatibilités côté outillage.

**<u>One Voice Operations Center (OVOC)</u>**

Cette version du SBC est compatible et recommandée avec *OVOC* 8.4 (8.4.591, ou 8.4.3068 et supérieur). Elle peut aussi être gérée par OVOC 8.2 (8.2.3122 ou supérieur), avec un alignement fonctionnel partiel. Dans tous les cas, l'OVOC doit être mis à niveau avant les équipements.
<br/>

**<u>Pool de licences centralisé</u>**

Les organisations qui exploitent un pool de licences centralisé via OVOC, qu'il soit *Fixed*, *Floating* ou *Flex*, doivent impérativement mettre à jour l'OVOC en premier. Pour les sessions *WebRTC* et *SIPREC* en pool Floating ou Flex, la version OVOC 8.0.3000 ou supérieure est requise.
<br/>

**<u>Stack Manager</u>**

Le déploiement des Mediant CE nécessite *Stack Manager* en version 4.1.0 ou supérieure.

<Notice type="warning">Mettre à niveau un SBC vers cette version avant son OVOC retire les équipements 7.4 du pool de licences centralisé. L'ordre des opérations est donc contraignant : OVOC d'abord, équipements ensuite.</Notice>

---

##### Impacts pour Teams Direct Routing
Pour un environnement *Microsoft Teams Direct Routing* adossé à des SBC Audiocodes, cette version ouvre une possibilité de consolidation. Une infrastructure Nutanix déjà en place peut désormais héberger les SBC, ce qui supprime la plateforme de virtualisation dédiée que beaucoup maintenaient uniquement pour la téléphonie.

Deux réflexes restent nécessaires :
1. D'abord, valider les capacités attendues dans les tableaux de la documentation, puisque le dimensionnement en vCPU et en mémoire diffère selon l'hyperviseur.
2. Ensuite, traiter cette bascule comme une migration de plateforme et non comme une simple mise à jour, avec un SBC de test avant la production.

---

##### Conclusion
Le support de Nutanix AHV comble un manque réel pour les organisations dont le socle de virtualisation n'est ni VMware ni Hyper-V. Le fait que cette nouveauté arrive dans la branche LTS, et non dans une version *Latest Release*, est un bon signal : elle est destinée à des environnements de production. La contrainte principale n'est pas technique mais séquentielle, avec l'ordre de mise à niveau OVOC puis équipements, sous peine de sortir les SBC du pool de licences centralisé.

---

##### Sources
[Audiocodes - Notes de version](https://www.audiocodes.com/media/3gtbnimo/sbc-gateway-release-notes-for-long-term-support-lts-versions-740a600.pdf)

---


Avez-vous apprécié cet article ? Vous avez des questions, commentaires ou suggestions, n'hésitez pas à m'envoyer un message depuis le formulaire de contact.

N'oubliez pas de nous suivre et de partager cet article.