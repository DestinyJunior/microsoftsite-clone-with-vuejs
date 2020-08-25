<template>
  <div>
    <div class="menu-btn">
      <i class="fas fa-bars fa-2x"></i>
    </div>
    <main class="container">
      <!-- Navbar -->
      <navbar></navbar>
      <!-- EndNavbar -->
      <!-- showcase -->

      <header class="showcase">
        <h2>Surface Deals</h2>
        <p>
          Select Surfaces are on sale now - save while supplies last
        </p>
        <a href="" class="btn">Shop Now <i class="fas fa-chevron-right"></i></a>
      </header>

      <!-- home cards 1 -->
      <section class="home-cards">
        <mycards
          v-for="card in cards"
          :key="card.title"
          :imgSrc="card.imgSrc"
          :title="card.title"
          :content="card.content"
          :btnText="card.btnText"
        ></mycards>
      </section>

      <!-- Xbox -->
      <section class="xbox">
        <div class="content">
          <h2>Xbox Game Pass Ultimate</h2>
          <p>
            Xbox Game Pass Ultimate Xbox Live Gold and over 100 high-quality
            console and PC games. Play together with friends and discover your
            next favorite game.
          </p>
          <a href="#" class="btn">
            Join Now <i class="fas fa-chevron-right"></i>
          </a>
        </div>
      </section>

      <!-- Home cards 2 -->
      <!-- <section class="home-cards">
        <mycards
          v-for="card in cards.slice(4, 8)"
          :key="card.title"
          :imgSrc="card.imgSrc"
          :title="card.title"
          :content="card.content"
          :btnText="card.btnText"
        ></mycards>
      </section> -->
      <section class="home-cards">
        <mycards
          v-for="card in secondSectCards"
          :key="card.title"
          :imgSrc="card.imgSrc"
          :title="card.title"
          :content="card.content"
          :btnText="card.btnText"
        ></mycards>
      </section>

      <!-- carbon -->
      <section class="carbon dark">
        <div class="content">
          <h2>Commiting To Carbon Negative</h2>
          <p>
            Microsoft will be carbon negative by 2030 and by 2050 we will remove
            all carbon the company has emitted since it was founded in 1975
          </p>
          <a href="#" class="btn">
            Learn More <i class="fas fa-chevron-right"></i>
          </a>
        </div>
      </section>

      <!-- Follow -->
      <section class="follow">
        <p>Follow Microsoft</p>
        <a href="https://facebook.com">
          <img src="@/assets/img/social-fb.png" alt="Facebook" />
        </a>
        <a href="https://twitter.com">
          <img src="@/assets/img/social-twitter.png" alt="Twitter" />
        </a>
        <a href="https://linkedin.com">
          <img src="@/assets/img/social-linkedin.png" alt="Linkedin" />
        </a>
      </section>
    </main>
    <!-- Footer & Links -->
    <ftr></ftr>
    <!-- End Footer & Links -->
  </div>
</template>
<script>
import navbar from "../components/navbar";
import ftr from "../components/footer";
import mycards from "../components/cards";

export default {
  components: {
    navbar,
    ftr,
    mycards,
  },
  data() {
    return {
      imgSrc: String,
      cards: [],
      secondSectCards: [],
    };
  },
  created() {
    // this.imgSrc = '@/assets/img/card1.png';
    window.addEventListener("load", () => {
      document
        .querySelector(".menu-btn")
        .addEventListener("click", () =>
          document.querySelector(".main-menu").classList.toggle("show")
        );
    });
  },
  mounted() {
    this.loadData();
  },
  methods: {
    /**
     * Load data for card area
     */
    loadData() {
      const cardData = [
        {
          imgSrc: "card1.png",
          title: "New Suface Pro 7",
          content: `See how Katie Sowers, Asst. Coach for the 49ers, uses Surface 
                                Pro 7 to put her plans into play.`,
          link: "",
          btnText: "Learn More",
        },
        {
          imgSrc: "card2.png",
          title: "New Surface Laptop 3",
          content: `Express yourself powerfully with a thin, light, and elegant design, 
                            faster performance, and up to 11.5 hours battery life.`,
          link: "",
          btnText: "Learn More",
        },
        {
          imgSrc: "card3.png",
          title: "Save $150 + free controller",
          content: `Buy an Xbox One X console and double your fun with a free select
                        extra controller. Starting at $349.`,
          link: "",
          btnText: "Learn More",
        },
        {
          imgSrc: "card4.png",
          title: "The new Microsoft Edge",
          content: `Expect more. World class performance, with more privacy, more
                                productivity, and more value.`,
          link: "",
          btnText: "Learn More",
        },
      ];

      var secondCardData = [
        //   second card section (Home cards 2)
        {
          imgSrc: "card5.png",
          title: "Microsoft Teams",
          content: "Unleash the power of your team.",
          link: "",
          btnText: "Shop Now",
        },
        {
          imgSrc: "card6.jpg",
          title: "Unlock the power of learning",
          content:
            "Get students future-ready with Windows 10 devices. Starting at $219.",
          link: "",
          btnText: "Shop Now",
        },
        {
          imgSrc: "card7.png",
          title: "Windows 10 Enterprise",
          content: "Download the free 90-day evaluation for IT professionals.",
          link: "",
          btnText: "Download Now",
        },
        {
          imgSrc: "card8.png",
          title: "Explore Kubernetes",
          content: ` Learn how Kubernetes works and get started with cloud native app
                        development today.`,
          link: "",
          btnText: "Get Started",
        },
      ];

      this.cards = cardData;
      this.secondSectCards = secondCardData;
    },
  },
};
</script>
<style scoped></style>
