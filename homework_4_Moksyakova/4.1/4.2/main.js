class MyString{
    reverse(word) {
      return word.split('').reverse().join('')
    }
    ucFirst(word) {
      word = word.toLowerCase()
      return  word.charAt(0).toUpperCase() + word.substr(1)
    }
    ucWords(word) {
       word = word.toLowerCase()
       return word = word.replace(/(^\w{1})|(\s{1}\w{1})/g, match => match.toUpperCase()); 
    }
  }
  
  const str = new MyString();
  
  console.log(str.reverse('IVAN'))
  console.log(str.ucFirst('arsenal'))
  console.log(str.ucWords('arsenal arsenal arsenal'))