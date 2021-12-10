import ACTIONS from '../actions/'

 
const taches =[];
const TachesReducer = (state = taches , action) => {
    switch(action.type){
        case ACTIONS.FETCH_ALL:
            return action.payload;
        case ACTIONS.CREATE_TACHE:
             return [...taches, action.payload];
        case ACTIONS.UPDATE_TACHE:
                return taches.map((tache) => (tache._id === action.payload._id ? action.payload : tache));
        case ACTIONS.DELETE_TACHE:
            return taches.filter((tache) => tache._id !== action.payload);
        default:
            return state;
    }
}


export default TachesReducer