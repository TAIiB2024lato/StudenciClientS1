import { Component, EventEmitter, Output, inject } from '@angular/core';
import { StudentRequestDTO } from '../models/request.interface';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.css'
})
export class StudentFormComponent {
  @Output() submit = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

  public object: StudentRequestDTO = {
    albumNo: null,
    groupId: null,
    name: null,
    surname: null
  };

  private readonly api = inject(StudentsService);

  public onSubmit(event: any): void {
    console.log('event: ', event);
    console.log('object: ', this.object);

    this.api.post(this.object).subscribe({
      next: () => {
        console.log('dodano studenta');
        this.submit.emit();
      },
      error: (err) => console.error(err)
    });
  }
}
