import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import * as _ from 'lodash';
import { Observable } from 'rxjs/Observable';
import { NextObserver } from 'rxjs/Observer';

@Injectable()
export class UploadService {
    private basePath = '/uploads';

    pushUpload(file: Blob, path: string): Observable<any> {
        const storageRef = firebase.storage().ref();
        const uploadTask = storageRef.child(`${this.basePath}/${path}`).put(file);

        return Observable.create((observer: NextObserver<any>) => {
            uploadTask.on('state_changed', function(snapshot: SnapShot){
                observer.next(<any>(snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            }, function(error) {
                observer.next(<any>error);
                observer.complete();
            });
        });
    }

    pushUploadMultiple(files: File[], basePath: string): Observable<any> {
        return Observable.create((observer: NextObserver<any>) => {
            _.each(files, (file) => {
                this.pushUpload(file, basePath + file.name).subscribe(data => {
                    observer.next(<any>data);
                });
            });
        });
    }
}

class SnapShot {
    bytesTransferred: number;
    totalBytes: number;
}
