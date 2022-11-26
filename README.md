# handling-react-forms
React tutorial on handling forms project demo 

Representing Each book.
When the user types in a book and hits submit:
1. how do we store a books?
2. how do we keep track of it and allow edits. 

    ~ Each book can be represented with an object
      {id:1, title: "Harry Potter"}

    ~ We can store these book objects in one Array (we'll call it Books) in a single location
    ~ When a user add,update or deletes a book we want to update this
            * need to update should trigger STATE by now

    1. BookCreate will responsible for creating the new book
       then passing it back up to App where the 
       array of book objects will be updated then send that data 
       to BookList, BooShow, BookEdit.  
       
       remember if the parent component state updates 
       all the child components are also updated. so we use 
       the lowest common parent component which is APP 
    
    2. BookList will be responsible for taking a look at each 
       object inside the Books

            
   THIS PROJECTS MAIN FOCUS WILLL BE HOW TO CORRECTLY UPDATE ARRAYS/OBJECTS

   ~ Deleteing a book

   1. Create a function to get book by id



