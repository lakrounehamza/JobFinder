import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {JobResponse} from '../models/job.model';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  constructor(private http:HttpClient){

  }
  getAllJob(){
    const url ="https://www.arbeitnow.com/api/job-board-api";
    return this.http.get<JobResponse[]>(url);
  }
}
