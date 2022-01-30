import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import {Routes, RouterModule} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import {TabsModule} from 'ngx-bootstrap/tabs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AddSneakerComponent } from './property/add-sneaker/add-sneaker.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PropertyDetailsComponent } from './property/property-details/property-details.component';
import { SnkserviceService } from './services/snkservice.service';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { UserServiceService } from './services/user-service.service';
import { AlertServiceService } from './services/alert-service.service';
import { AuthServiceService } from './services/auth-service.service';
import { AuthGuardGuard } from './services/auth-guard.guard';
import { MiddlemanService } from './services/middleman.service';
import { CurrencyPipe } from '@angular/common';
import { CheckAuthGuard } from './services/check-auth.guard';
import { LiftLogoDirective } from './lift-logo.directive';
import { LogoFontDirective } from './logo-font.directive';
import { RainbowInputDirective } from './rainbow-input.directive';
import { CommentCardComponent } from './comment-card/comment-card.component';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { DiscussionsComponent } from './discussions/discussions.component';
import { CommentsService } from './services/comments.service';

const appRoutes: Routes = [
  {path:'', component:HomePageComponent},
  {path:'buy-sneakers', component:PropertyListComponent},
  {path:'add-sneakers', component:AddSneakerComponent,
   canActivate: [AuthGuardGuard]},
  {path:'product/:id', component:PropertyDetailsComponent},
  {path:'user-login', component:UserLoginComponent,
   canActivate: [CheckAuthGuard]},
  {path:'user-register', component:UserRegisterComponent},
  {path:'add-comment', component:AddCommentComponent,
   canActivate: [AuthGuardGuard]},
  {path:'discussions', component:DiscussionsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent,
    PropertyListComponent,
    NavBarComponent,
    AddSneakerComponent,
    HomePageComponent,
    PropertyDetailsComponent,
    UserLoginComponent,
    UserRegisterComponent,
    LiftLogoDirective,
    LogoFontDirective,
    RainbowInputDirective,
    CommentCardComponent,
    AddCommentComponent,
    DiscussionsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    BsDatepickerModule.forRoot(),
    NgbModule

  ],
  providers: [
    SnkserviceService,
    UserServiceService,
    AlertServiceService,
    AuthServiceService,
    MiddlemanService,
    CommentsService,
    CurrencyPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
