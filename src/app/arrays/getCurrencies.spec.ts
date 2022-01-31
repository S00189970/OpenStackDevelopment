import { getCurrencies } from "./getCurrencies";

// Paul Sherlock S00189970
describe('getCurrencies', () => {
    it('it should get the EUR in array', () => {
        expect(getCurrencies()).toContain('EUR')
    });
    it('get all currencies in array',() =>{
        expect(getCurrencies()).toEqual(['USD','GDP','EUR'])
    });
    // it('it should get the Kromer in array', () => {
    //     expect(getCurrencies()).toContain('Kromer')
    // });
});