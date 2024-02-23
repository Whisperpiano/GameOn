export function calculateTotalPriceBefore(cart, gamesArray) {
    return cart.map(product => {
      const findGame = gamesArray.find(game => game.id === product.productID);
      return product.quantity * findGame.price;
    }).reduce((x, y) => x + y, 0);
  }

  export function calculateTotalPriceAfter(cart, gamesArray) {
    return cart.map((product) => {
      const findGame = gamesArray.find((game) => game.id === product.productID);
      return product.quantity * findGame.discountedPrice;
    })
    .reduce((x, y) => x + y, 0);
  }