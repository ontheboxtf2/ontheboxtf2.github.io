<script lang="ts">
    import { useScrolled } from './scrolled'
    import clsx from 'clsx'
    import HeaderButton from './HeaderButton.svelte'
    import ButtonOutline from './ButtonOutline.svelte'
    import { onMount } from 'svelte'
    import { localStore } from './local-store'
    import { installed } from './installed'

    const scrolled = useScrolled()

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

<nav
    class={clsx(
        'sticky top-0 z-10 flex h-16 w-full items-center justify-end gap-5 px-4 text-green-600 backdrop-blur-lg transition-colors duration-500 md:gap-8 md:px-7',
        $scrolled ? 'bg-green-900/20' : 'bg-black'
    )}>
    <a
        href="/"
        class={clsx(
            'relative mr-auto flex cursor-pointer items-center gap-3 bg-green-600 px-3 py-0.5 transition-colors duration-500 hover:bg-green-500',
            $scrolled ? 'text-[rgb(6,46,21)]' : 'text-black'
        )}>
        <div class="mt-px -mb-px text-2xl font-bold tracking-tighter">
            On the Box
        </div>
        <div
            class="absolute -right-12 top-0 mb-auto bg-green-600 px-1.5 text-xs font-bold tracking-tight">
            BETA
        </div>
    </a>
    <div class="hidden md:contents">
        <a href="/#testimonials">
            <HeaderButton>Testimonials</HeaderButton>
        </a>
        <a href="/#features">
            <HeaderButton>Features</HeaderButton>
        </a>
    </div>
    {#if installable}
        <a href="/app"><ButtonOutline size="sm">Install</ButtonOutline></a>
    {:else}
        <a href="/app">
            <ButtonOutline size="sm">Boot</ButtonOutline>
        </a>
    {/if}
</nav>
