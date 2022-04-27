# tests for use and strutures

type
  Foo* = ref object of RootObj
    bar*: string

proc test(f: Foo) =
  echo f.#[!]#bar

discard """
$nimsuggest --tester $file
>use $1
def	skField	t0use_structure.Foo.bar	string	$file	5	4	""	100
use	skField	t0use_structure.Foo.bar	string	$file	8	9	""	100
"""
