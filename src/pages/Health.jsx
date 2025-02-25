import React, { useEffect, useState } from 'react'
import { getElapsedTime } from '../components/utils';
import Title from '../components/Tittle';
import loading from '../assets/loading.gif';

const Health = () => {
  const [articles, setArticles] = useState([]);
    const searchNews = async (news) => {
      const today = new Date().toISOString().split('T')[0];

      const day = new Date();
      day.setDate(day.getDate() - 2);
      const yesterday = day.toISOString().split('T')[0];

      try {
        const url = `https://newsapi.org/v2/everything?q=${news}&from=${yesterday}&to=${today}}&sortBy=popularity&apiKey=${import.meta.env.VITE_NEWS_APIKEY}`;
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
      searchNews("health");
    },[])
  return (
    <div>
      <Title text1='Health' text2='News'/>

            { articles.length === 0 ? (
              <div className="min-h-screen flex items-center justify-center w-full">
                <img src={loading} alt="Loading..." className="w-16 h-16" />
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-2 px-1 place-items-center">
                {articles.slice(0, 16).map((article, index) => (
                  <div key={index} className="w-full max-w-sm">
                    <div>
                      <img className="w-full h-[250px] object-cover" src={article.urlToImage} alt="" />
                    </div>
      
                    <div>
                      <div className="text-black text-sm">
                        {article.title}. source: {article.source.name}
                      </div>
      
                      <div className="text-gray-500 text-sm">
                        <a className="hover:bg-amber-500 text-amber-500 rounded-full px-2" href={article.url}>Read More</a>
                      </div>
                    </div>
      
                    <div>
                      <div className="flex items-center">
                        <span className="material-symbols-outlined">schedule</span>
                        <span>{getElapsedTime(article.publishedAt)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
      
    </div>
  )
}

export default Health
