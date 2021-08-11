import bcrypt from 'bcryptjs'

const data = {
  users: [
    {
      name: 'Admin',
      email: 'admin@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true
    },
    {
      name: 'John',
      email: 'john@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false
    }
  ],
  products: [
    {
      name: 'Elena',
      category: 'Jewellery',
      image: '/images/product-1.png',
      price: 120,
      season: 'Spring',
      rating: 5,
      numReviews: 10,
      description: 'Rose gold',
      countInStock: 10
    },
    {
      name: 'Willow',
      category: 'Jewellery',
      image: '/images/product-2.jpg',
      price: 120,
      season: 'Spring',
      rating: 4,
      numReviews: 15,
      description: 'Rose gold',
      countInStock: 20
    },
    {
      name: 'Renee',
      category: 'Jewellery',
      image: '/images/product-3.jpg',
      price: 200,
      season: 'Spring',
      rating: 4,
      numReviews: 5,
      description: 'Rose gold',
      countInStock: 0
    },
    {
      name: 'Astrid',
      category: 'Jewellery',
      image: '/images/product-4.png',
      price: 100,
      season: 'Spring',
      rating: 5,
      numReviews: 20,
      description: 'Rose gold',
      countInStock: 15
    },
    {
      name: 'Juniper',
      category: 'Jewellery',
      image: '/images/product-5.jpg',
      price: 100,
      season: 'Spring',
      rating: 4,
      numReviews: 13,
      description: 'Rose gold',
      countInStock: 5
    },
    {
      name: 'Alisa',
      category: 'Jewellery',
      image: '/images/product-6.jpg',
      price: 120,
      season: 'Spring',
      rating: 3,
      numReviews: 9,
      description: 'Rose gold',
      countInStock: 0
    }
  ]
}

export default data
