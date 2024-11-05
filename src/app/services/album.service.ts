import { Injectable } from '@angular/core';
import { Album } from '../model/album.model';
import { Artist } from '../model/artist.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiURL } from '../config';

import { ArtistWrapped } from '../model/artistWrapped.model';
import { AuthService } from './auth.service';

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
  constructor(private http : HttpClient,
              private authService : AuthService
  ) {
  }


  listAlbums(): Observable<Album[]> {
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.get<Album[]>(apiURL+"/all",{headers:httpHeaders});
  }

  ajouterAlbum(album: Album): Observable<Album> {
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.post<Album>(apiURL+"/addalbum", album, {headers:httpHeaders});
  }
  supprimerAlbum(id : number){
    const url = `${apiURL}/delalbum/${id}`;
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.delete(url, {headers:httpHeaders});
  }

  consulterAlbum(id: number): Observable<Album> {
    const url = `${apiURL}/getbyid/${id}`;
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.get<Album>(url,{headers:httpHeaders});
  }
  updateAlbum(album: Album): Observable<Album> {
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.put<Album>(apiURL+"/updatealbum", album, {headers:httpHeaders});

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
    let jwt = this.authService.getToken();
jwt = "Bearer "+jwt;
let httpHeaders = new HttpHeaders({"Authorization":jwt})
return this.http.get<ArtistWrapped>(this.artistURL,{headers:httpHeaders}
);

  }


  rechercherParArtist(idArt: number): Observable<Album[]> {
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.get<Album[]>(apiURL+"/albumArtist/"+idArt,{headers:httpHeaders});

  }

  rechercherParNom(nom: string): Observable<Album[]> {
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    const url = `${apiURL}/albumByName/${nom}`;
    return this.http.get<Album[]>(url,{headers:httpHeaders});
  }
  ajouterArtist(artist: Artist): Observable<Artist> {
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.post<Artist>(this.artistURL, artist, {headers:httpHeaders});
  }
}
