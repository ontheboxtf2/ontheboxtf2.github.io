<script>
    import Header from '$lib/Header.svelte'
    import { onMount } from 'svelte'
    import { spring } from 'svelte/motion'
    import { installed } from '$lib/installed'
    import { localStore } from '$lib/local-store'
    import CommandCenter from '$lib/CommandCenter.svelte'

    onMount(() => {
        const installedSync = localStore(installed, 'installed')
        void percent.set(100)

        const unsubPercent = percent.subscribe((perc) => {
            if (perc > 99) {
                installedSync.set(true)
            }
        })

        const unsubInstalled = installedSync.subscribe((inst) => {
            if (inst) {
                void percent.set(100, { hard: true })
            }
        })

        return () => {
            unsubPercent()
            unsubInstalled()
        }
    })

    const percent = spring(0, {
        damping: 0.98,
        stiffness: 0.007,
    })

    $: ready = $percent > 99
</script>

<Header />
<main
    class="grid h-[calc(100vh-4rem)] w-[100vw] gap-20 bg-black pb-6 pt-4 text-green-600 md:gap-36">
    {#if ready}
        <CommandCenter />
    {:else}
        <div class="mx-auto my-auto flex flex-col items-center gap-6">
            <div class="text-3xl">Installing...</div>
            <div class="flex gap-4 text-3xl">
                <div class="h-10 w-60 ring-2 ring-green-600">
                    <div
                        class="h-full bg-green-600"
                        style:width="{$percent}%" />
                </div>
                {$percent.toFixed(0)}%
            </div>
        </div>
    {/if}
</main>
