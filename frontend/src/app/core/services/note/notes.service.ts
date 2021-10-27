import { Injectable } from '@angular/core';
import { note } from '../../models/note.model';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  public notes: note[];

  addNewNote(newNote: note): void{
    this.notes.unshift(newNote);
    let newId = 0;

    this.notes.forEach((el) =>{
      el.id = newId;
      newId++;
    })
    console.log(this.notes);
  }

  removeNote(id:number): void{
    let newId = 0;
    this.notes.splice(id, 1);
    this.notes.forEach((el) =>{
      el.id = newId;
      newId++;
    })
  }

  order(): any{

  }

  constructor() {
    this.notes = [
      {
        title: 'Nota 1',
        text: 'Soy un teeexto jejejejeje y ahora tengo que rellenar para agregar mas texto oeoeoe aaaahh',
        date: 1633839182011,
        id: 0
      },
      {
        title: 'Nota 2',
        text: 'Soy un teeexto jejejejeje y ahora tengo que rellenar para agregar mas texto oeoeoe aaaahh',
        date: 1633839182011,
        id: 1
      },
      {
        title: 'Nota 3',
        text: 'Hoy tengo muchas ganas de comer un kuchen, aun que sea de sarten aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        date: 1633839182011,
        id: 2
      },
      {
        title: 'Nota 4',
        text: 'Texto texto texto!! owo',
        date: 1633839182011,
        id: 3
      },
    ]
   }
}
