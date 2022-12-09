import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldDefaultOptions, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MenuComponent } from './menu/menu.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StartComponent } from './start/start.component';


const appearance: MatFormFieldDefaultOptions = {
  appearance: 'outline'
};

@NgModule({
  declarations: [
    AppComponent,
    IntroductionComponent,
    AboutMeComponent,
    MySkillsComponent,
    MyProjectsComponent,
    ContactMeComponent,
    MenuComponent,
    NavbarComponent,
    StartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    BrowserAnimationsModule,
  ],
  providers: [ 
  {
    provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
    useValue: appearance
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
