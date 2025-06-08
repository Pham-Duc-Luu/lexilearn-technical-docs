import { icons as devicon } from '@iconify-json/devicon';
import { icons as logos } from '@iconify-json/logos';
import { icons as material_icon } from '@iconify-json/material-icon-theme';
import { icons as material_symbols } from '@iconify-json/material-symbols';
import { icons as mdi } from '@iconify-json/mdi';
import { icons as simple_icons } from '@iconify-json/simple-icons';
import Mermaid from '@theme/Mermaid';
import mermaid from 'mermaid';

export default function FlashcardLinkedlistClassDiagram() {
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
    {
      name: simple_icons.prefix, // To use the prefix defined in the icon pack
      icons: simple_icons,
    },
    {
      name: mdi.prefix, // To use the prefix defined in the icon pack
      icons: mdi,
    },
  ]);

  return (
    <Mermaid
      value={`
     classDiagram
    note "From Duck till Zebra"
    Animal <|-- Duck
    note for Duck "can fly\ncan swim\ncan dive\ncan help in debugging"
    Animal <|-- Fish
    Animal <|-- Zebra
    Animal : +int age
    Animal : +String gender
    Animal: +isMammal()
    Animal: +mate()
    class Duck{
        +String beakColor
        +swim()
        +quack()
    }
    class Fish{
        -int sizeInFeet
        -canEat()
    }
    class Zebra{
        +bool is_wild
        +run()
    }

        
    `}></Mermaid>
  );
}
