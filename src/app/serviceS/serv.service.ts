import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class ServService implements OnInit {

  private client: any;
  constructor() { 
    this.client = io('/livedata', {transports: ['websocket']});
  }

  ngOnInit(): void {

  }

  listen(eventName: any): Observable<any>{
    return new Observable<any>((asd) => {
      this.client.on(eventName, (data: any) => {
        asd.next(data);
      });
    }); 
  }


  emit(eventName: string, data: any){
    this.client.emit(eventName, data);
  }
}
