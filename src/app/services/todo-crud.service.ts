import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TodoCrudService {

  constructor(public afs: AngularFirestore) { }

  /**
   * 
   * @param todoName 
   * @param todoDescription 
   * @param todoCategory 
   * 
   * Returns a firestore collection reference and adds 
   * information to the firestore database
   * 
   * Returns a Promise of our newly created data response
   */
  create_Todo(todoName,todoDescription,todoCategory){
    return this.afs.collection('todo').add({
      todoName: todoName,
      todoDescription: todoDescription,
      todoCategory: todoCategory
    })
  }

  /**
   * No Params needed
   * 
   * Return an Observable of the document from the firebase collection
   * and expose the document ID and and array of data points.
   */
  retrieve_Todo(){
    return this.afs.collection('todo').snapshotChanges();
  }

  /**
   * 
   * @param todoId 
   * @param todoName 
   * @param todoDescription 
   * @param todoCategory 
   * 
   * Update given todo by its documentId and place newly updated
   * information inside of the database
   */
  update_Todo(todoId,todoName,todoDescription,todoCategory){
    this.afs.doc('todo/' + todoId).update({
      todoName: todoName,
      todoDescription: todoDescription,
      todoCategory: todoCategory
    })
  }

  /**
   * 
   * @param todoId 
   * 
   * Delete given todo by its documentId
   */
  delete_Todo(todoId){
    this.afs.doc('todo/' + todoId).delete()
  }
}
