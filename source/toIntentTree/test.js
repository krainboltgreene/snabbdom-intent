/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */

import {test} from "tap"

import toIntentTree from "./"

test("Singular without parameters", ({same, end}) => {
  same(
    toIntentTree(
      {}
    )({
      change: [
        "fetchSearchResult",
      ],
    }),
    {
      change: {
        fetchSearchResult: {
          name: "fetchSearchResult",
          trigger: "change",
          parameters: {},
        },
      },
    }
  )
  end()
})

test("Singular with parameters", ({same, end}) => {
  same(
    toIntentTree({
      field: "query",
      form: "search",
    })({
      change: [
        "fetchSearchResult",
      ],
    }),
    {
      change: {
        fetchSearchResult: {
          name: "fetchSearchResult",
          trigger: "change",
          parameters: {
            field: "query",
            form: "search",
          },
        },
      },
    }
  )
  end()
})

test("Multiple without parameters", ({same, end}) => {
  same(
    toIntentTree(
      {}
    )({
      change: [
        "updateFormField",
        "fetchSearchResult",
      ],
    }),
    {
      change: {
        updateFormField: {
          name: "updateFormField",
          trigger: "change",
          parameters: {},
        },
        fetchSearchResult: {
          name: "fetchSearchResult",
          trigger: "change",
          parameters: {},
        },
      },
    }
  )
  end()
})

test("Multiple with parameters", ({same, end}) => {
  same(
    toIntentTree({
      field: "query",
      form: "search",
    })({
      change: [
        "updateFormField",
        "fetchSearchResult",
      ],
    }),
    {
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
    }
  )
  end()
})
