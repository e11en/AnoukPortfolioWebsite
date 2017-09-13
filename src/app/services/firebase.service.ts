import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import * as _ from 'lodash';
import { Observable } from 'rxjs/Observable';
import { NextObserver } from 'rxjs/Observer';
import { FileUpload } from '../models/file-upload.model';
import { SnapShot } from '../models/snapshot.model';

@Injectable()
export class FirebaseService {
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

    pushUploadMultiple(files: FileUpload[], basePath: string): Observable<any> {
        return Observable.create((observer: NextObserver<any>) => {
            _.each(files, (file) => {
                this.pushUpload(file.file, basePath + file.file.name).subscribe(data => {
                    file.progress = data === 0 ? 1 : data;
                    observer.next(<any>file.progress);
                });
            });
        });
    }

    testDatabase() {
        // const database = firebase.database();
        firebase.database().ref('portfolio/' + 1).set({
            base64: '',
            name: 'test123',
            position: 1
        });
    }

    DatabaseSet(table: string, id: string, data: {}) {
        return firebase.database().ref(table + '/' + id).set(data);
    }

    DatabaseGet(table: string, id: string) {
        return firebase.database().ref(table + '/').once('value');
    }

    DatabaseRemove(table: string, id: string) {
        return firebase.database().ref(table + '/' + id).remove();
    }


}
