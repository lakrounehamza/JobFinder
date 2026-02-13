import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobList } from '../../components/job-list/job-list';
import { JobResponse } from '../../../../core/models/job.model';

@Component({
  selector: 'app-home-page',
  imports: [JobList],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})

export class HomePage implements OnInit {
  jobs: JobResponse[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.jobs = data['jobs'] || [];
    });
  }
}
