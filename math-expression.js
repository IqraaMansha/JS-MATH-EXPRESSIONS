// Assigment No. 5

// Math Expressions
// Question.no.1

var first_num = 3;
var second_num = 5;
var total = first_num + second_num;
document.write("Sum of " + first_num + " and " + second_num + " is " + total);

// Question.no.2

var first_num = 28;
var second_num = 10;
var total = first_num - second_num;
document.write(
    "Subtraction of " + first_num + " and " + second_num + " is " + total + "<br>"
);
var first_num = 28;
var second_num = 10;
var total = first_num * second_num;
document.write(
    "Multiplication of " +
    first_num +
    " and " +
    second_num +
    " is " +
    total +
    "<br>"
);
var first_num = 28;
var second_num = 10;
var total = first_num / second_num;
document.write(
    "Division of " + first_num + " and " + second_num + " is " + total + "<br>"
);
var first_num = 28;
var second_num = 10;
var total = first_num % second_num;
document.write(
    "Modulus of " + first_num + " and " + second_num + " is " + total + "<br>"
);

// Question.no.3

var value = 0;

document.write("Value after variable declaration is: " + value + "<br>");

var value = 5;

document.write("Initial value: " + value + "<br>");

value++;

document.write("Value after increment is: " + value + "<br>");

var value = value + 7;

document.write("Value after addition is: " + value + "<br>");

value--;

document.write("Value after decrement is: " + value + "<br>");

value = value % 3;

document.write("The remainder is : " + value + "<br>");

// Question.no.4

var ticket_price = 600;

var total = ticket_price * 5;

document.write("Total cost to buy 5 tickets to a movie is " + total + "PKR");

// Question.no.5

table_num = 4;

table_len = 21;

for (var i = 0; i < table_len; i++) {
    document.write("4" + "X" + i + "=" + 4 * i + "<br>");
}

// Question.no.6

var celsius = 25;

var fahrenhiet = (celsius * 9) / 5 + 32;

document.write("25 Celsius is " + fahrenhiet + " fahrenhiet" + "<br>");

var f = 70;

var c = ((f - 32) * 5) / 9;

document.write("70 Fahrenhiet is " + c + Ce + "lsius");

// Question.no.7

var price_of_item_1 = 650;

var price_of_item_2 = 100;

var quantity_of_item_1 = 3;

var quantity_of_item_2 = 7;

var shipping_charges = 100;

var total =
    price_of_item_1 * quantity_of_item_1 +
    price_of_item_2 * quantity_of_item_2 +
    shipping_charges;

document.write("Total cost of your order is: " + total);

// Question.no.8

var total_marks = 1000;

var marks_obt = 850;

var percentage = (marks_obt / total_marks) * 100;

document.write("Total Marks: " + total_marks + "<br>");

document.write("Marks Obtained: " + marks_obt + "<br>");

document.write("Percentage: " + percentage + "%" + "<br>");

// Question.no.9

var dollars = 10;

var riyal = 25;

var exchange_rate_dollar = 104.8;

var exchange_rate_riyal = 28;

var total_currency_in_pkr =
    dollars * exchange_rate_dollar + riyal * exchange_rate_riyal;

document.write("Totral currency in PKR: " + total_currency_in_pkr);

// Question.no.10

var num = 5;

var ans = ((num + 5) * 10) / 2;

document.write("Answer: " + ans);

// Question.no.11

var current_year = 2021;

var birth_year = 2000;

var age = current_year - birth_year;

document.write("Current Year: " + current_year + "<br>");

document.write("Birth Year: " + birth_year + "<br>");

document.write("Your Age is: " + age + "<br>");

// Question.no.12

var radius = 20;

var circumferrence = 2 * 3.142 * radius;

var area = 3.142 * (radius * radius);

document.write("<h1>The Geometritizer</h1>" + "<br>");

document.write("The Circumferrence is: " + circumferrence + "<br>");

document.write("The Area is: " + area + "<br>");

// Question.no.13

var favourite_snack = "Chocolate Chips";

var current_age = 21;

var maximum_age = 65;

var snacks_per_day = 3;

var snacks_per_year = 365 * snacks_per_day;

var total_snacks_for_lifetime = (maximum_age - current_age) * snacks_per_year;

document.write("Favourite Snack: " + favourite_snack + "<br>");

document.write("Current Age: " + current_age + "<br>");

document.write("Maximum Age: " + maximum_age + "<br>");

document.write("Snack Per Day: " + snacks_per_day + "<br>");

document.write("Snack Per Year: " + snacks_per_year + "<br>");

document.write(
    "You will need " +
    total_snacks_for_lifetime +
    " to last you until the ripe old age of " +
    maximum_age +
    "<br>"
);
