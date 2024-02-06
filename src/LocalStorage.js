// get or load data from loacl storage
export const loadState = () => {
    try {
        // console.log('load state function');
        const serializedState = localStorage.getItem('CrisfoodAdmin');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (error) {
        return undefined;
    }
};


//set data to local storage
export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('CrisfoodAdmin', serializedState);
    } catch (error) {

    }
}