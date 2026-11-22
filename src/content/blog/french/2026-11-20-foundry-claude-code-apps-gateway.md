---
title: "Claude Code sur Foundry avec la Claude apps gateway"
meta_title: ""
description: ""
date: 2026-11-20T10:00:00-05:00
image: "/images/blog/foundry/foundry_claude_code_apps_gateway_thumbnail.png"
categories: ["Foundry"]
author: "Maxime Hiez"
tags: ["Claude", "IA", "Agentique"]
draft: false
---
---

##### Introduction
Faire passer *Claude Code* par sa propre infrastructure *Azure* est possible : *Techcommunity* l'a montré, via *Claude apps gateway*, la passerelle d'Anthropic, avec *Microsoft Foundry* comme source d'inférence. Il décrit aussi un déploiement sur *Azure Container Apps* avec une console d'administration, mais celui-ci vient d'un exemple open source, pas d'un produit. Aucun statut (Preview ou disponibilité générale), prix ou licence n'est indiqué dans la documentation, et aucun identifiant du *Message Center* ou de feuille de route ne s'applique.

---

##### Ce que fait la Claude apps gateway
La passerelle est un produit d'Anthropic, un serveur intégré au binaire de *Claude Code* et testé avec chaque version. Elle apporte :
- La connexion par SSO (OIDC), avec *Microsoft Entra ID* parmi les fournisseurs listés
- L'accès aux modèles et les paramètres gérés par groupe
- Des plafonds de dépenses et une télémétrie OTLP
- Le routage vers plusieurs fournisseurs en amont (dont *Microsoft Foundry*), avec basculement

![image](/images/blog/foundry/foundry_claude_code_apps_gateway_001.png)

Pour *Foundry*, l'option recommandée, *use_azure_ad: true*, passe par *DefaultAzureCredential*, donc par une identité managée. L'identité de la passerelle doit détenir le rôle *Foundry User* ou *Cognitive Services User* sur la ressource *Foundry*.

Anthropic la destine aux organisations qui doivent faire passer l'inférence par leur propre cloud, par exemple pour la résidence des données. Sinon, *Claude Enterprise* peut mieux convenir.

---

##### Le déploiement sur Azure et sa console
Foundry présente un déploiement open source de la passerelle dans *Azure Container Apps*, avec une petite application web, la *UI Console*. Elle gère les plafonds de dépenses, les rôles des développeurs, l'accès aux modèles et la refacturation. Le code est dans le dépôt *claude-apps-gateway-foundry*, licence MIT, hébergé sur un compte GitHub personnel. Son README le décrit comme un exemple fonctionnel pour une infrastructure gérée par le client, pas comme un déploiement de production pris en charge.

Foundry précise :
- L'accès à la console passe par l'authentification de *Container Apps* et exige le rôle *AdminUi.Admin*.
- Les plafonds s'appliquent à l'organisation, à un rôle ou à une personne, par jour, semaine ou mois, et sont vérifiés avant chaque requête.
- La refacturation repose sur cinq étiquettes par personne (département, centre de coût, société, bureau, division), stockées dans *PostgreSQL* et non dans *Entra ID*.

Pour le déployer, il faut être propriétaire (*Owner*) de l'abonnement ou du groupe de ressources, avoir un compte *Foundry* avec les modèles *Claude* déjà déployés (l'installateur ne les crée pas) et pouvoir inscrire des applications *Entra*. Une étape demande *Privileged Role Administrator* ou *Global Administrator*, pour accorder des permissions *Microsoft Graph* à la console.

Dans la topologie de test de l'exemple, la passerelle a une adresse publique (connexion *Entra*, plage IP facultative) et les développeurs passent par un profil dédié, car la connexion intégrée de *Claude Code* exige une adresse privée. Un tutoriel du dépôt couvre une passerelle sans point d'accès public.

---

##### Ce que l'administrateur doit savoir
La documentation d'Anthropic et Foundry posent plusieurs limites :
- <u>Version</u> : *Claude Code* 2.1.195 ou plus récent sur le serveur de la passerelle et sur chaque poste de développeur
- <u>Identité</u> : OIDC seulement (ni SAML ni LDAP), un seul émetteur par passerelle
- <u>Base de données</u> : *PostgreSQL* 11 ou plus récent est requis
- <u>Serveur</u> : Linux seulement (macOS pour le développement local), pas de Windows
- <u>Réseau</u> : HTTPS et une adresse privée. *Claude Code* refuse une passerelle dont le nom résout vers une adresse IP publique
- <u>Automatisation</u> : Aucun flux de jeton de service sans surveillance, donc les pipelines CI ne peuvent pas utiliser la passerelle
- <u>Attribution</u> : *Foundry* voit chaque requête venir de l'unique identité managée de la passerelle, l'attribution par personne n'existe que dans les enregistrements de la passerelle et la refacturation de la console

L'exigence d'une adresse privée est une protection : la passerelle peut pousser des paramètres, dont des hooks qui exécutent des commandes sur les postes des développeurs. Elle doit donc rester interne.

Les plafonds de dépenses se règlent par organisation, groupe ou utilisateur, par jour, semaine ou mois, via l'API d'administration. Les montants sont des estimations en USD, *"un disjoncteur plutôt qu'une facture"* ; pour la facturation, les rapports d'utilisation du fournisseur font foi. Si *PostgreSQL* est injoignable, l'application des plafonds s'ouvre par défaut, sauf avec *enforcement.fail_closed_on_error: true*.

L'interface d'administration d'Anthropic se limite aux plafonds de dépenses, dans *Claude Desktop* 4.23118.0 ou plus récent. Le reste passe par le fichier YAML, avec redéploiement.

Une connexion par la passerelle remplace celle de *Claude for Teams* ou *Enterprise* : les sessions ne récupèrent pas les paramètres gérés de la console d'administration de claude.ai, et SCIM comme *Claude Code* sur le web et le mobile sont absents.

---

##### Conclusion
La passerelle est utile à une organisation qui doit garder l'inférence dans son cloud et contrôler l'accès aux modèles et les coûts par groupe (côté *Foundry*, tout passe par une seule identité), avec ses contraintes : Linux, PostgreSQL, OIDC et réseau privé. Pour un simple accès à *Claude* via *Foundry*, la connexion directe par *Entra ID* (identifiants *Azure CLI*, *CLAUDE_CODE_USE_FOUNDRY=1*) suffit et évite d'exploiter un serveur. Le déploiement *Container Apps* et sa console sont un exemple à lire et à tester dans un lab, pas une base de production : le statut de la passerelle, son prix et son éventuelle licence restent à confirmer auprès d'Anthropic avant tout projet.

---

##### Sources
[Microsoft - Techcommunity](https://techcommunity.microsoft.com/t5/microsoft-foundry-blog/claude-code-on-microsoft-foundry-with-claude-apps-gateway-and-ui/ba-p/4574066)

[Microsoft Learn - Configurer Claude Code pour Microsoft Foundry](https://learn.microsoft.com/fr-ca/azure/foundry/foundry-models/how-to/configure-claude-code)

[Anthropic - Claude apps gateway](https://code.claude.com/docs/en/claude-apps-gateway)

[Anthropic - Déploiement et exploitation de la passerelle](https://code.claude.com/docs/en/claude-apps-gateway-deploy)

[Anthropic - Référence de configuration de la passerelle](https://code.claude.com/docs/en/claude-apps-gateway-config)

[Anthropic - Plafonds de dépenses de la passerelle](https://code.claude.com/docs/en/claude-apps-gateway-spend-limits)

[GitHub - claude-apps-gateway-foundry](https://github.com/naveenneog/claude-apps-gateway-foundry)

---


Avez-vous apprécié cet article ? Vous avez des questions, commentaires ou suggestions, n'hésitez pas à m'envoyer un message depuis le formulaire de contact.

N'oubliez pas de nous suivre et de partager cet article.