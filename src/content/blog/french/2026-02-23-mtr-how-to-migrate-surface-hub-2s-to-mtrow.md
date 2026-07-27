---
title: "Comment migrer un Surface Hub 2S vers un MTR Windows"
meta_title: ""
description: ""
date: 2026-02-23T10:00:00-05:00
image: "/images/blog/mtr/tuto/mtr_how_to_migrate_surface_hub_2s_to_mtrow_thumbnail.png"
categories: ["MTR", "Tutoriel"]
author: "Maxime Hiez"
tags: ["Teams Rooms", "MTRoW", "Surface Hub", "PowerShell"]
draft: false
---
---

##### Introduction
Avec la fin du support de *Windows 10*, les entreprises peuvent migrer leurs *Surface Hub 2S* vers des *Microsoft Teams Rooms sur Windows* (*MTRoW*). La migration par USB est la méthode permettant de réaliser l'intégralité du processus sur site et hors ligne, en une seule intervention. Elle ne nécessite aucune connexion Internet, aucun service cloud tiers, ni aucune installation d'application, ce qui en fait l'option la plus rapide.

---

##### Prérequis
**<u>Matériel</u>**
- Un Surface Hub 2S en Windows 10.
- 2 clés USB 3.0 de 32Go formatée en FAT32.
- Un PC Windows 10/11.

**<u>Télécharger l'exécutable</u>**
- L'outil *Surface IT Toolkit* est téléchargeable via https://learn.microsoft.com/en-us/surface/surface-it-toolkit.

---

##### Étape 1 : Créer un certificat
Sur le poste de travail, générez un certificat auto signé via les commandes PowerShell suivantes :
```powershell
if (-not (Test-Path "$home\Downloads\MTR Certificate"))  { New-Item -ItemType Directory -Force -Path "MTR Certificate" } 
if (Test-Path "$home\Downloads\MTR Certificate\CertificateMTR.pfx") { Remove-Item "$home\Downloads\MTR Certificate\CertificateMTR.pfx" } 

$pw = ConvertTo-SecureString "P@sSw0rD" -AsPlainText -Force 

$UefiV2 = New-SelfSignedCertificate ` 
    -Subject "CN=Surface Demo Kit, O=Lab Maxime, C=CA" ` 
    -Type SSLServerAuthentication ` 
    -HashAlgorithm sha256 ` 
    -KeyAlgorithm RSA ` 
    -KeyLength 2048 ` 
    -KeyUsage KeyEncipherment ` 
    -KeyUsageProperty All ` 
    -Provider "Microsoft Enhanced RSA and AES Cryptographic Provider" ` 
    -NotAfter (Get-Date).AddYears(25) ` 
    -TextExtension @("2.5.29.37={text}1.2.840.113549.1.1.1") ` 
    -KeyExportPolicy Exportable 

$UefiV2 | Export-PfxCertificate -Password $pw -FilePath "MTR Certificate\CertificateMTR.pfx" 
```

Récupérez le thumbprint du certificat via les commandes PowerShell suivantes :
```powershell
$pfx = Get-PfxCertificate -FilePath "$home\Downloads\MTR Certificate\CertificateMTR.pfx" 
$pfx.Thumbprint 
```

---

##### Étape 2 : Installer Surface IT Toolkit
Sur le même poste de travail, lancez l'installtion du *Surface IT Toolkit* et cliquez sur *<u>Start App Configuration</u>*.

![image](/images/blog/mtr/tuto/mtr_how_to_migrate_surface_hub_2s_to_mtrow_001.png)

Cliquez sur *<u>Surface Hub</u>*, puis sur les 2 modèles *<u>Surface Hub 3</u>* et *<u>Surface Hub 2S</u>*.

![image](/images/blog/mtr/tuto/mtr_how_to_migrate_surface_hub_2s_to_mtrow_002.png)

Laissez les dernières fenêtres par défaut ...

![image](/images/blog/mtr/tuto/mtr_how_to_migrate_surface_hub_2s_to_mtrow_003.png)

... et terminez l'installation.

![image](/images/blog/mtr/tuto/mtr_how_to_migrate_surface_hub_2s_to_mtrow_004.png)

---

##### Étape 3 : Créer la clé USB bootable avec le package SEMM
Insérez la 1ère clé USB dans le poste de travail et exécutez l'application.

Cliquez sur *<u>UEFI Configurator</u>*, puis sur *<u>Configure Device(s)</u>*.

![image](/images/blog/mtr/tuto/mtr_how_to_migrate_surface_hub_2s_to_mtrow_005.png)

Configurez les attributs (remplacez les valeurs par les vôtres) :
- <u>Choisissez la version de déploiement</u> : *DFI*
- <u>Importer la protection du certificat</u> : *Add → CertificateMTR.pfx*
- <u>Mot de passe du certificat</u> : *P@sSw0rD*
- <u>Choisissez le type de package DFI</u> : *Configuration Package*
- <u>Sélectionnez l'appareil</u> : *Surface Hub → Surface Hub 2S*

![image](/images/blog/mtr/tuto/mtr_how_to_migrate_surface_hub_2s_to_mtrow_006.png)

Validez que l'option *EnableOsMigration* est activée.

![image](/images/blog/mtr/tuto/mtr_how_to_migrate_surface_hub_2s_to_mtrow_007.png)

Cliquez sur *<u>Create</u>* pour créer la 1ère clé USB.

![image](/images/blog/mtr/tuto/mtr_how_to_migrate_surface_hub_2s_to_mtrow_008.png)

Cliquez sur *<u>Finish</u>*.

![image](/images/blog/mtr/tuto/mtr_how_to_migrate_surface_hub_2s_to_mtrow_009.png)

<Notice type="warning">Toutes les données seront effacées de la clé USB 1 !</Notice>

---

##### Étape 4 : Créer la clé USB bootable avec l'image MTR
Parcourez la clé USB 1 ; vous devriez voir un fichier nommé *DfciUpdate.dfi*. Copiez le certificat dans la clé puis éjectez la. Insérez la clé USB 2.

Cliquez sur *<u>Recovery Tool</u>*, puis sur *<u>Create</u>*.

![image](/images/blog/mtr/tuto/mtr_how_to_migrate_surface_hub_2s_to_mtrow_010.png)

Cliquez sur *<u>Surface Hub 2S</u>*.

![image](/images/blog/mtr/tuto/mtr_how_to_migrate_surface_hub_2s_to_mtrow_011.png)

Sélectionnez la langue et la version du MTR.

![image](/images/blog/mtr/tuto/mtr_how_to_migrate_surface_hub_2s_to_mtrow_012.png)

Cliquez sur *<u>Rest of World</u>*, sauf si vous êtes en Chine.

![image](/images/blog/mtr/tuto/mtr_how_to_migrate_surface_hub_2s_to_mtrow_013.png)

Cliquez sur *<u>Create</u>* pour créer la 2ème clé USB.

![image](/images/blog/mtr/tuto/mtr_how_to_migrate_surface_hub_2s_to_mtrow_014.png)

Cliquez sur *<u>Finish</u>*.

![image](/images/blog/mtr/tuto/mtr_how_to_migrate_surface_hub_2s_to_mtrow_015.png)

<Notice type="warning">Toutes les données seront effacées de la clé USB 2 !</Notice>

---

##### Étape 5 : Vérifiez les exigences du micrologiciel
Sur votre Surface Hub, vérifiez que la version UEFI est *699.845.768.0* ou ultérieure. Si ce n'est pas le cas, mettez à jour le microprogramme UEFI avant de procéder à la migration.
- Appuyez sur *<u>Start</u>*, puis sur *<u>All apps</u>*, puis sur *<u>Surface</u>*, et sur *<u>Your Surface</u>*.
- Sous *<u>Device information</u>*, vérifiez la version UEFI.
<br/>

Vous pouvez également vérifier la version UEFI dans le menu UEFI :
- Éteignez votre Surface Hub 2S.
- Appuyez sur le bouton *Volume +* et maintenez-le enfoncé, puis appuyez brièvement sur le bouton *Marche/Arrêt*. Maintenez le bouton *Volume +* enfoncé jusqu'à ce que le menu UEFI s'affiche à l'écran.
- Appuyez sur *<u>System information</u>* pour afficher la version UEFI.

---

##### Étape 6 : Migrer la version Windows en MTRoW
Insérez la 1ère clé USB dans le Surface Hub 2S, et éteignez l'appareil.

Appuyez sur le bouton *Volume +* et maintenez-le enfoncé, puis appuyez brièvement sur le bouton *Marche/Arrêt*. Maintenez le bouton *Volume +* enfoncé jusqu'à ce que le menu UEFI s'affiche.

Dans le menu UEFI, appuyez sur *<u>Management</u>*, puis appuyez sur *<u>Install from USB</u>*.

![image](/images/blog/mtr/tuto/mtr_how_to_migrate_surface_hub_2s_to_mtrow_016.png)

Après l'installation, appuyez sur *<u>Restart now</u>*.

![image](/images/blog/mtr/tuto/mtr_how_to_migrate_surface_hub_2s_to_mtrow_017.png)

Le Surface Hub 2S affichera le logo Microsoft blanc, puis s'éteindra.

![image](/images/blog/mtr/tuto/mtr_how_to_migrate_surface_hub_2s_to_mtrow_018.png)

Rallumez le Surface Hub 2S. Un message d'activation rouge s'affiche.

Saisissez les deux derniers caractères du thumbprint du certificat, et appuyez sur *<u>OK</u>*.

![image](/images/blog/mtr/tuto/mtr_how_to_migrate_surface_hub_2s_to_mtrow_019.png)

Le Surface Hub 2S redémarrera une dernière fois, affichera un logo Microsoft blanc, puis s'éteindra à nouveau.

![image](/images/blog/mtr/tuto/mtr_how_to_migrate_surface_hub_2s_to_mtrow_020.png)

Éjecter la clé USB 1 et insérer la clé USB 2.

Appuyez simultanément sur le bouton *Volume +* et maintenez-le enfoncé, puis appuyez sur le bouton *Marche/Arrêt*. Maintenez les deux boutons enfoncés jusqu'à ce que le logo Windows avec les points de chargement apparaisse, puis relâchez-les.

Choisissez la langue à utiliser sur le MTR.

![image](/images/blog/mtr/tuto/mtr_how_to_migrate_surface_hub_2s_to_mtrow_021.png)

Choisissez la disposition du clavier à utiliser sur le MTR.

![image](/images/blog/mtr/tuto/mtr_how_to_migrate_surface_hub_2s_to_mtrow_022.png)

Appuyez sur *<u>Recover from a drive</u>*.

![image](/images/blog/mtr/tuto/mtr_how_to_migrate_surface_hub_2s_to_mtrow_023.png)

Appuyez sur *<u>Fully clean the drive</u>*.

![image](/images/blog/mtr/tuto/mtr_how_to_migrate_surface_hub_2s_to_mtrow_024.png)

Appuyez sur *<u>Recover</u>*. Si le système vous demande une clé *BitLocker*, appuyez sur *<u>Skip this drive</u>*.

![image](/images/blog/mtr/tuto/mtr_how_to_migrate_surface_hub_2s_to_mtrow_025.png)

Le Surface Hub 2S redémarrera plusieurs fois pendant le processus (jusqu'à 90 minutes). Lorsque l'écran *Windows 11 IoT Enterprise* s'affiche, éjectez la clé USB 2, et terminez la configuration initiale de Windows (langue, région, réseau, ...).

---

##### Et ensuite ?
Le Surface Hub 2S est maintenant converti en MTRoW. Cependant, il vous reste de nombreuses configurations à mettre en place pour que votre appareil soit fonctionnel :
- Création d'un compte M365 avec une licence *Teams Rooms Pro*
- Création des règles d'accès conditionnels pour protéger les connexions
- Création des règles Intune (*LAPS*, *Bitlocker*, *EDR*, *portail MTR Pro*, ...)
- Inscrire le MTR dans Entra / Intune / portail MTR Pro
- Connexion du compte à Teams

Je ne couvrirai pas cette portion dans l'article.

---

##### Conclusion
Vous savez maintenant comment migrer un Surface Hub 2S vers un MTR Windows.

---

##### Sources
[Microsoft Learn - Migrer un Surface Hub 2S via USB](https://learn.microsoft.com/fr-ca/surface-hub/surface-hub-2s-migrate-os)

---


Avez-vous apprécié cet article ? Vous avez des questions, commentaires ou suggestions, n’hésitez pas à m'envoyer un message depuis le formulaire de contact.

N'oubliez pas de nous suivre et de partager cet article.