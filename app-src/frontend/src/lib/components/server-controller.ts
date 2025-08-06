export type TServer = {
  id: string;
  name: string;
  connectInfoId: string;
};

export const getServerById = (
  id: string,
  servers: Array<TServer>,
): TServer | null => {
  const filteredServers: Array<TServer> = servers.filter((s) => s.id === id);

  if (filteredServers.length <= 0) {
    return null;
  }

  return filteredServers[0];
};

export const createNewServer = (
  name: string,
  connectInfoId: string,
): TServer => {
  const newServer: TServer = {
    id: crypto.randomUUID(),
    name,
    connectInfoId: connectInfoId,
  };

  return newServer;
};
