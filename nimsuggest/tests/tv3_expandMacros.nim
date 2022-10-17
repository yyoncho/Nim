import std/macros
import asyncdispatch

macro replyMacro(arg: untyped): untyped =
  result = quote do:
    `arg`

macro helloMacro*(prc: untyped): untyped =
  result = quote do:
    proc helloProc(): string = replyMacro("Hello")

#[!]#proc helloProc(): void {.helloMacro.}=
  discard

proc call(i: int): void =
  discard

#[!]#replyMacro(replyMacro(call(2)))

#[!]#replyMacro call 10

#[!]#proc asyncMacro(uri: string): Future[void] {.async.} =
  let a = replyMacro "inMacro"

discard """
$nimsuggest --v3 --tester $file
>expand $2  2
expand	skUnknown				0	0	"call(2)"	0
>expand $2  all
expand	skUnknown				0	0	"call(2)"	0
>expand $2  0
expand	skUnknown				0	0	"replyMacro(replyMacro(call(2)))"	0
>expand $1
expand	skUnknown				0	0	"proc helloProc(): string =\x0A  result = \"Hello\"\x0A"	0
>expand $1  0
expand	skUnknown				0	0	"proc helloProc(): void {.helloMacro.} =\x0A  discard\x0A"	0
>expand $3  1
expand	skUnknown				0	0	"call 10"	0
>expand $4  0
expand	skUnknown				0	0	"proc asyncMacro(uri: string): Future[void] {.async.} =\x0A  let a = replyMacro \"inMacro\"\x0A"	0
"""
