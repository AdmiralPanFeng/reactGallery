/**
 * Created by GuYang on 2017/8/10.
 */
import InsetList from '../Content/sidebar';
import {aboutRoute} from '../about/router';
import {aboutsRoute} from '../abouts/router';
import Container from './container';
export const appRoute = {
    path:'/',
    component:Container,
    indexRoute:{onEnter:(state,replace)=>replace(aboutRoute.path)},
    childRoutes:[aboutRoute,aboutsRoute]
}