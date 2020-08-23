import { Auth, API } from 'aws-amplify';


export async function getAboutInfo() {
    const data = await API.get('itemsAPI', '/info', {})

    return data.message
}

export async function getUserItems() {
    const userData = await Auth.currentAuthenticatedUser()
    const data = await API.get('itemsAPI', '/items/' + userData.username, {})

    return data
}

export async function addItem(itemName) {
    const userData = await Auth.currentAuthenticatedUser()

    const newItem = {
        timestamp: new Date().getTime(),
        user: userData.username,
        itemName
    }

    const response = await API.post('itemsAPI', '/items', {
        body: newItem
    })

    return response
}

export async function deleteItem(timestamp) {
    const userData = await Auth.currentAuthenticatedUser()
    const response = await API.del('itemsAPI', '/items/object/' + userData.username + '/' + timestamp, {})

    return response
}
