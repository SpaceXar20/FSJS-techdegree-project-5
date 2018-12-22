//===================================================================================================================
      /*Below, I created a search bar dynamically, I
      used the HTML markup as a reference, I append it to `search-container` div.*/
      
      //create variable for the form element 
      var $searchBox = $('<form action="#" method="get"> </form>');
      //Inside the form element I append two input types, one is search and the other button
      $searchBox.append('<input type="search" id="search-input" class="search-input" placeholder="Search...">',
       '<input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">');
      
        
      //Append $searchBox inside <div class="search-container"> 
      $('.search-container').append($searchBox);
//==========================================================================================================================================

      /*Next I will create the gallery markup by using the commented html markup as reference and
       append them to the `gallery` div. */

      //create variables for DIV Elements
      var $galleryMarkUp = $('<div class="card"> </div>');
      var $cardIMGContainer = $('<div class="card-img-container"> </div>');
      var $cardInfoContainer = $('<div class="card-info-container"> </div>');

      //Append $cardIMGContainer and $cardInfoContainer inside $galleryMarkUp
      $galleryMarkUp.append($cardIMGContainer, $cardInfoContainer);

      //I append an img src inside $cardIMGContainer
      $cardIMGContainer.prepend('<img class="card-img" src="https://placehold.it/90x90" alt="profile picture">');
      
      //I also need to append an h3 and a couple of paragraphs inside $cardInfoContainer
      $cardInfoContainer.prepend('<h3 id="name" class="card-name cap">first last</h3>',
      '<p class="card-text">email</p>', '<p class="card-text cap">city, state</p>');
      
    //Append $galleryMarkUp inside <div id="gallery" class="gallery">
     $('#gallery').append($galleryMarkUp);


     /*I need to create 12 gallery cards in order to hold 12 employees 
     I used a code snippet from https://stackoverflow.com/a/10426334/10043628 user Guffa
     */
     
    for (let index = 1; index <12; index++) {
       $galleryMarkUp.clone().insertAfter($galleryMarkUp)
        
    }
//==========================================================================================================================================

     /*Now I will dynamically create the modal box markup using the html below as guidance*/ 
    
     //Create variables for the div elements
     var $modalBoxContainer = $('<div class="modal-container"> </div>');
     var $modal = $('<div class="modal"> </div>');
     var $modalInfoContainer = $('<div class="modal-info-container"> </div>');
     var $modalBtnContainer = $('<div class="modal-btn-container"> </div>'); //modal buttons

     //Append $modal, $modalInfoContainer and $modalBtnContainer inside $modalBoxContainer
      $modalBoxContainer.append($modal, $modalInfoContainer,);
      
      //Append $modalBtnContainer, inside $modal
      $modal.append('<button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong> </button');


      /*Inside $modal I will append a 
      [img scr], 
      [h3], 
      [2 paragraphs], 
      followed by an [hr], 
      and 3 more paragraphs 
      and lastly $modalBtnContainer */   

      $modal.prepend('<img class="modal-img" src="https://placehold.it/125x125" alt="profile picture">', 
      '<h3 id="name" class="modal-name cap">name</h3>', 
      '<p class="modal-text">email</p>',
       '<p class="modal-text cap">city</p>',
      '<hr>', 
      '<p class="modal-text">(555) 555-5555</p>',
       '<p class="modal-text">123 Portland Ave., Portland, OR 97204</p>', 
      '<p class="modal-text">Birthday: 10/21/2015</p>', $modalBtnContainer);
        console.log($modal)
      
      
      //Finally, I will append $modalBoxContainer inside body tag
       $('body').append($modalBoxContainer);
//==========================================================================================================================================
  
       
    /*appends an "active" class to .modal(pop-up-window) and .modal-container(overlay) when .card is clicked
       
       I used a code snippet from https://www.pair.com/support/kb/how-to-use-jquery-to-generate-modal-pop-up-when-clicked/
       */
       $('.card').on("click", function() {
           $(".modal, .modal-container").addClass("active");
           console.log('the modal should pop up after clicking the div card')
       });

       /*This removes the "active" class to .modal(pop-up-window)  and .modal-container 
       when clicking on: the "X" button, the opened modal or clicking outside the modal,
       so the user has 3 ways to close a modal, this improves UX
       */
       $('#modal-close-btn, .modal, .modal-container').on("click", function()  {
       $(".modal, .modal-container").removeClass("active");
         console.log('you clicked on the x button');
    }); 
//==========================================================================================================================================
      


/* 
  With information provided from The Random User Generator API https://randomuser.me/, 
  I  send a request to the API, and use the response data to display 12 users, 
  along with some basic information for each:

Image
First and Last Name
Email
City or location
  */

 $.ajax({
    url: 'https://randomuser.me/api/?results=12',//'https://randomuser.me/api/?nat=us'
    dataType: 'json',
    success: function(data) {
      console.log(data.results); //this should log the data for 12 employees inJSON format


    } //closes success function
    
  }); //closes ajax request

