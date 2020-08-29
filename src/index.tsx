import React from 'react'
import { render } from 'react-dom'
import '@/_styles/main.scss'
import 'fontsource-roboto'
import { Provider } from 'react-redux'
import { store } from '@/_store'
import { App } from '@/App/App'

// setup fake backend
// import { configureFakeBackend } from './_helpers'
// configureFakeBackend()

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app'),
)
