
const BaseUrl = "https://api.spotify.com/v1"

const request = async (endpoint: string, id?: string) => {
    const response = await fetch(`${BaseUrl}/${endpoint}${id ? `/${id}` : ''}`, {
        headers: {
            "Authorization": `Bearer ${import.meta.env.VITE_SPOTIFY_TOKEN}`
        }
    })
    const data = await response.json()
    console.log(data)
    return data
}



const api = {
    playlist: async (id?: string) => {
        const data = await request("playlists", id)
        return data
    }
}

export default api