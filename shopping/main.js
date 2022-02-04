const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button');
const form = document.querySelector('.new-form');

form.addEventListener('submit', (event) => {
    onAdd();
    event.preventDefault(); // 페이지 자동 로딩 방지 위에 놓든 밑에 놓든 상관 X

})

let id = 0; // UUID
function createItem(text){

    const itemRow = document.createElement('li');
    itemRow.setAttribute('class','item__row');
    itemRow.setAttribute('data-id',id);
    itemRow.innerHTML = `
    <li class="item__row">
        <div class="item">
            <span class="item__name">${text}</span>
            <button class="item__delete">
                <i class="fas fa-trash-alt" data-id =${id}></i>'
            </button>
        </div>
        <div class="item__divider"></div>
    </li>
    `;
    id++;
    return itemRow;

    // const item = document.createElement('div');
    // item.setAttribute('class','item');

    // const span = document.createElement('span');
    // span.setAttribute('class','item__name');
    // span.innerText = text;
    // const deleteBtn = document.createElement('button');
    // deleteBtn.setAttribute('class','item__delete');
    // deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
    // deleteBtn.addEventListener('click', ()=> {
    //     items.removeChild(itemRow);
    // })
    // const itemDivider = document.createElement('div');
    // itemDivider.setAttribute('class','item__divider');

    // item.appendChild(span);
    // item.appendChild(deleteBtn);
    
    // itemRow.appendChild(item);
    // itemRow.appendChild(itemDivider);
    // return itemRow;
}


function onAdd() {
    // 1. 사용자가 입력한 텍스트를 받아옴
    const text = input.value;
    if (text===''){
        input.focus();
        return;
    }
    // 2. 새로운 아이템을 만든다. (텍스트 + 삭제)
    const item = createItem(text);   
    

    // 3. items 컨테이너 안에 새로 만든 아이템을 추가한다.
    items.appendChild(item);
    // 4. 자동 스크롤링
    item.scrollIntoView({block : "center"});
    // 5. Input을 초기화 한다.
    input.value = "";
    input.focus();
    
}

// addBtn.addEventListener('click',()=> {
//     onAdd();
// });
/**
 * keydown 과 keyup 의 차이 : active 와 passive
 * keydown > 한글이 두번 나올 수 있다. 
 * isComposing 을 통해 해결 가능 > 글자가 만들어지는 동안 event 무시
 */
// input.addEventListener('keydown',(event)=> {
//     if (event.isComposing) {
//         return;
//     }
//     if (event.key === "Enter"){
//         onAdd();
//     };
// });

items.addEventListener('click', (event) => {
    const id = event.target.dataset.id;
    if (id) {
        const toBeDeleted = document.querySelector(`.item__row[data-id="${id}"]`);
        toBeDeleted.remove();
    }
})