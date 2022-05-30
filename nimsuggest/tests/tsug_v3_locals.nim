
proc localFunction() = discard

proc localFunction2() =
  let localVariable = 1
  echo loca#[!]#



discard """
$nimsuggest --v3 --tester $file
>sug $1
sug	skProc	tsug_v3_locals.localFunction	proc (){.noSideEffect, gcsafe, locks: 0.}	/home/yyoncho/Sources/nim/Nim/nimsuggest/tests/tsug_v3_locals.nim	2	5	""	100
"""
