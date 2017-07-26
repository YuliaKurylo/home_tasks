var presidents = [{
        name: 'George',
        surname: "Kush"
    },
    {
        name: "Barako",
        surname: "Obame"
    }];


function pluckByAttribute(presidents, str) {
    if (str == 'name') {
        getTransformedArray(presidents, getPresidentsName);
    }
    if (str == 'surname') {
        getTransformedArray(presidents, getPresidentsSurname);
    }
}

function getPresidentsName(president) {
    if (president.hasOwnProperty('name')) {
        console.log(president.name);
    }
}

function getPresidentsSurname(president) {
    if (president.hasOwnProperty('surname')) {
        console.log(president.surname);
    }
}

pluckByAttribute( presidents, 'name' );