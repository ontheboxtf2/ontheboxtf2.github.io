<script>
    import ButtonOutline from '$lib/ButtonOutline.svelte'
    import Header from '$lib/Header.svelte'
    import FontAwesomeIcon from '$lib/FontAwesomeIcon.svelte'
    import {
        faAngleRight,
        faArrowsTurnToDots,
        faBoxOpen,
        faChalkboard,
        faCrosshairs,
        faDraftingCompass,
        faGraduationCap,
        faMicrochip,
        faShieldAlt,
        faUserSecret,
    } from '@fortawesome/free-solid-svg-icons'
    import { onMount } from 'svelte'
    import { localStore } from '$lib/local-store'
    import { installed } from '$lib/installed'

    let installable = true
    onMount(() => {
        const installedSync = localStore(installed, 'installed')

        return installedSync.subscribe((inst) => {
            if (inst) {
                installable = false
            }
        })
    })
</script>

<Header />
<main
    class="flex min-h-[calc(100vh-4rem)] w-[100vw] flex-col gap-20 bg-black px-8 pb-6 pt-12 text-green-600 md:gap-36">
    <div class="flex flex-col items-center">
        <div class="text-lg">Want to be on top? Get</div>
        <div
            class="bg-green-600 px-4 text-[2.75rem] font-bold tracking-tighter text-black">
            <div class="mt-px -mb-px">On the Box</div>
        </div>
        <div class="mt-4 text-base">A gateway to wild skill in TF2.</div>
    </div>
    <div class="mx-auto -mt-6 flex w-72 flex-col items-center md:-mt-8">
        Change the game
        {#if installable}
            <a href="/app"><ButtonOutline>Install Now</ButtonOutline></a>
        {:else}
            <a href="steam://connect/dm1.sappho.io:27315">
                <ButtonOutline>Launch</ButtonOutline>
            </a>
        {/if}
    </div>
    <div
        class="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:place-items-center">
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
        <div class="mx-auto mt-4 mb-2 text-3xl font-bold md:col-span-2">
            100% free forever
        </div>
        <div class="mx-auto md:col-span-2">
            <ButtonOutline>See More</ButtonOutline>
        </div>
    </div>
    <div class="-mx-8 bg-green-900/20 py-16 px-8">
        <div
            class="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:place-items-center">
            <div>
                <div class="text-2xl">Testimonials</div>
                <div class="text-xs">Identities hidden for privacy</div>
            </div>
            <div class="md:col-start-2">
                "I was nervous heading to LAN, but with <strong
                    >On The Box</strong
                >, I was able to perform better than ever." - **ile
            </div>
            <div class="md:col-start-2">
                "I'm new to competitive and <strong>On The Box</strong> has allowed
                me to jump straight in with the best" - ***endlynoodles
            </div>
            <div class="md:col-start-2">
                "I only play casual, but I've been having a lot more fun since I
                picked up <strong>On The Box</strong>. Now I always make it fat
                like my favorite streamer and I always end on a W." -
                ***ditforlife
            </div>
            <div class="md:col-start-2">
                "I only play bball these days and I gotta tell ya my rockets are
                CRISP when I'm #onthebox." - ***ketball.barry.99
            </div>
        </div>
    </div>
    <div
        class="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:place-items-center">
        <div>
            <div class="text-2xl font-bold">Compatilibity?</div>
            <div class="mb-2 text-sm">We do it all.</div>
            <div class="grid grid-cols-[auto_1fr] items-center gap-2 text-xl">
                <FontAwesomeIcon icon={faCrosshairs} fixedWidth />
                <div>Casual</div>
                <FontAwesomeIcon icon={faCrosshairs} fixedWidth />
                <div>Competitive</div>
                <FontAwesomeIcon icon={faCrosshairs} fixedWidth />
                <div>MGE</div>
                <FontAwesomeIcon icon={faCrosshairs} fixedWidth />
                <div>DM</div>
                <FontAwesomeIcon icon={faCrosshairs} fixedWidth />
                <div>The list goes on...</div>
            </div>
        </div>
        <div>
            <div class="text-2xl font-bold">Level up your brain</div>
            <div class="mb-2 text-sm">It's not all about mechies. Get our</div>
            <div class="grid grid-cols-[auto_1fr] items-center gap-2 text-xl">
                <FontAwesomeIcon icon={faGraduationCap} fixedWidth />
                <div>Training courses</div>
                <FontAwesomeIcon icon={faArrowsTurnToDots} fixedWidth />
                <div>Strats</div>
                <FontAwesomeIcon icon={faChalkboard} fixedWidth />
                <div>Tips and tricks</div>
                <FontAwesomeIcon icon={faDraftingCompass} fixedWidth />
                <div>Groundbreaking theorycrafting</div>
            </div>
            <div class="mt-2 text-xl">
                From <strong>real</strong> pros. All 100% free.
            </div>
        </div>
        <div class="mx-auto mt-6 -mb-4 text-5xl md:col-span-2">
            <FontAwesomeIcon icon={faBoxOpen} />
        </div>
        <div class="mx-auto md:col-span-2">
            <ButtonOutline>Get it</ButtonOutline>
        </div>
    </div>
    <div class="-mx-8 bg-green-900/20 py-16 px-8">
        <div
            class="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:place-items-center">
            <div>
                <div class="text-2xl">Results</div>
                <div class="text-sm">The proof is in the pudding</div>
            </div>
            <div class="md:col-start-2">
                <iframe
                    src="https://www.youtube.com/embed/9NZDwZbyD23us"
                    title="The Pudding"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    class="aspect-[2.34] h-60 max-w-full"
                    allowfullscreen />
            </div>
        </div>
    </div>
    <div class="mt-auto max-w-lg text-xs">
        This site is a work of satire. No cheats are provided by On the Box.
    </div>
</main>
