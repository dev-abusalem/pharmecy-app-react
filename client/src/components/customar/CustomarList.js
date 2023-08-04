import React, { useEffect, useState } from "react";
import { GoSearch, GoThreeBars } from "react-icons/go";
import { GrDocumentPdf } from "react-icons/gr";
import { AiOutlinePlus } from "react-icons/ai";
import { SiMicrosoftexcel } from "react-icons/si";
import "./scss/customarlist.scss";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import { toast, ToastContainer } from "react-toastify";

const CustomarList = () => {

  const [customers, setCustomers] = useState([])
  const [loading, setLoading] = useState(false);
  const [selectValue, setSelectValue] = useState(10);
  const [searchs, setSearchs] = useState("");

  const customerData = [...customers]

  const showAllCate = async () =>{
    setLoading(true);
    const res = await axios.get("/medicine/customer");
    setLoading(false);
    setCustomers(res.data);

  }

  useEffect(()=>{  
    showAllCate()
  },[])


/////////////////// Change Seletc Value/////////////////////////////
function handleChange(e){
  setSelectValue(parseInt(e.target.value));

}
const visibleCustomerData = customerData.slice(0, selectValue);
/////////////////// Change Text Value/////////////////////////////

// const data = customerData.filter((customer)=>{
//   return customer.name.toLowerCase().includes(searchs.toLowerCase())
// })

const filteredCustomerData = visibleCustomerData.filter((customer) =>
  customer.fullname && customer.fullname.toLowerCase().includes(searchs.toLowerCase())
);

// Delet Customer Info
const handleDeleteClick = async (id) => {
  try {
    const res = await axios.delete(`/medicine/customer/${id}`)
    console.log(res.data);

    toast.error(res.data);
    
    setTimeout(()=>{
      window.location.reload(true)
    }, 3000)

  } catch (error) {
    console.log(error)
  }


}

console.log(searchs)
  return (
    <section>
      <ToastContainer />
      <div className="customar_list_wrapper">
        <div className="customar_list">
          {/* container header start */}

          <div className="form_header">
            <div className="title">
              <h3>Customer List</h3>
            </div>
            <div className="form_header_buttons">
              <div className="button_wrapper">
                <AiOutlinePlus />
                <Link to="/customar/add">Add Customer</Link>
              </div>
              <div className="button_wrapper">
                <GoThreeBars />
                <Link to="/customar/paid">Paid Customar</Link>
              </div>
              <div className="button_wrapper">
                <GoThreeBars />
                <Link to="/customar/cradit">Cradit Customar</Link>
              </div>
            </div>
          </div>
          {/* container header end */}

          {/* container sub header start */}
          <div className="form_sub_header">
            <div className="form_sub_header_left">
              <div className="sub_header_item1">
                <select onChange={handleChange}>
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="50">50</option>
                  <option value="10">100</option>
                  <option value="200">200</option>
                  <option value="500">500</option>
                </select>
              </div>
              <div className="sub_header_item2">
                <GrDocumentPdf />
                <SiMicrosoftexcel />
              </div>
            </div>
            <div className="form_sub_header_right">
              <div className="list_search">
                <input onChange={(e)=>setSearchs(e.target.value)} type="text" placeholder="Search...." />
                <GoSearch />
              </div>
            </div>
          </div>
          {/* container sub header end */}

          {/* container  body start */}
          <div className="table_wrapper">
            <table className="table table-hover">
              <thead className=" table-success">
                <tr>
                  <th scope="col">SL</th>
                  <th scope="col">Name</th>
                  <th scope="col">Mobile No</th>
                  <th scope="col">Email</th>
                  <th scope="col">Address</th>
                  <th scope="col">City</th>
                  <th style={{ textAlign: "center" }} scope="col">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>

                {
              filteredCustomerData.map((customer,i)=>{
                return(

                  <tr key={i}>
                  <th scope="row">{i+1}</th>
                  <td>{customer.fullname}</td>  
                  <td>{customer.mobile}</td>
                  <td>{customer.email1}</td>
                  <td>{customer.address1}</td>
                  <td>{customer.city}</td>
                  <td>
                    <div className="table_action_button">
                      <FiEdit />
                      <Link to="#" onClick={() => handleDeleteClick(customer._id)}><MdDelete/></Link> 
                    </div>
                  </td>
                </tr>

                )
              })
            }
                {
    loading && <ThreeDots 
    height="80" 
    width="80" 
    radius="9"
    color="#4fa94d" 
    ariaLabel="three-dots-loading"
    wrapperStyle={{}}
    wrapperClassName=""
    visible={true}
     />
  }
              </tbody>
            </table>
          </div>
          {/* container body end */}

          {/* container footer start */}
          {/* container footer end */}
        </div>
      </div>
    </section>
  );
};

export default CustomarList;
