# Test def with type definition in separate file

discard """
$nimsuggest --tester $file
>def $path/fixtures/type_using.nim:4:13
def	skField	type_def.Foo.bar	string	*fixtures/type_def.nim	3	4	""	100
"""
