import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss']
})
export class LoadingSpinnerComponent implements OnInit {

  @Input() text:string = "Loading";
  @Input() hideText:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
