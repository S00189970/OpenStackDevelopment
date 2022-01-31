import { getCurrencies } from "./getCurrencies";

describe('getCurrencies', () => {
    it('it should get the array', () => {
        expect(getCurrencies()).toContain('EUR')
    });
});