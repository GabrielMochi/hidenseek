import { shallow } from 'vue-test-utils';
import HomePage from '~/pages/index.vue';

const $route = {
    path: '/some/path',
    query: {
        apikey: '',
        user: ''
    }
};

describe('Test suite for HomePage', () => {
    test('Test initial layout', () => {
        const wrapper = shallow(HomePage, {
            mocks: {
                $route
            }
        });

        expect(wrapper.isVueInstance()).toBeTruthy();
    });
});
