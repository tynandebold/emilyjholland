# Emily J. Holland

Professional website of Emily J. Holland.

Built with [Astro](https://astro.build/).

## How to update the content

To update the specific part of the website, edit the linked pages.

- [The homepage](https://github.com/tynandebold/emilyjholland/blob/main/src/data/site-config.ts)
- The research page:
  - [Current projects](https://github.com/tynandebold/emilyjholland/blob/main/src/pages/research/index.astro)
  - [Publications](https://github.com/tynandebold/emilyjholland/blob/main/src/content/research/publications.json)
  - [Policy & Opinion](https://github.com/tynandebold/emilyjholland/blob/main/src/content/research/policy-opinion.json)
- [The media page](https://github.com/tynandebold/emilyjholland/blob/main/src/content/media/media.json)
- [The contact page](https://github.com/tynandebold/emilyjholland/blob/main/src/content/pages/contact.md)

Tp update your photo or your CV, you have to add new files. That's hard to do. The files are in the [public directory](https://github.com/tynandebold/emilyjholland/tree/main/public).

## Local development

<details>
  <summary>Show details</summary>

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

</details>
