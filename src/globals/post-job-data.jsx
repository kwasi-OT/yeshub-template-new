export const POSTJOBFIELD = {
  fieldDetail: [
    {
      id: 1,
      name: "job_title",
      label: "Job Title",
      type: "text",
      placeholder: "Data Analysis Expert",
      icon: "fs-input-icon fa fa-address-card",
      box: "ls-inputicon-box",
    },
    {
      id: 2,
      name: "job_category_id",
      label: "Job Category",
      type: "text",
      options: [
        { id: 1, name: "Graphic Design" },
        { id: 2, name: "Video Production" },
        { id: 3, name: "Programming" },
        { id: 4, name: "Hospitability" },
        { id: 5, name: "Catering" },
      ],
      icon: "fs-input-icon fa fa-border-all",
      box: "ls-inputicon-box",
    },
    {
      id: 3,
      name: "job_type",
      label: "Job Type",
      type: "text",
      options: [
        { id: 1, name: "Full Time" },
        { id: 2, name: "Freelance" },
        { id: 3, name: "Part Time" },
        { id: 4, name: "Internship" },
        { id: 5, name: "Temporary" },
      ],
      icon: "fs-input-icon fa fa-border-all",
      box: "ls-inputicon-box",
    },
    {
      id: 4,
      name: "salary",
      label: "Offered salary  (if needed)",
      type: "number",
      placeholder: "0.00",
      icon: "fs-input-icon fa fa-dollar-sign",
      box: "ls-inputicon-box",
    },
    {
      id: 5,
      name: "experience",
      label: "Experience",
      type: "text",
      options: [
        { id: 1, name: "1 year" },
        { id: 2, name: "2 years" },
        { id: 3, name: "3 years" },
        { id: 4, name: "4 years" },
        { id: 5, name: "5 years" },
        { id: 6, name: "6+ years" },
        { id: 7, name: "7+ years" },
        { id: 8, name: "8+ years" },
        { id: 9, name: "9+ years" },
        { id: 10, name: "10+ years" },
        { id: 11, name: "11+ years" },
        { id: 12, name: "12+ years" },
      ],
      placeholder: "Eg Minimum 3 years",
      icon: "fs-input-icon fa fa-user-edit",
      box: "ls-inputicon-box",
    },
    {
      id: 6,
      name: "qualification",
      label: "Qualification",
      type: "text",
      placeholder: "Qualification Title",
      icon: "fs-input-icon fa fa-user-graduate",
      box: "ls-inputicon-box",
    },
    {
      id: 7,
      name: "budget",
      label: "Budget (if needed)",
      type: "number",
      placeholder: "0.00",
      icon: "fs-input-icon fa fa-dollar-sign",
      box: "ls-inputicon-box",
    },

    {
      id: 8,
      name: "skills_id",
      label: "Skills",
      type: "text",
      placeholder: "Writer, Graphic Design",
      icon: "fs-input-icon fa fa-map-pin",
      box: "ls-inputicon-box",
    },

    {
      id: 9,
      name: "duty",
      label: "Duty",
      type: "text",
      placeholder: "Duty",
      icon: "fs-input-icon fa fa-map-pin",
      box: "ls-inputicon-box",
    },

    {
      id: 10,
      name: "description",
      label: "Description (Skills Required)",
      type: "text",
      placeholder: "We are doing well",
      icon: "fs-input-icon fa fa-map-pin",
      box: "ls-inputicon-box",
    },
    {
      id: 11,
      name: "start_date",
      label: "Start Date",
      type: "date",
      placeholder: "dd/mm/yyyy",
      icon: "fs-input-icon far fa-calendar",
      box: "ls-inputicon-box",
    },
    {
      id: 12,
      name: "end_date",
      label: "End Date",
      type: "date",
      placeholder: "dd/mm/yyyy",
      icon: "fs-input-icon far fa-calendar",
      box: "ls-inputicon-box",
    },
  ],
};
