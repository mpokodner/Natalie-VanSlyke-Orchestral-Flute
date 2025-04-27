// Simple navigation toggle for mobile
document.querySelector(".nav-toggle").addEventListener("click", function () {
  document.querySelector("nav").classList.toggle("show");
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: "smooth",
      });

      // Close mobile menu if open
      document.querySelector("nav").classList.remove("show");
    }
  });
});

// Add 'active' class to navigation based on scroll position
window.addEventListener("scroll", function () {
  const sections = document.querySelectorAll("section");
  const navItems = document.querySelectorAll("nav ul li a");

  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach((item) => {
    item.classList.remove("active");
    if (item.getAttribute("href") === `#${current}`) {
      item.classList.add("active");
    }
  });
});

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jane Doe",
  url: "https://www.janedoeflutist.com",
  image: "images/jane-profile.jpg",
  description:
    "Professional orchestral flutist with over 10 years of experience performing with leading ensembles worldwide.",
  jobTitle: "Orchestral Flutist",
  sameAs: [
    "https://twitter.com/janedoe",
    "https://instagram.com/janedoeflutist",
    "https://youtube.com/janedoeflutist",
  ],
  performerIn: [
    {
      "@type": "MusicEvent",
      name: "Mozart Flute Concerto",
      startDate: "2025-05-15",
      location: {
        "@type": "MusicVenue",
        name: "Symphony Hall",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Boston",
          addressRegion: "MA",
        },
      },
    },
  ],
};
