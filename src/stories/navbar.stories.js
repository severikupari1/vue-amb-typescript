import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Navbar from '../components/Navbar.vue';

export default {
  title: 'Navbar'
};

export const withNavbar = () => ({
  components: { Navbar },
  template: `
    <template>
      <navbar />
    </template>
  `,
  methods: { action: action('clicked') }
});
