# Test def with type definition in separate file

discard """
$nimsuggest --tester $file
>def $path/fixtures/nimble.nim:4:15
def	skField	packageinfotypes.PackageInfo.isMinimal	string	*nimsuggest/tests/fixtures/packageinfotypes.nim	3	4	""	100
>def $path/fixtures/packageinfotypes.nim:3:4
def	skField	packageinfotypes.PackageInfo.isMinimal		*nimsuggest/tests/fixtures/packageinfotypes.nim	3	4	""	100
"""
