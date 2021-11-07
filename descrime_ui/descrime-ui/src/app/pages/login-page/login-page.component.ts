import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { NgForm } from '@angular/forms';




@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  faUser = faUser;
  faLock = faLock;
  faFacebook = faFacebook;
  faGoogle = faGoogle;
  faEnvelope = faEnvelope;

  constructor() { }

  ngOnInit(): void {
  }
  doLogin(form:NgForm) {
    console.log("User Login Successfully!")
    console.log(form.value)
    form.reset()
  }
  doRegistration(form:NgForm) {
    console.log("User Registered Successfully!")
    console.log(form.value)
    form.reset()
  }

}
