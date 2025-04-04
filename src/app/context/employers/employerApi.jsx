// if issues arise with axios import basic_url and import axios from original source from constant
//import axios from "../../../utils/axios.config";
import axios from "axios";
import {
  SUCCESS_STATUS,
  REACT_BASE_URL,
} from "../../../globals/constants";

// ADD Employer
export const addEmployer = async (data) => {
  try {
    let responseOnAddEmployer = await axios.post(
      `${REACT_BASE_URL}create-employers`,
      data
    );
    if (responseOnAddEmployer.status === SUCCESS_STATUS) {
      return responseOnAddEmployer.data;
    } else {
      return false;
    }
  } catch (err) {
    console.log(err);
    return false;
  }
};

// SEARCH Employer
export const searchEmployer = async () => {
  try {
    let responseOnSearchEmployer = await axios.get({
      /**Add Search Employer API URL here like /searchEmployer?keyword=${data}**/
    });
    if (responseOnSearchEmployer.status === SUCCESS_STATUS) {
      return responseOnSearchEmployer.data;
    } else {
      return false;
    }
  } catch (err) {
    console.log(err);
  }
};

// LIST Employer
export const employerList = async () => {
  try {
    let responseOnEmployerList = await axios.get(`${REACT_BASE_URL}employers`);

    if (responseOnEmployerList.data.status === SUCCESS_STATUS) {
      return responseOnEmployerList.data;
    } else {
      return false;
    }
  } catch (err) {
    console.log(err);
    return false;
  }
};

// VIEW Employer
export const employerProfile = async (id) => {
  try {
    let responseOnEmployerProfile = await axios.get(
      `${REACT_BASE_URL}employer-companies/${id}`
      /**Add View History API URL here like ${URL}api/getEmployerProfile/${id}**/
    );
    console.log(responseOnEmployerProfile.data.data);
    if (responseOnEmployerProfile.status == 200) {
      return responseOnEmployerProfile.data;
    } else {
      return false;
    }
  } catch (err) {
    console.log(err);
    return false;
  }
};

// UPDATE Employer
export const updateEmployer = async (id, data) => {
  try {
    let responseOnUpdateEmployer = await axios.put(
      `${REACT_BASE_URL}employers/${id}`,
      data
    );
    //console.log(responseOnUpdateEmployer);
    if (responseOnUpdateEmployer.status == 200) {
      return responseOnUpdateEmployer.data;
    } else {
      return false;
    }
  } catch (err) {
    console.log(err);
  }
};

// Update Employer Logo
// export const updateEmployerLogo = async (id, data) => {
//   try {
//     let responseOnUpdateEmployer = await axios.put(
//       `${REACT_BASE_URL}employers-logo/${id}`,
//       data
//     );
//     console.log(responseOnUpdateEmployer);
//     if (responseOnUpdateEmployer.status == 200) {
//       return responseOnUpdateEmployer.data;
//     } else {
//       return false;
//     }
//   } catch (err) {
//     console.log(err);
//   }
// };

// Update Employer Logo
export const updateEmployerLogo = async (id, data) => {
  try {
    let responseOnUpdateEmployer = await axios.put(
      `${REACT_BASE_URL}employers-logo/${id}`,
      data
    );
    console.log(responseOnUpdateEmployer);
    if (responseOnUpdateEmployer.status == 200) {
      return responseOnUpdateEmployer.data;
    } else {
      return false;
    }
  } catch (err) {
    console.log(err);
  }
};

export const updateEmployerBanner = async (id, data) => {
  try {
    let responseOnUpdateEmployer = await axios.put(
      `${REACT_BASE_URL}employers-banner/${id}`,
      data
    );
    console.log(responseOnUpdateEmployer);
    if (responseOnUpdateEmployer.status == 200) {
      return responseOnUpdateEmployer.data;
    } else {
      return false;
    }
  } catch (err) {
    console.log(err);
  }
};


// DELETE Employer
export const deleteEmployer = async (id) => {
  try {
    let responseOnDeleteEmployer = await axios.delete(
      `${REACT_BASE_URL}employers/${id}`
    );
    if (responseOnDeleteEmployer.status == 200) {
      return responseOnDeleteEmployer.data;
    } else {
      return false;
    }
  } catch (err) {
    console.error(err);
  }
};
