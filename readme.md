# React Basics 🍎

# Food Ordering App

Header

- Logo
- Nav items

Body

- Search
- Restaurant Card Conatiner
  - Restaurant Cards
  - Img
  - Name of res, star rating, cuisine, delivery time

Footer

- Copyright
- Links
- Address
- Contact

# Import/Export

There are 2 types:

- Default Export/Import
  export default Component/Variable/Object
  import Component from "path"

- Named Export /Import
  export {Component,Variable,Object}
  import {Component} from "path"

eg. in constants.js

https://javascript.info/import-export

Technically, we may have both default and named exports in a single module, but in practice people usually don’t mix them. A module has either named exports or the default one.

# React Hooks

They are normal JS utility functions written inside react module

- useState() - Superpowerful state variables in react
  https://github.com/acdlite/react-fiber-architecture?tab=readme-ov-file

- useEffect()

# 2 types of Routing in web apps

- Client Side Routing - no network call made, everything is on Client Side
- Server Side Routing
