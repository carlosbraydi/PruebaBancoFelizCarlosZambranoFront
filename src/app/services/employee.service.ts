import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { IEmployee } from '../interfaces/employee';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private URL = 'http://localhost:8080/employee';

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this.URL);
  }

  postEmployee(employee: IEmployee): Observable<IEmployee> {
    return this.http.post<IEmployee>(this.URL, employee);
  }

  deleteEmployee(idEmployee: number): Observable<boolean> {
    const params = new HttpParams()
      .set('idEmployee', idEmployee.toString());

    return this.http.delete<boolean>(this.URL + '/delete', {params});
  }
}
