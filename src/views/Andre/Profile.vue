<template>
  <div v-if="pet" class="app-container">
    
    <div class="content-wrapper">
      <button @click="goBack" class="button-adoption back-button" style="position: absolute; top: 20px; left: 20px; max-width: 140px; padding: 0 10px; line-height: 38px;">Voltar</button>

          <div class="pet-card">
              <h1>{{ pet.name }}</h1>
              <img src="https://i.imgflip.com/5y7m17.png" alt="Imagem do Pet" />
              <ul>
                  <li>Raça: {{ pet.race.name }}</li>
                  <li>Idade: {{ pet.age }} anos</li>
                  <li>Espécie: {{ pet.specie.name }}</li>
                  <li>Porte: {{ pet.size }}</li>
                  <li>Peso: {{ pet.weight }} Kg</li>
              </ul>
          </div>
  
          <form class="adoption-form" @submit.prevent="handleSubmit">
              <h2>Adote {{ pet.name }}</h2>
              <div class="input-form">
                  <label>Nome</label>
                  <input v-model="name" data-test="input-name" />
              </div>
              <div class="input-form">
                  <label>Contato</label>
                  <input v-model="contact" data-test="input-contact" />
              </div>
              <div class="input-form">
                  <label>Email</label>
                  <input v-model="email" type="email" data-test="input-email" />
              </div>
              <div class="input-form">
                  <label>Por que você quer adotar um novo amiguinho?</label>
                  <textarea v-model="observations" data-test="textarea-observations"></textarea>
              </div>
              <div class="button-adoption">
                  <button type="submit" data-test="submit-button">Cadastrar</button>
              </div>
          </form>
      </div>
  </div>
  </template>

<script>
import axios from 'axios'
import PetService from '../../services/PetService'

export default {
  data() {
    return {
      pet: null,
      name: '',
      contact: '',
      email: '',
      observations: ''
    }
  },
  methods: {
    handleSubmit() {
      PetService.adoptePet({
        name: this.name,
        contact: this.contact,
        email: this.email,
        observations: this.observations
      })
        .then(() => {
          alert('Adoção cadastrada com sucesso')
        })
        .catch(() => {
          alert('Houve um erro ao tentar realizar a adoção')
        })
    },
    goBack() {
      this.$router.push('/pets-adocao-1');
    },
  },
  mounted() {
    const id = this.$route.params.id
    PetService.getOnePet(id).then((data) => {
      this.pet = data
      })
  }
}
</script>

<style scoped>
.app-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 20px;
}

.content-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    align-items: stretch;
    max-width: 1200px;
}

.pet-card, .adoption-form {
    background: #fff;
    border-radius: 50px;
    box-shadow: 0 10px 6px rgba(0, 0, 0, 0.1);
    padding: 20px;
    flex: 1;
    flex-basis: calc(50% - 20px);
    max-width: calc(50% - 20px);
    box-sizing: border-box;
    justify-content: space-between;
}

.pet-card img {
    width: 100%;
    max-width: 300px;
    height: auto;
    display: block;
    margin: 10px auto;
}

ul {
    list-style-type: none;
    padding: 0;
    margin-top: 20px;
}

li {
    margin-bottom: 10px;
    line-height: 1.6;
}

.adoption-form {
    flex-basis: calc(50% - 20px);
    max-width: calc(50% - 20px);
}

.input-form label {
    display: block;
    margin-bottom: 5px;
}

.input-form input, .input-form textarea {
    width: 100%;
    padding: 8px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.button-adoption, .back-button button {
    width: 100%;
    padding: 10px 0;
    background-color: #FFA500;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}


.button-adoption:hover {
  background-color: #724a00;
}

.back-button {
  position: absolute;
  top: 20px; 
  left: 20px; 
  z-index: 100; 
}
.app-container {
  padding-top: 60px; 
}

@media (max-width: 768px) {
    .content-wrapper {
        flex-direction: column;
    }

    .pet-card, .adoption-form {
        flex-basis: 100%;
        max-width: 100%;
    }
}
</style>