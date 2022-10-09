import { onMount } from 'svelte'
import { writable, derived } from 'svelte/store'

export const useScrolled = () => {
    const scrollPos = writable(0)
    onMount(() => {
        scrollPos.set(document.documentElement.scrollTop)
        document.addEventListener(
            'scroll',
            () => {
                scrollPos.set(document.documentElement.scrollTop)
            },
            false
        )
    })

    return derived([scrollPos], ([$scrollPos]) => $scrollPos > 50, false)
}
