<script>
    const {user, post} = $props();
</script>

<div class="flex w-full h-full p-4 flex-col items-center gap-8">
    <h1 class="text-4xl font-bold">POST by {user.name}</h1>
    <div class="w-full grid grid-cols-3 gap-2">
        {#each post as item}
            <div class="bg-gray-100 p-2 cursor-pointer rounded-md h-30 inset-shadow-sm inset-shadow-white hover:inset-shadow-black/10 transition-all shadow-sm">
                <span class="line-clamp-1 text-lg font-bold">{item.title}</span>
                <span class=" line-clamp-3 text-gray-400 indent-7">{item.body}</span>
            </div>
        {/each}
    </div>
</div>
