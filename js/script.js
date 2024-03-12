const { createApp } = Vue;
createApp({
  data() {
    return {
      // Array di percorsi delle immagini
      images: [
        'img/spiderman.webp',
        'img/stray.webp',
        'img/ratchetclank.webp',
        'img/fortnite.webp',
        'img/avengers.webp',
      ],
      // Contatore per tener traccia dell'immagine corrente
      counter: 0,
      // Flag per abilitare/disabilitare l'autoplay
      autoPlayEnabled: true,
      // Mi serve per l'evento del double click per andare avanti o indietro
      direction: 1,
    };
  },
  methods: {
    // Metodo per cambiare l'immagine successiva o precedente
    nextImg(isNext) {
      // Incrementa o decrementa il contatore in base al flag isNext
      isNext ? this.counter++ : this.counter--;

      // Gestisci il loop delle immagini
      if (this.counter === this.images.length) {
        this.counter = 0;
      } else if (this.counter < 0) {
        this.counter = this.images.length - 1;
      }
    },
    // Metodo per l'autoplay delle immagini
    autoPlay() {
      // Utilizza setInterval per chiamare nextImg ogni 3000 millisecondi (3 secondi)
      setInterval(() => {
        if (this.autoPlayEnabled) {
          // Utilizza la direzione corrente per determinare la prossima immagine
          this.nextImg(this.direction > 0);
        }
      }, 3000);
    },
    autoPlayDirection() {
      // Con questo inverto la direzione da 1 a -1
      this.direction *= -1;
    },
  },
  mounted() {
    // Chiamato quando l'istanza Vue viene montata nel DOM
    this.autoPlay(); // Avvia l'autoplay al momento del montaggio
  },
}).mount('#app'); // Monta l'applicazione Vue nell'elemento con ID 'app'
