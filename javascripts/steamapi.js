function getPrices(itemId) {
    return "no";
}

function getSaleOrders(itemId) {
    return new Promise((resolve, reject) => {

        const parseResults = (results) => {
            if (!Array.isArray(results)) throw new Error("The response format was invalid");

            // Only return the data we need
            const newData = [];

            results.forEach(element => {
                if (element.length < 2) throw new Error("The response format was invalid");
                
                if (isNaN(element[0]) || isNaN(element[1])) throw new Error("The response format was invalid");

                newData.push([element[0], element[1]]);
            });            

            return newData;
        }

        if (String.toString(itemId).trim().length == 0) {
            throw new Error("Item id is invalid");
        }
        fetch(`https://steamcommunity.com/market/itemordershistogram?country=NO&language=norwegian&currency=9&item_nameid=${itemId}&two_factor=0`)
        .then(res => res.json())
        .then(res => {
            const results = parseResults(res["sell_order_graph"])

            resolve(results);
        })
        .catch(err => reject(err));
    })

}

function getBuyOrders(itemId) {
    return new Promise((resolve, reject) => {

        const parseResults = (results) => {
            if (!Array.isArray(results)) throw new Error("The response format was invalid");

            // Only return the data we need
            const newData = [];

            results.forEach(element => {
                if (element.length < 2) throw new Error("The response format was invalid");
                
                if (isNaN(element[0]) || isNaN(element[1])) throw new Error("The response format was invalid");

                newData.push([element[0], element[1]]);
            });            

            return newData;
        }

        if (String.toString(itemId).trim().length == 0) {
            throw new Error("Item id is invalid");
        }
        fetch(`https://steamcommunity.com/market/itemordershistogram?country=NO&language=norwegian&currency=9&item_nameid=${itemId}&two_factor=0`)
        .then(res => res.json())
        .then(res => {
            const results = parseResults(res["buy_order_graph"])

            resolve(results);
        })
        .catch(err => reject(err));
    })
}


/**
 * 
 * @param {string} itemId Can be either a number or a string 
 */
function getBasicItemInfo(itemId) {

}
