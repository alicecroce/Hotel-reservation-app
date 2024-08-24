import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReservationService } from '../reservation/reservation.service';
import { Reservation } from '../models/reservation';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.css'
})
export class ReservationFormComponent implements OnInit  {

  reservationForm:FormGroup=new FormGroup({});

  constructor(
    private FormBuilder:FormBuilder,
    private reservationService:ReservationService,
    private router:Router,
    private activatedRoute: ActivatedRoute
  ){

    }

    ngOnInit(): void {
      this.reservationForm=this.FormBuilder.group({
        checkInDate:['',Validators.required],
        checkOutDate:['',Validators.required],
        guestName:['',Validators.required],
        guestEmail:['',[Validators.required, Validators.email]],
        roomNumber:['',Validators.required],
      })

      let id=this.activatedRoute.snapshot.paramMap.get('id')

      if (id){
        let reservation=this.reservationService.getReservation(id)

        if(reservation)
          this.reservationForm.patchValue(reservation)
      }
    }

    onSubmit(){
      if(this.reservationForm.valid){

        let reservation:Reservation=this.reservationForm.value;

        let id=this.activatedRoute.snapshot.paramMap.get('id')

        if (id){
          //Update
          this.reservationService.updateReservation(id, reservation)
        }else{
          //new
          this.reservationService.addReservation(reservation)
        }

        this.reservationService.addReservation(reservation)

        this.router.navigate(['./list'])
      }
    }
}
