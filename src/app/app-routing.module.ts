import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { AppComponent } from './app.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { MenuComponent } from './menu/menu.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { StartComponent } from './start/start.component';

const routes: Routes = [
  {path: "" , component: StartComponent},
  {path: "menu", component: MenuComponent},
  {path: "about-me", component: AboutMeComponent},
  {path: "my-skills", component: MySkillsComponent},
  {path: "portfolio", component: MyProjectsComponent},
  {path: "imprint&legal-notice", component: LegalNoticeComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { anchorScrolling: 'enabled'})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
