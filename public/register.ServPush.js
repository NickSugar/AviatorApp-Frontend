'use strict';

if ('serviceWorker' in navigator && 'PushManager' in window) {
   navigator.serviceWorker.register('/service-worker.js')
   .then(function(swReg) {
    //  console.log('Service Worker is registered', swReg);
     swRegistration = swReg;
     initialiseUI();
   })
} else {
   pushButton.textContent = 'Push Not Supported';
}



const applicationServerPublicKey = 'BDiFChoiFbZQXXvO_tQx4UQAGbpAZOLDmdlxwoKYRO-Ri7-HgMlGSy1iv0poiadk2fU8iMGX5-KjagLzg0_fGvE';

const pushButton = document.querySelector('.pushBtn');

let isSubscribed = false;
let swRegistration = null;

function urlB64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, '+')
    .replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}


function initialiseUI() {
  pushButton.addEventListener('click', function() {
    pushButton.disabled = true;
    if (isSubscribed) {
      // TODO: Unsubscribe user
    } else {
      subscribeUser();
    }
  });

  // Set the initial subscription value
  swRegistration.pushManager.getSubscription()
  .then(function(subscription) {
    isSubscribed = !(subscription === null);

    updateSubscriptionOnServer(subscription);

    if (isSubscribed) {
      console.log('User IS subscribed.');
    } else {
      console.log('User is NOT subscribed.');
    }

    updateBtn();
  });
}

function updateBtn() {
  if (isSubscribed) {
    pushButton.textContent = 'Disable Push Messaging';
  } else {
    pushButton.textContent = 'Enable Push Messaging';
  }

  pushButton.disabled = false;
}
