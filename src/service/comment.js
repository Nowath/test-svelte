export async function fetchComment(postId) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
    if (!res.ok) throw Error(`Can't fetch comments`);
    return res.json();
}
