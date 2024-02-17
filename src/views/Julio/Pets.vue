<template>
  <div class="container">
    <h1>Adote um amigo!</h1>
    <div class=search>
      <img src="data:image/png;base64,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"/>
      <h3>Pesquisar por:</h3>
    </div>
    <div class="search-fields">
      <input v-model="filtros.nome" type="text" placeholder="Nome" @input="handleSearch" />
      <input v-model.number="filtros.idade" type="number" placeholder="Idade" @input="handleSearch" />
      <input v-model="filtros.especie" type="text" placeholder="Espécie..." @input="handleSearch" />
    </div>
    <div class="pet-list">
      <div class="pet-item" v-for="pet in petsFiltrados" :key="pet.id" @click="redirectToProfile(pet.id)" data-test="item-pet">
        <img src="https://i.imgflip.com/5y7m17.png" />
        <span>{{ pet.pet_name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import PetService from './services/PetService'
export default {
  data() {
    return {
      pets: [],
      filtros: {
        nome: '',
        idade: null
      }
    }
  },

  methods: {
    redirectToProfile(petId) {
      this.$router.push(`/pets-adocao-4/${petId}/perfil`)
    },

    handleSearch() {
     
      axios
        .get('http://localhost:8000/api/pets/adocao')
        .then((response) => {
          this.pets = response.data
        })
        .catch(() => alert('Houve um erro'))
    }
  },

  computed: {
    petsFiltrados() {
  
      return this.pets.filter((pet) => {
        let passFilter = true
        if (
          this.filtros.nome &&
          pet.pet_name.toLowerCase().indexOf(this.filtros.nome.toLowerCase()) === -1
        ) {
          passFilter = false
        }
        if (this.filtros.idade !== null && pet.age!== this.filtros.idade) {
          passFilter = false
        }
        if (
          this.filtros.especie &&
          pet.specie.name.toLowerCase().indexOf(this.filtros.especie.toLowerCase()) === -1
        ) {
          passFilter = false
        }
        return passFilter
      })
    }
  },
  mounted() {
    PetService.getAllPets()
      .then((data) => {
        this.pets = data
      })
      .catch(() => alert('Houve um erro. Entre em contato com a ONG'))
  }
}
</script>

<style scoped>
.container {
  width: 70%;
  margin: 0 auto;
}

.pet-list {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  margin: 0 auto;
}

.pet-item {
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  padding-bottom: 10px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pet-item:hover {
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.7);
}

.pet-item img {
  width: 250px;
  border-radius: 12px;
}

.pet-item span {
  font-size: 24px;
  font-weight: bold;
  margin: 10px 0;
  color: #ecb11f;
}

/* Estilo para o campo de pesquisa */
.input-search {
  margin-bottom: 20px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.search img{
  width:40px;
  display:flex;
  flex-direction: column
  }
</style>
