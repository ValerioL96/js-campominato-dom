
    
const gridEl = document.querySelector('section#grid');


const bottone = document.querySelector('button');


const difficultyEl = document.querySelector('select#difficulty');


bottone.addEventListener('click', function(){
   generateNewGame(gridEl ,difficultyEl);

})

function generateNewGame (containerEl, selectEl){

   containerEl.innerHTML = '';


      let numbersCells;
      let classAdd;
   
      switch(selectEl.value){
   
   
         case '0':
            cells=100;
            break;
            classAdd= 'easy';
       
         case '1':
            cells =81;
            break;
            classAdd= 'medium';
   
   
         case '2':
            cells =49;
            break;
            classAdd = 'hard';
            
         default:
            cells=100;  
            classAdd = 'easy'; 
      }
    

      for(let i= 1 ; i <= numbersCells; i++){
      
          const cellEl = document.createElement('article');



              cellEl.classList.add('cell', classAdd);

               cellEl.append(i);

                 cellEl.addEventListener('click', function(){
                    cellEl.classList.add('cell-active');
                 })

    
              gridEl.appendChild(cellEl);
        }

}

 //1) creo un array vuoto di bombe:

 let blackList = [];

 //creo un ciclo for che va da 0 a 16;

 for(let index= 0; index < 16 ; index ++){

    //2) genero una funzione per creare un numero randomico che abbia un min e max;

    getRandomInt(1,100);

    function getRandomInt(min,max){

      return Math.floor(Math.random()* ((max + 1)-min))+min;

    };

    function getUniqueRandomInt(blackList,min,max){
      let randomNumber;
       blackList == false;
    }
    
 }
   
    


