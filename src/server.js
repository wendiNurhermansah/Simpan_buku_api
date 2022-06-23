import { server as _server } from '@hapi/hapi';
import {routes} from "./routes.js";

const init = async () => {
  try {

    const server = _server({
      port: 3000,
      host: 'localhost',
    });
    
    server.route(routes);
    
    await server.start();
    console.log('Server running on %s', server.info.uri);
    
  } catch (error) {
    console.log('error', error);
  } finally{
    console.log('success');
  }
 
};
await init();