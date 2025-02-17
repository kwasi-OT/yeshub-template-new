import React, { createContext, useState, useEffect, useContext } from "react";
import { SUCCESS_STATUS, LIST_ON_PAGES } from "../../../globals/constants";
import { notify } from "../../../utils/responseUtils";

import {
  addSkills,
  searchSkills,
  skillsList,
  skillsProfile,
  updateSkills,
  deleteSkills,
} from "./skillsApi";
import { SKILLSFIELD } from "../../../globals/skills-data";
import { GlobalApiData } from "../global/globalContextApi";


export const SkillsApiData = createContext();

const SkillsApiDataProvider = (props) => {
	const [formData, setFormData] = useState(
		SKILLSFIELD.fieldDetail.reduce((acc, field) => {
			acc[field.name] = "";
			return acc;
		}, {})
	);
	

	const { title, ...filteredData } = {
		...formData,
		skill: formData.title,
	};
	console.log("filteredData-skills", filteredData);

	const { selectedId } = useContext(GlobalApiData);

	const [skills, setSkills] = useState([]);

	const [skill, setSkill] = useState({});

	useEffect(() => {
		if (!selectedId) {
			return;
		}
		const fetchSkill = async () => {
			try {
				const res = await skillsProfile(selectedId);

				console.log("get-skill", res);
				const data = res.data.data;
				console.log("skill", data.skill);
				setSkill(data);

				setFormData({
					skill: data.skill || "",
				});
			} catch (err) {
				console.error("failed to get skill", err);
			}
		};
		fetchSkill();
	}, [selectedId]);

	useEffect(() => {
		const fetchAllSkills = async () => {
			try {
				const res = await skillsList();

				console.log("get-all-skills", res);
				const data = res?.data;
				setSkills(data);
			} catch (error) {
				console.error("get-all-skills-failed", error);
			}
		};
		fetchAllSkills();
	}, []);

	

	const handleChange = (field, data) => {
		setFormData((prev) => ({ ...prev, [field]: data }));
	};

	const processAddSkills = async (data) => {
		try {
			const res = await addSkills(data);
			console.log("processAddSkills", res);
			
			// Safely add new skill
			if (res && res.data) {
				setSkills((prevSkills) => [...prevSkills, res.data]);
				notify('Skill added successfully', 'success');
			} else {
				notify('Failed to add skill', 'error');
			}
		} catch (error) {
			console.error("Add Skills Error:", error);
			notify('Error adding skill', 'error');
		}
	};

	useEffect(() => {
		const processGetAllSkills = async () => {
			try {
				const res = await skillsList();
				console.log("get all skills:", res)
				
				const skills = res.data;
				console.log("skills data:", skills)
				// Safely set skills
				if (Array.isArray(skills)) {
					setSkills(skills);
				} else {
				setSkills([]);
				notify('No skills found', 'warning');
				}
			} catch (error) {
				console.error("get-all-skills-failed", error);
				setSkills([]);
				notify('Failed to fetch skills', 'error');
			}
		};
		processGetAllSkills();
	}, []);

	const processSkillsProfile = async (id) => {
		try {
			const res = await skillsProfile(id);

			console.log("get-skill", res);
			return res;
		} catch (err) {
			console.error("failed to get skill", err);
		}
	};

	const processSearchSkills = async (data) => {};

	const processUpdateSkills = async (id, data) => {
		try {
			const res = await updateSkills(id, data);
  
			console.log("update-skill", res);
			return res;
		} catch (e) {
			console.error("Error updating skill", e);
		}
	};

	const processDeleteSkills = async (id) => {
		try {
			const res = await deleteSkills(id);

			console.log("delete-skill", res);
			return res;
		} catch (e) {
			console.error("Failed to delete skill", e);
		}
  };
  
	const handleAddSkills = async (e) => {
	   console.log("submitting skills", filteredData);
		e.preventDefault();
		try {
			const res = await processAddSkills(filteredData);
			console.log("add-skills", res);
		} catch (e) {
			console.error("failed to add skills", e);
		} finally {			
			setFormData({
				skill: "",	
			});
		}
  };
  

	 const handleUpdateSkills = async (e) => {
			e.preventDefault();
			try {
				const res = await processUpdateSkills("1",filteredData);
				console.log("add-skills", res);
			} catch (e) {
				console.error("failed to add skills", e);
			} finally {
				// setFormData(filteredData);
				setFormData({
					skill: "",
					description: "",
				});
			}
		};



	return (
		<SkillsApiData.Provider
			value={{
				skill,
				skills,
				formData,
				filteredData,
				processAddSkills,
				processSkillsProfile,
				processSearchSkills,
				processUpdateSkills,
				processDeleteSkills,

				setFormData,
				handleChange,
				handleAddSkills,
				handleUpdateSkills,
			}}
		>
			{props.children}
		</SkillsApiData.Provider>
	);
};

export default SkillsApiDataProvider;
