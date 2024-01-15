(()=>{
    
    const impo = document.querySelector('.impoartance');
    const contents = document.querySelector('.see-by-importance-contents');

    impo.addEventListener('change',()=>{
        const currentSelect = impo.options[impo.selectedIndex].value;
        contents.innerHTML='';

        if(currentSelect in [1,2,3]){
            const components = document.querySelector(`.component-importance[data-impo="${currentSelect}"]`);
            const labels = components.querySelectorAll('label');
            for (let label of labels){
                const text = label.querySelector('.view-todolist-text').textContent
                const newLi = document.createElement('li');
                newLi.textContent = text;
                contents.appendChild(newLi);
            }
        }
        
        if (currentSelect==="전체"){
            const allComponents = document.querySelectorAll('.component-importance');
            for (let component of allComponents){
                component.querySelectorAll('label').forEach(function(label){
                    const text = label.querySelector('.view-todolist-text').textContent
                    const newLi = document.createElement('li');
                    newLi.textContent = text;
                    contents.appendChild(newLi);
                });

            }
        }
    })
})();
