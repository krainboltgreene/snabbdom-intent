/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */

import {test} from "tap"

import toIntentSubtree from "./"

test("Singular without parameters", ({same, end}) => {
  same(
    toIntentSubtree(
      {}
    )(
      "change"
    )([
      "fetchSearchResult",
    ]),
    {
      fetchSearchResult: {
        name: "fetchSearchResult",
        trigger: "change",
        parameters: {},
      },
    }
  )
  end()
})

test("Singular with parameters", ({same, end}) => {
  same(
    toIntentSubtree(
      {
        form: "search",
        field: "query",
      }
    )(
      "change"
    )([
      "fetchSearchResult",
    ]),
    {
      fetchSearchResult: {
        name: "fetchSearchResult",
        trigger: "change",
        parameters: {
          form: "search",
          field: "query",
        },
      },
    }
  )
  end()
})

test("Multiple without parameters", ({same, end}) => {
  same(
    toIntentSubtree(
      {}
    )(
      "change"
    )([
      "fetchSearchResult",
      "updateFormField",
    ]),
    {
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
    }
  )
  end()
})

test("Multiple with parameters", ({same, end}) => {
  same(
    toIntentSubtree(
      {
        form: "search",
        field: "query",
      }
    )(
      "change"
    )([
      "fetchSearchResult",
      "updateFormField",
    ]),
    {
      updateFormField: {
        name: "updateFormField",
        trigger: "change",
        parameters: {
          form: "search",
          field: "query",
        },
      },
      fetchSearchResult: {
        name: "fetchSearchResult",
        trigger: "change",
        parameters: {
          form: "search",
          field: "query",
        },
      },
    }
  )
  end()
})
