# General ideas

I had not use `tsdx` before, it is pretty handy and easly customizable, however I had problems with the default test at the begining of the exercise because it was removed from source but it was testing the function anyway (Maybe a main-branch issue?). I solved all other problems and then came back to address that issue and it worked well after I deleted the unused function so I don't quite know what was that.

I'm not proficient with TS, however I still read some guides and best-practices for most languages, and I tried to apply all I know to this project, there may be some areas where the quality may be incremented, however it can be made incrementally with this solid basis.

## Solving part 1

This one was pretty easy, just append the string components using the defined rules, (it can be read from tree the way I solved it). Firstly I wrote a quick function to implement a signature and then wrote a spec test to check all given cases and some sinthetized ones, then I wrote the function to match that spec.

The comment on the PR for this issue is:

> It just returns the same value if length is less than 7, otherwise it concatenates the first character to the repeating pattern of x's masking n-5 characters of the original string, then it concatenates the last 4 digits.

## Solving part 2

This one was a little bit tricky, I searched the first 100th ordinal numbers here: https://byjus.com/maths/ordinal-numbers/ and tried to grasp a general solution, however I found that it would be easier if I just run the general case for all numbers and generate an exception rule for the 11th, 12th and 13th ordinal numbers.

The comment on the PR of this issue is:

> Simple implementation, returns the number plus suffix depending on the last digit of the number as follows:
> * If number is negative, throw an exception.
> * If number is within an exception list, return the value of that exception list (edge cases).
> * If number is 1, 2 or 3 return st, nd, or rd respectively as suffix.
> * If number is other than those, return th suffix.

## Solvig part 3

This one was the hardest from the three above, however it was also the more fun to solve, I'm a programing language geek that always is reading about this stuff, so the reverse-polish notation was not new for me, firstly I tried to solve the exercise by creating a lexer and then a solver, however I noticed that was not necessary so I just split the tokens using spaces and solved them using the standard stack algorithm, if it is needed it can be extended to perform the lexing apart, but I think its good enough.

The comment on the PR of this issue is:

> This solution uses a stack-based calculator following the next algorithm:
> 1. Split the string into tokens, a token is considered to be any string between spaces.
> 2. If an operand is found (a number) then it's pushed into the stack (only integers are supported).
> 3. If an operator is found (any of +,-,*,/) then two arguments are pop from the stack and result is push back to stack.
> 4. The result is the top of the stack.

# Other thoughts

Overall I enjoyed the exercise, it was fun and challenging, from getting the setup working to fighting against the prettifier (because I was lazy and did not setup my VSCode properly). I hope this comments help you to better understand my thinking process. Thank you!