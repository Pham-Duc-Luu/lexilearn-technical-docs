import Mermaid from "@theme/Mermaid";
import mermaid from "mermaid";
import {icons as logos} from "@iconify-json/logos";
import {icons as material_icon} from "@iconify-json/material-icon-theme";
import {icons as devicon} from "@iconify-json/devicon";
import {icons as material_symbols} from "@iconify-json/material-symbols";
import {icons as simple_icons} from "@iconify-json/simple-icons";
import {icons as mdi} from "@iconify-json/mdi";
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
    }, {
        name: simple_icons.prefix, // To use the prefix defined in the icon pack
        icons: simple_icons,
    },
    {
        name: mdi.prefix, // To use the prefix defined in the icon pack
        icons: mdi,
    },
]);

export  function  ImageWorkFlow(){
    return  <Mermaid
        value={`
          flowchart RL
                Google_API@{ icon: "devicon:google", label: "Google custom search api", pos: "t", h: 60 }
                Upsplash_API@{ icon: "material-symbols:image-search", label: "upsplash api", pos: "t", h: 60 }
                Search_image_api@{ icon: "mdi:api", label: "Search image api", pos: "t", h: 60 }
                Backend_server@{ icon: "logos:spring", label: "Search image api", pos: "t", h: 60 }
                Elasticsearch@{ icon: "devicon:elasticsearch", label: "Elasticsearch", pos: "t", h: 60 }
                    
                subgraph third-party apis 
                    direction RL
                Upsplash_API --> Backend_server
               
                Google_API --> Backend_server
                end
                
                
                subgraph ES
                 direction TB
                Backend_server --> Elasticsearch
                end
                Backend_server --> Search_image_api
                
                
                `}
    />
}