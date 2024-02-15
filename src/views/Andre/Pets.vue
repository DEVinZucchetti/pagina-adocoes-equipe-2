<template>
  <div class="container">
    <h1>Adote um Companheirinho!</h1>
    <div class="search"> <!-- Corrigido -->
        <h3>Pesquisar por:</h3>
      </div>
      <div class="search-fields">
        <input v-model="filtros.nome" type="text" placeholder="Nome" @input="handleSearch" />
        <input v-model.number="filtros.idade" type="number" placeholder="Idade" @input="handleSearch" />
        <input v-model="filtros.especie" type="text" placeholder="Espécie..." @input="handleSearch" /> <!-- Especie adicionado -->
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
  export default {
    data() {
      return {
        pets: [],
        filtros: {
          nome: '',
          idade: null,
          especie: ''
        }
      }
    },
  
    methods: {
      redirectToProfile(petId) {
        this.$router.push(`/pets-adocao-1/${petId}/perfil`)
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
      axios
        .get('http://localhost:8000/api/pets/adocao')
        .then((response) => {
          this.pets = this.FilteredPets = response.data
        })
        .catch(() => alert('Houve um erro. Entre em contato com a ONG'))
    }
  }
  </script>
  
  <style scoped>
.container {
  width: 80%;
  margin: 50px auto;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0,0,0,0.1);
}

.app-header {
  font-size: 20px;
  text-align: center;
  width: 100%;
  padding: 15px 0;
  background-color: #FFA500;
  color: white;
  margin-bottom: 30px;
  border-radius: 0 0 15px 15px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.search-fields {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
}

input[type="text"], input[type="number"] {
  flex-grow: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

.pet-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  align-items: stretch;
}

.pet-item {
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  transition: transform 0.2s ease-in-out;
}

.pet-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}

.pet-item img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.pet-item span {
  font-size: 20px;
  font-weight: bold;
  margin: 15px;
  color: #333;
}

.adopt-button {
  background-color: #007BFF;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;
  margin-top: 20px;
}

.adopt-button:hover {
  background-color: #0056b3;
}

@media (max-width: 768px) {
  .search-fields {
    flex-direction: column;
  }

  input[type="text"], input[type="number"] {
    flex-grow: 0;
  }
}
</style>
