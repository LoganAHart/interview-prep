# Is Unique

Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures? Return true or false.

Hints: #44, # 777, # 7 32

NOTES:
Approach Without Extra Data Structure: The approach is valid for strings having alphabet as a-z. This approach is little tricky. Instead of maintaining a boolean array, we maintain an integer value called checker(32 bits). As we iterate over the string, we find the int value of the character with respect to ‘a’ with the statement int bitAtIndex = str.charAt(i)-‘a’; Then the bit at that int value is set to 1 with the statement 1 << bitAtIndex. Now, if this bit is already set in the checker, the bit AND operation would make checker > 0. Return false in this case. Else Update checker to make the bit 1 at that index with the statement checker = checker | (1 << bitAtIndex);

## [Solution (JS)](./index.js)
