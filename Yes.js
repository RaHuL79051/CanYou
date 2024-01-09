const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const Date = document.querySelector('#Date').value;
    SetUpDate(Date);
})


function SetUpDate(Date) {
    if (Date) {
        const originalDate = Date;
        const parts = originalDate.split("-");
        const rotatedDate = `${parts[2]}-${parts[1]}-${parts[0]}`;
        window.location.href = `https://wa.me/+917905157775/?text=lets%20Fix%20on%20${rotatedDate}`
    } else {
        console.log('failed');
    }
}