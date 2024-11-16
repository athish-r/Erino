const express = require('express')
const {
    createContact,
    getContacts,
    deleteContact,
    updateContact
} = require('../controllers/contactsController')

const router = express.Router()

router.get('/', getContacts)

router.post('/', createContact)

router.delete('/:id', deleteContact)

router.patch('/:id', updateContact)
module.exports = router