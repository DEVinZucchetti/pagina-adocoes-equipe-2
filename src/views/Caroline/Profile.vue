<template>
  <v-app>
    <v-app-bar color="amber-accent-4 pa-2" elevation="0">
      <v-toolbar-title class="ma-16 text-white font-weight-bold">
        <v-icon class="mr-2">mdi-paw</v-icon> SOS Melhor amigo
      </v-toolbar-title>

      <div class="mr-16">
        <router-link to="/home2">
          <v-btn class="text-white font-weight-bold" prepend-icon="mdi-home" size="large">
            Home
          </v-btn>
        </router-link>

        <router-link to="/pets-adocao-2">
          <v-btn
            class="text-white font-weight-bold"
            prepend-icon="mdi-cat"
            append-icon="mdi-dog"
            size="large"
          >
            Pets
          </v-btn>
        </router-link>
      </div>
    </v-app-bar>

    <div v-if="pet" class="my-auto" width="80%">
      <v-row class="mx-auto">
        <v-col cols="12" md="6">
          <h1 class="mx-16 mt-10 text-amber-accent-4">
            <v-icon size="large">mdi-paw-outline</v-icon> AUmigo: <b>{{ pet.name }}</b>
          </h1>

          <v-col cols="12" md="8">
            <v-img :src="imagens[pet.id % this.imagens.length]" height="400px" fill></v-img>
          </v-col>

          <v-list class="px-16 pt-6 text-h6" width="80%">
            <v-list-item class="px-16 py-2"><b>Raça:</b> {{ pet.breed.name }}</v-list-item>
            <v-list-item class="px-16 py-2"><b>Espécie:</b> {{ pet.specie.name }}</v-list-item>
            <v-list-item class="px-16 py-2"><b>Idade:</b> {{ pet.age }} ano(s)</v-list-item>
            <v-list-item class="px-16 py-2"><b>Peso:</b> {{ pet.weight }} kg</v-list-item>
            <v-list-item class="px-16 py-2"
              ><b>Porte:</b> {{ this.translateWeight(pet.size) }}</v-list-item
            >
          </v-list>
        </v-col>
      </v-row>
    </div>
  </v-app>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      pet: null,
      imagens: [
        'https://i.pinimg.com/564x/94/af/b4/94afb47cacb76da8586a729a82c39dc2.jpg',
        'https://i.pinimg.com/564x/96/ca/98/96ca9814aecaa525461b638a3e447093.jpg',
        'https://i.pinimg.com/736x/a7/32/82/a732824b5f1de413123d5ecc4b2caecd.jpg',
        'https://i.pinimg.com/564x/4a/46/fd/4a46fd4c8392251174d2dc4f329d3c7a.jpg',
        'https://i.pinimg.com/564x/21/ab/9f/21ab9fcced5a0a40a95bd10dafcafa66.jpg',
        'https://i.pinimg.com/564x/70/cf/9c/70cf9cf849de134bf106ac476bdee4b8.jpg',
        'https://i.pinimg.com/564x/23/0e/54/230e54a61f2a0fc5ee0663da3231c427.jpg',
        'https://i.pinimg.com/564x/86/77/e2/8677e21e07a8ae3fadcfc14eebc7d128.jpg'
      ]
    }
  },
  methods: {
    translateWeight(name) {
      switch (name) {
        case 'SMALL': {
          return 'Pequeno'
        }
        case 'MEDIUM': {
          return 'Médio'
        }
        case 'LARGE': {
          return 'Grande'
        }
        case 'EXTRA_LARGE': {
          return 'Gigante'
        }
        default: {
          return name
        }
      }
    }
  },
  mounted() {
    const id = this.$route.params.id
    console.log(id)
    axios.get(`http://127.0.0.1:8000/api/pets/${id}`).then((response) => {
      this.pet = response.data
      console.log(response.data)
    })
  }
}
</script>

<style scoped>
.v-list-item:nth-child(even) {
  background-color: #f2f2f2; /* Cor de fundo para linhas pares (cinza) */
}

.v-list-item:nth-child(odd) {
  background-color: #fff; /* Cor de fundo para linhas ímpares (branco) */
}

.font-weight-bold {
  font-weight: bold;
}
</style>
