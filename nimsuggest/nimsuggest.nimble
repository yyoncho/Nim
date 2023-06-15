include "../lib/system/compilation.nim"
version = $NimMajor & "." & $NimMinor & "." & $NimPatch
author = "Andreas Rumpf"
description = "Tool for providing auto completion data for Nim source code."
license = "MIT"
bin = @["nimsuggest"]

requires "nim >= 1.1.1", "compiler >= " & version, "checksums"
