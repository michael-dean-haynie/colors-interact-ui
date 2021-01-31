import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

interface HelloWorldDTO {
  hello: String
}

@Injectable({
  providedIn: 'root'
})
export class DevelopmentApiService {
  private baseUrl = `${environment.apiBaseUrl}/development`;

  constructor(
    private http: HttpClient
  ) { }

  helloworld(): Observable<HelloWorldDTO> {
    return this.http.get<HelloWorldDTO>(`${this.baseUrl}/hello`).pipe(
      tap(dto => console.log(dto))
    );
  }
}
