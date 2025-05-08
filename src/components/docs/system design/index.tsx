import { icons as devicon } from '@iconify-json/devicon';
import { icons as logos } from '@iconify-json/logos';
import { icons as material_icon } from '@iconify-json/material-icon-theme';
import { icons as material_symbols } from '@iconify-json/material-symbols';

import Mermaid from '@theme/Mermaid';
import mermaid from 'mermaid';
mermaid.registerIconPacks([
  {
    name: logos.prefix, // To use the prefix defined in the icon pack
    icons: logos,
  },
  {
    name: material_icon.prefix, // To use the prefix defined in the icon pack
    icons: material_icon,
  },
  {
    name: devicon.prefix, // To use the prefix defined in the icon pack
    icons: devicon,
  },
  {
    name: material_symbols.prefix, // To use the prefix defined in the icon pack
    icons: material_symbols,
  },
]);
export default function SystemDesign({ children, color }) {

  return (
    <Mermaid
      value={`architecture-beta
                    group system[system]
                    group client[client] in system
                    service frontend(material-icon-theme:react)[frontend] in client

                    group server[server] in system
                    service apigateway(logos:aws-api-gateway)[apigateway] in server
                    service spring_boot_server(devicon:spring)[spring_boot] in server
                    service fastapi_server(devicon:fastapi)[fastapi_server] in server
                    service database1(logos:mysql)[mysql_database] in server
                    service database2(logos:mongodb-icon)[mongo_database] in server
                    service database3(logos:aws-s3)[aws_s3] in server

                    frontend:R -- L:apigateway
                    apigateway:R -- L:spring_boot_server
                    apigateway:B -- T:fastapi_server 
                    spring_boot_server:R -- L:database1      
                    fastapi_server:R -- L:database2     
                    fastapi_server:B -- L:database3      

    `}
    />
  );
}
