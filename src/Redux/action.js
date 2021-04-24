import shortid from "shortid";

export const addContact= ({id, name, number})=>({
    type: "phoneBook/AddContact",
    payload:{id:shortid.generate(), name, number},
    x:5,
})
export const filterChange= (payload)=>({
    type: "phoneBook/FilterChange",
    payload,
})
export const deleteContact=  (payload)=>({
    type: "phoneBook/DeleteContact",
    payload,
})
