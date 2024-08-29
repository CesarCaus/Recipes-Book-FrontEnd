export const recipes = [
    {
      id: 1,
      title: 'Spaghetti Carbonara',
      image: '/assets/macarrao.svg',
      description: 'Um delicioso prato de massa com bacon, ovos e queijo.',
      ingredients: [
        '200g de Spaghetti',
        '150g de Bacon',
        '2 Ovos',
        '100g de Queijo Parmesão',
        'Pimenta do Reino a gosto'
      ],
      category: 'dinner',
      meal: 'dinner',
      prepTime: '20 minutos',
      servings: 4,
      instructions: 'Cozinhe 200g de spaghetti em água salgada até ficar al dente. Em uma frigideira, frite 150g de bacon até ficar crocante. Em uma tigela, misture 2 ovos com 100g de queijo parmesão ralado. Combine todos os ingredientes na frigideira, adicione o spaghetti escorrido e misture bem para incorporar os sabores. Tempere com pimenta do reino a gosto e sirva imediatamente.'
    },
    {
      id: 2,
      title: 'Salada Grega',
      image: '/assets/salada-grega.svg',
      description: 'Uma salada fresca com tomate, pepino, queijo feta e azeitonas.',
      ingredients: [
        '2 Tomates médios',
        '1 Pepino',
        '100g de Queijo Feta',
        '50g de Azeitonas',
        '2 colheres de sopa de Azeite de Oliva'
      ],
      category: 'lunch',
      meal: 'lunch',
      prepTime: '10 minutos',
      servings: 2,
      instructions: 'Corte 2 tomates médios e 1 pepino em cubos. Misture com 100g de queijo feta esfarelado e 50g de azeitonas. Regue com 2 colheres de sopa de azeite de oliva e mexa bem. Tempere a gosto com sal e pimenta, se desejar, e sirva imediatamente.'
    },
    {
      id: 3,
      title: 'Frango Teriyaki',
      image: '/assets/frango.svg',
      description: 'Frango grelhado com molho teriyaki, servido com arroz e legumes.',
      ingredients: [
        '500g de Frango',
        '100ml de Molho Teriyaki',
        '200g de Arroz',
        '200g de Brócolis',
        '2 Cenouras médias'
      ],
      category: 'dinner',
      meal: 'dinner',
      prepTime: '30 minutos',
      servings: 3,
      instructions: 'Marinar 500g de frango no molho teriyaki por pelo menos 15 minutos. Grelhe o frango até estar completamente cozido. Cozinhe 200g de arroz de acordo com as instruções da embalagem. Cozinhe 200g de brócolis e 2 cenouras médias em água salgada até ficarem macios. Sirva o frango grelhado com arroz e legumes.'
    },
    {
      id: 4,
      title: 'Bolo de Cenoura',
      image: '/assets/bolo-de-cenoura.svg',
      description: 'Bolo de cenoura fofo com cobertura de chocolate.',
      ingredients: [
        '3 Cenouras médias',
        '250g de Farinha de Trigo',
        '3 Ovos',
        '200g de Açúcar',
        '150g de Chocolate para cobertura'
      ],
      category: 'dessert',
      meal: 'coffebreak',
      prepTime: '50 minutos',
      servings: 8,
      instructions: 'Rale 3 cenouras médias e misture com 250g de farinha, 3 ovos e 200g de açúcar. Despeje a massa em uma forma untada e asse em forno pré-aquecido a 180°C por 40 minutos. Para a cobertura, derreta 150g de chocolate e despeje sobre o bolo ainda morno. Deixe esfriar antes de servir.'
    },
    {
      id: 5,
      title: 'Panquecas Americanas',
      image: '/assets/panqueca.svg',
      description: 'Panquecas fofas, perfeitas para o café da manhã.',
      ingredients: [
        '200g de Farinha de Trigo',
        '200ml de Leite',
        '2 Ovos',
        '50g de Açúcar',
        '10g de Fermento em Pó'
      ],
      category: 'breakfast',
      meal: 'coffebreak',
      prepTime: '20 minutos',
      servings: 4,
      instructions: 'Misture 200g de farinha com 50g de açúcar e 10g de fermento em pó. Adicione 200ml de leite e 2 ovos, mexendo até obter uma massa homogênea. Aqueça uma frigideira antiaderente e despeje a massa em pequenas porções. Cozinhe até formar bolhas na superfície, vire e cozinhe o outro lado até dourar. Sirva com mel, frutas ou o acompanhamento de sua preferência.'
    },
    {
      id: 6,
      title: 'Sanduíche Natural',
      image: '/assets/sanduice-natural.svg',
      description: 'Sanduíche leve e saudável com peito de peru e queijo cottage.',
      ingredients: [
        '2 Fatias de Pão Integral',
        '100g de Peito de Peru',
        '50g de Queijo Cottage',
        'Folhas de Alface a gosto',
        '2 Fatias de Tomate'
      ],
      category: 'salty',
      meal: 'snacks',
      prepTime: '5 minutos',
      servings: 1,
      instructions: 'Monte o sanduíche com 100g de peito de peru, 50g de queijo cottage, folhas de alface e 2 fatias de tomate no pão integral. Feche o sanduíche e sirva imediatamente.'
    },
    {
      id: 7,
      title: 'Empadinha de Frango',
      image: '/assets/empada.svg',
      description: 'Empadinha saborosa com recheio de frango desfiado e temperado.',
      ingredients: [
        '300g de Farinha de Trigo',
        '150g de Manteiga',
        '300g de Frango Desfiado',
        '100g de Milho',
        '100g de Requeijão'
      ],
      category: 'salty',
      meal: 'salgado',
      prepTime: '60 minutos',
      servings: 12,
      instructions: 'Prepare a massa misturando 300g de farinha com 150g de manteiga até formar uma massa homogênea. Recheie com 300g de frango desfiado misturado com 100g de milho e 100g de requeijão. Modele as empadinhas e asse em forno pré-aquecido a 180°C por aproximadamente 25 minutos, ou até ficarem douradas.'
    },
    {
      id: 8,
      title: 'Creme de Abóbora',
      image: '/assets/creme-de-abobora.svg',
      description: 'Sopa cremosa de abóbora com temperos especiais.',
      ingredients: [
        '500g de Abóbora',
        '1 Cebola',
        '2 Dentes de Alho',
        '500ml de Caldo de Legumes',
        '200ml de Creme de Leite'
      ],
      category: 'dinner',
      meal: 'dinner',
      prepTime: '40 minutos',
      servings: 4,
      instructions: 'Refogue 1 cebola picada e 2 dentes de alho em uma panela com um pouco de óleo até ficarem dourados. Adicione 500g de abóbora cortada em cubos e 500ml de caldo de legumes. Cozinhe até a abóbora ficar macia. Bata tudo no liquidificador até obter um creme homogêneo. Retorne à panela, adicione 200ml de creme de leite, ajuste o tempero e cozinhe por mais alguns minutos antes de servir.'
    },
    {
      id: 9,
      title: 'Brigadeiro',
      image: '/assets/brigadeiro.svg',
      description: 'Doce tradicional brasileiro feito com leite condensado e chocolate.',
      ingredients: [
        '1 lata de Leite Condensado',
        '50g de Chocolate em Pó',
        '30g de Manteiga',
        'Granulado para decorar'
      ],
      category: 'dessert',
      meal: 'coffebreak',
      prepTime: '15 minutos',
      servings: 20,
      instructions: 'Misture 1 lata de leite condensado, 50g de chocolate em pó e 30g de manteiga em uma panela. Cozinhe em fogo médio, mexendo sempre, até a mistura desgrudar do fundo da panela. Transfira para um prato untado e deixe esfriar. Depois de frio, faça bolinhas e passe no granulado.'
    },
    {
      id: 10,
      title: 'Tapioca Recheada',
      image: '/assets/tapioca.svg',
      description: 'Tapioca recheada com queijo e presunto.',
      ingredients: [
        '100g de Goma de Tapioca',
        '50g de Queijo Ralado',
        '50g de Presunto',
        '1 colher de sopa de Manteiga'
      ],
      category: 'breakfast',
      meal: 'coffebreak',
      prepTime: '10 minutos',
      servings: 1,
      instructions: 'Aqueça uma frigideira com 1 colher de sopa de manteiga. Espalhe 100g de goma de tapioca na frigideira e cozinhe por alguns minutos até começar a soltar do fundo. Adicione 50g de queijo ralado e 50g de presunto sobre metade da tapioca. Dobre a tapioca ao meio e cozinhe por mais alguns minutos até o queijo derreter. Sirva imediatamente.'
    },
    {
    id: 11,
    title: 'Macarronada',
    image: '/assets/macarronada.svg',
    description: 'Macarrão com molho rico e saboroso.',
    ingredients: [
      '250g de Macarrão',
      '500g de Molho de Tomate',
      '300g de Carne Moída',
      '1 Cebola',
      '2 Dentes de Alho'
    ],
    category: 'dinner',
    meal: 'dinner',
    prepTime: '30 minutos',
    servings: 4,
    instructions: 'Cozinhe 250g de macarrão conforme as instruções da embalagem. Enquanto isso, refogue 300g de carne moída com 1 cebola picada e 2 dentes de alho picados em uma panela com um pouco de óleo até que a carne esteja completamente cozida. Adicione 500g de molho de tomate e deixe ferver por cerca de 10 minutos. Misture o molho ao macarrão e sirva quente, acompanhado de queijo ralado, se desejar.'
  },
  {
    id: 12,
    title: 'Lula à Dorê',
    image: '/assets/lula.svg',
    description: 'Lulas empanadas e fritas até ficarem crocantes.',
    ingredients: [
      '500g de Lulas',
      '1 Xícara de Farinha de Trigo',
      '1 Ovo',
      '1 Xícara de Farinha de Rosca',
      'Óleo para Fritar'
    ],
    category: 'lunch',
    meal: 'lunch',
    prepTime: '25 minutos',
    servings: 3,
    instructions: 'Limpe 500g de lulas e corte em anéis. Passe-as em 1 xícara de farinha de trigo, depois em 1 ovo batido e, por fim, em 1 xícara de farinha de rosca. Aqueça o óleo em uma frigideira e frite os anéis de lula até ficarem dourados e crocantes. Retire e coloque sobre papel toalha para remover o excesso de óleo. Sirva quente, acompanhado de molho tártaro ou limão.'
  },
  {
    id: 13,
    title: 'Cappuccino',
    image: '/assets/cappuccino.svg',
    description: 'Café com espuma de leite e um toque de chocolate.',
    ingredients: [
      '200ml de Café',
      '200ml de Leite',
      '2 Colheres de Sopa de Chocolate em Pó',
      '1 Colher de Sopa de Açúcar'
    ],
    category: 'salty',
    meal: 'snacks',
    prepTime: '10 minutos',
    servings: 2,
    instructions: 'Prepare 200ml de café forte. Aqueça 200ml de leite e bata até formar uma espuma. Em uma xícara, adicione 2 colheres de sopa de chocolate em pó e 1 colher de sopa de açúcar. Despeje o café quente sobre a mistura e misture bem. Complete com a espuma de leite. Sirva imediatamente, polvilhado com um pouco mais de chocolate em pó, se desejar.'
  },
  {
    id: 14,
    title: 'Carreteiro',
    image: '/assets/carreteiro.svg',
    description: 'Arroz com carne seca e temperos.',
    ingredients: [
      '2 Xícaras de Arroz',
      '300g de Carne Seca',
      '1 Cebola',
      '2 Tomates',
      '1 Pimentão Verde'
    ],
    category: 'dinner',
    meal: 'dinner',
    prepTime: '40 minutos',
    servings: 4,
    instructions: 'Desfie 300g de carne seca já cozida. Em uma panela, refogue 1 cebola picada, 2 tomates picados e 1 pimentão verde picado em um pouco de óleo. Adicione a carne seca desfiada e refogue por alguns minutos. Acrescente 2 xícaras de arroz e misture bem. Adicione água suficiente para cobrir o arroz e cozinhe em fogo baixo até que o arroz esteja macio e a água tenha evaporado. Sirva quente, acompanhado de uma salada fresca, se desejar.'
  },
  {
    id: 15,
    title: 'Mousse de Maracujá',
    image: '/assets/maracuja.svg',
    description: 'Mousse refrescante com sabor de maracujá.',
    ingredients: [
      '1 Xícara de Polpa de Maracujá',
      '1 Lata de Leite Condensado',
      '1 Lata de Creme de Leite',
      '1 Pacote de Gelatina Incolor'
    ],
    category: 'dessert',
    meal: 'coffebreak',
    prepTime: '20 minutos',
    servings: 6,
    instructions: 'Hidrate 1 pacote de gelatina incolor conforme as instruções da embalagem. Em uma tigela, misture 1 xícara de polpa de maracujá, 1 lata de leite condensado e 1 lata de creme de leite até obter uma mistura homogênea. Adicione a gelatina hidratada e misture bem. Despeje a mistura em taças individuais ou em uma travessa e leve à geladeira por pelo menos 4 horas ou até que a mousse esteja firme. Sirva gelada.'
  },
  {
    id: 16,
    title: 'Sonho',
    image: '/assets/sonho.svg',
    description: 'Delicioso bolinho frito recheado com doce de leite.',
    ingredients: [
      '500g de Farinha de Trigo',
      '250ml de Leite',
      '100g de Açúcar',
      '10g de Fermento Biológico',
      '200g de Doce de Leite'
    ],
    category: 'dessert',
    meal: 'coffebreak',
    prepTime: '60 minutos',
    servings: 12,
    instructions: 'Em uma tigela grande, misture 500g de farinha de trigo, 100g de açúcar e 10g de fermento biológico. Adicione 250ml de leite morno e misture até formar uma massa homogênea. Sove a massa por alguns minutos e deixe crescer em um lugar quente até dobrar de volume. Modele bolinhos e frite-os em óleo quente até dourarem. Recheie cada bolinho com 200g de doce de leite e sirva quente.'
  },
  {
    id: 17,
    title: 'Nhoque',
    image: '/assets/inhoque.svg',
    description: 'Bolinho de batata macio, ideal com molho.',
    ingredients: [
      '500g de Batata',
      '200g de Farinha de Trigo',
      '1 Ovo',
      'Sal a gosto',
      '50g de Manteiga'
    ],
    category: 'pasta',
    meal: 'dinner',
    prepTime: '40 minutos',
    servings: 4,
    instructions: 'Cozinhe 500g de batatas até ficarem macias e amasse-as bem. Misture com 200g de farinha de trigo, 1 ovo e sal a gosto até obter uma massa lisa. Modele os nhoques e cozinhe em água salgada até subirem à superfície. Retire com uma escumadeira e misture com 50g de manteiga derretida. Sirva com o molho de sua preferência, como molho de tomate ou molho branco.'
  },
  {
    id: 18,
    title: 'Sushi',
    image: '/assets/sushi.svg',
    description: 'Rolinhos de arroz com peixe e vegetais.',
    ingredients: [
      '2 Xícaras de Arroz para Sushi',
      '10 Folhas de Alga Nori',
      '200g de Peixe (como salmão ou atum)',
      '1 Pepino',
      '1 Abacate',
      '2 Colheres de Sopa de Vinagre de Arroz'
    ],
    category: 'japanese',
    meal: 'dinner',
    prepTime: '60 minutos',
    servings: 4,
    instructions: 'Lave 2 xícaras de arroz para sushi até a água sair limpa e cozinhe conforme as instruções da embalagem. Tempere o arroz com 2 colheres de sopa de vinagre de arroz. Corte 200g de peixe, 1 pepino e 1 abacate em tiras. Coloque uma folha de alga nori sobre uma esteira de sushi, espalhe uma camada fina de arroz sobre a alga e adicione o peixe e os vegetais no centro. Enrole firmemente com a ajuda da esteira e corte em pedaços. Sirva com molho de soja e wasabi.'
  },
  {
    id: 19,
    title: 'Bife de Contra-filé',
    image: '/assets/bife.svg',
    description: 'Bife de contra-filé grelhado com temperos.',
    ingredients: [
      '2 Bifes de Contra-filé (250g cada)',
      'Sal a gosto',
      'Pimenta-do-Reino a gosto',
      '2 Dentes de Alho',
      '2 Colheres de Sopa de Azeite'
    ],
    category: 'meat',
    meal: 'dinner',
    prepTime: '20 minutos',
    servings: 2,
    instructions: 'Tempere 2 bifes de contra-filé com sal e pimenta-do-reino a gosto. Aqueça 2 colheres de sopa de azeite em uma frigideira e adicione 2 dentes de alho picados. Coloque os bifes na frigideira e grelhe por 4-5 minutos de cada lado ou até o ponto desejado. Retire da frigideira e deixe descansar por alguns minutos antes de servir. Sirva com acompanhamentos de sua escolha, como batatas assadas ou legumes grelhados.'
  }
  ];

  export default recipes;