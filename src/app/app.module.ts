import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumsComponent } from './albums/albums.component';
import { AddAlbumComponent } from './add-album/add-album.component';
import { FormsModule } from '@angular/forms';
import { UpdateAlbumComponent } from './update-album/update-album.component';
import { provideHttpClient } from '@angular/common/http';
import { RechercheParArtistComponent } from './recherche-par-artist/recherche-par-artist.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { ListeArtistsComponent } from './liste-artists/liste-artists.component';
import { UpdateArtistComponent } from './update-artist/update-artist.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';


@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    AddAlbumComponent,
    UpdateAlbumComponent,
    RechercheParArtistComponent,
    RechercheParNomComponent,
    SearchFilterPipe,
    ListeArtistsComponent,
    UpdateArtistComponent,
    LoginComponent,
    ForbiddenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
