import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const expenseTypes = [
  {
    id: 1,
    name: 'Home Loan'
  },
  {
    id: 2,
    name: 'Dev Loan'
  },
  {
    id: 3,
    name: 'Maid'
  },
  {
    id: 4,
    name: 'Miscellaneous'
  },
  {
    id: 5,
    name: 'Recharge'
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (expenseType) => {
  return expenseTypes.length + 1;
};

class ExpenseTypeApi {
  static getAllExpenseTypes() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], expenseTypes));
      }, delay);
    });
  }

  static saveExpenseType(expenseType) {
    expenseType = Object.assign({}, expenseType); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minExpenseTypeLength = 1;
        if (expenseType.name.length < minExpenseTypeLength) {
          reject(`Name must be at least ${minExpenseTypeLength} characters.`);
        }

        if (expenseType.id) {
          const existingExpenseTypeIndex = expenseTypes.findIndex(a => a.id == expenseType.id);
          expenseTypes.splice(existingExpenseTypeIndex, 1, expenseType);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new courses in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          expenseType.id = generateId(expenseType);
          expenseTypes.push(expenseType);
        }

        resolve(expenseType);
      }, delay);
    });
  }

  static deleteExpenseType(expenseTypeId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexToDelete = expenseTypes.findIndex(expenseType =>  expenseType.id == expenseTypeId);
        expenseTypes.splice(indexToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default ExpenseTypeApi;
