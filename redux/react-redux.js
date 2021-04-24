const redux = require('redux')

const createStore = redux.createStore;

const ingredients = {
    counter: 0
}
const rootReducer = (state=ingredients, action)=>{
    if(action.type==='INC_COUNTER'){
        return{
            ...state,
            counter: state.counter+1
        }
    }
    if(action.type==='ADD_COUNTER'){
        return{
            ...state,
            counter: state.counter +action.value
        }   
    }
    else{
        return state
    }
}

const store = createStore(rootReducer)
console.log(store.getState())
store.subscribe(()=>{
    console.log('[Subscribe]',store.getState())
})
store.dispatch({type: 'INC_COUNTER'})
store.dispatch({type:'ADD_COUNTER', value: 10})
console.log(store.getState());