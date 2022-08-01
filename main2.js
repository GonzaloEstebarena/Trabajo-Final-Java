
const ul$$ = document.querySelector('ul')
const input$$ = document.querySelector('[class="b-input"]')
const allLi$$ = document.getElementsByTagName('li')
const div$$=document.querySelector('[class="empty"]')

const form$$=document.querySelector('form')
form$$.addEventListener('submit',(event)=>{

  event.preventDefault();
    const tareas=input$$.value;

    const li$$=document.createElement('li');
    li$$.textContent=tareas
    const button$$ = document.createElement("button");
    button$$.classList.add('btn-delete')
    button$$.textContent='X'
    button$$.addEventListener('click',()=> removeEntrada(li$$))
    
    li$$.appendChild(button$$);
   
    ul$$.appendChild(li$$);
    form$$.reset()
   quitar()
   
})

const removeEntrada=(li$$) =>{
    li$$.remove()
  }

  function quitar() {

    if( allLi$$.length = 0 ){
      div$$.style.display='block'
        
    }
  }

    // 
///  console.log(allLi$$)

///function getData(event) {
 
///event.preventDefault();

///tarea=input$$.value
///console.log('eeeeeeee')

///}

///function toDoList () {

///for (let i = 0; i < tareas.length; i++) {
//////const tarea = array[i];
//////const li$$=document.createElement('li')
//////li$$.textContent=tarea
//////ul$$.appendChild(li$$)

//////
///}
///    }
/// toDoList()

//// const input$$ = document.querySelector('input')
//// //// //// const button$$= document.querySelector('[class="btn-add"]')
//// const ul$$ = document.querySelector('ul')


//// function toDoList (){

//// button$$.addEventListener('click',()=>registrar(input$$.value))

//// } 
//// function registrar (a){
//// const li$$=document.createElement('li')
//// li$$.textContent=a
//// ul$$.appendChild(li$$)
//// 
//// const delete$$=document.createElement('button')
//// delete$$.appendChild(li$$)

//// ////   

//// }

//// toDoList()