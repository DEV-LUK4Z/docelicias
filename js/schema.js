/**
 * Structured data for SEO
 */

/**
 * Product schema for SEO
 */
const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Docelícias — 700 Receitas de Bolos, Tortas e Sobremesas",
  "image": "Ebook.jpg",
  "description": "E-book com 700 receitas testadas: bolos, tortas e sobremesas. Inclui técnicas profissionais, suporte e estratégias de venda.",
  "brand": {
    "@type": "Brand",
    "name": "Docelícias"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://pay.kiwify.com.br/ZDayP66?afid=xaNsBp5W",
    "priceCurrency": "BRL",
    "price": "47.00",
    "availability": "https://schema.org/InStock"
  }
};

/**
 * FAQ schema for SEO
 */
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Como recebo o e-book?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Após a confirmação do pagamento, você recebe um link para download na tela e por e-mail."
      }
    },
    {
      "@type": "Question",
      "name": "Posso usar as receitas para vender?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim. O conteúdo foi desenvolvido para quem deseja comercializar bolos e sobremesas. Recomendamos seguir boas práticas de higiene e legislação local."
      }
    },
    {
      "@type": "Question",
      "name": "O e-book oferece suporte?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim. Há suporte diário para tirar dúvidas e otimizar suas produções."
      }
    }
  ]
};

/**
 * Add structured data to page
 */
function addStructuredData() {
  // Add product schema
  const productScript = document.createElement('script');
  productScript.type = 'application/ld+json';
  productScript.textContent = JSON.stringify(productSchema);
  document.head.appendChild(productScript);

  // Add FAQ schema
  const faqScript = document.createElement('script');
  faqScript.type = 'application/ld+json';
  faqScript.textContent = JSON.stringify(faqSchema);
  document.head.appendChild(faqScript);
}

// Add structured data when DOM is loaded
document.addEventListener('DOMContentLoaded', addStructuredData);