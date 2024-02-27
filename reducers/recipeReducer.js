import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	value: [],
};

export const recipeSlice = createSlice({
	name: 'recipe',
	initialState,
	reducers: {
        //ajouter une recette
		addRecipe: (state, action) => {
			state.value.push(action.payload);
		},
        //effacer une recette
		removeRecipe: (state, action) => {
			state.value = state.value.filter(recipe => recipe.name !== action.payload.name);
		},
        //Effacer toutes les recettes
		removeAllRecipe: (state) => {
			state.value = [];
		},
        //mettre à jour une recette
        updateRecipe: (state, action) => {
            state.value.recipe = action.payload;
        }
	},
});

export const { addRecipe, removeRecipe, removeAllRecipe, updateRecipe  } = recipeSlice.actions;
export default recipeSlice.reducer;
