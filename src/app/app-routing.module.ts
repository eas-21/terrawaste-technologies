import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './shared/admin-layout/admin-layout.component';
import { HomeComponent } from './core/home/home.component';
import { ServiceComponent } from './core/service/service.component';
import { IOTComponent } from './core/service/iot/iot.component';
import { AboutComponent } from './core/about/about.component';
import { ProjectComponent } from './core/project/project.component';
import { ContactComponent } from './core/contact/contact.component';
import { BiogasComponent } from './core/service/biogas/biogas.component';
import { BFPPlantComponent } from './core/service/bfp-plant/bfp-plant.component';
import { FertilizingComponent } from './core/service/fertilizing/fertilizing.component';
import { WasteSortingComponent } from './core/service/waste-sorting/waste-sorting.component';
const routes: Routes = [{
  
  path:'', component: AdminLayoutComponent,
  children:[
    {
      path:'', component:HomeComponent,
      loadChildren:()=>import('../app/core/home/home.module').then(m=>m.HomeModule)
    },
    {
      path:'service', component:ServiceComponent,
      loadChildren:()=>import('../app/core/service/service.module').then(m=>m.ServiceModule)
    },
    { path:'IOT', component: IOTComponent},
    { path:'about', component: AboutComponent},
    { path:'contact', component: ContactComponent},
    { path:'project', component: ProjectComponent},
    {path:'biogas', component:BiogasComponent},
    {path:'bfb', component:BFPPlantComponent},
    {path:'fertilize',component:FertilizingComponent},
    {path:'sorting', component:WasteSortingComponent}

    
  ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'top',
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
