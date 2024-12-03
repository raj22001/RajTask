import React, { useContext } from 'react'
import { ThemeContext } from './context/ThemeProvider';

const Theme = () => {

    const {toggleTheme , handlerTheme} = useContext(ThemeContext);

    console.log({toggleTheme})

  return (
    <div >
        <button  onClick={() => handlerTheme(!toggleTheme)}>Hello</button>
      <div className="column">
          <p className={`${toggleTheme ? 'text-white' : 'text-black'}`}>
            Lollipop powder powder. Cotton candy caramels chupa chups halvah
            muffin caramels apple pie topping cake. Topping chocolate bar pastry
            chocolate cake. Cupcake tart jujubes dragée jelly-o icing sugar
            plum. Chocolate bar lollipop candy canes. Biscuit croissant apple
            pie pudding caramels wafer tart tootsie roll macaroon. Croissant
            tiramisu chocolate bar carrot cake lemon drops halvah.
          </p>
        </div>
        <div className="column">
          <p className={`${toggleTheme ? 'text-white' : 'text-black'}`}>
            Marshmallow tiramisu liquorice bear claw chocolate bar bear claw
            tart. Muffin chupa chups pie. Brownie apple pie topping lemon drops
            marzipan toffee. Pudding macaroon icing ice cream bonbon cake tart.
            Pudding sugar plum chocolate cake cake biscuit pastry pastry
            chocolate bar tart. Lemon drops dessert gummies icing.
          </p>
        </div>
    </div>
  )
}

export default Theme
