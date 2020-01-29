import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EmpManagement';
  enteredEmail = "";
  enteredPassword = "";
  @Output() empCreated = new EventEmitter();
  constructor() { }


onAddEmployee() {
  const employee = {
    email: this.enteredEmail,
     password: this.enteredPassword
  };
  this.empCreated.emit(employee);

}
}
