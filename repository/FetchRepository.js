import server from '../configuration/constants.json';

export const getMethodFetch = (url) => {
    return fetch(`${server.SERVER_ADDRESS}${url}`)
}