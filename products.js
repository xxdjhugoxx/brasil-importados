// Brasil Importados — Product Catalog

const products = [
    // Electronics
    {
        id: 1,
        name: "Sony WH-1000XM5",
        category: "electronics",
        price: 1899,
        originalPrice: 2299,
        image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=600&q=80",
        description: "Fone de ouvido premium com cancelamento de ruído líder da classe. Bateria de 30h, drivers de 30mm e conectividade Bluetooth 5.2.",
        badge: "Mais Vendido",
        rating: 4.9,
        reviews: 847
    },
    {
        id: 2,
        name: "Apple AirPods Pro 2ª Geração",
        category: "electronics",
        price: 1299,
        originalPrice: 1499,
        image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=600&q=80",
        description: "Áudio espacial com rastreamento dinámico de cabeça. Cancelamento de ruído ativo. Resistência IPX4. Case com recarga MagSafe.",
        badge: "",
        rating: 4.8,
        reviews: 1203
    },
    {
        id: 3,
        name: "Samsung Galaxy Watch 6",
        category: "electronics",
        price: 1799,
        originalPrice: 2199,
        image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=600&q=80",
        description: "Smartwatch com tela AMOLED de 1.5 Polegada. Monitor cardíaco, SpO2, sono e estresse. GPS integrado. Bateria de 40h.",
        badge: "Novo",
        rating: 4.7,
        reviews: 432
    },
    // Beauty
    {
        id: 4,
        name: "Dyson Airwrap Complete Long",
        category: "beauty",
        price: 2499,
        originalPrice: 2999,
        image: "https://images.unsplash.com/photo-1522338140262-f46f5913618a?w=600&q=80",
        description: "Modelador de cachos Airwrap com múltiplos pentes. Tecnologia Air Multiplier. 5 acessórios inclusos. Presentear: estojo de couro.",
        badge: "Ed. Limitada",
        rating: 4.9,
        reviews: 621
    },
    {
        id: 5,
        name: "Kit Skincare The Ordinary",
        category: "beauty",
        price: 349,
        originalPrice: 449,
        image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&q=80",
        description: "Kit com 7 produtos essenciais: Niacinamide, Hyaluronic Acid, Salicylic Acid, Matrixyl, Alpha Lipoic Acid, Natural Moisturizing Factors e Granactive Retinoid.",
        badge: "",
        rating: 4.6,
        reviews: 1582
    },
    {
        id: 6,
        name: "Chanel Coco Mademoiselle 50ml",
        category: "beauty",
        price: 699,
        originalPrice: 850,
        image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&q=80",
        description: "Perfume Chanel Coco Mademoiselle Eau de Parfum. Notas de rosa, patchouli e vanilla. Concentração intensa para durar o dia todo.",
        badge: "Original",
        rating: 4.9,
        reviews: 2341
    },
    // Fashion
    {
        id: 7,
        name: "Relógio Casual Premium",
        category: "fashion",
        price: 459,
        originalPrice: 599,
        image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&q=80",
        description: "Relógio de couro legítimo com movimento quartz. Resistência à água 5ATM. Estojo premium incluso. Design minimalista.",
        badge: "",
        rating: 4.5,
        reviews: 892
    },
    {
        id: 8,
        name: "Ray-Ban Aviator Classic",
        category: "fashion",
        price: 599,
        originalPrice: 750,
        image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&q=80",
        description: "Óculos de sol Aviator com lentes polarizadas G-15. Armação de metal dourado. Proteção UVA/UVB 100%. Estojo e pano premium.",
        badge: "Clássico",
        rating: 4.8,
        reviews: 3102
    },
    {
        id: 9,
        name: "Mochila Herschel Classic",
        category: "fashion",
        price: 329,
        originalPrice: 399,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80",
        description: "Mochila Herschel Little America de 25L. Compartimento para notebook 15'. Bolso interno com zíper. Alças acolchoadas.",
        badge: "",
        rating: 4.7,
        reviews: 1876
    },
    // Home
    {
        id: 10,
        name: "Purificador de Ar Xiaomi 4 Pro",
        category: "home",
        price: 899,
        originalPrice: 1099,
        image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80",
        description: "Filtra partículas de até 0.3μm. Cobertura de 48m². Display OLED. Controle via app Mi Home. Filtro HEPA H13 substituível.",
        badge: "",
        rating: 4.6,
        reviews: 743
    },
    {
        id: 11,
        name: "Nespresso Vertuo Pop + Aeroccino",
        category: "home",
        price: 799,
        originalPrice: 999,
        image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=600&q=80",
        description: "Máquina Vertuo Pop com 4 tamanhos de café. Inclui Aeroccino3 para cappuccino e latte. 30+ blends disponíveis. Bluetooth.",
        badge: "Promoção",
        rating: 4.7,
        reviews: 564
    },
    {
        id: 12,
        name: "Tira de LED Inteligente 5m",
        category: "home",
        price: 189,
        originalPrice: 249,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
        description: "LED Strip 5 metros com 16 milhões de cores. Controle WiFi via app. Compatível Alexa e Google Assistant. Auto-adesivo 3M.",
        badge: "",
        rating: 4.4,
        reviews: 2103
    }
];

const categories = [
    { id: "all", label: "Todos" },
    { id: "electronics", label: "Eletrônicos" },
    { id: "beauty", label: "Beleza" },
    { id: "fashion", label: "Moda" },
    { id: "home", label: "Casa" }
];

// Upcoming live sales
const liveSales = [
    {
        id: 1,
        title: "Live Especial de Páscoa",
        date: "2026-04-17",
        time: "20:00",
        description: "Descontos de até 40% em produtos de beleza e skincare. Sorteio de um Dyson Airwrap!",
        image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&q=80",
        status: "upcoming",
        featuredProducts: [4, 6, 5]
    },
    {
        id: 2,
        title: "Tech Week",
        date: "2026-04-24",
        time: "21:00",
        description: "Tudo em eletrônicos com preços imperdíveis. AirPods, Watch e mais.",
        image: "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=600&q=80",
        status: "upcoming",
        featuredProducts: [1, 2, 3]
    },
    {
        id: 3,
        title: "Fashion & Lifestyle",
        date: "2026-04-10",
        time: "20:00",
        description: "Mochilas, relógios e óculos com até 35% off.",
        image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=600&q=80",
        status: "past",
        featuredProducts: [7, 8, 9]
    }
];

function formatPrice(value) {
    return `R$ ${value.toLocaleString('pt-BR', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
}

function getProductById(id) {
    return products.find(p => p.id === parseInt(id));
}

function getRelatedProducts(productId, count = 4) {
    const product = getProductById(productId);
    if (!product) return products.slice(0, count);
    return products
        .filter(p => p.id !== product.id && p.category === product.category)
        .slice(0, count)
        .concat(products.filter(p => p.id !== product.id && p.category !== product.category))
        .slice(0, count);
}
