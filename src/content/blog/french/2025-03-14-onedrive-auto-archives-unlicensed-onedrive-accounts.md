---
title: "Gestion des comptes OneDrive non licenciés dans Microsoft 365"
meta_title: ""
description: ""
date: 2025-03-14T10:00:00-05:00
image: "/images/blog/onedrive/onedrive_auto_archives_unlicensed_onedrive_accounts_thumbnail.png"
categories: ["Sharepoint"]
author: "Maxime Hiez"
tags: ["Licences", "Archive", "Données"]
draft: false
---
---

##### Introduction
Microsoft a introduit une nouvelle politique de stockage pour les comptes OneDrive non licenciés, ce qui pourrait entraîner des coûts supplémentaires pour les organisations si ces comptes ne sont pas gérés correctement. Voici comment identifier, surveiller et gérer ces comptes pour éviter des frais inutiles et garantir la conformité.

---

#####  Qu'est-ce qu'un compte OneDrive non licencié ?
Un compte OneDrive devient non licencié lorsque la licence de l'utilisateur est supprimée ou a expiré. Cela peut se produire lorsque l'employé quitte l'entreprise, que sa licence est désactivée ou qu'il n'est plus affecté à un abonnement Microsoft 365.

---

##### Politique de stockage pour les comptes non licenciés
Depuis le 27 Janvier 2025, les organisations sont facturées pour le stockage des comptes OneDrive non licenciés en fonction de la quantité de stockage utilisée. Voici les principales mises à jour de cette politique :
- Frais de stockage : Les organisations encourrent des frais de stockage pour les comptes OneDrive non licenciés basés sur la quantité de stockage utilisée.
- Archivage automatique : Les comptes non licenciés sont automatiquement archivés dans Microsoft 365 Archive après 93 jours de suppression de la licence.
- Réactivation des comptes : La réactivation d'un compte archivé entraînera des frais de réactivation.

---

##### Gestion des comptes OneDrive non licenciés
**<u>Identification des comptes non licenciés</u>**

Pour identifier les comptes OneDrive non licenciés, les administrateurs peuvent utiliser le centre d'administration SharePoint. Voici comment générer un rapport de tous les comptes OneDrive non licenciés :
1. Accédez au SharePoint Admin Center
2. Dans le menu de gauche, cliquez sur *<u>Reports</u>*, puis *<u>OneDrive accounts</u>*.
3. Cliquez *<u>Download report</u>* pour obtenir une liste des comptes OneDrive non licenciés.

![image](/images/blog/onedrive/onedrive_auto_archives_unlicensed_onedrive_accounts_001.png)

**<u>Options de gestion</u>**

Une fois les comptes non licenciés identifiés, les administrateurs ont plusieurs options pour les gérer :
- Attribuer une licence : Avant l'archivage du compte OneDrive non licencié, attribuez une licence Microsoft 365 à l'utilisateur pour réactiver son compte.
- Supprimer le compte : Si l'utilisateur n'a plus besoin d'accéder à OneDrive, supprimez le compte pour éviter des frais de stockage inutiles.

---

##### Chronologie de la politique
La politique de stockage pour les comptes OneDrive non licenciés a débuté le 27 janvier 2025 et se déroule progressivement. Voici les étapes clés :
- Jour 60 : Le compte passe en mode lecture seule.
- Jour 93 : Le compte est soit archivé (si une politique de rétention est en place) soit déplacé dans la corbeille (si aucune politique de rétention ne s'applique).

---

##### Coûts
- Les comptes OneDrive non licenciés archivés seront facturés pour la totalité de l'espace de stockage consommé. Les frais de stockage sont de 0,05$ par Go par mois. Si aucune action n'est prise, les comptes non licenciés seront automatiquement archivés, entraînant des frais d'archivage.
- Les comptes OneDrive non licenciés réactivés seront facturés 0,60$ par Go en plus des frais de stockage de 0,05$ par Go par mois.

<br/>
<u>Exemple :</u> Une organisation a 100 comptes OneDrive non licenciés, chacun consommant 1 To pour un total de 100 To. Les 100 comptes sont automatiquement archivés. Si l'organisation doit réactiver un compte spécifique, les coûts suivants sont appliqués :

- Frais de réactivation unique de 0,60$/Go pour 1 To, soit un total de 614,40$.
- Frais de stockage mensuels de 0,05$/Go pour 100 To, pour un montant total de 5120$ par mois à partir de la réactivation.

<u>Note :</u> Prix en USD avant les taxes applicables.

---

##### Points importants à noter
- Pour accéder aux données d'un compte OneDrive non licencié, vous devez configurer Microsoft 365 Archive en liant un abonnement Azure dans *pay-as-you-go Syntex*.
- Le contenu archivé reste découvrable dans *Microsoft Purview eDiscovery*, et vous pouvez exporter les résultats de recherche sans avoir besoin de réactiver les comptes OneDrive.
- Une fois qu'un compte non licencié est réactivé, il devient accessible dans les 24 heures. Le compte reste actif pendant 30 jours avant d'être à nouveau archivé.
- Les modifications apportées aux politiques de rétention se synchroniseront avec les comptes archivés, ce qui signifie que si la période de rétention est réduite, la nouvelle politique s'applique et le processus de corbeille commence pour ces comptes.

---

##### Conclusion
La gestion proactive des comptes OneDrive non licenciés est essentielle pour éviter des coûts de stockage inutiles et garantir la conformité. En identifiant et en gérant ces comptes avant l'entrée en vigueur de la nouvelle politique, les organisations peuvent minimiser les risques et les frais associés.

---

##### Sources
[Microsoft Learn - Gérer les comptes OneDrive sans licence](https://learn.microsoft.com/fr-ca/sharepoint/unlicensed-onedrive-accounts)

---


Avez-vous apprécié cet article ? Vous avez des questions, commentaires ou suggestions, n’hésitez pas à laisser un commentaire dans la section ci-dessous ou en m'envoyant un message depuis le formulaire de contact.

N'oubliez pas de nous suivre et de partager cet article.