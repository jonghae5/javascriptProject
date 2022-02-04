const vertical = document.querySelector('.vertical');
const horizontal = document.querySelector('.horizontal');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');
const targetRect = target.getBoundingClientRect();

const targetHalfWidth = targetRect.width /2;
const targetHalfHeight = targetRect.height /2;


window.addEventListener('load',()=>{
    document.addEventListener("mousemove",(e)=> {
        const xpos = e.clientX;
        const ypos = e.clientY;
        
        vertical.style.transform = `translateX(${xpos}px)`;
        horizontal.style.transform = `translateY(${ypos}px)`;
        target.style.transform = `translate(${xpos-targetHalfWidth}px,${ypos-targetHalfHeight}px)`;
        tag.innerHTML = (xpos+"px, "+ypos+"px");
        tag.style.transform = `translate(${xpos+20}px,${ypos+20}px)`;
        
        // 개발 툴 > 개발 > 퍼포먼스 Screen Shot 적용 > Record 적용 > Stop >
        // Profiling > 빨간색> 안좋은 것 > Summary를 통해 확인가능
        // command shift p > show layout 을 통해 레이아웃을 볼 수 있다.
        
    });


    // vertical.style.left = `${xpos}px`;
    // horizontal.style.top = `${ypos}px`;
    // target.style.left = `${xpos}px`;
    // target.style.top = `${ypos}px`;
    // option 키 누르면 동시에 글자 작성 가능
    // tag.style.left = `${xpos}px`;
    // tag.style.top = `${ypos}px`;

    
});
