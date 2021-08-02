import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Header } from './components/layout/Header';
import { Main } from './components/layout/Main';
import { Provider } from 'react-redux';
import { store } from './stateManagement/store/store';
// import { Footer } from './layout/Footer';

const useStyles = makeStyles( {
    root: {
        display: 'flex'
    }
} )

export const AppMovies = () => {    
    const classes = useStyles()
    
    return (
        <Provider store={ store }>
            <div className={ classes.root } >
                <Header />
                <Main />
                {/* <Footer /> */}
            </div>
        </Provider>
    )
}
