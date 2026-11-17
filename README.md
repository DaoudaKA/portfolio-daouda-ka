# Portfolio de Daouda Ka

Site personnel en HTML, CSS et JavaScript, sans framework ni dépendance à installer.

## Structure

```
portfolio/
├── index.html      contenu de toutes les sections
├── style.css       design bleu ciel et blanc
├── script.js       projets, filtres, formulaire, animation de la couverture
└── assets/
    ├── cv-daouda-ka.pdf   CV téléchargeable
    ├── cover.jpg          photo de couverture (à ajouter)
    └── profile.jpg        photo de profil (à ajouter)
```

## Personnaliser

1. **Photos** : placez `cover.jpg` (paysage, environ 1920 × 600) et `profile.jpg` (carrée, au moins 400 × 400) dans `assets/`. Gardez exactement ces noms. Sans photo, le site affiche le dégradé bleu ciel et les initiales DK.
2. **Google Drive** : dans `script.js`, remplacez `driveUrl` par le lien de partage de votre dossier (réglez le partage sur « Tous les utilisateurs disposant du lien »).
3. **Projets** : modifiez le tableau `PROJECTS` dans `script.js`. `repo` correspond au nom exact du dépôt GitHub, et `cat` à l'une des catégories `engineering`, `ia`, `bi` ou `web`.
4. **CV** : remplacez `assets/cv-daouda-ka.pdf` par la dernière version.

## Mettre en ligne

### 1. GitHub
```bash
cd portfolio
git init
git add .
git commit -m "Portfolio"
git branch -M main
git remote add origin https://github.com/DaoudaKA/portfolio-daouda-ka.git
git push -u origin main
```
(Créez d'abord le dépôt vide `portfolio-daouda-ka` sur github.com.)

### 2. Vercel
1. Connectez-vous sur https://vercel.com avec votre compte GitHub.
2. Cliquez sur **Add New… > Project**, puis importez le dépôt `portfolio-daouda-ka`.
3. Framework Preset : **Other**. Laissez la commande de build vide.
4. Cliquez sur **Deploy**. Le site sera en ligne sur une adresse `xxx.vercel.app`.

Ensuite, chaque `git push` met le site à jour automatiquement.
