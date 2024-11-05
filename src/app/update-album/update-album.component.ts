import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumService } from '../services/album.service';
import { Album } from '../model/album.model';
import { Artist } from '../model/artist.model';

@Component({
  selector: 'app-update-album',
  templateUrl: './update-album.component.html',
  styles: ``
})
export class UpdateAlbumComponent implements OnInit {

  currentAlbum = new Album();
  artists! : Artist[];
  updateIdArtist! : number;
  constructor(private activatedRoute : ActivatedRoute,
              private router : Router,
              private albumService : AlbumService
  ) { }

  ngOnInit(): void {
    this.albumService.listeArtist().subscribe(artists => {
      this.artists = artists._embedded.artists;
    })
    this.albumService.consulterAlbum(this.activatedRoute.snapshot.params['id']).subscribe( album => {
      this.currentAlbum = album;
      this.updateIdArtist = album.artist.idArtist;
    })
  }
  updateProduit() {
    this.currentAlbum.artist = this.artists.find(a => a.idArtist == this.updateIdArtist)!;
    this.albumService.updateAlbum(this.currentAlbum).subscribe( album => {
      this.router.navigate(['albums']);
    })
  }
}
