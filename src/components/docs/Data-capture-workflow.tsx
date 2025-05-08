import Mermaid from "@theme/Mermaid";
import mermaid from "mermaid";
import {icons as logos} from "@iconify-json/logos";
import {icons as material_icon} from "@iconify-json/material-icon-theme";
import {icons as devicon} from "@iconify-json/devicon";
import {icons as material_symbols} from "@iconify-json/material-symbols";
import {icons as simple_icons} from "@iconify-json/simple-icons";
import {icons as mdi} from "@iconify-json/mdi";

export default function DataCaptureWorkflow() {
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

    return <Mermaid
    value={`
       architecture-beta
        group Change_Data_Capture[Change_Data_Capture]
        group Zookeeper[Zookeeper] in Change_Data_Capture
        group system[system] in Change_Data_Capture
        
        service mysql(logos:mysql)[Database] in Change_Data_Capture
        service Debezium(material-symbols:database-search-outline)[Debezium] in Zookeeper
        service Kafka(simple-icons:apachekafka)[Kafka] in Zookeeper
        
        
        service spring_boot_server(devicon:spring)[spring_boot] in system
        service elasticsearch(logos:elasticsearch)[spring_boot] in system
        service search_API(mdi:api)[search_API] in system
    
        service kafka_consumer(material-symbols:read-more)[kafka_consumer] in Change_Data_Capture     
        
        mysql:R -- L:Debezium
        Debezium:R -- L:Kafka
        Kafka:R -- L:kafka_consumer
        
        kafka_consumer:R -- L:spring_boot_server
        spring_boot_server:R -- L:elasticsearch
        spring_boot_server:B -- L:search_API
        
    `}></Mermaid>
}