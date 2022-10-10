<script lang="ts">
    import { useScrolled } from './scrolled'
    import clsx from 'clsx'
    import HeaderButton from './HeaderButton.svelte'
    import ButtonOutline from './ButtonOutline.svelte'

    const scrolled = useScrolled()
</script>

<nav
    class={clsx(
        'sticky top-0 z-10 flex h-16 w-full items-center justify-end gap-5 px-4 text-green-600 backdrop-blur-lg transition-colors duration-500 md:gap-8 md:px-7',
        $scrolled ? 'bg-green-900/20' : 'bg-black'
    )}>
    <a
        href="/"
        class={clsx(
            'mr-auto flex cursor-pointer items-center gap-3 bg-green-600 px-3 py-0.5 transition-colors duration-500 hover:bg-green-500',
            $scrolled ? 'text-[rgb(6,46,21)]' : 'text-black'
        )}>
        <div class="mt-px -mb-px text-2xl font-bold tracking-tighter">
            On the Box
        </div>
    </a>
    <div class="hidden md:contents">
        <HeaderButton>Examples</HeaderButton>
        <HeaderButton>Comparisons</HeaderButton>
    </div>
    <ButtonOutline size="sm">Install</ButtonOutline>
</nav>
