import axios from 'axios'
import { createAction } from 'redux-actions';

export const addLegislators = createAction('ADD_LEGISLATORS')

export function fetchLegislators(lat, long) {
  return (dispatch, getState) => {
    return axios.get(
      `https://congress.api.sunlightfoundation.com/legislators/locate?latitude=${lat}&longitude=${long}`
    ).then((res) => dispatch(addLegislators(res.data.results)))
  }
}

