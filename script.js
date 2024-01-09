
const NoButton = document.querySelector('#no');
const YesButton = document.querySelector('#yes');

const NoDiv = document.querySelector('.NoDiv');
const container = document.querySelector('.container');

NoDiv.addEventListener('mouseover', (e) => {
    const containerRect = container.getBoundingClientRect();

    const XPosition = e.clientX;
    const YPosition = e.clientY;

    if ((XPosition >= containerRect.left && XPosition <= containerRect.right) &&
        (YPosition >= containerRect.top && YPosition <= containerRect.bottom)) {

        let x = 99;
        let y = 98;

        const RandomXvalue = Math.random() * (containerRect.height - NoDiv.clientHeight);
        const RandomYvalue = Math.random() * (containerRect.width - NoDiv.clientWidth);

        gsap.to(NoDiv,{
            position: 'absolute',
            top: RandomXvalue,
            left: RandomYvalue
        })
    }
});



NoButton.addEventListener('click',(e)=>{
    window.location.href = 'No.html'
})


YesButton.addEventListener('click',()=>{
    window.location.href= 'yes.html'
})

    