<script>
    const { userData, postData, commentData, onClickNext, onClickPrev } = $props();
</script>

<div class="w-full h-full bg-white rounded-[40px] p-2 relative flex flex-col">
    <div class="relative">
        <div class="rounded-4xl overflow-hidden h-40 relative">
            <img class=" object-cover" src="https://i.pinimg.com/736x/7d/d1/ca/7dd1cae03095cc146127a41f5606c9de.jpg" alt="banner">
            <button class=" absolute w-10 h-10 p-3 cursor-pointer rounded-full bg-white top-2 right-2 flex items-center justify-center shadow-xl hover:scale-110 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"></path>
                </svg>
            </button>
        </div>
        <div class="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-2 w-full justify-evenly items-center">
            <button onclick={() => onClickPrev()} class="bg-gray-100 shadow-sm px-6 cursor-pointer py-1 rounded-full">prev</button>
            <div class="rounded-full w-25 h-25 overflow-hidden ring-6 ring-white ">
                <img src="https://i.pinimg.com/736x/d4/78/b0/d478b0958ba82caa71e0bc92ae91ac58.jpg" alt="logo" class="object-cover">
            </div>
            <button onclick={() => onClickNext()} class="bg-gray-100 shadow-sm px-6 cursor-pointer py-1 rounded-full">Next</button>
        </div>
    </div>
    <div class=" flex flex-col items-center justify-between mt-14 grow">
        <div class="flex flex-col items-center gap-2">
            <span class="text-2xl"> {userData.name} </span>
            <p class="text-center text-gray-800">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, quia?</p>
        </div>
        <div class=" flex flex-col gap-2 w-full items-center">
            <div class="w-full flex justify-evenly h-24 items-center bg-gray-100 ring ring-gray-300 rounded-4xl p-4 shadow-md inset-shadow-sm inset-shadow-white">
                <div class="flex flex-col items-center ">
                    <p class="text-2xl font-bold">{postData.length}</p>
                    <span class="text-gray-500 text-sm">Posts</span>
                </div>
                <div class="flex flex-col items-center ">
                    <p class="text-2xl font-bold">{commentData.length}</p>
                    <span class="text-gray-500 text-sm">Comments</span>
                </div>
                <div class="flex flex-col items-center ">
                    <p class="text-2xl font-bold">500k</p>
                    <span class="text-gray-500 text-sm">Views</span>
                </div>
            </div>
        </div>
    </div>
</div>
