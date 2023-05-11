import './style.css';
import { useState, useEffect } from "react";
import Navbar from "./Navbar";

function Gallery() {
  const [sort, setSort] = useState("asc");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [access_token, setToken] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const access_token = localStorage.getItem('token')
    setToken(access_token)
    setLoading(true)
  
    fetch("http://34.101.113.12/api/umkm", {
      method: "GET",
      headers: {
        'Authorization': `Bearer ${access_token}`,
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      setData(data.data.sort((a, b) => {
        if (sort === 'asc') {
          return a.nama_umkm.localeCompare(b.nama_umkm);
        } else {
          return b.nama_umkm.localeCompare(a.nama_umkm);
        }
      }));
      // setData(data.data);
      setLoading(false);
    }).catch(error => {
      console.log(error)
      setLoading(false)
    })
  },[sort])

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter((item) => {
    const namaUmkm = item.nama_umkm.toLowerCase();
    const searchTermLowerCase = searchTerm.toLowerCase();

    return namaUmkm.includes(searchTermLowerCase);
  });
  
  console.log(filteredData);

  return (
    <>
      <Navbar />
      <div className="wrapper-gallery">
        <div className="sort-container">
          <div className="options">
            <select
              onChange={(e) => setSort(e.target.value)}
              data-testid="sort"
              className="form-select"
              style={{}}
            >
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>
        </div>
        <div className="search">
          <input className="input-search" type="search" placeholder="Search" value={searchTerm} onChange={handleSearchChange}/>
        </div>
      </div>
      <div className="textumkm-gallery">
        <h1>Gallery UMKM</h1>
      </div>

      {filteredData.map((user) => (
        <div className="wrapperdata-gallery">
          <div className="image-gallery">
            <img src={user.gambar_umkm} alt={user.nama_umkm} />
          </div>
          <div className="infotext-gallery">
            <h1>{user.nama_umkm}</h1>
            <h2>{user.detail_umkm}</h2>
            <p>{user.motto_umkm}</p>
          </div>
        </div>    
      ))}  
    </>
  );
}

export default Gallery;