import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CourseCubeComponent } from './container/course-cube/course-cube.component';
import { UtilsComponent } from './container/utils/utils.component';
import { LeftNavComponent } from './container/left-nav/left-nav.component';
import { CourseCubeService } from './service/course-cube.service';
import { CardComponent } from './container/course-cube/card/card.component';
import { HomeComponent } from './home/home.component';
import { CourseCubeFormComponent } from './container/course-cube/course-cube-form/course-cube-form.component';

const appRoute :Routes=[
  {
    path:'home', component:HomeComponent,
  },
  {
    path:'course-cube', component:ContainerComponent,
    children:[
      {
        path:'add',component:CourseCubeFormComponent
      },
      {
        path:'',component:CourseCubeComponent
      }
    ]
  },
  {
    path:'utils', component:UtilsComponent,
  },
  {
    path:'', redirectTo:'/course-cube',pathMatch:'full'
  },
  {
    path:'**', component:CourseCubeComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    HeaderComponent,
    FooterComponent,
    CourseCubeComponent,
    UtilsComponent,
    LeftNavComponent,
    CardComponent,
    HomeComponent,
    CourseCubeFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute),
    HttpClientModule,
    FormsModule
  ],
  providers: [CourseCubeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
