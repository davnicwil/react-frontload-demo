import React from 'react'
import { hydrate } from 'react-dom'
import App from './App'
import { createStore } from './store'

const rootElement = document.getElementById('root')
const store = createStore(window.initialState)

hydrate(<App store={store} />, rootElement)
