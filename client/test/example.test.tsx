import { Renderable, Aurum } from 'aurumjs';
import { describe, expect, test } from 'vitest';

function AurumTestComponent(): Renderable {
    return <div>Hello World</div>;
}

describe('Example test suite', () => {
    test('Example test', () => {
        expect(true).toBe(true);
    });

    test('Component test', () => {
        Aurum.attach(<AurumTestComponent />, document.body);
        expect(document.body.innerHTML).toBe('<div>Hello World</div>');
    });
});
