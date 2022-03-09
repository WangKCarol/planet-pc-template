import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},
  qiankun: {
    master: {
      apps: []
    }
  },
  planet: {
    dataField: 'data',
    proxy: {
      development: 'http://localhost:8001',
      prod: 'http://localhost:8008'
    }
  }
});
