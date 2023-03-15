import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit{
 constructor(
  private activate: ActivatedRoute
 ){}
 data = new Object()

 ngOnInit(): void {
  console.log(this.activate.snapshot.params)
   this.data = this.activate.snapshot.params
 }
}

