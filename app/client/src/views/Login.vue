<template>
    <div class="h-screen bg-gray-100">
        <div class="max-w-2xl mx-auto">
            <div class="flex flex-col justify-center items-center h-screen">
                <div class="bg-blue-gradient w-full p-5 rounded-lg flex relative h-52 flex items-center px-10">
                    <h1 class="text-white font-medium text-4xl">
                        Saskaitīšana spēle
                    </h1>

                    <img
                        src="/src/assets/img/math-illustration.png"
                        class="absolute top-[-85px] right-[40px] w-56"
                        alt="Math illustration"
                    />
                </div>

                <div class="bg-white rounded-lg shadow-lg p-12 mt-10">
                    <div class="flex justify-center">
                        <div class="bg-gray-200 rounded-md p-1 inline-block">
                            <div class="flex">
                                <div tabindex="1" class="bg-white px-5 py-1 rounded-md font-medium text-primary shadow cursor-default mr-1 select-none">
                                    Ienākt
                                </div>

                                <div tabindex="2" class="px-5 py-1 rounded-md font-medium text-gray-700 cursor-default hover:bg-white/40 transition select-none active:hover:bg-gray-200">
                                    Reģistratūra
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-col gap-3 mt-5">
                        <input
                            tabindex="3"
                            type="text"
                            class="rounded-md border-gray-200"
                            placeholder="Lietotājvārds"
                        />

                        <input
                            tabindex="4"
                            type="password"
                            class="rounded-md border-gray-200"
                            placeholder="Parole"
                        />

                        <div
                            tabindex="5"
                            class="font-medium bg-primary text-white rounded-md text-center px-4 py-3 cursor-default hover:bg-primary/90 transition active:hover:bg-blue-500 active:hover:shadow-inset select-none">
                            Ienākt
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
