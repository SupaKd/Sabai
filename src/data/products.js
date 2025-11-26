// data/products.js
export const products = [
  /* ------- Sushi ------- */
  { 
    id: 1, 
    name: "Sushi Saumon", 
    price: 12.5, 
    category: "Sushi", 
    image: "/images/logosabai.png",
    description: "Délicieux sushi au saumon frais, riz vinaigré et nori croustillant"
  },
  { 
    id: 2, 
    name: "Sushi Thon", 
    price: 13, 
    category: "Sushi", 
    image: "/images/logosabai.png",
    description: "Thon rouge de qualité supérieure sur un lit de riz parfumé"
  },
  { 
    id: 3, 
    name: "Sushi Crevette", 
    price: 12, 
    category: "Sushi", 
    image: "/images/logosabai.png",
    description: "Crevettes tigrées cuites à la perfection, fraîcheur garantie"
  },
  { 
    id: 4, 
    name: "Sushi Anguille", 
    price: 14, 
    category: "Sushi", 
    image: "/images/logosabai.png",
    description: "Anguille grillée sauce unagi, un classique japonais"
  },

  /* ------- California ------- */
  { 
    id: 5, 
    name: "California Avocat", 
    price: 10, 
    category: "California", 
    image: "/images/logosabai.png",
    description: "Roulé à l'extérieur, avocat crémeux et concombre croquant"
  },
  { 
    id: 6, 
    name: "California Saumon Cheese", 
    price: 11, 
    category: "California", 
    image: "/images/logosabai.png",
    description: "Saumon frais et fromage cream cheese, une alliance parfaite"
  },
  { 
    id: 7, 
    name: "California Thon Epicé", 
    price: 12, 
    category: "California", 
    image: "/images/logosabai.png",
    description: "Thon épicé mayonnaise, pour les amateurs de sensations fortes"
  },
  { 
    id: 8, 
    name: "California Tempura", 
    price: 13, 
    category: "California", 
    image: "/images/logosabai.png",
    description: "Crevettes tempura croustillantes, texture unique"
  },

  /* ------- Maki ------- */
  { 
    id: 9, 
    name: "Maki Concombre", 
    price: 8, 
    category: "Maki", 
    image: "/images/maki_concombre.jpg",
    description: "Simplicité et fraîcheur, concombre croquant enroulé dans le riz"
  },
  { 
    id: 10, 
    name: "Maki Saumon", 
    price: 9, 
    category: "Maki", 
    image: "/images/maki_saumon.jpg",
    description: "Saumon frais enroulé dans l'algue nori, basique mais essentiel"
  },
  { 
    id: 11, 
    name: "Maki Thon", 
    price: 9, 
    category: "Maki", 
    image: "/images/maki_thon.jpg",
    description: "Thon rouge de qualité, roulé à la main par nos chefs"
  },
  { 
    id: 12, 
    name: "Maki Avocat", 
    price: 8, 
    category: "Maki", 
    image: "/images/maki_avocat.jpg",
    description: "Avocat mûr à point, onctueux et savoureux"
  },

  /* ------- Sashimi ------- */
  { 
    id: 13, 
    name: "Sashimi Saumon", 
    price: 14, 
    category: "Sashimi", 
    image: "/images/sashimi_saumon.jpg",
    description: "Tranches épaisses de saumon norvégien, pureté du poisson"
  },
  { 
    id: 14, 
    name: "Sashimi Thon", 
    price: 15, 
    category: "Sashimi", 
    image: "/images/sashimi_thon.jpg",
    description: "Thon rouge premium, fondant et riche en saveurs"
  },
  { 
    id: 15, 
    name: "Sashimi Daurade", 
    price: 16, 
    category: "Sashimi", 
    image: "/images/sashimi_daurade.jpg",
    description: "Daurade royale, texture ferme et goût délicat"
  },

  /* ------- Yakitori ------- */
  { 
    id: 16, 
    name: "Yakitori Poulet", 
    price: 12, 
    category: "Yakitori", 
    image: "/images/yakitori_poulet.jpg",
    description: "Brochettes de poulet grillées sauce teriyaki, tendre et juteux"
  },
  { 
    id: 17, 
    name: "Yakitori Boeuf Fromage", 
    price: 13, 
    category: "Yakitori", 
    image: "/images/yakitori_boeuf_fromage.jpg",
    description: "Boeuf wagyu et fromage fondant, une combinaison divine"
  },
  { 
    id: 18, 
    name: "Yakitori Tsukune", 
    price: 12, 
    category: "Yakitori", 
    image: "/images/yakitori_tsukune.jpg",
    description: "Boulettes de poulet haché, texture unique et savoureuse"
  },

  /* ------- Ramen ------- */
  { 
    id: 19, 
    name: "Ramen Shoyu", 
    price: 14, 
    category: "Ramen", 
    image: "/images/ramen_shoyu.jpg",
    description: "Bouillon soja clair, nouilles al dente, porc confit et œuf parfait"
  },
  { 
    id: 20, 
    name: "Ramen Miso", 
    price: 15, 
    category: "Ramen", 
    image: "/images/ramen_miso.jpg",
    description: "Bouillon miso riche, maïs, beurre et garnitures généreuses"
  },
  { 
    id: 21, 
    name: "Ramen Épicé", 
    price: 15, 
    category: "Ramen", 
    image: "/images/ramen_epice.jpg",
    description: "Bouillon tonkotsu épicé, pour réchauffer vos papilles"
  },

  /* ------- Boissons ------- */
  { 
    id: 22, 
    name: "Thé Vert", 
    price: 3, 
    category: "Boissons", 
    image: "/images/the_vert.jpg",
    description: "Thé vert sencha du Japon, frais et désaltérant"
  },
  { 
    id: 23, 
    name: "Ramune", 
    price: 4, 
    category: "Boissons", 
    image: "/images/ramune.jpg",
    description: "Soda japonais iconique avec sa bille distinctive, saveur originale"
  },
  { 
    id: 24, 
    name: "Soda Japonais Yuzu", 
    price: 5, 
    category: "Boissons", 
    image: "/images/soda_yuzu.jpg",
    description: "Soda au yuzu, agrumes japonais rafraîchissants"
  },

  /* ------- Desserts ------- */
  { 
    id: 25, 
    name: "Mochi Matcha", 
    price: 6, 
    category: "Desserts", 
    image: "/images/mochi_matcha.jpg",
    description: "Pâte de riz gluant fourrée à la crème matcha, texture unique"
  },
  { 
    id: 26, 
    name: "Mochi Mangue", 
    price: 6, 
    category: "Desserts", 
    image: "/images/mochi_mangue.jpg",
    description: "Mochi frais à la mangue, douceur fruitée en bouche"
  },
  { 
    id: 27, 
    name: "Cheesecake Japonais", 
    price: 7, 
    category: "Desserts", 
    image: "/images/cheesecake_japonais.jpg",
    description: "Cheesecake cotonneux à la japonaise, léger et aérien"
  }
];