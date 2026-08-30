<?php

/*
 * This file is part of rob2dev/sort-changer.
 *
 * Copyright (c) 2026 Rob.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Rob2dev\Sortchanger;

use Flarum\Extend;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/less/forum.less'),
    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js')
        ->css(__DIR__.'/less/admin.less'),
    new Extend\Locales(__DIR__.'/locale'),
    (new Extend\Settings())
        ->serializeToForum('sortChangerDefaultSort', 'rob2dev-sort-changer.default_sort', 'strval', 'latest'),
];
