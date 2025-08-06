<script lang="ts">
    export let serverId: string = "";
    export let serverName: string = "";
</script>

<div class={`server ${serverId}`}>
    <h1>{serverName.split("")[0]}</h1>
</div>

<style></style>
