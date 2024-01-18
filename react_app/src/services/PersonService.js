import axios from 'axios';
const PERSON_API_URL = "http://localhost:8080/persons";
class PersonService {
    getPersons(){
        return axios.get(PERSON_API_URL);
    }
    createPerson(person){
        return axios.post(PERSON_API_URL, person);
    }

    getPersonById(personId){
        return axios.get(PERSON_API_URL + '/' + personId);
    }

    updatePerson(person, personId){
        return axios.put(PERSON_API_URL + '/' + personId, person);
    }

    deletePerson(personId){
        return axios.delete(PERSON_API_URL + '/' + personId);
    }
}
export default new PersonService()