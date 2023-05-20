ASSESSMENT 5: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

What does calling super do in a Ruby class?
Your answer:
    Calling super in Ruby will call the initialize method in the parent class. As a result, the current class will invoke that initialize method and will take on the properties associated with it. For example, if you have the parent class Parent that has the initialize method that sets a last name and a child class called Child, you can call 'super' in the Child class to inherent the last name from the Parent class.

Researched answer:
    In Ruby, 'super' is a method that will call a method from the parent class that has the same name. This allows methods to be shared from the parent class to the child class with ease. If you call super without any arguments, it will take the arguments for the parent class method and use them with the child class. Otherwise, super will pass the arguments provided to the child class to the method in the parent class for use.


What is a gem?
Your answer:
    A gem is a library or snippet of code functionality. They are managed by RubyGem, which is a package manager for Ruby. They wrap up code in Ruby to make it easier to implement functionality to a function that is commonly used. This also makes it easy to share common functionality between developers.

Researched answer:
    Gems in Ruby are open sourced libraries containing code that are packaged with extra data. They allow developers to use the code that is stored within the gem in their own programs and do not need to explicitly type it in to their code. This allows developers to utilize standard processes without having to hard code them manually.


What is a relational database? Are there other kinds of databases?
Your answer:
    A relation database is a table that contains information that is organized into rows and columns. It is very similar to an Excel spreadsheet and can have many different tables that interact with it. I am not sure if there are any other types of databases, but I imagine there are. I will do further research to determine if they exist.

Researched answer:
    Relational databases are a type of database that not only stores data for the developer, but also provide access points to the data contained within that share relationships with each other. They are based on the relational model, which is an intuitive and straightforward way of representing data within a table using columns and rows. Each relational database utilizes a primary key that is used to identify each row of data uniquely, allowing it to be easily referenced later. There are many different types of databases, but the top five are: document data store, column-oriented, key-value store, document store, and graph databases.


What are primary keys? Why purpose does a primary key serve?
Your answer:
    Primary keys are values that are assigned to an entry in a database. These are assigned natively by PostgresSQL and do not require manual assignment by the developer. They are unique and cannot be repeated. They ensure that data can be accessed individually and prevent the overwriting of any existing information on accident.

Researched answer:
    primary keys are unique identifiers that quickly parse data within a table. There cannot be more than one primary key and each value must contain a unique value for each row of data, cannot be null, and exist on every row. They provide efficiency within a relational database which is critical for its functionality. Without these, a relational database cannot function.


What are the five HTTP verbs? What is each verb's corresponding CRUD action?
Your answer:
    The five HTTP verbs are as follows:
        1. Get: This is a request that receives a display (otherwise known as the content). It corresponds with the Read part of the CRUD acronym. It allows the user to see the data on the page they are accessing.
        2. Post: This is a request that provides new information to the page being viewed. It corresponds with the Create part of CRUD acronym. It allows the user to create new content for a given page.
        3. Put: This is a request that provides an update to a piece of existing information on a page. It corresponds with the Update part of CRUD acronym. It allows a user to modify parts of existing data that is already contained on the page.
        4. Patch: This is a request that modifies the entire page being view. It corresponds with the Update part of the CRUD acronym. The key difference between Put and Patch is that patch modifies the entire page, whereas Put updates a part of the page.
        5. Delete: This is a request that deletes data on the requested page. It corresponds with the Delete part of the CRUD acronym. This allows the user to delete information that is contained on the page.

Researched answer:
    The five HTTP verbs are as follows:
    1. Get: Get is used to read a representation of a source. It can also be thought of as retrieving data. It allows a user to view the data on a website and is safe from any accidental editing  as it only allows the viewing, not the modifying of data.
    2. Post: Post is used for the creation of new sources of data. It is not considered a safe action as it does provide new data to a website. As such, it should be used with some sort of protection to ensure nothing is modified that shouldn't be.
    3. Put: Put is used for the modifying of existing data. It can also be used to create new data, though this is not the common usage. It is also not considered a safe operation as it will modify existing data on the website. Therefore, it should be used with care and protection.
    4. Patch: A Patch is used to modify capabilities of a website. While similar to Put, it's distinction can be found in the fact that it is used primarily for functionality updates. It is also considered unsafe and therefore is used judiciously and with protections in place.
    5. Delete: The Delete verb will remove existing data from a website. It is perhaps the most unsafe of the five verbs as it has the ability to break a website if the wrong piece of data is removed. Therefore, it must be used with some sort of protections in place.


------------------------------------------------------------------------------------------------------
Looking Ahead: Terms for Next Week
Research and define the following terms to the best of your ability.

Model validations:
    Model validations are used to protect against bad code from being entered into a database. Ruby on Rails runs these validations on all models before they are added to the database. This function is crucial the functionality of the database and ensure efficiency in database development.

RESTful routes:
    REST is an acronym that stands for Representational State Transfer and is a pattern that should be followed when constructing routes between a server and the client. RESTful routes provide a way to apply operations to an object within an HTTP request. CRUD is the most efficient model to follow when developing these routes as it will accomplish almost every task associated with an object.

ERB:
    ERB is an acronym meaning Embedded Ruby. It is a file structure similar to React in the sense that it allows the developer to code in HTML and place Ruby code into the view file. It is an extension that is attached to the end of a document file name. ie: view/main/task.html.erb

Params:
    Params is short for Action Controller Parameters. These allow you to choose the desired attributes for mass updating data. This mitigates the possibility of modifying data that should not be modified. There are two methods for these, 'require' and 'permit'. 'require' labels parameters as required and 'permit' labels them as permitted and also limits the attributes allowed to conduct mass updating. 

API:
    API stands for Application Programming Interface. It is an application that utilizes JSON (JavaScript Object Notation) to transmit data. It consists of the combination of models and controllers that are connected via routes. An API can serve as the backend of an application.