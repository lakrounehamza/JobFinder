import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JobService } from './job';
import { JobResponse } from '../models/job.model';

@Injectable({
  providedIn: 'root'
})
export class JobResolver implements Resolve<JobResponse[]> {

  constructor(private jobService: JobService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<JobResponse[]> {
    const cachedJobs = localStorage.getItem('jobsList');
    if (cachedJobs) {
      try {
        const jobs = JSON.parse(cachedJobs);
        console.log('Données chargées depuis localStorage:', jobs.length);
        this.jobService.getAllJob().pipe(
          map((res: any) => {
            if (res && res.data) {
              localStorage.setItem('jobsList', JSON.stringify(res.data));
            }
            return res.data || [];
          })
        ).subscribe();
      } catch (e) {
        console.error('Erreur de parsing localStorage');
      }
    }
    return this.jobService.getAllJob().pipe(
      map((res: any) => {
        if (res && res.data) {
          localStorage.setItem('jobsList', JSON.stringify(res.data));
          console.log('Données chargées depuis API:', res.data.length);
          return res.data;
        }
        return [];
      })
    );
  }
}
