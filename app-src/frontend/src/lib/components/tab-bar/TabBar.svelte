<script lang="ts">
    import { createNewTab, type TTab } from "./tab-controller";
    import Tab from "./Tab.svelte";

    let tabs: Array<TTab>;

    const addNewTab = (
        title: string,
        currentIndex: number,
        action: (id: string) => void,
    ) => {
        tabs.push(createNewTab(title, currentIndex, action));
    };
</script>

<div id="tab-bar">
    <div id="tabs">
        {#each tabs as t}
            <Tab
                bind:tabId={t.id}
                bind:tabTitle={t.title}
                bind:currentIndex={t.currentIndex}
                bind:tabAction={t.tabAction}
            />
        {/each}
    </div>
</div>

<style></style>
