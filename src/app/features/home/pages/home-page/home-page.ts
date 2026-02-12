import { Component } from '@angular/core';
import {JobList} from '../../components/job-list/job-list';

@Component({
  selector: 'app-home-page',
  imports: [JobList],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})

export class HomePage {

}
