angular.module("quoteBook").service("dataService", function() {
   
     var quotes = [
        { text: 'Life isn\'t about getting and having, it\'s about giving and being.', author: 'Kevin Kruse'},
        { text: 'Whatever the mind of man can conceive and believe, it can achieve', author: 'Napoleon Hill'},
        { text: 'Strive not to be a success, but rather to be of value.', author: 'Albert Einstein'},
        { text: 'Two roads diverged in a wood, and I took the one less traveled by, And that has made all the difference.', author: 'Robert Frost'},
        { text: 'The most difficult thing is the decision to act, the rest is merely tenacity.', author: 'Amelia Earhart'},
        { text: 'Life is what happens to you while you\'re busy making other plans.', author: 'John Lennon'},
        { text: 'What even is a jQuery?', author: 'Tyler S. McGinnis'}
    ];
   
//    this.toggleEntry = function() {
//        if ()
//    }
   
   this.getData = function() {
       return quotes;
   };
   
   this.addData = function(inQuote, inAuthor) {
        if (inQuote && inAuthor) {
	       var newQuote = {
               text: inQuote,
               author: inAuthor
           } 
           quotes.push(newQuote);
        }
        else {
            alert("Invalid quote. Please enter a quote and author.")
        }
   };
   
   this.removeData = function(quoteTextIn) {
       var quoteText = quoteTextIn.toUpperCase().trim();
       console.log(quoteText);
       for (var i in quotes) {
           var rightQuote = true;
           var quoteFormatted = quotes[i].text.toUpperCase().trim();
           for (var j = 0; j < quotes[i].text.length; j++) {
                if (quoteFormatted[j] !== quoteText[j]) {
                    rightQuote = false;
                }
                // else {
                //    rightQuote = false;
                // }
           }
           if(rightQuote === true) {
               quotes.splice(i,1);
               return;
           }
       }
   };
   
    
});