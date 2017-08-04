import {Component, Directive, ElementRef, EventEmitter, HostListener, Output, ViewChild} from '@angular/core';
import * as _ from 'lodash';

import { UploadService } from '../../../services/upload.service';
import { FileUpload } from '../../../models/file-upload.model';

@Component({
    templateUrl: './upload.component.html',
    styleUrls: ['./upload.component.scss'],
    selector: 'app-upload',
})
export class UploadComponent {
    @ViewChild('inputFile') nativeInputFile: ElementRef;
    files: FileUpload[];
    uploadReady = false;

    constructor(private uploadService: UploadService) {
        this.files = [];
    }

    upload() {
        this.uploadService.pushUploadMultiple(this.files, 'test/').subscribe();
        this.uploadReady = false;
    }

    onNativeInputFileSelect($event) {
        this.setFiles($event.srcElement.files);
    }

    selectFile() {
        this.nativeInputFile.nativeElement.click();
    }

    getProgressMode(file: FileUpload): string {
        return file.progress ?
            file.progress > 1 ?
                file.progress === 100 ? 'determined' : 'indeterminate'
            : 'indeterminate' : 'determinate';
    }

    onFilesChange(fileList: Array<File>) {
        this.setFiles(fileList);
    }

    setFiles(files: any[]) {
        this.files = [];
        _.each(files, (file) => {
            this.files.push(new FileUpload(file));
        });
        this.uploadReady = true;
    }
}


