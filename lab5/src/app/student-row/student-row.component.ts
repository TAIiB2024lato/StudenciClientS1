import { Component, Input } from '@angular/core';
import { StudentResponseDTo } from '../models/student-response.interface';

@Component({
  selector: '[app-student-row]',
  templateUrl: './student-row.component.html',
  styleUrl: './student-row.component.css'
})
export class StudentRowComponent {
  @Input('app-student-row') student!: StudentResponseDTo;
}
