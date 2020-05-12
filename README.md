# Deno + Apollo Client + Snowpack

This project uses snowpack.dev to make the `@apollo/client` node module useful in a Deno app. Snowpack turns most npm modules into ES modules you can import directly.

The npm cruft exists only in the `/deps/` directory. Snowpack installs everything to `/deps/web_modules`, which is symlinked back to the root dir. This allows the Deno app to just `import` directly from `./web_modules/@apollo/client.js` and do useful things.

You can make Snowpack install other npms by adding them to `knownEntrypoints` in `/deps/snowpack.config.json`.

## Run it

1. `flyctl auth token`, put it in an env var named `FLY_AUTH_TOKEN`
2. `cd deps; yarn install; snowpack install; cd ..`
3. `deno run --allow-env --allow-net server.tst`