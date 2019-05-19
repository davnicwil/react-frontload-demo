import React from 'react'

const Context = React.createContext()

export const createStore = (initialState) => {
  let state = initialState

  return {
    set: (newState) => {
      state = newState
    },
    get: () => state,
  }
}

export class StoreProvider extends React.Component {
  set = (store) => (newState) => {
    store.set(newState)
    this.setState(newState)
  }

  render() {
    const store = this.props.store || createStore({})

    return (
      <Context.Provider
        value={{
          store: {
            set: this.set(store),
            get: store.get,
          },
        }}
      >
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const withStore = (Component) => (props) => (
  <Context.Consumer>
    {(context) => <Component store={context.store} {...props} />}
  </Context.Consumer>
)
