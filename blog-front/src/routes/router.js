import { Switch, Route } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'
import { ErrorPage } from '../pages/ErrorPage'

export const Router = () => {
    return (
        <Switch>
            <Route exact path="/">
                <HomePage />
            </Route>
            <Route>
                <ErrorPage />
            </Route>
        </Switch>
    )
}