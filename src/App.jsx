import React, { useState } from "react";

const WHATSAPP_NUMBER = "";
const INSTAGRAM_USERNAME = "";

const categories = [
  { id: "all", label: "All the good things" },
  { id: "flowers", label: "Flower love" },
  { id: "memories", label: "Memory lane" },
  { id: "hampers", label: "Happy little hampers" },
  { id: "home", label: "Home & heart" },
];

const products = [
  {
    category: "flowers",
    categoryLabel: "FLOWER LOVE",
    name: "Forever in Bloom",
    price: "From ₹1,499",
    description: "A dreamy bouquet, made to match their kind of beautiful.",
    tag: "Bestseller",
    image: "photo-1523438885200-e635ba2c371e",
    alt: "Romantic pink flower bouquet",
  },
  {
    category: "memories",
    categoryLabel: "MEMORY LANE",
    name: "All Our Little Moments",
    price: "From ₹999",
    description: "Your favorite photos, gathered into one very happy keepsake.",
    tag: "Made for memories",
    image: "photo-1511988617509-a57c8a288659",
    alt: "Friends celebrating a happy moment together",
  },
  {
    category: "hampers",
    categoryLabel: "HAPPY LITTLE HAMPERS",
    name: "The Happy-You Hamper",
    price: "From ₹1,799",
    description: "A thoughtful bundle of their favorite little things.",
    tag: "A whole lot of happy",
    image: "photo-1549465220-1a8b9238cd48",
    alt: "Thoughtfully wrapped gifts ready to make someone smile",
  },
  {
    category: "home",
    categoryLabel: "HOME & HEART",
    name: "Little Place of Peace",
    orderName: "Little Place of Peace personalized pooja mandir",
    price: "From ₹2,499",
    description: "A personalized pooja mandir to make their sacred space feel like home.",
    tag: "Made with meaning",
    image: "photo-1603006905003-be475563bc59",
    alt: "Warm candlelight and thoughtful details for the home",
  },
  {
    category: "memories",
    categoryLabel: "MEMORY LANE",
    name: "A Note to Keep",
    price: "From ₹699",
    description: "A handwritten birthday wish, love note, or memory they can hold onto.",
    tag: "A note from the heart",
    image: "photo-1455390582262-044cdead277a",
    alt: "A handwritten note filled with love",
  },
  {
    category: "flowers",
    categoryLabel: "FLOWER LOVE",
    name: "Popping the Question",
    orderName: "Popping the Question proposal bouquet",
    price: "From ₹2,199",
    description: "A proposal-ready bouquet for your one-in-a-million moment.",
    tag: "For the big question",
    image: "photo-1518895949257-7621c3c786d7",
    alt: "Sweet pink roses for a special question",
  },
];

function imageUrl(id, width = 900) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;
}

function whatsappUrl(message) {
  const base = WHATSAPP_NUMBER ? `https://wa.me/${WHATSAPP_NUMBER}` : "https://wa.me/";
  return `${base}?text=${encodeURIComponent(message)}`;
}

function Brand({ footer = false }) {
  return (
    <a className={`brand${footer ? " footer-brand" : ""}`} href="#home" aria-label="Luvora Studio home">
      <span className="brand-mark" aria-hidden="true">l</span>
      <span className="brand-name">luv<span>ora</span><small>STUDIO</small></span>
    </a>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <div className="announcement">
        Made with love, wrapped with care <span aria-hidden="true">♡</span> Custom orders are always welcome
      </div>
      <header className="site-header">
        <Brand />
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span></span><span></span>
        </button>
        <nav className={`main-nav${menuOpen ? " is-open" : ""}`} aria-label="Main navigation">
          <a href="#shop" onClick={closeMenu}>Shop gifts</a>
          <a href="#story" onClick={closeMenu}>Our little story</a>
          <a href="#custom" onClick={closeMenu}>Custom orders</a>
        </nav>
        <a className="header-cta" href="#shop">Find a little magic <span aria-hidden="true">↗</span></a>
      </header>
    </>
  );
}

function Hero() {
  return (
    <>
      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow"><span aria-hidden="true">✳</span> A little love, made by hand</p>
          <h1>Little things.<br />Big <em>feelings.</em></h1>
          <p className="hero-description">
            The kind of gifts that make them smile, happy-cry, and keep forever.
            Thoughtfully made just for your favorite person.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#shop">Find their perfect gift <span aria-hidden="true">→</span></a>
            <a className="text-link" href="#custom">Make it personal <span aria-hidden="true">↗</span></a>
          </div>
          <div className="hero-note">
            <span className="note-avatars" aria-hidden="true"><i>♡</i><i>✿</i><i>☼</i></span>
            <span>Made for your people, with all our heart</span>
          </div>
        </div>
        <div className="hero-art">
          <div className="hero-image-wrap">
            <img className="hero-image" src={imageUrl("photo-1490750967868-88aa4486c946", 1200)} alt="Soft pink flowers arranged in a lovely bouquet" />
          </div>
          <div className="hero-sticker"><span>made with</span><strong>♡</strong><span>so much love</span></div>
          <div className="hero-caption"><span className="caption-dot"></span> A little something, just because</div>
          <span className="hero-sparkle sparkle-one" aria-hidden="true">✳</span>
          <span className="hero-sparkle sparkle-two" aria-hidden="true">✳</span>
        </div>
        <span className="hero-side-note">FOR THE MOMENTS THAT MATTER</span>
      </section>
      <section className="occasion-strip" aria-label="Gift occasions">
        <span>For the birthdays</span><i>✳</i><span>For the big questions</span><i>♡</i>
        <span>For the just-because</span><i>✳</i><span>For your forever people</span>
      </section>
    </>
  );
}

function ProductCard({ product }) {
  const message = `Hi Luvora Studio! I'd love to order "${product.orderName ?? product.name}" (${product.price}). Could you tell me more about custom options?`;

  return (
    <article className="product-card">
      <a className="product-image" href="#custom" aria-label={`Ask about ${product.name}`}>
        <img src={imageUrl(product.image)} alt={product.alt} loading="lazy" />
        <span className="product-tag">{product.tag}</span>
        <span className="image-arrow" aria-hidden="true">↗</span>
      </a>
      <div className="product-details">
        <div><p className="product-category">{product.categoryLabel}</p><h3>{product.name}</h3></div>
        <p className="price">{product.price}</p>
      </div>
      <p className="product-description">{product.description}</p>
      <a className="buy-link" href={whatsappUrl(message)} target="_blank" rel="noopener noreferrer">
        Make it theirs <span aria-hidden="true">→</span>
      </a>
    </article>
  );
}

function Shop() {
  const [activeCategory, setActiveCategory] = useState("all");
  const visibleProducts = activeCategory === "all"
    ? products
    : products.filter((product) => product.category === activeCategory);

  return (
    <section className="shop-section section-pad" id="shop">
      <div className="section-heading">
        <div>
          <p className="eyebrow"><span aria-hidden="true">✳</span> The gift edit</p>
          <h2>For every kind of <em>love.</em></h2>
        </div>
        <p className="section-intro">One-of-a-kind little treasures for all the people<br className="desktop-break" /> who make life feel like something.</p>
      </div>
      <div className="category-pills" role="group" aria-label="Filter gifts">
        {categories.map((category) => (
          <button
            className={`category-pill${activeCategory === category.id ? " is-active" : ""}`}
            type="button"
            key={category.id}
            aria-pressed={activeCategory === category.id}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.label}
          </button>
        ))}
      </div>
      <div className="product-grid">
        {visibleProducts.map((product) => <ProductCard key={product.name} product={product} />)}
      </div>
      <p className="price-note">Every gift is made to order. Final price depends on your custom touches — tell us what you're dreaming of!</p>
    </section>
  );
}

function CustomOrder() {
  return (
    <section className="custom-banner" id="custom">
      <div className="custom-deco" aria-hidden="true">♡</div>
      <div className="custom-copy">
        <p className="eyebrow"><span aria-hidden="true">✳</span> Your idea, our happy place</p>
        <h2>Dream it up.<br /><em>We'll make it.</em></h2>
        <p>Have a person, a moment, or a very specific “they would LOVE this” in mind? Tell us the story. We'll make something that feels like them.</p>
        <a className="button button-light" href={whatsappUrl("Hi Luvora Studio! I'd love to ask about a custom gift.")} target="_blank" rel="noopener noreferrer">
          Tell us what you're dreaming of <span aria-hidden="true">↗</span>
        </a>
      </div>
      <div className="custom-image-wrap">
        <img src={imageUrl("photo-1513475382585-d06e58bcb0e0", 1000)} alt="A carefully wrapped handmade gift with a ribbon" loading="lazy" />
        <div className="custom-note">your story<br />goes here <span aria-hidden="true">♡</span></div>
      </div>
    </section>
  );
}

function Story() {
  return (
    <>
      <section className="story-section section-pad" id="story">
        <div className="story-image-wrap">
          <img src={imageUrl("photo-1455659817273-f96807779a8a")} alt="Hands arranging flowers with care" loading="lazy" />
          <span className="story-stamp">handmade<br />with heart</span>
        </div>
        <div className="story-copy">
          <p className="eyebrow"><span aria-hidden="true">✳</span> A little about us</p>
          <h2>Because “I thought of you” is a pretty <em>big deal.</em></h2>
          <p>We're a small, happy studio that believes the best gifts aren't just things — they're tiny reminders of how much someone means to you.</p>
          <p>Every bouquet, hamper, photo keepsake, and little wish is made by hand, with your person and your story in mind.</p>
          <a className="text-link" href="#shop">Come find their something <span aria-hidden="true">→</span></a>
        </div>
      </section>
      <section className="closing-note">
        <span aria-hidden="true">✳</span>
        <p>Here's to giving them a reason to say <em>“you just get me.”</em></p>
        <span aria-hidden="true">✳</span>
      </section>
    </>
  );
}

function Footer() {
  const instagramUrl = INSTAGRAM_USERNAME
    ? `https://www.instagram.com/${INSTAGRAM_USERNAME.replace(/^@/, "")}/`
    : "https://www.instagram.com/";

  return (
    <footer className="site-footer">
      <div className="footer-top">
        <Brand footer />
        <p>A little more love in the world<br />looks good on all of us. <span aria-hidden="true">♡</span></p>
        <div className="footer-links">
          <a href={instagramUrl} target="_blank" rel="noopener noreferrer">Instagram <span aria-hidden="true">↗</span></a>
          <a href={whatsappUrl("Hi Luvora Studio! I'd love to ask about a custom gift.")} target="_blank" rel="noopener noreferrer">Say hello on WhatsApp <span aria-hidden="true">↗</span></a>
          <a href="#shop">Shop gifts <span aria-hidden="true">↗</span></a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Luvora Studio. Made with love.</span>
        <span>Little things. Big feelings. <span aria-hidden="true">♡</span></span>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Shop />
        <CustomOrder />
        <Story />
      </main>
      <Footer />
    </>
  );
}
