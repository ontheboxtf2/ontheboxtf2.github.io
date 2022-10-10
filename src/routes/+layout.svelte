<script lang="ts">
    import '../app.css'
</script>

<slot />

<style global>
    body::-webkit-scrollbar {
        width: 1rem;
    }

    body::-webkit-scrollbar-track {
        background: rgba(22, 163, 74, 0.1);
    }

    body::-webkit-scrollbar-thumb {
        background: none;
        border: 2px solid rgb(22, 163, 74);
    }
    body::-webkit-scrollbar-thumb:hover {
        background: rgba(22, 163, 74, 0.1s);
    }
</style>
