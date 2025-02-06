
import { hotels } from "../Resorse/data.js";

function select() {
    let distince = document.querySelector('#distince').value;
    let city = document.querySelector('#city').value;
    //let room = document.querySelector('#room').value;
    //let price = document.querySelector('#price').value;
    let rating = document.querySelector('#rating').value;
    let state = document.querySelector('#State').value;
    search(city, distince, rating,state);
}

function search(city, distince, rating,state) {
    let hotelSearchs = hotels.slice(); // Start with a fresh copy of the original array

    if (city === 'Makkah') {
        hotelSearchs = hotelSearchs.filter((hotelSearch) => hotelSearch.city.includes('مكة المكرمة'));
    } else {
        hotelSearchs = hotelSearchs.filter((hotelSearch) => hotelSearch.city.includes('maddinah'));
    }
/*
    if (room === 'Douple') {
        hotelSearchs = hotelSearchs.filter((hotelSearch) => hotelSearch.douple.includes(price));
    } else if (room === 'Triple') {
        hotelSearchs = hotelSearchs.filter((hotelSearch) => hotelSearch.triple.includes(price));
    } else if (room === 'Quad') {
        hotelSearchs = hotelSearchs.filter((hotelSearch) => hotelSearch.quad.includes(price));
    }
*/
    if (distince === 'الحرم') {
        hotelSearchs = hotelSearchs.filter((hotelSearch) => hotelSearch.fb.includes('الحرم'));
    } else if (distince === '900') {
        hotelSearchs = hotelSearchs.filter((hotelSearch) => hotelSearch.fb.includes('900'));
    } else if (distince === '700') {
        hotelSearchs = hotelSearchs.filter((hotelSearch) => hotelSearch.fb.includes('700'));
    } else if (distince === '400') {
        hotelSearchs = hotelSearchs.filter((hotelSearch) => hotelSearch.fb.includes('400'));
    } else if (distince === 'نقل') {
        hotelSearchs = hotelSearchs.filter((hotelSearch) => hotelSearch.fb.includes('نقل'));
    }

    if (rating === '5') {
        hotelSearchs = hotelSearchs.filter((hotelSearch) => hotelSearch.rating === '5');
    } else if (rating === '4') {
        hotelSearchs = hotelSearchs.filter((hotelSearch) => hotelSearch.rating === '4');
    } else if (rating === '3') {
        hotelSearchs = hotelSearchs.filter((hotelSearch) => hotelSearch.rating === '3');
    } else if (rating === 'اقتصادي') {
        hotelSearchs = hotelSearchs.filter((hotelSearch) => hotelSearch.rating === 'اقتصادي');
    }

    if (state === 'جبل الكعبة') {
        hotelSearchs = hotelSearchs.filter((hotelSearch) => hotelSearch.from === 'جبل الكعبة');
    } else if (state === 'جبل عمر') {
        hotelSearchs = hotelSearchs.filter((hotelSearch) => hotelSearch.from === 'جبل عمر');
    }   else if (state === 'شارع أجياد') {
        hotelSearchs = hotelSearchs.filter((hotelSearch) => hotelSearch.from === 'شارع أجياد');
    }   else if (state === 'كدي') {
        hotelSearchs = hotelSearchs.filter((hotelSearch) => hotelSearch.from === 'كدي');
    }   else if (state === 'ريع بخش') {
        hotelSearchs = hotelSearchs.filter((hotelSearch) => hotelSearch.from === 'ريع بخش');
    }   else if (state === 'محبس الجن') {
        hotelSearchs = hotelSearchs.filter((hotelSearch) => hotelSearch.from === 'محبس الجن');
    }   else if (state === 'ابراهيم الخليل') {
        hotelSearchs = hotelSearchs.filter((hotelSearch) => hotelSearch.from === 'ابراهيم الخليل');
    }   else if (state === 'الغزة') {
        hotelSearchs = hotelSearchs.filter((hotelSearch) => hotelSearch.from === 'الغزة');
    }   else if (state === 'التيسير') {
        hotelSearchs = hotelSearchs.filter((hotelSearch) => hotelSearch.from === 'التيسير');
    }  
    console.table(hotelSearchs);
    hotelsPreducer(hotelSearchs);
}

function hotelsPreducer(hotelSearchs) {
    let main = '';
    hotelSearchs.forEach(hotel => {
        main += `
        <ul class="main-2">
            <li class="type f7">${hotel.quad}</li>
            <li class="type f6">${hotel.triple}</li>
            <li class="type f5">${hotel.douple}</li>
            <li class="type f11">${hotel.fb}</li>
            <li class="type f4">${hotel.rating}</li>
            <li class="type f3">${hotel.from}</li>
            <li class="type f2">${hotel.city}</li>
            <li class="type f1">${hotel.hotel}</li>
        </ul>
        `;
    });
    document.querySelector('#hotel-list').innerHTML = main;
}

// Display all hotels when the page loads
window.onload = function() {
    hotelsPreducer(hotels);
};

let submit = document.querySelector("#submit");
submit.addEventListener('click', select);

