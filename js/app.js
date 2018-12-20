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

      /*starting from line 25, I created a search bar dynamically, I
      used the HTML markup as a reference, I append it to `search-container` div.*/

      var $searchBox = $('<form action="#" method="get"> </form>')
      $searchBox.append('<input type="search" id="search-input" class="search-input" placeholder="Search...">')
      $searchBox.append('<input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">')
      $('.search-container').append($searchBox);
    }
    
  });

