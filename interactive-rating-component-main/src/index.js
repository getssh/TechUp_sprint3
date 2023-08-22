let rateUs = document.querySelector('.rate-us');
let thankYou= document.querySelector('.thank-you');
let rated = document.querySelector('.rated');
let submitBtn = document.querySelector('.rate-submit');
let rateValue = 0;

const selectedNum = document.querySelectorAll(".rate");
let selectedDiv = null;

selectedNum.forEach(div => {
  div.addEventListener("click", function() {
    selectedNum.forEach(div => {
      div.style.backgroundColor = "#414444";
      div.style.color = '#8A8A8A';
    });
    
    this.style.backgroundColor = "#8A8A8A";
    this.style.color = "#fff";
    selectedDiv = this;
    rateValue = this.getAttribute("data-value");
  });
  div.addEventListener("mouseover", function() {
    if (this !== selectedDiv) {
      this.style.backgroundColor = "#fc7613";
      this.style.color = '#fff';
    }
  });
  div.addEventListener("mouseleave", function() {
    if (this !== selectedDiv) {
      this.style.backgroundColor = "#414444";
      this.style.color = "#8A8A8A";
    }
  });
});

submitBtn.addEventListener('click', () => {
  thankYou.style.display = '';
  rated.innerHTML = `You selected ${rateValue} out of 5`;
  rateUs.style.display = 'none';
})