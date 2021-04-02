import {html} from '../../node_modules/lit-html/lit-html.js';

import {getAllListings} from '../api/data.js';
import {carsTemplate} from './common/car.js';


const allListingsTemplate = (cars) => html`
<section id="car-listings">
            <h1>Car Listings</h1>
            <div class="listings">

                <!-- Display all records -->
                ${cars.length == 0 ? html`<p class="no-cars">No cars in database.</p>` : cars.map(carsTemplate)}

                <!-- Display if there are no records -->
                
            </div>
        </section>`;


export async function allListingsPage(ctx){
    const cars = await getAllListings()
    ctx.render(allListingsTemplate(cars))
}


