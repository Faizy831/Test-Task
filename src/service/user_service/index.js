/* eslint-disable prettier/prettier */
export const FetchUsersData = async (pageNumber) => {
    const res = await fetch(`https://swapi.dev/api/people/?page=${pageNumber}`)
    return res.json()
}