import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SongPickerComponent } from './song-picker/song-picker.component';
import { SongContainerComponent } from './song-picker/song-container/song-container.component';
import { SearchComponent } from './song-picker/search/search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchDialogComponent } from './song-picker/search/search-dialog/search-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    SongPickerComponent,
    SongContainerComponent,
    SearchComponent,
    SearchDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
