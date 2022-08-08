import instance from "./instance";

export const getAll = () => {
    const url = "/cates"
    return instance.get(url)
}
export const read = (id:any) =>{
    const url = `/cates/${id}`
    return instance.get(url)
}
export const remove = (id:any) =>{
    const url = `/cates/${id}`
    return instance.delete(url)
}
export const createCategory = (data:any) => {
    const url = "/cates"
    return instance.post(url, data)
}
export const updateCategory = (data:any,id:any) => {
    const url = `/cates/${id}`
    return instance.put(url, data)
}
export const getProductByCate = (id:any) =>{
    const url = `/category/${id}?_embed=products`
    return instance.get(url)
}