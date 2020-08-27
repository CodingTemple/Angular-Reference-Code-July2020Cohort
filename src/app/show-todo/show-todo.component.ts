import { Component, OnInit } from '@angular/core';
import { TodoCrudService } from '../services/todo-crud.service'
import { FormGroup,FormControl,Validators } from '@angular/forms';
@Component({
  selector: 'app-show-todo',
  templateUrl: './show-todo.component.html',
  styleUrls: ['./show-todo.component.scss']
})
export class ShowTodoComponent implements OnInit {

  data;
  public show:boolean = false;

  constructor( public crudService: TodoCrudService) { }

  todoDescriptionDisplay;
  todoNameDisplay;
  todoCategoryDisplay;
  // Todo Reactive Form

  updateForm = new FormGroup({
    todoName: new FormControl('', [Validators.required, Validators.minLength(4)]),
    todoDescription: new FormControl('',[Validators.required]),
    todoCategory: new FormControl('',[Validators.required,Validators.minLength(5)])
  })


  get todoName() {return this.updateForm.get('todoName')};

  get todoDescription() {return this.updateForm.get('todoDescription')};

  get todoCategory() { return this.updateForm.get('todoCategory')};

  // Getter Methods for input values from reactive form
  get todoNameValue() {return this.updateForm.get('todoName').value}

  get todoDescriptionValue() {return this.updateForm.get('todoDescription').value}

  get todoCategoryValue() {return this.updateForm.get('todoCategory').value}
  
  // Form handler for Todo Reactive Form
  onSubmit(id, todoName,todoDescription,todoCategory){
    this.crudService.update_Todo(id,todoName,todoDescription,todoCategory)
    console.log(`${this.updateForm.value.todoName}`)
  }

  // Method for toggle of update form (show/don't show)
  toggle(){
    this.show = !this.show;
  }

  delete(id){
    this.crudService.delete_Todo(id)
  }


  ngOnInit(): void {
    this.crudService.retrieve_Todo().subscribe(data => {
      this.data = data.map(rawData => {
        return {
          id: rawData.payload.doc.id,
          todoName: rawData.payload.doc.data()['todoName'],
          todoDescription: rawData.payload.doc.data()['todoDescription'],
          todoCategory: rawData.payload.doc.data()['todoCategory']
        }
      })
      console.log(this.data[0].id)
    })
  }

}
