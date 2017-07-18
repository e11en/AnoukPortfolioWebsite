import { TestBed, async } from '@angular/core/testing';

import { ExampleService } from '../../services/example.service';
import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ContactComponent
            ],
            providers: [ ExampleService ]
        }).compileComponents();
    }));

    it('should create the component', async(() => {
        const fixture = TestBed.createComponent(ContactComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});
