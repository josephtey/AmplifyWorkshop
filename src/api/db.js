import { Auth, API } from 'aws-amplify';


export async function getAboutInfo() {
    const data = await API.get('itemsAPI', '/info', {})

    return data.message
}

export async function getUserTasks() {
    const userData = await Auth.currentAuthenticatedUser()
    const data = await API.get('itemsAPI', '/items/' + userData.username, {})

    return data
}

export async function addTask(taskName) {
    const userData = await Auth.currentAuthenticatedUser()

    const response = await API.post('itemsAPI', '/items', {
        body: {
            user: userData.username,
            taskName
        }
    })

    return response
}

export async function removeTask(taskName) {
    const userData = await Auth.currentAuthenticatedUser()
    const response = await API.del('itemsAPI', '/items/object/' + userData.username + '/' + taskName, {})

    return response
}
