 document.getElementById("button-blog").addEventListener("click", function(){
    window.location.href= "/blog.html";
 });
  document.getElementById("button-home").addEventListener("click", function(){
    window.location.href = "/index.html";
  });

 
  document.getElementById("history-button").addEventListener("click", function(){
     viewHideToggle("history-data");
     const historyButton = document.getElementById("history-button");
     historyButton.classList.add(
      "bg-lime-400",
       "px-5",
       "py-2",
       "rounded-lg",
       "font-semibold",
       "border-2",
       "border-lime-400",
        
     );
     donateButton.classList.add(
           "border-2",
           "px-5",
           "py-2",
           "rounded-lg",
           "font-semibold",
     );

  })

   document.getElementById("donate-button-for-noakhali").addEventListener("click", function(){
      const addMoney = getValueByIdFromInpud('donete-noakhali-input');
      const donarBlance = donationValueAmount('main-blance');
 
        if(addMoney > donarBlance){
         alert ("you don't have sufficient balance for donate");
         return;
        }

        if(addMoney <= 0 ){
         alert("negative value is not accepted");
         return;
        }
    })