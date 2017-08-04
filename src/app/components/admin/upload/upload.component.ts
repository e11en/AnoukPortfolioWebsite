import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import { UploadService } from '../../../services/upload.service';
import * as _ from 'lodash';

@Component({
    templateUrl: './upload.component.html',
    styleUrls: ['./upload.component.scss'],
    selector: 'app-upload',
})
export class UploadComponent {

    @Output() onFileSelect: EventEmitter<File[]> = new EventEmitter();
    @ViewChild('inputFile') nativeInputFile: ElementRef;
    status: any;

    private _files: File[];
    files: FileUpload[];

    constructor(private uploadService: UploadService) { }

    upload() {
        this.uploadService.pushUploadMultiple(this._files, 'test/').subscribe(progress => {
            console.log(progress);
            this.status = progress;
        });
    }

    onNativeInputFileSelect($event) {
        this._files = $event.srcElement.files;
        this.onFileSelect.emit(this._files);

        _.each(this._files, (file) => {
            this.files.push(new FileUpload(file));
        });
    }

    selectFile() {
        this.nativeInputFile.nativeElement.click();
    }
}

class FileUpload {
    status: string;

    constructor(public file: File) { }
}
