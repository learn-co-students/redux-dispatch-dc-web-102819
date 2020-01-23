function changeState(state, action){
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {count: state.count + 1}
    default:
      return state;
  }
}

function render() { 
  document.body.textContent = state.count
}

let state = {count: 0}
let action = {type: 'INCREASE_COUNT'}

function dispatch(action) {
  state = changeState(state, action)
  render()
}

dispatch(action)
dispatch(action)

function superDispatch(...actions) {
  for (let action of actions) {
    state = changeState(state, action)
  }
  render()
}