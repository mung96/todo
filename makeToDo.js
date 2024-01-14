(()=>{

    const submitBtn = document.querySelector('.submit-todolist');
    

    function makeToggle(){
        let newToggle = document.createElement("input");
        newToggle.role = "switch";
        newToggle.type="checkbox";
        return newToggle;
    }
    function makeText(todo){
        let newText = document.createElement("span");
        newText.textContent = todo.text;
        newText.className="view-todolist-text";
        return newText;
    }
    function makeImpo(todo){
        let newImpo = document.createElement("span");
        newImpo.textContent = todo.impo;
        newImpo.className="view-todolist-importance";
        return newImpo;
    }

    function makeTodoComponent(todo){
        let newLabel = document.createElement("label");
        newLabel.className='component-todo';
        newLabel.appendChild(makeToggle());
        newLabel.appendChild(makeText(todo));
        newLabel.appendChild(makeImpo(todo));
        newLabel.setAttribute("data-time", todo.time);
        return newLabel;
    }

    function addView(todo){
        const impos = document.querySelectorAll('.component-importance');
        let newLabel = makeTodoComponent(todo); 
   
        for(let impo of impos){
            if(todo.impo===impo.getAttribute('data-impo')){
                impo.insertBefore(newLabel,impo.children[0])
                break;
            }
        }
    }

    submitBtn.addEventListener('click',(e)=>{
        const textElem = document.querySelector('.text-todolist');
        const impoElem= document.querySelector('.choice-importance');
    
        const todo = {text:textElem.value,impo:impoElem.value};
        
        e.preventDefault();
        addView(todo);
    })


})();
