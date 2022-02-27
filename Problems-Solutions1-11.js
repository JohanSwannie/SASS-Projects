// PROBLEM 1A - String with random integers(numbers) separated by 1 space - return 2 numbers(highest and lowest) separated by 1 space
// SHORT WAY

function determineLowestHighest(str) {
  let arr1 = str.split(' ')
  arr1.sort((a, b) => a - b)
  let arr2 = []
  arr2.push(arr1[arr1.length - 1])
  arr2.push(arr1[0])
  let str2 = arr2.join(' ').toString()
  return str2
}
let strToPass = '12 38 14 20 19 7 91 16 10 31 15 22 58 3 29 83 77 17 9 33'
document.write(`Determine Highest and Lowest numbers the Short way(${determineLowestHighest(strToPass)}) - `)

// PROBLEM 1B - String with random integers(numbers) separated by 1 space - return 2 numbers(highest and lowest) separated by 1 space
// LONG WAY

function determineLowestHighest2(str3) {
  let arr3 = str3.split(' ')
  let arr4 = []
  for (let i = 0; i < arr3.length; i++) {
    arr4.push(parseInt(arr3[i]))
  }
  let arr5 = []
  let highest = 0
  let lowest = 1000
  for (let i = 0; i < arr4.length; i++) {
    if (arr4[i] > highest) {
      highest = arr4[i]
    }
  }
  arr5.push(highest)
  for (let i = 0; i < arr4.length; i++) {
    if (arr4[i] < lowest) {
      lowest = arr4[i]
    }
  }
  arr5.push(lowest)
  let str4 = arr5.join(' ').toString()
  return str4
}
let strToPass2 = '12 38 14 20 19 7 91 16 10 31 15 22 58 3 29 83 77 17 9 33'
document.write(`Determine Highest and Lowest numbers the Long way(${determineLowestHighest2(strToPass2)})`)

// PROBLEM 2 - Given an array with objects - Create new array with the data of the Title and imdbRating from the watchList
// array - use map function

const watchList = [{
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    "imdbRating": "8.8",
  },
  {
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "imdbRating": "8.6",
  },
  {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "imdbRating": "9.0",
  },
  {
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    "imdbRating": "8.3",
  },
  {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "imdbRating": "7.9",
  }
];
const ratings = watchList.map(item => ({
  title: item["Title"],
  rating: item["imdbRating"]
}));

document.write('<br><br>' + JSON.stringify(ratings));

// PROBLEM 3 - Use a callback function to return values of calculations from an array

const valuesArray = [8, 10, 5, 18, 13, 27]

let operations = [5, 4, 2, 8, 2]

Array.prototype.valuesFilter = function(cb) {
  let newArray = []
  for (let i = 0; i < this.length; i++) {
    newArray.push(cb(this[i]))
  }
  document.write('<br><br> new array is [' + newArray + ']')
}

const arithmOperation = valuesArray.valuesFilter(function(item) {
  let passArray = []
  let item2 = item
  for (i = 0; i < operations.length; i++) {
    item2 += operations[i]
  }
  passArray.push(item2)
  let passArray2 = []
  let item3 = item
  for (i = 0; i < operations.length; i++) {
    item3 *= operations[i]
  }
  passArray2.push(item3)
  let passArray3
  passArray3 = passArray.concat(passArray2)
  return passArray3
})

// PROBLEM 4 - From the Array watchList get the average of imdbRating where the Director is "Christopher Nolan"

const watchList2 = [
  {
    "Title": "Inception",
    "Year": "2010",
    "Director": "Christopher Nolan",
    "imdbRating": "8.8",
  },
  {
    "Title": "Interstellar",
    "Year": "2014",
    "Director": "Christopher Nolan",
    "imdbRating": "8.6",
  },
  {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Director": "Christopher Nolan",
    "imdbRating": "9.0",
  },
  {
    "Title": "Batman Begins",
    "Year": "2005",
    "Director": "Christopher Nolan",
    "imdbRating": "8.3",
  },
  {
    "Title": "Avatar",
    "Year": "2009",
    "Director": "James Cameron",
    "imdbRating": "7.9",
  }
];

function getRating(watchList2) {
  let averageRating
  const filterDirector = watchList2.filter(item => item.Director === 'Christopher Nolan')
  const overallRating = filterDirector.reduce((sum, rating) => (sum + parseFloat(rating.imdbRating)), 0)
  averageRating = overallRating / filterDirector.length
  return averageRating;
}
console.log(getRating(watchList2));

// PROBLEM 5 - From an array return only the sqaured value of positive integers(exclude all floats)

const squareList = arr => {
  const squaredArr = arr.filter(item1 => (item1 > 0 && item1 % 1 === 0))
  .map(item2 => item2 * item2)
  return squaredArr;
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);

// PROBLEM 6 - Sort a given array with alphabetics in alphabetical order

function alphabeticalOrder(arr) {
  const arrSort = arr.sort((a, b) => a === b ? 0 : a < b ? -1 : 1)
  return arrSort
}

console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));

// PROBLEM 6 - Reverse an array, then make it lowercase and then make the first letter of every word uppercase

function reverseHomPappie(str) {
  let str2 =  str.trim().split('').reverse().join('').toLowerCase()
  let array1 = str2.split(' ')
  let array2 = []
  for (let i = 0; i < array1.length; i++) {
    array2.push(array1[i].slice(array1[i][0], array1[i].length - 1))
   }
   let strReplacer = ''
   for (let j = 0; j < array2.length; j++) {
     strReplacer = array2[j]
     strReplacer += array1[j].charAt(array1[j].length - 1).toUpperCase()
     array2.splice(j, 1, strReplacer)
     strReplacer = ''
   }
   let str3 = array2.join(' ')
   return str3
 }

console.log('Hier is dit  ' + reverseHomPappie('jaNNie se tAnnie'))


function reverseKoors(str) {
  let newStr = '   '
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i]
  }
  return newStr.trim()
}

console.log(reverseKoors('Anderkant die blou berge'))

// PROBLEM 7 - 2 numbers is passed in an array - call a function that will return the sum of the
// numbers added up between those numbers with those numbers included. The highest of the 2 numbers
// can be the first or second number in the array

function sumAll(arr) {
  let end = 0
  let sum = 0
  let add = arr[0]
  let zeroFlag = 0
  if (arr[0] < arr[1]) {
     end = arr[1] - (arr[0] - 2)
  } else {
    end = arr[0] - (arr[1] - 2)
    zeroFlag = 1
  }
  for (let i = 1; i < end; i++) {
    sum += add
    zeroFlag === 0 ? add++ : add--
  }
  return sum
}

console.log(sumAll([19, 12]));

// PROBLEM 8 - Out of 2 arrays with several values each, create a new array with values unique to each array

// Short Way

function diffArray1(arr1, arr2) {
  let bigArray1 = [];
  bigArray1 = arr1.concat(arr2);
  const potter = bigArray1.filter(val => (arr1.indexOf(val) === -1 || arr2.indexOf(val) === -1));
  return potter
}

console.log(diffArray1([1, 8, 'Kos', 2, 77, 91, 3, 5], [1, 'Jos', 2, 77, 3, 'Kos', 4, 5]));

// Long Way

function diffArray2(arr3, arr4) {
  let bigArray2 = [];
  bigArray2 = arr3.concat(arr4);
  function compareValues(value) {
    if (arr3.indexOf(value) === -1 || arr4.indexOf(value) === -1) {
      return value;
    }
  }
  return bigArray2.filter(compareValues);
}

console.log(diffArray2([1, 8, 2, 3, 5, 'Blikkies'], [1, 2, 77, 3, 'Lekker kos', 4, 5]));

// PROBLEM 9 - from a passed array and list of values, remove those values from the array

function destroyer(arr) {
  const allArguments = Array.from(arguments);
  console.log(allArguments)
  let checkList = allArguments.slice(1);
  return allArguments[0].filter(item => !checkList.includes(item));
}

console.log(destroyer([1, 2, 3, 4, 'Yes', true, 1, 2, 3], 2, 3, 'No', true));

// PROBLEM 10 - parameter1 = array with objects + parameter2 just objects - return all occurences
// of paramters 1 that  have similar key value pairs as parameter2

function whatIsInAName(collection, source) {
  let arr = [];
  let checkKeys = Object.keys(source);
  arr = collection.filter(item => checkKeys.every(key => item.hasOwnProperty(key)  && item[key] === source[key]));
  return arr;
}

console.log(whatIsInAName([{ first: "Romeo", last: "Juliet" },
                              { first: "Mercutio", last: null },
                              { first: "Tybalt", last: "Capulet", final: 'Oops' }],
                              { last: "Capulet" }));

// PROBLEM 11 - Return a string splitted by uppercase and spaces and join the word with hyphens

function spinalCase(str) {
  str = str.trim().split(/[\s_]+|(?=[A-Z])/).join("-").toLowerCase();
  return str;
}

console.log(spinalCase('There is 12 egss in the BasketAnd 5Stones inTheUpperShed'));
