## Roman Numeral Converter

# Specs

| Behavior | Input Example | Output Example |
|-----------|---------------|---------------|
| The Value Of 1 should result I | 1 | I |
| The Value Of 5 should result I | 5 | V |
| The Value Of 10 should result I | 10 | X |
| The Value Of 50 should result I | 50 | L |
| The Value Of 100 should result I | 100 | C |
| The Value Of 500 should result I | 500 | D |
| The Value Of 1000 should result I | 1000 | M |
| If there are more than 3 of the same character in a row switch to subtraction| 4 | IV|
|Separate one, tens, thousands | 555 | DLV|
|Can not count above 3,999 | 4000 | Please pick a number 3,999 or lower|
|Can not process words, or letters | hello | Please enter a number|
|Can not process negative numbers | -5 | Please enter a positive number|
