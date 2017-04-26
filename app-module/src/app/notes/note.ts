export class Note {
  _id?: string;
  text: string;

  get id(): string {
    return this._id;
  }

}
