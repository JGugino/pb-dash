<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import { createNewServer, TServer } from "./server-controller";
    import Server from "./Server.svelte";

    const dispatch = createEventDispatcher();

    let servers: Array<TServer> = [];

    const tabCreationRequest = (type: string) => {
        dispatch("tabCreationRequest", { type: type });
    };
</script>

<div id="server-menu">
    <div id="servers">
        {#each servers as server}
            <Server serverId={server.id} serverName={server.name} />
        {/each}
        <button
            on:click={() => {
                tabCreationRequest("add-server");
            }}>Add Server</button
        >
    </div>
</div>
