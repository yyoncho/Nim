# tests for use and strutures

type
  Foo* = ref object of RootObj
    ba#[!]#r*: string

proc test(f: Foo) =
  echo f.ba#[!]#r

discard """
$nimsuggest --tester $file
>use $1
def	skField	t0use_structure.Foo.bar	string	$file	5	4	""	100
use	skField	t0use_structure.Foo.bar	string	$file	8	9	""	100
>use $2
def	skField	t0use_structure.Foo.bar	string	$file	5	4	""	100
use	skField	t0use_structure.Foo.bar	string	$file	8	9	""	100
"""
