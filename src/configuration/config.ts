export const dev = {
    API_URL: 'http://localhost:9090/api/',
}
export const prod = {
    API_URL: 'https://panagiotinos-golang.herokuapp.com/api/',
}
// const config = process.env.ENV === 'production' ? prod : dev
const config = prod
export default {
    // Add common config values here
    MAX_ATTACHMENT_SIZE: 5000000,
    ...config,
}
