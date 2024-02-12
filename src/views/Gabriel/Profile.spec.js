import { flushPromises, mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import Profile from './Profile.vue'
import PetService from '@/services/PetService'

describe('Tela de perfil do pet', () => {
  vi.spyOn(PetService, 'getOnePet').mockResolvedValue({
    id: 15,
    race_id: 1,
    name: 'Atum',
    age: 11,
    weight: '30',
    size: 'LARGE',
    race: {
      id: 1,
      name: 'Labrador'
    },
    specie: {
      id: 1,
      name: 'Cachorros'
    }
  })

  it('Espera-se que a tela seja renderizada', () => {
    const component = mount(Profile)

    expect(component).toBeTruthy()
  })

  it('Espera-se que exiba as informações do pet', async () => {
    const mockRouter = {
      params: {
        id: 1
      }
    }

    const component = mount(Profile, {
      global: {
        mocks: {
          $route: mockRouter
        }
      }
    })
    await flushPromises()
    expect(component.text()).toContain('Amigo: Atum')
  })
})
