import {
    html
} from '../../node_modules/lit-html/lit-html.js';


import { getMyListings } from '../api/data.js';
import { carsTemplate } from './common/car.js';


const myListingsTemplate = (cars) => html `
<section id="my-listings">
    <h1>My car listings</h1>
    <div class="listings">
        <!-- Display all records -->
        
            ${cars == 0 ? html`<p class="no-cars"> 
                You haven't listed any cars yet.
            </p>` : cars.map(carsTemplate)}
        
    </div>
</section>`;

export async function myListingsPage(ctx){
    const cars = await getMyListings(ctx.user._id);
    ctx.render(myListingsTemplate(cars))
}