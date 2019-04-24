// Book constructor
class Book {
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn   = isbn
    }
}


// UI constructor
class UI {
    // Add Book to list
    addBook(book) {
        // Where to add the book
        const bookList = document.querySelector("#book-list")
        // create td to be inserted
        const tr = document.createElement("tr")
        tr.innerHTML=`
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</a></td>
        `
        bookList.appendChild(tr)

    }

    // Show Alert
    showAlert(msg, bgcolor){
        // Create a div
        const div = document.createElement("div");
        //Add class
        div.classList = "message";
        //Grab tne element to insertAfter
        const container = document.querySelector(".container")
        // Grab an Element to insertBefore
        const form = document.querySelector("form")
        // Insert it Before h3 and after container
        container.insertBefore(div, form)
        // Grab the element with its className
        const message = document.querySelector(".message")

        // Alert Messages
       message.textContent = msg.toUpperCase();
       message.style.color = "white"
       message.style.backgroundColor = bgcolor;
       setTimeout(() => {
           message.textContent = "";
       }, 2000);
       
    }
    
    // clear Fields
    clear(){
        document.querySelector("#title").value = "";
        document.querySelector("#author").value = "";
        document.querySelector("#isbn").value = "";
    }
    // Delete Books
    delete(){
        document.querySelector("table").addEventListener("click", ((e) => {
            if(e.target.classList.contains("delete")){
                e.target.parentElement.parentElement.remove();
                const message = document.querySelector(".message")
                message.innerText = "Book Deleted"
                message.style.backgroundColor = "red"
                setTimeout(() => {
                    message.textContent = "";
                }, 2000);
            }
        }))
    }

}

// Form/Submit Event
document.querySelector("form").addEventListener("submit", ((e) => {
    
    // Get all input Values
    const title   = document.querySelector("#title").value,
          author  = document.querySelector("#author").value,
          isbn    = document.querySelector("#isbn").value

    // instantiate The Book Class
    const book = new Book(title, author, isbn)
    // instantiate the Ui class
    const ui = new UI()
    
    // Show Alert
    if (title === "" || author === "" || isbn === "") {
        ui.showAlert("Please fill out all fields", "red")
        
    } else {
        // add book to list
        ui.addBook(book)
        ui.showAlert("Book Added Successfully", "green")
        ui.clear()
    }


    // Delete
    ui.delete()


    e.preventDefault()
}))