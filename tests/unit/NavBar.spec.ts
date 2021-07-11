import { createLocalVue, mount } from '@vue/test-utils'

import VueRouter from 'vue-router'
import App from '@/App.vue'
import store from '@/store'
import Vuex from 'vuex'
import { routes } from '@/router/routes'
import Navbar from '@/components/Navbar.vue'

const localVue = createLocalVue()
localVue.use(VueRouter)
localVue.use(Vuex)

localVue.directive('loading', {
  // When the bound element is inserted into the DOM...
  inserted: function() {
    // Focus the element
    const isLoading = false
  }
})

const router = new VueRouter({
  routes
})

describe('Navbar.vue', () => {
  let state = {}

  beforeEach(() => {
    state = {
      isLoading: false
    }
  })

  it('Navbar mounts and navigation contains wanted texts', () => {
    const wrapper = mount(Navbar, { store, localVue, router })
    expect(wrapper.find('.nav')).toBeTruthy()
    expect(wrapper.find('.nav > div > .nav-text').text()).toEqual('Vue js')
    expect(
      wrapper.find('.nav > .main-links > .nav-item:nth-child(1)').text()
    ).toEqual('Home')
    expect(
      wrapper.find('.nav > .main-links > .nav-item:nth-child(2)').text()
    ).toEqual('Edit / Delete')
    expect(
      wrapper.find('.nav > .main-links > .nav-item:nth-child(3)').text()
    ).toEqual('Create new')
  })
})
