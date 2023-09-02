import { Component } from '@angular/core';
import { Song } from './song.model';

@Component({
  selector: 'app-song-container',
  templateUrl: './song-container.component.html',
  styleUrls: ['./song-container.component.css']
})
export class SongContainerComponent {

    private song: Song  = new Song();
}
