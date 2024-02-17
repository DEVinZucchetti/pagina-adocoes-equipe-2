<template>
  <div class="main-content">
    <div class="left-content">
      <h1 class="title">Me Leva pra Casa</h1>
      <p class="text-description">Nós cuidamos deles. Agora deixe que eles cuidem de você</p>
      <p class="text-description">
        Aqui a gente cuida de animais resgatados de áreas evacuadas de Minas Gerais e queremos
        compartilhar todo esse amor com mais pessoas por meio da adoção.
      </p>
      <p class="text-description">
        Ter um animal de estimação traz benefícios para a saúde física e mental. É uma troca de amor
        e carinho que faz bem pra todo mundo. Leve um para casa: cuide dele e deixe que ele cuide de
        você também.
      </p>
      <router-link to="pets-adocao-4">
        <button class="button-action" data-test="adoption-button">ADOTAR AGORA</button>
      </router-link>
    </div>

    <div class="right-content">
      <img
        src="https://vale.com/documents/d/guest/imagem-dogs01?doAsUserId=RPhnXhXIUPuTnXbIjnHTCg%3D%3D%2F-%2Fcategories%2F64940%2F-%2Fcategories%2F%2F-%2Fcategories%2F64940%2F-%2Fcategories%2F%2F-%2Fcategories%2F%2F-%2Fcategories%2F64940%2F-%2Fcategories%2F%2F-%2Fcategories%2F%2F-%2Fcategories%2F%2F-%2Fcategories%2F64940%2F-%2Fcategories%2F64940%2F-%2Fcategories%2F%2F-%2Fcategories%2F%2F-%2Fcategories%2F"
        class="main-image" />
    </div>
  </div>
</template>
<script></script>
<style scoped>
.title {
  font-size: 32px;
  color: orange;
}

.text-description {
  font-size: 16px;
  text-align: justify
}

.main-content {
  display: flex;
  width: 70%;
  margin: 0 auto;
  align-items: center;
}

.main-image {
  width: 500px;
}

@media (max-width: 1000px) {
  .main-content {
    flex-direction: column-reverse;
  }
  .text-description {
    font-size: 20px;
  }
}
.button-action{
    width: 300px;
    height: 64px;
    background: rgb(225, 73, 18);
    border-radius: 4px;
    color: #fff;
    font-size: 20px;
  }

</style>