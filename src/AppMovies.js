import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { Header } from './components/layout/Header';
import { Main } from './components/layout/Main';
import { Provider } from 'react-redux';
import { store } from './stateManagement/store/store';
// import { Footer } from './layout/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import theme from './themeConfig';

const useStyles = makeStyles( {
    root: {
        display: 'flex'
    }
} )

export const AppMovies = () => {    
    const classes = useStyles()
    
    return (
        <Provider store={ store }>
            <ThemeProvider theme={theme}>
                <div className={ classes.root } >
                    <Router>
                        <Header />
                        <Main />
                        {/* <Footer /> */}
                    </Router>
                </div>
            </ThemeProvider>
        </Provider>
    )
}
