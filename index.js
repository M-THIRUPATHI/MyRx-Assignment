//1
function sortedSquares(arr) {
  let n = arr.length;
  let result = new Array(n);
  let left = 0,
    right = n - 1;
  let index = n - 1;

  while (left <= right) {
    let leftSquare = arr[left] * arr[left];
    let rightSquare = arr[right] * arr[right];

    if (leftSquare > rightSquare) {
      result[index] = leftSquare;
      left++;
    } else {
      result[index] = rightSquare;
      right--;
    }
    index--;
  }

  return result;
}
console.log(sortedSquares([-12, -8, -7, -5, 2, 4, 5, 11, 15]));

//2
class ImmutableEmployee {
  constructor(name, id, dateOfJoining, addresses) {
    this._name = name;
    this._id = id;
    this._dateOfJoining = new Date(dateOfJoining.getTime());
    this._addresses = addresses.map((addr) => Object.freeze({ ...addr }));
    Object.freeze(this);
  }
  get name() {
    return this._name;
  }
  get id() {
    return this._id;
  }
  get dateOfJoining() {
    return new Date(this._dateOfJoining.getTime());
  }
  get addresses() {
    return this._addresses.map((addr) => ({ ...addr }));
  }
  toString() {
    return `ImmutableEmployee { name: '${this._name}', id: '${
      this._id
    }', dateOfJoining: '${this._dateOfJoining}', addresses: ${JSON.stringify(
      this._addresses
    )} }`;
  }
}

class Address {
  constructor(street, city) {
    this.street = street;
    this.city = city;
    Object.freeze(this);
  }
  toString() {
    return `Address { street: '${this.street}', city: '${this.city}' }`;
  }
}

const addressList = [
  new Address("123 Main St", "New York"),
  new Address("456 Elm St", "San Francisco"),
];

const employee = new ImmutableEmployee(
  "John Doe",
  "101",
  new Date(),
  addressList
);
console.log(employee.toString());

//3
function sortRGB(arr) {
  let low = 0,
    mid = 0,
    high = arr.length - 1;
  while (mid <= high) {
    if (arr[mid] === "B") {
      [arr[low], arr[mid]] = [arr[mid], arr[low]];
      low++;
      mid++;
    } else if (arr[mid] === "G") {
      mid++;
    } else {
      [arr[mid], arr[high]] = [arr[high], arr[mid]];
      high--;
    }
  }
  return arr;
}

let balls = ["R", "G", "B", "G", "G", "R", "B", "B", "G"];
console.log(sortRGB(balls));

//4
function minPlatforms(arr, dep) {
  let n = arr.length;
  function toMinutes(time) {
    let [hours, minutes] = time.split(":").map(Number);
    return hours * 60 + minutes;
  }
  let arrival = arr.map(toMinutes).sort((a, b) => a - b);
  let departure = dep.map(toMinutes).sort((a, b) => a - b);
  let platforms = 0,
    maxPlatforms = 0;
  let i = 0,
    j = 0;
  while (i < n && j < n) {
    if (arrival[i] < departure[j]) {
      platforms++;
      maxPlatforms = Math.max(maxPlatforms, platforms);
      i++;
    } else {
      platforms--;
      j++;
    }
  }
  return maxPlatforms;
}
console.log(
  minPlatforms(
    ["9:00", "9:40", "9:50", "11:00", "15:00", "18:00"],
    ["9:10", "12:00", "11:20", "11:30", "19:00", "20:00"]
  )
);

//5
function sortMapByValue(map) {
  return new Map([...map.entries()].sort((a, b) => a[1].localeCompare(b[1])));
}
const myMap = new Map([
  [101, "John Doe"],
  [102, "Jane Smith"],
  [103, "Peter Johnson"],
]);
const sortedMap = sortMapByValue(myMap);
console.log(Object.fromEntries(sortedMap));
