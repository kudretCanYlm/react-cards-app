import {
    CHANGE_CART_TOTAL,
    DELETE_CARD,
    DELETE_ALL_CART,
    GET_ALL,
    GET_TOTAL_AMOUNT
} from "../actions/CartActions"


let carts = [
    {
        id: 0,
        name: "Samsung Galaxy S8",
        price: "$399.99",
        total: 6,
        imgUrl: "https://www.mytrendyphone.eu/images/Prio-3D-Tempered-Glass-Screen-Protector-for-Samsung-Galaxy-S8-Black-4251488654315-05122019-01-p.jpg",

    },
    {
        id: 1,
        name: "Google Pixel",
        price: "$499.99",
        total: 1,
        imgUrl: "https://kiyas.la/storage/images/products/6577/original/google-pixel-5.jpg",

    },
    {
        id: 2,
        name: "Xiaomi Redmi Note 2",
        price: "$699.99",
        total: 1,
        imgUrl: "https://www.birnumara.com/image/cache/data/resimler/xiaomi-redmi-note-9-pro-64-gb-yesil-cep-telefonu-xiaomi-turkiye-garantili-29386-600x600.jpg",

    },
    {
        id: 3,
        name: "Samsung Galaxy S7",
        price: "$599.99",
        total: 3,
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVXFNRzj3NtNeA2eUO-XlRuLY_1u1tbSAfnQ&usqp=CAU",

    }
]


const setCardFun = (act, val) => {
    switch (act) {
        case CHANGE_CART_TOTAL:

            carts.filter(cart => cart.id === val.id)[0].total = val.total;
            return carts;

        case DELETE_CARD:
            carts = carts.filter(cart => cart.id !== val.id);
            return carts;

        case DELETE_ALL_CART:
            carts = []
            return carts;

        case GET_ALL:
            return carts;

        case GET_TOTAL_AMOUNT:

            let total = 0;
            carts.map(x => {
                total += x.total;
            })

            return total;

        default:
            break;
    }
}

export { setCardFun }

