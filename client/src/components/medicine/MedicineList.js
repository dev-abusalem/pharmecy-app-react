import React from "react";
import { GoSearch, GoThreeBars } from "react-icons/go";
import { GrDocumentPdf } from "react-icons/gr";
import { AiOutlinePlus } from "react-icons/ai";
import { SiMicrosoftexcel } from "react-icons/si";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";


const MedicineList = () => {
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
                <select>
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
                <input type="text" placeholder="Search...." />
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
                  <th scope="col">Customar Name</th>
                  <th scope="col">Address</th>
                  <th scope="col">Mobile No</th>
                  <th scope="col">Email</th>
                  <th scope="col">City</th>
                  <th scope="col">State</th>
                  <th scope="col">Zip</th>
                  <th scope="col">First</th>
                  <th scope="col">Country</th>
                  <th style={{ textAlign: "center" }} scope="col">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Ottoabdulkarimjobeda@gmail.com</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>
                    <div className="table_action_button">
                      <FiEdit />
                      <MdDelete />
                    </div>
                  </td>
                </tr>

                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Ottoabdulkarimjobeda@gmail.com</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>
                    <div className="table_action_button">
                      <FiEdit />
                      <MdDelete />
                    </div>
                  </td>
                </tr>

                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Ottoabdulkarimjobeda@gmail.com</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>
                    <div className="table_action_button">
                      <FiEdit />
                      <MdDelete />
                    </div>
                  </td>
                </tr>

                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Ottoabdulkarimjobeda@gmail.com</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>
                    <div className="table_action_button">
                      <FiEdit />
                      <MdDelete />
                    </div>
                  </td>
                </tr>

                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Ottoabdulkarimjobeda@gmail.com</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>
                    <div className="table_action_button">
                      <FiEdit />
                      <MdDelete />
                    </div>
                  </td>
                </tr>

                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Ottoabdulkarimjobeda@gmail.com</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>
                    <div className="table_action_button">
                      <FiEdit />
                      <MdDelete />
                    </div>
                  </td>
                </tr>

                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Ottoabdulkarimjobeda@gmail.com</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>
                    <div className="table_action_button">
                      <FiEdit />
                      <MdDelete />
                    </div>
                  </td>
                </tr>

                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Ottoabdulkarimjobeda@gmail.com</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>
                    <div className="table_action_button">
                      <FiEdit />
                      <MdDelete />
                    </div>
                  </td>
                </tr>

                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Ottoabdulkarimjobeda@gmail.com</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>
                    <div className="table_action_button">
                      <FiEdit />
                      <MdDelete />
                    </div>
                  </td>
                </tr>

                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Ottoabdulkarimjobeda@gmail.com</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>
                    <div className="table_action_button">
                      <FiEdit />
                      <MdDelete />
                    </div>
                  </td>
                </tr>

                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Ottoabdulkarimjobeda@gmail.com</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>
                    <div className="table_action_button">
                      <FiEdit />
                      <MdDelete />
                    </div>
                  </td>
                </tr>

                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Ottoabdulkarimjobeda@gmail.com</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>
                    <div className="table_action_button">
                      <FiEdit />
                      <MdDelete />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
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
