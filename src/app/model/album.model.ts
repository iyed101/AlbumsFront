import { Artist } from "./artist.model";

export class Album {
  idAlbum! : number;
  name! : string;
  date_sortie! : Date;
  genre! : string;
  nb_tracks! : number;
  artist! : Artist;

}
