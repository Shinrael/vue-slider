const { createApp } =  Vue;
createApp({
  data(){
    return{
      images: [
        'img/spiderman.webp',
        'img/stray.webp',
        'img/ratchetclank.webp',
        'img/fortnite.webp',
        'img/avengers.webp',
      ],
      counter: 0,
      autoPlayEnabled : true,
    }
  },
  methods:{
    nextImg(isNext){
      isNext ? this.counter++ : this.counter--;
      if (this.counter === this.images.length) {
        this.counter = 0
      } else if(this.counter < 0) {
        this.counter = this.images.length - 1;
      }
    },
    autoPlay(){
      setInterval(() => {
      if(this.autoPlayEnabled){
         this.nextImg(true)
          }
        }, 3000);
      }      
  },
  mounted(){
    this.autoPlay();
  }
}).mount('#app')