<template>
  <div class="container">
    <div class="pet-list">
      <div class="pet-item" v-for="pet in pets">
        <img
          src="https://img.freepik.com/fotos-gratis/adoravel-cachorro-basenji-marrom-e-branco-sorrindo-e-dando-mais-uns-cinco-isolado-no-branco_346278-1657.jpg"
          alt="Doguinho joão"
        />
        <span>{{ pet.pet_name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      pets: []
    }
  },
  mounted() {
    axios
      .get('http://localhost:8000/api/pets/adocao')
      .then((response) => {
        this.pets = response.data
      })
      .catch(() => alert('Houve um erro ao retornar os pets'))
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
}

.pet-item {
  border: 1px solid coral;
  padding: 5px;
  width: 300px;
  height: 200px;
  border-radius: 4px;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pet-item img {
  width: 180px;
  border-radius: 5px;
}

.pet-item span {
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
}
</style>
