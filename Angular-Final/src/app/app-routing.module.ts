import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component'
import { Section1Component } from './homepage/section1/section1.component'
import { TrainerpageComponent } from './trainerpage/trainerpage.component';
import { TrainerComponent } from './trainerpage/trainer/trainer.component';
import { TrainerskillsComponent } from './trainerpage/trainerskills/trainerskills.component';
import { TrainercompleteComponent } from './trainerpage/trainercomplete/trainercomplete.component';
import { TrainercurrentComponent } from './trainerpage/trainercurrent/trainercurrent.component';
import { TrainerPaymentComponent } from './trainerpage/trainer-payment/trainer-payment.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { AdminComponent } from './adminpage/admin/admin.component';
import { AdminuserComponent } from './adminpage/adminuser/adminuser.component';
import { AdmintrainerComponent } from './adminpage/admintrainer/admintrainer.component';
import { AdmineditComponent } from './adminpage/adminedit/adminedit.component';
import { UserpageComponent } from './userpage/userpage.component';
import { UserComponent } from './userpage/user/user.component';
import { UsersearchComponent } from './userpage/usersearch/usersearch.component';
import { UsercurrentComponent } from './userpage/usercurrent/usercurrent.component';
import { UsercompleteComponent } from './userpage/usercomplete/usercomplete.component';
import { Usernav2Component } from './userpage/usernav2/usernav2.component';
import { LoginComponent } from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import{UserSignupComponent} from './signup/user-signup/user-signup.component';
import{MentorSignupComponent} from './signup/mentor-signup/mentor-signup.component';
import { from } from 'rxjs';
const routes: Routes = [

  { path: '', component: Section1Component },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },

  {path :'home',component:SignupComponent,children:[
    {path : 'signup', children:[
      {path : '',component:UserSignupComponent},
      {path:'mentor',component:MentorSignupComponent}
    ]}
  ]},

  {
    path: 'trainer', component: TrainerpageComponent, children: [
      { path: '', component: TrainerComponent },
      { path: 'trainer-skill', component: TrainerskillsComponent },
      { path: 'training-completed', component: TrainercompleteComponent },
      { path: 'training-current', component: TrainercurrentComponent },
      { path: 'trainer-payment', component: TrainerPaymentComponent }
    ]
  },


  {
    path: 'admin', component: AdminpageComponent, children: [
      { path: '', component: AdminuserComponent },
      { path: "admin-trainer", component: AdmintrainerComponent },
      { path: "admin-updates", component: AdmineditComponent }
    ]
  },


  {
    path: 'user', component: UserpageComponent, children: [
      { path: '', component: UserComponent },
      { path: 'user-search', component: UsersearchComponent, children: [{ path: 'search-result', component: Usernav2Component }] },
      { path: 'user-current', component: UsercurrentComponent },
      { path: 'user-complete', component: UsercompleteComponent }


    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
