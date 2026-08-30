import Extend from 'flarum/common/extenders';
import app from 'flarum/admin/app';
import commonExtend from '../common/extend';

export default [
  ...commonExtend,

  new Extend.Admin().setting(() => ({
    setting: 'rob2dev-sort-changer.default_sort',
    label: app.translator.trans('rob2dev-sort-changer.admin.settings.default_sort_label', {}, true),
    type: 'select',
    options: {
      latest: app.translator.trans('rob2dev-sort-changer.admin.settings.sort_latest', {}, true),
      top: app.translator.trans('rob2dev-sort-changer.admin.settings.sort_top', {}, true),
      newest: app.translator.trans('rob2dev-sort-changer.admin.settings.sort_newest', {}, true),
      oldest: app.translator.trans('rob2dev-sort-changer.admin.settings.sort_oldest', {}, true),
    },
    default: 'latest',
  })),
];
