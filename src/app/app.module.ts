import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './shared/admin-layout/admin-layout.component';
import { ScrollTopComponent } from './shared/scroll-top/scroll-top.component';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { ContactComponent } from './core/contact/contact.component';
import { ProjectComponent } from './core/project/project.component';
import { ServiceComponent } from './core/service/service.component';
import { IOTComponent } from './core/service/iot/iot.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BFPPlantComponent } from './core/service/bfp-plant/bfp-plant.component';
import { BiogasComponent } from './core/service/biogas/biogas.component';
import { WasteSortingComponent } from './core/service/waste-sorting/waste-sorting.component';
import { FertilizingComponent } from './core/service/fertilizing/fertilizing.component';
@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    ScrollTopComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProjectComponent,
    ServiceComponent,
    IOTComponent,
    BFPPlantComponent ,
    BiogasComponent,
    WasteSortingComponent,
    FertilizingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
