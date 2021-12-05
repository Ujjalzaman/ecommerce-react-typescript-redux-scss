import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Common/Footer';
const Home = React.lazy(() => import('./pages/Home/Home'));


const AppRouter: React.FC = ({ children }) => {
    return (
        <Router>
            {children}
            <Switch>
                <Suspense fallback={<div>Loading...</div>}>
                    <Route exact path="/" component={Home} />
                </Suspense>
            </Switch>
            <Footer/>
        </Router>
    )
}

export default AppRouter
