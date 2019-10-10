import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Section1Component } from './homepage/section1/section1.component';
import { Section2Component } from './homepage/section2/section2.component';
import { Section3Component } from './homepage/section3/section3.component';
import { Section4Component } from './homepage/section4/section4.component';
import { Section5Component } from './homepage/section5/section5.component';
import { Section3CopyComponent } from './homepage/section3-copy/section3-copy.component';
import { AboutComponent } from './about/about.component';
import { TrainerpageComponent } from './trainerpage/trainerpage.component';
import { TrainerComponent } from './trainerpage/trainer/trainer.component';
import { TrainersNavComponent } from './trainerpage/trainers-nav/trainers-nav.component';
import { TrainersearchComponent } from './trainerpage/trainersearch/trainersearch.component';
import { TrainercompleteComponent } from './trainerpage/trainercomplete/trainercomplete.component';
import { TrainercurrentComponent } from './trainerpage/trainercurrent/trainercurrent.component';
import { TrainerskillsComponent } from './trainerpage/trainerskills/trainerskills.component';
import { TrainerPaymentComponent } from './trainerpage/trainer-payment/trainer-payment.component';
import { AdminComponent } from './adminpage/admin/admin.component';
import { AdminuserComponent } from './adminpage/adminuser/adminuser.component';
import { AdmintrainerComponent } from './adminpage/admintrainer/admintrainer.component';
import { AdmineditComponent } from './adminpage/adminedit/adminedit.component';
import { UserComponent } from './userpage/user/user.component';
import { UsersearchComponent } from './userpage/usersearch/usersearch.component';
import { UsercurrentComponent } from './userpage/usercurrent/usercurrent.component';
import { UsercompleteComponent } from './userpage/usercomplete/usercomplete.component';
import { Usernav1Component } from './userpage/usernav1/usernav1.component';
import { Usernav2Component } from './userpage/usernav2/usernav2.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { UserpageComponent } from './userpage/userpage.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserSignupComponent } from './signup/user-signup/user-signup.component';
import { MentorSignupComponent } from './signup/mentor-signup/mentor-signup.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    Section1Component,
    Section2Component,
    Section3Component,
    Section4Component,
    Section5Component,
    Section3CopyComponent,
    AboutComponent,
    TrainerComponent,
    TrainersNavComponent,
    TrainersearchComponent,
    TrainercompleteComponent,
    TrainercurrentComponent,
    TrainerskillsComponent,
    TrainerPaymentComponent,
    TrainerpageComponent,
    AdminComponent,
    AdminuserComponent,
    AdmintrainerComponent,
    AdmineditComponent,
    UserComponent,
    UsersearchComponent,
    UsercurrentComponent,
    UsercompleteComponent,
    Usernav1Component,
    Usernav2Component,
    AdminpageComponent,
    UserpageComponent,
    LoginComponent,
    SignupComponent,
    UserSignupComponent,
    MentorSignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
