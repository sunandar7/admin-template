var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

const getyear = document.getElementById('getyear');
const getfullyear = new Date().getFullYear();
getyear.textContent = getfullyear;

// For Report Section
const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  counter.innerText = '0';

  const updatecounter=()=>{
    const target = Number(counter.getAttribute('data-target'));

    const ctr = Number(counter.innerText);
    const increment = target / 10;

    if(ctr < target){
      counter.innerText = ctr + increment;

      setTimeout(updatecounter,100);
    }
  };
  updatecounter();
})