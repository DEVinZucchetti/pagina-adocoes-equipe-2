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

  it('Espera-se que os dados sejam enviados ao bando de dados', async () => {
    const adoptePet = vi.spyOn(PetService, 'adoptePet').mockResolvedValue()

    const component = mount(Profile, {
      global: {
        mocks: {
          $route: mockRoute
        }
      }
    })

    await flushPromises()

    component.get("[data-test='input-name']").setValue('Jose Miranda')
    component.get("[data-test='input-contact']").setValue('999999999')
    component.get("[data-test='input-email']").setValue('josemiranda@gmail.com')
    component.get("[data-test='textarea-observations']").setValue('Cachorro lindo')
    component.get("[data-test='submit-button']").trigger('submit')

    expect(adoptePet).toBeCalledWith({
      name: 'Jose Miranda',
      contact: '999999999',
      email: 'josemiranda@gmail.com',
      observations: 'Cachorro lindo'
    })
  })
})
