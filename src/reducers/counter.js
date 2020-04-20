const initialState = {
  counter: 0,
  coisaEstranha: ''
}

export default function (state = initialState, action) {
  switch (action.type) {
    case 'DO_INCREMENT':
      return {
        ...state,
        counter: state.counter + 1
      }
    case 'DO_DECREMENT':
      return {
        ...state,
        counter: state.counter - 1
      }
    case 'COISA_ESTRANHA': 
      return {
        ...state,
        coisaEstranha: 'Ah Muleke'
      }  
    default:
      return state;
  }
} 