import { describe, expect, it,vi } from 'vitest'
import { flushPromises, mount } from "@vue/test-utils";

import Pets from '../Julio/Pets.vue'
import PetService from './services/PetService';

describe("Testa a tela de Listagem de Pets", () => {

    vi.spyOn(PetService, 'getAllPets')
        .mockResolvedValue([
            {
                id: 1,
                pet_name: "ozzy",
                age: 7
            },
            {
                id: 2,
                pet_name: "Luna",
                age: 4
            },

        ])

    it('Espera-se que que tela seja renderizada', () => {
        const component = mount(Pets)
        expect(component).toBeTruthy()
    })

    it("Espera-se que liste um card para cada Pet",async () => {
        const component = mount(Pets)
        await flushPromises()
        expect(component.text()).toContain("ozzy")
        expect(component.text()).toContain("Luna")
        expect(component.findAll("[data-test='item-pet']")).toHaveLength(2)
    })

    it("Espera-se que a tela navegue o perfil do pet clicado",async () => {

        const mockRouter = {
            push: vi.fn()
        }
        const component = mount(Pets,{
            global: {
                mocks:{
                    $router: mockRouter
                }
            }
        })
        await flushPromises()
        component.findAll("[data-test='item-pet']")[0].trigger("click")

        expect(mockRouter.push).toHaveBeenCalledWith('/pets-adocao-4/1/perfil')
    })

})
