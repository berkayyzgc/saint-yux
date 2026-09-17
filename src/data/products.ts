import bluzMavi from '../assets/saint-yux-bluz-mavi.png'

export type ProductCategory = 'Kadın' | 'Erkek' | 'Çocuk'

export type Product = {
  id: string
  name: string
  category: ProductCategory
  price: number
  description: string
  image: string
  sizes: string[]
  isNew?: boolean
  isSale?: boolean
  oldPrice?: number
}

export const products: Product[] = [
  {
    id: 'women-bel-oturan-dogal-bluz',
    name: 'Bele Oturan Geniş Kollu Doğal Bluz',
    category: 'Kadın',
    price: 349,
    description:
      'Saint Yux kadın koleksiyonundan, bele oturan geniş kollu doğal bluz.',
    image: bluzMavi,
    sizes: ['XS', 'S', 'M', 'L'],
    isNew: true,
  },
  {
    id: 'women-signature-knit',
    name: 'Signature Knit',
    category: 'Kadın',
    price: 1590,
    description:
      'Yumuşak dokusu ve sade siluetiyle günlük kullanım için tasarlanan premium triko.',
    image: '',
    sizes: ['XS', 'S', 'M', 'L'],
  },
  {
    id: 'women-tailored-trousers',
    name: 'Tailored Trousers',
    category: 'Kadın',
    price: 1990,
    description:
      'Minimal kesimi ve modern formuyla koleksiyonun tamamlayıcı parçası.',
    image: '',
    sizes: ['34', '36', '38', '40'],
  },
  {
    id: 'women-wool-coat',
    name: 'Signature Wool Coat',
    category: 'Kadın',
    price: 5490,
    description:
      'Soğuk sezon için tasarlanan, güçlü ve zarif bir yün kaban.',
    image: '',
    sizes: ['XS', 'S', 'M', 'L'],
    isNew: true,
  },

  {
    id: 'men-essential-overshirt',
    name: 'Essential Overshirt',
    category: 'Erkek',
    price: 1890,
    description:
      'Günlük şehir stiline uyum sağlayan sade ve fonksiyonel overshirt.',
    image: '',
    sizes: ['S', 'M', 'L', 'XL'],
    isNew: true,
  },
  {
    id: 'men-structured-jacket',
    name: 'Structured Jacket',
    category: 'Erkek',
    price: 3290,
    description:
      'Keskin çizgileri ve modern kalıbıyla Saint Yux erkek koleksiyonunun güçlü parçası.',
    image: '',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 'men-premium-knit',
    name: 'Premium Knit',
    category: 'Erkek',
    price: 1790,
    description:
      'Sade görünümü ve yumuşak dokusuyla zamansız premium triko.',
    image: '',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 'men-wool-coat',
    name: 'Modern Wool Coat',
    category: 'Erkek',
    price: 4990,
    description:
      'Minimal şehir stiline uygun, güçlü siluetli premium yün kaban.',
    image: '',
    sizes: ['S', 'M', 'L', 'XL'],
  },

  {
    id: 'kids-classic-junior-set',
    name: 'Classic Junior Set',
    category: 'Çocuk',
    price: 1290,
    description:
      'Günlük kullanım için konforlu ve modern iki parçalı çocuk seti.',
    image: '',
    sizes: ['4Y', '6Y', '8Y', '10Y'],
    isNew: true,
  },
  {
    id: 'kids-mini-knit',
    name: 'Mini Signature Knit',
    category: 'Çocuk',
    price: 990,
    description:
      'Saint Yux estetiğini küçük yaşlara taşıyan yumuşak dokulu triko.',
    image: '',
    sizes: ['4Y', '6Y', '8Y', '10Y'],
  },
  {
    id: 'kids-essential-hoodie',
    name: 'Essential Hoodie',
    category: 'Çocuk',
    price: 1190,
    description:
      'Rahat kesimi ve sade tasarımıyla günlük kullanım için hoodie.',
    image: '',
    sizes: ['4Y', '6Y', '8Y', '10Y'],
  },
  {
    id: 'kids-city-jacket',
    name: 'Mini City Jacket',
    category: 'Çocuk',
    price: 1690,
    description:
      'Modern şehir stilinden ilham alan hafif ve kullanışlı çocuk ceketi.',
    image: '',
    sizes: ['4Y', '6Y', '8Y', '10Y'],
  },
]

export const getProductsByCategory = (
  category: ProductCategory,
): Product[] => {
  return products.filter((product) => product.category === category)
}