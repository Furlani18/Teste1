const vehicles = {
    cars: [
        { name: 'Fiat Mobi Like', image: 'images/fiatmobilike.jpeg', price: 'R$ 72.990' },
        { name: 'Fiat Mobi Trekking', image: 'images/Fiatmobitrekking.webp', price: 'R$ 75.990' },
        {name: 'Fiat Titano Endurance', image: 'images/Fiat-Titano-Endurance.webp', price: 'R$219.990'},
        {name: 'Fiat Titano Volcano', image: 'images/Fiat-Titano-Volcano.webp', price: 'R$239.990'},
        {name: 'Fiat Titano Ranch', image: 'images/Fiat-Titano-Ranch.webp', price: 'R$259.990'},
        {name: 'Fiat Argo 1.0 Manual', image: 'images/Fiat-Argo-1.0-Manual.png', price: 'R$ 84.990'},
        {name: 'Fiat Argo 1.0 Manual Drive', image: 'images/Fiat-Argo-1.0-Manual-Drive.png', price: 'R$ 86.990'},
        {name: 'Fiat Argo 1.3 Automático Drive', image: 'images/Fiat-Argo-1.3-Automático-Drive.png', price: 'R$ 96.490'},
        {name: 'Fiat Argo 1.3 Manual Trekking', image: 'images/Fiat-Argo-Automático-1.3-Manual-Trekking.png', price: 'R$94.990'},
        {name: 'Fiat Argo 1.3 Automático Trekking', image: 'images/Fiat-Argo-1.3-Automático-Trekking.png', price: 'R$100.990'},
        {name: 'Fiat Cronos Drive 1.0 Manual', image: 'images/Cronos-Drive-1.0-Manual.png', price: 'R$ 93.990'},
        {name: 'Fiat Cronos Drive 1.3 Manual', image: 'images/Cronosdrive1.3manual.png', price: 'R$ 103.990'},
        {name: 'Fiat Cronos Precision 1.3 Automático', image: 'images/CronosPrecision1.3Automático.png', price: 'R$ 113.990'},
        {name: 'Fiat Pulse Drive 1.3 MT', image: 'images/Pulsedrive1.3MT.webp', price: 'R$ 104.990 '},
        {name: 'Fiat Pulse Drive 1.3 Automático', image: 'images/PulseDrive1.3AT.webp', price: 'R$ 112.990,'},
        {name: 'Fiat Pulse S-Design 1.3 Automático', image: 'images/PulseS-Design 1.3AT.webp', price: 'R$ 118.990'},
        {name: 'Fiat Pulse Audace T200 Automático', image: 'images/PulseAudaceT200 AT.webp', price: 'R$ 122.990'},
        {name: 'Fiat Pulse Impetus T200 Automático', image: 'images/Pulse-Impetus-T200-Automático.webp', price: 'R$ 137.990'},
        {name: 'Fiat Pulse Abarth Automático', image: 'images/Pulse-Abarth.webp', price: 'R$ 151.990'},
        {name: 'Fiat Fastback Turbo 200 Automático', image: 'images/Fastback-Turbo-200-AT.webp', price: 'R$ 119.990'},
        {name: 'Fiat Fastback Audace Turbo 200 Automático', image: 'images/Audace-Turbo-200AT.webp', price: 'R$ 148.990'},
        {name: 'Fiat Fastback Impetus Turbo 200 Automático', image: 'images/Impetus-Turbo-200AT.webp', price: 'R$ 158.990'},
        {name: 'Fiat Fastback Limited Edition Turbo 270 Automático', image: 'images/Limited-Edition-Turbo-270-Automático.webp', price: 'R$ 162.990'},
        {name: 'Fiat Fastback Abarth Automátcio', image: 'images/Fastback-Abarth.webp', price: 'R$ 165.990'},
        {name: 'Fiat Strada Ultra Turbo Automático', image: 'images/Strada-Ultra-Turbo-AT.webp', price: 'R$ 139.990'},
        {name: 'Fiat Strada Ranch Turbo Automático', image: 'images/Strada-Ranch-Turbo-Automático.webp', price: 'R$ 139.990'},
        {name: 'Fiat Strada Volcano 1.3 Automático', image: 'images/Strada-Volcano-1.3-Automática.webp', price: 'R$ 127.990'},
        {name: 'Fiat Strada Volcano 1.3 CD Automático', image: 'images/Strada-Volcano-1.3-CD.webp', price: 'R$ 121.990'},
        {name: 'Fiat Strada Freedom 1.3 CD Automático', image: 'images/Strada-Freedom-1.3-CD.webp', price: 'R$ 119.990'},
        {name: 'Fiat Strada Freedom 1.3 Automático', image: 'images/Strada-Freedom-1.3.webp', price: 'R$ 111.990'},
        {name: 'Fiat Strada Endurance 1.3 Automático', image: 'images/Strada-Endurance-1.3.webp', price: 'R$ 104.990'},
        {name: 'Fiat Toro Ultra Diesel Automático', image: 'images/fiat-toro-ultra-diesel.webp', price: 'R$ 214.990'},
        {name: 'Fiat Toro Ranch Diesel Automático', image: 'images/fiat-toro-ranch-diesel.webp', price: 'R$ 216.990'},
        {name: 'Fiat Toro Volcano Flex Automático', image: 'images/fiat-toro-volcano-flex.png', price: 'R$ 175.990'},
        {name: 'Fiat Toro Volcano Diesel Automático', image: 'images/fiat-toro-volcano-diesel.png', price: 'R$ 199.990'},
        {name: 'Fiat Toro Freedom Flex Automático', image: 'images/fiat-toro-freedom-flex.webp', price: 'R$ 159.990'},
        {name: 'Fiat Toro Endurance Flex Automático', image: 'images/fiat-toro-endurance-Endurance.webp', price: 'R$ 149.990'},
        {name: 'Jeep Renegade Turbo Polar White 1-3 Automático', image: 'images/jeep-renegade-turbo-polar-white-1.3.webp', price: 'R$ 115.990'},
        {name: 'Jeep Renegade Altitude Carbon Black Automático', image: 'images/jeep-renegade-altitude-carbon-black.webp', price: 'R$ 147.990'},
        {name: 'Jeep Renegade Longitude Jazz Blue Automático' , image: 'images/jeep-renegade-longitude-jazz-blue.webp', price: 'R$ 165.990'},
        {name: 'Jeep Renegade Longitude Night Eagle Carbon Black Automático', image: 'images/jeep-renegade-longitude-night-eagle-carbon-black.webp', price: 'R$ 170.990'},
        {name: 'Jeep Renegade Sahara Slash Gold Automático', image: 'images/jeep-renegade-sahara-slash-gold.webp', price: 'R$ 173.990'},
        {name: 'Jeep Renegade Trailhawk Granite Crystal Automático', image: 'images/jeep-renegade-trailhawk-granite-crystal.webp', price: 'R$ 173.990'},
        {name: 'Jeep Renegade Willys Sting Silver Automático', image: 'images/jeep-renegade-willys-sting-silver.webp', price: 'R$ 179.990'},
        {name: 'Jeep Compass Sport T270 Turbo Flex Automático', image: 'images/CompassSportT270TurboFlex.webp', price: 'R$ 179.990'},
        {name: 'Jeep Compass Longitude T270 Turbo Flex', image: 'images/CompassLongitudeT270TurboFlex.webp', price: 'R$ 196.990'},
        {name: 'Jeep Compass Longitude Nigth Eagle Turbo Flex', image: 'images/CompassLongitudeT270TurboFlex.webp', price: 'R$ 205.990'},
        {name: 'Jeep Compass Limited T270 Turbo Flex', image: 'images/CompassLimitedT270TurboFlex.webp', price: 'R$ 216.990'},
        {name: 'Jeep Compass Series S T270 Turbo Flex', image: 'images/CompassSeriesST270TurboFlex.webp', price: 'R$ 236.990'},
        {name: 'Jeep Compass limited TD350 Turbo Diesel', image: 'images/LimitedTD350TurboDiesel.webp', price: 'R$ 249.990'},
        {name: 'Jeep Compass Overland Hurricane Turbo Gasolina', image: 'images/CompassOverlandHurricaneTurbogasolina.webp', price: 'R$ 266.990'},
        {name: 'Jeep Compass Blackhawk Turbo Gasolina', image: 'images/CompassBlackhawkTurboGasolina.webp', price:'R$ 279.990'},
        {name: 'Jeep Comander Longitude T270 Turbo Flex', image: 'images/ComanderLongitudeT270TurboFlex.webp', price: 'R$ 217.290'},
        {name: 'Jeep Comander Limited T270 Turbo Flex', image: 'images/ComanderLimitedT270TurboFlex.webp', price: 'R$ 240.990'},
        {name: 'Jeep Comander Overland T270 Turbo Flex', image: 'images/ComanderOverlandT270TurboFlex.webp', price: 'R$ 262.990'},
        {name: 'Jeep Comander Overland TD380 Turbo Diesel', image: 'images/ComanderOverlandTD380TurboDiesel.webp', price: 'R$ 298.290'},
        {name: 'Jeep Comander Overland Hurricane Gasolina', image: 'images/ComanderOverlandHurricaneGasolina.webp', price: 'R$ 308.290'},
        {name: 'Jeep Comander Blackhawk Hurricane Gasolina', image: 'images/ComanderBlackhawkHurricaneGasolina.webp', price: 'R$ 321.290'},
    ],
    motorcycles: [
        { name: 'Yamaha YZF-R3', image: 'images/yamaha-yzf-r3.jpg', price: 'R$ 20.000' },
        { name: 'Honda CB 500', image: 'images/honda-cb500.jpg', price: 'R$ 25.000' }
    ]
};

function displayVehicles() {
    const carList = document.getElementById('car-list');
    const motorcycleList = document.getElementById('motorcycle-list');

    vehicles.cars.forEach(car => {
        const carItem = document.createElement('div');
        carItem.className = 'vehicle-item';
        carItem.innerHTML = `
            <img src="${car.image}" alt="${car.name}">
            <h3>${car.name}</h3>
            <p>${car.price}</p>
        `;
        carList.appendChild(carItem);
    });

    vehicles.motorcycles.forEach(motorcycle => {
        const motorcycleItem = document.createElement('div');
        motorcycleItem.className = 'vehicle-item';
        motorcycleItem.innerHTML = `
            <img src="${motorcycle.image}" alt="${motorcycle.name}">
            <h3>${motorcycle.name}</h3>
            <p>${motorcycle.price}</p>
        `;
        motorcycleList.appendChild(motorcycleItem);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    displayVehicles();

    let carouselIndex = 0;
    const carouselItems = document.querySelectorAll('.carousel-item');

    function showNextCarouselItem() {
        carouselItems[carouselIndex].classList.remove('active');
        carouselIndex = (carouselIndex + 1) % carouselItems.length;
        carouselItems[carouselIndex].classList.add('active');
    }

    setInterval(showNextCarouselItem, 5000);
});