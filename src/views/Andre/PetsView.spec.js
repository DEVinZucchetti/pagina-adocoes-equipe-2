import { flushPromises, mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import Pets from './Pets.vue'
import PetService from '@/services/PetService'
import axios from 'axios';

describe('Tela de listagem de pets', () => {
  vi.spyOn(PetService, 'getAllPets').mockResolvedValue([
    {
      id: 1,
      pet_name: 'Mel',
      age: 11
    },
    {
      id: 2,
      pet_name: 'TukTuk',
      age: 7
    }
  ])

  it('Espera-se que a tela seja renderizada', () => {
    const component = mount(Pets)

    expect(component).toBeTruthy()
  })

  it('Espera-se que liste um card para cada pet', async () => {
    const component = mount(Pets)

    await flushPromises()

    expect(component.text()).toContain('Mel')
    expect(component.text()).toContain('TukTuk')

    expect(component.findAll("[data-test='item-pet']")).toHaveLength(2)
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

    component.findAll("[data-test='item-pet']")[0].trigger('click')

    expect(mockRouter.push).toHaveBeenCalledWith('/pets-adocao-1/1/perfil')
  })

  // Testando a inicialização de dados
it('inicializa pets e filtros corretamente', () => {
    const component = mount(Pets);
    expect(component.vm.pets).toEqual([]);
    expect(component.vm.filtros).toEqual({ nome: '', idade: null, especie: '' });
  });
  
  // Testando a lógica de filtragem
  it('filtra pets corretamente com base nos filtros', async () => {
    const component = mount(Pets);
    await flushPromises(); // Espera pela inicialização dos pets
  
    // Define filtros
    component.vm.filtros.nome = 'Mel';
    await component.vm.$nextTick(); // Espera pelo re-cálculo de petsFiltrados
  
    // Verifica se petsFiltrados contém apenas os pets que correspondem ao filtro
    expect(component.vm.petsFiltrados).toEqual(expect.arrayContaining([
      expect.objectContaining({ pet_name: 'Mel' })
    ]));
  });
  
  // Testando a reação ao evento de entrada
  it('busca pets novamente quando os filtros mudam', async () => {
    vi.mock('axios');
    vi.spyOn(axios, 'get').mockResolvedValue({ data: [{ id: 1, pet_name: 'Mel', age: 11 }] });
  
    const component = mount(Pets);
    component.vm.filtros.nome = 'Nova Busca';
    component.vm.handleSearch(); // Simula uma entrada nos filtros
  
    await flushPromises(); // Espera pela conclusão da busca
  
    expect(axios.get).toHaveBeenCalled(); // Verifica se a busca foi realizada
    expect(component.vm.pets).toEqual(expect.arrayContaining([
      expect.objectContaining({ pet_name: 'Mel' })
    ]));
  });
  
})