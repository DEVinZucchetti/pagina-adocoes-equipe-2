import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Profile from './Profile.vue'

describe('Tela de perfil do pet', () => {
  it('Espera-se que a tela seja renderizada', () => {
    const component = mount(Profile)

    expect(component).toBeTruthy()
  })
})
