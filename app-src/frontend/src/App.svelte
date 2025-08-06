<script lang="ts">
    import TabBar from "./lib/components/tab-bar/TabBar.svelte";
</script>

<main id="app-container">
    <TabBar />
</main>

<style>
    #app-container {
        display: flex;
        min-height: 800px;
        min-width: 1280px;
        overflow: hidden;
    }
</style>
