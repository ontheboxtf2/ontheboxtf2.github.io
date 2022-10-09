<script lang="ts">
    import FontAwesomeIcon from './FontAwesomeIcon.svelte'
    import { faBoxOpen } from '@fortawesome/free-solid-svg-icons'
    import { useScrolled } from './scrolled'
    import clsx from 'clsx'
    import HeaderButton from './HeaderButton.svelte'

    const scrolled = useScrolled()
</script>

<nav
    class={clsx(
        'sticky top-0 z-10 flex h-16 w-full items-center justify-end gap-5 px-4 text-green-600 backdrop-blur-lg transition-colors duration-500 md:gap-8 md:px-7',
        $scrolled ? 'bg-green-900/20' : 'bg-black'
    )}>
    <div
        class="mr-auto flex cursor-pointer items-center gap-3 hover:text-green-500">
        <div class="text-4xl">
            <FontAwesomeIcon icon={faBoxOpen} />
        </div>
        <div class="hidden text-2xl font-bold tracking-tighter md:block">
            On the Box
        </div>
    </div>
    <HeaderButton>Learn More</HeaderButton>
    <HeaderButton>Box VS</HeaderButton>
    <div class="font-black">
        <HeaderButton>Install</HeaderButton>
    </div>
</nav>
