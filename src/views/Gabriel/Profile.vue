<template>
  <div v-if="pet">
    <h1>Amigo: {{ pet.name }}</h1>
    <ul>
      <li>Raça: {{ pet.race.name }}</li>
      <li>Espécie: {{ pet.specie.name }}</li>
      <li>Idade: {{ pet.age }} Ano(s)</li>
      <li>Peso: {{ pet.weight }} Kg</li>
      <li>Porte: {{ pet.size }}</li>
    </ul>
    <form class="form" @submit.prevent="handleSubmit">
      <p>Adote seu amigo {{ pet.name }}</p>
      <div>
        <label for="name">Nome</label>
        <input v-model="name" />
      </div>
      <div>
        <label for="contact">Contato</label>
        <input v-model="contact" />
      </div>
      <div>
        <label for="email">E-mail</label>
        <input v-model="email" type="email" />
      </div>

      <div>
        <label for="observations">Nos conte o motivo de querer adotar esse pet:</label>
        <div>
          <textarea name="observations" cols="50" rows="10" v-model="observations"></textarea>
        </div>
      </div>
      <button class="button-style" type="submit">Adotar</button>
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
          alert('Houve um erro ao fazer adoção')
        })
    }
  },
  mounted() {
    const id = this.$route.params.id
    axios.get(`http://127.0.0.1:8000/api/pets/${id}`).then((response) => {
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

.form input {
  width: 40%;
  height: 40%;
}

.button-style {
  width: 20%;
}
</style>
