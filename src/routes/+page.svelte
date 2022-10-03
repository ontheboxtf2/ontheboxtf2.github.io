<script>
    import FontAwesomeIcon from '$lib/FontAwesomeIcon.svelte'
    import { faBoxOpen } from '@fortawesome/free-solid-svg-icons'
</script>

<main
    class="flex min-h-[100vh] w-[100vw] flex-col gap-8 bg-black px-8 py-12 text-green-600">
    <div class="flex flex-col items-center">
        <div class="text-6xl"><FontAwesomeIcon icon={faBoxOpen} /></div>
        <div class="text-gl">Want to be on top? Get</div>
        <div class="text-4xl font-bold">On the Box</div>
    </div>
    <div
        class="grid items-center gap-8 sm:grid-cols-1 md:grid-cols-2 md:place-items-center">
        <div class="text-xl">
            <div class="text-2xl font-bold">What can The Box do for you?</div>
            <div>> Perform your <i>best</i></div>
            <div>> <i>Impress</i> your peers</div>
            <div>> <i>Eliminate</i> the competition</div>
        </div>
        <div class="text-xl">
            <div class="text-2xl font-bold">The Box is unbeatable</div>
            <div>> Lower RAM usage than LmaoBox</div>
            <div>> Better accuracy than Cathook</div>
            <div>> Undetectable by VAC</div>
        </div>
    </div>
    <div class="-mx-8 bg-green-900/20 py-4 px-8">
        <div
            class="grid items-center gap-8 sm:grid-cols-1 md:grid-cols-2 md:place-items-center">
            <div>
                <div class="text-2xl">Testimonials</div>
                <div class="text-xs">
                    Identities hidden for privacy purposes
                </div>
            </div>
            <div>
                "I was nervous heading to LAN, but with <strong
                    >On The Box</strong
                >, I was able to perform better than ever." - **ile
            </div>
        </div>
    </div>
    <div class="mt-auto max-w-lg text-sm">
        This site is a work of satire that presents presonal training as if it
        were cheating software. No cheats are provided by On the Box.
    </div>
</main>
