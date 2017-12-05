# snabbdom-intent

![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]

Imprint action intent onto snabbdom VirtualDOM nodes.


## Usage

This library makes it easy to determine the intent of an action on a node. Because DOM events give you the node that the event was tripped you can imprint information you'll need at the resolution of the event on the DOM node itself. Below we're saying that on changing the data of the input field we want to update in-memory state with the input field plus get autocomplete results and then on submitting the input we want to make a search request.

``` javascript
import intent from "snabbdom-intent"
import {input} from "snabbdom-helpers"

const searchWith = intent({
  change: ["updateFormField", "fetchAutocomplete"],
  submit: ["fetchSearchResults"]
})({
  form: "search",
  field: "query"
})

export default function searchField (state) {
  return input(searchWith({value: state.ephemeral.forms.search.query}))
}
```

[BADGE_TRAVIS]: https://img.shields.io/travis/krainboltgreene/snabbdom-intent.svg?maxAge=2592000&style=flat-square
[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/krainboltgreene/snabbdom-intent.svg?maxAge=2592000&style=flat-square
