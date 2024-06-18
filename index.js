var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload= function (){
    var res = JSON.parse(request.response);
    console.log(res);


    //a. Get all the countries from Asia continent /region using Filter method
    var asia_region = res.filter((ele)=>ele.region=="Asia");
    console.log(asia_region);

    //b. Get all the countries with a population of less than 2 lakhs using Filter method

    var popu = res.filter((ele1)=>ele1.population<200000);
    console.log(popu);
    
    
    //c. Print the following details name, capital, flag, using forEach method

    res.forEach((ele2)=>console.log(ele2.name.common))
    res.forEach((ele2)=>console.log(ele2.capital))
    res.forEach((ele2)=>console.log(ele2.flag))

   
    //d. Print the total population of countries using reduce method
   
    var reduce_popu= res.reduce((acc,cv)=>acc+cv.population,0)
    console.log(reduce_popu);

   
    //e. Print the country that uses US dollars as currency.

    var currency = res.filter((ele) => {
        for (let key in ele.currencies) {
          if (ele.currencies[key].name === "United States dollar") {
            return ele;
          }
        }
      });
    console.log(currency)

   

}
