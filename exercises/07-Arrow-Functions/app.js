
   // From this line up Do not change code below
   let str = "John";
   console.log(rapid(str));

   //Aquesta funció dona el JHN
  /*function rapid(str) {
    for (var i = 0; i > str.length; i++);
        var st = str.replace(/[aeiou]/gi, '');
        st = st.toUpperCase();
        console.log(st)
} */
function rapid(str){
    st = str
    for (var i = 0; i < st.length; i++);
        st = st.replace(/[aeiou]/gi, '') 
        st = st.toUpperCase();
        str = st;
       console.log(str);
}



  /*
// Arrow



    //NO RESUELTO//

    hello = function() {
  return "Hello World!";
}

With Arrow Function:
hello = () => {
  return "Hello World!";
}*/