import { Component, OnInit } from '@angular/core';
import { Album } from '../model/album.model';
import { AlbumService } from '../services/album.service';
import { Artist } from '../model/artist.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-album',
  templateUrl: './add-album.component.html'
})
export class AddAlbumComponent implements OnInit {
  newAlbum = new Album();
  artists! : Artist[];
  newIdArtist! : number;
  newArtist! : Artist;

  constructor(private albumService : AlbumService,
              private router : Router
  ) {

  }
  ngOnInit(): void {
    this.albumService.listeArtist().subscribe( artists => {

      this.artists = artists._embedded!.artists;

    })
  }
  addAlbum(){
    this.newAlbum.artist   = this.artists.find(a => a.idArtist == this.newIdArtist)!;
    this.albumService.ajouterAlbum(this.newAlbum).subscribe(album => {
      console.log(album);
      this.router.navigate(['albums']);
    })

  }

}
