import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  loginForm: FormGroup;
 submitted = false;
 invalidLogin = false;

  constructor(private formBuilder: FormBuilder) { }
  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    if (this.loginForm.controls.email.value === 'nprr1305@gmail.com'
    && this.loginForm.controls.password.value === 'password') {
      console.log("Registered..!!");
      window.alert("Registered..!!");
    } else {
      this.invalidLogin = true;
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [ Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      password: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
      name: ['', [
        Validators.required,
        Validators.maxLength(50),
        Validators.pattern('^[a-zA-Z ]*$')]],
      mobileno: ['', [ Validators.required, Validators.maxLength(10), Validators.pattern('^[0-9]$')]]
    });
  }

}
