'use strict'

const entries =
  obj =>
    Object.keys(obj)
      .map(key => [key, obj[key]])

const listing =
  (name, price) => ({
    name,
    price
  })

const customer =
  (name, shoppingList) => ({
    name,
    shoppingList
  })

const cart =
  (customer, ...items) => ({
    customer,
    items
  })

/**
 * should return an array with the `itemName` repeated `count` number of times
 */
const itemRepeater =
  itemName =>
    count => {
      let array = []
      for (let i = 1; i <= count; i++) 
        array.push(itemName)
      return array
}

/**
 * should return an array of carts with each given customer's shopping list
 * as an array of items
 */
const constructCarts =
  listings =>
    customers =>
      customers.reduce((prev, curr) => 
        prev.concat(
          {
            // Assigns name to cart object being appended to resulting object array.
            'customer': curr.name, 
            // Adds array of items to cart object.
            'items': Object.keys(curr.shoppingList).reduce((prevKey, curKey) => prevKey.concat(itemRepeater(curKey)(curr.shoppingList[curKey])), []) // Adds array of items to cart object.
          }
        )
      , [])

module.exports = {
  listing,
  customer,
  constructCarts
}