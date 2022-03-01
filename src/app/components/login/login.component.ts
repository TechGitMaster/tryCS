import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServService } from 'src/app/serviceS/serv.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{



  constructor(public router: Router, public service: ServService, public http: HttpClient) { }



  ngOnInit(): void {  
    this.service.listen('connect').subscribe((data: any) => {
      console.log(data);
    });
  }


  login(){
    var userH = <HTMLInputElement> document.querySelector('.name');
    var passH = <HTMLInputElement> document.querySelector('.pass');

    if(userH.value.toString() !== '' && passH.value.toString() !== ''){
      localStorage.setItem('login', userH.value+''+passH.value);
      this.router.navigate(['/admin']);
    }
  }

  

}
