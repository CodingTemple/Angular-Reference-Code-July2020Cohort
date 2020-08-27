import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { TodoCrudService } from '../services/todo-crud.service'
@Component({
  selector: 'app-todo-home',
  templateUrl: './todo-home.component.html',
  styleUrls: ['./todo-home.component.scss']
})
export class TodoHomeComponent implements OnInit {

  todoDescriptionDisplay;
  todoNameDisplay;
  todoCategoryDisplay;
  // Todo Reactive Form

  todoForm = new FormGroup({
    todoName: new FormControl('', [Validators.required, Validators.minLength(4)]),
    todoDescription: new FormControl('',[Validators.required]),
    todoCategory: new FormControl('',[Validators.required,Validators.minLength(5)])
  })


  get todoName() {return this.todoForm.get('todoName')};

  get todoDescription() {return this.todoForm.get('todoDescription')};

  get todoCategory() { return this.todoForm.get('todoCategory')};
  
  // Form handler for Todo Reactive Form
  onSubmit(){
    this.crudService.create_Todo(this.todoForm.value.todoName,this.todoForm.value.todoDescription,this.todoForm.value.todoCategory)
    console.log(`${this.todoForm.value.todoName}`)
  }


  constructor( public crudService: TodoCrudService) { }

  ngOnInit(): void {
  }

}
