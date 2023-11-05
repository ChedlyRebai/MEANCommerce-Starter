import { Chart } from '../model/chart.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChartService {
  url="http://localhost:4000/chart";
  constructor(private http:HttpClient) {

  }

  getAll(){
    return this.http.get<Chart[]>(`${this.url}/getAll`)
  }

  create(chart:Chart){
    return this.http.post(`${this.url}/create`,chart)
  }

}
