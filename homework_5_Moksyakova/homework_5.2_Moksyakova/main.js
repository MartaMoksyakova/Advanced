const shop = (function(){
    let balance = 1000
    let products = {
        beer: {
            count: 100,
            price: 40
        },
        vine: {
            count: 50,
            price: 200
        },
        pepsi: {
            count: 80,
            price: 20
        }
    }

    function sell(name,count){
        products[name].count -= count;
        balance += count * products[name].price 
    }
    function storage(name){
        return products[name].count      
    }
    function bal(){
        return balance
    }
    return {
        sell: sell,
        storage: storage,
        bal: bal
    }
    
}());

shop.sell('beer',10)
shop.sell('pepsi',10)
shop.sell('vine',5)

console.log(shop.bal())
console.log(shop.storage('beer'))
console.log(shop.storage('pepsi'))
console.log(shop.storage('vine'))

shop.sell('vine',40)
console.log(shop.storage('vine'))

console.log(shop.bal())

