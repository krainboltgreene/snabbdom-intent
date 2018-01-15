/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
import {test} from "tap"

import intent from "./"

test("Single Trigger + Multiple Actions + Parameters", ({same, end}) => {
  same(
    intent({
      field: "query",
      form: "search",
    })({
      change: [
        "updateFormField",
        "fetchSearchResult",
      ],
    })({
      selector: "#id.class",
      children: ["Hello, world"],
    }),
    {
      selector: "#id.class",
      children: ["Hello, world"],
      data: {
        intents: {
          change: {
            updateFormField: {
              name: "updateFormField",
              trigger: "change",
              parameters: {
                field: "query",
                form: "search",
              },
            },
            fetchSearchResult: {
              name: "fetchSearchResult",
              trigger: "change",
              parameters: {
                field: "query",
                form: "search",
              },
            },
          },
        },
      },
    }
  )
  end()
})
