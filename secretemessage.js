let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

//console.log(secretMessage.length);

secretMessage.pop(); 
//console.log(secretMessage.length);

//add to the list 
secretMessage.push('to','Program');

//replace string 'easily' 
//secretMessage[secretMessage.indexOf('easily')] = 'right';
secretMessage[7]='right';

//Delete the first element on the list
secretMessage.shift();

//adding to first index of the array
secretMessage.unshift('Programming');

//Replace strings with 'know'
secretMessage.splice([6], 5, 'know');

//Displaying elements as a single string
console.log(secretMessage.join(' '));