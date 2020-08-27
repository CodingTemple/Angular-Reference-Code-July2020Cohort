import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReferenceCodeComponent } from './reference-code/reference-code.component';
import { TodoHomeComponent } from './todo-home/todo-home.component';
import { ShowTodoComponent } from './show-todo/show-todo.component';
import { AuthGuard } from './auth/auth.guard'


const routes: Routes = [
  {
    path:'reference', component: ReferenceCodeComponent
  },
  {
    path:'home', component:TodoHomeComponent
  },
  {
    path: 'show', component: ShowTodoComponent, canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
