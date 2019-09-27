'use strict'
const Contact = use('App/Models/Contact')
class ContactController {
    async index({response}){
        const contacts = await Contact.all()
        return response.json(contacts)
    }
    async show({params,response}){
        const contact = await Contact.find(params.id)
        return response.json(contact)
    }
}

module.exports = ContactController
