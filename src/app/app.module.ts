import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoHomeComponent } from './todo-home/todo-home.component';
import { ReferenceCodeComponent } from './reference-code/reference-code.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ShowTodoComponent } from './show-todo/show-todo.component';

// Adding Dependency Injection import for the shared module
import { SharedModule } from './shared/shared.module'
import { environment } from 'src/environments/environment';

// Import(s) for AngularFire
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

@NgModule({
  declarations: [
    AppComponent,
    TodoHomeComponent,
    ReferenceCodeComponent,
    ShowTodoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
