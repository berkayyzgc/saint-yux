import './CategoryPage.css'
import {
  getProductsByCategory,
  type ProductCategory,
} from '../data/products'

type CategoryPageProps = {
  title: string
  description: string
  category: ProductCategory
}

function CategoryPage({
  title,
  description,
  category,
}: CategoryPageProps) {
  const categoryProducts = getProductsByCategory(category)

  return (
    <main className="category-page">
      <section className="category-hero">
        <p className="category-eyebrow">SAINT YUX / COLLECTION</p>

        <h1>{title}</h1>

        <p className="category-description">
          {description}
        </p>
      </section>

      <section className="category-toolbar">
        <span>{categoryProducts.length} PRODUCTS</span>

        <button type="button">
          SIRALA
        </button>
      </section>

      <section className="category-products">
        {categoryProducts.map((product) => (
          <article
            className="category-product"
            key={product.id}
          >
            <div className="category-product-image">
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.name}
                />
              ) : (
                <span>SY</span>
              )}

              {product.isNew && (
                <small>NEW</small>
              )}
            </div>

            <div className="category-product-info">
              <div>
                <h2>{product.name}</h2>
                <p>{product.description}</p>
              </div>

              <strong>
                {product.price.toLocaleString('tr-TR')} TL
              </strong>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}

export default CategoryPage