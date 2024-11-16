const Contact = require('../models/contact_model')
const mongoose = require('mongoose')
//Get all Data
const getContacts = async (req,res) => {
    const contacts= await Contact.find({}).sort({FirstName: -1})
    res.status(200).json(contacts)
}
//Create Contact Function
const createContact = async (req,res) =>{
    const {FirstName,LastName,Email,Phone,Company,JobTitle} = req.body
try{
    const contact = await Contact.create({FirstName,LastName,Email,Phone,Company,JobTitle})
    res.status(200).json(contact)
}catch(error){
    res.status(400).json({error:error.message})
  }
}
// Delete Contact Function
const deleteContact = async (req,res) =>{
    const{ id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'Invalid Contact'})
    }
    const contact = await Contact.findOneAndDelete({_id: id})
     
    if (!contact){
        return res.status(404).json({error: 'Invalid Contact'})
    }
    res.status(200).json(contact)
}

//Update Workout Function
const updateContact = async (req,res) =>{
    const{ id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'Invalid Contact'})
    }

    const contact = await Contact.findOneAndUpdate({_id: id},{
          ...req.body
    })
    if (!contact){
        return res.status(404).json({error: 'Invalid Contact'})
    }
    res.status(200).json(contact)
} 
module.exports = {
    getContacts,
    createContact,
    deleteContact,
    updateContact
}