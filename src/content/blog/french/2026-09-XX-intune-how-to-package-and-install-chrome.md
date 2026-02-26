---
title: "Comment packager et installer Chrome via Intune"
meta_title: ""
description: ""
date: 2030-09-28T10:00:00-05:00
image: "/images/blog/intune/tuto/intune_how_to_package_and_install_chrome_thumbnail.png"
categories: ["Intune", "Tutoriel"]
author: "Maxime Hiez"
tags: ["Intunewin", "Packaging", "Application", "Chrome"]
draft: false
---
---

##### Introduction
Au sein de votre organisation, vous pourriez avoir besoin, à un moment donné, de déployer des applications de manière centralisée si vos appareils sont inscrits à Intune. Vous pouvez packager et déployer une multitude d'applications : navigateurs, gestionnaires d'archives/ZIP, applications métier, lecteurs multimédias, voire même des scripts ou des pilotes. Dans l'exemple d'aujourd'hui, nous allons voir comment empaqueter et déployer le navigateur Google Chrome.

---

##### Prérequis
**<u>Un PC Windows 10/11</u>**
- Un PC Windows 10/11 inscrit dans Intune.

**<u>Un groupe Entra ID</u>**
- Un groupe de sécurité Entra ID qui contient les PC concernés.

**<u>Rôle d’administrateur</u>**
- Un compte avec le rôle *Administrateur Global* ou *Administrateur Intune* pour accéder au Microsoft Intune Admin Center.

**<u>Télécharger les exécutables</u>**
- L'outil *Microsoft Win32 Content Prep Tool* est téléchargeable via https://go.microsoft.com/fwlink/?linkid=2065730.
- La version *MSI* de *Google Chrome* est téléchargeable via https://chromeenterprise.google/browser/download.

---

##### Étape 1 : Se connecter au Microsoft Intune Admin Center
Connectez-vous au Microsoft Intune Admin Center en ouvrant votre navigateur web sur https://intune.microsoft.com.

---

##### Étape 2 : Préparer l'arborescence
Dans le répertoire de téléchargements, extrayez le fichier compressé *Microsoft Win32 Content Prep Tool* et créez les sous-dossiers suivants :
- **C:\Users\maxim\Downloads\Packages_Intune** : Copiez le fichier extrait (*IntuneWinAppUtil.exe*). L'outil de préparation Intune Win32 compresse tous les fichiers et dossiers lors de la création du fichier *.intunewin*. Il est donc important de ne pas le conserver dans le répertoire d'installation de l'application.
- **C:\Users\maxim\Downloads\Packages_Intune\Sources** : Ce dossier contient tous les fichiers d'installation (*.exe*, *.msi*, *dossiers*, ...). Tous les fichiers de ce dossier seront compressés dans un fichier *.intunewin*.
- **C:\Users\maxim\Downloads\Packages_Intune\Output** : Dossier de sortie pour le fichier *.intunewin* généré.

---

##### Étape 3 : Packager Chrome
Exécutez le fichier *IntuneWinAppUtil.exe* via la commande PowerShell suivante :
```powershell
.\IntuneWinAppUtil.exe
```

Spécifiez l'arborescence créée précédemment :
- <u>Source</u> : *C:\Users\maxim\Downloads\Packages_Intune*
- <u>Setup</u> : *C:\Users\maxim\Downloads\Packages_Intune\Sources\googlechromestandaloneenterprise64.msi*
- <u>Output</u> : *C:\Users\maxim\Downloads\Packages_Intune\Output*

Le fichier *googlechromestandaloneenterprise64.intunewin* va être créé dans le répertoire *Setup* en quelques secondes.

![image](/images/blog/intune/tuto/intune_how_to_package_and_install_chrome_001.png)

---

##### Étape 4 : Créer une nouvelle application
Dans le menu de gauche, cliquez sur *<u>Apps</u>*, puis sur *<u>All Apps</u>*.

Créez une règle de type *Windows app (Win32)*.

![image](/images/blog/intune/tuto/intune_how_to_package_and_install_chrome_002.png)

Importez le fichier *googlechromestandaloneenterprise64.intunewin* créé précédemment. Le nom de l'application, sa plateforme et sa version devraient automatiquement être détectés.

![image](/images/blog/intune/tuto/intune_how_to_package_and_install_chrome_003.png)

Les commandes d'installation et désinstallation devraient automatiquement être renseignées. Si non, vous pouvez utiliser les valeurs suivantes :
- <u>Installation</u> : *msiexec /i "Sources\googlechromestandaloneenterprise64.msi" /qn*
- <u>Désinstallation</u> : *msiexec /x "{8F3DE4FD-D1C0-3520-89B0-D717C89C4473}" /qn*

![image](/images/blog/intune/tuto/intune_how_to_package_and_install_chrome_004.png)

Sélectionnez le type de règle avec MSI. Dans la plupart des cas, le code produit sera automatiquement renseigné. Sinon, vous devrez le saisir manuellement.

![image](/images/blog/intune/tuto/intune_how_to_package_and_install_chrome_005.png)

Assignez le groupe de sécurité contenant vos postes Windows.

![image](/images/blog/intune/tuto/intune_how_to_package_and_install_chrome_006.png)

---

##### Étape 5 : Valider le déploiement de Chrome
Après quelques minutes, Google Chrome devrait être installés sur les ordinateurs ciblés.

![image](/images/blog/intune/tuto/intune_how_to_package_and_install_chrome_007.png)

L’ordinateur a reçu l'application automatiquement.

![image](/images/blog/intune/tuto/intune_how_to_package_and_install_chrome_008.png)

---

##### Comment mettre à jour Chrome ?

---

##### Conclusion
Vous savez maintenant comment packager et installer Chrome via Intune.

---

##### Sources
[Microsoft Learn - Package d'application Win32](https://learn.microsoft.com/fr-ca/intune/intune-service/apps/apps-win32-prepare)

---


Avez-vous apprécié cet article ? Vous avez des questions, commentaires ou suggestions, n’hésitez pas à m'envoyer un message depuis le formulaire de contact.

N'oubliez pas de nous suivre et de partager cet article.