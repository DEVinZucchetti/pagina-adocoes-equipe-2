import { describe, it, expect, vi } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils'
import Pets from './Pets.vue'
import PetService from '../../services/PetService'

describe('Tela de listagem de Pets', () => {
  vi.spyOn(PetService, 'getAllPets').mockResolvedValue([
    [
      {
        id: 1,
        pet_name: 'Thor',
        age: 5
      },
      {
        id: 2,
        pet_name: 'Java',
        age: 5
      }
    ]
  ])

  it('Espera-se que a tela seja renderizada', () => {
    const component = mount(Pets)

    expect(component).toBeTruthy()
  })

  it('Espera-se que liste um card para cada pet', async () => {
    const component = mount(Pets)

    await flushPromises()
    expect(component.text()).toContain('Thor')
    expect(component.text()).toContain('Java')
    expect(component.findAll("[data-test='item-pet'")).toHaveLength(2)
  })

  it('Espera-se que navegue para a tela de perfil do pet clicado', async () => {
    const mockRouter = {
      push: vi.fn()
    }

    const component = mount(Pets, {
      global: {
        mocks: {
          $router: mockRouter
        }
      }
    })

    await flushPromises()
  })
})
