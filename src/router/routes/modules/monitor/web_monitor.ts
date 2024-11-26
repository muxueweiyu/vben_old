import type { AppRouteModule } from '@/router/types';

import { LAYOUT } from '@/router/constant';
import { t } from '@/hooks/web/useI18n';

const web_monitor: AppRouteModule = {
  path: '/web_monitor',
  name: 'web_monitor',
  component: LAYOUT,
  redirect: '/web_monitor/index',
  meta: {
    orderNo: 10,
    icon: 'ion:grid-outline',
    title: t('routes.web_monitor.web_monitor'),
  },
  children: [
    {
      path: 'index',
      name: 'web_monitor_index',
      component: () => import('@/views/web_monitor/home/index.vue'),
      meta: {
        // affix: true,
        title: t('routes.web_monitor.web_monitor'),
      },
    },
    {
      path: 'index_sub',
      name: 'web_monitor_index_sub',
      component: () => import('@/views/web_monitor/home_sub/index.vue'),
      meta: {
        // affix: true,
        title: t('routes.web_monitor.web_monitor_sub'),
      },
    },
  ],
};

export default web_monitor;
