export default function Landing({ setSalesman, navigate }) {
  function handleSubmit(e) {
    e.preventDefault();
    setSalesman(e.target[0].value);
    navigate("/product");
  }
  return (
    <>
      <h1>who did you order from?</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" name="Child" />
        <button type="submit">Enter</button>
      </form>
    </>
  );
}
