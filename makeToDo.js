(()=>{
    const submitBtn = document.querySelector('.submit-todolist');
    const impoElem= document.querySelector('.choice-importance');
    const componentElem =  document.querySelectorAll('.component-importance');
    let id=0;

    const jsonLocalStorage = {
        setItem: (key, value) => {
          localStorage.setItem(key, JSON.stringify(value));
        },
        getItem: (key) => {
          return JSON.parse(localStorage.getItem(key));
        },
      };
  
    function makeImpoIcon(todo){
        let icon ="";
        if(todo.impo==1){
            icon = "1️⃣";
        }
        if(todo.impo==2){
            icon = "2️⃣";
        }
        if(todo.impo==3){
            icon = "3️⃣";
        }
        return icon;
    }
    function makeToggle(newLabel,todo){
        let newToggle = document.createElement("input");
        newToggle.role = "switch";
        newToggle.type="checkbox";
        newToggle.addEventListener('click',()=>{
            if(newToggle.checked){
                newLabel.className = "view-complete-todo";
                componentElem[3].insertBefore(newLabel,componentElem[3].children[0]);
            };
            if(!newToggle.checked){
                newLabel.classList.remove("view-complete-todo");
                componentElem[3-Number(todo.impo)].insertBefore(newLabel,componentElem[3-Number(todo.impo)].children[0])
            };
        })
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
        newImpo.textContent = makeImpoIcon(todo);
        // newImpo.textContent = todo.impo;
        newImpo.className="view-todolist-importance";
        return newImpo;
    }

    function makeDeleteBtn(newLabel,todo){
        let newBtn = document.createElement("button");
        newBtn.textContent="삭제";
        newBtn.addEventListener('click',()=>{
            let currentTodos = jsonLocalStorage.getItem('todos')||[];
            for(let i=0;i<currentTodos.length;i++){
                if(todo.id === currentTodos[i].id){
                    currentTodos.splice(i,1);
                    break;
                }
            }
            jsonLocalStorage.setItem('todos',currentTodos);
            newLabel.remove();
        })
        return newBtn;
    }

    function makeTodoComponent(todo){
        let newLabel = document.createElement("label");
        newLabel.className='component-todo';
        newLabel.appendChild(makeToggle(newLabel,todo));
        newLabel.appendChild(makeText(todo));
        newLabel.appendChild(makeImpo(todo));
        newLabel.appendChild(makeDeleteBtn(newLabel,todo));
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

    impoElem.addEventListener('input',()=>{
        const possibleImpo = [0,1,2,3];
        let errorMessage = document.querySelector('.input-error-message');
        errorMessage.textContent = '';
        if( !possibleImpo.includes(Number(impoElem.value))){
            errorMessage.textContent= "중요도는 1,2,3만 입력 가능합니다.";
        }
    })

    submitBtn.addEventListener('click',(e)=>{
        let todos = jsonLocalStorage.getItem('todos')||[];
        const textElem = document.querySelector('.text-todolist');

        let todo = {id:id, text:textElem.value,impo:impoElem.value};
        todos.push(todo);
        jsonLocalStorage.setItem('todos',todos);

        id +=1;

        if(!impoElem.value){todo.impo="1";}
        e.preventDefault();
        addView(todo);
        textElem.value='';
        impoElem.value='';
    })

    window.onload= ()=>{
        todos = jsonLocalStorage.getItem('todos')||[];
        for(todo of todos){
            addView(todo);
        }
    }
})();
