// <<<<< QUESTION-39 >>>>>>>
{ // this block is placed due to variables in this program warns that
    // these variables are already declared in previous programs
    function describe_city(city, country) {
        if (country === void 0) { country = "Pakistan"; }
        console.log("\"", city, ",", country, "\"");
    }
    describe_city("Lahore");
    describe_city("Karachi");
    describe_city("Sydney", "Australia");
    describe_city("Berlin", "Germany");
}
