import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginServiceService } from '../login-service.service';
import { Actor } from '../actor';
import { User } from '../user';
import { Trainer } from '../trainer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

@Component({ templateUrl: 'login.component.html' })
export class LoginComponent implements OnInit {
  loginDetails: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  actor: Actor;
  message: String;
  isFailed: Boolean = false;
  user: User;
  trainer: Trainer;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginServiceService
  ) { }

  ngOnInit() {
    this.loginDetails = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      accountType: ['', Validators.required]
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginDetails.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    // if (this.loginForm.invalid) {
    //   return;
    // }
    // this.router.navigateByUrl('/user');
    this.loginService.getActorCred(this.loginDetails.get('username').value, this.loginDetails.get('accountType').value).subscribe(data => {
      this.actor = data;
      if(this.actor == null || this.actor.actorStatus == false) {
        if(this.actor == null) {
          this.message = 'Invalid login Credentials';
        } else{
          this.message = 'Account is blocked';
        }
        this.isFailed = true;
      } else {
        if(this.actor.actorType == 'trainee') {
          if(this.loginDetails.get('username').value == this.actor.actorEmail && this.loginDetails.get('password').value == this.actor.actorPassword) {          
            this.loginService.currentUser = 'trainee';
            this.loginService.getUserCred(this.actor.actorEmail).subscribe(data => {
              this.user = data;
              this.loginService.userName = this.user.userName;
            })
            this.router.navigateByUrl('/user');
            return true;
          }
        } else if(this.actor.actorType == 'trainer') {
          if(this.loginDetails.get('username').value == this.actor.actorEmail && this.loginDetails.get('password').value == this.actor.actorPassword) {          
            this.loginService.currentUser = 'trainer';
            this.loginService.getTrainerCred(this.actor.actorEmail).subscribe(data => {
              this.trainer = data;
              this.loginService.userName = String(this.trainer.mentorName);
              console.log(data);
            })
            this.router.navigateByUrl('/trainer');
            return true;
          }
        }
      }
    })
  }
}