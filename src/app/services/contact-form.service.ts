import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse,HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError} from 'rxjs/operators';
import { Form_module } from '../Components/contact-form/form-module';




@Injectable({
  providedIn: 'root'
})
export class ContactFormService {

  baseURL='http://localhost/clevermonks/insert.php';
  errorData={};

  httpOptions={
    headers : new HttpHeaders({'Content-Type':'application/json'})
  };

  constructor(private http:HttpClient) { }

  contactForm(formdata: Form_module) {
    return this.http.post<Form_module>(this.baseURL +  formdata, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  handleError(error:any) {
    let errorData = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorData = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorData = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorData);
    this.errorData = {
      errorTitle: 'Oops! Request for document failed',
      errorDesc: 'Something bad happened. Please try again later.'
    };
    return throwError(() => {
        return errorData;
    });
  }

}
