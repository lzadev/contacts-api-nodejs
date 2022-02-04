const { response } = require('express')
const { request } = require('express')
const Contact = require('../models/Contacts')

const getAllContacts = async (req = request, res = response) => {
  res.send('get')
}

const createContact = async (req = request, res = response) => {
  const { firstName, lastName, phoneNumber, category } = req.body

  try {
    const contact = new Contact({ firstName, lastName, phoneNumber, category })

    await contact.save()

    res.status(204).send()
  } catch (error) {
    res
      .status(500)
      .json({ message: 'An error has ocurred. Try it again or later' })
  }
}

const updateContact = async (req = request, res = response) => {
  res.send('update')
}

const deleteContact = async (req = request, res = response) => {
  res.send('delete')
}

module.exports = {
  getAllContacts,
  createContact,
  updateContact,
  deleteContact,
}
