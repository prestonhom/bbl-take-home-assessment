const BASE_URL = "api/v1/items"

export async function getItems() {
    return fetch(`${BASE_URL}`)
        .then((res) => res.json())
}

export async function createItem(item) {
    return fetch(`${BASE_URL}/create`, {
        method: 'POST',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        body: JSON.stringify(item)
    })
        .then((res) => {
            res.json()
            if (res.ok) return res.json();
            throw new Error('cannot create new item');
        })
}