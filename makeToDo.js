(()=>{

    const submitBtn = document.querySelector('.submit-todolist');
    
    const viewElem = document.querySelector('.view-todolist');

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
        newLabel.appendChild(makeToggle());
        newLabel.appendChild(makeText(todo));
        newLabel.appendChild(makeImpo(todo));
        return newLabel;
    }

    function addView(todo){
        let newLabel = makeTodoComponent(todo);        
        viewElem.appendChild(newLabel);
    }

    submitBtn.addEventListener('click',(e)=>{
        const textElem = document.querySelector('.text-todolist');
        const impoElem= document.querySelector('.choice-importance');
        const todo = {text:textElem.value,impo:impoElem.value};
        
        e.preventDefault();
        addView(todo);
    })


})();