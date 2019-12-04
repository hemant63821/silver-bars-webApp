
export const storeSilverData = (userData) => {
    const serializedState = JSON.stringify(userData)
    localStorage.setItem("silvers", serializedState);
}


export const getAllSilverData = () => {
    try {
        const serializedState = localStorage.getItem('silvers')
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState)
    } catch (err) {
        return undefined;
    }
}