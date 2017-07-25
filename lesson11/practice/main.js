       var users;

       function getDataFromTextArea() {
           users = JSON.parse(document.getElementById('myTextAres').value);
           //console.log(users);

           var personGender = {
               fem: "0",
               mal: "0"
           };
           for (var i = 0; i < users.length; i++) {
               if (users[i]['gender'] == "Female") {
                   personGender.fem++;
               } else {
                   personGender.mal++;
               }
           }
           console.log(personGender);

           var personColor = {};
           var countOfUniqueColors = 0;
           for (var j = 0; j < users.length; j++) {
               if (personColor.hasOwnProperty(users[j].favorite_color)) {
                   personColor[users[j].favorite_color]++;

               } else {
                   personColor[users[j].favorite_color] = 1;
                   countOfUniqueColors++;
               }

           }
           console.log(personColor);
           console.log("The number of favorite unique colors is " + countOfUniqueColors);

           var colorMax = 0;
           var favouriteColor = "";
           for (var p in personColor) {
               if (personColor[p] > colorMax) {
                   colorMax = personColor[p];
                   favouriteColor = p;
               }
           }
           console.log("The most favourite color is: " + favouriteColor);

           var personName = {};
           var uniqueName = 0;
           var notUniqueNames = 0;
           for (var n = 1; n < users.length; n++) {
               if (personName.hasOwnProperty(users[n].first_name)) {
                   personName[users[n].first_name]++;
               } else {
                   personName[users[n].first_name] = 1;
                   uniqueName++;
               }
               notUniqueNames = users.length - uniqueName;
           }
           console.log("uniqueNames: " + uniqueName, "notUniqueNames: " + notUniqueNames);



       }
