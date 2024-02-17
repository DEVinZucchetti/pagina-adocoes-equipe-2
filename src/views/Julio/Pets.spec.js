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

})
