---
title: "Claude Opus 4.8 disponible dans Microsoft Foundry"
meta_title: ""
description: ""
date: 2026-06-02T10:00:00-05:00
image: "/images/blog/foundry/foundry_claude_opus_4_8_available_thumbnail.png"
categories: ["Foundry"]
author: "Maxime Hiez"
tags: ["IA", "Claude", "Agentique"]
draft: false
---
---

##### Introduction
*Microsoft* a rendu *Claude Opus 4.8* disponible dans *Microsoft Foundry* en preview, quelques jours après son lancement général par *Anthropic* le 28 Mai 2026. Le modèle est accessible via déploiement *Global Standard* dans deux régions *Azure* et s'intègre à l'écosystème Foundry existant via l'*API* *Claude Messages*. L'accès est réservé aux abonnements *Enterprise* et *MCA-E*.

Voir l'article sur Claude Opus 4.8 [ICI](https://maxime.hiez.ca/blog/2026-05-28-ai-anthropic-introducing-claude-opus-4-8).

---

##### Déploiement et régions
Le modèle est identifié par l'identifiant *claude-opus-4-8* dans Foundry. Il est déployé via le type *Global Standard* et est disponible dans les régions suivantes :
- East US 2
- Sweden Central

Le projet ou hub Foundry doit obligatoirement se trouver dans l'une de ces deux régions pour que le déploiement soit possible. La fenêtre de contexte est d'1M de tokens, avec une sortie maximale de 128K tokens. La procédure de déploiement est identique aux autres modèles Claude disponibles dans Foundry : *Models from partners* dans le portail [ai.azure.com](https://ai.azure.com), puis sélection du modèle et configuration du déploiement.

---

##### Conditions d'accès et quotas
L'accès aux modèles Claude dans Foundry est réservé aux abonnements Enterprise et MCA-E. Les autres types d'abonnements se voient attribuer un quota par défaut de 0 RPM et 0 TPM, ce qui rend le modèle inutilisable sans une demande d'augmentation explicite.

Pour les abonnements éligibles, les limites par défaut sont :
- 2000 requêtes par minute (RPM)
- 2 000 000 tokens par minute (TPM)

Un formulaire de demande d'augmentation de quota est disponible via le portail Azure pour les organisations qui dépassent ces limites.

<Notice type="info">Les abonnements qui ne sont pas de type Enterprise ou MCA-E ont un quota de 0 par défaut. Vérifier le type d'abonnement avant de planifier un déploiement en production.</Notice>

---

##### Pensée adaptative et contrôle d'effort
Opus 4.8 introduit dans Foundry la *pensée adaptative* (*adaptive thinking*), une évolution du mode de réflexion étendue (*extended thinking*). Contrairement aux versions précédentes qui supportaient les types *"enabled"*, *"disabled"* et *"adaptive"* pour le paramètre *"thinking"*, Opus 4.8 ne supporte que *"adaptive"* et *"disabled"*. Le modèle décide lui-même de l'intensité de réflexion nécessaire selon la complexité de la requête.

Le paramètre *"effort"* permet de contrôler le compromis qualité/coût. Opus 4.8 supporte les niveaux suivants :
- *"low"*, *"medium"*, *"high"*, *"max"*
- *"xhigh"* (équivalent à *"max"*, conservé par rétrocompatibilité)

Ces deux paramètres peuvent être utilisés conjointement ou séparément. Pour les équipes qui migrent depuis Opus 4.7, un guide de migration est disponible sur la documentation Anthropic.

---

##### Conclusion
La disponibilité de Claude Opus 4.8 dans Microsoft Foundry consolide l'offre de modèles tiers de pointe accessibles via l'écosystème Azure. La restriction aux abonnements Enterprise et MCA-E reste un point de friction pour les équipes qui opèrent sur des abonnements standard. Pour les organisations déjà déployées sur Opus 4.7 dans Foundry, la migration vers Opus 4.8 ne nécessite pas de changement d'infrastructure, mais une validation des comportements liés à la pensée adaptative est recommandée avant le passage en production.

---

##### Sources
[Microsoft - Techcommunity](https://techcommunity.microsoft.com/blog/azure-ai-foundry-blog/claude-opus-4-8-is-now-available-in-microsoft-foundry/4523367)

[Microsoft Learn - Déployer les modèles Claude dans Foundry](https://learn.microsoft.com/fr-ca/azure/foundry/foundry-models/how-to/use-foundry-models-claude)

[Microsoft Learn - Disponibilité régionale des modèles](https://learn.microsoft.com/fr-ca/azure/foundry-classic/how-to/deploy-models-serverless-availability)

---


Avez-vous apprécié cet article ? Vous avez des questions, commentaires ou suggestions, n'hésitez pas à m'envoyer un message depuis le formulaire de contact.

N'oubliez pas de nous suivre et de partager cet article.