import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { GithubComponent } from './github/github.component';
import { NotFoundComponent } from './shared/notFound.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RegisterService } from './services/register.service';
import { LoginService } from './services/login.service';
import { LoginServiceA } from './login/login.service';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    NotFoundComponent,
    GithubComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'user', component: UserComponent},
      {path: 'github', component: GithubComponent},
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: '**', component: NotFoundComponent},

    ])
  ],
  providers: [
    RegisterService,
    LoginService,
    LoginServiceA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
