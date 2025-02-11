import { hotels } from "../Resorse/makkahData.js";

function select() {
    let distince = document.querySelector('#distince').value;
    //let room = document.querySelector('#room').value;
    //let price = document.querySelector('#price').value;
    let rating = document.querySelector('#rating').value;
    let state = document.querySelector('#State').value;
    search( distince, rating,state);
}

function search( distince, rating,state) {
    let hotelSearchs = hotels.slice(); // Start with a fresh copy of the original array


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
        <div class="hotel">
            <img src=${hotel.img}>
            <div class="txt">
                <h2>
                    <bdi>${hotel.hotel}</bdi>
                </h2>
                <p>
                ${hotel.speach}
                </p>
                <a href="#" class="button">
                Find out more 
                <span class="material-symbols-outlined">
                    ==>
                </span>
                </a>
            </div>
        </div>
        `;
    });
    document.querySelector('.hotels').innerHTML = main;
}
// Display all hotels when the page loads
window.onload = function() {
    hotelsPreducer(hotels);
};

let submit = document.querySelector("#submit");
submit.addEventListener('click', select);