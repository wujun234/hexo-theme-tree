'use strict';

hexo.extend.filter.register('before_generate', () => {
  const theme = hexo.theme.config;
  const i18n = hexo.theme.i18n;
  const __ = i18n.__(Array.from(new Set([...i18n.languages, ...i18n.list()])));
  const goatcounter = theme.goatcounter || {};

  function requireSingle(alternatives) {
    const enabled = Object.keys(alternatives).filter((key) => alternatives[key]);
    if (enabled.length > 1) {
      throw new Error(__('check_config_error.exclusive', enabled.join(', ')));
    }
  }

  requireSingle({
    'goatcounter.post_counter': goatcounter.post_counter,
    'valine.enableCounter': theme.valine && theme.valine.enableCounter,
  });
  requireSingle({
    'goatcounter.site_counter': goatcounter.site_counter,
    'busuanzi': theme.busuanzi,
  });
  if ((goatcounter.site_counter || goatcounter.post_counter) && !goatcounter.site_code) {
    throw new Error(__('goatcounter.site_code_required'));
  }
});
