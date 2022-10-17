<script lang="ts">
    import ButtonOutline from './ButtonOutline.svelte'
    import FontAwesomeIcon from '$lib/FontAwesomeIcon.svelte'
    import {
        faArrowsTurnToDots,
        faChalkboard,
        faDraftingCompass,
        faPlaneDeparture,
    } from '@fortawesome/free-solid-svg-icons'
    import { centerPage } from './center-page'
    import Content from './Content.svelte'
</script>

<div class="grid h-full grid-rows-[auto_1fr] gap-4 md:mx-8 md:gap-20">
    <div
        class="mx-auto w-fit bg-green-600 py-2 px-6 text-4xl font-bold text-black">
        Command Center
    </div>
    <div
        class="grid h-full grid-rows-[auto_1fr] gap-4 md:mx-0 md:grid-cols-[auto_1fr] md:gap-x-20">
        <div
            class="flex flex-row items-start justify-center gap-4 md:flex-col md:justify-start">
            <ButtonOutline
                highlight={$centerPage === 'training'}
                on:click={() => {
                    $centerPage = 'training'
                }}>
                <FontAwesomeIcon icon={faPlaneDeparture} fixedWidth />
                <div class="hidden md:block">Launch</div>
            </ButtonOutline>
            <ButtonOutline
                highlight={$centerPage === 'strats'}
                on:click={() => {
                    $centerPage = 'strats'
                }}>
                <FontAwesomeIcon icon={faArrowsTurnToDots} fixedWidth />
                <div class="hidden md:block">Strats</div>
            </ButtonOutline>
            <ButtonOutline
                highlight={$centerPage === 'tips'}
                on:click={() => {
                    $centerPage = 'tips'
                }}>
                <FontAwesomeIcon icon={faChalkboard} fixedWidth />
                <div class="hidden md:block">Tips and Tricks</div>
            </ButtonOutline>
            <ButtonOutline
                highlight={$centerPage === 'theorycrafting'}
                on:click={() => {
                    $centerPage = 'theorycrafting'
                }}>
                <FontAwesomeIcon icon={faDraftingCompass} fixedWidth />
                <div class="hidden md:block">Theory</div>
            </ButtonOutline>
        </div>
        <div
            class="ml-6 flex max-h-[calc(100vh-14rem)] flex-col gap-20 overflow-y-auto pr-8 md:-mr-8 md:max-h-[calc(100vh-15rem)]">
            {#if $centerPage === 'training'}
                <Content title="Aim Enhancer" author="**ile">
                    <a href="steam://connect/dm1.sappho.io:27315">
                        <ButtonOutline>Launch Aim Enhancer</ButtonOutline>
                    </a>
                </Content>
                <Content title="Movement Boost" author="**ic7">
                    <a href="steam://connect/dm1.sappho.io:27315">
                        <ButtonOutline>Launch Movement Mods</ButtonOutline>
                    </a>
                </Content>
                <Content title="Radical Rockets" author="***cketier99">
                    <a href="steam://connect/dm1.sappho.io:27315">
                        <ButtonOutline>Launch Radical Rockets</ButtonOutline>
                    </a>
                </Content>
            {:else if $centerPage === 'strats'}
                <Content title="Engie Box Push" author="***endlynoodles">
                    Engie builds box. Engie picks up box. Engie walks down ramp.
                    Team pushes while engie distracts.
                </Content>
                <Content title="Thanksgiving Dinner" author="*******o">
                    Buff up teammates. Flank scout runs in and blows up. Roamer
                    runs in and blows up. Demo double sticky sacks (missing 3/4
                    pipes, not using stickies). Then (and only then) the rest of
                    your team runs forward into their combo.
                </Content>
                <Content title="Flush em Out" author="*******o">
                    During a stalemate between 2nd and their last, use uber on
                    2nd. Do not walk into the other team's last. Be sure the
                    other team sees your uber. Wait for the other team to push
                    out of last and fail. Win the round.
                </Content>
                <Content title="Timer Tamer" author="*******o">
                    <img
                        src="./timertamer.png"
                        alt="Timer Tamer"
                        class="max-w-xs" />
                    On Sunshine after pushing the other team into their last, leave
                    2nd half capped. Do not fully capture 2nd point. Feed a player
                    and respawn them on engie. Build a teleporter. Build a sentry
                    gun watching shutter and bats. Let your engie take over keeping
                    the point half capped. Enjoy infinite overtime while you repeatedly
                    single sack until their last hold is eventually broken.
                </Content>
            {:else if $centerPage === 'tips'}
                <Content title="Movement Tax" author="**per">
                    Be careful when playing scout. Your soldiers have to pay the
                    movement tax.
                </Content>
                <Content title="Ammo" author="***endlynoodles">
                    Demo has 12 ammo. That's more than every other class.
                </Content>
                <Content title="Soldier Coordination" author="***endlynoodles">
                    As pocket soldier, bomb when you see your roaming soldier on
                    the right side of the kill feed.
                </Content>
                <Content title="50 Into Direct = Drop" author="*armaloo">
                    When sacking, barely hit your first rocket so their medic
                    gets a crappy surf and doesn't go anywhere. They'll be
                    feeling comfy at ~102 hp. Hit them with a direct for a
                    guaranteed drop.
                </Content>
            {:else}
                <Content title="Oyster Theory" author="**per">
                    Every class has its oyster. When you're on scout, the world
                    is your oyster. But demo? Demo has its own oysters. It's all
                    about choosing the right oysters for the right classes.
                    <br />
                    <br />
                    Here's an example of a scout putting oyster theory into action.
                    Watch their movement closely.
                    <br />
                    <br />
                    <iframe
                        src="https://www.youtube.com/embed/NBH3UvlZo90"
                        title="Scout Movement"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        class="aspect-video w-full"
                        allowfullscreen />
                </Content>
                <Content title="Shoestring Theory" author="**ile">
                    <img
                        src="https://wiki.teamfortress.com/w/images/thumb/a/a6/Buck_Turner_All-Stars.png/250px-Buck_Turner_All-Stars.png"
                        loading="lazy"
                        alt="Shoes"
                        class="max-w-xs" />
                    Playing scout is like playing with your shoelace untied. Your
                    team keeps your shoelaces loose. Do something wrong and you'll
                    trip and fall. Be sure your shoes are tied before taking a fight.
                </Content>
            {/if}
        </div>
    </div>
</div>
