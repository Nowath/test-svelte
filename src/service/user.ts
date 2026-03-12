export const fetchUserById = async (userId) => {
    const result = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    if(!result.ok){
        throw new Error("Can't Fetch");
    }
    return result.json();
}

export const fetchAllUser = async () => {
    const result = await fetch(`https://jsonplaceholder.typicode.com/users`);
    if(!result.ok){
        throw new Error("Can't Fetch");
    }
    return result.json();
}
