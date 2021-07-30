
//Deleting Books

const list = document.querySelector('#book-list ul')
list.addEventListener('click', function(e){

    if(e.target.className == 'delete'){
        const li = e.target.parentElement;

        li.parentNode.removeChild(li) 
    }
})

//Adding Books

const addForm = document.forms['add-book']

addForm.addEventListener('submit', function(e){
    e.preventDefault()
    const val = addForm.querySelector('input[type = "text"]').value
    
    //Creating Element
    const li = document.createElement('li')
    const bookName = document.createElement('span')
    const deleteBtn = document.createElement('span')


    //Adding content
    deleteBtn.textContent='delete'
    bookName.textContent= val


    // //Add classes

    bookName.classList.add('name')
    deleteBtn.classList.add('delete')


    //Appending to top
     
    li.appendChild(bookName)
    li.appendChild(deleteBtn)

    list.appendChild(li)

})

const hidebox = document.querySelector('#hide')

hidebox.addEventListener('change', function(e){
    if(hidebox.checked){
        list.style.display ='none'
    }else
    {
        list.style.display = 'initial'
    }
})


  //Searching Books

  const searchBar = document.forms['search-books'].querySelector('input')
  searchBar.addEventListener('keyup', function(e){
      const term = e.target.value.toLowerCase()
      const books = list.getElementsByTagName('li')

      Array.from(books).forEach(function(book){
            const title = book.firstElementChild.textContent
            if(title.toLowerCase().indexOf(term) != -1){
                book.style.display='block'
            } else{
                book.style.display='none'
            }
      })
  })


