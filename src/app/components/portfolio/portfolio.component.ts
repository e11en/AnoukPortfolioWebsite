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
        'anouk (1).JPG',
        'anouk (2).JPG',
        'anouk (3).JPG',
        'anouk (4).JPG',
        'anouk (5).JPG',
        'anouk (6).JPG',
        'anouk (7).JPG',
        'anouk (8).JPG',
        'anouk (9).JPG',
        'anouk (10).JPG',
        'anouk (11).JPG',
        'anouk (12).JPG',
        'anouk (13).JPG',
        'anouk (14).JPG',
        'anouk (15).JPG',
        'anouk (16).JPG',
        'anouk (17).JPG',
        'anouk (18).JPG',
        'anouk (19).JPG',
        'anouk (20).JPG',
        'anouk (21).JPG',
        'anouk (22).JPG',
        'anouk (23).JPG',
        'anouk (24).JPG',
        'anouk (25).JPG',
        'anouk (26).JPG',
        'anouk (27).JPG',
        'anouk (28).JPG',
        'anouk (29).JPG',
        'anouk (30).JPG',
        'anouk (31).JPG',
        'anouk (32).JPG',
        'anouk (33).JPG',
        'anouk (34).JPG',
        'anouk (35).JPG',
        'anouk (36).JPG',
        'anouk (37).JPG'
    ];

    openModal(index) {
        this.setSelectedImage(index);
        this.toggleModal();
    }

    setSelectedImage(index) {
        this.selectedImageIndex = index;
        this.selectedImage = this.images[index];
    }

    toggleModal() {
        $('.overlay').toggleClass('hidden');
        $('.modal').toggleClass('hidden');
    }

    previous() {
        if ((this.selectedImageIndex - 1) >= 0) {
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
