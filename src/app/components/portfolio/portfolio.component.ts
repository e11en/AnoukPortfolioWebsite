import { Component } from '@angular/core';
declare let $: any;

@Component({
    selector: 'app-portfolio',
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {

    selectedImage: string;
    selectedImageIndex: number;

    images = [
        'anouk (1).jpg',
        'anouk (2).jpg',
        'anouk (3).jpg',
        'anouk (4).jpg',
        'anouk (5).jpg',
        'anouk (6).jpg',
        'anouk (7).jpg',
        'anouk (8).jpg',
        'anouk (9).jpg',
        'anouk (10).jpg',
        'anouk (11).jpg',
        'anouk (12).jpg',
        'anouk (13).jpg',
        'anouk (14).jpg',
        'anouk (15).jpg',
        'anouk (16).jpg',
        'anouk (17).jpg',
        'anouk (18).jpg',
        'anouk (19).jpg',
        'anouk (20).jpg',
        'anouk (21).jpg',
        'anouk (22).jpg',
        'anouk (23).jpg',
        'anouk (24).jpg',
        'anouk (25).jpg',
        'anouk (26).jpg',
        'anouk (27).jpg',
        'anouk (28).jpg',
        'anouk (29).jpg',
        'anouk (30).jpg',
        'anouk (31).jpg',
        'anouk (32).jpg',
        'anouk (33).jpg',
        'anouk (34).jpg',
        'anouk (35).jpg',
        'anouk (36).jpg',
        'anouk (37).jpg'
    ];

    setSelectedImage(index) {
        this.selectedImageIndex = index;
        this.selectedImage = this.images[index - 1];
    }

    previous() {
        if ((this.selectedImageIndex - 1) > 0) {
            this.setSelectedImage(this.selectedImageIndex - 1);
        }
    }

    next() {
        if ((this.selectedImageIndex - 1) < this.images.length) {
            this.setSelectedImage(this.selectedImageIndex + 1);
        }
    }

    // TODO: nog iets van een auto reader maken van alle image namen
}
