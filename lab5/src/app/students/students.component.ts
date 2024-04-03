import { Component } from '@angular/core';
import { StudentsService } from '../students.service';
import { StudentResponseDTo } from '../models/student-response.interface';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {
  public page: number = 0;
  public count: number = 10;
  public data: StudentResponseDTo[] = [];

  constructor(private studentsService: StudentsService) {
    this.loadData();
  }

  private loadData(): void {
    this.studentsService.get({ page: this.page, count: this.count }).subscribe({
      next: (res) => {
        this.data = res;
      },
      error: (err) => console.error(err),
      complete: () => console.log('complete')
    });
  }

  public onPaginationSubmit(): void {
    this.loadData();
  }
}
