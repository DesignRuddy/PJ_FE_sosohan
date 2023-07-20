import React, { useEffect, useState } from 'react';
const AddressPopup = () => {
  const [keyword, setKeyword] = useState('');
  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);


  useEffect(() => {
    const handleAddressSelection = (event) => {
      const { roadAddr, jibunAddr, zipNo } = event.data;
      setSelectedAddress({ roadAddr, jibunAddr, zipNo });
      if (window.opener && typeof window.opener.setMainAddress === 'function') {
        window.opener.setMainAddress(roadAddr); // 부모 창의 setMainAddress 함수 호출
      }

    };

    window.addEventListener('message', handleAddressSelection);

    return () => {
      window.removeEventListener('message', handleAddressSelection);
    };
  }, []);

  const handleSearch = async () => {
    const url = 'https://business.juso.go.kr/addrlink/addrLinkApi.do';
    const confmKey = 'devU01TX0FVVEgyMDIzMDcxNDEwMDMwMTExMzkyNzM=';
    const currentPage = 1;
    const countPerPage = 5;
  
    try {
      const response = await fetch(
        `${url}?confmKey=${confmKey}&currentPage=${currentPage}&countPerPage=${countPerPage}&keyword=${keyword}&resultType=json`
      );
  
      if (!response.ok) {
        throw new Error('API request failed');
      }
  
      const jsonStr = await response.json();
  
      const errCode = jsonStr.results.common.errorCode;
      const errDesc = jsonStr.results.common.errorMessage;
  
      if (errCode !== '0') {
        alert(errCode + '=' + errDesc);
      } else {
        if (jsonStr.results.juso) {
            setAddresses(jsonStr.results.juso);
            // 주소 검색 결과가 표시된 후에 팝업 창을 닫음
   
          }
      }
    } catch (error) {
      console.error(error);
      alert('에러발생');
    }
  };
  
  const chooseAddress = (roadAddr, jibunAddr, zipNo) => {
    const aParam = {
      roadAddr,
      jibunAddr,
      zipNo,
    };
  
    if (window.opener && typeof window.opener.callback_openAddressPopup === 'function') {
      window.opener.callback_openAddressPopup(aParam);
    }
  
    window.close();
  };
  
  

  return (
    <div className="container" style={{ marginTop: '25px' }}>
      <div className="text-center">
        <form
          name="searchForm"
          id="searchForm"
          method="post"
          className="navbar-form navbar-left"
          role="search"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            name="keyword"
            id="keyword"
            className="form-control"
            placeholder="도로명+건물번호, 건물명, 지번을 입력하세요!"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <button className="btn btn-default" onClick={handleSearch}>
            주소검색하기
          </button>
        </form>
      </div>

      <div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>주소</th>
              <th>우편번호</th>
            </tr>
          </thead>
          <tbody>
          {addresses.map((address, index) => (
  <tr
    key={`${address.zipNo}-${index}`}
    onClick={() => chooseAddress(address.roadAddr, address.jibunAddr, address.zipNo)}
  >
    <td>
      <dl>{address.roadAddr}</dl>
      <dl>{address.jibunAddr}</dl>
    </td>
    <td>{address.zipNo}</td>
  </tr>
))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddressPopup;
