
class starships {

    constructor(httpClient){
        this.httpClient = httpClient;
    }

    async getStarships(){
        try {
            const response = await fetch('https://swapi.dev/api/starships');
    
            if (!response.ok) {
                throw new Error('Does not exist');
            }
    
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('error', error);
    }
}

export const getUserData = async () => {
    try {
        const response = await fetch('https://swapi.dev/api/starships');

        if (!response.ok) {
            throw new Error('Does not exist');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('error', error);
    }
};