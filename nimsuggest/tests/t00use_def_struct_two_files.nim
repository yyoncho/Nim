# Test def with type definition in separate file

discard """
$nimsuggest --tester /home/yyoncho/Sources/nim/Nim/nimsuggest/tests/fixtures/nimble.nim
>use /home/yyoncho/Sources/nim/Nim/nimsuggest/tests/fixtures/packageinfotypes.nim:3:4
def	skField	packageinfotypes.PackageInfo.isMinimal	string	/home/yyoncho/Sources/nim/Nim/nimsuggest/tests/fixtures/packageinfotypes.nim	3	4	""	100
use	skField	packageinfotypes.PackageInfo.isMinimal	string	/home/yyoncho/Sources/nim/Nim/nimsuggest/tests/fixtures/nimble.nim	5	13	""	100
>def /home/yyoncho/Sources/nim/Nim/nimsuggest/tests/fixtures/packageinfotypes.nim:3:4
def	skField	packageinfotypes.PackageInfo.isMinimal	string	/home/yyoncho/Sources/nim/Nim/nimsuggest/tests/fixtures/packageinfotypes.nim	3	4	""	100
>use /home/yyoncho/Sources/nim/Nim/nimsuggest/tests/fixtures/packageinfotypes.nim:3:4
def	skField	packageinfotypes.PackageInfo.isMinimal	string	/home/yyoncho/Sources/nim/Nim/nimsuggest/tests/fixtures/packageinfotypes.nim	3	4	""	100
use	skField	packageinfotypes.PackageInfo.isMinimal	string	/home/yyoncho/Sources/nim/Nim/nimsuggest/tests/fixtures/nimble.nim	5	13	""	100
"""
