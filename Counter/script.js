const counter = document.querySelector('#counter')
const btns = document.querySelectorAll('.btn')


    let count = 0


    btns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            const styles = e.currentTarget.classList

            if (styles.contains('increase')){
                count ++
            }else if (styles.contains('decrease')){
                count--
            }else{
                count = 0
            }

            if(count > 0){
                counter.style.color = 'rgb(72, 243, 72)'
            }else if(count < 0){
                counter.style.color = 'rgb(235, 71, 71)'
            }else{
                counter.style.color = 'rgb(153, 209, 228)'
            }
            counter.textContent = count
        })
    })

