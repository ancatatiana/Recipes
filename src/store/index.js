import { createSore} from 'vue'

export default createSore({
    state: {
        recipes: [
        {
            slug: 'Katsu-curry',
            title: 'Katsu Cury',
            description:'A delicios curry made with chicken, potatoes, and a special sauce',
             ingredients: [
                 '1 tablespoon olive oil',
                 '1 onion, chopped',
                 '2 cloves garlic, choped',
                 '1 tablespoon curry powder',
             ],
             method:[
                 'Heat oil in a large skillet over medium heat.',
                 'Add onion and garlic and cook, stirring often, util softened, about 5 minutes.',
                 'Add curry powder and cook, stirring, until ragrant, about 1 minute.',
                 'Add chicken and potatoes and cook, stirring, until hreated throungh, about 5 minutes.',  
             ]
        },

        {
            slug: 'ramen-noodle-soup',
            title: 'Ramen noodle soup',
            description:'A delicios curry made with chicken, potatoes, and a special sauce',
             ingredients: [
                 '1 tablespoon olive oil',
                 '1 onion, chopped',
                 '2 cloves garlic, choped',
                 '1 tablespoon curry powder',
             ],
             method:[
                 'Heat oil in a large skillet over medium heat.',
                 'Add onion and garlic and cook, stirring often, util softened, about 5 minutes.',
                 'Add curry powder and cook, stirring, until ragrant, about 1 minute.',
                 'Add chicken and potatoes and cook, stirring, until hreated throungh, about 5 minutes.',  
             ]
        }
        
        ]
    },
    mutations:{
        ADD_RECIPE(state, recipe) {
            state.recipes.push(recipe)
        }
    },
    
})