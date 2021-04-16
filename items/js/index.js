const html = items.map((item) => {
    const presentImg = `<img class="present-img" src="${ item.orderInfo.inStock ? 'present.svg' : 'close.svg' }">`;
    return `
        <div class="item">
            <img class="item-img" src="${item.imgUrl}">
            <h2>${item.name}</h2>
            <p>${ presentImg } <strong>${item.orderInfo.inStock}</strong> left in stock</p>
            <p>Price: <strong>${item.price}</strong> $</p> 
            <p><button ${ item.orderInfo.inStock ? '' : 'disabled'}>Add to Card</button></p>
        </div>`;
}).join('');

const container = document.getElementById('products');
container.innerHTML = html;