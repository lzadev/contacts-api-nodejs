const Contact = require('../models/Contacts')
const Category = require('../models/Category')

const existsContactById = async (id) => {
  const contact = await Contact.findOne({ _id: id })
  if (!contact) {
    throw new Error(`No exists a contact with id ${id}`)
  }
}

const existCategory = async (categoryName) => {
  const category = await Category.findOne({ name: categoryName })
  if (!category) {
    throw new Error(`No exists a category with the name ${categoryName}`)
  }
}

module.exports = {
  existsContactById,
  existCategory,
}
