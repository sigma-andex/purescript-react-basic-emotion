{ name = "elmish-emotion"
, dependencies =
  [ "colors"
  , "console"
  , "effect"
  , "foreign"
  , "foreign-object"
  , "numbers"
  , "prelude"
  , "psci-support"
  , "elmish"
  , "elmish-html"
  , "typelevel-prelude"
  , "unsafe-reference"
  ]
, packages = ./packages.dhall
, sources = [ "src/**/*.purs" ]
, license = "Apache-2.0"
, repository = "https://github.com/lumihq/purescript-react-basic-emotion"
}
