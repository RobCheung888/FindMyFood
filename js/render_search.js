function render_Search(tag, loc, recommend, target) {
   if (!tag && !loc) {
    recommend.style.display = 'block';
    target.style.display = 'none';
   } else {
    recommend.style.display = 'none';
    target.style.display = 'block';
    target.innerHTML = `<h1 style="margin:0.25em 1em;text-align:center">Search Results</h1>`;
   
    if ((tag === 'Bakery' || tag === 'Pizza') && loc === 'Downtown Toronto, Ontario, Canada') {
        target.innerHTML += `
        <a href="/restaurants/nino_x_home_page.html">
        <div class="card flex">
            <img src="/img/cover_pizza.jpg">
            <div style="width:calc(100% - 24em - 2em);margin:1em">
                <h1 style="margin:0">Nino D'Aversa Bakery</h1>
                <h2 style="margin:0">Rating: ★★★★✩</h2>
                <div class="flex tagsWrp">
                    <div class="tags">Italian</div>
                    <div class="tags">Pizza</div>
                    <div class="tags">Lasagna</div>
                    <div class="tags">Bakery</div>
                </div>
                <h5 style="margin:0.5em 0">Address:  1 Toro Rd, Toronto, ON M3J 2A4, CA</h5>
                <h5 style="margin:0.5em 0">Phone: (416) 638-3271</h5>
                <h5 style="margin:0.5em 0">Hours: Closes 7 PM</h5>
            </div>
        </div>
        </a>

        
        <a href="https://bonjourbrioche.com/">
        <div class="card flex">
        <img src="/img/cover_bonjourbrioche.webp">
        <div style="width:calc(100% - 24em - 2em);margin:1em">
            <h1 style="margin:0">Bonjour Brioche Bakery</h1>
            <h2 style="margin:0">Rating: ★★★✩✩</h2>
            <div class="flex tagsWrp">
                <div class="tags">Italian</div>
                <div class="tags">Pizza</div>
                <div class="tags">Bakery</div>
            </div>
            <h5 style="margin:0.5em 0">Address:  Downtown Toronto, Ontario, Canada</h5>
            <h5 style="margin:0.5em 0">Phone: 1-800-692-7753</h5>
            <h5 style="margin:0.5em 0">Hours: Closes 6 PM</h5>
        </div>
    </div>
        `

        
    } else {
        target.innerHTML += `<br><center><p1>No matching found.</p1><br><br>
        <a href="/addnew" id="addrestbtn"><button type="button" name="button" id="AddRestaurant_Button" class="button_main">Add Yours Now</button></a></center>`
    }

   }
}