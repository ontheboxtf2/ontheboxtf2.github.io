<script>
    import ButtonOutline from '$lib/ButtonOutline.svelte'
    import Header from '$lib/Header.svelte'
    import FontAwesomeIcon from '$lib/FontAwesomeIcon.svelte'
    import {
        faAngleRight,
        faBoxOpen,
        faMicrochip,
        faShieldAlt,
        faUserSecret,
    } from '@fortawesome/free-solid-svg-icons'
</script>

<Header />
<main
    class="flex min-h-[100vh] w-[100vw] flex-col gap-20 bg-black px-8 pb-6 pt-12 text-green-600 md:gap-36">
    <div class="flex flex-col items-center">
        <div class="text-7xl">
            <FontAwesomeIcon icon={faBoxOpen} />
        </div>
        <div class="text-lg">Want to be on top? Get</div>
        <div
            class="bg-green-600 px-4 text-[2.75rem] font-bold tracking-tighter text-black">
            On the Box
        </div>
    </div>
    <div class="mx-auto -mt-6 flex w-72 flex-col items-center md:-mt-8">
        Change the game
        <ButtonOutline>Install Now</ButtonOutline>
    </div>
    <div
        class="grid items-center gap-8 sm:grid-cols-1 md:grid-cols-2 md:place-items-center">
        <div class="text-xl">
            <div class="mb-2 text-2xl font-bold">
                What can The Box do for you?
            </div>
            <div class="grid grid-cols-[auto_1fr] items-center gap-2">
                <FontAwesomeIcon icon={faAngleRight} fixedWidth />
                <div>Perform your <i>best</i></div>
                <FontAwesomeIcon icon={faAngleRight} fixedWidth />
                <div><i>Impress</i> your peers</div>
                <FontAwesomeIcon icon={faAngleRight} fixedWidth />
                <div><i>Eliminate</i> the competition</div>
            </div>
        </div>
        <div class="text-xl">
            <div class="mb-2 text-2xl font-bold">The Box is unbeatable</div>
            <div class="grid grid-cols-[auto_1fr] items-center gap-2">
                <FontAwesomeIcon icon={faMicrochip} fixedWidth />
                <div>Lower RAM usage than LmaoBox</div>
                <FontAwesomeIcon icon={faUserSecret} fixedWidth />
                <div>Undetectable by RGL, UGC, ETF2L, etc.</div>
                <FontAwesomeIcon icon={faShieldAlt} fixedWidth />
                <div>VAC Immune</div>
            </div>
        </div>
        <div class="col-span-2">
            <ButtonOutline>See More</ButtonOutline>
        </div>
    </div>
    <div class="-mx-8 bg-green-900/20 py-4 px-8">
        <div
            class="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:place-items-center">
            <div>
                <div class="text-2xl">Testimonials</div>
                <div class="text-xs">
                    Identities hidden for privacy purposes
                </div>
            </div>
            <div class="md:col-start-2">
                "I was nervous heading to LAN, but with <strong
                    >On The Box</strong
                >, I was able to perform better than ever." - **ile
            </div>
            <div class="md:col-start-2">
                "I was nervous heading to LAN, but with <strong
                    >On The Box</strong
                >, I was able to perform better than ever." - **ile
            </div>
            <div class="md:col-start-2">
                "I was nervous heading to LAN, but with <strong
                    >On The Box</strong
                >, I was able to perform better than ever." - **ile
            </div>
            <div class="md:col-start-2">
                "I was nervous heading to LAN, but with <strong
                    >On The Box</strong
                >, I was able to perform better than ever." - **ile
            </div>
        </div>
    </div>
    <!-- <div
        class="grid items-center gap-8 sm:grid-cols-1 md:grid-cols-2 md:place-items-center">
        <div class="mb-2 text-2xl font-bold">Results</div>
    </div> -->
    <div class="mt-auto max-w-lg text-xs">
        This site is a work of satire that presents itself as fictional cheating
        software. No cheats are provided by On the Box.
    </div>
</main>
