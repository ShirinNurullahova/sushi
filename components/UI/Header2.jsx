import React, { useEffect, useRef, useState } from "react";
import logo from "../../public/logo2.png";
import right from "../../public/right.png";

import Image from "next/image";
const Header2 = ({ data, placeholder }) => {
 
  const [isOpen, setIsOpen] = React.useState(false);

  const [isExist, setIsExist] = React.useState(false)

  const [filteredData, setFilteredData] = useState(data);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
  
    const searchWord = event.target.value;
  

    if(event.target.value.length > 0){
      setIsExist(true)
    }else{
      setIsExist(false)
    }

    
    
    
    setWordEntered(searchWord.toUpperCase());
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });
    // console.log(newFilter)
    const newarr = newFilter.map(e => {
      return {
        'title': e.title.toUpperCase(),
        'link': e.link
      }
    })
    if (searchWord === "") {
      setFilteredData([]);
      // console.log('lk');
    } else {
      setFilteredData(newarr);

    }

  };
  const clearInput = (event) => {
    setFilteredData([])
    setWordEntered("")

  }
  const searchRef = useRef(null);
  const searchLi = useRef(null);


  

  useEffect(

    (e) => {
      if (isOpen) {
        searchRef.current.focus();

      }

      document.body.addEventListener("click", (e) => {
        if (e.target.className && typeof e.target.className === "string") {
          if (
            !e.target.className?.includes("search-icon") &&
            !e.target.className?.includes("search-input")
          ) {
            setIsOpen(false);
          }
        } else {
          setIsOpen(false);
        }
      });

    },
    [isOpen]
  );

  return (
    <header className={`d-flex-justify d-flex p-135  header2 ${isExist ? 'active-header': ""}`}>
      <div
        className="logo"
        // if isOpen is true, marginRight is 99px
        style={{
          marginRight: isOpen ? "99px" : "0px",
          flex: isOpen ? "0 0 auto" : "1.3 0 auto",
        }}
      >
        <Image src={logo} alt="logo" />
      </div>
      {isOpen && (
        <div className="search-bar" >
          <span>Search</span>
          <div className={`search-div ${isExist ? 'active-div' : ""}`}>


            <label className="label">
              <input
                className={`search-input ${filteredData.length != 0 && 'jk'} ${isExist ? 'active-input': ""}`}
                ref={searchRef}
                type="text"
                placeholder={placeholder}
                value={wordEntered}
                onChange={handleFilter}
              />
              <svg width="8" height="15" viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 14L6.61364 7.5L0.999999 1" stroke="#838383" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </label>

            {filteredData.length != 0 && (
              <div className={`bottom-div ${filteredData.length && wordEntered && 'var'} ${isExist? 'active-bottom': ""}`} >
                {filteredData.slice(0, 5).map((value, index) => {
                  return (

                    <p key={index} className="dataItem" onClick={clearInput} >
                      {value.title}
                    </p>


                  );
                })}
              </div>
            )}






          </div>
        </div>
      )}
      <nav
        className="nav"
        style={{
          flex: isOpen ? "0.1 0 auto" : "1 1 auto",
          marginLeft: isOpen ? "50px" : "0",
        }}
      >
        <ul className="d-flex d-flex-justify align-center">
          {!isOpen && (
            <li
              ref={searchLi}
              onClick={(e) => {
                setIsOpen(true);
                searchRef.current?.focus();
              }}
              className="pointer search-icon"
            >
              Search
            </li>
          )}
          <li className="pointer">bag (0)</li>
          <li className="pointer">English</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header2;
