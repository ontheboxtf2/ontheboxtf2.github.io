<!-- NOTE: This is a placeholder until https://github.com/FortAwesome/svelte-fontawesome hits npm. -->
<script context="module">
    // Fix flashing icon size css https://medium.com/@fabianterh/fixing-flashing-huge-font-awesome-icons-on-a-gatsby-static-site-787e1cfb3a18
    import { config } from '@fortawesome/fontawesome-svg-core'
    import '@fortawesome/fontawesome-svg-core/styles.css'
    config.autoAddCss = false
</script>

<script lang="ts">
    import {
        library,
        icon as generateIcon,
    } from '@fortawesome/fontawesome-svg-core'
    import type { IconDefinition } from '@fortawesome/free-solid-svg-icons'
    import clsx from 'clsx'

    export let icon: IconDefinition
    let className = ''
    export { className as class }
    export let fixedWidth = false

    $: library.add(icon)

    $: html =
        generateIcon(
            { prefix: 'fas', iconName: icon.iconName },
            {
                classes: clsx(className, fixedWidth ? 'fa-fw' : undefined),
            }
        )?.html ?? ''
</script>

<!-- We're trusting the FontAwesome package here to provide safe (XSS free) html... but by importing the pacakge we have to trust their source isn't nefarious in the first place. -->
<!-- eslint-disable-next-line svelte/no-at-html-tags -->
{@html html}
