export const DropDown = ({ getFilter }) => {
  return (
    <div style={{ marginTop: 50, marginLeft: 0 }}>
      <label for="filter" style={{ marginRight: 20 }}>
        Filter
      </label>
      <select
        id="filter"
        name="filter"
        onChange={e => {
          getFilter(e.target.value);
        }}
      >
        <option value="customerAddress">Адресса</option>
        <option value="customerName">ПІБ</option>
        <option value="phone">телефон</option>
        <option value="nametechnique">назва техніки</option>
        <option value="brend">Бренд</option>
        <option value="model">Модель</option>
        <option value="cost">вартість</option>
      </select>
    </div>
  );
};
