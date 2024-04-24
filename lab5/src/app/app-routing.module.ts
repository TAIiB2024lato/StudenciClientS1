import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { GroupsComponent } from './groups/groups.component';
import { TeachersComponent } from './teachers/teachers.component';

const routes: Routes = [
  { path: 'students', component: StudentsComponent },
  { path: 'groups', component: GroupsComponent },
  { path: 'teachers', component: TeachersComponent },
  { path: '', redirectTo: 'students', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
