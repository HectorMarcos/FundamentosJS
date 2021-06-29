var x = 4,
    y = '4';

/* 
    x == y !true
    x === y !false 
*/

var hector = {
    nombre: 'Hector',
};

var otraPersona = {
    nombre: 'Hector',
};

/* 
    hector == otraPersona !false
*/

var otraPersona = hector;

/* 
    otraPersona == hector !true
*/

var otraPersona = {
    ...hector,
};
