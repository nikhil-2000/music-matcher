import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SongPickerComponent } from './song-picker/song-picker.component';

const routes: Routes = [
  { path: 'pickSongs', component:  SongPickerComponent },
  { path: '', redirectTo: 'pickSongs', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
