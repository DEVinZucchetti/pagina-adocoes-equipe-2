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
    name: 'Mel',
    age: 11,
    weight: '123',
    size: 'SMALL',
    race: {
      id: 1,
      name: 'Caramelo'
    },
    specie: {
      id: 1,
      name: 'Cachorro'
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

    expect(component.text()).toContain('Mel')
    expect(component.text()).toContain('Raça: Caramelo')
    expect(component.text()).toContain('Idade: 11 anos')
    expect(component.text()).toContain('Porte: SMALL')
    expect(component.text()).toContain('Peso: 123 Kg')
    expect(component.text()).toContain('Espécie: Cachorro')
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

    component.get("[data-test='input-name']").setValue('Andre Vieira')
    component.get("[data-test='input-contact']").setValue('999999999')
    component.get("[data-test='input-email']").setValue('drew@gmail.com')
    component.get("[data-test='textarea-observations']").setValue('Dog')
    component.get("[data-test='submit-button']").trigger('submit')

    expect(adoptePet).toBeCalledWith({
      name: 'Andre Vieira',
      contact: '999999999',
      email: 'drew@gmail.com',
      observations: 'Dog'
    })
  })
})