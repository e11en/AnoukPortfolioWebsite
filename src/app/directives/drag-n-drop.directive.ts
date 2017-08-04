import {Directive, EventEmitter, HostBinding, HostListener, Input, Output} from '@angular/core';
import * as _ from 'lodash';

@Directive({
    selector: '[appDnd]'
})
export class DndDirective {
    @Input() private allowed_extensions: Array<string> = [];
    @Output() private filesChangeEmiter: EventEmitter<File[]> = new EventEmitter();
    @Output() private filesInvalidEmiter: EventEmitter<File[]> = new EventEmitter();
    @HostBinding('style.background') private background = '#fff';

    constructor() { }

    @HostListener('dragover', ['$event']) public onDragOver(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = '#e3e3e3';
    }

    @HostListener('dragleave', ['$event']) public onDragLeave(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = '#fff'
    }

    @HostListener('drop', ['$event']) public onDrop(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = '#fff';
        const files = evt.dataTransfer.files;
        const valid_files: Array<File> = [];
        const invalid_files: Array<File> = [];

        if (files.length > 0) {
            _.each(files, (file: File) => {
                const ext = file.name.split('.')[file.name.split('.').length - 1];
                if (this.allowed_extensions.lastIndexOf(ext) !== -1) {
                    valid_files.push(file);
                }else {
                    invalid_files.push(file);
                }
            });
            this.filesChangeEmiter.emit(valid_files);
            this.filesInvalidEmiter.emit(invalid_files);
        }
    }

}