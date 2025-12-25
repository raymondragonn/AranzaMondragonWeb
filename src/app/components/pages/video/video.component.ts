import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'app-video',
    templateUrl: './video.component.html',
    styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
    @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;
    
    isPlaying = false;
    posterImage = 'assets/img/cambios/9.png'; // Imagen de vista previa

    constructor() { }

    ngOnInit(): void {
    }

    playVideo(): void {
        this.isPlaying = true;
    }
}
