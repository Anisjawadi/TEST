import axios from 'axios'
import ACTIONS from './index'
export const addTache = (post) => async (dispatch) => {
    try {
      const { data } = await axios.post('/tache',post);
      
  console.log('lalalal');
      return dispatch({ type: ACTIONS.CREATE_TACHE, payload: data });
    } catch (error) {
      
      console.log('error');
    }
  };
  export const getTaches = () => async (dispatch) => {
    try {
      const { data } = await axios.get('/tache');
      
      return dispatch({ type: ACTIONS.FETCH_ALL, payload: data });
    } catch (error) {
      
  
    }
  };
  
export const fetchAllTaches = async () => {
  const res = await axios.get('/tache')
  return res
}

export const dispatchGetAllTaches = (res) => {
  return {
      type: ACTIONS.FETCH_ALL,
      payload: res.data
  }
}
 

  
 
  export const updateTache = (id, editTache) => async (dispatch) => {
    try {
    
      const { data } = await axios.patch(`/tache/updateTache/${editTache._id}`,editTache);
  
      return dispatch({ type: ACTIONS.UPDATE_TACHE, payload: data });
    } catch (error) {
      
    }
  };
 
 export const deleteTache = (id) => async (dispatch) => {
    try {
    
       await axios.delete(`/tache/delete/${id}`);
  
      return dispatch({ type: ACTIONS.DELETE_TACHE, payload:id });
    } catch (error) {
     
    }
  };