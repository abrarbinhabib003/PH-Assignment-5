
document.getElementById('blog-btn').addEventListener('click', function () {
        window.location.href = '/blog.html';
    });


// Content Functionality
function getInputValueById(id) {
    return parseFloat(document.getElementById(id).value);
  }
  
  function formatCurrency(amount) {
    return `${amount.toFixed(2)} BDT`;
  }
  

  // History 
  let donationCount = 0;


  
//Tab Switching
const historyTab = document.getElementById("history-tab");
const donateTab = document.getElementById("donate-tab");
historyTab.addEventListener("click", function () {



  document.getElementById("donation-section").classList.add("hidden");
  document.getElementById("history-section").classList.remove("hidden");
});

donateTab.addEventListener("click", function () {
   

  document.getElementById("donation-section").classList.remove("hidden");
  document.getElementById("history-section").classList.add("hidden");
});



 

 

 
 
 
 
 
 
 
 






















































  
  
  
  

  
  
  
  
  

  
  
  
  



    













































