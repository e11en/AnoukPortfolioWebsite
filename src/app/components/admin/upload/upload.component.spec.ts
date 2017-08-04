import { TestBed, async } from '@angular/core/testing';

import { UploadComponent } from './upload.component';

describe('UploadComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                UploadComponent
            ]
        }).compileComponents();
    }));

    it('should create the component', async(() => {
        const fixture = TestBed.createComponent(UploadComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});
