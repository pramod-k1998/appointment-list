import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';

import { OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {
      
    
      newAppointmentTitle: string = "";
      newAppointmentDate: Date=new Date();
      appointments:Appointment[] = [];

      ngOnInit(): void {
        let savedAppointments = localStorage.getItem("appointments");  
        this.appointments = savedAppointments?JSON.parse(savedAppointments):[]; //if svd item is empty passs empty array else parse it
      }
      //add function
      addAppointment(){
        // alert("Appointment Added")

        // Adding appointment to the array
        if(this.newAppointmentTitle.trim().length&&this.newAppointmentDate){
          let newAppointment:Appointment={
            id:Date.now(),
            title: this.newAppointmentTitle,
            date:this.newAppointmentDate
          }
          this.appointments.push(newAppointment); //adding data to array
          this.newAppointmentTitle=""; //clearing input feild
          this.newAppointmentDate= new Date();

          // storing value in local storage
          localStorage.setItem("appoinments",JSON.stringify(this.appointments));
        }
      }

      //delete method
      deleteAppointment(index:number){
        this.appointments.splice(index,1);
        localStorage.setItem("appointments",JSON.stringify(this.appointments))
      }
}
