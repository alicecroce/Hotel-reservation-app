import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private reservations:Reservation[]= [];



  //CRUD

  //restituisce tutte le prenotazioni: READ
  getReservations():Reservation[]{
    return this.reservations;
  }

  //cerchiamo una prenotazione specifica per id con il metodo find: READ
  getReservation(id:string):Reservation| undefined{
    return this.reservations.find(res=>res.id===id);
  }

  //pushiamo la prenotazione all'interno del sistema: CREATE
  addReservation(reservation:Reservation):void{
    reservation.id=Date.now().toString();//rendo l'ID univoco
    this.reservations.push(reservation);

  }

  //cancelliamo la prenotazione: DELETE
  deleteReservation(id:string):void{
    let index=this.reservations.findIndex(res=>res.id===id);
    this.reservations.splice(index,1);

  }

  //carichiamo la prenotazione a sistema: UPDATE
  updateReservation(id:string, updateReservation:Reservation):void{
    let index=this.reservations.findIndex(res=>res.id===updateReservation.id);
    this.reservations[index]=updateReservation;

  }



}
