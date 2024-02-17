import axios from 'axios'

class PetService {
  async getAllPets() {
    const response = await axios.get('http://localhost:8000/api/pets/adocao')
    return response.data
  }

 
}

export default new PetService()