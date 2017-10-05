import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent {
  title = 'Employee Dashbord ';
  employees = [
    {name:"Sikandar", position:"Programmer" ,mobile:"123456"},
    {name:"Alex", position:"Designer",mobile:"123456"},
    {name:"Maria", position:"Manager",mobile:"123456"}
  ];
  model:any={};
  model2:any={};
  msg:any="";
  addEmployee(){
    this.employees.push(this.model);
    this.model = {};
    this.msg = "Record is successfully added..... "; 

  }
  deleteEmployee(i:any){
    this.employees.splice(i,1);
    this.msg = "Record is successfully deleted..... ";
    
  }
  myValue:any;
  editEmployee(k:any){
    this.model2.name = this.employees[k].name;
    this.model2.position = this.employees[k].position;
     this.model2.mobile = this.employees[k].mobile;
    this.myValue = k;

  }
  updateEmployee(){
    let k= this.myValue;
    for(let i=0; i<this.employees.length;i++){
      if(i==k){
        this.employees[i]= this.model2;
        this.model2 = {};
        this.msg = "Record is successfully updated..... ";
      }

    }

  }
  clickMe(){
    this.msg = "";
  }
}