const Select = ({ values, callback, selected }) => {
  return (
    <select
      disabled={disabled}
      readOnly={readonly}
      onChange={({ target: { value } }) => callback(value)}
    >
      {values.map(([value, text]) => (
        <option selected={selected === value} value={value}>
          {text}
        </option>
      ))}
    </select>
  );
}

const Select = ({ values, callback, selected }) => {
  return (
    <select
      disabled={disabled}
      readOnly={readonly}
      defaultValue={selected}
      onChange={({ target: { value } }) => callback(value)}
    >
      {values.map(([value, text]) => (
        <option value={value}>
          {text}
        </option>
      ))}
    </select>
  );
}
