import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TagInputModule } from 'ngx-chips';

import { JwtInterceptor } from './_helpers/jwt.interceptor';
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { SignupService } from './signup/signup.service';
import { ListComponent } from './moments/list/list.component';
import { AddComponent } from './moments/add/add.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { DndDirective } from './_directive/dnd.directive';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    ListComponent,
    AddComponent,
    SidebarComponent,
    HeaderComponent,
    DndDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    TagInputModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    AuthenticationService,
    SignupService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
