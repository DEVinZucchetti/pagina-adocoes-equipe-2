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
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      pet: null
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
