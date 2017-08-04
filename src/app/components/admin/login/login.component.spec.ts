import { TestBed, async } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                LoginComponent
            ]
        }).compileComponents();
    }));

    it('should create the component', async(() => {
        const fixture = TestBed.createComponent(LoginComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});
