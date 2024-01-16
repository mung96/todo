(()=>{
    
    const impo = document.querySelector('.impoartance');
    const contents = document.querySelector('.see-by-importance-contents');

    function addViewByCategory(label){
        const text = label.querySelector('.view-todolist-text').textContent
        const newLi = document.createElement('li');
        newLi.textContent = text;
        contents.appendChild(newLi);
    }

    impo.addEventListener('change',()=>{
        const currentSelect = impo.options[impo.selectedIndex].value;
        // console.log(currentSelect);
        
        contents.innerHTML='';

        if([1,2,3].includes(Number(currentSelect))){
            console.log(currentSelect)
            const components = document.querySelector(`.component-importance[data-impo="${currentSelect}"]`);
            const labels = components.querySelectorAll('label');
            for (let label of labels){
                addViewByCategory(label);
            }
        }
        
        if (currentSelect==="전체"){
            const allComponents = document.querySelectorAll('.component-importance');
            for (let component of allComponents){
                component.querySelectorAll('label').forEach(label=>addViewByCategory(label))}
            }

        //action같은걸로 리팩터링 가능할 것 같은데.
        if (currentSelect==="완료"){
            const allCompleteTodos= document.querySelectorAll('.view-complete-todo');
            for (let component of allCompleteTodos){
                addViewByCategory(component)
            }
        }
        }
        );   
    })();
