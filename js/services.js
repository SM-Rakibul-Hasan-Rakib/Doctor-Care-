const services = [
  {
    id: 1,
    title: "Problemas digestivos",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.",
  },
  {
    id: 2,
    title: "Saúde Hormonal",
    description:
      "Amit minim mollit non deserunt ullamco est sit aliqua dolor do amit sint. Velit officia consequat duis enim.",
  },
  {
    id: 3,
    title: "Bem-estar mental",
    description:
      "Amit minor actions do not affect ullamco, as it is part of amit’s essence. Velit professionals confirm, duis follows through.",
  },
  {
    id: 4,
    title: "Cuidados Pediátricos",
    description:
      "Amit tiny details don’t ullamco the big picture, they are part of amit's depth. Velit ensures quality, making duis efficient.",
  },
  {
    id: 5,
    title: "Autoimune e Inflamação",
    description:
      "Amit small acts don’t eliminate ullamco, they complement amit’s nature. Velit approvals go smoothly, duis makes it work.",
  },
  {
    id: 6,
    title: "Saúde do Coração",
    description:
      "Amit simple efforts do not hinder ullamco, they strengthen amit’s core. Velit ensures success, while duis finalizes.",
  },
];

// generate service cart
function generateServiceHtml(service) {
  return `
  <div class = "bg-white shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer rounded-lg overflow-hidden">
  <div class="p-6 text-left">
  <img src= "./images/service-icon.png" alt="service icon"/>
  <h3 class="text-2xl font-semibold my-4">${service.title}</h3>
  <p class = "text-gray-700 mb-4">${service.description}</p>
  </div>
  </div>`;
}

// console.log(services);

const serviceContainer = document.getElementById("service-container");

serviceContainer.innerHTML = services
  .map((service) => generateServiceHtml(service))
  .join("");

console.log(serviceContainer.innerHTML);
