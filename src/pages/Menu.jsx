import './Menu.css'

function Menu() {
  return (
    <div>
      <h1>Our Menu</h1>

      <h2>Steaks</h2>
      <hr />
      <div className="menu-item">
        <b>Classic Ribeye - $34.99</b>
        <p>A 16oz bone-in ribeye grilled to perfection, seasoned with our house blend of spices and served with your choice of side.</p>
      </div>
      <div className="menu-item">
        <b>Filet Mignon - $44.99</b>
        <p>An 8oz center-cut filet, the most tender steak available, wrapped in applewood-smoked bacon and served with garlic mashed potatoes.</p>
      </div>
      <div className="menu-item">
        <b>New York Strip - $36.99</b>
        <p>A 14oz hand-cut NY strip steak with a bold, beefy flavor, chargrilled and finished with herb butter.</p>
      </div>
      <div className="menu-item">
        <b>T-Bone - $39.99</b>
        <p>A 20oz T-bone steak featuring both the strip and tenderloin, seasoned with cracked pepper and sea salt.</p>
      </div>
      <div className="menu-item">
        <b>Sirloin - $24.99</b>
        <p>A 10oz top sirloin steak, a leaner cut with full flavor, served with seasonal vegetables.</p>
      </div>
      <div className="menu-item">
        <b>Oak & Barrel Tomahawk - $54.99</b>
        <p>Our signature 32oz tomahawk ribeye, dry-aged for 28 days and served on the bone with roasted garlic and asparagus.</p>
      </div>

      <h2>Sushi</h2>
      <hr />
      <div className="menu-item">
        <b>California Roll - $9.99</b>
        <p>Crab meat, avocado, and cucumber wrapped in seasoned sushi rice and nori, topped with sesame seeds.</p>
      </div>
      <div className="menu-item">
        <b>Spicy Tuna Roll - $12.99</b>
        <p>Fresh ahi tuna mixed with spicy mayo, rolled with cucumber and topped with thin-sliced jalapeño.</p>
      </div>
      <div className="menu-item">
        <b>Salmon Nigiri - $11.99</b>
        <p>Four pieces of fresh Atlantic salmon over pressed sushi rice, served with wasabi and pickled ginger.</p>
      </div>
      <div className="menu-item">
        <b>Dragon Roll - $16.99</b>
        <p>Shrimp tempura and cucumber inside, topped with sliced avocado and eel sauce drizzle.</p>
      </div>
      <div className="menu-item">
        <b>Rainbow Roll - $18.99</b>
        <p>A California roll topped with an assortment of fresh sashimi including tuna, salmon, yellowtail, and shrimp.</p>
      </div>

      <h2>Burgers</h2>
      <hr />
      <div className="menu-item">
        <b>Classic Cheeseburger - $14.99</b>
        <p>A half-pound Angus beef patty with American cheese, lettuce, tomato, onion, and pickles on a brioche bun.</p>
      </div>
      <div className="menu-item">
        <b>Bacon BBQ Burger - $16.99</b>
        <p>Angus beef topped with crispy bacon, cheddar cheese, onion rings, and our house-made BBQ sauce.</p>
      </div>
      <div className="menu-item">
        <b>Mushroom Swiss Burger - $15.99</b>
        <p>Angus beef patty topped with sautéed mushrooms and melted Swiss cheese on a toasted pretzel bun.</p>
      </div>
      <div className="menu-item">
        <b>The Oak Burger - $18.99</b>
        <p>Our signature burger with two patties, smoked gouda, caramelized onions, arugula, and truffle aioli.</p>
      </div>

      <h2>Sides</h2>
      <hr />
      <div className="menu-item">
        <b>French Fries - $5.99</b>
        <p>Crispy hand-cut fries seasoned with sea salt, served with ketchup.</p>
      </div>
      <div className="menu-item">
        <b>Loaded Baked Potato - $7.99</b>
        <p>A large baked potato topped with butter, sour cream, cheddar cheese, bacon bits, and chives.</p>
      </div>
      <div className="menu-item">
        <b>Caesar Salad - $8.99</b>
        <p>Crisp romaine lettuce tossed with Caesar dressing, parmesan cheese, and house-made croutons.</p>
      </div>
      <div className="menu-item">
        <b>Onion Rings - $6.99</b>
        <p>Thick-cut onion rings hand-battered and fried until golden, served with ranch dipping sauce.</p>
      </div>
      <div className="menu-item">
        <b>Steamed Vegetables - $5.99</b>
        <p>A medley of seasonal vegetables lightly steamed and seasoned with butter and herbs.</p>
      </div>

      <h2>Craft Beers</h2>
      <hr />
      <div className="menu-item">
        <b>Oak Barrel IPA - $7.99</b>
        <p>Our house IPA brewed locally with Cascade and Centennial hops, featuring citrus and pine notes.</p>
      </div>
      <div className="menu-item">
        <b>Springfield Lager - $6.99</b>
        <p>A crisp, clean American lager perfect for any occasion, light-bodied with a smooth finish.</p>
      </div>
      <div className="menu-item">
        <b>Honey Wheat Ale - $7.99</b>
        <p>A refreshing wheat ale brewed with local honey, offering subtle sweetness and a golden hue.</p>
      </div>
      <div className="menu-item">
        <b>Barrel Aged Stout - $8.99</b>
        <p>A rich, dark stout aged in oak bourbon barrels for 6 months, with notes of chocolate and vanilla.</p>
      </div>
      <div className="menu-item">
        <b>Seasonal Pale Ale - $7.99</b>
        <p>Our rotating seasonal pale ale featuring locally sourced ingredients and creative flavor profiles.</p>
      </div>

      <h2>Desserts</h2>
      <hr />
      <div className="menu-item">
        <b>Chocolate Lava Cake - $9.99</b>
        <p>A warm, rich chocolate cake with a molten center, served with vanilla ice cream and a dusting of powdered sugar.</p>
      </div>
      <div className="menu-item">
        <b>New York Cheesecake - $8.99</b>
        <p>A classic creamy cheesecake on a graham cracker crust, topped with fresh strawberry compote.</p>
      </div>
      <div className="menu-item">
        <b>Apple Pie - $7.99</b>
        <p>Traditional apple pie made with Granny Smith apples, cinnamon, and a flaky butter crust, served warm.</p>
      </div>
      <div className="menu-item">
        <b>Ice Cream Sundae - $6.99</b>
        <p>Three scoops of vanilla ice cream topped with hot fudge, whipped cream, chopped nuts, and a cherry.</p>
      </div>
    </div>
  )
}

export default Menu
