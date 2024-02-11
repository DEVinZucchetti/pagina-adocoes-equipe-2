import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import Pets from './Pets.vue'
import PetService from '@/services/PetService'
describe('Tela de listagem de Pets', () => {
  vi.spyOn(PetService, 'getAllPets').mockResolvedValue([
    [
      {
        id: 15,
        pet_name: 'Atum',
        age: 11
      },
      {
        id: 14,
        pet_name: 'Mutano',
        age: 3
      },
      {
        id: 13,
        pet_name: 'Dora',
        age: 7
      }
    ]
  ])

  it('Espera-se que a tela seja renderizada', () => {
    const component = mount(Pets)

    expect(component).toBeTruthy()
  })

  it('Espera-se que liste um card para cada pet', () => {})
})
