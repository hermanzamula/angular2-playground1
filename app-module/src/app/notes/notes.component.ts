import {Component} from '@angular/core';
import {Note} from './note';
import {Headers, Http, Response, RequestOptionsArgs} from '@angular/http';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent {

  notes: Note[] = [];
  endpoint = 'http://localhost:3000/notes';

  constructor(private http:Http) {
    this.init();
  }

  init() {
    this.load();
  }

  private load() {
    this.http.get(this.endpoint).subscribe((resp: Response) => this.notes = resp.json());
  }

  addNote(text){
    let items = {text};
    this.notes.push(items);
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    this.http.post(this.endpoint, JSON.stringify(items), {headers}).subscribe((e) => e);
  }

  removeNote(note:Note) {
    this.http.delete(this.endpoint, {params: {id: note._id}}).subscribe((e)=> this.load());
  }

}
