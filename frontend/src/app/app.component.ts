import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testdevops';


  responsedata: any

  constructor(private http: HttpClient) {
    this.http.post('findtest', '').subscribe(
      (res: any) => {
        this.responsedata = res
      })
  }
}
