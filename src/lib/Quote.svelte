<script lang="ts">
    import Avatar from './Avatar.svelte'

    export let name: string
    export let avatarUrl: string
</script>

<div
    class="grid grid-rows-[1fr_auto] items-start gap-2 md:grid-cols-[1fr_auto] md:items-center md:gap-4">
    <div class="text-base md:text-lg">"<slot />"</div>
    <div class="flex flex-col items-end gap-2 md:w-40 md:items-center">
        <Avatar src={avatarUrl} />
        {name}
    </div>
</div>
