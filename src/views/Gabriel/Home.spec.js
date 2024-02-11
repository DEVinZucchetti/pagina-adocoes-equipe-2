import { describe, it } from 'vitest'
import { mount } from '@vue/test-utils'
import Home from './Home.vue'

describe('Tela Home', () => {
  it('Espera-se que a tela seja renderizada', () => {
    const component = mount(Home)

    expect(component).toBeTruthy()
  })
})
