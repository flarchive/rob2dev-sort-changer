import { override } from 'flarum/common/extend';
import app from 'flarum/forum/app';
import GlobalSearchState from 'flarum/forum/states/GlobalSearchState';
import setRouteWithForcedRefresh from 'flarum/common/utils/setRouteWithForcedRefresh';

export { default as extend } from './extend';

app.initializers.add('rob2dev-sort-changer', () => {
  function getDefaultSort(): string {
    return app.forum.attribute<string>('sortChangerDefaultSort') || 'latest';
  }

  // When no explicit ?sort= is present in the URL and we're on the index
  // (not a search/tag/filter view), fall back to the configured default sort
  // instead of Flarum's built-in "latest". This drives both the API request
  // (DiscussionListState reads its sort from app.search.state.params()) and
  // the toolbar dropdown label, since both consume GlobalSearchState.params().
  override(GlobalSearchState.prototype, 'params', function (original: () => Record<string, any>) {
    const params = original();

    if (!params.sort && app.current.get('routeName') === 'index') {
      const defaultSort = getDefaultSort();

      if (defaultSort !== 'latest') {
        params.sort = defaultSort;
      }
    }

    return params;
  });

  // Clicking "Latest" in the dropdown normally clears the `sort` param
  // entirely (core treats the first sortMap entry as "no param needed").
  // With a non-"latest" default configured, that would just fall back to
  // our override above instead of actually showing the latest discussions.
  // So force an explicit ?sort=latest in that case.
  override(GlobalSearchState.prototype, 'changeSort', function (original: (sort: string) => void, sort: string) {
    const defaultSort = getDefaultSort();

    if (defaultSort !== 'latest' && sort === 'latest' && app.current.get('routeName') === 'index') {
      const params = { ...(this as any).params(), sort: 'latest' };

      setRouteWithForcedRefresh(app.route(app.current.get('routeName'), params));

      return;
    }

    return original(sort);
  });
});
