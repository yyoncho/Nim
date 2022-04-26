# Test def with type definition in separate file

discard """
$nimsuggest --tester /home/yyoncho/Sources/nim/Nim/nimsuggest/tests/fixtures/nimble.nim
>def $path/fixtures/nimble.nim:4:16
def	skField	packageinfotypes.PackageInfo.isMinimal	string	*nimsuggest/tests/fixtures/packageinfotypes.nim	3	4	""	100
>def $path/fixtures/nimble.nim:4:16
def	skField	packageinfotypes.PackageInfo.isMinimal	string	*nimsuggest/tests/fixtures/packageinfotypes.nim	3	4	""	100
>def $path/fixtures/packageinfotypes.nim:4:4
def	skField	packageinfotypes.PackageInfo.sMinimal		*nimsuggest/tests/fixtures/packageinfotypes.nim	4	4	""	100
>def $path/fixtures/nimble.nim:4:15
def	skField	packageinfotypes.PackageInfo.isMinimal	string	*nimsuggest/tests/fixtures/packageinfotypes.nim	3	4	""	100
"""
