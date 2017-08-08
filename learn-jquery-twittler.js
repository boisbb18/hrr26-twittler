$(function(){
  
       gettingTweets();
       /* function gettingTweets(){
        var index = streams.home.length - 1;
        while(index >= 0){
          var tweet = streams.home[index];
	      //var $test = $('<div class="myclass"></div> ');
	      //$test.text('@' + tweet.user + ': ' + tweet.message).appendTo($('ul'));
        $('.myclass').text('@' + tweet.user + ': ' + tweet.message).appendTo($('ul'));
      	  var $timing = $('<span class="time"></span>');
          var currentTime = new Date().getTime() / 1000;
          var passedTime = tweet.created_at.getTime()/1000;
          var difference = Math.round((currentTime - passedTime)/60);
              if (difference < 60){
              $timing.text(''+ difference + '\tago');
            } else{
              var hour = parseInt(difference/60);
              var minutes = parseInt(difference%60);
              $timing.text(''+ hour + ' hours  ' + minutes + ' ago.');
            }
          $timing.appendTo('.myclass');
   		    //$test.appendTo('.tweetBox');
          index -= 1;

        }
      }*/
      function gettingTweets(){
        var index = streams.home.length - 1;
       // var limit = (index < 10) ? index : (index - 10);
        while(index > 0){
          var tweet = streams.home[index];
          var $test = $('<div class="myclass"></div> ');
          var userName = '<a href=# class="user">' + tweet.user + '</a>'
          $test.html('@' + userName + ': ' + tweet.message).appendTo($('ul'));
          var $timing = $('<span class="time"></span>');
          var currentTime = new Date().getTime() / 1000;
          var passedTime = tweet.created_at.getTime()/1000;
          var difference = Math.round((currentTime - passedTime)/60);
              if (difference < 60){
              $timing.text(''+ difference + '\tago');
            } else{
              var hour = parseInt(difference/60);
              var minutes = parseInt(difference%60);
              $timing.text(''+ hour + ' hours  ' + minutes + ' ago.');
            }

           $timing.appendTo($test);
           $test.appendTo('.tweetBox');
           index -=1; 
        }
      }



      $('.box').click(function(){
        $('.tweetBox').html('');
         gettingTweets();
      });

        $('.add').click(function(){
        var input =  $('input').val();
        if(input === ""){
          alert("Please enter your tweet");
        }else{
            if(input.charAt(0) === "@"){
              var variables = input.split(' ');
              var user  = variables[0].slice(1);
              var message = variables.slice(1).join(' ');
              var date = new Date();
              var obj = {};
              obj.user = user;
              obj.message = message;
              obj.created_at = date;
              streams.home.push(obj);
              $('.tweetBox').html('');
              gettingTweets();
              $('input').val('');
            }
        }
      });

      $('.user').click(function(){
         var username = $(this).text()
         var newArray = newArr(username);
         $('.userText').text('@' + username + '\'s Tweets');
         $('.selectedName').html('');
        var index2 = 0;
        while (index2 < newArray.length){
          var tweet2 = newArray[index2];
          var $container = $('<div class="myclass"></div> ');
          $container.html('@' + tweet2.user +': '+tweet2.message);
          var $timing = $('<span class="time"></span>');
          var currentTime = new Date().getTime() / 1000;
          var passedTime = newArray[index2].created_at.getTime() / 1000;
          var difference = Math.round((currentTime - passedTime)/60);
              if (difference < 60){
              $timing.text(''+ difference + '\tago');
            } else{
              var hour = parseInt(difference/60);
              var minutes = parseInt(difference%60);
              $timing.text(''+ hour + ' hours  ' + minutes + ' ago.');
            }
          $timing.appendTo($container);
          $container.appendTo('.selectedName');
          index2 +=1;
        }
      });
      });
