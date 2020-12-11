import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersListModule } from './usersList/usersList.module';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from './services/users.service';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersListModule,
    HttpClientModule,
    LoginModule,
    RegisterModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
