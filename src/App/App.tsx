import React from 'react'
import { hot } from 'react-hot-loader'
import { Route, Router, Switch } from 'react-router-dom'
import { history } from '@/_helpers'
import Header from '@/_components/main/Header'
import Body from '@/_components/main/Body'
import Footer from '@/_components/main/Footer'
import Resume from '@/_components/resume/Resume'
import Chat from '@/_components/chat/Chat'
import Login from '@/_components/auth/Login'
import { Grid } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import theme from '@/_plugins/material-ui'
import CssBaseline from '@material-ui/core/CssBaseline'

const App: React.FC = () => (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <Grid container spacing={0}>
            <Router history={history}>
                <Header />
                {/* {alert.message && <div className={`alert ${alert.type}`}>{alert.message}</div>} */}
                <div style={{ paddingTop: '40px', marginTop: '40px', minWidth: '100%' }}>
                    <Switch>
                        <Route exact path="/" component={Body} />
                        <Route exact path="/resume" component={Resume} />
                        {/* <Route exact path="/chat" component={Chat} /> */}
                        {/* <Route exact path="/login" component={Login} /> */}
                    </Switch>
                </div>
                <Footer />
            </Router>
        </Grid>
    </ThemeProvider>
)

export default hot(module)(App)
