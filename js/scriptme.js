//Consegna:

//L'utente clicca su un bottone che genererà una griglia di gioco quadrata. 

//3) creo il mio elemento per la griglia:
    
const gridEl = document.querySelector('section#grid');
   

//1) mi creo un elemento per il bottone che si trova nel file html.

const bottone = document.querySelector('button');

//Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:

const difficultyEl = document.querySelector('select#difficulty');

//2) creo una funzione che mi permetta di cliccare sul bottone per aggiungere una tabella grigliata che avrà classe active.

bottone.addEventListener('click', function(){
   generateNewGame(gridEl ,difficultyEl);

})

function generateNewGame (containerEl, selectEl){

   containerEl.innerHTML = '';

      //Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:

      let numbersCells;
      let classAdd;
   
      switch(selectEl.value){
   
         //con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;   
   
         case '0':
            cells=100;
            break;
            classAdd= 'easy';
   
         //con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
       
         case '1':
            cells =81;
            break;
            classAdd= 'medium';
   
         //con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;   
            
         case '2':
            cells =49;
            break;
            classAdd = 'hard';
            
         default:
            cells=100;  
            classAdd = 'easy'; 
      }

    
      //Ogni cella ha un numero progressivo, da 1 a 100. Ci saranno quindi 10 caselle per ognuna delle 10 righe.

      //4) Creo un ciclo for con indice uguale a 1 che sia minore uguale di 100 e che aumenti ogni volta di 1.

      for(let i= 1 ; i <= numbersCells; i++){
      
          //5) Creo un elemento per le caselle:

          const cellEl = document.createElement('article');

          //6) aggiungo le caratteristiche che mi servono:

              //- collego l'elemento ad una classe creata con css.

              cellEl.classList.add('cell', classAdd);

              
              //Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

               cellEl.append(i);

                 //- creo una funzione che mi permette di colorare la casella quando ci clicco sopra.

                 cellEl.addEventListener('click', function(){
                    cellEl.classList.add('cell-active');
                 })

              //- lo aggiungo ad un nodo parents che è quello della griglia.
    
              gridEl.appendChild(cellEl);
        }


}
   
    


