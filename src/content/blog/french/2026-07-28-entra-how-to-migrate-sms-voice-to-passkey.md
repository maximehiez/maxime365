---
title: "Comment migrer les utilisateurs SMS et voix vers Passkey"
meta_title: ""
description: ""
date: 2026-07-30T10:00:00-05:00
image: "/images/blog/entra/tuto/entra_how_to_migrate_sms_voice_to_passkey_thumbnail.png"
categories: ["Entra ID", "Tutoriel"]
author: "Maxime Hiez"
tags: ["Passkey", "Mot de passe", "Authenticator", "FIDO2", "MFA", "Sécurité"]
draft: false
---
---

##### Introduction
Dans de nombreux de tenants *Microsoft 365*, le SMS et l'appel vocal restent le dernier filet de sécurité MFA pour une partie des comptes. Ce sont aussi les méthodes les plus fragiles face au *SIM swap*, à l'*interception* et à l'*hameçonnage*. *Microsoft* va donc les retirer de son offre native et faire des *Passkeys*, l'expérience de connexion par défaut. Deux dates structurent toute la migration : le **1er Septembre 2026** pour l'activation automatique, et le **1er Février 2027** pour le retrait effectif.

---

##### Le calendrier du retrait
Le retrait s'étale sur six mois et chaque échéance ouvre une action différente.

| Date                 | Ce qui change                                                                                                           | Action attendue                                                              |
|----------------------|-------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------|
| 1er Août 2026        | L'API et la documentation de l'opt-out temporaire sont publiées                                                         | Décider si le tenant a besoin de décaler l'activation automatique            |
| 1er Septembre 2026   | Les Passkeys deviennent l'expérience par défaut, les utilisateurs SMS et voix sont activés et sollicités à la connexion | Prévenir les utilisateurs et préparer la campagne d'inscription              |
| 18 Septembre 2026    | Les offres des fournisseurs télécom tiers sont publiées dans le *Microsoft Security Store*                              | Évaluer les options si une exception est justifiée                           |
| 30 Octobre 2026      | La sélection et la configuration d'un fournisseur télécom deviennent possibles                                          | Contractualiser et valider avec un groupe pilote                             |
| 1er Février 2027     | Le SMS et l'appel vocal fournis par Microsoft sont retirés d'*Entra ID*                                                 | Avoir basculé tous les comptes vers une méthode résistante à l'hameçonnage   |

Le 1er Septembre 2026, les utilisateurs activés pour le SMS ou la voix seront automatiquement basculés dans un profil autorisant tous les types de Passkeys. La campagne d'inscription du tenant passera en état *Microsoft Managed* et intègrera ces comptes automatiquement. La sollicitation apparaîtra à la prochaine connexion avec MFA, et restera indéfiniment repoussable par défaut.

<Notice type="warning">À partir du 1er Février 2027, les utilisateurs dont la seule méthode MFA est le SMS ou l'appel vocal vont recevoir une demande d'inscription de Passkey bloquante. Il ne sera plus possible de la repousser, et aucun opt-out n'est prévu pour cette échéance.</Notice>

---

##### Prérequis
**<u>Licences nécessaires</u>**
- *Microsoft 365* (toutes les éditions supportant l'authentification moderne).

**<u>Rôle d’administrateur</u>**
- Un compte avec le rôle *Global Reader*, *Authentication Policy Administrator* ou *Security Reader* pour réaliser l'inventaire des comptes concernés.
- Un compte avec le rôle *Administrateur Global* ou *Authentication Policy Administrator* pour modifier les méthodes d'authentification et la campagne d'inscription.

---

##### Étape 1 : Identifier les utilisateurs concernés
La première action consiste à mesurer l'exposition réelle du tenant. Microsoft a publié le script *PowerShell* *<u>Entra SMS Voice Usage Analyzer</u>* qui recense les comptes activés pour le SMS et pour l'appel vocal.

Exécutez le script PowerShell disponible sur la plateforme [GitHub officielle de Microsoft](https://github.com/microsoft/entra-sms-voice-usage-analyzer). Tout résultat différent de zéro signifie que le tenant est dans le périmètre du retrait.

```powershell
.\Get-SmsVoicePolicyUsers.ps1 -TenantId "Lab.onmicrosoft.com"

Registration campaign: Microsoft managed

SMS state: disabled
Voice state: enabled

  Voice scope:
    Include: ALL USERS
    Exclude group: Service Accounts (abc-123-def)

Exported to: .\SmsVoicePolicyTargets_20260730_100000.csv

===== IMPACT SUMMARY =====
  Sep 1, 2026:  Users in SMS/Voice scope auto-enabled for passkeys. Reg campaign set to Microsoft Managed.
                To prevent: move users out of SMS/Voice AMP scope before Sep 1.
  Jan 28, 2027: Microsoft SMS/Voice delivery RETIRED. Migrate to passkeys or configure customer-managed provider.
  Guide: https://aka.ms/passkey-deployment-guide
```

---

##### Étape 2 : Se connecter au Microsoft Entra Admin Center
Connectez-vous au Microsoft Entra Admin Center en ouvrant votre navigateur web sur https://entra.microsoft.com.

---

##### Étape 3 : Créer un groupe de sécurité
Dans le menu de gauche, cliquez sur *<u>Groups</u>*, puis sur *<u>New group</u>* pour créer un groupe de sécurité.

Ajoutez les comptes obtenus avec le script *Entra SMS Voice Usage Analyzer* comme membres. Ce groupe sert de cible à la campagne d'inscription et aux communications et évite de solliciter l'ensemble de l'organisation.

---

##### Étape 4 : Activer Passkey dans le tenant
Voir l'article de Décembre 2025 sur l'activation de Passkey [ICI](https://maxime.hiez.ca/en/blog/2024-12-16-entra-how-to-activate-passkey).

*Entra ID* prend en charge deux familles de Passkeys, et le choix se fait selon le parc :
- <u>Passkeys synchronisées</u> : Stockées dans un gestionnaire d'identifiants de plateforme comme *iCloud Keychain* ou *Google Password Manager*, puis synchronisées entre les appareils de l'utilisateur.
- <u>Passkeys liées à l'appareil</u> : Créées et conservées sur un appareil précis, via *Passkey in Microsoft Authenticator*, *Entra Passkey on Windows* ou une clé matérielle *FIDO2*.

<Notice type="note">Les utilisateurs déjà équipés de Passkeys, de *Windows Hello for Business* ou d'une autre méthode résistante à l'hameçonnage n'ont aucune action à faire.</Notice>

---

##### Étape 5 : Configurer la campagne d'inscription
La campagne d'inscription sollicite l'utilisateur à sa prochaine connexion avec MFA. L'activer avant le 1er Septembre 2026 permet d'étaler la bascule au rythme de l'organisation plutôt que de subir l'activation automatique.

Dans le menu de gauche, cliquez sur *<u>Entra ID</u>*, puis sur *<u>Authentication methods</u>*, et sur *<u>Registration campaign</u>*.

Positionnez *<u>State</u>* sur *<u>Microsoft Managed</u>* et ciblez le groupe de sécurité créé à l'étape 3.

![image](/images/blog/entra/tuto/entra_how_to_migrate_sms_voice_to_passkey_001.png)

---

##### Étape 6 : Traiter les exceptions réglementaires
Certains contextes imposent de conserver un canal télécom hors bande, par exemple une contrainte réglementaire explicite ou un segment d'utilisateurs pour lequel aucune autre méthode n'est exploitable. Ces cas passent par un fournisseur contractualisé directement via le *Microsoft Security Store*.

La démarche est la suivante :
- <u>Documenter le besoin</u> : Identifier le segment d'utilisateurs, la réglementation invoquée et le scénario précis.
- <u>Évaluer les offres</u> : Comparer les fournisseurs disponibles à partir du 18 Septembre 2026 selon les exigences régionales et de conformité.
- <u>Configurer le fournisseur</u> : La sélection dans le Security Store est ouverte à partir du 30 Octobre 2026.
- <u>Valider avant généralisation</u> : Tester avec un groupe pilote avant d'étendre la configuration.

La facturation est à la charge de l'organisation, généralement au message, et varie selon le fournisseur, le volume et la répartition géographique. La bascule vers les Passkeys, elle, n'engendre aucun coût supplémentaire.

---

##### Étape 7 : Communiquer le changement
La qualité de la communication est le meilleur indicateur de réussite d'un déploiement de Passkeys, bien avant la configuration technique. Microsoft recommande une séquence en trois temps :
- <u>Sensibilisation</u> : Annoncer le retrait du SMS et de la voix, expliquer la raison et nommer la méthode de remplacement.
- <u>Action</u> : Diriger les utilisateurs vers l'inscription d'une Passkey, avec des instructions distinctes selon le type d'appareil.
- <u>Rappel</u> : Relancer les comptes qui n'ont toujours pas enregistré de méthode résistante à l'hameçonnage.

Des gabarits de courriels et de messages Teams sont disponibles sur https://aka.ms/mfatemplates. Ciblez ces envois sur le groupe de sécurité de l'étape 3.

---

##### Portée du retrait et cas particuliers
Le retrait dépasse le seul cadre de la connexion MFA et quelques situations méritent d'être vérifiées avant de planifier :
- <u>SSPR</u> : Le retrait s'applique aussi à la réinitialisation de mot de passe en libre-service. Le SMS et la voix y restent utilisables uniquement via un fournisseur du Security Store.
- <u>Méthodes MFA externes</u> : Elles ne sont pas concernées, sauf si les comptes sont également activés pour le SMS ou la voix.
- <u>Comptes B2B et invités internes</u> : Ils entrent dans le périmètre du retrait, alors que la prise en charge des Passkeys pour ces comptes est annoncée pour la fin de l'année civile 2026.
- <u>Environnements souverains</u> : Le calendrier ci-dessus ne vaut que pour les environnements publics.

Sur les méthodes MFA externes, voir l'article de Mars 2026 [ICI](https://maxime.hiez.ca/blog/2026-03-27-entra-external-mfa-now-available).

---

##### Conclusion
L'échéance réellement contraignante est le 1er Février 2027, avec une demande d'inscription bloquante et sans dérogation possible. Le point d'attention le plus immédiat concerne les comptes B2B, dont la prise en charge des Passkeys n'arrive qu'en fin d'année 2026 alors qu'ils sont déjà dans le périmètre : ce sont eux qu'il faut cadrer en premier dans le plan de migration.

Vous savez maintenant comment inventorier les comptes encore dépendants du SMS et de l'appel vocal, activer les Passkeys et piloter la bascule via une campagne d'inscription.

---

##### Sources
[Microsoft Learn - Retrait du SMS et de la voix](https://learn.microsoft.com/fr-ca/entra/identity/authentication/concept-sms-voice-retirement)

[Microsoft Learn - Planifier un déploiement de Passkeys](https://learn.microsoft.com/fr-ca/entra/identity/authentication/how-to-deploy-phishing-resistant-passwordless-authentication)

[Microsoft Learn - Passkeys (FIDO2) dans Entra ID](https://learn.microsoft.com/fr-ca/entra/identity/authentication/concept-authentication-Passkeys-fido2)

[GitHub - Entra SMS Voice Usage Analyzer](https://github.com/microsoft/entra-sms-voice-usage-analyzer)

---


Avez-vous apprécié cet article ? Vous avez des questions, commentaires ou suggestions, n’hésitez pas à m'envoyer un message depuis le formulaire de contact.

N'oubliez pas de nous suivre et de partager cet article.