import { TestBed, async } from '@angular/core/testing';

import { CoreModule } from '../../core/core.module';
import { ErrorComponent } from './error.component';

describe('ErrorComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ErrorComponent
            ],
            imports: [ CoreModule ]
        }).compileComponents();
    }));

    it('should create the error component', async(() => {
        const fixture = TestBed.createComponent(ErrorComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});
