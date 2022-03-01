import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  id!: number;
  
  constructor(public routerA: ActivatedRoute, public router: Router) { }

  ngOnInit(): void {
    var con = this.routerA.snapshot.paramMap.get('id')+'';
    this.id = parseInt((con != 'null' ? con: '-1'));

    this.router.navigate([`/user/${this.id}/post`]);
  }

  bttn(condition: boolean){
    if(condition){
      this.router.navigate([`/user/${this.id}/info`]);
    }else{
      this.router.navigate([`/user/${this.id}/post`]);
    }
  }

}
