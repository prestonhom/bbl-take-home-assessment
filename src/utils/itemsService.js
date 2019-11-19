const BASE_URL = "/api/v1/"

// grabs all the Items 
export async function getItems() {
    return await fetch(`${BASE_URL}items`)
        .then((res) => res.json())
}

// adds Item
export async function addItem(item) {
    return await fetch(`${BASE_URL}items/add`, {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            mode: 'cors' 
        }),
        body: JSON.stringify(item)
    })
        .then((res) => res.json())
}


