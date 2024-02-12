import { flushPromises, mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import Profile from './Profile.vue'
import PetService from '@/services/PetService'

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives
})

global.ResizeObserver = require('resize-observer-polyfill')

describe('Tela de perfil do pet', () => {
  const mockRoute = {
    params: {
      id: 1
    }
  }

  vi.spyOn(PetService, 'getOnePet').mockResolvedValue({
    id: 16,
    name: 'Totó',
    age: 12,
    weight: '8.4',
    size: 'MEDIUM',
    breed: {
      id: 2,
      name: 'PITBULL'
    },
    specie: {
      id: 1,
      name: 'Gato'
    }
  })

  it('Espera-se que a tela seja renderizada', () => {
    const component = mount(Profile, {
      global: {
        mocks: {
          plugins: [vuetify],
          $route: mockRoute
        }
      }
    })

    expect(component).toBeTruthy()
  })

  it('Espera-se que exiba as informações do pet', async () => {
    const component = mount(Profile, {
      global: {
        mocks: {
          plugins: [vuetify],
          $route: mockRoute
        }
      }
    })

    await flushPromises()

    expect(component.get("[data-test='pet-name']").text()).toContain(' AUmigo: Totó')
    expect(component.get("[data-test='pet-breed']").text()).toContain('Raça: PITBULL')
    expect(component.get("[data-test='pet-specie']").text()).toContain('Espécie: Gato')
    expect(component.get("[data-test='pet-age']").text()).toContain('Idade: 12 ano(s)')
    expect(component.get("[data-test='pet-weight']").text()).toContain('Peso: 8.4 kg')
    expect(component.get("[data-test='pet-size']").text()).toContain('Porte: Médio')
  })
})
