let students = [];
let done = false;

while (!done) {
    let name = prompt("intraduzca el nombre del estudiante o use el (*) para salir");
    if (name === "*") {
        done = true;
    } else {
        let age = parseInt(prompt("ingrese la edad del estudiante"));
        students.push({ name: name, age: age });
    }
}

let legalAgeStudents = students.filter(student => student.age >= 18);
let oldestStudents = students.sort((a, b) => b.age - a.age).slice(0, 3);

alert("todos los estudiantes mayores de edad son");
legalAgeStudents.forEach(student => alert(student.name));

alert("\nlos estudiantes mas viejos son");
oldestStudents.forEach(student => alert(student.name));