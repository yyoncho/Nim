import std/macros

macro myAssertMacroInner(arg: untyped): untyped =
  result = quote do:
    `arg`

#[!]#myAssertMacroInner(echo "X")

macro helloMacro*(prc: untyped): untyped =
  result = quote do:
    proc helloProc(): string = "Hello"

#[!]#proc helloProc(): void {.helloMacro.}=
  discard

discard """
$nimsuggest --v3 --tester $file
>expand $1
expand	skUnknown				0	0	"echo [\"X\"]"	0
>expand $2
expand	skUnknown				0	0	"proc helloProc(): string =\x0A  result = \"Hello\"\x0A"	0
"""
