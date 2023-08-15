function createData(
    id,
    label,
    type,
    placeholder,
) {
    return { id, label, type, placeholder };
}


export const userInputs = [
    createData(1, 'Username', "text", "john_doe"),
    createData(2, 'Name and surname', "text", "John Doe"),
    createData(3, 'Email', "mail", "john_doe@gmail.com"),
    createData(4, 'Phone', "text", "+1 1243 12 43"),
    createData(5, 'Password', "password", ""),
    createData(6, 'Address', "text", "Elton st. 124 New york"),
    createData(6, 'Country', "text", "USA"),
];


export const productInputs = [
    createData(1, 'Title', "text", "Apple Macbook pro"),
    createData(2, 'Description', "text", "Description Doe"),
    createData(3, 'Category', "text", "Computers"),
    createData(4, 'Price', "text", "100"),
    createData(5, 'Stock', "password", "in stock"),
];