import { flushPromises, mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import Profile from './Profile.vue'
import PetService from '@/services/PetService'

describe('Tela de perfil do pet', () => {
  const mockRoute = {
    params: {
      id: 1
    }
  }

  vi.spyOn(PetService, 'getOnePet').mockResolvedValue({
    id: 15,
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
    const component = mount(Profile, {
      global: {
        mocks: {
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
          $route: mockRoute
        }
      }
    })

    await flushPromises()

    expect(component.text()).toContain('Amigo: Atum')
    expect(component.text()).toContain('Raça: Labrador')
    expect(component.text()).toContain('Idade: 11 Ano(s)')
    expect(component.text()).toContain('Peso: 30 Kg')
    expect(component.text()).toContain('Porte: LARGE')
    expect(component.text()).toContain('Espécie: Cachorros')
  })

  it('Espera-se que o formulario de adoção seja salvo', () => {
    
  })
})
