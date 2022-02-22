import axios from "axios";

const baseUrl = 'http://localhost:3001/persons'

const getAllContacts = () => {
   return axios.get(baseUrl)
}

const createContact = newContact => {
    return axios.post(baseUrl, newContact)
  }

const deleteContact = (id) => {
    return axios.delete(`${baseUrl}/${id}`)
}

const overWriteContact = (id, newDetails) => {
    return  axios.put(`${baseUrl}/${id}`,  newDetails)

}



export default {
    getAllContacts : getAllContacts,
    createContact : createContact,
    deleteContact : deleteContact,
    overWriteContact : overWriteContact
}