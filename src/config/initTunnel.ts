import localtunnel from "localtunnel";

export const initTunnel = async (port: number | string, subdomain: string): Promise<localtunnel.Tunnel> => {
  const tunnel = await localtunnel({ port: +port, subdomain});
  console.log(`port: ${port} url: ${tunnel.url}`);
  return await tunnel;
};
