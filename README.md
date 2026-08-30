# Sort Changer

![License](https://img.shields.io/badge/license-MIT-blue.svg) [![Latest Stable Version](https://img.shields.io/packagist/v/rob2dev/sort-changer.svg)](https://packagist.org/packages/rob2dev/sort-changer) [![Total Downloads](https://img.shields.io/packagist/dt/rob2dev/sort-changer.svg)](https://packagist.org/packages/rob2dev/sort-changer)

A [Flarum](https://flarum.org) extension. Change default discussion sort order in Flarum

## Installation

Install with composer:

```sh
composer require rob2dev/sort-changer:"*"
```

## Updating

```sh
composer update rob2dev/sort-changer:"*"
php flarum migrate
php flarum cache:clear
```

## Links

- [GitHub](https://github.com/Rob2dev/flarum-sort-changer)

## Background

This is an independent fork of [huseyinfiliz/sort-changer](https://github.com/huseyinfiliz/sort-changer),
rewritten against the Flarum 2.x frontend API (the original targets Flarum 1.8.x only and is
abandoned upstream).
