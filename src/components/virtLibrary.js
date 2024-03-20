import React, {useState} from 'react'
import axios from 'axios'

function VirtLibrary() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const apiKey = 'AIzaSyA67py4_kzOp3l7oQCwL5FUNso6GoTp8no'; 

const handleSubmit = async (event) => {
  event.preventDefault();
  setLoading(true);
    setError(null);
  try {
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${apiKey}`);
    setSearchResults(response.data.items.slice(0, 1)); 
  } catch (error) {
    console.error('Error fetching data:', error);
    setError('An error occurred. Please try again later.');
  }finally {
    setLoading(false);
  }
};


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type='text' className='input-control w-full px-4 py-4 my-10 rounded-xl border-brown' placeholder='look through our collection' autoComplete="off" value={searchTerm} onChange={handleChange}></input>
            <button type='submit' className='bg-brown text-white px-4 py-2 rounded-xl translate-x-48 hover:text-beige duration-300 sm:translate-x-64 md:translate-x-[700px] text-sm sm:text-md md:text-lg'>search</button>
        </form>
        {loading && <div>Loading...</div>}
        {error && <div>{error}</div>}
        <ul>
          {searchResults.map((book,index)=>{
            return(
            <li key={index}>
              <div className='w-60 h-76 bg-beige rounded-r-xl mt-8 translate-x-24 hover:scale-110 duration-500 sm:translate-x-44 md:translate-x-[600px]'>
              {book.volumeInfo.imageLinks && <img src={book.volumeInfo.imageLinks.thumbnail} alt="Book cover" className="w-36 h-48" />}
                <div className='text-lg font-semibold'>
                    <p>{book.volumeInfo.title}</p>
                    <p>{book.volumeInfo.authors && book.volumeInfo.authors.join(', ')}</p>
                </div>
              </div>
            </li>
            );
          })}
        </ul>
    </div>
  )
}

export default VirtLibrary