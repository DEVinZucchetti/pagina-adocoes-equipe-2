import { describe, expect, it,vi } from 'vitest'
import { flushPromises, mount } from "@vue/test-utils";

import Profile from '../Julio/Profile.vue'
import PetService from '../../services/PetService'

describe("Tela de perfil do pet", () => {

    const mockRoute = {
        params: {
            id: 1
        }
    }

    vi.spyOn(PetService, 'getOnePet')
        .mockResolvedValue({
            "id": 8,
            "name": "Lilith",
            "age": 1,
            "weight": "3",
            "size": "SMALL",
            "race": {
                "id": 2,
                "name": "SRD",
            },
            "specie": {
                "id": 1,
                "name": "Gato",
            }
        })

    it("Espera-se que a tela seja renderizada", () => {
        const component = mount(Profile, {
            global: {
                mocks: {
                    $route: mockRoute
                }
            }
        })

        expect(component).toBeTruthy()
    })

    it("Espera-se que exiba as informações do pet", async () => {
        const component = mount(Profile, {
            global: {
                mocks: {
                    $route: mockRoute
                }
            }
        })

        await flushPromises()

        expect(component.text()).toContain("Amigo: Lilith") 
        expect(component.text()).toContain("Raça: SRD") 
        expect(component.text()).toContain("Espécie: Gato") 
        expect(component.text()).toContain("Idade: 1 ANO(S)")
        expect(component.text()).toContain("Peso: 3 KG")  
        expect(component.text()).toContain("Porte: SMALL") 
})

it("Espera-se que ao submeter o formulário, seja enviado os dados corretamente", async () => {

    const adoptPet = vi.spyOn(PetService, 'adoptPet').mockResolvedValue({})

    const component = mount(Profile, {
        global: {
            mocks: {
                $route: mockRoute
            }
        }
    })

    await flushPromises()

    component.get("[data-test='input-name']").setValue("Julio")
    component.get("[data-test='input-contact']").setValue("3663-3663")
    component.get("[data-test='input-email']").setValue("julio@gmail.com")
    component.get("[data-test='textarea-observations']").setValue("gosto de gato")
    component.get("[data-test='submit-button']").trigger("submit")

    expect(adoptPet).toBeCalledWith({
        name: 'Julio',
        email: 'julio@gmail.com',
        contact: '3663-3663',
        observations: 'gosto de gato'
    })
})

})
