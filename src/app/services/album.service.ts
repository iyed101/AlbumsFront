import { Injectable } from '@angular/core';
import { Album } from '../model/album.model';
import { Artist } from '../model/artist.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiURL } from '../config';

import { ArtistWrapped } from '../model/artistWrapped.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  albums : Album[] = [];
  album! : Album ;
  artistURL : string = 'http://localhost:1234/albums/art ';
  //artist! : Artist[] ;
  constructor(private http : HttpClient) {
  }


  listAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(apiURL );
  }

  ajouterAlbum(album: Album): Observable<Album> {
    return this.http.post<Album>(apiURL, album, httpOptions);
  }
  supprimerAlbum(id : number){
    const url = `${apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
  }

  consulterAlbum(id: number): Observable<Album> {
    const url = `${apiURL}/${id}`;
    return this.http.get<Album>(url);
  }
  updateAlbum(album: Album): Observable<Album> {
    return this.http.put<Album>(apiURL, album, httpOptions);
  }
  trierAlbums() {
    this.albums = this.albums.sort((n1, n2) => {
      if (n1.nb_tracks! > n2.nb_tracks!) {
        return 1;
      }
      if (n1.nb_tracks! < n2.nb_tracks!) {
        return -1;
      }
      return 0;
    });
  }
  listeArtist(): Observable<ArtistWrapped> {
    return this.http.get<ArtistWrapped>(this.artistURL);
  }


  rechercherParArtist(idArt: number): Observable<Album[]> {
    const url = `${apiURL}/albumArtist/${idArt}`;
    return this.http.get<Album[]>(url);
  }

  rechercherParNom(nom: string): Observable<Album[]> {
    const url = `${apiURL}/albumByName/${nom}`;
    return this.http.get<Album[]>(url);
  }
  ajouterArtist(artist: Artist): Observable<Artist> {
    return this.http.post<Artist>(this.artistURL, artist, httpOptions);
  }
}
