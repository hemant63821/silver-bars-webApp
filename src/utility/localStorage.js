export const storeLoginData = (loginData) => {
    const serializedState = JSON.stringify(loginData)
    localStorage.setItem("credentials", serializedState);
}

export const getLoginData = () => {
    try {
        const serializedState = localStorage.getItem('credentials')
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState)
    } catch (err) {
        return undefined;
    }
}

export const storeUsers = (userData) => {
    const serializedState = JSON.stringify(userData)
    localStorage.setItem("users", serializedState);
}


export const getUsers = () => {
    try {
        const serializedState = localStorage.getItem('users')
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState)
    } catch (err) {
        return undefined;
    }
}