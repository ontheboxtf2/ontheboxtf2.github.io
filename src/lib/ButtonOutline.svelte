<script lang="ts">
    import clsx from 'clsx'

    export let size: 'lg' | 'sm' = 'lg'
    export let highlight = false
</script>

<button
    type="button"
    class={clsx(
        'flex cursor-pointer items-center gap-4 text-lg text-green-600 ring-2 ring-inset ring-green-600 hover:bg-green-900/40',
        {
            lg: 'px-6 py-3',
            sm: 'px-5 py-1',
        }[size],
        highlight ? 'bg-green-900/40' : 'bg-transparent'
    )}
    on:click>
    <slot />
</button>
