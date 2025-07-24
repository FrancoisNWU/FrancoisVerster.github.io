function toggleCollapse(element) {
  const content = element.nextElementSibling;
  const icon = element.querySelector('.arrow');

  // Toggle content
  content.style.display = content.style.display === "block" ? "none" : "block";

  // Toggle arrow direction
  icon.classList.toggle('rotate');

  // Highlight section
  element.classList.toggle('active');
}

// University marks data
const marksData = [
  { code: "ACCS 111", description: "Financial Accountancy I", result: "94.0", grade: "Distinction" },
  { code: "STTN 111", description: "Descriptive Statistics", result: "96.0", grade: "Distinction" },
  { code: "ACCS 121", description: "Financial Accountancy II", result: "94.0", grade: "Distinction" },
  { code: "ALDE 122", description: "Academic Literacy Development - English", result: "88.0", grade: "Distinction" },
  { code: "BMAN 111", description: "Intro to Business Management", result: "84.0", grade: "Distinction" },
  { code: "CMPG 111", description: "Intro to Computing and Programming (Python)", result: "87.0", grade: "Distinction" },
  { code: "MTHS 113", description: "Basic Mathematical Techniques", result: "85.0", grade: "Distinction" },
  { code: "CMPG 121", description: "Structured Programming (C++)", result: "95.0", grade: "Distinction" },
  { code: "CMPG 122", description: "User Interface Programming (C#)", result: "90.0", grade: "Distinction" },
  { code: "MTHS 225", description: "Discrete Mathematics", result: "69.0", grade: "Pass" },
  { code: "BMAN 223", description: "Problem Solving for Managers", result: "87.0", grade: "Distinction" },
  { code: "CMPG 211", description: "Object Oriented Programming (Java)", result: "88.0", grade: "Distinction" },
  { code: "CMPG 212", description: "Apps & Advanced UI Programming (SQL)", result: "89.0", grade: "Distinction" },
  { code: "CMPG 213", description: "System Analysis & Design I", result: "86.0", grade: "Distinction" },
  { code: "CMPG 214", description: "Communication Skills", result: "82.0", grade: "Distinction" },
  { code: "CMPG 215", description: "Information Security", result: "95.0", grade: "Distinction" },
  { code: "CMPG 221", description: "Data Structures & Algorithms (Java)", result: "77.0", grade: "Distinction" },
  { code: "CMPG 223", description: "System Analysis & Design II", result: "82.0", grade: "Distinction" },
  { code: "CMPG 311", description: "Databases (Oracle & SQL)", result: "90.0", grade: "Distinction" },
  { code: "CMPG 312", description: "Decision Support Systems I", result: "75.0", grade: "Distinction" },
  { code: "CMPG 315", description: "Computer Networks", result: "86.0", grade: "Distinction" },
  { code: "CMPG 321", description: "Advanced Databases", result: "82.0", grade: "Distinction" },
  { code: "CMPG 322", description: "Decision Support Systems II", result: "82.0", grade: "Distinction" },
  { code: "CMPG 323", description: "IT Development", result: "92.0", grade: "Distinction" },
  { code: "-", description: "-", result: "-", grade: "-" },
];

let currentSlideIndex = 0;
const recordsPerSlide = 5;
const totalSlides = Math.ceil(marksData.length / recordsPerSlide);

function displaySlide(slideIndex) {
  const tableBody = document.getElementById('marksTableBody');
  const startIndex = slideIndex * recordsPerSlide;
  const endIndex = Math.min(startIndex + recordsPerSlide, marksData.length);

  tableBody.innerHTML = ''; // Clear table

  for (let i = startIndex; i < endIndex; i++) {
    const row = tableBody.insertRow();
    row.insertCell(0).textContent = marksData[i].code;
    row.insertCell(1).textContent = marksData[i].description;
    row.insertCell(2).textContent = marksData[i].result;
    row.insertCell(3).textContent = marksData[i].grade;
  }

  // Update dots
  const dots = document.querySelectorAll('.dot');
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === slideIndex);
  });

  document.querySelector('.nav-left').disabled = false;
  document.querySelector('.nav-right').disabled = false;
}

function changeSlide(direction) {
  let newIndex = currentSlideIndex + direction;
  newIndex = (newIndex + totalSlides) % totalSlides;
  currentSlideIndex = newIndex;
  displaySlide(currentSlideIndex);
}

function currentSlide(slideNumber) {
  currentSlideIndex = slideNumber - 1;
  displaySlide(currentSlideIndex);
}

document.addEventListener('DOMContentLoaded', function () {
  displaySlide(0);
});
