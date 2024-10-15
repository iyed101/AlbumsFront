import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Album } from '../model/album.model';
import { AlbumService } from '../services/album.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html'
})
export class AlbumsComponent implements OnInit {
  albums? : Album[]


  constructor(private albumService : AlbumService,
              private router : Router,
              public authService: AuthService

  ) {


    }

  ngOnInit(): void {
    this.chargerAlbums();
  }
  chargerAlbums(){
    this.albumService.listAlbums().subscribe( albums => {
      for (let alb of albums){
        console.log(alb.artist);
      }
        this.albums = albums;
      })
  }
  supprimerAlbum(album : Album){
    let conf = confirm("Etes-vous sûr ?");
    if (conf){
      this.albumService.supprimerAlbum(album.idAlbum).subscribe(()=>{
        console.log("Album supprimé");
        this.chargerAlbums();
      })
    }
  }

}
