import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators,FormControlName } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  gender = "Male";
  loginForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
  });
  }
  

  login() {
    this.router.navigate(['/','dashboard'])
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
      this.submitted = true;
     
      // stop here if form is invalid
      if (this.loginForm.invalid) {
          return;
      }
      console.log("this.registerForm : ",this.loginForm)
      // display form values on success
      alert('Login SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value, null, 4));
      this.router.navigate(['/','dashboard'])
  }
}
