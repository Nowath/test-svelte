export async function fetchPost(userId) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    if (!res.ok) throw Error(`Can't fetch posts`);
    return res.json();
}
