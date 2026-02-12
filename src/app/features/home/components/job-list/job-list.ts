import {Component, OnInit} from '@angular/core';
import {JobService} from '../../../../core/services/job';
import {JobResponse} from '../../../../core/models/job.model';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-job-list',
  imports: [CommonModule],
  templateUrl: './job-list.html',
  styleUrl: './job-list.css',
})
export class JobList implements OnInit {
  jobs: JobResponse[] = [];

  constructor(private jopService: JobService) {}

  ngOnInit(): void {
    this.jopService.getAllJob().subscribe({
      next: (res: any) => {
        this.jobs = res.data;
        console.log(this.jobs);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
