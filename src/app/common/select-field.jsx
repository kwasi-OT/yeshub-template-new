function SelectField({
	field,
	value,
	options,
	change,
	icon="user-edit"
	
}) {
	const handleInputChange = (e) => {
		change(field.name, e.target.value);
	};

	return (
		<div className="form-group">
			<label>{field.label}</label>
			<div className="ls-inputicon-box">
				<select
					// wt-select-box selectpicker

					className=" form-control wt-select-box bg-red"
					data-live-search="true"
					id={field.id}
					name={field.name}
					value={value[field.name]}
					onChange={handleInputChange}
				>
					<option className="bs-title-option" value="">
						{field.placeholder || "Select an option"}
					</option>
					{options.map((option, i) => (
						<option key={i}>
							{option}
						</option>
					))}
				</select>
				<i className={`fs-input-icon fa fa-${icon}` }/>
			</div>
		</div>
	);
}

export default SelectField;
