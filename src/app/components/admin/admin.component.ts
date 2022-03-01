import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(public activeR: ActivatedRoute, public router: Router) { }

  datas$!: Observable<any>;


  ngOnInit(): void {
    setTimeout(() => {
      this.datas$ = this.activeR.data;
    }, 2000);
    console.log(this.datas$);
  }

  CheckingGo(id: number){
    console.log(id);
    this.router.navigate([`/user/${id}`]);
  }

  
}
