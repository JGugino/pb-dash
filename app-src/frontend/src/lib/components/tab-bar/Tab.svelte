<script lang="ts">
    export let tabId: string = "";
    export let tabTitle: string = "";
    export let currentIndex: number = -1;
    export let tabAction: (id: string) => void = () => {};
</script>

<div class={`tab ${tabId}`}>
    <h1>{tabTitle}</h1>
    <button>X</button>
</div>

<style>
    .tab {
        border: 2px solid black;
    }
</style>
