import { cpSync } from 'node:fs';

// GitHub Pages publishes out/, while the standalone editor lives outside Next's public/.
cpSync(
  new URL('../honkobo-harahata/', import.meta.url),
  new URL('../out/honkobo-harahata/', import.meta.url),
  { recursive: true },
);
