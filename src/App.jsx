import React { useState,useEffect} from 'react'

const App = () => {

  const url = "https://www.themealdb.com/api/json/v1/1/search.php?f=a" 


  const [data,setData1] = useState ([]);
  const [search,setSearch] = useState ("");


  useEffect(()=>{
    
    async function main(){
      const data1 = await fetch(url);
      const data2 = await data1.json();
      console.log(data2)

      setData1(data2.meals)
    }

    main()

  }, []);


  const handleclick = async() =>{
    const url2 =`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`
    const sear =  await fetch(url2)
    const sear2 =  await sear.json()
    console.log(sear2)

    setData1(sear2.meals)

  }

  return (


    <div>

      <nav>

      <div>

        <input type="text" style={{border:"2px solid black"}}
         onChange={(e)=>{
          setSearch(e.target.value)
          }}    placeholder='Searh Here....'/>

        <button onClick={handleclick}>Click me</button>

      </div>

      </nav>
     
    <div className='grid'>

      {data?.map((packs)=>{
        const {strMeal,strMealThumb,strArea,strCategory} =packs;

        return(
          <>
          <div>
          <h1>{strMeal}</h1>
          <img src={strMealThumb} alt="" />
          </div>
          
          </>
        )
      
      })}

    
    </div>

    </div>
   
  )
}

export default App
