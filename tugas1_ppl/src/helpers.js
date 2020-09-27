const incrementQty = (qty) => parseInt(qty) + 1;
const decrementQty = (qty) => parseInt(qty) - 1;

function recalculateSubtotal(price, qty) {
    return price * qty;
}

function total(price, qty, kode){
    return recalculateSubtotal(qty, price) - hitungDiskon(price, qty, kode);
}
