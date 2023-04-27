import { join } from 'path';
import { defineProject } from 'vitest/config';

export default defineProject({
    test: {
        name: 'client',
        root: join(__dirname, 'test'),
        environment: 'happy-dom'
    }
});
