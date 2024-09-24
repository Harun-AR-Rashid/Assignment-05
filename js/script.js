// donation functionality here
// common function 
function commonFunction(id) {
    const inputfield = document.getElementById(id).value;
    const inputfieldNumber = parseFloat(inputfield);
    return inputfieldNumber;

};

function elementFunction(id) {
    const inputelement = document.getElementById(id).innerText;
    const inputelementNumber = parseFloat(inputelement);
    return inputelementNumber;
};
function sharedCommonFunction(id) {
    const oneInAll = document.getElementById(id);
    return oneInAll;
}

// Website's  Activity starts from here 
// Donate for Flood at Noakhali, Bangladesh javascript starts here
document.getElementById('donate-for-noakhali').addEventListener('click', function () {
    const inputAmount = commonFunction('input-for-noakhali');
    const totalAmount = elementFunction('total-saving-amount');
    if (isNaN(inputAmount) || inputAmount <= 0) {
        alert('Invalid Donation Amount!');
        return;
    };
    if (inputAmount > totalAmount) {
        alert('You do not have sufficient donation balance!');
        return;
    }
    const amountForNoakhali = elementFunction('current-noakhali-amount');
    const updateNoakhaliBalance = inputAmount + amountForNoakhali;
    document.getElementById('current-noakhali-amount').innerText = updateNoakhaliBalance;
    const totalUpdatedSavingAmount = totalAmount - inputAmount;
    document.getElementById('total-saving-amount').innerText = totalUpdatedSavingAmount;
    const donateForNoakhali = sharedCommonFunction('flood-at-noakhali').innerText;
    const transactionHistory = document.createElement('div');
    transactionHistory.classList.add('my-2', 'border-2', 'border-gray-300', 'rounded-lg', 'leading-9', 'p-3');
    transactionHistory.innerHTML =
        `
    <p class='text-slate-600'>${inputAmount} BDT is Donated for ${donateForNoakhali}<p/>
    <p class='text-amber-700'>${new Date().toDateString()} ${new Date().toTimeString()}</p>
    `;
    sharedCommonFunction('transaction-container').appendChild(transactionHistory);
});
// Donate for Flood at Noakhali, Bangladesh javascript ends here

// Donate for Flood Relief in Feni,Bangladesh javascript starts here

document.getElementById('donate-for-feni').addEventListener('click', function () {
    const inputAmount = commonFunction('input-for-feni');
    const totalAmount = elementFunction('total-saving-amount');
    if (isNaN(inputAmount) || inputAmount <= 0) {
        alert('Invalid Donation Amount!');
        return;
    };
    if (inputAmount > totalAmount) {
        alert('You do not have sufficient donation balance!');
        return;
    }
    const amountForNoakhali = elementFunction('current-feni-amount');
    const updateNoakhaliBalance = inputAmount + amountForNoakhali;
    document.getElementById('current-feni-amount').innerText = updateNoakhaliBalance;
    const totalUpdatedSavingAmount = totalAmount - inputAmount;
    document.getElementById('total-saving-amount').innerText = totalUpdatedSavingAmount;
    const donateForFeni = sharedCommonFunction('flood-at-feni').innerText;
    const transactionHistory = document.createElement('div');
    transactionHistory.classList.add('my-2', 'border-2', 'border-gray-300', 'rounded-lg', 'leading-9', 'p-3');
    transactionHistory.innerHTML =
        `
    <p class='text-fuchsia-400'>${inputAmount} BDT is Donated for ${donateForFeni}<p/>
    <p class='text-violet-500'>${new Date().toDateString()} ${new Date().toTimeString()}</p>
    `;
    sharedCommonFunction('transaction-container').appendChild(transactionHistory);
});
// Donate for Flood Relief in Feni,Bangladesh javascript starts here
// Aid for Injured in the Quota Movement javascript starts here
document.getElementById('donate-for-quota-movement').addEventListener('click', function () {
    const inputAmount = commonFunction('input-for-quota-movement');
    const totalAmount = elementFunction('total-saving-amount');
    if (isNaN(inputAmount) || inputAmount <= 0) {
        alert('Invalid Donation Amount!');
        return;
    };
    if (inputAmount > totalAmount) {
        alert('You do not have sufficient donation balance!');
        return;
    }
    const amountForNoakhali = elementFunction('current-quota-movement-amount');
    const updateNoakhaliBalance = inputAmount + amountForNoakhali;
    document.getElementById('current-quota-movement-amount').innerText = updateNoakhaliBalance;
    const totalUpdatedSavingAmount = totalAmount - inputAmount;
    document.getElementById('total-saving-amount').innerText = totalUpdatedSavingAmount;
    const donateForMovement = sharedCommonFunction('movement-at-dhaka').innerText;
    const transactionHistory = document.createElement('div');
    transactionHistory.classList.add('my-2', 'border-2', 'border-gray-300', 'rounded-lg', 'leading-9', 'p-3');
    transactionHistory.innerHTML =
        `
    <p class='text-blue-400'>${inputAmount} BDT is Donated for ${donateForMovement}<p/>
    <p class = 'text-red-500'>${new Date().toDateString()} ${new Date().toTimeString()}</p>
    `;
    sharedCommonFunction('transaction-container').appendChild(transactionHistory);
});
// History button handler added
const historyTab = sharedCommonFunction('history-btn');
const donationTab = sharedCommonFunction('donation-btn');
historyTab.addEventListener('click', function () {
    historyTab.classList.add('bg-lime-400',);
    const transentionPart = sharedCommonFunction('transaction-for-donation');
    transentionPart.classList.remove('hidden')
    const donationPart = sharedCommonFunction('donation-part');
    donationPart.classList.add('hidden');
    donationTab.classList.remove('bg-lime-400');
    donationTab.classList.add('btn-active', 'bg-gray-400');
});
// Donation button handler added

donationTab.addEventListener('click', function () {
    historyTab.classList.remove('bg-lime-400',);
    const transentionPart = sharedCommonFunction('transaction-for-donation');
    transentionPart.classList.add('hidden')
    const donationPart = sharedCommonFunction('donation-part');
    donationPart.classList.remove('hidden');
    donationTab.classList.add('bg-lime-400');
    donationTab.classList.remove('btn-active', 'bg-gray-400');
});