/*
    CAMPOMINATO

    1 - costruire il campo di gioco

    2 - costruire delle bombe randomiche
        - costruire array di bombe, quindi di numeri casuali

    3 - intercettare click delle caselle
        - se nell'array delle bombe è incluso il numero della casella succede qualcosa

*/

const { createApp } = Vue

createApp({
  data() {
    return {
        squares: [
            0,   1,   2,   3,   4,   5,   6,   7,   8,   9,  10,  11,  12,
            13,  14,  15,  16,  17,  18,  19,  20,  21,  22,  23,  24,  25,
            26,  27,  28,  29,  30,  31,  32,  33,  34,  35,  36,  37,  38,
            39,  40,  41,  42,  43,  44,  45,  46,  47,  48,  49,  50,  51,
            52,  53,  54,  55,  56,  57,  58,  59,  60,  61,  62,  63,  64,
            65,  66,  67,  68,  69,  70,  71,  72,  73,  74,  75,  76,  77,
            78,  79,  80,  81,  82,  83,  84,  85,  86,  87,  88,  89,  90,
            91,  92,  93,  94,  95,  96,  97,  98, 100
        ],
        arrayBombs: [],
    }
  },
  methods: {
    setBombs(max) {
        while (this.arrayBombs.length <= 10) {
            let nBombs = Math.floor(Math.random() * max) + 1;

            if (!this.arrayBombs.includes(nBombs)) {
                this.arrayBombs.push(nBombs);
            }
        }
    },
    checkBomb(square) {
        if (this.arrayBombs.includes(square)) {
            alert('Hai perso!');
        }
    }
  },
  mounted(){
    this.setBombs(50);
    console.log(this.arrayBombs);
  },
}).mount('#app')