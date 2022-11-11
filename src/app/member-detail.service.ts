import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { MemberTaskDetail  } from './member-task-detail'

@Injectable({
  providedIn: 'root'
})

export class MemberDetailService {

  private apiURL = "https://localhost:44341/"; 

  constructor(private httpClient: HttpClient) { }

  getTaskDetail(memberId:string): Observable<MemberTaskDetail[]> {    
    return this.httpClient.get<MemberTaskDetail[]>(this.apiURL + 'projectmgmt/api/v1/Member/list/'+ memberId)
    .pipe(catchError(this.errorHandler))
  }
 
  errorHandler(error:any) {
    console.log('error:'+error);
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
 

}
