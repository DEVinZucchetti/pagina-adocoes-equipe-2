<template>
  <div class="app-container">
    <header class="app-header">
       Criado por Andre V - Semana 3 DevInHouse
    </header>
    <div class="modal-container">
      <div class="main-content">
        <div class="left-content">
          <h1 class="title">Me Leva pra Casa</h1>
          <div class="text-content">
            <p class="text-description">
              Nós cuidamos deles. Agora deixe que eles cuidem de você.
              Aqui a gente cuida de animais resgatados de áreas evacuadas de Minas Gerais e queremos
              compartilhar todo esse amor com mais pessoas por meio da adoção.
            </p>
            <p class="text-description">
              Ter um animal de estimação traz benefícios para a saúde física e mental. É uma troca de amor
              e carinho que faz bem pra todo mundo. Leve um para casa: cuide dele e deixe que ele cuide de
              você também.
            </p>
          </div>
          <router-link to="pets-adocao">
        <button class="adopt-button">Adotar agora!</button>
      </router-link>
        </div>

        <div class="right-content">
          <img src="https://vale.com/documents/d/guest/imagem-dogs01?doAsUserId=RPhnXhXIUPuTnXbIjnHTCg%3D%3D%2F-%2Fcategories%2F64940%2F-%2Fcategories%2F%2F-%2Fcategories%2F64940%2F-%2Fcategories%2F%2F-%2Fcategories%2F%2F-%2Fcategories%2F64940%2F-%2Fcategories%2F%2F-%2Fcategories%2F%2F-%2Fcategories%2F%2F-%2Fcategories%2F64940%2F-%2Fcategories%2F64940%2F-%2Fcategories%2F%2F-%2Fcategories%2F%2F-%2Fcategories%2F" class="main-image" alt="Imagem de cães" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.app-container {
  padding-top: 50px; 
}

.app-header {
  font-size: 24px;
  color: white;
  background-color: #FFA500;
  padding: 10px 20px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
}

.modal-container {
  width: 80%;
  margin: 0 auto;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border: 5px solid #FFA500;
  border-radius: 10px;
  padding: 20px;
  position: relative;
  top: 20px;
}

.main-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.left-content {
  flex: 1;
  padding-right: 20px;
}

.right-content {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}

.title {
  font-size: 48px;
  color: #FFA500;
  margin-bottom: 20px;
}

.text-description {
  font-size: 18px;
  text-align: justify;
  margin-bottom: 10px;
}

.adopt-button {
  font-size: 20px;
  background-color: orange;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.adopt-button:hover {
  background-color: #cc8400;
}

.main-image {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
}

@media (max-width: 768px) {
  .main-content {
    flex-direction: column;
  }
  
  .left-content, .right-content {
    padding-right: 0;
  }

  .modal-container {
    width: 90%;
  }
  
  .main-image {
    max-width: 100%;
  }
}
</style>
