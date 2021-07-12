import { createLocalVue, mount } from '@vue/test-utils';

import VueRouter from 'vue-router';
import App from '@/App.vue';
import store from '@/store';
import Vuex from 'vuex';
import { routes } from '@/router/routes';

const localVue = createLocalVue();
localVue.use(VueRouter);
localVue.use(Vuex);

localVue.directive('loading', {
  // When the bound element is inserted into the DOM...
  inserted: function() {
    // Focus the element
    const isLoading = false;
  }
});

const router = new VueRouter({
  routes
});

describe('MyComponent.vue', () => {
  let state = {};

  beforeEach(() => {
    state = {
      isLoading: false
    };
  });

  it('App mounts', () => {
    const wrapper = mount(App, { store, localVue, router });
    expect(wrapper.find('#app')).toBeTruthy();
  });
});
