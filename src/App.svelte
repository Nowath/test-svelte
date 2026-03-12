<script>
    import { fetchUserById, fetchAllUser } from "./service/user.js"
    import { fetchPost } from "./service/post.js"
    import { fetchComment } from "./service/comment.js"
    import ProfileCard from "./lib/ProfileCard.svelte"
    import PostContainer from "./lib/PostContainer.svelte"
    let userId = $state(1)
    let userLength
    const loadData = async (userId) => {
        try {
            const user = await fetchUserById(userId);
            const users = await fetchAllUser();
            userLength = users.length;
            const postData = await fetchPost(user.id);

            const commentArrays = await Promise.all(
                postData.map(post => fetchComment(post.id))
            );
            const commentData = commentArrays.flat();

            return { user, postData, commentData };
        } catch (err) {
            console.error("Fetch failed:", err);
            throw err;
        }
    }

    const nextUser = () => {
        if( userId < userLength ){
            userId++;
        }
    }

    const prevUser = () => {
        if(userId > 1){
            userId--;
        }
    }

    let promise = $derived(loadData(userId));
</script>

<div class="bg-gray-900 flex items- justify-start p-6 w-screen h-screen gap-2">
    <div class="w-90 h-120 shrink-0">
        {#await promise}
            <div class="text-white animate-pulse flex items-center justify-center h-full">Fetching profile...</div>
        {:then data}
            <ProfileCard
                userData={data.user}
                postData={data.postData}
                commentData={data.commentData}
                onClickNext={nextUser}
                onClickPrev={prevUser}
            />
        {:catch error}
            <p class="text-red-500">Failed to load: {error.message}</p>
        {/await}
    </div>
    <div class=" grow h-full bg-white rounded-[40px]">
        {#await promise}
            <div class="text-black animate-pulse flex items-center justify-center h-full">Loading Content...</div>
        {:then data}
            <div>
                <PostContainer
                    user={data.user}
                    post={data.postData}
                />
            </div>
        {:catch error}
            <p class="text-red-500">Failed to load: {error.message}</p>
        {/await}
    </div>
</div>
