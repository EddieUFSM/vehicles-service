export const create = async ({ body, params  }, res) => {
    return res.send(`this will create the vehicle ${params.id}`)
}
    
export const findOne = async ({ body, params }, res) => {
    return res.send(`this will show the vehicle ${params.id}`)
}

export const find = async ({ body, params }, res) => {
    return res.send(`this will show  a list of cars`)
}

export const update = async ({ body, params  }, res) => {
    return res.send(`this will update the vehicle ${params.id}`)
}

export const remove = async ({ body, params  }, res) => {
    return res.send(`this will delete the vehicle ${params.id}`)
}
