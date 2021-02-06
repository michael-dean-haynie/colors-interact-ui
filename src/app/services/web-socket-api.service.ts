import { Injectable } from '@angular/core';




@Injectable({
  providedIn: 'root'
})
export class WebSocketApiService {
  // private baseUrl = `${environment.apiBaseUrl}/websocket`;
  // private conn: Client;

  constructor() {
    // console.log('inside websocket api service constructor');
    // this.conn = over(new SockJS(this.baseUrl));
    // this.conn.connect({}, () => {
    //   console.log("we're connected, boys");
    // });
  }
}
