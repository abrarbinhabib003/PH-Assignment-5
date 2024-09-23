
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
// Function to format the date and time
function formatDateTime(date) {
    const options = { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true, timeZone: 'Asia/Dhaka' };
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
    const timeZone = 'GMT+6 Dhaka, Bangladesh';
    return `${formattedDate} ${timeZone}`;
}
// Add to history
function addToHistory(location, amount) {
    const historyItem = document.createElement('div');
    historyItem.className = 'bg-white p-3 rounded-md border-l-2  shadow-xl mb-3 w-full';
  
    historyItem.innerHTML = `
     
     
      <p class="text-lg font-semibold "> ${formatCurrency(amount)} Taka is Donated for  ${location} </p>
      <p class="text-md ">Date: ${formatDateTime(new Date())}</p>
    `;
  
    const historyContainer = document.getElementById('history-list');
    historyContainer.insertBefore(historyItem, historyContainer.firstChild);
  }
 //  Noakhali
document.getElementById('donate-noakhali').addEventListener('click', function() {
    const donationAmount = getInputValueById('donation-input-noakhali');
    const totalAmountElement = document.getElementById('amount-noakhali');
    const location = "Donate for Flood at Noakhali, Bangladesh";
  
    if (donationAmount > 0) {
      const currentAmount = parseFloat(totalAmountElement.textContent.split(' ')[1]);
      totalAmountElement.innerText = `💰 ${formatCurrency(currentAmount + donationAmount)}`;
      addToHistory(location, donationAmount);
  
      // Show modal
      document.getElementById('congrats-modal').classList.remove('hidden');
    } else {
      alert('Please enter a valid donation amount!');
    }
  });

//  Sylhet
document.getElementById('donate-sylhet').addEventListener('click', function() {
    const donationAmount = getInputValueById('donation-input-sylhet');
    const totalAmountElement = document.getElementById('amount-sylhet');
    const location = "Donate for Flood at Sylhet,Bangladesh";
  
    if (donationAmount > 0) {
      const currentAmount = parseFloat(totalAmountElement.textContent.split(' ')[1]);
      totalAmountElement.innerText = `💰 ${formatCurrency(currentAmount + donationAmount)}`;
      addToHistory(location, donationAmount);
  
      // Show modal
      document.getElementById('congrats-modal').classList.remove('hidden');
    } else {
      alert('Please enter a valid donation amount!');
    }
  });
  

//  modal close
document.getElementById('close-confirmation').addEventListener('click', function() {
    document.getElementById('congrats-modal').classList.add('hidden');
  });

  //  Quota
  document.getElementById('donate-quota').
  addEventListener('click', function() {
      const donationAmount = getInputValueById
  ('donation-input-quota');
      const totalAmountElement = document.
  getElementById('amount-quota');
      const location = "Donate for Quota Movement at Bangladesh";
    
      if (donationAmount > 0) {
        const currentAmount = parseFloat
  (totalAmountElement.textContent.split(' ')
  [1]);
        totalAmountElement.innerText = `💰 $
  {formatCurrency(currentAmount + 
  donationAmount)}`;
        addToHistory(location, donationAmount);
    
        // Show modal
        document.getElementById('congrats-modal').
  classList.remove('hidden');
      } else {
        alert('Please enter a valid donation amount!');
      }
    });


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



 

 

 
 
 
 
 
 
 
 






















































  
  
  
  

  
  
  
  
  

  
  
  
  



    













































