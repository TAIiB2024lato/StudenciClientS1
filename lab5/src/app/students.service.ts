import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PaginationDTO } from './models/pagination.interface';
import { Observable } from 'rxjs';
import { StudentResponseDTo } from './models/student-response.interface';
import { StudentRequestDTO } from './models/request.interface';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private httpClient: HttpClient) { }

  public get(pagination: PaginationDTO): Observable<StudentResponseDTo[]>{
    const params = { page: pagination.page ?? 0, count: pagination.count ?? 10 };
    return this.httpClient.get<StudentResponseDTo[]>('https://localhost:7254/api/Students', { params: params });
  }

  public post(body: StudentRequestDTO): Observable<void>{
    return this.httpClient.post<void>('https://localhost:7254/api/Students', body);
  }
}
