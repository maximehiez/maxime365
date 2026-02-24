---
title: "Comment valider les nouveaux certificats Teams Direct Routing"
meta_title: ""
description: ""
date: 2026-02-24T10:00:00-05:00
image: "/images/blog/sbc/tuto/sbc_audiocodes_how_to_validate_new_certificates_teams_direct_routing_thumbnail.png"
categories: ["Audiocodes", "Teams", "Tutoriel"]
author: "Maxime Hiez"
tags: ["Téléphonie", "Direct Routing", "SBC", "Certificat", "DigiCert"]
draft: false
---
---

##### Introduction
En Décembre 2025, Microsoft publiait le message *MC1213773* dans le *Message Center* du *Microsoft 365 Admin Center* et expliquait que des nouveaux certificats étaient nécessaires pour maintenir le service de téléphonie Teams *Direct Routing*. Microsoft commencera à mettre en œuvre ces changements en Mars 2026, et sans ces nouveaux certificats, le service sera interrompu.

Voir l'article de Décembre 2025 [ICI](https://maxime.hiez.ca/blog/2025-12-15-teams-certificate-changes-for-teams-direct-routing).

---

##### Prérequis
**<u>Rôle d’administrateur</u>**
- Un compte administrateur pour accéder au SBC Audiocodes.

**<u>Télécharger les certificats</u>**
- Le certificat DigiCert Global Root CA est téléchargeable via https://cacerts.digicert.com/DigiCertGlobalRootCA.crt.pem.
- Le certificat DigiCert Global Root G2 est téléchargeable via https://cacerts.digicert.com/DigiCertGlobalRootG2.crt.pem.
- Le certificat DigiCert Global Root G3 est téléchargeable via https://cacerts.digicert.com/DigiCertGlobalRootG3.crt.pem.
- Le certificat DigiCert TLS ECC P384 Root G5 est téléchargeable via https://cacerts.digicert.com/DigiCertTLSECCP384RootG5.crt.pem.
- Le certificat DigiCert TLS RSA 4096 Root G5 est téléchargeable via https://cacerts.digicert.com/DigiCertTLSRSA4096RootG5.crt.pem.
- Le certificat Microsoft ECC Root Certificate Authority 2017 est téléchargeable via https://www.microsoft.com/pkiops/certs/Microsoft%20ECC%20Root%20Certificate%20Authority%202017.crt.
- Le certificat Microsoft RSA Root Certificate Authority 2017 est téléchargeable via https://www.microsoft.com/pkiops/certs/Microsoft%20RSA%20Root%20Certificate%20Authority%202017.crt.

**<u>Autres</u>**
- Planifier l'installation en heures fermées.

---

##### Étape 1 : Se connecter au SBC
Connectez-vous au SBC en ouvrant votre navigateur web sur https://VOTRE_ADRESSE_IP.

![image](/images/blog/sbc/tuto/sbc_audiocodes_how_to_validate_new_certificates_teams_direct_routing_001.png)

---

##### Étape 2 : Importer les certificats
J'avais déjà couvert comment faire l'installation du certificat *DigiCert Global Root G2* dans l'article de Décembre 2025, vous pouvez vous y référer.

Vous devriez passer d'une liste similaire à celle ci-dessous ...

![image](/images/blog/sbc/tuto/sbc_audiocodes_how_to_validate_new_certificates_teams_direct_routing_002.png)

... à une liste contenant les nouveaux certificats.

![image](/images/blog/sbc/tuto/sbc_audiocodes_how_to_validate_new_certificates_teams_direct_routing_003.png)

À noter que j'ai converti les certificats *Microsoft ECC Root Certificate Authority 2017* et *Microsoft RSA Root Certificate Authority 2017* de *CRT* à *PEM* pour pouvoir les importer dans mon SBC.

<Notice type="info">L'import ne nécessite pas de redémarrage mais je recommande de le faire en heure fermée au cas où !</Notice>

---

##### Étape 3 : Activer le proxy de test
Cliquez sur *<u>Setup</u>*, *<u>Signaling & Media</u>*, puis sur *<u>Core Entities</u>*, et *<u>Proxy sets</u>*.

Dans le proxy *Teams*, ajouter le proxy de test **sip.g1.pstnhub.microsoft.com:5061**.

![image](/images/blog/sbc/tuto/sbc_audiocodes_how_to_validate_new_certificates_teams_direct_routing_004.png)

---

##### Étape 4 : Valider la bonne connexion
On peut voir dans la capture *Syslog* de mon SBC *Audiocodes* que le nouveau proxy résout sur l'adresse IP *52.112.39.0* et que mes *SIP Options* sont répondues par un *200 OK* de la part de Microsoft.

![image](/images/blog/sbc/tuto/sbc_audiocodes_how_to_validate_new_certificates_teams_direct_routing_005.png)

Et que les *SIP Options* envoyées par Microsoft sont répondues par un *200 OK* de mon SBC.

![image](/images/blog/sbc/tuto/sbc_audiocodes_how_to_validate_new_certificates_teams_direct_routing_006.png)

---

##### Conclusion
Vous savez maintenant comment valider la bonne installation des nouveaux certificats pour la téléphonie Teams Direct Routing dans un SBC Audiocodes.

---

##### Sources
[Microsoft Learn - Nouveaux certificats requis](https://learn.microsoft.com/fr-ca/microsoftteams/direct-routing-whats-new#update-on-upcoming-certificate-changes-updated-december-12-2025)

[Microsoft Learn - Détails de l’autorité de certification Azure](https://learn.microsoft.com/fr-ca/azure/security/fundamentals/azure-certificate-authority-details?tabs=root-and-subordinate-cas-list)

[Message Center - MC1213773](https://admin.cloud.microsoft/#/MessageCenter/:/messages/MC1213773)

---


Avez-vous apprécié cet article ? Vous avez des questions, commentaires ou suggestions, n’hésitez pas à m'envoyer un message depuis le formulaire de contact.

N'oubliez pas de nous suivre et de partager cet article.