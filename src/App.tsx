import './App.css'

const categories = [
  {
    title: 'Kadın',
    subtitle: 'Yeni sezon seçkisi',
    className: 'category-women',
  },
  {
    title: 'Erkek',
    subtitle: 'Modern essentials',
    className: 'category-men',
  },
  {
    title: 'Çocuk',
    subtitle: 'Küçük stiller',
    className: 'category-kids',
  },
]

const products = [
  {
    name: 'Sculpted Blazer',
    category: 'Kadın',
    price: '2.490 TL',
  },
  {
    name: 'Essential Overshirt',
    category: 'Erkek',
    price: '1.890 TL',
  },
  {
    name: 'Signature Knit',
    category: 'Kadın',
    price: '1.590 TL',
  },
  {
    name: 'Classic Junior Set',
    category: 'Çocuk',
    price: '1.290 TL',
  },
]

function App() {
  return (
    <div className="site">
      {/* HEADER */}
      <header className="header">
        <a className="logo" href="#">
          SAINT YUX
        </a>

        <nav className="navigation">
          <a href="#women">Kadın</a>
          <a href="#men">Erkek</a>
          <a href="#kids">Çocuk</a>
          <a href="#new">Yeni Gelenler</a>
          <a href="#sale">İndirim</a>
        </nav>

        <div className="header-actions">
          <button aria-label="Ara">⌕</button>
          <button aria-label="Favoriler">♡</button>
          <button aria-label="Hesabım">♙</button>
          <button className="cart-button" aria-label="Sepet">
            Sepet
            <span>0</span>
          </button>
        </div>
      </header>

      {/* HERO */}
      <main>
        <section className="hero">
          <div className="hero-content">
            <p className="eyebrow">SAINT YUX / AUTUMN WINTER 2026</p>

            <h1>
              Elegance
              <br />
              <em>in every detail.</em>
            </h1>

            <p className="hero-description">
              Zamansız tasarım, modern siluetler ve kendine özgü bir
              Saint Yux dokunuşu.
            </p>

            <a href="#new" className="primary-button">
              Koleksiyonu keşfet
              <span>→</span>
            </a>
          </div>

          <div className="hero-visual">
            <div className="hero-fashion-shape">
              <span>SY</span>
            </div>

            <div className="hero-label">
              <span>01</span>
              <span>NEW COLLECTION</span>
            </div>
          </div>
        </section>

        {/* MARQUEE */}
        <section className="marquee">
          <div>
            SAINT YUX <span>✦</span> WOMEN <span>✦</span> MEN <span>✦</span>{' '}
            KIDS <span>✦</span> SAINT YUX <span>✦</span>
          </div>
        </section>

        {/* CATEGORY */}
        <section className="categories" id="new">
          <div className="section-heading">
            <div>
              <p className="eyebrow">EXPLORE</p>
              <h2>Collections</h2>
            </div>

            <a href="#shop">Tümünü keşfet →</a>
          </div>

          <div className="category-grid">
            {categories.map((category) => (
              <a
                href="#shop"
                className={`category-card ${category.className}`}
                key={category.title}
              >
                <div className="category-overlay">
                  <p>{category.subtitle}</p>
                  <h3>{category.title}</h3>
                  <span>Keşfet →</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* PRODUCTS */}
        <section className="products" id="shop">
          <div className="section-heading">
            <div>
              <p className="eyebrow">THE EDIT</p>
              <h2>Selected pieces</h2>
            </div>

            <a href="#shop">Tüm ürünler →</a>
          </div>

          <div className="product-grid">
            {products.map((product, index) => (
              <article className="product-card" key={product.name}>
                <div className={`product-image product-${index + 1}`}>
                  <button className="favorite" aria-label="Favorilere ekle">
                    ♡
                  </button>

                  {index === 0 && <span className="product-badge">NEW</span>}

                  <button className="quick-add">
                    Sepete ekle
                  </button>
                </div>

                <div className="product-info">
                  <div>
                    <p>{product.category}</p>
                    <h3>{product.name}</h3>
                  </div>

                  <strong>{product.price}</strong>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* BRAND */}
        <section className="brand-story">
          <div className="brand-image">
            <span>SAINT YUX</span>
          </div>

          <div className="brand-content">
            <p className="eyebrow">THE SAINT YUX WORLD</p>

            <h2>
              Style is not
              <br />
              <em>what you wear.</em>
            </h2>

            <p>
              Saint Yux, modern şehir hayatı için tasarlanan kadın, erkek ve
              çocuk koleksiyonlarını bir araya getirir. Sade çizgiler,
              güçlü karakter ve zamansız parçalar.
            </p>

            <a href="#about" className="text-link">
              Saint Yux'u keşfet →
            </a>
          </div>
        </section>

        {/* NEWSLETTER */}
        <section className="newsletter">
          <p className="eyebrow">STAY IN TOUCH</p>

          <h2>
            Saint Yux dünyasından
            <br />
            <em>ilk siz haberdar olun.</em>
          </h2>

          <form>
            <input
              type="email"
              placeholder="E-posta adresiniz"
              aria-label="E-posta adresiniz"
            />

            <button type="submit">Kayıt ol →</button>
          </form>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-brand">
          <div className="footer-logo">SAINT YUX</div>
          <p>Modern. Timeless. Distinct.</p>
        </div>

        <div className="footer-column">
          <h4>Shop</h4>
          <a href="#women">Kadın</a>
          <a href="#men">Erkek</a>
          <a href="#kids">Çocuk</a>
          <a href="#new">Yeni Gelenler</a>
        </div>

        <div className="footer-column">
          <h4>Yardım</h4>
          <a href="#contact">İletişim</a>
          <a href="#shipping">Kargo & Teslimat</a>
          <a href="#returns">İade & Değişim</a>
          <a href="#faq">Sık Sorulanlar</a>
        </div>

        <div className="footer-column">
          <h4>Saint Yux</h4>
          <a href="#about">Hakkımızda</a>
          <a href="#instagram">Instagram</a>
          <a href="#privacy">Gizlilik</a>
          <a href="#terms">Kullanım Koşulları</a>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Saint Yux. All rights reserved.</span>
          <span>Designed for a new generation.</span>
        </div>
      </footer>
    </div>
  )
}

export default App
