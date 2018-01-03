import{Route,Routes,RouterModule} from '@angular/router';
import{ModuleWithProviders} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {PortfolioComponent} from './portfolio/portfolio.component';
import {ContactComponent} from './contact/contact.component';

export const routes:Routes = [
     
    {
        path:'',
        redirectTo:'/home',
        pathMatch:'full'
    },
    {
        path:'home',
        component: HomeComponent,
      
    },
   
    {
        path:'about',
        component: AboutComponent,

    },
    {
        path:'portfolio',
        component: PortfolioComponent,

    },
    {
        path:'contact',
        component: ContactComponent,

    },
    

]

export const routing:ModuleWithProviders = RouterModule.forRoot(routes);
