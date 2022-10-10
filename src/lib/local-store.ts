import { get, type Writable } from 'svelte/store'

const errorify = (item: string | Error) =>
    item instanceof Error ? item : new Error(item)

const exceptionToData = <T>(callback: () => T) => {
    let output: T | Error
    try {
        output = callback()
    } catch (error) {
        output = errorify(error as string | Error)
    }
    return output
}

// NOTE: Alternatively, we could provide a version of writable that autosyncs since a writable is required.
export const localStore = <T>(
    store: Writable<T>,
    key: string,
    verify?: (value: unknown) => boolean // Vet the content of localStorage to be sure its valid.
) => {
    const setToDefault = () =>
        localStorage.setItem(key, JSON.stringify(get(store)))

    const currentLocalStoreValue = localStorage.getItem(key)

    // eslint-disable-next-line eqeqeq
    if (currentLocalStoreValue == undefined) {
        setToDefault()
    } else {
        const parsedLocalStoreValue = exceptionToData(
            () => JSON.parse(currentLocalStoreValue) as unknown
        )

        if (
            !(parsedLocalStoreValue instanceof Error) &&
            (verify?.(parsedLocalStoreValue) ?? true)
        ) {
            store.set(parsedLocalStoreValue as T)
        } else {
            setToDefault()

            console.warn(
                `Local storage key "${key}" reset to default value of ${JSON.stringify(
                    get(store)
                )}.`,
                ...(parsedLocalStoreValue instanceof Error
                    ? [parsedLocalStoreValue]
                    : [parsedLocalStoreValue, 'failed verify call.'])
            )
        }
    }

    store.subscribe((value) => {
        localStorage.setItem(key, JSON.stringify(value))
    })

    return store
}
