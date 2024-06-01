/*
    CAMPOMINATO

    1 - costruire il campo di gioco

    2 - costruire delle bombe randomiche
        - costruire array di bombe, quindi di numeri casuali

    3 - intercettare click delle caselle
        - se nell'array delle bombe è incluso il numero della casella succede qualcosa
        - finchè gameOver è false faccio vedere il campo di gioco, se è true dico hai perso senza
        - mettere classe 'rossa' se nella casella ce la bomba
    
    4 - reset del gioco

    5 - do la possibilità di fissare la difficoltà in autonomia, ovvero è il player che fissa 
        con quante bombe vuole giocare

*/

const { createApp } = Vue

createApp({
  data() {
    return {
        squares: [
            1,   2,   3,   4,   5,   6,   7,   8,   9,  10,  11,  12,
            13,  14,  15,  16,  17,  18,  19,  20,  21,  22,  23,  24,  25,
            26,  27,  28,  29,  30,  31,  32,  33,  34,  35,  36,  37,  38,
            39,  40,  41,  42,  43,  44,  45,  46,  47,  48,  49,  50,  51,
            52,  53,  54,  55,  56,  57,  58,  59,  60,  61,  62,  63,  64,
            65,  66,  67,  68,  69,  70,  71,  72,  73,  74,  75,  76,  77,
            78,  79,  80,  81,  82,  83,  84,  85,  86,  87,  88,  89,  90,
            91,  92,  93,  94,  95,  96,  97,  98, 100
        ],
        arrayBombs: [],
        gameOver: false,
        foundBomb: false,
        start: false,
        inputBombs: 15,
    }
  },
  methods: {
    // fa apparire il tabellone
    startGame(){
        this.start = true;

        // riempio l'array delle bombe
        this.setBombs(this.inputBombs);
    },
    // riempire l'array delle bombe solo da numeri diversi
    setBombs() {
        while (this.arrayBombs.length <= this.inputBombs) {

            // si arriva ad un massimo di 100 il valor che può avere la casella con la bomba
            let nBombs = Math.floor(Math.random() * 100) + 1; 

            if (!this.arrayBombs.includes(nBombs)) {
                this.arrayBombs.push(nBombs);
            }
        }

        console.log(this.arrayBombs);
    },
    // controlla che la casella è inclusa nell'array delle bombe
    checkBomb(square) {
        if (this.arrayBombs.includes(square)) {
            this.foundBomb = true;
            this.gameOver = true;
        }
    },
    // aggiunge la classe rossa in base alle condizioni SOLO alle caselle bomba
    setRedClass(square){
        if (this.foundBomb == true && this.arrayBombs.includes(square)) {
            return 'bg-danger';
        }
    },
    // resetta il gioco
    resetGame(){
        this.foundBomb = false;
        this.gameOver = false;
        this.start = false;
        this.arrayBombs = [];
        this.setBombs(this.inputBombs); // si ottinene di nuovo l'array delle bombe
        console.log(this.arrayBombs);
    }
  },
  mounted(){
    // ...
  },
}).mount('#app')