import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

  constructor(public actvateR: ActivatedRoute) { }

  id!: number;
  objects!: Observable<Array<Array<string>>>;

  ngOnInit(): void {

      var handle = (this.actvateR.snapshot.parent?.paramMap.get('id'))+"";
      var condition = (handle !== 'null' ? handle:'-1');

      this.id = parseInt(condition);

      this.dataOpen();
  }

  dataOpen(): void{
    this.actvateR.data.subscribe((datas) => {
      var aa = ['name', 'phone', 'username', 'website'];
      var arr = [['Name', ''], ['Phone', ''], ['Username', ''], ['Website', '']];

      for(var count = 0; count < aa.length;count++){
        arr[count][1] = datas.data[(this.id-1)][aa[count]];
      }

      setTimeout(() => {
        this.objects = new Observable((nexts) => {
          nexts.next(arr);
        });
      }, 2000);
    });
  }
}