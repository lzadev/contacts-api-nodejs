const { response } = require('express')
const { request } = require('express')
const Category = require('../models/Category')

const getAllCategories = async (req = request, res = response) => {
  try {
    const categories = await Category.find({})

    res.status(200).json({ total: categories.length, data: categories })
  } catch (error) {
    res
      .status(500)
      .json({ message: 'An error has ocurred. Try it again or later' })
  }
}

module.exports = { getAllCategories }
