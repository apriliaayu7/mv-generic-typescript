interface Employee {
    firstName: string;
    lastName: string;
    phone: string;
    address: string;
    age: number;
    email: string;
    verified?: boolean;
}
export const employees: Employee[] = [
    {
        firstName: "Ayu",
        lastName: "Diah",
        age: 17,
        phone: "089339894634",
        address: "123 Main St",
        email: "ayu@gmail.com",
        verified: true,
    },
    {
        firstName: "Nur",
        lastName: "Iffah",
        phone: "089363826288",
        age: 30,
        address: "456 Elm St",
        email: "mela@gmail.com",
    },
    {
        firstName: "Mayu",
        lastName: "Wow",
        age: 100,
        phone: "000000888821",
        address: "256 Sec St",
        email: "mayu@gmail.com",
    },
];
