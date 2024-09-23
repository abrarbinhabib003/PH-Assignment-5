
document.getElementById('blog-btn').addEventListener('click', function () {
        window.location.href = 'blog.html';
    });

// 
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
  //  update Current  balance 
  function updateBalance(donationAmount) {
    const balanceElement = document.getElementById('total-balance');
    let currentBalance = parseFloat(balanceElement.textContent.split(' ')[0]);
  

    

// Declaring a new variable to store the new balance
 const newBalance = currentBalance - donationAmount;
 if (newBalance < 0) {
   alert('You do not have enough balance to donate!');
 
   }
   else {
     // new balance
     balanceElement.textContent = formatCurrency(newBalance);
   }
 
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
  // Updating Balance
  updateBalance(donationAmount);
  // Clear the input field
  document.getElementById('donation-input-noakhali').value = '';

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
  // Updating balance
  updateBalance(donationAmount);
  // Clear the input field
  document.getElementById('donation-input-sylhet').value = '';

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
  document.getElementById('donate-quota').addEventListener('click', function() {
      const donationAmount = getInputValueById('donation-input-quota');
      const totalAmountElement = document.getElementById('amount-quota');
      const location = "Aid for Injured in the Quota Movement";
    
      if (donationAmount > 0) {
        const currentAmount = parseFloat(totalAmountElement.textContent.split(' ')[1]);
        totalAmountElement.innerText = `💰 ${formatCurrency(currentAmount +  donationAmount)}`;

      addToHistory(location, donationAmount);
    // Updating balance
    updateBalance(donationAmount);
    // Clear the input field
    document.getElementById('donation-input-quota').value = '';

    
        // Show modal
        document.getElementById('congrats-modal').
  classList.remove('hidden');
      } else {
        alert('Please enter a valid donation amount!');
      }
    });


//Tab 
const historyTab = document.getElementById("history-tab");
const donateTab = document.getElementById("donate-tab");
historyTab.addEventListener("click", function () {

    historyTab.classList.add(
        "text-black",
 "bg-lime-400" );

      donateTab.classList.remove(
        "text-black",
"bg-lime-400" );
      donateTab.classList.add("text-black");


document.getElementById("donation-section").classList.add("hidden");
  document.getElementById("history-section").classList.remove("hidden");
});

donateTab.addEventListener("click", function () {

    donateTab.classList.add(
        "text-black",
       
       "bg-lime-400");

      historyTab.classList.remove(
        "text-black",
"bg-lime-400");
   

  document.getElementById("donation-section").classList.remove("hidden");
  document.getElementById("history-section").classList.add("hidden");
});



 

 

 
 
 
 
 
 
 
 






















































  
  
  
  

  
  
  
  
  

  
  
  
  



    













































