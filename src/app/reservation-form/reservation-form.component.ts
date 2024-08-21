import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.css'
})
export class ReservationFormComponent implements OnInit  {

  reservationForm:FormGroup=new FormGroup({});

  constructor(private FormBuilder:FormBuilder){

  }

    ngOnInit(): void {
      this.reservationForm=this.FormBuilder.group({
        checkInDate:['',Validators.required],
        checkOutDate:['',Validators.required],
        guestName:['',Validators.required],
        guestEmail:['',[Validators.required, Validators.email]],
        roomNumber:['',Validators.required],
      })
    }

    onSubmit(){
      if(this.reservationForm.valid){
        console.log("valid");
      }
    }
}
