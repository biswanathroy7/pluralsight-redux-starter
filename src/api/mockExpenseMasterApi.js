import delay from './delay';
import moment from 'moment';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const expenseMasters = [
    {
        id: 1,
        name: 'January - 2018',
        startDate: moment().format('YYYY-MM-DD'),
        endDate: moment().format('YYYY-MM-DD')
    },
    {
        id: 2,
        name: 'February - 2018',
        startDate: moment().format('YYYY-MM-DD'),
        endDate: moment().format('YYYY-MM-DD')
    }
];

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (expenseMaster) => {
    return expenseMasters.length + 1;
};

class ExpenseMasterApi {
    static getAllExpenseMasters() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], expenseMasters));
            }, delay);
        });
    }

    static saveExpenseMaster(expenseMaster) {
        expenseMaster = Object.assign({}, expenseMaster); // to avoid manipulating object passed in.
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate server-side validation
                const minExpenseMasterLength = 1;
                if (expenseMaster.name.length < minExpenseMasterLength) {
                    reject(`Name must be at least ${minExpenseMasterLength} characters.`);
                }

                if (expenseMaster.id) {
                    const existingExpenseMasterIndex = expenseMasters.findIndex(a => a.id == expenseMaster.id);
                    expenseMasters.splice(existingExpenseMasterIndex, 1, expenseMaster);
                } else {
                    //Just simulating creation here.
                    //The server would generate ids and watchHref's for new courses in a real app.
                    //Cloning so copy returned is passed by value rather than by reference.
                    expenseMaster.id = generateId(expenseMaster);
                    expenseMasters.push(expenseMaster);
                }

                resolve(expenseMaster);
            }, delay);
        });
    }

    static deleteExpenseMaster(expenseMasterId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const indexToDelete = expenseMasters.findIndex(expenseMaster => expenseMaster.id == expenseMasterId);
                expenseMasters.splice(indexToDelete, 1);
                resolve();
            }, delay);
        });
    }
}

export default ExpenseMasterApi;
