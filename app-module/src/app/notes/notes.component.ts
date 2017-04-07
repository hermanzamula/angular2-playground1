import { Component } from '@angular/core';
import {Note} from './note';
import {Headers, Http, Response} from '@angular/http';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent {

  notes: Note[] = [];
  endpoint = "http://localhost:3000/notes";

  constructor(private http:Http) {
    this.init();
  }

  init() {
    this.http.get(this.endpoint).subscribe((resp:Response)=> this.notes = resp.json());
  }

  addNote(text){
    let items = {text};
    this.notes.push(items);
    let headers = new Headers();
    headers.append('Content-type', "application/json");
    this.http.post(this.endpoint, JSON.stringify(items), {headers}).subscribe((e)=>e);
  }

}
