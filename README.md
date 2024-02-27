# React + Vite

**installation**
1/ npm create vite : recipeapp, react, javascript, eslint
2/ npm install
3/ npm install axios, bootstrap (npm install react-router-dom)
Au départ utilisation du localStorage, Mais pbm de sécurité alors redux
4/ npm install react-redux @reduxjs/toolkit



# Remarque:

**const recipe = new RecipeModel()**: 
Cette ligne crée **une nouvelle instance du modèle RecipeModel**, mais**ne la sauvegarde** **pas** dans la base de données. **Pour** **sauvegarder** l’instance dans la base de données, vous devez appeler explicitement la méthode **save()**.

**RecipeModel.create()**: 
Cette méthode fait essentiellement la même chose que la précédente, mais avec une étape supplémentaire : elle **sauvegarde** **automatiquement** l’instance dans la base de données. C’est un **raccourci** pour créer une instance et la sauvegarder en une seule étape.