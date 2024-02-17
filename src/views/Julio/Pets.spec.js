import { describe, expect, it } from 'vitest'
import { flushPromises, mount } from "@vue/test-utils";

import Pets from '../Julio/Pets.vue'

describe("Testa a tela de Listagem de Pets", () => {

    it('Espera-se que que tela seja renderizada', () => {
        const component = mount(Pets)
        expect(component).toBeTruthy()
    })
    

})