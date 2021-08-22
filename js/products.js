function showProductsList(productsArray) {

    let htmlContentToAppend = "";
    for (let i = 0; i < productsArray.length; i++) {
        let product = productsArray[i];

        htmlContentToAppend += `
            <a href="product-info.html" class="list-group-item list-group-item-action">
                <div class="row">
                    <div class="col-3">
                        <img src="${product.imgSrc}" alt="${product.description}" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">${product.name}</h4>
                            <small class="text-muted">${product.currency} $ ${product.cost}</small>
                        </div>
                        <p class="mb-1">${product.description}</p>
                    </div>
                </div>
            </a>
            `;
    }
    document.getElementById("prod-list-container").innerHTML = htmlContentToAppend;
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e) {
    getJSONData(PRODUCTS_URL).then(function(resultObj) {
        if (resultObj.status === "ok") {
            showProductsList(resultObj.data);
        }
    });
});