---
title: "Comment télécharger les appels enregistrés Cisco Webex via API"
meta_title: ""
description: ""
date: 2026-03-17T10:00:00-05:00
image: "/images/blog/cisco/tuto/cisco_how_to_download_call_recordings_cisco_webex_via_api_thumbnail.png"
categories: ["Cisco", "Tutoriel"]
author: "Maxime Hiez"
tags: ["Téléphonie", "Enregistrement", "Webex", "Contact Center", "API", "Postman"]
draft: false
---
---

##### Introduction
*Cisco Webex Contact Center* offre des fonctionnalités avancées d’enregistrement des appels, essentielles pour la qualité, la conformité et l’amélioration continue des services. Les superviseurs peuvent facilement écouter les appels depuis le client web, analyser les interactions et accompagner les agents. Cependant, une limitation importante demeure, il n’est pas possible de télécharger directement les enregistrements audio depuis l’interface du client. Cette fonctionnalité, pourtant souvent demandée pour des besoins d’audit, d’archivage externe ou d’intégration avec d’autres outils, n’est pas encore disponible nativement.

Cisco met à disposition des *APIs* qui permettent de contourner cette limitation et de les télécharger de façon fiable et sécurisée.

---

##### Prérequis
**<u>Enregistrement d'appels Cisco Webex Contact Center</u>**
- L'enregistrement d'appels configuré dans Cisco Webex Contact Center.

**<u>Rôle d’administrateur</u>**
- Un compte Webex Control Hub avec le rôle *Full admin* pour accéder au portail Webex for Developers.

**<u>Autres</u>**
- Avoir l'application Postman ainsi qu'un compte.

---

##### Étape 1 : Se connecter au portail Webex for Developers
Connectez-vous au portail Webex for Developers en ouvrant votre navigateur web sur https://developer.webex.com.

---

##### Étape 2 : Créer une intégration API
Dans le menu *My Webex Apps*, créez une nouvelle intégration API. Définissez un nom, une description et une icône.

Saisissez la valeur *https://oauth.pstmn.io/v1/callback* dans l'attribut *Redirect URI(s)*, et cochez les 4 cases *cjp:config*, *cjp:config_write*, *cjp:config_read* et *cjp:user*.

![image](/images/blog/cisco/tuto/cisco_how_to_download_call_recordings_cisco_webex_via_api_001.png)

Sauvegardez les valeurs *Client ID*, *Client Secret* et *OAuth Authorization URL*.

![image](/images/blog/cisco/tuto/cisco_how_to_download_call_recordings_cisco_webex_via_api_002.png)

---

##### Étape 3 : Créer un token via Postman
Ouvrez l'application *Postman* et créez un nouveau token. Définissez un nom et choisissez le type d'authentification *OAuth 2.0*.

Collez les valeurs *Client ID*, *Client Secret* et *Scope* copiées dans l'étape précédente.

Saisissez les valeurs *https://oauth.pstmn.io/v1/callback*, *https://webexapis.com/v1/authorize* et *https://webexapis.com/v1/access_token* dans les attributs *Callback URL*, *Auth URL* et *Access token URL*.

![image](/images/blog/cisco/tuto/cisco_how_to_download_call_recordings_cisco_webex_via_api_003.png)

Si toutes les informations sont bien entrées, Postman va envoyer un popup d'authentification pour se connecter à Cisco Webex puis valider le token.

![image](/images/blog/cisco/tuto/cisco_how_to_download_call_recordings_cisco_webex_via_api_004.png)

---

##### Étape 4 : Envoyer une requête POST
Créez une nouvelle requête et choisissez le type *POST*, et saisissez la valeur *https://api.wxcc-ca1.cisco.com/v1/captures/query*.

Entrez la requête ci-dessous :
```powershell
{
    "query": {
        "orgId": "11713692-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
        "urlExpiration": 30,
        "taskIds": [
            "968c7c1b-5c26-XXXX-XXXX-XXXXXXXXXXXX"          ],
        "includeSegments": false
    }
}
```

*orgId* étant l'ID du tenant Cisco Webex et *taskIds* l'ID de l'appel enregistré.

Cliquez sur *Send* pour obtenir le *filePath* permettant de télécharger l'enregistrement.

![image](/images/blog/cisco/tuto/cisco_how_to_download_call_recordings_cisco_webex_via_api_005.png)

Vous pouvez télécharger le fichier localement.

![image](/images/blog/cisco/tuto/cisco_how_to_download_call_recordings_cisco_webex_via_api_006.png)

---

##### Conclusion
Vous savez maintenant comment télécharger les appels enregistrés via API Cisco Webex.

---

##### Sources
[Cisco - Webex for Developers](https://developer.webex.com)

[Postman](https://www.postman.com/downloads)

---


Avez-vous apprécié cet article ? Vous avez des questions, commentaires ou suggestions, n’hésitez pas à m'envoyer un message depuis le formulaire de contact.

N'oubliez pas de nous suivre et de partager cet article.