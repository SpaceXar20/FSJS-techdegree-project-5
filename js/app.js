/* 
  With information provided from The Random User Generator API https://randomuser.me/, I  send a request to the API, and use the response data to display 12 users, along with some basic information for each:
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

      /*starting from line 24, I created a search bar dynamically, I
      used the HTML markup as a reference, I append it to `search-container` div.
      
      <form action="#" method="get">
                            <input type="search" id="search-input" class="search-input" placeholder="Search...">
                            <input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">
                        </form>
      */

      var $searchBox = $('<form action="#" method="get"> </form>');
      $searchBox.append('<input type="search" id="search-input" class="search-input" placeholder="Search...">');
      $searchBox.append('<input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">');

      //Append $searchBox inside <div class="search-container"> 
      $('.search-container').append($searchBox);


      /*Next I will create the gallery markup by using the commented html markup as reference and
       append it to `search-container` div.

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
      $galleryMarkUp.append($cardIMGContainer);
      $galleryMarkUp.append($cardInfoContainer);

      //I append an img src inside $cardIMGContainer
      $cardIMGContainer.append('<img class="card-img" src="https://placehold.it/90x90" alt="profile picture">');
      
      //I also need to append an h3 and a couple of paragraphs inside $cardInfoContainer
      $cardInfoContainer.append('<h3 id="name" class="card-name cap">first last</h3>');
      $cardInfoContainer.append('<p class="card-text">email</p>');
      $cardInfoContainer.append('<p class="card-text cap">city, state</p>');

      //Append $galleryMarkUp inside <div id="gallery" class="gallery">
     $('#gallery').append($galleryMarkUp);

    }
    
  });

