import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OrderDetailsService {
  constructor() {}

  foodDetails = [
    {
      id: 1,
      foodName: 'Papdi Chaat',
      foodDetails: 'Indian sweet, spicy, and tangy meal',
      Steps:
        'Gather the dough ingredients, Mix the flour, ghee, onion seeds, and salt in a bowl. Add the water, a spoonful at a time, and knead until you get a firm, smooth dough, Cover the dough with a damp cloth and allow it to rest for 20 minutes, Divide the dough into equal-sized balls. Roll the dough balls between your palms until smooth, Lightly flour a clean rolling surface and press one ball flat.Use a circular cookie cutter to cut out small circles, fitting as many as you can in each rolled out dough circle. Place them on a lightly floured tray or plate. Fry until they are crisp and pale golden',
      Rating: 4,
      Country: 'India',
      Ingredients:
        '1 cup all-purpose flour, 4 tablespoons ghee, 1 teaspoon onion seeds, Kosher salt to taste,Water as needed, about 1/3 cup, Vegetable oil, for frying, 5 large potatoes, 1 cup chickpeas, 2 cups fresh yogurt, 2 red onions,2 tomatoes, 1/4 cup fresh coriander leaves',
      TimeItTakes: 35,
      IsVeggi: true,
      IsVegan: true,
      CalorieCount: 1064,
      foodImg:
        'https://i.pinimg.com/564x/ba/c6/0b/bac60b91a9639254825c9a2909513e28.jpg',
      VideoLink: 'https://www.youtube.com/watch?v=Nwz5UbdpcsE',
      foodPrice: 100,
      Chef: 'Ranveer Brar',
    },
    {
      id: 2,
      foodName: 'Sarma',
      foodDetails: 'Traditional Turkish meal originated from Ottoman Empire',
      Steps:
        'Saute onion in olive oil in a large skillet over medium heat. After they begin to turn golden about 5 minutes), add rice, tomato paste, currants, and lemon juice.Add water and salt and bring to a boil.Add pine nuts, sugar, allspice, cinnamon, and parsleyStuff leaves in the following manner: Place leaves dull side up on a flat surface. Add 1 tsp filling on stem end. Turn the sides in and roll up into a burrito shape. Press leaf end into the roll. Place grape leaves in a skillet. Weigh down with a plate. Add enough boiling salt water to cover.',
      Rating: 4,
      Country: 'Turkey',
      Ingredients:
        'grape leaves, olive oil, onion,  basmati rice, tomato paste, dried currants, lemon juice,water, salt, pine nuts, sugar, ground allspice, ground cinnamon, chopped fresh parsley',
      TimeItTakes: 220,
      IsVeggi: false,
      IsVegan: false,
      CalorieCount: 710,
      foodImg:
        'https://i.pinimg.com/564x/1b/48/11/1b4811bf90888be432738ba34cf482db.jpg',
      VideoLink: 'https://www.youtube.com/watch?v=sfQm4xxr09c',
      Chef: 'Burak Ozdemir',
      foodPrice: 110,
    },
    {
      id: 3,
      foodName: 'Pizza Margherita',
      foodDetails: 'Italian originated dish but popular world wide',
      Steps:
        'Make the pizza dough. Cut the garlic into a few rough pieces. Place the garlic, tomatoes, olive oil, oregano and kosher salt in a blender.If using fresh mozzarella cheese, slice it into ¼ inch thick pieces.When the oven is ready, dust a pizza peel with cornmeal or semolina flour.Then gently place the dough onto the pizza peel.Spread a thin layer of the pizza sauce over the dough.',
      Rating: 5,
      Country: 'Italy',
      Ingredients:
        'unbleached all-purpose flour, granulated sugar, salt, water , olive oil, tomatoes, garlic, black pepper, mozzarella cheese, basil leaves',
      TimeItTakes: 40,
      IsVeggi: true,
      IsVegan: true,
      CalorieCount: 590,
      foodImg:
        'https://i.pinimg.com/564x/35/40/6a/35406a43af95c801d0993b2dbf2b7c30.jpg',
      VideoLink: 'https://www.youtube.com/watch?v=xKDnD8sJsuY',
      foodPrice: 120,
      Chef: 'Gennaro Contaldo',
    },
    {
      id: 4,
      foodName: 'Chicken Satay',
      foodDetails:
        "Satay is a traditional Indonesian dish consisting of skewered meat that's served with a sauce on the side.",
      Steps:
        'n a medium bowl, combine coconut milk, soy sauce, curry powder, turmeric, garlic, ginger, brown sugar and fish sauce.In a gallon size Ziploc bag or large bowl, combine chicken and coconut milk mixture.Drain the chicken from the marinade, discarding the marinade.Thread chicken onto skewers. Brush with canola oil; season with salt and pepper, to taste.Add skewers to grill, and cook, turning occasionally, until the chicken is completely cooked through.',
      Rating: 4,
      Country: 'Indonesia',
      Ingredients:
        'chicken, coconut milk, soy sauce, curry powder, turmeric, minced, ginger, sugar, fish sauce, canola oil',
      TimeItTakes: 150,
      IsVeggi: false,
      IsVegan: false,
      CalorieCount: 120,
      foodImg:
        'https://i.pinimg.com/564x/ed/be/4f/edbe4f0e2ae9e54949abe8c628198a3f.jpg',
      VideoLink: 'https://www.youtube.com/watch?v=9pP-_9u7Nig',
      foodPrice: 130,
      Chef: 'Gilles Marx',
    },
    {
      id: 5,
      foodName: 'Soybean sprout',
      foodDetails:
        'The list of banchan dishes is extensive, but the most common options include different kimchi varieties, pickled and fresh vegetables.',
      Steps:
        'Place soybean sprouts in a pot. Add the salt and ½ cup of water and cover. Bring to a boil over medium high heat for 10 minutes. Drain.Put the cooked soybean sprouts in a mixing bowl. Add garlic, hot pepper flakes, green onion, fish sauce, sesame seeds, and toasted sesame oil and mix by hand.Transfer to a serving plate.Serve as a side dish to rice.',
      Rating: 4,
      Country: 'South Korea',
      Ingredients:
        'Soybean sprouts, salt, garlic, green onion, pepper flakes, fish souce, sesame seeds, sesame oil',
      TimeItTakes: 40,
      IsVeggi: true,
      IsVegan: true,
      CalorieCount: 100,
      foodImg:
        'https://www.maangchi.com/wp-content/uploads/2010/04/kongnamulmuchim_plate-590x394.jpg',
      VideoLink: 'https://youtu.be/NWfhIq_MiiU',
      foodPrice: 140,
      Chef: 'Beak Yong',
    },
    {
      id: 6,
      foodName: 'Eclair',
      foodDetails: 'French sweets',
      Steps:
        'Using a tablespoon or a pastry tube with a #10 or large round tip, form dough into nine 4x1-1/2-in. strips on a greased baking sheet. Bake 35-40 minutes or until puffed and golden. Remove to a wire rack. Immediately split eclairs open; remove tops and set aside. Discard soft dough from inside. Cool eclairs.In a large bowl, beat milk and pudding mix according to package directions. In another bowl, whip cream until soft peaks form. Beat in sugar and vanilla; fold into pudding. Fill eclairs.For frosting, in a microwave, melt chocolate and butter; stir until smooth. Stir in sugar and enough hot water to achieve a smooth consistency. Cool slightly. Frost eclairs. Store in refrigerator.',
      Rating: 5,
      Country: 'France',
      Ingredients:
        'water, butter, salt, flour, 4 eggs, milk, vanilla pudding, whipping cream, sugar, vanilla extract, chocolate, ',
      TimeItTakes: 45,
      IsVeggi: true,
      IsVegan: true,
      CalorieCount: 483,
      foodImg:
        'https://i.pinimg.com/564x/bc/f5/c0/bcf5c0950c5e4552a52f2900defafd18.jpg',
      VideoLink: 'https://www.youtube.com/watch?v=6GIGcq8SCpE',
      foodPrice: 150,
      Chef: 'Julia Child',
    },
    {
      id: 7,
      foodName: 'Bruschetta',
      foodDetails: 'Italian special dish',
      Steps:
        'In a bowl, toss together the tomatoes, basil, Parmesan cheese, and garlic. Mix in the balsamic vinegar, olive oil, kosher salt, and pepper. Serve on toasted bread slices.',
      Rating: 5,
      Country: 'Italy',
      Ingredients:
        'bread, garlic, olive oil, tomato, basil, oregano, wild fennel',
      TimeItTakes: 20,
      IsVeggi: true,
      IsVegan: true,
      CalorieCount: 80,
      foodImg:
        'https://i.pinimg.com/236x/60/f9/c6/60f9c633aad8c01287ba1f1af9058cb1.jpg',
      VideoLink: 'https://www.youtube.com/watch?v=Q3xg35pcLyo',
      foodPrice: 160,
      Chef: 'Antonio Carluccio',
    },
    {
      id: 8,
      foodName: 'Cheese Borek',
      foodDetails:
        'Börek is a baked dish consisting of a savory or sweet filling wrapped in yufka',
      Steps:
        ' Make sure your yufka dough is kept moist, so take it out of the packaging and keep it between two damp dish towels.Make the fillings for your borek.Cut your yufka, and separate the layers. Decide which shape or layering technique to use. Make sure to brush each layer with generous amounts of egg wash or melted butter.Cook your borek. Most, like ours is baked, but some called sigara börek (a Turkish cheese borek), are rolled and deep fried providing a completely different flavor. They are often served as appetizers to a meal.',
      Rating: 5,
      Country: 'Turkey',
      Ingredients: 'cheese, flour, salt, water, sugar',
      TimeItTakes: 40,
      IsVeggi: true,
      IsVegan: true,
      CalorieCount: 300,
      foodImg:
        'https://i.pinimg.com/236x/07/58/29/07582941dfac8638f74b2e3a59bc7c3d.jpg',
      VideoLink: 'https://www.youtube.com/watch?v=gQJR8WZ3G_8',
      foodPrice: 170,
      Chef: 'Nusret Gokce',
    },
    {
      id: 9,
      foodName: 'Pavlova',
      foodDetails: 'Pavlova is the quintessential summer dessert.',
      Steps:
        'Preheat oven to 300 degrees F (150 degrees C). Line a baking sheet with parchment paper. Draw a 9-inch circle on the parchment paper.In a large bowl, beat egg whites until stiff but not dry. Gradually add in the sugar, about 1 tablespoon at a time, beating well after each addition. Beat until thick and glossy. Gently fold in vanilla extract, lemon juice, and cornstarch.In a small bowl, beat heavy cream until stiff peaks form; set aside. Remove the paper, and place meringue on a flat serving plate. Fill the center of the meringue with whipped cream, and top with kiwifruit slices.',
      Rating: 3,
      Country: 'New Zeland',
      Ingredients:
        'eggs, sugar, vanilla, lemon juice, cream, kiwi, strawbaries',
      TimeItTakes: 120,
      IsVeggi: true,
      IsVegan: true,
      CalorieCount: 200,
      foodImg:
        'https://i.pinimg.com/236x/35/e6/41/35e6415f2f60c1c2b05b580fbf515a8e.jpg',
      VideoLink: 'https://www.youtube.com/watch?v=ZSW3BJi-1jI',
      foodPrice: 180,
      Chef: 'Josh Emett',
    },
    {
      id: 10,
      foodName: 'Churros',
      foodDetails:
        'Elongated, crispy, crunchy and intensely fragrant, churros.',
      Steps:
        'add water, butter, and sugar. Bring to a boil, then add vanilla. Turn off heat and add flour and salt. Stir with a wooden spoon until thickened.Beat in eggs one at a time until combined.Add oil.Fry until golden. Serve with chocolate.',
      Rating: 5,
      Country: 'Spain',
      Ingredients: 'flour, olive oil, salt, sugar, eggs, chocolate',
      TimeItTakes: 60,
      IsVeggi: true,
      IsVegan: true,
      CalorieCount: 120,
      foodImg:
        'https://i.pinimg.com/236x/d1/be/bf/d1bebf30e5b9c6810c7ee3c7417b4fd2.jpg',
      VideoLink: 'https://www.youtube.com/watch?v=52iQHBkfo5g',
      foodPrice: 190,
      Chef: 'Josh Emett',
    },
  ];
}
