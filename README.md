<br />
<br />

<div align="center">
    <picture>
        <source media="(prefers-color-scheme: dark)"
            srcset="https://raw.githubusercontent.com/trentgillis/prime-condies/refs/heads/main/.github/static/primecondies-logo-dark.svg" />
        <source
            media="(prefers-color-scheme: light)"
            srcset="https://raw.githubusercontent.com/trentgillis/prime-condies/refs/heads/main/.github/static/primecondies-logo-light.svg" />
        <img
            alt="PrimeCondies logo"
            src="https://raw.githubusercontent.com/trentgillis/prime-condies/refs/heads/main/.github/static/primecondies-logo-light.svg" width="200" />
    </picture>
</div>

<br />
<br />

This is the main repository for the [primecondies.com](https://primecondies.com/), a web applicaiton that serves weather information for rock climbers. It's goal is to provide climbers with a robust user experience that makes getting up-to-date weather information for their climbing projects easy.

## How it works?

PrimeCondies is a NextJS application that stores data about climbing areas and then uses Open-Meteo ([open-meteo.com/](https://open-meteo.com/en/docs)) to get the weather forecast for those areas. It's primary purpose is to store the location data for climbing areas, use that location data to get weather forecasts, and then display the information in a user interface.

## Contributions

Contributions welcome! Feel free to create issues or PRs.

## Adding Areas

The list is areas is manually managed in `src/db/areas.ts`. To add areas, update this file with the area and it's details and make a PR.

## Development

The following are required to run the application locally for development:

- NodeJS
- pnpm
- Docker

The easiest way to run the application is using Docker, which is used to serve PostgreSQL for local development. You can also point the applicaiton at your own instance of [Neon](https://neon.com/) if you choose by updating the proper variables in your `.env.local` file. For running the development environment with Docker, perform the following steps:

1. Run `docker compose up -d`
2. Run `pnpm db:seed`. This will insert the areas from `src/db/areas.ts` into the database
3. (Optional) Change the `VERCEL_ENV` variable in `.env.local` to something other than `development`. This will result in data being fetched for areas rather than the mock data being returned. An API key is not required for this, but you may be throttled by Open-Meto if your IP address makes too many requests in a short period of time. For more information, see the [Open-Meteo Documentation](https://open-meteo.com/en/docs)
4. Run `pnpm dev`. The application should now be available at `localhost:3000`
5. (Optional) To run the production buid, simply run `pnpm build && pnpm start`
