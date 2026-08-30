# Contributing

Thanks for considering a contribution to Change Default Sort Order!

## Adding a translation

Translations live in the `locale/` directory as one YAML file per Flarum
locale code (`en.yml`, `nl.yml`, `de.yml`, ...). Flarum's `Extend\Locales`
extender picks up every file in that directory automatically — there is no
code to touch, just a new file.

To add a language:

1. Copy `locale/en.yml` to `locale/<code>.yml`, using the same locale code
   Flarum itself uses for that language (e.g. `es` for Spanish, `pt-BR` for
   Brazilian Portuguese — check an existing
   [Flarum language pack](https://github.com/flarum-lang) if unsure).
2. Translate every value under `rob2dev-sort-changer.admin.settings` (these
   are the labels shown on the extension's settings page in the admin
   panel). Keep the keys unchanged.
3. The `forum:` key is intentionally empty — this extension has no
   forum-facing strings, it only changes sort behavior silently.
4. Open a pull request. Please only include the translated `.yml` file, no
   unrelated changes.

### Testing your translation locally

The translation only shows up if the corresponding Flarum language pack
(e.g. `flarum-lang/german`) is installed and active on your test forum, and
that language is selected as the interface language. English (`en`) is
always the fallback if a key is missing in the active locale.

## Reporting issues / requesting features

Open a GitHub issue with:

- The Flarum core version (`php flarum info`)
- What you expected vs. what happened
- Steps to reproduce, if applicable

## Code contributions

- Keep changes focused — this extension intentionally does one small thing
  (control the default discussion sort order) and targets Flarum 2.x's
  frontend API (`GlobalSearchState`, the `Admin` extender). PRs that
  significantly expand scope are probably better as a separate extension.
- Run `npm run build` in `js/` after any frontend change and commit the
  updated `js/dist/*` files — Composer installs this extension directly
  from the repository without a build step.
