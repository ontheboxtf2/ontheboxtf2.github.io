<script lang="ts">
    export let src: string
</script>

<div class="aspect-square w-20 overflow-hidden rounded-full">
    <img
        {src}
        class="aspect-square w-full blur-sm"
        loading="lazy"
        alt="Avatar" />
</div>
