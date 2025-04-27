



//product search
document.addEventListener("DOMContentLoaded", function () {
    // Product search functionality
    var productcontainer = document.getElementById("productcontainer");
    var search = document.getElementById("Search");
    var productlist = productcontainer.querySelectorAll("div");

    search.addEventListener("keyup", function (event) {
        var entervalue = event.target.value.toUpperCase();
        for (let count = 0; count < productlist.length; count++) {
            var productname = productlist[count].querySelector("h1").textContent;

            if (productname.toUpperCase().indexOf(entervalue) < 0) {
                productlist[count].style.display = "none";
            } else {
                productlist[count].style.display = "block";
            }
        }
    });

    // Function to filter based on all checkboxes
    function applyFilters() {
        // const products = document.querySelectorAll(".image-container > div");
        const product=document.getElementById("productcontainer")
        const products=product.querySelectorAll("div")

        // Get checked checkbox values
        const checkedTags = Array.from(document.querySelectorAll('input[name="tag"]:checked')).map(cb => cb.value.toLowerCase());
        const checkedColors = Array.from(document.querySelectorAll('input[name="colors"]:checked')).map(cb => cb.id.toLowerCase());
        const checkedArrivals = Array.from(document.querySelectorAll('input[name="arrivals"]:checked')).map(cb => cb.id.toLowerCase());

        products.forEach(product => {
            const title = product.querySelector("h1").textContent.toLowerCase();
            
            // Check if the product matches all selected filters
            let tagMatch = checkedTags.length === 0 || checkedTags.some(tag => title.includes(tag));
            let colorMatch = checkedColors.length === 0 || checkedColors.some(color => title.includes(color));
            let arrivalMatch = checkedArrivals.length === 0 || checkedArrivals.some(arrival => title.includes(arrival));

            // Show product if all filters match, otherwise hide it
            if (tagMatch && colorMatch && arrivalMatch) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }
        });
    }

    // Add event listener for all checkboxes
    const allCheckboxes = document.querySelectorAll('input[type="checkbox"]');
    allCheckboxes.forEach(checkbox => {
        checkbox.addEventListener("change", applyFilters);
    });

});

