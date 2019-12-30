tsc --esModuleInterop --resolveJsonModule --downlevelIteration src/server.ts --outDir dist

cd dist && zip -r index.zip server.js index.js ../node_modules bottender.config.js && cd ..
