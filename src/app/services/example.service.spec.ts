import { TestBed, async, inject } from '@angular/core/testing';

import { ExampleService } from './example.service';

describe('ExampleService', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [
                ExampleService
            ]
        });
    }));

    it('should construct', async(inject([ExampleService], (service) => {
        expect(service).toBeDefined();
    })));

    describe('getVehicles', () => {
        const expectedReturn = [
            { id: 1, name: 'X-Wing Fighter' },
            { id: 2, name: 'Tie Fighter' },
            { id: 3, name: 'Y-Wing Fighter' }
        ];

        it('should return and array of objects', async(inject([ExampleService], (service) => {
            expect(service.getVehicles()).toEqual(expectedReturn);
        })));
    });
});

