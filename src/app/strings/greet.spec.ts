import { greet } from "./greet";

describe('greet', () => {
    it('it should include the name in the message', () => {
        expect(greet('Paul Sherlock')).toContain('Paul Sherlock');
    });
    //fail test
    // it('it should include the name in the message', () => {
    //     expect(greet('Paul')).toContain('Evil Paul Sherlock');
    // });
});