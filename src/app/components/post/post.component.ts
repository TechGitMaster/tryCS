import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { dataS } from './dataS';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  arrData!: Array<dataS>;
  arrObsevable!: Observable<Array<dataS>>;
  id!: string;
  constructor(public acR: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.acR.snapshot.parent?.paramMap.get('id')+'';

    this.acR.data.subscribe((data) => {
      this.arrData = new Array<dataS>();
      for(var count = 0;count < data.data.length;count++){
        if(parseInt(this.id) == data.data[count].userId){
          var datas = new dataS();
          datas.userId = data.data[count].userId;
          datas.id = data.data[count].id;
          datas.title = data.data[count].title;
          datas.body = data.data[count].body;
          this.arrData.push(datas);
        }

        if(count+1 >= data.data.length){
          setTimeout(() => {
            this.arrObsevable = new Observable((da) => {
              da.next(this.arrData);
            });
          }, 2000);
        }
      }

    });

  }

}
