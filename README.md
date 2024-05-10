Uptill now 3 API cases have been handeled. One related to regex expression as placeholder is left which felt irrelevant in my opinion.

- POST http://localhost:3000/bad-words/clean (a json string is sent with popular cuss words and it returns the same string making those cuss words appear as asterisks [*] )
- POST http://localhost:3000/bad-words/add-custom-words-clean (Through this we could define custom cuss words and add them to the blacklist. Now if these words will be included in request body then they will be given the same cuss words treatment)
- POST http://localhost:3000/bad-words/remove-custom-words-clean (Through this we could define custom cuss words and add them to the whitelist. Now, they won't be treated as cuss words and will be visible to user)
