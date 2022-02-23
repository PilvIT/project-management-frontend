# Project Management

## Development

Install the dependencies using `yarn install` then start the server

```bash
yarn dev
```

Notice that you need to start the [backend](https://github.com/PilvIT/project-management-apis) and configure GitHub App.

## Testing

You need to install browsers for playwright 

```bash
yarn playwright install
```

Then run the tests

```bash
yarn test
```

Other variations such as running only chromium

```bash
yarn test --project=chromium
yarn test --project=firefox
yarn test --project=webkit
```

In development running certain edge cases with mocked API may be useful:

```bash
yarn test:headed --project=chromium ./path/to/test-file
```

Add the `await page.pause()` in the beginning of the test, and you can click the browser manually.

## License

The content of this repository is licensed under [MIT License](./LICENSE).
