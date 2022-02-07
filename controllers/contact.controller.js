const { response } = require('express')
const { request } = require('express')
const Contact = require('../models/Contacts')

const getAllContacts = async (req = request, res = response) => {
  try {
    const contacts = await Contact.find({})

    res.status(200).json({
      total: contacts.length,
      data: contacts,
    })
  } catch (error) {
    res
      .status(500)
      .json({ message: 'An error has ocurred. Try it again or later' })
  }
}

const createContact = async (req = request, res = response) => {
  const { firstName, lastName, phoneNumber, category } = req.body

  try {
    const contact = new Contact({ firstName, lastName, phoneNumber, category })

    await contact.save()

    res.status(201).send()
  } catch (error) {
    res
      .status(500)
      .json({ message: 'An error has ocurred. Try it again or later' })
  }
}

const updateContact = async (req = request, res = response) => {
  try {
    const { id } = req.params
    const { createdAt, _id, ...contact } = req.body

    await Contact.findByIdAndUpdate({ _id: id }, contact)

    const contactUpdated = await Contact.findById({ _id: id })

    return res.status(200).json({
      message: 'Contact updated',
      data: contactUpdated,
    })
  } catch (error) {
    res
      .status(500)
      .json({ message: 'An error has ocurred. Try it again or later' })
  }
}

const deleteContact = async (req = request, res = response) => {
  try {
    const { id } = req.params

    await Contact.findByIdAndDelete(id)

    return res.status(200).json({ message: 'contact deleted' })
  } catch (error) {
    res
      .status(500)
      .json({ message: 'An error has ocurred. Try it again or later' })
  }
}

module.exports = {
  getAllContacts,
  createContact,
  updateContact,
  deleteContact,
}
