// import { useState, useEffect } from "react";
// import { FaEllipsisV, FaTrash, FaEdit, FaUserCircle } from "react-icons/fa";
// import { message } from "antd";
// import { useParams } from "react-router-dom";

// const Detail = () => {
//     setLoading(true)
//     const [dataDetail, setDataDetail] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [access_token, setToken] = useState('');
//     const [searchTerm, setSearchTerm] = useState('');
//     const {id} = useParams()
  
//     useEffect(() => {
//       const access_token = localStorage.getItem('token')
//       setToken(access_token)
//       setLoading(true)
  
//       fetch("http://34.101.113.12/api/umkm" + id, {
//         method: "GET",
//         headers: {
//           'Authorization': `Bearer ${access_token}`,
//           'Content-Type': 'application/json'
//         }
//       })
//       .then(response => response.json())
//       .then(data => {
//         setDataDetail(data.data);
//         setLoading(false);
//       }).catch(error => {
//         console.log(error)
//         setLoading(false)
//       })
//     },[])

//   return (
//     {dataDetail.data.map }
//   );
// }

// export default Detail;
