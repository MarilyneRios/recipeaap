# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
# recipeaap


# Remarque:

**const recipe = new RecipeModel()**: 
Cette ligne crée **une nouvelle instance du modèle RecipeModel**, mais**ne la sauvegarde** **pas** dans la base de données. **Pour** **sauvegarder** l’instance dans la base de données, vous devez appeler explicitement la méthode **save()**.

**RecipeModel.create()**: 
Cette méthode fait essentiellement la même chose que la précédente, mais avec une étape supplémentaire : elle **sauvegarde** **automatiquement** l’instance dans la base de données. C’est un **raccourci** pour créer une instance et la sauvegarder en une seule étape.