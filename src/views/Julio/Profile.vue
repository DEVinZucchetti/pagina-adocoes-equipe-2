<template>
  <div v-if="pet">
    <div class="pet-informations">
      <h1>Amigo: {{ pet.name }}</h1>
      <ul>
        <li>Raça: {{ pet.race.name }}</li>
        <li>Espécie: {{ pet.specie.name }}</li>
        <li>IDADE: {{ pet.age }} ANO(S)</li>
        <li>Peso: {{ pet.weight }} KG</li>
        <li>Porte: {{ pet.size }}</li>
      </ul>
    </div>

    <form class="form" @submit.prevent="handleSubmit">
      <h2>Faltam poucos passos para adotar {{ pet.name }}</h2>
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
        <label>Fale um pouco sobre a sua motivação de adotar esse pet:</label>
        <textarea v-model="observations" data-test="textarea-observations" />
      </div>
      <div class="button-adoption">
      <button type="submit" data-test="submit-button">Cadastrar</button>
      </div>
    </form>
  </div>
</template>


<script>
import axios from 'axios'
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
      axios
        .post('http://127.0.0.1:8000/api/adocoes', {
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
    }
  },
  mounted() {
    const id = this.$route.params.id
    axios.get(`http://127.0.0.1:8000/api/pets/${id}`)
      .then((response) => {
        this.pet = response.data
      })
  }
}
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
}

.form input, {
  width: 30%;
  height: 32px;
  
}
.form h2 {
  text-align: center;
  font-size: 24px;
}
.input-form {
  display: flex;
  flex-direction: column;
  gap: 5px;
  width:50%;
  margin: 0 auto;
}
.pet-informations {
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center;
  text-align: center; 
  margin-top: 20px;
}
.input-form {
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 50%;
  margin: 0 auto;
}

.input-form input, .input-form textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}


.button-adoption {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  width: 50%;
  margin: 0 auto;
  cursor: pointer;
}
</style>