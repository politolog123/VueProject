import {createStore} from "vuex";
// import postModule from './postModule';

export default createStore({
    state:{
        likes : 2,
        isAuth : false,
    },
    getters: {
        doubleLikes(state){
            return state.likes 
        }
    },
    mutations: {
        inctrementLikes(state){
            state.likes ++
        },
        discrementLikes(state){
            state.likes --
        }
    }, 
    actions: {

    },
    // modules: {
    //     post : postModule
    // }
})