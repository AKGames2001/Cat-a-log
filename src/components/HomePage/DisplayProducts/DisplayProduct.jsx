import React from "react";
import { useNavigate } from "react-router-dom";

function DisplayProduct(props) {
  const navigate = useNavigate();

  function redirectPage(id) {
    navigate("/product/" + id);
  }

  function mapper(arr) {
    return arr.map((ele) => (
      <>
        <div style={catalogueRow}>
          <div key={ele[0].id} style={catalogueItem}>
            <img
              style={catalogueImage}
              src={ele[0].images[0]}
              alt="/"
              onClick={(event) => redirectPage(ele[0].id, event)}
            />
            <div style={catalogueInfo}>
              <h4>{ele[0].title}</h4>
              <p>${ele[0].price}</p>
            </div>
          </div>
          {ele.length > 1 ? (
            <div key={ele[1].id} style={catalogueItem}>
              <img
                style={catalogueImage}
                src={ele[1].images[0]}
                alt="/"
                onClick={(event) => redirectPage(ele[1].id, event)}
              />
              <div style={catalogueInfo}>
                <h4>{ele[1].title}</h4>
                <p>${ele[1].price}</p>
              </div>
            </div>
          ) : (
            <></>
          )}

          {ele.length > 2 ? (
            <div key={ele[2].id} style={catalogueItem}>
              <img
                style={catalogueImage}
                src={ele[2].thumbnail}
                alt="/"
                onClick={(event) => redirectPage(ele[2].id, event)}
              />
              <div style={catalogueInfo}>
                <h4>{ele[2].title}</h4>
                <p>${ele[2].price}</p>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </>
    ));
  }

  function arrIterator() {
    let counter = 0;
    let slicedData = [];

    props.isMobile
      ? props.data.forEach((element) => {
          let temp = [];
          temp.push(element);
          slicedData.push(temp);
        })
      : props.data.forEach((element) => {
          // Counter to seprate the data into Rows
          if (counter % 3 === 0) {
            if (counter + 3 < props.data.length) {
              slicedData.push(props.data.slice(counter, counter + 3));
            } else if (counter !== 0) {
              slicedData.push(props.data.slice(counter));
            } else {
              console.log("Data is Empty");
            }
            counter++;
          } else {
            counter++;
          }
        });

    return mapper(slicedData);
  }
  const rootStyle = {
    height: "100%"
  };

  const catalogueRow = {
    display: "flex",
    width: "100%",
    columnGap: "40px",
  };

  const catalogueItem = {
    display: "flex",
    width: "33.33%",
    flexFlow: "column",
    alignItems: "center",
  };

  const catalogueImage = {
    width: "200px",
    height: "200px",
  };

  const catalogueInfo = {
    display: "flex",
    marginBottom: "20px",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  };

  return (
    <>
      <div style={rootStyle} id="root">
        {arrIterator()}
      </div>
    </>
  );
}

export default DisplayProduct;
