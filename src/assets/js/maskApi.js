import axios from 'axios';

const requests = axios.create({
  baseURL: 'https://findmasks.herokuapp.com/places'
});

class maskApi {
  findAll() {
    return requests.get(``);
  }
  findOne(id) {
    return requests.get(`/${id}`);
  }
}

export default new maskApi();
