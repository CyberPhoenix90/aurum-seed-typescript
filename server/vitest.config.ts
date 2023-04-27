import { join } from 'path';
import { defineProject } from 'vitest/config';

export default defineProject({
    test: {
        name: 'server',
        root: join(__dirname, 'test'),
        environment: 'node'
    }
});
