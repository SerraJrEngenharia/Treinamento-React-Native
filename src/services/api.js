import axios from "axios"

const Api = axios.create({
	baseURL: "https://lyric.mackle.im/api?artist="
})

export default Api