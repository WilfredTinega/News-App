import React, { useEffect, useState } from 'react'

const Home = () => {

  const [articles, setArticles] = useState([]);
  const searchNews = async (news) => {
    try {
      const url = `https://newsapi.org/v2/everything?q=${news}&from=2025-02-18&to=2025-02-18&sortBy=date&apiKey=${import.meta.env.VITE_NEWS_APIKEY}`;
      const response = await fetch(url);
      const data = await response.json();

      console.log(data.articles);

      setArticles(
        data.articles
      )
      
      
    } catch (error) {
      console.error(error.message)
    }
  }

  useEffect(()=>{
    searchNews();
  },[])
  return (
    <div>
      <div className='h-[200] bg-red-500'>
        <div>

        </div>
      </div>
      <div>
        <h3 className='flex items-center'>
          <hr className='w-9 font-bold' />
          <span>Latest News</span>
          <hr className='w-1/12 text-2xl'/>
        </h3>
      </div>
      
      <div  className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-2 px-1 inset-shadow-zinc-300'>
        {
        articles.map((article, index) => (
          <div className='' key={index}>
            <div >
              <img className='w-[100%] h-[250px]' src={article.urlToImage} alt="" />
            </div>
            <div>
              <div className='text-black text-sm'>{article.title}</div>
              <div className='text-gray-500 text-sm '>
                <span className='pr-1'>{article.description}</span>
                <a className='hover:bg-amber-500 text-amber-500 hover:text-black rounded-full px-2' href={article.url}>Read More</a></div>
              
            </div>
            <div>
              <span>{article.author}, {article.source.name} </span>
              <div className='flex items-center'>
                <span className="material-symbols-outlined">schedule</span>
                <span className=''>{new Date(article.publishedAt).toLocaleString() }</span>
              </div>
            </div>
          </div>
        )).slice(0,20)  
      }
      </div>
      
    </div>
  )
}

export default Home
