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
    url: 'https://randomuser.me/api/?results=12',
    dataType: 'json',
    success: function(data) {
      console.log(data.results); //this should log the data for 12 employees inJSON format
//===================================================================================================================
      /*Below, I created a search bar dynamically, I
      used the HTML markup as a reference, I append it to `search-container` div.
      
      <form action="#" method="get">
                            <input type="search" id="search-input" class="search-input" placeholder="Search...">
                            <input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">
                        </form>
      */
      
      //create variable for the form element 
      var $searchBox = $('<form action="#" method="get"> </form>');
      //Inside the form element I append two input types, one is search and the other button
      $searchBox.append('<input type="search" id="search-input" class="search-input" placeholder="Search...">',
       '<input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">');
      
        
      //Append $searchBox inside <div class="search-container"> 
      $('.search-container').append($searchBox);
//==========================================================================================================================================

      /*Next I will create the gallery markup by using the commented html markup as reference and
       append them to the `gallery` div.

      <div class="card">
                    <div class="card-img-container">
                        <img class="card-img" src="https://placehold.it/90x90" alt="profile picture">
                    </div>
                    <div class="card-info-container">
                        <h3 id="name" class="card-name cap">first last</h3>
                        <p class="card-text">email</p>
                        <p class="card-text cap">city, state</p>
                    </div>
                </div>
      
      */

      //create variables for DIV Elements
      var $galleryMarkUp = $('<div class="card"> </div>');
      var $cardIMGContainer = $('<div class="card-img-container"> </div>');
      var $cardInfoContainer = $('<div class="card-info-container"> </div>');

      //Append $cardIMGContainer and $cardInfoContainer inside $galleryMarkUp
      $galleryMarkUp.append($cardIMGContainer, $cardInfoContainer);

      //I append an img src inside $cardIMGContainer
      $cardIMGContainer.append('<img class="card-img" src="https://placehold.it/90x90" alt="profile picture">');
      
      //I also need to append an h3 and a couple of paragraphs inside $cardInfoContainer
      $cardInfoContainer.append('<h3 id="name" class="card-name cap">first last</h3>',
      '<p class="card-text">email</p>', '<p class="card-text cap">city, state</p>');
      
    //Append $galleryMarkUp inside <div id="gallery" class="gallery">
     $('.gallery').append($galleryMarkUp);
    
//==========================================================================================================================================

     /*Now I will dynamically create the modal box markup using the html below as guidance

     <div1 class="modal-container">
                <div2 class="modal">
                    <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
                    <div3 class="modal-info-container">
                        <img class="modal-img" src="https://placehold.it/125x125" alt="profile picture">
                        <h3 id="name" class="modal-name cap">name</h3>
                        <p class="modal-text">email</p>
                        <p class="modal-text cap">city</p>
                        <hr>
                        <p class="modal-text">(555) 555-5555</p>
                        <p class="modal-text">123 Portland Ave., Portland, OR 97204</p>
                        <p class="modal-text">Birthday: 10/21/2015</p>
                    </div3>
                </div2>

                // IMPORTANT: Below is only for exceeds tasks 
                <div4 class="modal-btn-container">
                    <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
                    <button type="button" id="modal-next" class="modal-next btn">Next</button>
                </div4>
    </div1>

     */ 
    
     //Create variables for the div elements
     var $modalBoxContainer = $('<div class="modal-container"> </div>');
     var $modal = $('<div class="modal"> </div>');
     var $modalInfoContainer = $('<div class="modal-info-container"> </div>');
     var $modalBtnContainer = $('<div class="modal-btn-container"> </div>'); //modal buttons

     //Append $modal, $modalInfoContainer and $modalBtnContainer inside $modalBoxContainer
      $modalBoxContainer.append($modal, $modalInfoContainer,);
      
      //Append an button input inside $modal
      $modal.append('<button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong> </button');


      /*Inside $modal I will append a 
      [img scr], 
      [h3], 
      [2 paragraphs], 
      followed by an [hr], 
      and 3 more paragraphs*/   

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
       
       //I need to make it so that the modal will close itself when clicking on the X
       $('#modal-close-btn').click(function ()  {
       
         console.log('you clicked on the x button');
       });
    }
    
  });

