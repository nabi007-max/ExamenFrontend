import { Routes } from '@angular/router';
import { Layout } from './layout/layout';
import path from 'path';
export const routes: Routes = 
[
    {      
        path:'',
        component:Layout,
        children:[
            {
                path:'',
                loadComponent:()=>
                import('./home/home').then(m=>m.Home)           
            },
            {
                path:'about',
                loadComponent:()=>
                import('./about/about').then(m=>m.About)           
            }
        ] 
    }

];
