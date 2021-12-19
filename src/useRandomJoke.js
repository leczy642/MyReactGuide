import React, {useState, useEffect} from "react";

function useRandomJoke(firstName, lastName) {
    const [joke, setJoke] = useState('');

    //custom hook
    //const newJoke = useRandomJoke(firstName, lastName);
    
    
    useEffect(() => { 
      const fetchData = async () =>(
        await fetch(`http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`)
        .then((res) => res.json())
        .then((data) =>{
          setJoke(data.value.joke);
          //console.log(data.value.joke);
        })
      );
      fetchData();
    }, [firstName, lastName]);
    return joke;
}

export default useRandomJoke;