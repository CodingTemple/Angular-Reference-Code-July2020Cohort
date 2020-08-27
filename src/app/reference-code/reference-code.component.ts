import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-reference-code',
  templateUrl: './reference-code.component.html',
  styleUrls: ['./reference-code.component.scss']
})
export class ReferenceCodeComponent implements OnInit {

  hello = 'Hello World from Angular';

  displayLanguage(){
    console.log(`TypeScript in use for Angular`)
  }

  //Sample Event Displayer
  displayEvent(event){
    console.log(`Angular Event ${event.target}`)
  }

  // Make dummy data 
  foods = [{
    'item1':'burgers',
    'item2': 'hotdogs',
    'item3': 'pizza'
  },
  {
    'item1': 'tacos',
    'item2': 'wine',
    'item3': 'chocolate'
  }
]

  name = 'Joel';

  // Two-way Data Binding Example
  @Input() size:number | string;
  @Output() sizeChange = new EventEmitter<number>()

  decrement() {
    this.resize(-1);
  }

  increment(){
    this.resize(+1)
  }

  resize(delta: number){
    this.size = 20 + delta;
    this.sizeChange.emit(this.size)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
