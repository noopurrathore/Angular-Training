import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  enteredId = "";
  enteredName = "";
  enteredSalary = "";
  enteredDepartment = "";
  @Output() empCreated = new EventEmitter();
  constructor() { }


onAddEmployee(){
  const employee = {
    id: this.enteredId,
      name: this.enteredName,
      salary: this.enteredSalary,
      department: this.enteredDepartment
  };
  this.empCreated.emit(employee);

}
}
