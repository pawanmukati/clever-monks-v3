import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class SmtpService {

  constructor(private httpClient: HttpClient) { }
  // sendMail(data:any) {
  //   let date = moment().format('DD-MM-YYYY');
  //   data['date']=date;
  //   let jsonData= JSON.stringify(data);
  //   let url = 'https://script.google.com/macros/s/AKfycbzs2zUPSUM8kaG9EieQvUKQkESbF9LpKiYy0hp-iv-N9sMKyRpLCK3LQz-JvPoSKEvR/exec';
  //   // let careersUrl = 'https://script.google.com/macros/s/AKfycbxZoUZObQ0QevShnTvb0XPPnlKgKKHdmgA79GJSZnME3PcuJ16hIrEQz-PKWerS37x4qQ/exec'
  //   return this.httpClient.get(url+`?data=${jsonData}`, )
  // }

  sendMailCareers(data:any) {
    let date = moment().format('DD-MM-YYYY');
    data['date']=date;
    let jsonData= JSON.stringify(data);
    // let url = 'https://script.google.com/macros/s/AKfycbzs2zUPSUM8kaG9EieQvUKQkESbF9LpKiYy0hp-iv-N9sMKyRpLCK3LQz-JvPoSKEvR/exec';
    let careersUrl = 'https://script.google.com/macros/s/AKfycbzs2zUPSUM8kaG9EieQvUKQkESbF9LpKiYy0hp-iv-N9sMKyRpLCK3LQz-JvPoSKEvR/exec'
    return this.httpClient.get(careersUrl+`?data=${jsonData}`, )
  }
}
