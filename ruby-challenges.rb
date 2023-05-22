# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.

# Pseudo Code:
    # Input: Array and String
    # Output: Array
    # Process:
        # Method Name: word_contains 
        # Assign parameter names 'array' and 'string'
        # Create temporary array variable
        # Iterate through the array (possible tool: each block)
        # Check current value to contain string variable (possible tool: includes?)
            # Add value to tempArr (possible tool: shovel operator)
    # Expected Output: ['coffee', 'soda water']
                     # ['tea', 'water', 'soda water']

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

filter_letter_o = 'o'
# Expected output: ['coffee', 'soda water']
filter_letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

# def word_contains (array, string)
#     tempArr = []
    
#     # .each iterates through the array
#     array.each do |value|

#         # Checks to see if 'string' is in the current value
#         if value.include? string

#             # Pushes current value to 'tempArr' if true
#             tempArr << value
#         end
#     end

#     p tempArr

# end

# word_contains(beverages_array, filter_letter_o)
# word_contains(beverages_array, filter_letter_t)

# Refactor 1

# Pseudo Code:

    # Process:
        # Remove .each block
        # Use .filter to iterate through given array
        # Assign .filter results directly to tempArr
    # Expected Output: ['coffee', 'soda water']
                     # ['tea', 'water', 'soda water']

# def word_contains (array, string)
    
#     #  .filter iterates through 'array' and checks to see if the current value contains the given string
#     tempArr = array.filter {|value| value.include? string}

#     p tempArr

# end

# word_contains(beverages_array, filter_letter_o)
# word_contains(beverages_array, filter_letter_t)

# Refactor 2

# Pseudo Code:

    # Process:
        # Remove 'tempArr'
        # Print array.filter directly
    # Expected Output: ['coffee', 'soda water']
                     # ['tea', 'water', 'soda water']

def word_contains (array, string)
    
    #  Prints results of .filter directly
    p array.filter {|value| value.include? string}

end

word_contains(beverages_array, filter_letter_o)
word_contains(beverages_array, filter_letter_t)


# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'

# Pseudo Code:
    # Input: Hash
    # Output: Array
    # Process:
        # Method Name: createArray 
        # Assign parameter names 'hash'
        # Create temporary 'array' and assign it the hash values (possible tool: .values)
        # Remove all nested arrays from 'array' variable (possible tool: .flatten)
        # Sort 'array' alphabetically (possible tool: .sort)
        # Return the resulting array
    # Expected Output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Rhode Island', 'Washington'] 

us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], notheast: ['Maine', 'New Hampshire', 'Rhode Island'] }
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Rhode Island', 'Washington'] 

# def createArray hash

#     # Converts 'hash' into an array of the values with .values
#     array = hash.values

#     # Removes nested arrays with .flatten
#     array = array.flatten

#     # Sorts array alphabetically
#     array.sort!

#     p array
# end

# createArray(us_states)

# Refactor
# Pseudo Code:
    # Process:
        # Remove 'array' variable
        # Combine .values, .flatten, and .sort methods
    # Expected Output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Rhode Island', 'Washington'] 

def createArray hash

    # .values converts 'hash' into an array of the hash's values
    # .flatten removes nested arrays within the array
    # .sort! sorts the array alphabetically
    p hash.values.flatten.sort!

end

createArray(us_states)

# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Pseudo Code:
    # Class Name: Bike
    # Inputs: string, Integer, Integer
    # Set up attr_accessor with 'model', 'wheels', and 'current_speed'
        # Method Name: initialize
            # Assign parameter name 'model'
            # Initialize instance variable 'model' to be a user input
            # Initialize instance variables'wheels' and 'current_speed' to default number
        # Method Name: bike_info
            # Use string interpolation to return a sentence with bike initialized data (use instance variables)

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

# class Bike

#     attr_accessor :model, :wheels, :current_speed

#     def initialize (model)
#         @model = model
#         @wheels = 2
#         @current_speed = 0
#     end

#     def bike_info
#         p "The #{@model} has #{@wheels} wheels and is going #{current_speed} mph."
#     end

# end

# trek = Bike.new('Trek')
# trek.bike_info


# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0

# Pseudo Code: 
    # Method Name: pedal_faster
        # Input: Integer
        # Output: Integer
        # Process:
            # Assign parameter name 'integer'
            # Add given number to instance variable 'current_speed' 
        # Expected Output: 10
                         # 28

    # Method Name: brake
        # Input: Integer
        # Output: Integer
        # Process:
            # Assign parameter name 'integer'
            # Subtract given number from instance variable 'current_speed'
                # If 'current_speed' results in a negative number, set it to 0 (possible tool: conditionals)
        # Expected Output: 23
                         # 0

# class Bike

#     # Creates getter/setter methods for variables
#     attr_accessor :model, :wheels, :current_speed

#     # Establishes base variables for the object to be created
#     def initialize (model)
#         @model = model
#         @wheels = 2
#         @current_speed = 0
#     end

#     # Prints the current info contained for the bike object
#     def bike_info
#         p "The #{@model} has #{@wheels} wheels and is going #{current_speed} mph."
#     end

#     # Increases 'current_speed' variable
#     def pedal_faster (integer)
#         @current_speed = @current_speed + integer
#     end

#     # Decreases 'current_speed' variable
#     # Prevents 'current_speed' value from dropping below 0
#     def brake (integer)

#         # Checks to see if 'current_speed' minus 'integer' is below 0
#         if (@current_speed - integer < 0)
#             @current_speed = 0
#         else
#             @current_speed = @current_speed - integer
#         end
#     end
# end

# trek = Bike.new('Trek')
# trek.bike_info

# trek.pedal_faster(10)
# trek.bike_info

# trek.pedal_faster(18)
# trek.bike_info

# trek.brake(5)
# trek.bike_info

# trek.brake(25)
# trek.bike_info

# Refactor
# Pseudo Code:
    # Process:
        # Use ternary operate in place of if/else statments
        # Use += and -= for increasing and decreasing 'current_speed'
    # Expected Output: 23
                     # 0

class Bike

    # Creates getter/setter methods for variables
    attr_accessor :model, :wheels, :current_speed

    # Establishes base variables for the object to be created
    def initialize (model)
        @model = model
        @wheels = 2
        @current_speed = 0
    end

    # Prints the current info contained for the bike object
    def bike_info
        p "The #{@model} has #{@wheels} wheels and is going #{current_speed} mph."
    end

    # Increases 'current_speed' variable
    def pedal_faster (integer)
        @current_speed += integer
    end

    # Decreases 'current_speed' variable
    # Prevents 'current_speed' value from dropping below 0
    def brake (integer)

        # Ternary operator puts if/else statement on one line
        (@current_speed - integer) < 0 ? @current_speed = 0 : @current_speed -= integer    

    end
end

trek = Bike.new('Trek')
trek.bike_info

trek.pedal_faster(10)
trek.bike_info

trek.pedal_faster(18)
trek.bike_info

trek.brake(5)
trek.bike_info

trek.brake(25)
trek.bike_info