const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  try {
    const mousesCategory = await prisma.category.create({
      data: {
        name: 'Mouses',
        slug: 'mouses',
        imageUrl: 'https://fsw-store.s3.sa-east-1.amazonaws.com/mouses.png',
      },
    })

    const mouses = [
      {
        name: 'Logitech MX Master 3s',
        slug: 'logitech-mx-master-3s',
        description:
          'Conheça o MX Master 3S – um mouse icônico remasterizado. Sinta cada momento do seu fluxo de trabalho com ainda mais precisão, tato e desempenho, graças aos cliques silenciosos e um sensor de 8000 DPI sobre vidro.',
        imageUrls: [
          'https://fsw-store.s3.sa-east-1.amazonaws.com/01_mx-master-3s.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/02_mx-master-3s.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/03_mx-master-3s.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/04_mx-master-3s.png',
        ],
        basePrice: 650,
        categoryId: mousesCategory.id,
        discountPercent: 10, // 10% discount
      },
      {
        name: 'Logitech Pro X Superlight',
        slug: 'logitech-pro-x-superlight',
        description:
          'Remova todos os obstáculos para vencer com nosso mouse PRO mais leve e rápido de todos os tempos. A nova arma perfeita para os melhores profissionais do mundo, que pesa menos de 63 gramas e proporciona deslizamento quase sem nenhum atrito. O PRO X SUPERLIGHT dá prosseguimento à nossa filosofia de design com ZERØ OPOSIÇÃO — nosso compromisso de remover todos os obstáculos para criar a conexão mais real possível entre o jogador e o jogo.',
        imageUrls: [
          'https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-superlight.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-superlight.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-superlight.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-superlight.png',
        ],
        basePrice: 750,
        categoryId: mousesCategory.id,
        discountPercent: 5, // 5% discount
      },
      {
        name: 'Logitech G305 Lightspeed',
        slug: 'logitech-g305-lightspeed',
        description:
          'O G305 é um mouse para jogos sem fio com tecnologia LIGHTSPEED projetado para um desempenho genuíno com as mais recentes inovações tecnológicas, a um preço acessível. Agora, em uma variedade de cores intensas.',
        imageUrls: [
          'https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-lightspeed.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-lightspeed.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-lightspeed.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-lightspeed.png',
        ],
        basePrice: 300,
        categoryId: mousesCategory.id,
        discountPercent: 15, // 15% discount
      },
      {
        name: 'Hyperx Pulsefire Dart',
        slug: 'hyperx-pulsefire-dart',
        description:
          'HyperX Pulsefire Dart™ é um mouse sem fio de nível de jogos com uma conexão confiável 2,4GHz RF que o fará se perguntar por que esperou tanto para cortar o fio. Um adaptador sem fio está incluído para ampliar o alcance para configurações em PCs. Tem certificado Qi para carregamento sem fio1 e pode funcionar até 50 horas2 com uma única carga.',
        imageUrls: [
          'https://fsw-store.s3.sa-east-1.amazonaws.com/01_hyperx-dart.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/02_hyperx-dart.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/03_hyperx-dart.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/04_hyperx-dart.png',
        ],
        basePrice: 600,
        categoryId: mousesCategory.id,
        discountPercent: 10, // 10% discount
      },
      {
        name: 'Razer Deathadder V2 Pro',
        slug: 'razer-deathadder-v2-pro',
        description:
          'Com mais de 10 milhões de Razer DeathAdders vendidos, o mouse para jogos mais celebrado e premiado do mundo ganhou sua popularidade através de seu design ergonômico excepcional. Perfeitamente adequado para uma aderência na palma da mão, também funciona bem com estilos de garra e ponta dos dedos. O Razer DeathAdder V2 continua este legado, mantendo sua forma exclusiva enquanto perde mais peso para um manuseio mais rápido e melhorar o seu jogo. ',
        imageUrls: [
          'https://fsw-store.s3.sa-east-1.amazonaws.com/01_razer-deathadder.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/02_razer-deathadder.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/03_razer-deathadder.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/04_razer-deathadder.png',
        ],
        basePrice: 350,
        categoryId: mousesCategory.id,
        discountPercent: 0,
      },
    ]

    await prisma.product.createMany({
      data: mouses,
    })

    const keyboardsCategory = await prisma.category.create({
      data: {
        name: 'Teclados',
        slug: 'keyboards',
        imageUrl: 'https://fsw-store.s3.sa-east-1.amazonaws.com/keyboards.png',
      },
    })

    const keyboards = [
      {
        name: 'Logitech MX Keys Mini',
        slug: 'logitech-mx-keys-mini',
        description:
          'Conheça o MX Keys Mini, um teclado minimalista feito para criadores. O mesmo MX de alto desempenho projetado para digitação confortável, rápida e fluida, com iluminação inteligente e teclas programáveis em um formato que economiza espaço. O formato minimalista do MX Keys Mini alinha seus ombros e resulta em uma melhor postura e ergonomia.',
        imageUrls: [
          'https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-mx-keys-mini.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-mx-keys-mini.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-mx-keys-mini.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-mx-keys-mini.png',
        ],
        basePrice: 650,
        categoryId: keyboardsCategory.id,
        discountPercent: 10, // 10% discount
      },
      {
        name: 'Logitech MX Keys S',
        slug: 'logitech-mx-keys-s',
        description:
          'Experimente um novo nível de estado de fluxo com o MX Keys S - Um teclado de alto desempenho, projetado para digitação confortável, rápida e fluida, com iluminação inteligente e teclas programáveis.',
        imageUrls: [
          'https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-mx-keys-s.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-mx-keys-s.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-mx-keys-s.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-mx-keys-s.png',
        ],
        basePrice: 750,
        categoryId: keyboardsCategory.id,
        discountPercent: 10, // 10% discount
      },
      {
        name: 'Logitech Pop Keys',
        slug: 'logitech-pop-keys',
        description:
          'Deixe a personalidade estourar na sua mesa e além com POP Keys. Junto com um mouse POP correspondente, deixe seu verdadeiro eu brilhar com uma estética de mesa impressionante e teclas de emoji personalizáveis e divertidas.',
        imageUrls: [
          'https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-pop-keys.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-pop-keys.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-pop-keys.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-pop-keys.png',
        ],
        basePrice: 440,
        categoryId: keyboardsCategory.id,
        discountPercent: 5, // 10% discount
      },
      {
        name: 'Logitech MX Mechanical',
        slug: 'logitech-mx-mechanical',
        description:
          'Sinta cada momento do seu processo criativo ou cada linha de código com o MX Mechanical irresistivelmente tátil. Apresenta teclas mecânicas de baixo perfil em 3 tipos de switches para feedback satisfatório a cada toque de tecla, iluminação inteligente e Easy-Switch - permitindo que você conecte até 3 dispositivos. ',
        imageUrls: [
          'https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-mx-mechanical.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-mx-mechanical.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-mx-mechanical.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-mx-mechanical.png',
        ],
        basePrice: 700,
        categoryId: keyboardsCategory.id,
        discountPercent: 15, // 10% discount
      },
      {
        name: 'Epomaker TH80',
        slug: 'epomaker-th80',
        description:
          'Com modularidade integrada para tudo, desde conectividade até switches, o TH80 da EPOMAKER é um teclado para quem gosta de mudar as coisas. O layout de 75% oferece conforto de digitação e consciência de espaço, bem como o botão giratório de metal programável que permite controle extra de sua configuração. Existem três formas de conectividade: Bluetooth 5.0, 2,4 GHz e uma saída com fio USB-C. Graças aos soquetes hot-swap, ele pode acomodar uma variedade de interruptores voltados para o sul, de 3 e 5 pinos.',
        imageUrls: [
          'https://fsw-store.s3.sa-east-1.amazonaws.com/01_epomaker-th80.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/02_epomaker-th80.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/03_epomaker-th80.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/04_epomaker-th80.png',
        ],
        basePrice: 500,
        categoryId: keyboardsCategory.id,
        discountPercent: 5, // 10% discount
      },
      {
        name: 'Redragon Gamer Ashe',
        slug: 'redragon-gamer-ashe',
        description:
          'O Redragon Ashe chama muita atenção com seu design, sendo uma opção de teclado mecânico com teclas de perfil baixo, visual limpo e conforto aprimorado.',
        imageUrls: [
          'https://fsw-store.s3.sa-east-1.amazonaws.com/01_redragon-gamer-ashe.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/02_redragon-gamer-ashe.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/03_redragon-gamer-ashe.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/04_redragon-gamer-ashe.png',
        ],
        basePrice: 400,
        categoryId: keyboardsCategory.id,
        discountPercent: 25, // 10% discount
      },
    ]

    await prisma.product.createMany({
      data: keyboards,
    })

    const headphonesCategory = await prisma.category.create({
      data: {
        name: 'Fones',
        slug: 'headphones',
        imageUrl: 'https://fsw-store.s3.sa-east-1.amazonaws.com/headphones.png',
      },
    })

    const headphones = [
      {
        name: 'Logitech Zone Vibe 100',
        slug: 'logitech-zone-vibe-100',
        description:
          'Experimente áudio imersivo com os fones de ouvido sem fio Zone Vibe 100. Perfeito para o escritório. Ideal para casa. Projetado para o trabalho ou diversão.',
        imageUrls: [
          'https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-vibe.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-vibe.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-vibe.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-vibe.png',
        ],
        basePrice: 750,
        categoryId: headphonesCategory.id,
        discountPercent: 10, // 10% discount
      },
      {
        name: 'Logitech Pro X 2 Lightspeed',
        slug: 'logitech-pro-x-2-lightspeed',
        description:
          'Desenvolvido por profissionais. PROJETADO PARA A VITÓRIA. O headset PRO X 2 LIGHTSPEED apresenta som pro-grade, LIGHTSPEED sem fio, além de enorme conforto para os níveis mais altos de competição. Ouça cada passo, ação e movimento com a paisagem sonora imersiva oferecida pelos drivers de grafeno.',
        imageUrls: [
          'https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-lightspeed-phone.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-lightspeed-phone.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-lightspeed-phone.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-lightspeed-phone.png',
        ],
        basePrice: 1200,
        categoryId: headphonesCategory.id,
        discountPercent: 5, // 10% discount
      },
      {
        name: 'Logitech Astro A30',
        slug: 'logitech-astro-a30',
        description:
          'O A30 Wireless combina o máximo de flexibilidade, mobilidade, estilo e conforto em um headset para jogos LIGHTSPEED e Bluetooth que pode ser reproduzido em qualquer plataforma.',
        imageUrls: [
          'https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-astro-a30.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-astro-a30.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-astro-a30.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-astro-a30.png',
        ],
        basePrice: 1500,
        categoryId: headphonesCategory.id,
        discountPercent: 15, // 10% discount
      },
      {
        name: 'Logitech Zone Wired Earbuds',
        slug: 'logitech-zone-wired-earbuds',
        description:
          'Ofereça sua melhor imagem e um som excelente nas videochamadas com os Zone Wired Earbuds. Os avançados microfones com redução de ruídos localizados no fone esquerdo capturam claramente cada palavra. O som in-ear oferece qualidade profissional.',
        imageUrls: [
          'https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-earbuds.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-earbuds.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-earbuds.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-earbuds.png',
        ],
        basePrice: 550,
        categoryId: headphonesCategory.id,
        discountPercent: 5, // 10% discount
      },
      {
        name: 'Hyperx Cloud Stinger 2',
        slug: 'hyperx-cloud-stinger-2',
        description:
          'Com um novo design e 2 anos de DTS Headphone:X Spatial Audio, o Cloud Stinger 2 mantém os fundamentos do Cloud Stinger e os refina. Ainda pesando menos de 300g, o Cloud Stinger 2 é leve, mas também tem um grande impacto de áudio. Obtenha uma ampla resposta de frequência para que você não perca pistas de áudio importantes.que denunciem seus oponentes.',
        imageUrls: [
          'https://fsw-store.s3.sa-east-1.amazonaws.com/01_hyperx-stinger.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/02_hyperx-stinger.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/03_hyperx-stinger.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/04_hyperx-stinger.png',
        ],
        basePrice: 250,
        categoryId: headphonesCategory.id,
        discountPercent: 0, // 10% discount
      },
      {
        name: 'Razer Kraken X',
        slug: 'razer-kraken-x',
        description:
          'E se dissermos que você pode ter uma imersão completa nos jogos sem sentir que está usando um headset? Conheça o Razer Kraken X. Ultraleve com apenas 250 g e ultraimersivo com som surround 7.1, sente-se e aproveite por horas e horas–jogar por longos períodos nunca foi tão confortável.',
        imageUrls: [
          'https://fsw-store.s3.sa-east-1.amazonaws.com/01_razer-kraken.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/02_razer-kraken.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/03_razer-kraken.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/04_razer-kraken.png',
        ],
        basePrice: 200,
        categoryId: headphonesCategory.id,
        discountPercent: 0, // 10% discount
      },
    ]

    await prisma.product.createMany({
      data: headphones,
    })

    const mousepadsCategory = await prisma.category.create({
      data: {
        name: 'Mousepads',
        slug: 'mousepads',
        imageUrl: 'https://fsw-store.s3.sa-east-1.amazonaws.com/mousepads.png',
      },
    })

    const mousepads = [
      {
        name: 'Logitech Powerplay',
        slug: 'logitech-powerplay',
        description:
          'Carregue continuamente seus mouses de jogo Logitech G compatíveis: G703, G903, G502 LIGHTSPEED, G502 X LIGHTSPEED, G502 X PLUS, PRO Wireless, PRO X Superlight e muito mais. POWERPLAY é uma solução completa com LIGHTSPEED sem fio integrado de nível profissional.',
        imageUrls: [
          'https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-powerplay.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-powerplay.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-powerplay.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-powerplay.png',
        ],
        basePrice: 950,
        categoryId: mousepadsCategory.id,
        discountPercent: 10, // 10% discount
      },
      {
        name: 'Logitech Desk Mat',
        slug: 'logitech-desk-mat',
        description:
          'Conheça o acessório que leva seu espaço de trabalho para o próximo nível, complementando perfeitamente suas ferramentas Logitech. Consiga a cor que você deseja, o conforto que você precisa e a proteção de mesa que você espera.',
        imageUrls: [
          'https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-desk-mat.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-desk-mat.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-desk-mat.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-desk-mat.png',
        ],
        basePrice: 150,
        categoryId: mousepadsCategory.id,
        discountPercent: 0, // 10% discount
      },
      {
        name: 'Logitech G740',
        slug: 'logitech-g740',
        description:
          'O mouse pad de 5 mm otimizado para sensores de jogos Logitech G - e todos os movimentos rápidos de jogos de baixo DPI.',
        imageUrls: [
          'https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-g740.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-g740.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-g740.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-g740.png',
        ],
        basePrice: 200,
        categoryId: mousepadsCategory.id,
        discountPercent: 5, // 10% discount
      },
      {
        name: 'Logitech Mousepad Studio Series',
        slug: 'logitech-mousepad-studio-series',
        description:
          'Conheça o macio, suave e antideslizante mouse pad que leva seu espaço de trabalho a novas alturas. Feito de materiais de alta qualidade, o mouse Pad da Logitech lhe dá o deslize e o conforto que você precisa para seu mouse Logitech favorito.',
        imageUrls: [
          'https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-studio-series.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-studio-series.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-studio-series.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-studio-series.png',
        ],
        basePrice: 250,
        categoryId: mousepadsCategory.id,
        discountPercent: 15, // 10% discount
      },
      {
        name: 'Force One Skyhawk Dark',
        slug: 'force-one-skyhawk-dark',
        description:
          'O equipamento definitivo para unir seu arsenal. O mousepad force one skyhawk conta com uma superfície gigante e profissional em tecido mesh fibertek de alta qualidade para movimentos rápidos, longos e precisos, proporcionando maior durabilidade, conforto e espaço para suas batalhas.',
        imageUrls: [
          'https://fsw-store.s3.sa-east-1.amazonaws.com/01_force-dark.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/02_force-dark.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/03_force-dark.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/04_force-dark.png',
        ],
        basePrice: 300,
        categoryId: mousepadsCategory.id,
        discountPercent: 10, // 10% discount
      },
      {
        name: 'Force One Skyhawk Snow',
        slug: 'force-one-skyhawk-snow',
        description:
          'O mousepad Force One Skyhawk conta com uma superfície gigante e profissional em tecido Mesh Fibertek de alta qualidade para movimentos rápidos, longos e precisos, proporcionando maior durabilidade, conforto e espaço para suas batalhas. Já a base antideslizante garante o apoio que você precisa para fazer suas jogadas com a segurança de um jogador profissional.',
        imageUrls: [
          'https://fsw-store.s3.sa-east-1.amazonaws.com/01_force-snow.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/02_force-snow.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/03_force-snow.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/04_force-snow.png',
        ],
        basePrice: 300,
        categoryId: mousepadsCategory.id,
        discountPercent: 5, // 10% discount
      },
    ]

    await prisma.product.createMany({
      data: mousepads,
    })

    const monitorsCategory = await prisma.category.create({
      data: {
        name: 'Monitores',
        slug: 'monitors',
        imageUrl: 'https://fsw-store.s3.sa-east-1.amazonaws.com/monitors.png',
      },
    })

    const monitors = [
      {
        name: 'Dell S2421HN',
        slug: 'dell-s2421hn',
        description:
          'Monitor de 23,8" com design elegante que cabe facilmente em qualquer espaço e está pronto para o seu estilo de vida diário.',
        imageUrls: [
          'https://fsw-store.s3.sa-east-1.amazonaws.com/01_dell-S2421HN.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/02_dell-S2421HN.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/03_dell-S2421HN.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/04_dell-S2421HN.png',
        ],
        basePrice: 1500,
        categoryId: monitorsCategory.id,
        discountPercent: 15, // 10% discount
      },
      {
        name: 'Dell P2422H',
        slug: 'dell-p2422h',
        description:
          'Produza por mais tempo, independentemente do local de trabalho. Reduza a luz azul prejudicial usando este elegante monitor FHD de 23,8" com tecnologia ComfortView Plus.',
        imageUrls: [
          'https://fsw-store.s3.sa-east-1.amazonaws.com/01_dell-P2422H.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/02_dell-P2422H.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/03_dell-P2422H.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/04_dell-P2422H.png',
        ],
        basePrice: 2000,
        categoryId: monitorsCategory.id,
        discountPercent: 5, // 10% discount
      },
      {
        name: 'Dell P2723QE',
        slug: 'dell-p2723qe',
        description:
          'Experimente a produtividade pura e simples em um monitor 4K de 27" com ampla conectividade e ComfortView Plus.',
        imageUrls: [
          'https://fsw-store.s3.sa-east-1.amazonaws.com/01_dell-P2723QE.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/02_dell-P2723QE.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/03_dell-P2723QE.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/04_dell-P2723QE.png',
        ],
        basePrice: 2500,
        categoryId: monitorsCategory.id,
        discountPercent: 0, // 10% discount
      },
      {
        name: 'Dell S3422DWG',
        slug: 'dell-s3422dwg',
        description:
          'Monitor curvo WQHD de 34” com VESA DisplayHDR 400 e taxa de atualização de 144 Hz que proporciona uma experiência gamer realmente imersiva.',
        imageUrls: [
          'https://fsw-store.s3.sa-east-1.amazonaws.com/01_dell-S3422DWG.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/02_dell-S3422DWG.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/03_dell-S3422DWG.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/04_dell-S3422DWG.png',
        ],
        basePrice: 3200,
        categoryId: monitorsCategory.id,
        discountPercent: 0, // 10% discount
      },
      {
        name: 'Dell S3222DGM',
        slug: 'dell-s3222dgm',
        description:
          'Monitor curvo QHD de 31,5" com tempo de resposta de 1 ms (MPRT)/2 ms (cinza a cinza), taxa de atualização de 165 Hz e cores 99% sRGB para oferecer imagens nítidas aos games e tornar a jogabilidade imersiva.',
        imageUrls: [
          'https://fsw-store.s3.sa-east-1.amazonaws.com/01_dell-S3222DGM.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/02_dell-S3222DGM.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/03_dell-S3222DGM.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/04_dell-S3222DGM.png',
        ],
        basePrice: 3500,
        categoryId: monitorsCategory.id,
        discountPercent: 0, // 10% discount
      },
      {
        name: 'Dell AW2524HF',
        slug: 'dell-aw2524hf',
        description:
          'Experimente incrível nitidez de movimento e capacidade de resposta com o monitor IPS de 24,5", taxa de atualização de 500 Hz e AMD FreeSync™ Premium.',
        imageUrls: [
          'https://fsw-store.s3.sa-east-1.amazonaws.com/01_dell-AW2524HF.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/02_dell-AW2524HF.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/03_dell-AW2524HF.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/04_dell-AW2524HF.png',
        ],
        basePrice: 4200,
        categoryId: monitorsCategory.id,
        discountPercent: 10, // 10% discount
      },
    ]

    await prisma.product.createMany({
      data: monitors,
    })

    const speakersCategory = await prisma.category.create({
      data: {
        name: 'Speakers',
        slug: 'speakers',
        imageUrl: 'https://fsw-store.s3.sa-east-1.amazonaws.com/speakers.png',
      },
    })

    const speakers = [
      {
        name: 'Logitech Surround Sound Z607',
        slug: 'logitech-surround-sound-z607',
        description:
          'Com 160 watts de potência de pico, este sistema de caixas de som 5.1 em áudio de alta qualidade que envolve todo o espaço soando incrível. Desfrute do verdadeiro som surround de qualquer fonte - sua TV, telefone, computador, 2console de jogos deve estar conectado à TV via RCA e muito mais. Você pode até ouvir áudio de cartões SD, pen drives ou rádio FM. O driver de subwoofer de 133,35 mm emite graves que você pode sentir, enquanto os cabos traseiros extralongos e o controle remoto, incluídos, facilitam a configuração e o uso.',
        imageUrls: [
          'https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-surround-z607.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-surround-z607.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-surround-z607.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-surround-z607.png',
        ],
        basePrice: 1200,
        categoryId: speakersCategory.id,
        discountPercent: 5, // 10% discount
      },
      {
        name: 'Logitech Dock',
        slug: 'logitech-dock',
        description:
          'O trabalho remoto não deveria ser um fardo. O Logi Dock é uma dock station USB-C all-in-one que simplifica a configuração do escritório em casa, reduz a desordem da área de trabalho e ajuda os funcionários remotos a se sentirem mais produtivos. Certificado para as principais plataformas de videoconferência e fácil de configurar, o Logi Dock conecta tudo em uma única unidade arrumada que dispensa a necessidade de periféricos extras e elimina um emaranhado de cabos e fios.',
        imageUrls: [
          'https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-dock.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-dock.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-dock.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-dock.png',
        ],
        basePrice: 4500,
        categoryId: speakersCategory.id,
        discountPercent: 15, // 10% discount
      },
      {
        name: 'Sony SA-Z9R Speakers',
        slug: 'sony-sa-z9r-speakers',
        description:
          'Complete o seu sistema surround HT-Z9F com este alto-falante traseiro Sony. Coloque-o em um suporte ou prateleira ou monte-o na parede para um desempenho discreto e conecte-o a outros componentes sem fio para manter cabos desagradáveis ​​fora do seu espaço. O amplificador S-Master deste alto-falante traseiro da Sony produz 50 W para um áudio traseiro potente.',
        imageUrls: [
          'https://fsw-store.s3.sa-east-1.amazonaws.com/01_sony-SA-Z9R.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/02_sony-SA-Z9R.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/03_sony-SA-Z9R.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/04_sony-SA-Z9R.png',
        ],
        basePrice: 4000,
        categoryId: speakersCategory.id,
        discountPercent: 10, // 10% discount
      },
      {
        name: 'Sony XB43 Extra Bass',
        slug: 'sony-xb43-extra-bass',
        description:
          'A coluna sem fios SRS-XB43 combina graves profundos com vozes nítidas para proporcionar um som de festival. Além disso, é resistente e fácil de utilizar, pelo que todos podem simplesmente desfrutar da festa.',
        imageUrls: [
          'https://fsw-store.s3.sa-east-1.amazonaws.com/01_sony-extra-bass.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/02_sony-extra-bass.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/03_sony-extra-bass.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/04_sony-extra-bass.png',
        ],
        basePrice: 3200,
        categoryId: speakersCategory.id,
        discountPercent: 0, // 10% discount
      },
      {
        name: 'Sony XB23 Extra Bass',
        slug: 'sony-xb23-extra-bass',
        description:
          'Compacta, leve e fácil de transportar, seja para onde for, a SRS-XB23 tem de ser o primeiro item na mala.',
        imageUrls: [
          'https://fsw-store.s3.sa-east-1.amazonaws.com/01_sony-XB23.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/02_sony-XB23.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/03_sony-XB23.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/04_sony-XB23.png',
        ],
        basePrice: 3500,
        categoryId: speakersCategory.id,
        discountPercent: 0, // 10% discount
      },
      {
        name: 'Sony HT-S200F Soundbar',
        slug: 'sony-ht-s200f-soundbar',
        description:
          'Dê aos seus programas e filmes favoritos o som que eles merecem com uma barra de som 2.1 canais e subwoofer incorporado. Esta solução de economia de espaço é projetada para combinar com a decoração da sua casa e coloca você no meio da ação com a frente S-Force Pro. HDMI ARC2 e tecnologia Bluetooth 1 garantem uma conexão perfeita com a sua TV sem todos os fios. NFC: Não; Terminais de saída de entrada: HDMI (ARC), entrada de áudio óptico, USB tipo A. Material do revestimento: Metal',
        imageUrls: [
          'https://fsw-store.s3.sa-east-1.amazonaws.com/01_sony-S200F.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/02_sony-S200F.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/03_sony-S200F.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/04_sony-S200F.png',
        ],
        basePrice: 2500,
        categoryId: speakersCategory.id,
        discountPercent: 0, // 10% discount
      },
    ]

    await prisma.product.createMany({
      data: speakers,
    })

    console.log('Seed completed successfully')
  } catch (error) {
    console.error('Error seeding database:', error)
  } finally {
    await prisma.$disconnect()
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
