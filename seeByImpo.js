(()=>{
    
    const impo = document.querySelector('.impoartance');
    const contents = document.querySelector('.see-by-importance-contents');

    impo.addEventListener('change',()=>{
        const currentSelect = impo.options[impo.selectedIndex].value;
        const components = document.querySelector(`.component-importance[data-impo="${currentSelect}"]`);
        const labels = components.querySelectorAll('label');

        contents.innerHTML='';
        for (let label of labels){
            const text = label.querySelector('.view-todolist-text').textContent
            const newLi = document.createElement('li');
            newLi.textContent = text;
            contents.appendChild(newLi);
        }
    })
})();


// view-todolist-text
