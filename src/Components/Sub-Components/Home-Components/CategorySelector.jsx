import React, { useState } from 'react'
import '../../../Styles/app.css'

const CategorySelector = () => {
  const [selectedCategory, setSelectedCategory] = useState(null)

  const categories = [
    {
      name: '👚 Shirts',
      content: [
        { name: 'Sweatshirts', amount: 5 },
        { name: 'Sports', amount: 6 },
        { name: 'Outerwear', amount: 4 },
        { name: 'T-Shirts', amount: 7 },
        { name: 'Sweaters', amount: 3 },
      ],
    },
    {
      name: '👖 Jeans',
      content: [
        { name: 'Ripped jeans', amount: 4 },
        { name: 'Low-rise pants', amount: 2 },
        { name: 'Denim', amount: 6 },
        { name: 'High-rise', amount: 8 },
      ],
    },
    {
      name: '👟 Footwear',
      content: [
        { name: 'Sneakers', amount: 8 },
        { name: 'Boot', amount: 7 },
        { name: 'Loafer', amount: 9 },
        { name: 'Flip-flops', amount: 3 },
      ],
    },
    {
      name: '🩳 Shorts',
      content: [
        { name: 'Cycling shorts', amount: 4 },
        { name: 'Skort', amount: 3 },
        { name: 'Cargo pants', amount: 9 },
        { name: 'Capri', amount: 5 },
      ],
    },
    {
      name: '🧢 Hats',
      content: [
        { name: 'Beret', amount: 12 },
        { name: 'Baseball cap', amount: 4 },
        { name: 'Cowboy hat', amount: 1 },
        { name: 'Straw hat', amount: 3 },
      ],
    },
    {
      name: '🧴 Perfume',
      content: [
        { name: 'Women Range', amount: 3 },
        { name: 'Men Range', amount: 5 },
        { name: 'Unisex Range', amount: 7 },
      ],
    },
    {
      name: '💎 Jewelry',
      content: [
        { name: 'Bracelet', amount: 6 },
        { name: 'Diamond', amount: 1 },
        { name: 'Earring', amount: 4 },
      ]
    }
  ]

  const toggleCategory = (categoryName) => {
    if (selectedCategory === categoryName) {
      setSelectedCategory(null)
    } else {
      setSelectedCategory(categoryName)
    }
  }

  return (
    <article className="categorySelector">
      <h1>Category</h1>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>
            <p
              onClick={() => toggleCategory(category.name)}
              className={selectedCategory === category.name ? 'open' : ''}
            >
              <span>{category.name}</span> {selectedCategory === category.name ? '➖' : '➕'}
            </p>
            <div style={selectedCategory === category.name ? { display: 'flex' } : { display: 'none' }}>
              <hr />
              {category.content.map((item, index) => (
                <p key={index}>
                  <span>{item.name}</span>
                  <span>{item.amount}</span>
                </p>
              ))
            }
            </div>
          </li>
        ))
      }
      </ul>
    </article>
  )
}

export default CategorySelector