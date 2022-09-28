import { mount } from "vue-test-utils"
import Tutorial from "@/components/Tutorial.vue"

describe('Tutorial Component', () => {
  const wrapper = mount(Tutorial);
  expect(wrapper.vm.$options.name).toMatch('NuxtTutorial');
})