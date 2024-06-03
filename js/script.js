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
        - validazione per il numero delle bombe (tra 1 a 99)

    6 - vittoria
        - serve un counter che dovrà andare finchè non beccha la bomba
          se io faccio l'array delle bombe - 100 (caselle totali), so quali sono le caselle pulite
          quando il counter arriva a quel numero ho vinto
    
    7 - dare la possibilità di non far aumentare il counter se quella casella è già stata cliccata 
        (forse se ha una certa classe...)
        - creo un array nuovo che contiene solo le caselle che, una volta cliccate, non esplodono

    8 - se vinco do la possibilità di rifarlo facendo comparire un bottone

*/
 
const { createApp } = Vue

createApp({
  data() {
    return {
        squares: [
            1,   2,   3,   4,   5,   6,   7,   8,   9,  10,  11,  12,
            13,  14,  15,  16,  17,  18,  19,  20,  21,  22,  23,  24,  25,
            26,  27,  28,  29,  30,  31,  32,  33,  34,  35,  36,  37,  38,
            39,  40,  41,  42,  43,  44,  45,  46,  47,  48,  49,  50,
        ],
        arrayBombs: [],
        clickedSafeSquares: [],
        gameOver: false,
        foundBomb: false,
        start: false,
        inputBombs: 1,
        youWin: false,
        goodSqaures: 0,
    }
  },
  methods: {
    // fa apparire il tabellone
    startGame(){

        // riempio l'array delle bombe + validazione
        if (this.inputBombs != 0 && this.inputBombs != 50) {
            this.setBombs(this.inputBombs);
            this.start = true;

            // caselle per la vittoria
            this.goodSqaures = 49 - this.arrayBombs.length;
            console.log('Caselle per la vittoria = ' + this.goodSqaures);
        }
        else {
            alert('Le bombe possono essere da 1 a 99');
        }
    },
    // riempire l'array delle bombe solo da numeri diversi
    setBombs() {
        while (this.arrayBombs.length < this.inputBombs) {

            // si arriva ad un massimo di 100 il valor che può avere la casella con la bomba
            let nBombs = Math.floor(Math.random() * 50) + 1; 

            if (!this.arrayBombs.includes(nBombs)) {
                this.arrayBombs.push(nBombs);
            }
        }
        
        // array delle bombe
        console.log(this.arrayBombs);
    },
    // controlla che la casella è inclusa nell'array delle bombe
    checkBomb(square) {

        // se non ho vinto posso fare tutto quanto
        if (this.youWin == false) {
            
            // condizione di sconfitta
            if (this.arrayBombs.includes(square)) {
    
                // game over
                this.foundBomb = true;
                this.gameOver = true;
                alert('Hai perso! Il punteggio è di ' + (this.counter + 1));
            }
            
            // se ha fatto un punto
            if (this.clickedSafeSquares.length < this.goodSqaures){
    
                // pusho la casella buona nell'array che contiene tutte quelle ok
                // devo pushare solo quando square non ce nell'array delle bombe e non ce nell'array di quelle salve
                if (!this.arrayBombs.includes(square) && !this.clickedSafeSquares.includes(square)) {
                    this.clickedSafeSquares.push(square);
                    console.log('Caselle buone = ' + this.clickedSafeSquares.length);
                }
            } else {
                this.clickedSafeSquares.push(square);
                alert('VITTORIA! Il tuo punteggio è di ' + (this.clickedSafeSquares.length + 1));
                this.youWin = true;
            }
        }
    },
    // aggiunge la classe rossa in base alle condizioni SOLO alle caselle bomba
    setRedClass(square){

        if (this.clickedSafeSquares.includes(square)) {
            return 'bg-success';
            
        } else if (this.foundBomb == true && this.arrayBombs.includes(square)) {
            return 'bg-danger';
        }
    },
    // resetta il gioco
    resetGame(){
        this.foundBomb = false;
        this.gameOver = false;
        this.start = false;
        this.goodSqaures = 0;
        this.youWin = false;
        this.arrayBombs = [];
        this.clickedSafeSquares = [];
    }
  },
  mounted(){
    
  },
}).mount('#app')