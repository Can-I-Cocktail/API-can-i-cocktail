// 

const cocktailData = [
  {
    id: 1,
    cocktailName: "Classic Margarita",
    ingredients: ["tequila", "triple sec", "lime", "salt"],
    recipe: [
      "2 oz Tequila",
      "1 oz Triple Sec",
      "1 oz Fresh Lime Juice",
      "Salt for Rim",
    ],
    directions: [
      "Rim the glass with salt by running a lime wedge along the edge and dipping it in salt.",
      "In a shaker, combine tequila, triple sec, and lime juice.",
      "Add ice and shake well.",
      "Strain into the salt-rimmed glass filled with ice.",
    ],
    img: "margarita.jpeg",
  },
  {
    id: 2,
    cocktailName: "Dirty Martini",
    ingredients: ["vodka", "vermouth", "olives"],
    recipe: ["2.5 oz vodka", "0.5oz dry vermouth", "0.5oz olive brine"],
    directions: [
      "Add the gin or vodka, vermouth and olive brine to a mixing glass filled with ice and stir until well-chilled.",
      "Strain into a chilled cocktail glass.",
      "Garnish with a skewer of olives.",
    ],
    img: "martini.jpeg",
  },
  {
    id: 3,
    cocktailName: "Old Fashioned",
    ingredients: ["whiskey", "bitters"],
    recipe: [
      "2oz bourbon whiskey",
      "1tsp sugar, honey, or maple syrup",
      "3 dashes of bitters",
      "1tsp water",
      "Orange twist for garnish",
    ],
    directions: [
      "Add the sugar and bitters into a mixing glass, then add the water, and stir until the sugar is nearly dissolved.",
      "Fill the mixing glass with ice, add the bourbon, and stir until well-chilled.",
      "Strain into a rocks glass over one large ice cube.",
      "Express the oil of an orange twist over the glass, then drop into the glass to garnish.",
    ],
    img: "old-fashioned.jpeg",
  },
  {
    id: 4,
    cocktailName: "Cosmopolitan",
    ingredients: ["vodka", "cranberry juice", "cointreau", "lime"],
    recipe: [
      "4oz vodka",
      "2oz ccointreau",
      ".5oz lime juice",
      "2oz cranberry juice",
    ],
    directions: [
      "Add vodka, Cointreau, cranberry juice, and lime juice to a cocktail shaker and fill with ice. Shake until well chilled. ",
      "Strain drink into a martini glasses and garnish with a lime wheel if desired.",
    ],
    img: "cosmopolitan.jpeg",
  },
  {
    id: 5,
    cocktailName: "Negroni",
    ingredients: ["gin", "campari", "sweet vermouth"],
    recipe: [
      "1 oz Gin",
      "1 oz Campari",
      "1 oz Sweet Vermouth",
      "Orange Twist for garnish",
    ],
    directions: [
      "Fill a mixing glass with ice.",
      "Add gin, Campari, and sweet vermouth.",
      "Stir until well-chilled.",
      "Strain into a rocks glass with ice.",
      "Garnish with an orange twist.",
    ],
    img: "negroni.jpeg",
  },
  {
    id: 6,
    cocktailName: "Pina Colada",
    ingredients: ["rum", "coconut cream", "pineapple"],
    recipe: [
      "2 oz White Rum",
      "2 oz Coconut Cream",
      "4 oz Pineapple Juice",
      "Pineapple Wedge and Cherry for garnish",
    ],
    directions: [
      "Blend all ingredients with crushed ice until smooth.",
      "Pour into a chilled hurricane glass.",
      "Garnish with a pineapple wedge and a cherry.",
    ],
    img: "pina-colada.jpeg",
  },
  {
    id: 7,
    cocktailName: "Classic Daiquiri",
    ingredients: ["rum", "lime", "simple syrup"],
    recipe: ["2 oz White Rum", "1 oz Fresh Lime Juice", "0.5 oz Simple Syrup"],
    directions: [
      "Fill a shaker with ice.",
      "Add white rum, fresh lime juice, and simple syrup.",
      "Shake well.",
      "Strain into a chilled cocktail glass.",
    ],
    img: "classic-daiquiri.jpeg",
  },
  {
    id: 8,
    cocktailName: "Mojito",
    ingredients: ["rum", "lime", "mint", "soda water"],
    recipe: [
      "2 oz White Rum",
      "1 oz Fresh Lime Juice",
      "2 tsp Sugar",
      "6-8 Fresh Mint Leaves",
      "Soda Water",
    ],
    directions: [
      "Muddle mint leaves and sugar in a glass.",
      "Add fresh lime juice and white rum.",
      "Fill the glass with ice.",
      "Top with soda water and stir gently.",
    ],
    img: "mojito.jpeg",
  },
  {
    id: 9,
    cocktailName: "Whiskey Sour",
    ingredients: ["whiskey", "lemon", "simple syrup"],
    recipe: [
      "2oz bourbon whiskey",
      "0.75oz lemon juice, freshly squeezed or bottled",
      "0.75oz simple syrup or maple syrup",
    ],
    directions: [
      "Add all the ingredients to a cocktail shaker filled with ice.",
      "Shake well until chilled.",
      "Strain into a rocks glass filled with ice.",
      "Garnish with a lemon slice or cherry if desired.",
    ],
    img: "whiskey-sour.jpeg",
  },
  {
    id: 10,
    cocktailName: "Moscow Mule",
    ingredients: ["vodka", "ginger beer", "lime"],
    recipe: [
      "2 oz Vodka",
      "6 oz Ginger Beer",
      "0.5 oz Fresh Lime Juice",
      "Lime Wedge for garnish",
    ],
    directions: [
      "Fill a copper mug with ice.",
      "Pour vodka and ginger beer over the ice.",
      "Add fresh lime juice and stir.",
      "Garnish with a lime wedge.",
    ],
    img: "moscow-mule.jpeg",
  },
  {
    id: 11,
    cocktailName: "Screwdriver",
    ingredients: ["vodka", "orange"],
    recipe: ["2 oz Vodka", "5 oz Orange Juice"],
    directions: [
      "Fill a highball glass with ice.",
      "Add vodka and orange juice.",
      "Stir well.",
    ],
    img: "screwdriver.jpeg",
  },
  {
    id: 12,
    cocktailName: "Tequila Sunrise",
    ingredients: ["tequila", "orange", "grenadine"],
    recipe: ["2oz blanco tequila", "4oz orange juice", "0.25oz grenadine"],
    directions: [
      "Add the tequila and then the orange juice to a chilled highball glass filled with ice.",
      "Top with the grenadine, which will sink to the bottom of the glass, creating a layered effect.",
      "Garnish with an orange slice and a cherry.",
    ],
    img: "tequila-sunrise.jpeg",
  },
  {
    id: 13,
    cocktailName: "White Russian",
    ingredients: ["vodka", "kahlua"],
    recipe: [
      "2 oz Vodka",
      "1 oz Coffee Liqueur (e.g., Kahlua)",
      "1 oz Cream or Milk",
    ],
    directions: [
      "Fill an old-fashioned glass with ice.",
      "Pour in vodka and coffee liqueur.",
      "Float the cream or milk on top by pouring it over the back of a spoon.",
    ],
    img: "white_russian.jpeg",
  },
  {
    id: 14,
    cocktailName: "Paloma",
    ingredients: [
      "tequila",
      "grapefruit",
      "lime",
      "simple syrup",
      "soda water",
    ],
    recipe: [
      "2oz tequila",
      "2oz grapefruit soda OR grapefruit juice",
      "2oz soda water",
      ".5oz lime juice",
      ".25oz simple syrup",
    ],
    directions: [
      "Rim the glass with salt. A classic margarita has salt on the rim. Why? The salt enhances the sweet and sour flavors in the drink.",
      "Shake in a cocktail shaker. Take that tequila, Cointreau and lime juice and shake it together in a cocktail shaker with 4 ice cubes.",
      "Strain into a glass and add ice. Strain the drink into a glass and add ice.",
      "Rim the glass with salt. Not only does it look cute, but the salt enhances the overall flavor of the drink.",
      "Stir tequila, grapefruit, lime and syrup in the glass.",
      "Add ice and top with soda water. Fill the glass with ice and top with soda water. Or if you are using grapefruit soda, simply pour the soda into the tequila.",
    ],
    img: "paloma.jpeg",
  },
  {
    id: 15,
    cocktailName: "Tom Collins",
    ingredients: ["gin", "lemon", "simple syrup", "soda water"],
    recipe: [
      "2oz gin",
      "0.75oz simple syrup",
      "1oz lemon juice, freshly squeezed or bottled",
      "4oz soda water",
      "Maraschino cherry, lemon wheel for garnish",
    ],
    directions: [
      "Add the gin, syrup and lemon juice to a cocktail shaker with 4 ice cubes. Shake well until chilled.",
      "Strain the liquid into an ice filled glass, and top off the glass with soda water. Garnish with a lemon wheel and cocktail cherry.",
    ],
    img: "tom-collins.jpeg",
  },
  {
    id: 16,
    cocktailName: "Mexican Mule",
    ingredients: ["tequila", "lime", "ginger beer"],
    recipe: ["2oz tequila", ".5oz lemon juice", "3-4oz ginger beer"],
    directions: [
      "Pour the tequila, lime juice, and ginger beer into a copper mug or serving glass of your choice.",
      "Add ice cubes, and garnish with lime.",
    ],
    img: "mexican_mule.jpeg",
  },
  {
    id: 17,
    cocktailName: "Caipirinha",
    ingredients: ["cachaca", "lime"],
    recipe: ["2 oz Cachaça", "1 Lime, cut into wedges", "2 tsp Sugar"],
    directions: [
      "Muddle lime wedges and sugar in a glass.",
      "Add cachaça and ice.",
      "Stir gently.",
    ],
    img: "caipirinha.jpeg",
  },
  {
    id: 18,
    cocktailName: "Siesta",
    ingredients: ["tequila", "campari", "grapefruit", "lime", "simple syrup"],
    recipe: [
      "2oz tequila",
      ".5oz Campari",
      ".5oz grapefruit juice",
      ".5oz lime juice",
      ".5oz simple syrup",
    ],
    directions: [
      "Place the tequila, Campari, grapefruit juice, lime juice, and simple syrup in a cocktail shaker.",
      "Add 2 handfuls of ice and shake until cold.",
      "Strain the drink into a cocktail glass. Garnish with a citrus wedge if desired.",
    ],
    img: "siesta.jpeg",
  },
  {
    id: 19,
    cocktailName: "Sazerac",
    ingredients: ["whiskey", "bitters", "absinthe"],
    recipe: [
      "2 oz Rye Whiskey",
      "1 Sugar Cube",
      "2 dashes Bitters",
      "Absinthe Rinse",
      "Lemon Peel for garnish",
    ],
    directions: [
      "Rinse an Old Fashioned glass with absinthe, then discard the excess.",
      "Muddle the sugar cube and bitters in a separate glass.",
      "Add ice and rye whiskey.",
      "Stir until well-chilled.",
      "Strain into the prepared glass.",
      "Garnish with a lemon peel.",
    ],
    img: "sazerac.jpeg",
  },
  {
    id: 20,
    cocktailName: "Sidecar",
    ingredients: ["cognac", "triple sec", "lemon"],
    recipe: [
      "2 oz Cognac",
      "1 oz Triple Sec",
      "0.75 oz Fresh Lemon Juice",
      "Sugar for Rim",
      "Lemon Twist for garnish",
    ],
    directions: [
      "Rim a chilled martini glass with sugar.",
      "In a shaker, combine cognac, triple sec, and fresh lemon juice.",
      "Shake well.",
      "Strain into the sugar-rimmed glass.",
      "Garnish with a lemon twist.",
    ],
    img: "sidecar.jpeg",
  },
  {
    id: 21,
    cocktailName: "Aviation",
    ingredients: ["gin", "maraschino liqueur", "creme de violette", "lemon"],
    recipe: [
      "2 oz Gin",
      "0.5 oz Maraschino Liqueur",
      "0.25 oz Crème de Violette",
      "0.75 oz Fresh Lemon Juice",
      "Lemon Twist for garnish",
    ],
    directions: [
      "Fill a shaker with ice.",
      "Add gin, maraschino liqueur, crème de violette, and fresh lemon juice.",
      "Shake well.",
      "Strain into a chilled martini glass.",
      "Garnish with a lemon twist.",
    ],
    img: "aviation.jpeg",
  },
  {
    id: 22,
    cocktailName: "Corpse Reviver #2",
    ingredients: ["gin", "cointreau", "lillet blanc", "lemon", "absinthe"],
    recipe: [
      "1 oz Gin",
      "1 oz Cointreau",
      "1 oz Lillet Blanc",
      "1 oz Fresh Lemon Juice",
      "1 dash Absinthe",
      "Lemon Twist for garnish",
    ],
    directions: [
      "Rinse a chilled cocktail glass with absinthe, then discard the excess.",
      "Fill a shaker with ice.",
      "Add gin, Cointreau, Lillet Blanc, fresh lemon juice, and absinthe.",
      "Shake well.",
      "Strain into the prepared glass.",
      "Garnish with a lemon twist.",
    ],
    img: "corpse-reviver.jpeg",
  },
  {
    id: 23,
    cocktailName: "Hemingway Daiquiri",
    ingredients: ["rum", "lime", "grapefruit", "maraschino liqueur"],
    recipe: [
      "2 oz White Rum",
      "3/4 oz Fresh Lime Juice",
      "1/2 oz Fresh Grapefruit Juice",
      "1/2 oz Maraschino Liqueur",
      "Lime Wheel for garnish",
    ],
    directions: [
      "Fill a shaker with ice.",
      "Add white rum, fresh lime juice, fresh grapefruit juice, and maraschino liqueur.",
      "Shake well.",
      "Strain into a chilled cocktail glass.",
      "Garnish with a lime wheel.",
    ],
    img: "hemingway-daiquiri.jpeg",
  },
  {
    id: 24,
    cocktailName: "Boulevardier",
    ingredients: ["bourbon", "campari", "sweet vermouth"],
    recipe: [
      "1.5 oz Bourbon",
      "1 oz Campari",
      "1 oz Sweet Vermouth",
      "Orange Twist for garnish",
    ],
    directions: [
      "Fill a mixing glass with ice.",
      "Add bourbon, Campari, and sweet vermouth.",
      "Stir until well-chilled.",
      "Strain into a rocks glass with ice.",
      "Garnish with an orange twist.",
    ],
    img: "boulevardier.jpeg",
  },
  {
    id: 25,
    cocktailName: "Grasshopper",
    ingredients: ["creme de menthe", "white creme de cacao"],
    recipe: [
      "3/4 oz Green Crème de Menthe",
      "3/4 oz White Crème de Cacao",
      "3/4 oz Cream or Milk",
      "Chocolate Shavings for garnish",
    ],
    directions: [
      "Fill a shaker with ice.",
      "Add green crème de menthe, white crème de cacao, and cream or milk.",
      "Shake well.",
      "Strain into a chilled martini glass.",
      "Garnish with chocolate shavings.",
    ],
    img: "grasshopper.jpeg",
  },
  {
    id: 26,
    cocktailName: "Cantarito",
    ingredients: ["tequila", "orange", "lime", "lemon", "grapefruit"],
    recipe: [
      "2oz tequila",
      "1oz orange juice",
      ".5oz lemon juice",
      ".5oz lime juice",
      "4oz grapefruit soda",
      "1 pinch salt",
    ],
    directions: [
      "Combine the tequila, orange juice, lemon juice and lime juice in the glass with a pinch of salt.",
      "Fill the glass with ice and top with grapefruit soda. Garnish with citrus wedges.",
    ],
    img: "cantarito.jpeg",
  },
  {
    id: 27,
    cocktailName: "French 75",
    ingredients: ["gin", "lemon", "simple syrup", "champagne"],
    recipe: [
      "1.5oz gin",
      "0.75oz lemon juice, freshly squeezed or bottled",
      "0.5oz simple syrup",
      "3oz champagne",
    ],
    directions: [
      "Place the gin, lemon juice, and syrup in a cocktail shaker with ice. Shake 15 seconds until cold. Strain the liquid into a champagne flute. (You can also pour these ingredients right into the flute, but the classic method is to use a cocktail shaker. If desired, shake up to 4 drinks at one time.)",
      "Top off the glass with champagne. Garnish and serve.",
    ],
    img: "french-75.jpeg",
  },
  {
    id: 28,
    cocktailName: "Bee's Knees",
    ingredients: ["gin", "lemon"],
    recipe: ["2 oz Gin", "3/4 oz Fresh Lemon Juice", "3/4 oz Honey Syrup"],
    directions: [
      "Fill a shaker with ice.",
      "Add gin, fresh lemon juice, and honey syrup.",
      "Shake well.",
      "Strain into a chilled cocktail glass.",
    ],
    img: "bees-knees.jpeg",
  },
  {
    id: 29,
    cocktailName: "Dark 'n' Stormy",
    ingredients: ["rum", "ginger beer"],
    recipe: ["2 oz Dark Rum", "3 oz Ginger Beer", "Lime Wedge for garnish"],
    directions: [
      "Fill a highball glass with ice.",
      "Add dark rum and ginger beer.",
      "Stir gently.",
      "Garnish with a lime wedge.",
    ],
    img: "dark-stormy.jpeg",
  },
  {
    id: 30,
    cocktailName: "Mint Julep",
    ingredients: ["bourbon", "mint", "simple syrup"],
    recipe: [
      "2.5 oz Bourbon",
      "8-10 Fresh Mint Leaves",
      "0.5 oz Simple Syrup",
      "Crushed Ice",
    ],
    directions: [
      "Muddle mint leaves and simple syrup in a glass or julep cup.",
      "Fill the glass with crushed ice.",
      "Add bourbon and stir well.",
      "Garnish with a mint sprig.",
    ],
    img: "mint-julep.jpeg",
  },
  {
    id: 31,
    cocktailName: "Gin Fizz",
    ingredients: ["gin", "lemon", "simple syrup", "soda water"],
    recipe: [
      "2oz gin",
      "0.75oz lemon juice, freshly squeezed or bottled",
      "0.5oz simple syrup or maple syrup",
      "1 egg white (optional)",
      "Soda water",
    ],
    directions: [
      "Place the gin, lemon juice, syrup and egg white in a cocktail shaker. Shake vigorously for 15 seconds.",
      "Fill the shaker with ice and shake for 30 seconds until cold.",
      "Strain the drink into a glass and top with the soda water; the egg white foam forms on top. If desired, garnish with a lemon twist. Serve immediately.",
    ],
    img: "gin-fizz.jpeg",
  },
  {
    id: 32,
    cocktailName: "Harvey Wallbanger",
    ingredients: ["vodka", "galliano", "orange"],
    recipe: [
      "1.5 oz Vodka",
      "0.5 oz Galliano",
      "3 oz Orange Juice",
      "Orange Slice and Cherry for garnish",
    ],
    directions: [
      "Fill a highball glass with ice.",
      "Add vodka and orange juice.",
      "Stir well.",
      "Float Galliano on top by pouring it over the back of a spoon.",
      "Garnish with an orange slice and a cherry.",
    ],
    img: "harvey-wallbanger.jpeg",
  },
  {
    id: 33,
    cocktailName: "Sex on the Beach",
    ingredients: ["vodka", "peach schnapps", "cranberry", "orange"],
    recipe: [
      "1.5 oz Vodka",
      "0.5 oz Peach Schnapps",
      "2 oz Cranberry Juice",
      "2 oz Orange Juice",
      "Orange Slice and Cherry for garnish",
    ],
    directions: [
      "Fill a highball glass with ice.",
      "Add vodka, peach schnapps, cranberry juice, and orange juice.",
      "Stir well.",
      "Garnish with an orange slice and a cherry.",
    ],
    img: "sex-on-the-beach.jpeg",
  },
  {
    id: 34,
    cocktailName: "Vodka Gimlet",
    ingredients: ["vodka", "lime", "simple syrup"],
    recipe: ["2oz vodka", "1oz lime juice", "0.25oz simple syrup"],
    directions: [
      "Add vodka, lime juice, and syrup to a cocktail shaker. Fill with a handful of ice and shake until cold.",
      "Strain the drink into a coupe or martini glass and top with a splash of soda water, if desired. Garnish with a lime wedge or wheel and serve.",
    ],
    img: "vodka_gimlet.jpeg",
  },
  {
    id: 35,
    cocktailName: "Moscow Mule",
    ingredients: ["vodka", "lime", "ginger beer"],
    recipe: ["2oz vodka", ".5oz lime juice", "4oz ginger beer"],
    directions: [
      "Pour the vodka, lime juice, and ginger beer into a copper mug.",
      "Add ice and garnish with a lime slice. Serve immediately.",
    ],
    img: "moscow_mule.jpeg",
  },
  {
    id: 36,
    cocktailName: "Vodka Sour",
    ingredients: ["vodka", "bitters", "simple syrup", "lemon"],
    recipe: [
      "2oz vodka",
      "2oz cointreau",
      "1oz lemon juice",
      ".5oz lime juice (optional)",
      "2 dashes Angostura bitters",
      "1 egg white",
    ],
    directions: [
      "Add the vodka, lemon juice, lime juice, syrup, bitters, and egg white to a cocktail shaker without ice. Shake for 15 seconds.",
      "Add the ice to the cocktail shaker. Shake again for 30 seconds.",
      "Strain the drink into a glass; the foam will collect at the top. Serve with ice, a lemon wedge, and a cocktail cherry.",
    ],
    img: "vodka_sour.jpeg",
  },
  {
    id: 37,
    cocktailName: "Mai Tai",
    ingredients: ["rum", "lime", "orgeat syrup", "triple sec", "simple syrup"],
    recipe: [
      "2 oz Dark Rum",
      "0.75 oz Fresh Lime Juice",
      "0.5 oz Orgeat Syrup",
      "0.5 oz Triple Sec",
      "0.25 oz Simple Syrup",
      "Mint Sprig and Lime Wheel for garnish",
    ],
    directions: [
      "Fill a shaker with ice.",
      "Add dark rum, fresh lime juice, orgeat syrup, triple sec, and simple syrup.",
      "Shake well.",
      "Strain into a rocks glass filled with crushed ice.",
      "Garnish with a mint sprig and a lime wheel.",
    ],
    img: "mai-tai.jpeg",
  },
  {
    id: 38,
    cocktailName: "Aperol Spritz",
    ingredients: ["aperol", "prosecco", "soda water"],
    recipe: [
      "3oz aperol",
      "3oz prosecco",
      "1oz club soda, soda water, or sparkling water",
      "Orange slice for garnish",
    ],
    directions: [
      "Add ice to a wine glass until it is nearly full. Pour in the Aperol.",
      "Pour in an equal amount of Prosecco. Top your drink off with a splash of club soda and add a slice of orange. Enjoy!",
    ],
    img: "aperol-spritz.jpeg",
  },
  {
    id: 39,
    cocktailName: "Rum Punch",
    ingredients: [
      "rum",
      "orange",
      "pineapple",
      "grenadine",
      "lime",
      "simple syrup",
      "bitters",
    ],
    recipe: [
      "2 oz Dark Rum",
      "2 oz Orange Juice",
      "2 oz Pineapple Juice",
      "0.5 oz Grenadine",
      "0.5 oz Lime Juice",
      "0.5 oz Simple Syrup",
      "2 dashes Angostura Bitters",
      "Lime Slice and Cherry for garnish",
    ],
    directions: [
      "Fill a shaker with ice.",
      "Add dark rum, orange juice, pineapple juice, grenadine, lime juice, simple syrup, and Angostura bitters.",
      "Shake well.",
      "Strain into a chilled highball glass filled with ice.",
      "Garnish with a lime slice and a cherry.",
    ],
    img: "rum-punch.jpeg",
  },
  {
    id: 40,
    cocktailName: "Gin Gimlet",
    ingredients: ["gin", "lime", "simple syrup"],
    recipe: [
      "2oz gin",
      "0.5oz lime juice, freshly squeezed or bottled",
      "0.5oz simple syrup or maple syrup",
      "Splash of soda water (optional)",
    ],
    directions: [
      "Add gin, lime juice, and syrup to a cocktail shaker. Fill with ice and shake until cold.",
      "Strain into glass and top with a splash of soda water, if desired. Garnish with a lime wheel and serve.",
    ],
    img: "gin-gimlet.jpeg",
  },
  {
    id: 41,
    cocktailName: "Brain-Duster",
    ingredients: ["whiskey", "absinthe", "vermouth", "bitters"],
    recipe: [
      "1oz rye whiskey",
      "1oz absinthe",
      "1oz Italian vermouth",
      "1 dash of Angostura bitters",
    ],
    directions: [
      "Stir ingredients well with cracked ice, then strain into a chilled cocktail glass.",
    ],
    img: "brain-duster.jpeg",
  },
  {
    id: 42,
    cocktailName: "Hot Toddy",
    ingredients: ["whiskey", "honey", "lemon", "tea"],
    recipe: [
      "2oz bourbon whiskey",
      "0.5oz honey",
      "lemon juice, freshly squeezed or bottled",
      "1 tea bag",
    ],
    directions: [
      "Boil water in a teapot, then steep star anise pod or tea bag inside.",
      "Add bourbon, honey, and lemon to a glass mug. Stir. Pour tea over the cocktail base to taste, and stir.",
    ],
    img: "hot-toddy.jpeg",
  },
  {
    id: 43,
    cocktailName: "Kentucky Mule",
    ingredients: ["whiskey", "lime", "ginger beer"],
    recipe: [
      "2oz bourbon whiskey",
      "0.5oz lime juice, freshly squeezed or bottled",
      "6oz ginger beer",
    ],
    directions: [
      "Squeeze lime juice into a Moscow Mule mug (or a Collins glass) and drop in the spent shell.",
      "Add 2 or 3 ice cubes, then pour in the bourbon and fill with cold ginger beer. Garnish with mint and serve with a stirring rod.",
    ],
    img: "kentucky-mule.jpeg",
  },
  {
    id: 44,
    cocktailName: "Blue Lagoon",
    ingredients: ["vodka", "blue curacao", "lemonade"],
    recipe: [
      "1.5 oz vodka",
      "0.5 oz blue curacao",
      "4 oz lemonade",
      "lemon slice and cherry (for garnish)",
    ],
    directions: [
      "Fill a highball glass with ice.",
      "Add vodka, blue curacao, and lemonade.",
      "Stir well.",
      "Garnish with a lemon slice and a cherry.",
    ],
    img: "blue-lagoon.jpeg",
  },
  {
    id: 45,
    cocktailName: "Pisco Sour",
    ingredients: ["pisco", "lime", "simple syrup", "bitters"],
    recipe: [
      "2 oz pisco",
      "1 oz fresh lime juice",
      "0.75 oz simple syrup",
      "1 egg white",
      "angostura bitters",
    ],
    directions: [
      "Dry shake pisco, fresh lime juice, simple syrup, and egg white without ice.",
      "Add ice and shake again.",
      "Strain into a chilled cocktail glass.",
      "Top with a few drops of Angostura Bitters.",
    ],
    img: "pisco-sour.jpeg",
  },
  {
    id: 46,
    cocktailName: "Gin and Tonic",
    ingredients: ["gin", "tonic"],
    recipe: ["2 oz gin", "5 oz tonic water", "lime wedge for garnish"],
    directions: [
      "Fill a highball glass with ice.",
      "Add gin and tonic water.",
      "Stir gently.",
      "Garnish with a lime wedge.",
    ],
    img: "gin-tonic.jpeg",
  },
];

export default cocktailData;