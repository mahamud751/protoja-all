import React, { useEffect, useState } from "react";
import img from "../../img/college/Icon material-delete.png";
import img3 from "../../img/college/Icon feather-edit.png";
import axios from "axios";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import ToolkitProvider, {
  CSVExport,
} from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min";
import paginationFactory from "react-bootstrap-table2-paginator";
import BootstrapTable from "react-bootstrap-table-next";
import { useQuery } from "react-query";

import { Link } from "react-router-dom";
import jsPDF from "jspdf";
import "jspdf-autotable";
import Supplier from "../../pages/edit/Supplier";

const Supplier_list = () => {
  const MySwal = withReactContent(Swal);

  const { data, error, refetch } = useQuery("supplier", async () => {
    const response = await axios.get("https://api.yarnlink.com/api/supplier", {
      mode: "cors",
    });
    return response.data;
  });

  useEffect(() => {
    if (error) {
      console.error("Error fetching banner data:", error);
    }
  }, [error, data]);

  const columns = [
    {
      text: "No",
      formatter: (cellContent, row, index) => {
        return (
          <>
            {" "}
            <p>{index + 1}</p>
          </>
        );
      },
    },
    {
      text: "Image",
      formatter: (cellContent, row) => {
        return (
          <div>
            <img
              src={row.photos && row.photos[0]}
              alt=""
              style={{ width: 120 }}
            />
          </div>
        );
      },
    },
    {
      dataField: "name",
      text: "Supplier",
    },
    {
      text: "Action",
      formatter: (cellContent, row) => {
        return (
          <>
            {" "}
            <div className="d-flex justify-content-center">
              <img
                src={img3}
                alt=""
                data-toggle="modal"
                data-target={`#loginModal${row._id}`}
              />
              <img
                src={img}
                alt=""
                className="ms-3"
                onClick={() => handleSupplier(row._id)}
              />
            </div>
            <div
              className="modal fade"
              id={`loginModal${row._id}`}
              tabIndex="{-1}"
              role="dialog"
              aria-labelledby="loginModal"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content" style={{ width: 700 }}>
                  <div className="modal-body">
                    <Supplier data={row} refetch={refetch} />
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      },
    },
  ];
  const pagination = paginationFactory({
    page: 1,
    sizePerPage: 10,
    style: { width: 60 },
    lastPageText: "Last",
    firstPageText: "First",
    nextPageText: "Next",
    prePageText: "Previous",
    showTotal: true,
    alwaysShowAllBtns: true,
    onPageChange: function (page, sizePerPage) {
      console.log("page", page);
      console.log("sizePerPage", sizePerPage);
    },
    onSizePerPageChange: function (page, sizePerPage) {
      console.log("page", page);
      console.log("sizePerPage", sizePerPage);
    },
  });

  //delete
  const [supplier, setSuppliers] = useState(data);
  const handleSupplier = async (id) => {
    const confirmation = window.confirm("Are you Sure?");
    if (confirmation) {
      const url = `https://api.yarnlink.com/api/supplier/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          MySwal.fire("Good job!", "successfully deleted", "success");
          if (data.deletedCount === 1) {
            const remainItem = supplier.filter((item) => item._id !== id);
            setSuppliers(remainItem);
          }
        });
    }
  };

  return (
    <div className="wrapper">
      <div className="content-wrapper" style={{ background: "unset" }}>
        <section className="content customize_list">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-7">
                <h6 className="college_h6">Supplier List</h6>
              </div>
              <div className="export_btn_main">
                <div>
                  <div className="">
                    <div className="corporate_addNew_btn">
                      <Link to={"/add_supplier"}>
                        <button className="college_btn2 ms-4 p-3">
                          Add New
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr style={{ height: "1px", background: "rgb(191 173 173)" }} />
            <div className="card">
              <div className="card-body card_body_sm">
                <>
                  <ToolkitProvider
                    bootstrap4
                    keyField="_id"
                    columns={columns}
                    data={data || []}
                    pagination={pagination}
                    exportCSV
                  >
                    {(props) => (
                      <React.Fragment>
                        <BootstrapTable
                          bootstrap4
                          keyField="_id"
                          columns={columns}
                          data={data || []}
                          pagination={pagination}
                          {...props.baseProps}
                        />
                      </React.Fragment>
                    )}
                  </ToolkitProvider>
                </>
              </div>
            </div>
            {/* /.row (main row) */}
          </div>
          {/* /.container-fluid */}
        </section>
        {/* /.content */}
      </div>
      {/* /.content-wrapper */}

      {/* Control Sidebar */}
    </div>
  );
};

export default Supplier_list;
