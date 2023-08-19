import React, { useEffect, useState } from "react";
import { GoSearch, GoThreeBars } from "react-icons/go";
import { GrDocumentPdf } from "react-icons/gr";
import { AiOutlinePlus } from "react-icons/ai";
import { SiMicrosoftexcel } from "react-icons/si";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";


const MedicineList = () => {
  const [medicines, setMedicines] = useState([])
  const medicineList = [...medicines]

  const [loading, setLoading] = useState(false);
  const [selectValue, setSelectValue] = useState(10);
  const [searchs, setSearchs] = useState("");

  const showAllMedicine = async () =>{
    setLoading(true);
    const res = await axios.get("/medicine/medicines");
    setLoading(false);
    setMedicines(res.data);

  }

  useEffect(()=>{  
    showAllMedicine()
  },[])

  console.log(medicines)

/////////////////// Change Seletc Value/////////////////////////////
function handleChange(e){
  setSelectValue(parseInt(e.target.value));

}
const visibleMedicineData = medicineList.slice(0, selectValue);
/////////////////// Change Text Value/////////////////////////////

// const data = customerData.filter((customer)=>{
//   return customer.name.toLowerCase().includes(searchs.toLowerCase())
// })

const filteredMedicineData = visibleMedicineData.filter((medicine) =>
medicine.medicinename && medicine.medicinename.toLowerCase().includes(searchs.toLowerCase())
);

// Delet Customer Info

  return (
    <section>
      <div className="customar_list_wrapper">
        <ToastContainer />
        <div className="customar_list">
          {/* container header start */}

          <div className="form_header">
            <div className="title">
              <h3>Medicine List</h3>
            </div>
            <div className="form_header_buttons">
              <div className="button_wrapper">
                <AiOutlinePlus />
                <Link to="/medicine/add">Add Medicine</Link>
              </div>
            </div>
          </div>
          {/* container header end */}

          {/* container sub header start */}
          <div className="form_sub_header">
            <div className="form_sub_header_left">
              <div className="sub_header_item1">
                <select onChange={handleChange}>
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
                  <th scope="col">Medicine Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">Category</th>
                  <th scope="col">Type</th>
                  <th scope="col">Unit</th>
                  <th scope="col">Manufacturer</th>
                  <th scope="col">Shelf</th>
                  <th scope="col">Generic Name </th>
                  <th scope="col">Status </th>
                  <th scope="col">Image</th>
                  <th style={{ textAlign: "center" }} scope="col">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>

              {
              filteredMedicineData.map((medicine,i)=>{
                return(
                  <tr key={i}>
                  <th scope="row">{i+1}</th>
                  <td>{medicine.medicinename}</td>
                  <td>{medicine.medicineprice}</td>
                  <td>{medicine.mcategory}</td>
                  <td>{medicine.medicinetype}</td>
                  <td>{medicine.munit}</td>
                  <td>{medicine.manufacturer}</td>
                  <td>{medicine.shelf}</td>
                  <td>{medicine.genericname}</td>
                  <td>{medicine.status}</td>
                  <td>{medicine.mfeatureimage}</td>
                  <td>
                    <div className="table_action_button">
                      <FiEdit />
                      <MdDelete />
                    </div>
                  </td>
                </tr>
                )
                })}
              </tbody>
              
            </table>
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
          </div>
          {/* container body end */}

          {/* container footer start */}
          {/* container footer end */}
        </div>
      </div>
    </section>
  )
};

export default MedicineList;
