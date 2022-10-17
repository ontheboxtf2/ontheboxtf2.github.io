<script lang="ts">
    export let title: string
    export let author: string
</script>

<div class="flex flex-col gap-6">
    <div class="text-4xl font-bold">
        {title}
    </div>
    <div class="-mt-4 text-xl font-bold">
        by {author}
    </div>
    <div class="flex flex-col gap-4 text-lg">
        <slot />
    </div>
</div>
