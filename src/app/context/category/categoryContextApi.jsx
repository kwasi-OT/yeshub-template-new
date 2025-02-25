import React, { createContext, useState, useContext } from "react";


import {
  addCategory,
  catgoryList,
  categoryProfile,
  updateCategory,
  deleteCategory,
} from "./categoryApi";
import { CATEGORYFIELD } from "../../../globals/category-data";
import { GlobalApiData } from "../global/globalContextApi";
import toast from "react-hot-toast";

export const CategoryApiData = createContext();

const CategoryApiDataProvider = (props) => {

  const { selectedId } = useContext(GlobalApiData)
 
	const initialData = CATEGORYFIELD.fieldDetail.reduce((acc, field) => {
		acc[field.name] = "";
		return acc;
	}, {});

	const [formData, setFormData] = useState(initialData);

	console.log("form-category", formData);


	






	const processAddCategory = async (data) => {
		try {
			const res = await addCategory(data);
			console.log("add-category", res);	
				return res;
			
		} catch (error) {
			console.error("Error adding categories:", error);
		} finally {
			setFormData(initialData)
		}
	};

	const processGetAllCategory = async () => {
	try {
			const res = await catgoryList();
			console.log("getall-category", res);

				return res;
			
		} catch (error) {
			console.error("error getting all", error);
		}
	};

	

	

	const processCategoryProfile = async (id) => {
		try {
			const res = await categoryProfile(id);
			console.log("add-category", res);

			if (res) {
					
				return res;
			}
		} catch (error) {

			console.error("Error fetching category:", error);
			
		}
	};

	const processSearchCategory = async () => {};

	const processUpdateCategory = async (id, data) => {
		try {
			const res = await updateCategory(id, data);
		
			
				return res;
			
		} catch (error) {
			console.error("Error fetching category:", error);
			
		} finally {
			setFormData(initialData)
		}
	};

	const processDeleteCategory = async (id) => {
		try {
			const res = await deleteCategory(id);
			return res;
			
		} catch (error) {
			return false;
			
		}
	};

	const handleAddCategory = async (e) => {
		e.preventDefault();
		try {
			console.log("formdata-cat", formData);
			const res = await processAddCategory(formData);
			console.log("add-category", res);
			toast.success("Category added successfully");
		} catch (err) {
			console.error("failed to add-category", err);
		} finally {
			setFormData(initialData);
		}
	};

	const handleUpdateCategory = async (e) => {
		e.preventDefault();
	

    try {
    
		await processUpdateCategory(selectedId, formData);
		
		toast.success("Category updated successfully");
		
		} catch (err) {
			
			toast.error("Failed to update category");
	} finally {
		setFormData(initialData)
		}
};
  
 

	return (
		<CategoryApiData.Provider
			value={{
				formData,
				setFormData,
				processAddCategory,
				processGetAllCategory,
				processCategoryProfile,
				processSearchCategory,
				processUpdateCategory,
				processDeleteCategory,
				handleAddCategory,
				handleUpdateCategory,
			}}
		>
			{props.children}
		</CategoryApiData.Provider>
	);
};

export default CategoryApiDataProvider;
