(()=>{

    const textElem = document.querySelector('.text-todolist');
    const impoElem= document.querySelector('.choice-importance');
    const submitBtn = document.querySelector('.submit-todolist');
    
    const viewElem = document.querySelector('.view-todolist');
    // 객체에 내용과 중요도를 담아서 버튼을 만들면 되지 않을까?

    submitBtn.addEventListener('click',(e)=>{
        e.preventDefault();
        const text = textElem.value;
        const impo = impoElem.value;
        const todo = {text:text,impo:impo};

        let newToggle = document.createElement("input");
        newToggle.role = "switch";
        newToggle.type="checkbox";
        let newText = document.createElement("span");
        newText.textContent = text;
        newText.className="view-todolist-text";
        let newImpo = document.createElement("span");
        newImpo.textContent = impo;
        newText.className="view-todolist-importance";

        let newLabel = document.createElement("label");
        newLabel.appendChild(newToggle);
        newLabel.appendChild(newText);
        newLabel.appendChild(newImpo);
        
        viewElem.appendChild(newLabel);
    })


})();

{/* <div class="view-todolist">
<h4>ToDO</h4>
<hr>
<label>
    <input role="switch" type="checkbox"/>
    <span class = "view-todolist-text">할일</span>
    <span class = "view-todolist-importance">2</span>
</label>
</div> */}