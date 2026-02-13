import { Component, Input, OnInit } from '@angular/core';
import { JobService } from '../../../../core/services/job';
import { JobResponse } from '../../../../core/models/job.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-job-list',
  imports: [CommonModule],
  templateUrl: './job-list.html',
  styleUrl: './job-list.css',
})
export class JobList implements OnInit {
  @Input() jobs: JobResponse[] = [];
  isLoading: boolean = false;
  errorMessage: string = '';

  constructor(private jobService: JobService) {
  }

  ngOnInit(): void {
    if (this.jobs && this.jobs.length > 0) {
      console.log('Jobs reçus via @Input:', this.jobs.length);
      return;
    }

    this.loadJobsFromService();
  }

  private loadJobsFromService(): void {
    const cachedJobs = localStorage.getItem('jobsList');
    if (cachedJobs) {
      try {
        this.jobs = JSON.parse(cachedJobs);
        console.log('Chargé depuis localStorage:', this.jobs.length);
      } catch (e) {
        console.error('Erreur de parsing localStorage');
      }
    }
    this.isLoading = true;
    this.jobService.getAllJob().subscribe({
      next: (res: any) => {
        if (res && res.data) {
          this.jobs = res.data;
          localStorage.setItem('jobsList', JSON.stringify(this.jobs));
          console.log('Chargé depuis API:', this.jobs.length);
        }
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Erreur:', err);
        this.errorMessage = 'Erreur lors du chargement des données';
        this.isLoading = false;
      }
    });
  }
}
