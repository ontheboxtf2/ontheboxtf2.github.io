<script lang="ts">
    import clsx from 'clsx'

    export let size: 'lg' | 'sm' = 'lg'
</script>

<button
    type="button"
    class={clsx(
        'cursor-pointer text-lg text-green-600 ring-2 ring-inset ring-green-600 hover:bg-green-900/40',
        {
            lg: 'px-6 py-3',
            sm: 'px-5 py-1',
        }[size]
    )}
    on:click>
    <slot />
</button>
