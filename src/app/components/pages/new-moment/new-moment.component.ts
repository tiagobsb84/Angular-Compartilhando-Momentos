import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrls: ['./new-moment.component.css']
})
export class NewMomentComponent implements OnInit {
  bntText = 'Compartilhar!';

  constructor() { }

  ngOnInit(): void {
  }

}
