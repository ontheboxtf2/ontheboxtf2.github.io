<script>
    import ButtonOutline from '$lib/ButtonOutline.svelte'
    import Header from '$lib/Header.svelte'
    import FontAwesomeIcon from '$lib/FontAwesomeIcon.svelte'
    import {
        faAngleRight,
        faArrowsTurnToDots,
        // faBoxOpen,
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
    import Quote from '$lib/Quote.svelte'

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
    <div class="mt-36 flex flex-col items-center">
        <div class="text-lg">Want to be on top? Get</div>
        <div
            class="bg-green-600 px-4 text-[2.75rem] font-bold tracking-tighter text-black">
            <div class="mt-px -mb-px">On the Box</div>
        </div>
        <div class="mt-4 text-base">A gateway to wild skill in TF2.</div>
    </div>
    <div class="mx-auto flex w-72 flex-col items-center">
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
            <div class="mb-4 text-2xl font-bold">
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
            <div class="mb-4 text-2xl font-bold">The Box is unbeatable</div>
            <div class="grid grid-cols-[auto_1fr] items-center gap-2">
                <FontAwesomeIcon icon={faMicrochip} fixedWidth />
                <div>Lower RAM usage than LmaoBox</div>
                <FontAwesomeIcon icon={faUserSecret} fixedWidth />
                <div>Undetectable by RGL, UGC, ETF2L, etc.</div>
                <FontAwesomeIcon icon={faShieldAlt} fixedWidth />
                <div>VAC Immune</div>
            </div>
        </div>
        <div class="mx-auto mt-16 mb-14 text-3xl font-bold md:col-span-2">
            100% free forever
        </div>
        <div class="mx-auto md:col-span-2">
            <a href="#testimonials"><ButtonOutline>See More</ButtonOutline></a>
        </div>
    </div>
    <div class="-mx-8 bg-green-900/20 py-28 md:px-8" id="testimonials">
        <div class="mx-8 flex flex-col gap-12 md:mx-16">
            <div>
                <div class="text-3xl font-bold">Testimonials</div>
                <div class="text-xs">Identities hidden for privacy</div>
            </div>
            <Quote
                name="**ile"
                avatarUrl="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/01/01cded8bb4c8ba9976ea0905611c6d74f4a01b49_medium.jpg">
                I was nervous heading to LAN, but with <strong
                    >On The Box</strong
                >, I was able to perform better than ever.
            </Quote>
            <Quote
                name="***endlynoodles"
                avatarUrl="https://avatars.akamai.steamstatic.com/87f0d37e3af4ef132bfcff6636c69335fddf6170_full.jpg">
                I'm new to competitive and <strong>On The Box</strong> has allowed
                me to jump straight in with the best.
            </Quote>
            <Quote
                name="***ditforlife"
                avatarUrl="https://avatars.akamai.steamstatic.com/cd78b56fcb7cc9f74ae30b5b2add073f87bf7fdb.jpg">
                I only play casual, but I've been having a lot more fun since I
                picked up <strong>On The Box</strong>. Now I always make it fat
                like my favorite streamer and I always end on a W.
            </Quote>
            <Quote
                name="***ketball.barry.99"
                avatarUrl="https://upload.wikimedia.org/wikipedia/commons/7/7a/Basketball.png">
                I only play bball these days and I gotta tell ya my rockets are
                CRISP when I'm #onthebox.
            </Quote>
            <Quote
                name="***liblegoobular"
                avatarUrl="https://avatars.akamai.steamstatic.com/152b2eeea37c59033661471b0f817c63bce545d6_full.jpg">
                I don't really have as much time to play anymore, but <strong
                    >On The Box</strong> helps me stay on top when I get the chance
                to game.
            </Quote>
        </div>
    </div>
    <div
        class="relative grid grid-cols-1 items-center gap-y-10 md:grid-cols-2 md:place-items-center">
        <div class="absolute -top-32" id="features" />
        <div
            class="mb-4 bg-green-600 py-1 px-4 text-4xl font-bold text-black md:col-span-2 md:mb-12">
            Features
        </div>
        <div>
            <div class="text-2xl font-bold">Compatilibity?</div>
            <div class="mb-2 text-sm">We do it all.</div>
            <div
                class="my-6 grid grid-cols-[auto_1fr] items-center gap-2 text-xl">
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
            <div
                class="my-6 grid grid-cols-[auto_1fr] items-center gap-2 text-xl">
                <FontAwesomeIcon icon={faGraduationCap} fixedWidth />
                <div>Training courses</div>
                <FontAwesomeIcon icon={faArrowsTurnToDots} fixedWidth />
                <div>Strats</div>
                <FontAwesomeIcon icon={faChalkboard} fixedWidth />
                <div>Tips and tricks</div>
                <FontAwesomeIcon icon={faDraftingCompass} fixedWidth />
                <div>Groundbreaking theorycrafting</div>
                <div class="col-span-2">
                    From <strong>real</strong> pros. All 100% free.
                </div>
            </div>
        </div>
        <div class="mx-auto mt-16 mb-14 text-3xl font-bold md:col-span-2">
            <!-- <FontAwesomeIcon icon={faBoxOpen} />  -->
            Can't get it anywhere else
        </div>
        <div class="mx-auto md:col-span-2">
            <a href="/app"><ButtonOutline>Get it</ButtonOutline></a>
        </div>
    </div>
    <div class="-mx-8 bg-green-900/20 py-28 px-8">
        <div class="flex flex-col gap-8 md:mx-16">
            <div>
                <div class="text-3xl font-bold">Results</div>
                <div class="text-sm">The proof is in the pudding</div>
            </div>
            <iframe
                src="https://www.youtube.com/embed/NOLB3jQT-Gk"
                title="Box Results"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                class="aspect-video max-w-full"
                loading="lazy"
                allowfullscreen />
        </div>
    </div>
    <div class="mt-auto max-w-lg text-xs">
        This site is a work of satire. No cheats are provided by On the Box.
    </div>
</main>
