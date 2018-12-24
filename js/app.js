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

/*This commented out code is what I originally had but instead of randomly showing 12 employees, the pictures showed 
the same person, OI corrected this near the ajax request*/

       //create variables for DIV Elements
//       var $galleryMarkUp = $('<div class="card"> </div>');
//       var $cardIMGContainer = $('<div class="card-img-container"> </div>');
//       var $cardInfoContainer = $('<div class="card-info-container"> </div>');

//       //Append $cardIMGContainer and $cardInfoContainer inside $galleryMarkUp
//       $galleryMarkUp.append($cardIMGContainer, $cardInfoContainer);

//       //I append an img src inside $cardIMGContainer
//       $cardIMGContainer.prepend('<img class="card-img" src="https://placehold.it/90x90" alt="profile picture">');
      
//       //I also need to append an h3 and a couple of paragraphs inside $cardInfoContainer
//       $cardInfoContainer.prepend('<h3 id="name" class="card-name cap">first last</h3>',
//       '<p class="card-text">email</p>', '<p class="card-text cap">city, state</p>');
      
//     //Append $galleryMarkUp inside <div id="gallery" class="gallery">
//      $('#gallery').append($galleryMarkUp);
     
    
     
// /*I need to create 12 gallery cards in order to hold 12 employees 
//      I used a code snippet from https://stackoverflow.com/a/10426334/10043628 user Guffa
//      */
     
//     for (let index = 0; index <11; index++) {
//        $galleryMarkUp.clone().insertAfter($galleryMarkUp)
        
//     }
//==========================================================================================================================================

      
/* 
  With information provided from The Random User Generator API https://randomuser.me/, 
  I  send a request to the API, and use the response data to display 12 users, 
  along with some basic information for each:

Image
First and Last Name
Email
City or location

I received some help on this section from https://stackoverflow.com/a/53909635/10043628 Mohammad Raheem
  */

  
 $.ajax({
    url: 'https://randomuser.me/api/?nat=us&results=12&',
    dataType: 'json',
    success: function(data) {
      console.log(data); //this should log the data for 12 employees in JSON format

      

      var employeeInfo = data.results //creating a reference to data.results
      var _cardTemplate = ''; //make variable reference for gallery
      var  modalBoxContainer = ''; //make variable for modal containers
      $.each(employeeInfo, function (index, employee) {
          //create variable references for Name, email, city,state, etc
          var name = employee.name.first + " " + employee.name.last;
          var email = employee.email;
          var picture = employee.picture.large;
          var location = employee.location.city;
          var number = employee.phone;
          var fullStreet = employee.location.street + " " + location + " " + employee.location.postcode;
          var birthday = employee.dob.date;

          //CREATE GALLERY CARDS AND SHOW CONTENT FOR SMALL GALLERY CARDS


          _cardTemplate += '<div class="card">';
          _cardTemplate += '<div class="card-img-container">';
          _cardTemplate += '<img class="card-img" src= "' + picture + '" alt="profile picture"></div>';
          _cardTemplate += '<div class="card-info-container"><h3 id="name" class="card-name cap">' + name + '</h3>';
          _cardTemplate += '<p class="card-text">' + email + '</p><p class="card-text cap">' + location + '</p>';
          _cardTemplate += '</div></div>';

         
         
        //CREATE MODAL CARDS AND SHOW CONTENT FOR THEM
        
        modalBoxContainer += '<div class="modal-container">';
        modalBoxContainer += '<div class="modal">';
        modalBoxContainer += '<button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>';
        modalBoxContainer += '<div class="modal-info-container"><img class="modal-img" src= "' + picture + '" alt="profile picture"><h3 id="name" class="modal-name cap">' + name + '</h3><p class="modal-text">' + email + '</p><p class="modal-text cap">' + location + '</p>';
        modalBoxContainer += '<hr>';
        modalBoxContainer += '<p class="modal-text">' + number + '</p><p class="modal-text">' + fullStreet + '</p><p class="modal-text">' + birthday + '</p></div>';
        modalBoxContainer += '<div2>';
         

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
         
          
        
        



      });

      $('#gallery').append(_cardTemplate); //Append Finally all cards with employee details
         //Finally, I will append modalBoxContainer inside body tag
        $('body').append(modalBoxContainer);
  }

})



      