import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { SignupService } from 'src/app/signup.service';
import { Actor } from 'src/app/actor';
import { Trainer } from 'src/app/trainer';

@Component({
  selector: 'app-mentor-signup',
  templateUrl: './mentor-signup.component.html',
  styleUrls: ['./mentor-signup.component.css']
})
export class MentorSignupComponent implements OnInit {

  isSuccess = false;
  message = "";
  isFailed = false;
  registerDetails = new FormGroup({
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required,Validators.email]),
    phoneNumber: new FormControl('', Validators.required),
    years: new FormControl('', Validators.required),
    videoFacility: new FormControl('', Validators.required),
    presentationFacility: new FormControl('', Validators.required),
    linkdin: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required)
  });

  constructor(private signupService: SignupService) { }

  ngOnInit() {
  }

  actor : Actor = new Actor();
  trainer : Trainer = new Trainer();

  register() {

    if(this.registerDetails.get('fullName').value == '') {
      this.message = "Name Required !!!!";
      this.isFailed = true;
      this.isSuccess = false;
    } else if(this.registerDetails.get('email').value == '') {
      this.message = "Email Required !!!!";
      this.isFailed = true;
      this.isSuccess = false;
    } else if(this.registerDetails.get('phoneNumber').value == '') {
      this.message = "Phone Number Required !!!!";
      this.isFailed = true;
      this.isSuccess = false;
    } else if(this.registerDetails.get('password').value == '') {
      this.message = "Password cannot be empty !!!!";
      this.isFailed = true;
      this.isSuccess = false;
    } else if(this.registerDetails.get('password').value == this.registerDetails.get('confirmPassword').value) {
      this.isSuccess = true;
      this.isFailed = false;
    } else {
      this.message = "Password doesn't Match !!!!";
      this.isFailed = true;
      this.isSuccess = false;
    }

    if(this.isSuccess == true) {
      this.actor.actorEmail = this.registerDetails.get('email').value;
      this.actor.actorPassword = this.registerDetails.get('password').value;
      this.actor.actorStatus = true;
      this.actor.actorType = "trainer";

      this.trainer.mentorEmail = this.registerDetails.get('email').value;
      this.trainer.mentorName = this.registerDetails.get('fullName').value;
      this.trainer.mentorPhone = this.registerDetails.get('phoneNumber').value;
      this.trainer.mentorYearsExp = this.registerDetails.get('years').value;
      this.trainer.mentorLinkdinUrl = this.registerDetails.get('linkdin').value;
        
      this.trainer.actor = this.actor;
      
      this.createTrainer();

    }
  }

  createTrainer() {
    this.signupService.createTrainer(this.trainer).subscribe(data => console.log(data), error => console.log(error));
  }

}
