
proc localFunction() = discard

#[!]#

proc localFunction2(): string =
  #[!]#
  let variable = 1
  #[!]#

discard """
$nimsuggest --v3 --tester $file
>sug $1
use	skProc	tsug_v3_locals.localFunction	proc ()	$file	2	5	""	100
>sug $2
use	skProc	tsug_v3_locals.localFunction	proc ()	$file	2	5	""	100
use	skProc	tsug_v3_locals.localFunction2	proc (): string	$file	6	5	""	100
>use $3
use	skProc	tsug_v3_locals.localFunction	proc ()	$file	2	5	""	100
use	skProc	tsug_v3_locals.localFunction2	proc (): string	$file	6	5	""	100
"""
