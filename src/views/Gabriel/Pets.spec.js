import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Pets from './Pets.vue'

describe('Tela de listagem de Pets', () => {
  it('Espera-se que a tela seja renderizada', () => {
    const component = mount(Pets)

    expect(component).toBeTruthy()
  })
})
