// Grab the elements
const listGroup = document.querySelector(".list-group");
const sortByPriceBtn = document.querySelector(".sortByPrice");
const sortByNameBtn = document.querySelector(".sortByName");

// Course list and price
const courses = [
  {
    name: "JavaScript Course",
    price: 199,
  },
  {
    name: "React Js Course",
    price: 399,
  },
  {
    name: "C++ Course",
    price: 149,
  },
  {
    name: "Block Chain Course",
    price: 599,
  },
  {
    name: "Solidity Course",
    price: 799,
  },
  {
    name: "Full Java Course",
    price: 99,
  },
];

// Generating the courses
const generateCourses = () => {
  listGroup.innerHTML = "";
  courses.forEach((course) => {
    // Create element
    listItem = document.createElement("li");
    span = document.createElement("span");

    // Adding class
    listItem.classList.add("list-group-item");
    span.classList.add("float-right");

    // Add courses in the list
    listItem.innerText = course.name;
    span.innerText = course.price + " Rs.";

    // Append the list
    listItem.appendChild(span);
    listGroup.appendChild(listItem);
  });
};

// Sorting By Price
const sortByPrice = () => {
  courses.sort((a, b) => {
    return a.price - b.price;
  });
  generateCourses();
};

// Sorting by name
const sortByName = () => {
  courses.sort((a, b) => {
    if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) {
      return 1;
    } else if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) {
      return -1;
    } else {
      return 0;
    }
  });
  generateCourses();
};

// Add eventlistner
sortByPriceBtn.addEventListener("click", sortByPrice);
sortByNameBtn.addEventListener("click", sortByName);

generateCourses();
