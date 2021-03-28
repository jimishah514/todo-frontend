import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './shared-modules/material/material.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './components/authentication/register/register.component';
import { ForgotPasswordComponent } from './components/authentication/forgot-password/forgot-password.component';
import { DashboardComponent } from './components/home/dashboard/dashboard.component';
import { TodoListComponent } from './components/home/todo-list/todo-list.component';
import { TodoComponent } from './components/home/todo/todo.component';
import { NavbarComponent } from './components/home/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    DashboardComponent,
    TodoListComponent,
    TodoComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
