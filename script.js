let inp = document.querySelector('.wrapper input');

let city = document.querySelector('.city-list ul');

let listCity = ['Покровск', 'Покровское', 'Харьков', 'Львов', 'Киев', 'Запорожье', 'Одесса', 'Херсон', 'Днепр', 'Мариуполь', 'Винница'];

let visibleCitys = []

inp.oninput = function() {
    cleanLi()
    visibleCitys = []
    serchFilter(inp.value)
}

function serchFilter(value) {
    listCity.forEach((item) => {
        if(item.indexOf(value) != - 1) {
            visibleCitys.push(item)
        }
    })
    showCity() 
}

function showCity() {
    visibleCitys.sort()
    visibleCitys.map((item) => {
        let li = document.createElement('li');
        li.innerText = item;
        city.append(li)
    })    
}

function cleanLi() {
     let searchLi =  document.querySelectorAll('li');
     for(let i = 0; i < searchLi.length; i++) {
         searchLi[i].remove()
     }
}














































// let inpChartList = []

// let listCityArray = []


// inp.oninput = function() {
//     let inpValue = inp.value
//     for(let i =0; i< inpValue.length; i++) {
//         inpChartList.push(inpValue[i]);
//     }
//     serchCart(inpValue)
//     inpChartList = []
//     console.log(inpChartList)
// }

// listCity.forEach((nameCity) => {
//     listCityArray.push(nameCity.split(''))
// })

// function serchCart(chart) {
//     let li = document.querySelectorAll('.city-list ul li')
//     for(let i =0; i < li.length; i++) {
//         li[i].remove()
//     }
//     listCity = []
//     for(let i = 0; i < listCityArray.length; i++) {
//         if(listCityArray[i].includes(chart)) {
//             listCity.push(listCityArray[i].join(''))
//         }
//     }
//     newList()
// }

// function newList() {
//     for(let i = 0; i < listCity.length; i++) {
//         let li = document.createElement('li')
//         li.innerHTML = listCity[i];
//         city.append(li)
//     }
// }

// newList()




