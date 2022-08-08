import instance from "./instance";

export const getAll = () => {
    const url = "/users"
    return instance.get(url)
}
export const read = (id:any) =>{
    const url = `/users/${id}`
    return instance.get(url)
}
export const remove = (id:any) =>{
    const url = `/users/${id}`
    return instance.delete(url)
}
export const createUser = (data:any) => {
    const url = "/users"
    return instance.post(url, data)
}
export const updateUsers = (data:any,id:any) => {
    const url = `/user/${id}`
    return instance.put(url, data)
}