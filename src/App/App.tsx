import React from 'react'
import { Route, Router, Switch } from 'react-router-dom'
import { history } from '@/_helpers'
import Header from '@/_components/main/Header'
import Body from '@/_components/main/Body'
import Footer from '@/_components/main/Footer'
import { Grid } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import theme from '@/_plugins/material-ui'
import CssBaseline from '@material-ui/core/CssBaseline'

export const App: React.FC = () => (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <Grid container spacing={0}>
            <Header />
            {/* {alert.message && <div className={`alert ${alert.type}`}>{alert.message}</div>} */}
            <div style={{ paddingTop: '40px', minWidth: '100%' }}>
                <Router history={history}>
                    <Switch>
                        <Route path="/" component={Body} />
                        {/* <PrivateRoute exact path="/" component={HomePage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/register" component={RegisterPage} />
                <Redirect from="*" to="/" /> */}
                    </Switch>
                </Router>
            </div>
            <Footer />
        </Grid>
    </ThemeProvider>
)

// export class App extends React.Component {
//     render(): React.ReactNode {
//         return (
//             <ThemeProvider theme={theme}>
//                 <CssBaseline />
//                 <Grid container spacing={0}>
//                     <Header />
//                     {/* {alert.message && <div className={`alert ${alert.type}`}>{alert.message}</div>} */}
//                     <Router history={history}>
//                         <Switch>
//                             <Route path="/" component={Body} />
//                             {/* <PrivateRoute exact path="/" component={HomePage} />
//                     <Route path="/login" component={LoginPage} />
//                     <Route path="/register" component={RegisterPage} />
//                     <Redirect from="*" to="/" /> */}
//                         </Switch>
//                     </Router>
//                 </Grid>
//             </ThemeProvider>
//         )
//     }
// }
