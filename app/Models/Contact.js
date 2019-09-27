'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Contact extends Model {
    static get table(){
        return 'tblcontact'
    }
    static get primaryKey(){
        return 'member_key'
    }
}

module.exports = Contact
