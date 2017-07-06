import { TestBed, async } from '@angular/core/testing';

import { CoreModule } from '../../core/core.module';
import { ExampleService } from '../../services/example.service';
import { ExampleComponent } from './example.component';

describe('ExampleComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ExampleComponent
            ],
            imports: [ CoreModule ],
            providers: [ ExampleService ]
        }).compileComponents();
    }));

    it('should create the example component', async(() => {
        const fixture = TestBed.createComponent(ExampleComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});
