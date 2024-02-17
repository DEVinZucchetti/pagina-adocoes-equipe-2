import { describe, expect, it } from 'vitest'
import { flushPromises, mount } from "@vue/test-utils";

import Home from '../Julio/Home.vue'

describe("Testa a tela Home", () => {

    it('Espera-se que que tela seja renderizada', () => {
        const component = mount(Home)
        expect(component).toBeTruthy()
    })

})